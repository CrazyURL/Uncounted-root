# CBO 브리핑 — 검수 패널 재설계 합의 안건

**작성일**: 2026-06-03
**대상**: CBO
**소요 예상**: 회의 30-45분
**선행 문서**: [docs/design_review_panel_redesign_20260603.md](./design_review_panel_redesign_20260603.md)

---

## 0. 회의 목표

```
검수 패널 재설계 정본 (라운드 4 합의 완료) 중
정책 결정이 필요한 3 안건 합의 후 P1 개발 착수.

✅ 정본 락 완료: 발화 4종 정정 / 통화 3액션 / UI 인라인 / 정산 freeze 권장안 / 채널 mono 100%
⚠ 합의 필요  : Tier 정책 (안건 #1) / 정산 freeze (안건 #2) / hold-out (안건 #3)
```

---

## 1. 한 줄 배경

> **현 검수 UI 의 5개 버튼은 1개 중복 / 1개 의미 불명 / 3개 미완성. 외부 검수 4 라운드 거쳐 재설계 정본 완료. 단 비즈니스 정책 (가격/환불/법적 노출) 결정이 필요한 3 안건은 CBO 합의 사항으로 분리.**

---

## 2. 안건 #1 — 자동승인 Tier 정책 ⭐ (최우선)

### 2.1 문제 (왜 결정 필요한지)

```
현 검수 우선순위 점수 산식:
  점수 ≥ 60 = 🔴 빨강 (필수 검수)
  점수 30-60 = 🟡 노랑 (권장)
  점수 < 30 = 🟢 초록 (자동승인 가능)

문제:
  ① 검수 점수는 "불확실한 오류" 잡지 "확신에 찬 오류" 못 잡음
     예) STT 가 "이건 99% 맞다" 출력했는데 사실 틀린 경우
        → 점수 낮음 (자신 있으니까) → 초록 → 무검증 통과
  
  ② 14,387 발화 × 80% = ~11,500 발화 사람 한 번 안 보고 GT 납품
     → Uncounted 세일즈 포인트 "검증된 데이터" 와 충돌
     → buyer 분쟁 시 환불 + 평판 손상 리스크
  
  ③ 100% 사람 검수 = 검수자 부담 폭증 = 플랫폼 가동 불가
     100% 자동      = 신뢰성 0 = buyer 평판 손상
     → 통계적 가드레일 = 유일한 절충
```

### 2.2 권장안 — Tier 3계층 + Spot-check

#### A. 데이터셋 Tier 분리

```
┌─ Premium    ─ 빨강+노랑 검수 완료 + 사람 GT 확정 (20-30% 분량)
│              → 단가 ↑↑ (R&D / fine-tuning 용)
│              → buyer: AI 기업의 정밀 라벨 코퍼스
│
├─ Standard   ─ 초록 자동승인 + spot-check 통과 (60-70%)
│              → 단가 중 (대량 학습 데이터용)
│              → buyer: 대규모 사전학습 코퍼스
│
└─ Excluded   ─ 검수 결과 제외 / 초록 spot-check 실패 (5-10%)
                → 미납품
```

#### B. 초록 Spot-check (무작위 표본 검사)

```
프로세스:
  1. 초록 분류 발화 N% → 사람 검수 의무
  2. 결과 → error rate 추정 + 95% CI 계산
  3. 임계값 충족 → Standard 등록 (성공 spot_check_passed 메타)
     불충족 → 초록 임계값 자동 조정 (예: 30 → 20)

⚠ 어조 주의:
  ✗ "보증 error rate ≤ N%"          ← 분쟁 시 책임
  ✓ "추정 error rate ≤ N% (95% CI [L, H])"   ← 통계적 정직
```

#### C. 임계값 단계 적용 (의견 2 제안)

```
Phase 1 초기 (운영 1개월):
  - Spot-check 표본 비율: 10%
  - Error rate 임계값: ≤ 5%
  - 이유: 초기 2% 는 너무 빡셈, 데이터 누적 부족

Phase 2 강화 (운영 안정):
  - Spot-check 표본 비율: 10% 유지 또는 7% 축소
  - Error rate 임계값: ≤ 2%
  - 이유: 운영 안정 + 누적 데이터로 임계값 강화

Phase 3 (1년+): buyer 요구 기반 조정
```

#### D. Buyer 메타 명시

