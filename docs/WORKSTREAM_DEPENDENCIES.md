# WORKSTREAM_DEPENDENCIES — Uncounted v11 Export v2 작업창 의존성

> 본 문서는 6개 후속 작업창의 의존성 / 입출력 contract 명세.
> 단일 진실 문서: [SPEC_EXPORT_V2.md](SPEC_EXPORT_V2.md).
> 자동 검증 명세: [SAFETY_CHECKLIST.md](SAFETY_CHECKLIST.md).

---

## 0. 진행 규칙 (중요)

- **날짜 표현 금지**: "Day 1", "1일차", "오늘", "내일", "D+N", "N주차" 같은 표현 사용 X
- **순서/의존성만 명시**: "창 0 완료 후 창 A 시작", "창 A → 창 B" 패턴
- **각 단계 완료 후 LeeGoGke 확인 → 다음 시작**: 압박 없는 진행
- 이유: 실제 작업 시간은 외부 변수(LeeGoGke 일정, GPU 학습 등) 영향. 날짜 압박 시 품질 저하 위험.

---

## 1. 7개 창 정의

| 창 | 이름 | 핵심 작업 | 자체 포함 여부 |
|---|---|---|---|
| 창 0 | 공통 스펙 | SPEC + SAFETY + WORKSTREAM 작성 | ✅ (본 문서 자체) |
| 창 A | DB + extractor | 마이그레이션 074 + DB 조회 함수 | - |
| 창 B | gpu-worker | gpu-worker.ts / worker.py 변경 | - |
| 창 C | export-builder | ZIP 빌더 + safety scan 스크립트 | - |
| 창 D | API | 6개 엔드포인트 구현 | - |
| 창 E | Admin UI | React 컴포넌트 통합 | - |
| 창 F | 재학습 | KcELECTRA + WhisperX fine-tune | - |

---

## 2. 의존성 다이어그램

### 2.1 텍스트 다이어그램

```
                    [창 0: 공통 스펙]
                          ↓
                  (SPEC + SAFETY + WORKSTREAM)
                          ↓
                  ┌───────┴───────┐
                  ↓               ↓
            [창 A: DB+extractor]  [창 F: 재학습]  ← 완전 독립
                  ↓                  (창 0 완료 무관)
            (074 적용 + extractor)
                  ↓
        ┌─────────┴─────────┐
        ↓                   ↓
   [창 B: gpu-worker]   [창 C: export-builder]
                                  ↓
                            (ZIP contract)
                                  ↓
                            [창 D: API]
                                  ↓
                            (API contract)
                                  ↓
                            [창 E: Admin UI]
                            (Mock 선행 가능)
```

### 2.2 의존성 종류 구분

| 종류 | 의미 | 시작 가능 시점 |
|---|---|---|
| **의존 (의존성)** | 선행 작업의 산출물 자체가 필요 | 선행 작업 완료 후 |
| **참조 (참조 문서)** | 선행 작업의 문서/스펙만 있으면 진행 가능 (실제 산출물 없어도 Mock 가능) | 선행 문서 완성 후 |

예시:
- 창 D 의 "창 C 빌더" = **의존** (실제 호출)
- 창 E 의 "SPEC §6 API Contract" = **참조** (Mock 가능)
- 창 E 의 "창 D 실제 응답" = **의존** (실제 응답)

---

## 3. 각 창 입출력 Contract

### 3.0 창 0 — 공통 스펙

| 항목 | 내용 |
|---|---|
| **입력 (참조)** | 사용자 요구사항 + 기존 DB 상태 (uncounted-api/supabase/migrations/) + 기존 export-builder.ts |
| **출력 (의존 대상)** | docs/SPEC_EXPORT_V2.md, docs/SAFETY_CHECKLIST.md, docs/WORKSTREAM_DEPENDENCIES.md |
| **의존 선행 작업** | 없음 |
| **참조 문서** | prompt_plan.md STAGE 15~17 |
| **완료 조건** | LeeGoGke 검토 + 매핑표 row별 결정 확정 |

