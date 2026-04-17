---
title: "발화 검수 상태 서버 저장 (reviewed_at / reviewed_by)"
status: active
created: 2026-04-17
type: feature
---

# Implementation Plan: 발화 검수 상태 서버 저장

## Overview

발화 검수 완료 여부를 클라이언트 snapshot 비교 대신 DB의 `reviewed_at` / `reviewed_by` 필드로 저장한다. 페이지 새로고침, 다른 관리자 인수인계 시에도 검수 진행 상황이 유지된다.

## Requirements Restatement

- 발화 레코드에 검수 시각(`reviewed_at`)과 검수자(`reviewed_by`) 서버 저장
- 검수 진행률 = `reviewed_at IS NOT NULL` 건수 / 전체 건수 (서버 기반)
- 포함/제외 토글 시 자동으로 `reviewed_at`/`reviewed_by` 기록
- 기존 자동필터(3초미만/C등급/beep30%+) 제외 건도 백필
- 클라이언트 snapshot 로직 전면 제거
- 페이지 새로고침 후에도 진행률 유지
- 백엔드 API 변경 없이 기존 호출 패턴 유지 (PATCH 단건)

## Implementation Phases

### Phase 1: DB 스키마 + 백필 (1 file)

1. **마이그레이션 038 생성** (File: `uncounted-api/supabase/migrations/038_utterance_review_tracking.sql`)
   - Action: `utterances` 테이블에 `reviewed_at TIMESTAMPTZ`, `reviewed_by TEXT` 추가. 인덱스 2개 (`idx_utt_reviewed`, `idx_utt_session_reviewed`) 생성. 기존 자동필터/수동 제외 건 백필
   - Why: 검수 여부를 영구 저장하고, 미검토 필터 성능을 보장
   - Dependencies: None
   - Risk: Low — nullable 컬럼 추가, 기존 데이터 무영향

```sql
ALTER TABLE utterances ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMPTZ;
ALTER TABLE utterances ADD COLUMN IF NOT EXISTS reviewed_by TEXT;

CREATE INDEX IF NOT EXISTS idx_utt_reviewed ON utterances(reviewed_at);
CREATE INDEX IF NOT EXISTS idx_utt_session_reviewed ON utterances(session_id, reviewed_at);

-- 자동필터 제외 건 백필
UPDATE utterances
SET reviewed_at = created_at,
    reviewed_by = 'system:auto-filter'
WHERE exclude_reason IN ('too_short', 'low_grade', 'high_beep')
  AND reviewed_at IS NULL;

-- 수동 제외 건 백필 (검수자 불명 → NULL)
UPDATE utterances
SET reviewed_at = COALESCE(updated_at, created_at),
    reviewed_by = NULL
WHERE review_status = 'excluded'
  AND exclude_reason = 'manual'
  AND reviewed_at IS NULL;
```

### Phase 2: API 엔드포인트 수정 (2 files)

2. **PATCH review-status에 reviewed_at 자동 설정** (File: `uncounted-api/src/routes/admin-utterances.ts`, lines 175-201)
   - Action: `.update()` 페이로드에 `reviewed_at: new Date().toISOString()`, `reviewed_by: userId` 추가
   - Why: 포함/제외 토글 = 검수 행위. 매 토글마다 최신 검수자/시각 갱신
   - Dependencies: Step 1
   - Risk: Low

```diff
  const { error } = await supabaseAdmin
    .from('utterances')
    .update({
      review_status: isIncluded ? 'pending' : 'excluded',
      exclude_reason: isIncluded ? null : (excludeReason ?? 'manual'),
+     reviewed_at: new Date().toISOString(),
+     reviewed_by: userId,
      updated_at: new Date().toISOString(),
    })
    .eq('id', utteranceId)
```

3. **GET utterances 응답에 reviewedAt/reviewedBy 포함** (File: `uncounted-api/src/routes/admin-exports.ts`, lines 653-700)
   - Action: camelCase 매핑에 `reviewedAt: u.reviewed_at`, `reviewedBy: u.reviewed_by` 추가 (`excludeReason` 뒤, `transcriptText` 앞)
   - Why: 어드민이 로드 시 서버 데이터로 진행률 계산
   - Dependencies: Step 1
   - Risk: Low — 기존 필드에 추가, 하위 호환

### Phase 3: 어드민 타입 (1 file)

4. ✅ **ExportUtterance 타입 확장** (File: `uncounted-admin/src/types/export.ts`, line 74 뒤)
   - Action: `reviewedAt?: string`, `reviewedBy?: string` 추가
   - Why: API 응답 타입 일치
   - Dependencies: None
   - Risk: Low
   - **DONE** (commit 87ccf07, 2026-04-17)

### Phase 4: 어드민 로직 수정 (4 files)

5. ✅ **useUtteranceReview — snapshot 제거 + 서버 기반 카운팅** (File: `uncounted-admin/src/hooks/useUtteranceReview.ts`)
   - Action:
     - `initialSnapshotMap` state 제거
     - `setInitialSnapshot` 콜백 제거
     - `reviewedCount` → `utterances.filter(u => u.reviewedAt != null).length`
     - `UseUtteranceReviewReturn`에서 `initialSnapshotMap`, `setInitialSnapshot` 제거
   - Why: snapshot 비교를 서버 필드로 완전 대체
   - Dependencies: Steps 3, 4
   - Risk: Low
   - **DONE** (commit 87ccf07, 2026-04-17)

