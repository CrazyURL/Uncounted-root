# 검수 패널 재설계 — 정본 (Design Baseline)

**작성일**: 2026-06-03
**최종 갱신**: 2026-06-04 (Founder 권장안 채택 락)
**버전**: v1.1
**상태**: 정본 락 (안건 #1/#2/#3 권장안 자동 채택)
**문서 성격**: 정본 (Baseline) — CTO 에게는 P1 개발 명세서, CBO 에게는 사후 통보용 정책 안내서

## 락 결정 (2026-06-04)

```
안건 #1 (Tier 정책)   : ✓ Premium/Standard/Excluded + 10% spot-check
                        + 임계값 P1=5% / P2=2% 단계 적용
                        + buyer 메타 전체 공개
안건 #2 (정산 freeze) : ✓ Option A — STT 시점 utterance_count freeze
안건 #3 (Hold-out)    : ✓ 10% 통화 단위 격리 + CI 어조 ("추정 N% 95% CI [L, H]")

→ CBO 회의 대신 Founder 권장안 채택. P1/P2 즉시 진행.
```

---

## 0. 한 줄 요약

> **현 검수 UI 의 5개 발화 단위 버튼(제외/예외포함/자막수정/PII처리/재처리요청) 은 1개 중복 / 1개 의미 불명 / 3개 미완성 또는 불가능. 발화 단위는 정정만, 통화 단위는 재처리만, 모든 변경은 영구 이력 + 정산 freeze + WER hold-out + 자동승인 Tier 분리로 buyer 평판 + 검수자 부담 + 모델 학습 무결성을 동시에 보장하는 정본 구조로 재설계.**

---

## 1. 진단 — 현 UI 의 5개 발화 단위 버튼

| 버튼 | 표면상 의미 | 실제 상태 | 문제 |
|------|------------|----------|------|
| **제외** | utterance 단건 제외 | 우측 [제외] 와 중복 | 같은 동작 2개 = UI 노이즈 |
| **예외 포함** | 의미 불명 | 코드상 무엇 toggle? | 검수자가 뭘 하는지 모름 |
| **자막 수정** | 자막을 수정? | 입력 UI 없음 | 누르면 status 만 변경 (실제 수정 불가) |
| **PII 처리** | PII 판정? | 단건 PII 룰 적용? | 검수자가 PII 위치 지정 불가 |
| **재처리 요청** | utterance 재처리 | STT 는 통화 단위 일관 처리 | 발화 단위 재처리 = 타임스탬프 어긋남, 결과 동일 |

**결론**: 4번/5번은 현실에서 불가능한 기능. 1번은 중복. 2번은 의미 불명. 3번은 미완성.

---

## 2. P0.5 합의 사항 — CBO 회의 안건

> ⚠ **P1 진행 전 결정 필수**. 합의 없이 진행 시 6개월 후 정산 분쟁 + buyer 평판 손상.

### 2.1 정산 STT 시점 freeze (Option A 권장)

```
"이 통화의 정산 발화 수" = STT 자동 처리 완료 시점 값으로 고정 (review_status='in_progress' 진입 시)

배경:
  - BM v10 정산 단위 = utterance 발화당 settlement
  - 검수자가 merge/split 으로 발화 수 바꾸면 정산 금액 흔들림
  - 검수자 인센티브 왜곡 우려 (발화 수 조작)

Option A (권장): STT 시점 freeze
  → 검수 후에도 정산 발화 수 불변
  → 검수자 노동이 돈에 영향 X (인센티브 왜곡 방지)
  → 정산 안정성 ★★★
  → 검수 정확성은 dataset 가치 ↑ 로 별도 보상 (Premium tier)

Option B (대안): GT 시점 freeze (검수 완료 후)
  → 정산 정확성 ↑ 하나 검수자 행동이 돈에 영향
  → 다중 검수자 합의/분쟁 시 복잡도 폭증

→ CBO 합의 필요. 권장 = Option A.
```

### 2.2 WER 측정용 Hold-out 세트 분리

```
잘못된 흐름 (자기기만):
  검수자 GT 작성 → GT 를 HOTWORDS 자동 추출 → 재처리 → 같은 GT 로 WER 측정
  → 무조건 개선. 모델이 좋아진 게 아니라 타겟을 옮긴 것.

올바른 흐름:
  검수자 GT 작성 → GT 를 reference 로 보존
  → 재처리 시 GT 단어 → HOTWORDS 추출 후보 (사람 게이트 통과만 등록)
  → 재처리 결과는 새 STT (GT 입력 X)
  → 동일 GT 로 WER 측정 (진짜 개선 측정 가능)

추가 안전망:
  Hold-out 세트 (예: 전체 dataset 의 10%) 별도 유지:
    - HOTWORDS 추출 입력 절대 금지
    - 분기마다 hold-out 으로 WER 변화 측정
    - buyer 에게 정직 보고 ("hold-out WER N% → buyer 모델 학습 시 ≤ N+α%")

→ 누가 보더라도 hold-out 정책 인지하도록 ⚠️ 박스 처리
```

### 2.3 채널 진단 결과 (실측 완료)

```
50건 표본 실측 (raw_direct 시기 2026-05-30 이후):
  Mono (1ch)   : 50 (100.0%)
  Stereo (2ch) : 0
  
재검증 1건 전체 파일 ffprobe:
  format    : WAV (확장자 .m4a 가 거짓, 실제는 wav magic "RIFF...WAVE")
  codec     : pcm_s16le (16-bit PCM)
  sample    : 16,000 Hz
  channels  : 1 (mono 확정)
  duration  : DB 값과 일치 (검증)

결론:
  Mono mixed 100% → pyannote 자동 화자분리 의존 100%
  → 화자 swap 빈발 (mono 한계)
  → 차원 ② 화자 정정 P1 포함 확정
  → 차원 ③ 화자분리 누락 마커 = P3 (mixed segment 는 deferred_split 으로 park)

미검증 (별도 트랙 — CTO 인계):
  - raw_audio 가 전부 wav 로 정규화 저장 (확장자만 m4a) — 원본 손실 가능성
  - voice-api/worker 의 audio 변환 chain 검증 필요
  - PII 마스킹 적용 범위 (utterance WAV vs raw_audio)
  → 본 P1 스코프에는 영향 X
```

### 2.4 ⭐ 자동승인 Tier 분리 + Spot-check (CBO 회의 안건 #1)

> **이 안건은 단순 채택이 아니라 CBO 와의 비즈니스 정책 합의 사항. 정본 락 금지.**

```
배경 (문제):
  검수 우선순위 점수 < 30 = "초록" = 자동승인 가능
  → 14,387 발화 × 80% ≈ 11,500 발화 사람 한 번 안 보고 GT 납품

  문제 ①: 검수 점수는 "불확실한 오류" 잡지 "확신에 찬 오류" 못 잡음
           예) STT high-confidence 출력이 사실 틀린 경우
              → 점수 낮음 → 초록 → 무검증 통과
  문제 ②: Uncounted 세일즈 포인트 = "법적 + 자연 발화 + 검증됨"
           → 80% 무검증이면 세 번째가 거짓
  문제 ③: buyer 분쟁 시 환불 + 평판 손상

해결안 (의견 3 채택, 합의 필요):

A. 데이터셋 Tier 3계층 분리:
   ┌─ Premium    ─ 빨강+노랑 검수 완료 + 사람 GT 확정 (20-30%)
   │              → 단가 ↑↑ (R&D / fine-tuning 용)
   ├─ Standard   ─ 초록 자동승인 + spot-check 통과 (60-70%)
   │              → 단가 중 (대량 학습 데이터용)
   └─ Excluded   ─ 검수 결과 제외 / 초록 spot-check 실패
                  → 미납품

B. 초록 spot-check (무작위 표본 검사):
   - 초록 분류 발화 중 무작위 N% → 사람 검수 의무
   - 결과 → error rate 추정 + 95% CI 계산
   - 임계값 충족 → Standard 등록, 불충족 → 초록 임계값 자동 조정

   임계값 단계 적용 (의견 2 제안):
     P1 초기 (운영 1개월) : error rate ≤ 5% 통과
     P2 강화 (운영 안정)  : error rate ≤ 2% 통과
   
   ⚠ "보증" 어조 금지 → "추정 error rate ≤ N% (95% CI [low, high])" 표기
   (분쟁 시 어조가 책임으로 직결)

C. Buyer 메타 명시:
   - Premium / Standard / Excluded 비율 + 검수자 정보 + 검수일 + 임계값
   - "이 dataset 의 인간 검증 비율" 정직 공개

→ 가격·환불·법적 노출 결정. CBO 합의 후 정본 확정.
   ⚠ 본 문서에 락 금지. 회의 결과로 별도 PR.
```

### 2.5 HOTWORDS 단일문자 가드 (자동 ✗)

```
HOTWORDS 자동 후보 추출 시 가드:
  ✗ 길이 1 토큰 (단일문자) — 자동 [검토 필요], 강제 ✓ 만 등록 가능
     이유: 단일문자 hotword = 전 구간 매칭 = 통화 전체 오염
  ✗ 한국어 일반어 (Kiwi NNP 외)
  ✗ 조사/어미 (Kiwi JKS/JKB/JKG/JKO/JX/EF/EC 등)
  ✓ 최소 길이 2, NNP, 사전 미존재, 반복 ≥ 2회

→ "조사" "특이" 같은 일회성 오인식 자동 등록 시 모델 오염 방지
```

---

## 3. P1 데이터 모델

### 3.1 ERD 개요

```
┌─────────────────┐         ┌──────────────────────┐
│  utterances     │←────────┤  utterance_gt        │ (납품 정본, 영구)
│  (STT 자동)     │   N:1   │  applied 개념 없음   │
└────────┬────────┘         └──────────────────────┘
         │
         │ N:1
         ↓
┌─────────────────┐         ┌──────────────────────┐
│  utterance_     │         │  reprocess_signal    │ (재처리 후보, 휘발성)
│  revisions      │────────→│  approved_by 게이트  │
│  (audit 이력)   │         └──────────────────────┘
└─────────────────┘                    │
                                       │
                                       ↓
                            ┌──────────────────────┐
                            │  session_reprocess_  │
                            │  runs                │ (재처리 실행 이력)
                            └──────────────────────┘
```

### 3.2 utterance_gt (납품 정본)

```sql
CREATE TABLE utterance_gt (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  utterance_id        uuid NOT NULL REFERENCES utterances(id) ON DELETE CASCADE,
  session_id          uuid NOT NULL REFERENCES sessions(id),
  
  -- GT 본문
  gt_transcript       text NOT NULL,        -- 검수자가 들은 그대로 (자동전사 무관)
  gt_speaker          text,                  -- '본인' | '상대' | 'unknown'
  gt_pii_intervals    jsonb,                 -- [{start_char, end_char, pii_type, source: 'human'|'auto'}]
  
  -- 메타
  reviewer_user_id    uuid NOT NULL REFERENCES auth.users(id),  -- OR 특수값 (아래)
  review_method       text NOT NULL,         -- 'human' | 'auto_approve' | 'spot_check_passed'
  reviewer_comment    text,
  
  -- 상태
  status              text NOT NULL DEFAULT 'draft',
                                              -- 'draft' | 'approved' | 'rejected' | 'deferred_split'
  
  -- 자동승인 메타
  auto_approve_run_id uuid,                   -- system_auto 시 batch 식별
  spot_checked        boolean DEFAULT false,  -- spot-check 표본에 포함됐는지
  spot_check_result   text,                   -- 'pass' | 'fail' | null
  
  created_at          timestamptz DEFAULT now(),
  approved_at         timestamptz,
  
  UNIQUE(utterance_id, reviewer_user_id)
);

CREATE INDEX ugt_session ON utterance_gt(session_id);
CREATE INDEX ugt_status  ON utterance_gt(status);
CREATE INDEX ugt_method  ON utterance_gt(review_method);
```

**핵심**: `applied` 컬럼 없음. GT 는 진실 정본. 재처리와 무관.

**특수값**:
- `reviewer_user_id = 'system_auto'` (uuid 형태로 별도 고정 값) → 자동승인
- `status = 'deferred_split'` → mixed segment, P3 분할 UI 도입 시 복구 대기 (의견 1)

### 3.3 reprocess_signal (재처리 후보, 휘발성)

```sql
CREATE TABLE reprocess_signal (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id          uuid NOT NULL REFERENCES sessions(id),
  
  -- 신호 원천
  source_type         text NOT NULL,         -- 'gt_diff' | 'manual_input'
  origin_revision_id  uuid,                   -- 어느 GT diff 에서 추출됐는지 (참조만)
  
  -- 신호 종류
  signal_type         text NOT NULL,
  -- 'hotword_candidate' | 'speaker_swap_observed' | 'pii_missed' | 'profile_mismatch'
  
  -- 페이로드 (jsonb 유연)
  payload             jsonb NOT NULL,
  
  -- 사람 승인 게이트
  approved_by         uuid REFERENCES auth.users(id),
  approved_at         timestamptz,
  rejected_at         timestamptz,
  
  -- 재처리 반영
  applied_run_id      uuid REFERENCES session_reprocess_runs(id),
  
  created_at          timestamptz DEFAULT now()
);
```

**핵심**: 휘발성. 사람 승인 안 받으면 영원히 후보 상태. GT 정본 (utterance_gt) 과 분리.

### 3.4 utterance_revisions (audit 이력)

```sql
CREATE TABLE utterance_revisions (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  utterance_id        uuid REFERENCES utterances(id),  -- 또는 NULL (insert 시)
  session_id          uuid NOT NULL REFERENCES sessions(id),
  reviewer_user_id    uuid NOT NULL REFERENCES auth.users(id),
  
  revision_type       text NOT NULL CHECK (revision_type IN (
    'text_correction',          -- 텍스트 정정
    'speaker_relabel',          -- 화자 정정
    'pii_addition',             -- PII 추가
    'pii_removal',              -- 자동 감지 PII 취소
    'exclude'                   -- 제외
  )),
  
  -- 차원별 페이로드
  payload             jsonb NOT NULL,
  reason              text,
  
  created_at          timestamptz DEFAULT now()
);

CREATE INDEX ur_session ON utterance_revisions(session_id);
CREATE INDEX ur_type    ON utterance_revisions(revision_type);
```

**핵심**: P1 에서는 4 종 revision_type 만. merge/split/insert 는 보류 (Phase 후순위).

### 3.5 session_reprocess_runs

```sql
CREATE TABLE session_reprocess_runs (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id             uuid NOT NULL REFERENCES sessions(id),
  requested_by           uuid NOT NULL REFERENCES auth.users(id),
  
  -- 재처리 입력
  before_revision_count  int,
  hotwords_added         text[],
  voice_profile_updated  boolean,
  model_used             text,                 -- 'large-v3-int8' | 'large-v3' | 'turbo'
  pii_detector_rerun     boolean,
  request_reason         text NOT NULL,        -- 필수
  
  -- 결과
  status                 text NOT NULL,       -- 'queued' | 'running' | 'done' | 'failed'
  voice_api_job_id       text,
  
  -- 메트릭 (hold-out 세트 기준)
  before_metrics         jsonb,                -- WER 등 (hold-out 세트만 사용)
  after_metrics          jsonb,
  metrics_source         text,                 -- 'holdout_set_v1' 등
  
  created_at             timestamptz DEFAULT now(),
  completed_at           timestamptz
);
```

**핵심**: WER 측정 = hold-out 세트만. GT 입력 무관. metrics_source 명시.

---

## 4. UI 명세

### 4.1 화면 ① — 통화 목록 (검수 큐)

**구조**:
```
┌──────────────────────────────────────────────────────────────────────┐
│  통화 검수 큐                                                          │
│  필터: ● 빨강(필수) ○ 노랑(권장) ○ 초록(자동승인 가능) ○ 전체           │
│  정렬: 검수점수 ▼                                                      │
│                                                                       │
│  🔴 통화 #192136  4:39  발화 43  검수점수 87 (필수)                  │
│      이유: 화자불명 12, PII미정 4, 품질D 3                            │
│      [▼ 검수 시작]                                                    │
│  🟡 통화 #195001  5:12  발화 36  검수점수 45 (권장)                  │
│  🟢 통화 #196003  3:18  발화 22  검수점수 12 (자동승인 가능)         │
│      [✓ 일괄 자동승인]                                                │
│                                                                       │
│  📊 통계: 14,387 발화 중 검수 필요 = 2,841 (19.7%)                   │
└──────────────────────────────────────────────────────────────────────┘
```

**통화 검수 점수 산식 (튜닝 가능 휴리스틱)**:
```
call_score = (red_utterance_count / total_utterance_count) × 100
           + (utterance_avg_score × 0.3)        ← 0.3 은 임의 상수, 운영 데이터로 조정

예: 43 utt 중 빨강 12 → (12/43)×100 + 53×0.3 ≈ 44

이유: 절대 개수 기준 시 긴 통화가 항상 위로 옴 → ROI 왜곡
```

> ⚠ **0.3 은 휴리스틱**. 운영 데이터로 조정 필요. 의미 있는 상수로 오해 금지.

**utterance 검수 점수 (P1 초기 가중치)**:
```
priority_score = 
  + quality_grade ∈ {D, F}            → +30
  + emotion_confidence < 0.4         → +20
  + speaker_id ∉ {SPEAKER_00, SPEAKER_01} OR speaker_id IS NULL  → +15
  + pii_intervals 존재 + confidence_tier='needs_review' → +15
  + duration < 0.5s OR duration > 30s → +10
  
점수 ≥ 60 = 🔴 빨강 (필수 검수)
점수 30-60 = 🟡 노랑 (권장)
점수 < 30 = 🟢 초록 (자동승인 후보, spot-check 대상)

⚠ overlap_count > 0 가중치는 P1 에서 제외:
   → 화자혼재 발화는 "제외 (사유: 화자혼재)" 로 라우팅 (deferred_split)
   → 빨강으로 띄워도 검수 액션이 없으면 검수자 멘붕
```

### 4.2 화면 ② — 통화 펼침 (발화 리스트)

```
┌──────────────────────────────────────────────────────────────────────┐
│  ◀ 목록  /  통화 #192136  4:39  검수점수 87 [필수]                   │
│  관계 추정: 직장동료 (conf 0.73)  ← 표시만, 수정 불가                 │
│                                                                       │
│  [🔊 전체 듣기]  [▶ 빨강만 듣기]   진행률 0/12                       │
│                                                                       │
│  발화 리스트 (점수 정렬, 시간순 점프 가능):                            │
│                                                                       │
│  🔴 #08  0:42  본인 ♂40대  점수 89                                   │
│  🔴 #14  1:05  상대 ♂30대  점수 76                                   │
│  🟡 #03  0:15  상대 ♂30대  점수 42                                   │
│  🟢 #01  0:00  상대 ♂30대  점수 8 [자동승인됨]                       │
│                                                                       │
│  [⬇ 통화 단위 액션 패널 펼치기]                                       │
└──────────────────────────────────────────────────────────────────────┘
```

**관계 표시**:
- conf 만 표시. 수정 불가.
- 이유: "여보세요 → 배우자" 오탐 재발 방지

**정렬**:
- Default: 점수순 (빨강 위)
- 시간순 점프 단축키: `G + 시간` (vim style) 또는 `#발화번호` 입력
- 이유: 점수순만 정렬 시 맥락 끊김 → 검수자 confused

### 4.3 화면 ③ — 발화 단건 검수 (펼침)

```
┌──────────────────────────────────────────────────────────────────────┐
│  #08  0:42-0:51 (8.6초)   본인 ♂40대   품질 C-54   점수 89 [필수]    │
│                                                                       │
│  🔊 [▶ 재생]  [⏸]  [-3s]  [+3s]   재생 횟수: 0회                    │
│                                                                       │
│  자동전사:                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ 이거 좌사 정리하다 보니까 좀 특유한 걸 봤는데 P로 시작되는       │ │
│  │ 거 있잖아요. P? P.                                              │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  이 발화 문제 있음?                                                   │
│  ☑ 텍스트   ☐ 화자   ☐ PII   ☐ 제외                                  │
│                                                                       │
│  ─── 텍스트 정정 (체크됨) ──────────────────────────────────────     │
│  │ 이거 조사 정리하다 보니까 좀 특이한 걸 봤는데 P로 시작되는    │ │
│  │ 거 있잖아요. P? P.                                            │ │
│  [📋 자동전사 복사]  [✕ 비우기]                                      │
│                                                                       │
│  검수 메모 (선택):                                                     │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ "좌사" → "조사" 오인식.                                          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  [✓ 정상]  [⚒ 수정]  [✗ 제외]   [⏭ 다음 빨강]                       │
└──────────────────────────────────────────────────────────────────────┘
```

**체크박스 4개 (의견 1 의 "문제 신고형")**:
- ☑ 텍스트 → 텍스트 정정 입력창 펼침
- ☑ 화자 → 라디오 (● 본인 ○ 상대 ○ 모름) 펼침
- ☑ PII → 드래그 영역 선택 UI 펼침 (아래 4.4)
- ☑ 제외 → 사유 드롭다운 펼침

**화자 체크 시 (의견 1 채택)**:
```
☑ 화자
   자동: 본인  →  검수: ● 본인  ○ 상대  ○ 모름
```

**제외 체크 시 (의견 3 채택)**:
```
☑ 제외
   사유: ┌─────────────────────────────────┐
         │ ○ 잡음 심함                       │
         │ ○ 화자혼재 (mixed segment)       │  ⭐ → status='deferred_split'
         │ ○ 동의 불완전                     │
         │ ○ PII 보호 우선                   │
         │ ○ 기타: _______________          │
         └─────────────────────────────────┘
```

**3 버튼 (의견 1 채택)**:
- `[✓ 정상]` = 자동전사 그대로 OK → status='approved', review_method='human'
- `[⚒ 수정]` = 정정 함 → utterance_revisions 누적 + utterance_gt 'approved'
- `[✗ 제외]` = 제외 → status='excluded' OR 'deferred_split' (사유 따라)

**단축키 (편집/네비 모드 분리, 의견 3 채택)**:
```
편집 모드 (텍스트박스 포커스 시):
  1-9, Tab    = 일반 입력 (단축키 비활성)
  
네비 모드 (텍스트박스 포커스 해제 시):
  1-4         = 체크박스 토글 (텍스트/화자/PII/제외)
  스페이스    = 재생/정지
  ←/→         = 3초 점프
  Tab         = 다음 빨강 발화
  G + 시간    = 시간순 점프 (vim style)
  Ctrl+S      = 임시저장
```

### 4.4 화면 ④ — PII 위치 입력 UI (의견 3 신규)

```
┌─ ☑ PII 추가 ──────────────────────────────────────────────────────┐
│                                                                     │
│ GT 텍스트에서 PII 부분 드래그:                                       │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ 이거 조사 정리하다 보니까 좀 특이한 걸 봤는데 P로 시작            │ │
│ │ ─────────                                                       │ │
│ │  ↑ 드래그 영역 [start=12, end=15]                                │ │
│ │ 되는 거 있잖아요. P? P.                                          │ │
│ └────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ 선택 영역 [12-15] "조사"                                            │
│ 유형: ● 이름  ○ 전화  ○ 주소  ○ 회사  ○ 기타                       │
│                                                                     │
│ [➕ PII 영역 추가]                                                  │
│                                                                     │
│ 등록된 PII 목록:                                                    │
│   [12-15] "조사" → 회사명 (human)    [✕ 취소]                      │
│                                                                     │
│ 자동 감지 PII (이미 마스킹됨, 검수자 확인):                          │
│   "P" → 회사명 (auto, conf 0.6)    [✓ 유지] [✕ 취소]              │
└─────────────────────────────────────────────────────────────────────┘
```

**저장 시**:
```jsonb
utterance_gt.gt_pii_intervals = [
  {"start_char": 12, "end_char": 15, "pii_type": "회사명", "source": "human"},
  {"start_char": 30, "end_char": 31, "pii_type": "회사명", "source": "auto", "confidence": 0.6}
]
```

### 4.5 화면 ⑤ — 통화 단위 액션 패널

```
┌──────────────────────────────────────────────────────────────────────┐
│  통화 #192136 발화 검수 완료: 12/12 빨강                              │
│                                                                       │
│  📊 정정 통계:                                                         │
│    텍스트 수정 :  8 / 12  (66%)                                       │
│    화자 변경  :  2 / 12                                               │
│    PII 추가   :  3 건                                                 │
│    제외       :  1 건 (사유: 화자혼재 → deferred_split)               │
│                                                                       │
│  HOTWORDS 후보 (자동 추출, 사람 승인 필요):                           │
│    ✓ 조사       (반복 3회, NNP 점수 0.86)                           │
│    ✗ 특이       (Kiwi 일반 형용사, 추천 안 함)         [상세]        │
│    ⚠ P          (길이 1 — 검토 필요, 자동 ✗)                        │
│    ✓ 김포공항   (NNP, 지명, 사전 등록됨)                            │
│    ✗ 그래서     (조사/접속어, 자동 제외)                             │
│    [📌 선택한 후보를 HOTWORDS 등록]                                  │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ [✓ 승인]                                                         │ │
│  │   납품 정본으로 확정. R2 학습 입력. ← P1 핵심                    │ │
│  │                                                                  │ │
│  │ [🔄 수정 필요]                                                   │ │
│  │   재처리 옵션 (P2 도입):                                         │ │
│  │   ☑ 위 HOTWORDS 적용                                            │ │
│  │   ☐ 본인 음성 프로파일 재등록                                    │ │
│  │   ☐ 모델 변경 (현 large-v3-int8 유지 권장)                       │ │
│  │   재처리 사유 (필수): [_______________________________]          │ │
│  │   [통화 단위 재처리 시작]                                        │ │
│  │                                                                  │ │
│  │ [✗ 거절]                                                         │ │
│  │   납품 불가. 사유: [_______________________________]             │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ⚠ 정산 발화 수 = 43건 (STT 시점 freeze)                              │
│     검수 후에도 불변 (인센티브 왜곡 방지)                              │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 5. Provenance + Buyer 메타

### 5.1 검수자 책임 추적

```
utterance_gt.reviewer_user_id 값:
  uuid (사람)              → 일반 검수자
  'system_auto' (특수값)   → 자동승인 (사람 검수 없음)
  'spot_check_human'       → 자동승인 중 spot-check 표본 → 사람 재검증 통과
  
utterance_gt.review_method:
  'human'              → 사람 검수 + GT 확정
  'auto_approve'       → 자동승인 (spot-check 미포함)
  'spot_check_passed'  → 자동승인 표본 → 사람 재검증 통과
```

### 5.2 Buyer 메타 (export 시 포함)

```json
{
  "dataset_id": "uncounted-v1-2026-06-Q2",
  "tier": "Premium" | "Standard",
  "tier_breakdown": {
    "Premium_count": 1234,
    "Standard_count": 8765,
    "Excluded_count": 432
  },
  "review_method_breakdown": {
    "human": 1234,
    "auto_approve": 7800,
    "spot_check_passed": 965
  },
  "reviewers": [
    {"user_id": "u1", "name": "검수자 김XX", "reviewed_count": 600}
  ],
  "spot_check": {
    "sampled": 877,
    "passed": 854,
    "estimated_error_rate": 0.027,
    "confidence_interval_95": [0.018, 0.039],
    "threshold_phase": "P1_initial_5pct",
    "as_of_date": "2026-06-03"
  },
  "holdout_wer": {
    "set_id": "holdout_v1",
    "wer": 0.082,
    "measured_at": "2026-06-01"
  }
}
```

**핵심**: buyer 에게 "검수자 X 가 작성, 검수일 Y, 인간 검증 비율 Z%" 정직 공개.

---

## 6. Phase 분할

| Phase | 내용 | 기간 |
|-------|------|------|
| **P0** | 현 UI 미완 버튼 5개 제거 (예외포함/자막수정/PII처리/재처리요청/단건제외 중복) | 0.5일 |
| **P0.5** | CBO 합의 사항 5개 (정산/hold-out/채널/Tier/HOTWORDS 가드) | 1-2일 + 회의 |
| **P1** | utterance_gt + reprocess_signal + utterance_revisions 테이블 + 인라인 UI (체크박스 4개) + 우선순위 점수 + 자동승인 Tier + spot-check + 단축키 분리 + Provenance | 1.5주 |
| **P2** | HOTWORDS 자동 후보 추출 (Kiwi NNP) + 사람 승인 게이트 + 재처리 옵션 패널 | 1주 |
| **P3** | 화자분리 누락 마커 (deferred_split 복구) + session_reprocess_runs 메트릭 dashboard | 1주 |
| **Phase 후순위** | merge/split/insert (BM 정산 충돌 해결 후) / relation UI / R2 LM ETL 완전 자동화 | 미정 |

---

## 7. 보류 항목 명시

> CBO + 검수자 + buyer 모두 "왜 빠졌는지" 인지하도록 정본에 박음.

| 보류 항목 | 사유 | 재평가 조건 |
|----------|------|------------|
| **merge/split/insert** | BM v10 정산 충돌 (발화 수 변경 = 정산 금액 변경) | freeze 정책 합의 + 채널/빈도 검증 후 |
| **차원 ③ 화자분리 누락 마커** | UI 복잡도 + 일반 검수자 인지 부담 | 운영 1개월 후 mixed segment 빈도 측정 |
| **relation 수정 UI** | "여보→배우자" 오탐 재발 우려, conf 신뢰도 부족 | relation 모델 macro_f1 > 0.7 달성 후 |
| **HOTWORDS 자동 등록** | 일회성 오인식 자동 승격 = 모델 오염 | 사람 게이트 무한 유지 (자동화 X) |
| **WER 자동 보고** | hold-out 외 GT 로 측정 시 자기기만 | hold-out 세트 안정화 + buyer 합의 후 |
| **multi reviewer consensus** | 단일 검수자 가정 시 단순 | 검수자 2명 이상 + buyer 요구 시 |

---

## 8. CBO 회의 안건 (별도 합의)

> ⚠ 본 문서 작성 시점 (2026-06-03) 미합의. 정본 락 금지. 회의 결과로 별도 PR.

### 안건 #1 — 자동승인 Tier 정책

**결정 필요**:

1. **Tier 3계층 도입 (Premium / Standard / Excluded)** — 동의/반대
2. **spot-check 임계값 단계**:
   - Phase 1 초기 (운영 1개월) — error rate ≤ 5% 통과
   - Phase 2 강화 (운영 안정) — error rate ≤ 2% 통과
   - → 5%/2% 가 적절한지, 다른 값 필요한지
3. **표본 비율**: 초록 발화 중 10% spot-check
   - → 10% 가 적절한지, 비용/정확도 트레이드오프
4. **buyer 메타 공개 수준**:
   - Tier 비율 + 검수자 정보 + spot-check 결과 모두 공개?
   - 또는 일부 비공개?

**근거**:
- 100% 사람 검수 = 검수자 부담 폭증, 플랫폼 가동 불가
- 100% 자동 = 신뢰성 0, buyer 평판 손상
- → 통계적 가드레일 = 유일한 절충

### 안건 #2 — 정산 발화 수 freeze 시점

**결정 필요**: Option A (STT 시점) vs Option B (GT 시점)

**권장**: Option A — 검수자 행동이 정산 금액에 영향 X (인센티브 왜곡 방지)

### 안건 #3 — WER 측정용 hold-out 세트 정의

**결정 필요**:
- hold-out 비율 (예: 전체 dataset 의 10%)
- hold-out 통화 선정 기준 (다양성: 길이/관계/품질 분산)
- buyer 와의 SLA 어조 ("≤ N%" 보증 vs "추정 N% (CI)" 추정)

---

## 9. 부록 — 외부 검수 의견 4 라운드 변경 추적

### 라운드 1: 초안 6탭 안 → 4 차원 분류

- 의견 1: 4종 정정 (텍스트/화자/PII/제외) + 통화 액션 + GT 누적
- 의견 2: BM v10 정산 / WER 순환 / 테이블 분리 / 채널 진단
- 의견 3: 같은 5 critical 동의

### 라운드 2: 라운드 1 → 화자 + 경계 정정 4 차원

- 의견 1: 6탭 → 문제 신고형 / HOTWORDS 자동 X / relation UI X / 우선순위 점수 (ROI 최고)
- 의견 2: FK 격파 / Kiwi NNP / 인라인 통합
- 의견 3: 정산 충돌 / WER 순환 / GT vs reprocess_signal 분리 / hold-out

### 라운드 3: 라운드 2 → 9 수정 (Tier/spot-check 등)

- 의견 1: 90점, 화자 라디오, 3버튼, 채널 진단 동결 후
- 의견 2: Pass, 채널 진단 즉시 (stereo 70%면 화자 UI 제외)
- 의견 3: 🔴 자동승인 = 무검증 80% 위험, Tier 분리, PII 위치 입력 UI 누락

### 라운드 4: 라운드 3 → 본 정본

- 의견 1: 채널 진단 신뢰성 의심 (.m4a + pcm_s16le 모순), mixed = deferred_split, spot-check CI 어조, 0.3 휴리스틱
- 의견 2: Mono 100% 결과 채택, 임계값 5% → 2% 단계
- 의견 3: 정본 즉시 작성, CBO 안건 #1 = Tier

→ 본 정본 (라운드 4) = 4 라운드 의견 종합 + 자체 검증 (전체 파일 재진단 + Tier 분리 + CBO 안건 별도)

---

## 10. 미해결 / 별도 트랙 (CTO 인계)

> 본 P1 스코프에 영향 없음. 백그라운드 검증.

1. **raw_audio 정규화 chain**: .m4a 확장자 거짓 + 실제 WAV — voice-api/worker 의 변환 시점 / 원본 손실 여부
2. **PII 마스킹 범위**: utterance WAV 만 마스킹? raw_audio 도 마스킹?
3. **이전 시기 (raw_direct 이전) 통화 채널 분포** — 50건 표본 외 검증
4. **Hold-out 세트 초기 선정**: P0.5 합의 후 실행 (회의 안건 #3)

---

**문서 끝**.

다음:
1. CBO 회의 안건 정리 → 별도 브리핑 문서
2. P1 ERD 구현 → migration SQL draft
3. P1 UI prototype (Figma 또는 admin React 컴포넌트 스켈레톤)