```json
{
  "tier": "Premium" | "Standard",
  "tier_breakdown": {
    "Premium_count": 1234,
    "Standard_count": 8765,
    "Excluded_count": 432
  },
  "spot_check": {
    "sampled": 877,
    "passed": 854,
    "estimated_error_rate": 0.027,
    "confidence_interval_95": [0.018, 0.039],
    "threshold_phase": "P1_initial_5pct",
    "as_of_date": "2026-06-03"
  }
}
```

### 2.3 CBO 결정 필요 항목

```
Q1. Tier 3계층 도입 동의?
    □ Yes  □ No  □ 수정 (어떻게: _____________)

Q2. Spot-check 임계값:
    □ 권장안 (P1=5% / P2=2%)
    □ 더 엄격 (P1=3% / P2=1%)
    □ 더 완화 (P1=10% / P2=5%)
    □ 다른 값: _____________

Q3. Spot-check 표본 비율:
    □ 10% (권장)
    □ 더 적게 (5% — 비용 절감 vs 정확도 감소)
    □ 더 많이 (15-20% — 정확도 향상 vs 비용 증가)

Q4. Buyer 메타 공개 수준:
    □ 전체 공개 (권장 — 정직 + 차별화)
    □ Tier 비율만 공개
    □ 비공개 (NDA 보호)

Q5. Premium vs Standard 단가 차이:
    □ Premium = Standard × N배 (N: _____)
    □ 별도 가격 정책 분리
```

### 2.4 의사결정 도구 — 시나리오 비교

| 시나리오 | Premium 비율 | Standard 비율 | 검수자 부담 | buyer 리스크 |
|---------|-------------|--------------|------------|------------|
| 현 안 (자동승인 일괄) | 0% | 100% (무검증) | 0 | ★★★ 높음 |
| 100% 사람 검수 | 100% | 0% | ★★★ 폭증 | 0 |
| **권장 (Tier + spot-check 10%/5%)** | **20-30%** | **60-70%** | ★ 적정 | ★ 낮음 |
| 보수안 (Tier + spot-check 15%/3%) | 25% | 60% | ★★ 중 | 0.5 |

---

## 3. 안건 #2 — 정산 발화 수 Freeze 시점

### 3.1 문제

```
BM v10 정산 단위 = utterance 발화당 settlement.
검수자가 merge/split (P3 보류이지만 미래 도입 시) 또는 제외 처리하면
발화 수 변경 → 정산 금액 변경.

→ "정산 발화 수는 어느 시점 값으로 freeze?" 미정의 시 분쟁.
```

### 3.2 옵션

```
Option A (권장): STT 완료 시점 freeze
  → review_status='in_progress' 진입 시 utterance_count 고정
  → 검수자가 정정/제외해도 정산 발화 수 불변
  
  장점:
    ✓ 정산 안정 (인센티브 왜곡 0)
    ✓ 검수자 행동이 돈에 영향 X
    ✓ Premium tier 가치 ↑ (정정 노력 = 단가로 보상)
  
  단점:
    ✗ STT 가 잘못 잡은 발화도 카운트 (예: 잡음 1초를 발화로 인식)
    ✗ buyer 에게 "이 dataset 의 실 발화 수" ≠ "정산 발화 수"

Option B: GT 확정 시점 freeze (검수 완료 후)
  → review_status='approved' 시 검수자 정정값으로 utterance_count 갱신
  
  장점:
    ✓ 정산 정확성 ↑ (실제 발화 수 기반)
  
  단점:
    ✗ 검수자 행동이 돈에 영향 (인센티브 왜곡)
    ✗ 다중 검수자 합의 시 복잡도 폭증
    ✗ 재처리 후 또 바뀜 = 분쟁 요소

Option C (혼합): STT 시점 freeze + GT 시점 보조 카운트
  → 정산 = STT 시점 (Option A)
  → buyer 메타 = "STT 발화 수 N, GT 정정 후 실 발화 수 M" 둘 다 공개
  
  장점:
    ✓ 정산 안정 + 정직성 동시 확보
  
  단점:
    ✗ 메타 복잡, buyer 가 헷갈릴 수 있음
```

### 3.3 권장: **Option A 또는 Option C**

```
권장 = Option A (단순) 또는 Option C (정직)
비권장 = Option B (검수자 인센티브 왜곡)

→ CBO 결정 필요. P1 진행 시 SQL freeze 컬럼 명시.
```

