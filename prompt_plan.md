---
title: "STAGE 15~17 — 화자 자동 식별 + 세그먼트 주제 라벨 + 데이터셋 확장"
status: active
created: 2026-05-14
type: feature
---

## 완료된 추가 작업 (2026-05-17)

### ExportLog + 납품 패키지 모달 ✅

| 파일 | 내용 |
|------|------|
| `uncounted-admin/src/types/admin.ts` | `ExportLog` 타입 추가 (`session_ids: string[]` 포함) |
| `uncounted-admin/src/lib/exportLog.ts` | localStorage 기반 ExportLog CRUD (DB 연동 전 최소 구현) |
| `uncounted-admin/src/components/domain/ExportLogPanel.tsx` | 최근 다운로드 로그 접기/펴기 + 납품 등록 버튼 |
| `uncounted-admin/src/components/domain/DeliveryPackageModal.tsx` | ExportLog → client 연결 일괄 납품 등록 모달 |
| `uncounted-admin/src/pages/admin/AdminInventoryPage.tsx` | session_ids 캡처(핸들러 3개) + DeliveryPackageModal 연결 |
| `uncounted-admin/src/lib/adminHelpers.ts` | `buildCallTranscriptTxt()` 추가, `owner_inference` 필드 보강 |

납품 흐름: 다운로드 → ExportLog 기록(localStorage) → ExportLogPanel 납품 등록 버튼 → DeliveryPackageModal(납품처·단가 입력) → `createDelivery()` 세션별 순차 호출

TODO: ExportLog DB 연동(`/api/admin/export-logs`), 납품 완료 후 ExportLog에 "납품됨" 상태 표시

### 최소 판매 가능 데이터셋 — 창 A (도메인 로직 + Export 유틸) ✅

| 파일 | 추가 내용 |
|------|----------|
| `uncounted-admin/src/types/adminSession.ts` | `SaleStatus` 타입, `getSaleStatus()`, `isMinSaleable()`, `getSaleStatusLabel()`, `getSaleStatusBadgeVariant()` |
| `uncounted-admin/src/lib/adminHelpers.ts` | `MinSaleableExportParams` 인터페이스, `buildUtterancesJsonl()`, `buildCallExportJson()`, `buildMinSaleableManifest()`, `buildDatasetSummary()`, `buildQualityReport()`, `buildConsentReport()`, `exportMinSaleableDataset()` |

판정 정책: consent both_agreed + pipeline complete + review approved + pii 정상 + 포함 발화 ≥ 1 → sellable. locked만 export 제외, restricted는 옵션 포함. speaker role은 candidate 고정.

### 품질 검사 3종 — gpu-worker.ts + worker.py 양쪽 반영 ✅

| # | 기능 | 위치 |
|---|------|------|
| F1 | both_agreed + raw_audio_url IS NULL > 5건 → 경보 로그 | sweepStuckSessions / sweep_stuck_sessions |
| F2 | segment_id=NULL 발화 → session_segments 시간 범위 자동 역할당 | sweepSegmentBackfill / sweep_segment_backfill |
| F3 | both_agreed + 화자 1명 + 발화 ≥ 6 → pyannote 실패 의심, pending 재큐 | processOneSession / process_one_session |

- admin-utterances-v2: speaker_role/gender/age, segment_topic 응답 추가
- packageBuilder: segments.jsonl export (STAGE 16)

# STAGE 15~17 — 화자 자동 식별 + 세그먼트 주제 라벨 + 데이터셋 확장

## 핵심 원칙 (Advisor 반영)

| # | 제약 |
|---|------|
| 1 | **실행 순서**: 17 (데이터셋) → 15 (화자분석, 말투연령 헤드 학습 포함) → 16 (세그먼트) |
| 2 | **관계 룰엔진은 PII 마스킹 전에 실행** — raw transcript에서 호칭 추출 |
| 3 | **관계 룰엔진 방향**: 발화자 X가 호칭을 말하면 → 상대 화자의 relation에 기록 |
| 4 | **Pyannote centroid 재사용** — 별도 모델 없이 cosine similarity로 SPEAKER_00 판정 |
| 5 | **KcELECTRA CPU 전용** — 말투연령 헤드도 STAGE 14 백본 공유 |
| 6 | **화자 속성은 session_speakers 테이블에 정규화** — utterances에 중복 저장 X |
| 7 | **마이그레이션 순서**: 066 → 067 → 068 |
| 8 | **NULL = "신호 없음"** — 분석 불가 시 NULL (unknown 값 X) |
| 9 | **고정 주제 분류 체계 30종** + **시드 문구 사전** (주제별 5~10문장) |
| 10 | **Export JSON schema_version: 2** — 첫날부터 |
| 11 | **SPEAKER_00 폴백**: 누적 발화 시간 최장 화자 = 본인 + speaker_role_source 기록 |
| 12 | **세그먼트 최소 3발화**, 코사인 유사도 임계값 0.35 (env var 튜닝 가능) |
| 13 | **speech_age_model_version 컬럼** — 066에 포함, STAGE 14 auto_label_model_version과 평행 |

---