### 3.1 창 A — DB + extractor

| 항목 | 내용 |
|---|---|
| **입력 (의존)** | 창 0 산출물 (SPEC §4 매핑표, §4.8 074 적용 가이드) |
| **입력 (참조)** | 기존 마이그레이션 001~073 |
| **출력 (의존 대상)** | <ul><li>마이그레이션 074 SQL — **8 컬럼** (utterances 2 + sessions 6, SPEC §4.8.1 참조)<ul><li>utterances: `numeric_patterns` JSONB, `utterance_form` JSONB</li><li>sessions: `audio_metadata` JSONB, `conversation_context` JSONB, `support_quality_labels` JSONB, `session_topic_summary` TEXT, `session_quality_tier` TEXT, `session_dataset_eligible` BOOLEAN</li></ul></li><li>extractor 함수 시그니처 (utterances/sessions/speakers/segments/packages 조회)</li><li>변환 헬퍼 (`methodMap`, `labelOriginMap`, `predictedRoleMap` 등)</li><li>**isExportEligible(session, utterances) helper** — 안전선 #5 광의 적용 (consent_status + review_status 통합, 향후 신규 상태 확장 시 본 함수만 수정)</li></ul> |
| **참조 문서** | SPEC §4 매핑표 (변환 규칙) + SPEC §1 안전선 #5 광의 정의 |
| **선행 작업** | 창 0 |
| **완료 조건** | <ul><li>마이그레이션 074 적용 + 인덱스 생성 확인 (8 컬럼)</li><li>extractor 함수 단위 테스트 통과</li><li>변환 헬퍼 함수 매핑표 100% 커버리지</li><li>`isExportEligible()` 단위 테스트 (양성/음성 케이스)</li><li>**제외 결정 명시** (074 에 추가 X): `speech_act` 별도 컬럼 (events 재사용), `emotion_detail` (모델 미존재), boolean 4종 개별 컬럼 (utterance_form JSONB 통합)</li></ul> |

#### 3.1.1 074 컬럼 결정 배경 (참고)

외부 검토 + 사용자 결정 (2026-05-18):
- **추가**: utterances 2 + sessions 6 = **8 컬럼**
- **이연/거부**: `speech_act` (중복 회피), `emotion_detail` (모델 부재), boolean 4종 개별 (JSONB 통합)
- 원칙: YAGNI + JSONB 통합 (정규화 과다 회피) + 기존 컬럼 재사용

### 3.2 창 B — gpu-worker

| 항목 | 내용 |
|---|---|
| **입력 (의존)** | 창 A 의 마이그레이션 074 + extractor |
| **입력 (참조)** | SPEC §4 매핑표 (gpu 산출 라벨이 외부 필드로 어떻게 변환되는지) |
| **출력 (의존 대상)** | <ul><li>변경된 uncounted-api/src/services/gpu-worker.ts</li><li>변경된 uncounted-voice-api/worker.py</li><li>074 컬럼 채움 로직 (numeric_patterns 추출, session_topic_summary 생성 등)</li></ul> |
| **선행 작업** | 창 A |
| **병행 가능** | 창 C 와 병행 (창 A 산출물만 있으면 진행 가능) |
| **완료 조건** | gpu-worker 통과 후 074 컬럼이 production 데이터에 채워짐 |

### 3.3 창 C — export-builder

| 항목 | 내용 |
|---|---|
| **입력 (의존)** | 창 A 의 extractor + 변환 헬퍼 |
| **입력 (참조)** | <ul><li>SPEC §2 ZIP 구조</li><li>SPEC §4 매핑표</li><li>SPEC §5 JSONL schema</li><li>SAFETY_CHECKLIST.md 전체 (스크립트 명세)</li></ul> |
| **출력 (의존 대상)** | <ul><li>변경된 uncounted-api/src/services/export-builder.ts (3 Layer)</li><li>자동 검증 스크립트 (scripts/validate-export-zip.ps1, .sh)</li><li>ZIP 빌드 직전 hook (validateExportZip() 호출)</li></ul> |
| **선행 작업** | 창 A |
| **병행 가능** | 창 B 와 병행 |
| **완료 조건** | <ul><li>샘플 세션으로 Layer 1/2/3 ZIP 생성 성공</li><li>SPEC §7 검증 22항목 모두 통과</li><li>SAFETY_CHECKLIST §3~5 스크립트 PASS</li></ul> |