---

## 4. 안건 #3 — WER 측정용 Hold-out 세트

### 4.1 문제

```
WER 측정의 자기기만 (라운드 1 의견 3 지적):
  검수자 GT 작성 → GT 를 HOTWORDS 자동 추출 → 재처리 → 같은 GT 로 WER 측정
  → 무조건 개선. 모델이 좋아진 게 아니라 타겟을 옮긴 것.

→ 측정용 통화 세트 분리 필요. 그 세트는 HOTWORDS 추출 입력 절대 금지.
```

### 4.2 권장안

#### A. Hold-out 세트 비율

```
권장: 전체 dataset 의 10%
  - 통화 단위로 분리 (utterance 단위 분리 X — 한 통화 내 leak 방지)
  - 시기별/관계별 분산 (가족/업무/친구 다양성)
  - 길이별 분산 (1분 / 5분 / 30분 / 1시간+)
```

#### B. Hold-out 세트 정책

```
✗ HOTWORDS 자동 추출 입력 금지
✗ 본인 음성 프로파일 재등록 입력 금지
✗ 재처리 옵션 패널 입력 금지
✓ WER 측정만 (정직 보고)
✓ 분기마다 (또는 모델 업데이트마다) WER 측정 + 공개
```

#### C. buyer SLA 어조

```
✗ "WER ≤ N% 보증"           ← 분쟁 시 책임
✓ "Hold-out 세트 WER N% (분기별 측정)"   ← 정직
```

### 4.3 CBO 결정 필요

```
Q1. Hold-out 비율: 10% (권장) / 다른 값: _____
Q2. 선정 기준: 통화 단위 + 다양성 분산 (권장) / 다른 방식: _____
Q3. SLA 어조: 정직 측정 (권장) / 보증 (책임 부담)
```

---

## 5. 합의 후 진행 계획

```
회의 후 24시간 이내:

1. 회의 결과 정본 문서에 반영
   → docs/design_review_panel_redesign_20260603.md
   → P0.5 섹션의 "CBO 합의 필요" 항목 락

2. P1 migration SQL draft 작성 시작
   → uncounted-api/supabase/migrations/077_utterance_gt.sql
   → utterance_gt / reprocess_signal / utterance_revisions / session_reprocess_runs
   → freeze 정책 반영 (Option A/B/C 따라)

3. P0 (미완 버튼 5개 제거) PR 생성
   → admin React 컴포넌트 정리

4. P1 UI prototype 스켈레톤
   → admin 컴포넌트 (ReviewQueueList / UtteranceReviewPanel / CallActionPanel)
```

---

## 6. 권장 답변 요약 (회의 진행용)

| 안건 | Q | 권장 답변 |
|------|---|---------|
| #1 | Tier 3계층 도입 | **Yes** |
| #1 | Spot-check 임계값 | **P1=5% / P2=2%** |
| #1 | Spot-check 표본 | **10%** |
| #1 | Buyer 메타 공개 | **전체 공개** |
| #1 | Premium 단가 | **Standard × 3-5배** (별도 협의) |
| #2 | 정산 freeze 시점 | **Option A** (STT 시점) |
| #3 | Hold-out 비율 | **10%** |
| #3 | 선정 기준 | **통화 단위 + 다양성 분산** |
| #3 | SLA 어조 | **정직 측정 (CI 표기)** |

→ 위 9개 권장안 일괄 합의 시 회의 30분 내 종료 + 즉시 P1 착수 가능.

---

## 7. 참고 — 정본 외부 검수 4 라운드 요약

```
라운드 1 (초안 6탭) → 4 차원 분류 + 4 critical 발견
라운드 2 (4 차원)   → BM 정산 / WER 순환 / 테이블 분리 / 채널 진단
라운드 3 (9 수정)   → 🔴 자동승인 무검증 80% 위험 (의견 3)
라운드 4 (본 정본)  → 채널 mono 100% 검증 + Tier 분리 정책 분리
```

→ 본 브리핑 = 라운드 4 의 비즈니스 정책 부분만 추출.

---

**문서 끝**.

다음:
- 회의 진행 후 결정 사항 반영
- D (P0 미완 버튼 제거) → B (migration draft) → C (UI prototype) 순차 진행