## STAGE 17 — 데이터셋 확장 (먼저 실행)

### 17.1 `prepare_emotion_dataset.py` 수정

**파일**: `uncounted-voice-api/scripts/prepare_emotion_dataset.py`

5번째 소스 추가: AI허브 "공감형 대화"
- 감정 → 긍정/중립/부정 매핑 적용 (기존 4개 소스와 동일 방식)
- 대화행위 → 기존 15종 매핑
- 경로: `.env` `AIHUB_EMPATHETIC_DIR`

### 17.2 말투연령 학습 데이터 준비

**파일**: `uncounted-voice-api/scripts/prepare_speech_age_dataset.py` (신규)

소스: AI허브 "연령대별 특징적 발화(은어·속어 등)"
- 연령대 레이블: 20대/30대/40대/50대+ (4-class)
- 출력: `data/speech_age/train.csv`, `data/speech_age/val.csv`
- 형식: `text,age_group` (탭 구분, UTF-8)
- 경로: `.env` `AIHUB_SPEECH_AGE_DIR`

---

## STAGE 15 — 화자 자동 식별 + 생체·언어 분석

### 15.1 DB 마이그레이션 066 — session_speakers 테이블 신규

**파일**: `uncounted-api/supabase/migrations/066_session_speakers.sql`

화자 속성은 **발화 단위가 아닌 화자 단위** 속성이므로 별도 테이블로 정규화:

```sql
CREATE TABLE IF NOT EXISTS session_speakers (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id              UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  speaker_label           TEXT NOT NULL,      -- 'SPEAKER_00' | 'SPEAKER_01'
  speaker_role            TEXT,               -- 'self' | 'other' | NULL
  speaker_role_source     TEXT,               -- 'profile_match' | 'heuristic' | NULL
  speaker_gender          TEXT,               -- 'male' | 'female' | NULL
  speaker_voice_age_range TEXT,               -- '20s' | '30s' | '40s' | '50s+' | NULL
  speaker_speech_age_range TEXT,              -- '20s' | '30s' | '40s' | '50s+' | NULL
  speaker_speech_age_model_version TEXT,      -- 재학습 추적용
  speaker_relation        TEXT,               -- '부모' | '배우자' | '직장상사' | ... | NULL
  created_at              TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(session_id, speaker_label)
);

-- utterances에 FK 추가 (session_speaker_id)
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS session_speaker_id UUID
    REFERENCES session_speakers(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_session_speakers_session
  ON session_speakers(session_id);
CREATE INDEX IF NOT EXISTS idx_utterances_session_speaker
  ON utterances(session_speaker_id) WHERE session_speaker_id IS NOT NULL;
```

### 15.2 화자 분석 서비스

**파일**: `uncounted-voice-api/app/services/speaker_analysis_service.py` (신규)

#### SPEAKER_00 자동 판정 (pyannote centroid 재사용)

```python
def identify_self_speaker(speaker_centroids: dict[str, np.ndarray],
                           speaker_durations: dict[str, float],
                           user_id: str) -> tuple[str, str]:
    profile = fetch_voice_profile(user_id)  # voice_profiles.embedding
    if profile is not None:
        scores = {spk: cosine_sim(centroid, profile)
                  for spk, centroid in speaker_centroids.items()}
        best = max(scores, key=scores.get)
        if scores[best] >= 0.75:
            return best, 'profile_match'
    longest = max(speaker_durations, key=speaker_durations.get)
    return longest, 'heuristic'
```

#### 성별 감지 (librosa F0 중앙값)

```python
def detect_gender(audio_segment: np.ndarray, sr: int) -> str | None:
    f0 = librosa.yin(audio_segment, fmin=50, fmax=400)
    f0_valid = f0[f0 > 0]
    if len(f0_valid) == 0:
        return None
    median = float(np.median(f0_valid))
    if 85 <= median <= 180:   return 'male'
    if 165 <= median <= 255:  return 'female'
    return None
```

#### 관계 룰엔진 — 방향 명시

```python
def extract_relation_for_other(
    utterances_by_speaker: dict[str, list[str]],
    self_speaker: str
) -> dict[str, str]:
    """발화자 self_speaker가 호칭을 말하면 → OTHER 화자의 relation에 기록"""
    results = {}
    self_texts = ' '.join(utterances_by_speaker.get(self_speaker, []))
    for pattern, label in RELATION_RULES.items():
        if re.search(pattern, self_texts):
            for spk in utterances_by_speaker:
                if spk != self_speaker:
                    results[spk] = label
            break
    return results
```

### 15.3 STT 파이프라인 통합

파이프라인 실행 순서:
```
1. WhisperX + pyannote 화자분리
2. identify_self_speaker()
3. extract_relation_for_other(raw_texts, self_speaker)  ← PII 마스킹 전
4. PII 마스킹 적용
5. auto_label_service.predict() (STAGE 14)
6. detect_gender() / estimate_voice_age() / predict_speech_age() per speaker
7. session_speakers 레코드 구성
8. build_result() 반환
```

### 15.4 스키마 확장

**파일**: `uncounted-voice-api/app/models/schemas.py` — `SpeakerInfo` 신규 + `UtteranceResponse`에 `session_speaker_id` 추가