### 3.4 창 D — API

| 항목 | 내용 |
|---|---|
| **입력 (의존)** | 창 C 의 export-builder 함수 |
| **입력 (참조)** | SPEC §6 API Contract (6 endpoint) |
| **출력 (의존 대상)** | 6개 엔드포인트 구현 (uncounted-api/src/routes/admin/export/, packaging/, delivery/) |
| **선행 작업** | 창 C (실제 빌더 함수 필요) |
| **완료 조건** | <ul><li>6 endpoint 응답이 SPEC §6 envelope 일치</li><li>encrypted body 처리 검증</li><li>401 auto refresh 동작 검증</li></ul> |

### 3.5 창 E — Admin UI

| 항목 | 내용 |
|---|---|
| **입력 (참조)** | SPEC §6 API Contract (Mock 응답으로 선행 가능) |
| **입력 (의존)** | 창 D 의 실제 응답 (Mock → 실제 전환 시점) |
| **출력 (의존 대상)** | <ul><li>uncounted-admin 의 React 컴포넌트 변경</li><li>ExportLog 컴포넌트 DB 연동</li><li>DeliveryPackageModal 통합</li><li>include_audio / include_restricted 옵션 UI</li></ul> |
| **선행 작업 (참조 Mock 시)** | 창 0 (SPEC §6) |
| **선행 작업 (의존 실제 시)** | 창 D |
| **병행 가능** | Mock 단계에서 창 C/D 와 병행 |
| **완료 조건** | E2E 시나리오 (단건 export → 다운로드, 배달 패키지 목록 → 다운로드) 통과 |

### 3.6 창 F — KcELECTRA / WhisperX 재학습 (완전 독립)

| 항목 | 내용 |
|---|---|
| **입력** | AIHUB 데이터 (`C:\Users\gdash\Downloads\AIHUB`) |
| **출력 (의존 대상 없음)** | <ul><li>새 모델 체크포인트 (4 분류기: emotion, dialog_act, speech_act, topic)</li><li>WhisperX fine-tune 결과 (저음질 전화망 데이터)</li><li>평가 리포트 (internal_*.json, 외부 ZIP 미포함)</li></ul> |
| **선행 작업** | 없음 (창 0 완료 무관) |
| **창 0 와의 관계** | 매핑표가 모델명 일반화 강제하므로, 모델명이 바뀌어도 외부 ZIP에는 영향 X |
| **완료 조건** | <ul><li>각 분류기 F1 ≥ baseline</li><li>A/B 테스트 통과</li><li>production 배포 결정 (별도 게이트)</li></ul> |

---

## 4. 병행 / 순차 매트릭스

| 창 | 의존 (의존성) | 참조 (참조 문서) | 시작 가능 시점 |
|---|---|---|---|
| 창 0 | 없음 | prompt_plan.md | 즉시 |
| 창 A | 창 0 산출물 | 기존 마이그레이션 | 창 0 완료 후 |
| 창 B | 창 A 산출물 | SPEC §4 | 창 A 완료 후 |
| 창 C | 창 A 산출물 | SPEC §2,4,5 + SAFETY 전체 | 창 A 완료 후 (창 B 와 병행 OK) |
| 창 D | 창 C 산출물 | SPEC §6 | 창 C 완료 후 |
| 창 E | 창 D 산출물 (실제) | SPEC §6 (Mock) | Mock 단계: 창 0 후 / 실제 단계: 창 D 후 |
| 창 F | 없음 | 없음 | 즉시 (완전 독립) |

### 4.1 병행 가능 조합