```typescript
// NEW: 서버 데이터 기반
const reviewedCount = useMemo(() => {
  return utterances.filter(u => u.reviewedAt != null).length
}, [utterances])
```

6. ✅ **useUtteranceFilters — snapshot 의존 제거** (File: `uncounted-admin/src/hooks/useUtteranceFilters.ts`)
   - Action:
     - `UseUtteranceFiltersOptions`에서 `initialSnapshotMap` 제거
     - `'unreviewed'` 필터: `u.reviewedAt == null`
     - `counts.unreviewed`: `u.reviewedAt == null`
     - useMemo 의존성에서 `initialSnapshotMap` 제거
   - Why: 서버 필드 기반으로 통일, 로직 단순화
   - Dependencies: Step 4
   - Risk: Low
   - **DONE** (commit 87ccf07, 2026-04-17)

7. ✅ **UtteranceReviewSection — snapshot props 제거** (File: `uncounted-admin/src/components/domain/UtteranceReviewSection.tsx`)
   - Action:
     - `review` 분해에서 `initialSnapshotMap` 제거
     - `useUtteranceFilters({ utterances })` — `initialSnapshotMap` 인자 제거
   - Dependencies: Steps 5, 6
   - Risk: Low
   - **DONE** (commit 87ccf07, 2026-04-17)

8. ✅ **AdminExportJobDetailPage — setInitialSnapshot 제거** (File: `uncounted-admin/src/pages/admin/AdminExportJobDetailPage.tsx`)
   - Action:
     - `const { setInitialSnapshot, ...review }` → `const review = useUtteranceReview({...})`
     - `handleLoadUtterances`에서 `setInitialSnapshot(data)` 호출 제거
   - Dependencies: Step 5
   - Risk: Low
   - **DONE** (commit 87ccf07, 2026-04-17)

## Testing Strategy

- **DB 검증**: 마이그레이션 적용 후 백필 건수 확인 (`SELECT COUNT(*) ... WHERE reviewed_at IS NOT NULL`)
- **API 검증**: PATCH 호출 후 DB에 `reviewed_at`/`reviewed_by` 저장 확인
- **프론트 검증**:
  1. 발화 로드 → 진행률이 서버 데이터 반영
  2. 포함/제외 토글 → 진행률 증가
  3. **F5 새로고침 → 진행률 유지** (핵심 검증)
  4. 라벨 수정 → 진행률 변동 없음
  5. 자동필터 → 해당 건 진행률 포함
  6. 다른 관리자가 같은 job 열면 진행률 공유

## Risks & Mitigations

- **Risk**: 백필 UPDATE가 대량 행에 실행
  - Mitigation: `idx_utt_review` 인덱스 활용, nullable 조건으로 이미 처리된 행 스킵
- **Risk**: 매 토글마다 `reviewed_by` 덮어쓰기 — 최초 검수자 유실
  - Mitigation: 의도적 설계. "최근 검수자"가 운영상 더 유용
- **Risk**: 낙관적 업데이트 시 `reviewedAt`가 로컬에서 즉시 반영 안 됨
  - Mitigation: `isIncluded` 토글은 즉시 반영. 진행률은 다음 로드 시 정확. 사용자 체감에 큰 영향 없음

## Estimated Complexity: LOW-MEDIUM

- DB 마이그레이션: 15분
- API 수정: 20분
- 어드민 수정: 30분
- 테스트: 30분
- **Total: ~1.5시간**

## Success Criteria

- [ ] 발화 토글 후 DB에 `reviewed_at`, `reviewed_by` 저장됨 ← Phase 1+2 필요
- [ ] GET utterances 응답에 `reviewedAt`, `reviewedBy` 포함됨 ← Phase 2 필요
- [x] 어드민 진행률이 `reviewedAt != null` 기준으로 표시됨 (Phase 3+4 완료)
- [ ] 페이지 새로고침 후 진행률 유지 ← Phase 1+2 완료 후 검증 가능
- [x] 라벨 수정 시 진행률 변동 없음 (reviewedAt 기반이므로 라벨 변경 무관)
- [x] 자동필터 적용 건은 진행률에 포함됨 (toggleReview가 reviewedAt 갱신)
- [ ] 기존 자동필터 제외 데이터가 백필됨 ← Phase 1 마이그레이션 필요
- [ ] 다른 관리자가 같은 job 열면 진행률 공유됨 ← Phase 1+2 완료 후 검증 가능

## Progress

- Phase 3 (어드민 타입): ✅ DONE (2026-04-17)
- Phase 4 (어드민 로직): ✅ DONE (2026-04-17)
- Phase 1 (DB 마이그레이션): ⏳ PENDING — `uncounted-api/supabase/migrations/038_utterance_review_tracking.sql`
- Phase 2 (API 엔드포인트): ⏳ PENDING — `admin-utterances.ts` + `admin-exports.ts`