### 15.5 말투연령 모델 학습 스크립트

**파일**: `uncounted-voice-api/scripts/train_speech_age_model.py` (신규)
- STAGE 14 emotion 모델 백본 공유 (KcELECTRA)
- 출력: `models/speech_age/v{YYYYMMDD_HHMMSS}/` + `current` symlink

---

## STAGE 16 — 세그먼트 기반 주제 라벨

### 16.1 DB 마이그레이션 067

**파일**: `uncounted-api/supabase/migrations/067_session_segments.sql`

```sql
CREATE TABLE IF NOT EXISTS session_segments (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id       UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  segment_index    INTEGER NOT NULL,
  topic            TEXT NOT NULL,
  start_ms         INTEGER NOT NULL,
  end_ms           INTEGER NOT NULL,
  utterance_count  INTEGER NOT NULL,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);
```

### 16.2 DB 마이그레이션 068

**파일**: `uncounted-api/supabase/migrations/068_utterances_segment_id.sql`

```sql
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS segment_id UUID
    REFERENCES session_segments(id) ON DELETE SET NULL;
```

### 16.3 주제 분류 체계 — 시드 문구 사전

고정 30종 주제 + 주제별 시드 문장 5~10개 → KcELECTRA 임베딩 → anchor centroid
세그먼트 centroid ↔ anchor 최근접 → 주제 레이블

```python
TOPIC_SEEDS = {
    "일상·안부": ["오늘 어떻게 지냈어?", "요즘 바빠?", ...],
    "가족·육아": ["아이 어린이집 다녀왔어?", ...],
    # ... 30종
}
COSINE_THRESHOLD = float(os.getenv('TOPIC_COSINE_THRESHOLD', '0.35'))
MIN_SEGMENT_UTTERANCES = 3
```

### 16.4 Export JSON schema_version: 2

```json
{
  "schema_version": 2,
  "session_id": "...",
  "speakers": [{"speaker_label": "SPEAKER_00", "speaker_role": "self", ...}],
  "segments": [{"segment_id": "...", "topic": "가족·육아", "utterances": [...]}]
}
```

---

## 핵심 파일 목록

| 단계 | 파일 | 변경 |
|------|------|------|
| 17 | `uncounted-voice-api/scripts/prepare_emotion_dataset.py` | 수정 |
| 17 | `uncounted-voice-api/scripts/prepare_speech_age_dataset.py` | 신규 |
| 15 | `uncounted-api/supabase/migrations/066_session_speakers.sql` | 신규 |
| 15 | `uncounted-voice-api/app/services/speaker_analysis_service.py` | 신규 |
| 15 | `uncounted-voice-api/scripts/train_speech_age_model.py` | 신규 |
| 15 | `uncounted-voice-api/app/models/schemas.py` | 수정 |
| 15 | `uncounted-voice-api/app/stt_processor.py` | 수정 |
| 16 | `uncounted-api/supabase/migrations/067_session_segments.sql` | 신규 |
| 16 | `uncounted-api/supabase/migrations/068_utterances_segment_id.sql` | 신규 |
| 16 | `uncounted-voice-api/app/services/topic_segmentation_service.py` | 신규 |

---

## 작업 순서

```
0. 사용자 계획 승인

[STAGE 17]
1. prepare_emotion_dataset.py — 공감형 대화 5번째 소스 추가
2. prepare_speech_age_dataset.py — 연령대별 발화 데이터 파이프라인 신규

[STAGE 15]
3. 066_session_speakers.sql
4. speaker_analysis_service.py
5. train_speech_age_model.py
6. stt_processor.py 수정 (관계 추출 → PII → 자동라벨 → 화자분석)
7. schemas.py 수정

[STAGE 16]
8. 067_session_segments.sql
9. 068_utterances_segment_id.sql
10. topic_segmentation_service.py
11. stt_processor.py 수정 (세그먼트 단계 추가)
12. Export JSON schema_version: 2

[검증]
13. cd uncounted-voice-api && python -m pytest tests/ -x
14. cd uncounted-api && npx tsc --noEmit

[배포 — 수동]
15. Supabase SQL Editor: 066 → 067 → 068 순서로 적용
16. GPU 서버: git pull + restart
17. Render Manual Deploy (api-dev)
```

---

## 위험 / 결정

| 위험 | 대응 |
|------|------|
| 말투연령 데이터셋 미확보 | speech_age_range = NULL graceful degradation |
| pyannote centroid API 미노출 | stt_processor에서 직접 계산 후 서비스에 주입 |
| 고정 주제 오탐률 | threshold 0.35 env var 튜닝 가능 |
| 관계 룰엔진 오분류 | NULL 기본, 오탐보다 미탐이 안전 |

## 절대 금지

- KcELECTRA / 말투연령 헤드를 GPU에 올리는 것
- 관계 추출을 PII 마스킹 **후에** 실행하는 것
- 화자 속성을 utterances 행마다 중복 저장하는 것
- 067 전에 068 마이그레이션 실행
- 자유형 TF-IDF 주제 레이블 사용