| 조합 | 조건 |
|---|---|
| 창 B + 창 C | 창 A 완료 후 |
| 창 E (Mock) + 창 D | Mock 단계에서 창 D 와 무관 |
| 창 F + 창 0~E 전체 | 창 F 는 완전 독립 |

### 4.2 진행 권장 순서

다음은 의존성을 만족하는 권장 순서. 실제 순서는 LeeGoGke 결정.

```
1. 창 0 (공통 스펙)           ── 완료 후 LeeGoGke 검토
   ↓
2. 창 A (DB + extractor)      ── 074 적용 + extractor 함수
   ↓
3. 창 B + 창 C (병행)         ── B: gpu-worker, C: export-builder
   ↓
4. 창 D (API)                 ── 6 endpoint 구현
   ↓
5. 창 E (Admin UI 통합)       ── Mock → 실제 전환

(병행) 창 F (재학습)           ── 창 0 완료 무관, 백그라운드
```

---

## 5. 각 창 시작 시 체크리스트

### 5.1 창 A 시작 전

- [ ] 창 0 산출물 (SPEC + SAFETY + WORKSTREAM) LeeGoGke 검토 완료
- [ ] 매핑표 §4 row별 결정 확정 (✅/🟡/🔵/⚪/❌)
- [ ] 마이그레이션 074 신규 컬럼 명세 합의 (utterances.numeric_patterns + sessions 3종)

### 5.2 창 B / 창 C 시작 전

- [ ] 마이그레이션 074 production 적용 완료
- [ ] extractor 함수 테스트 통과
- [ ] 변환 헬퍼 함수 매핑표 100% 커버리지

### 5.3 창 D 시작 전

- [ ] 창 C 의 export-builder 3 Layer 빌드 성공
- [ ] SPEC §7 검증 22항목 PASS

### 5.4 창 E (실제 통합) 시작 전

- [ ] 창 D 6 endpoint 응답 형식 SPEC §6 일치
- [ ] encrypted body / 401 auto refresh 동작 확인

### 5.5 창 F 시작 전

- [ ] AIHUB 데이터 GPU 서버 접근 가능 확인 (`C:\Users\gdash\Downloads\AIHUB`)
- [ ] GPU 서버 SSH 접속 (`100.80.44.19:2222`) 확인

---

## 6. 변경 시 영향 분석

본 문서는 SPEC 의 영향 범위를 추적하기 위한 보조 도구.

### 6.1 SPEC §1 (안전선) 변경 시

- 영향: 모든 창 (A~F)
- 우선 통보: 창 C (검증 스크립트 갱신)

### 6.2 SPEC §2 (ZIP 구조) 변경 시

- 영향: 창 C (빌더)
- 부영향: 창 E (UI 안내 텍스트)

### 6.3 SPEC §4 (매핑표) 변경 시

- 영향: 창 A (extractor) + 창 C (변환 적용)
- 부영향: 모든 후속 창

### 6.4 SPEC §6 (API Contract) 변경 시

- 영향: 창 D (구현) + 창 E (호출)
- 부영향: 창 C (응답 데이터 준비)

### 6.5 SAFETY_CHECKLIST §3~5 (검증 항목) 변경 시

- 영향: 창 C (스크립트 갱신)
- 부영향: 창 0 (SPEC §1 안전선 동기화)

---

## 7. 후속 작업창 시작 신호

본 plan 승인 → 3개 문서 작성 완료 → **창 A 시작 가능**.

창 F (재학습) 는 본 작업과 독립이므로 SPEC 완성 전이라도 AIHUB 데이터 준비 (`C:\Users\gdash\Downloads\AIHUB`) 는 백그라운드로 진행 가능.

---

## 변경 이력

| 버전 | 일자 | 변경 사항 |
|---|---|---|
| v1.0 | 2026-05-18 | 초안 (창 0). 7개 창(0+A~F) 의존성 + 입출력 contract |

---

**문서 끝.** 후속 창 시작 시 본 문서 §3 의 Contract + §5 체크리스트 참조.
