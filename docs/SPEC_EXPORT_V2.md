# SPEC_EXPORT_V2 — Uncounted v11 음성 데이터셋 Export 통합 스펙

> 본 문서는 **내부 개발용 단일 진실 문서**.
> 외부 ZIP에 미포함. Safety scan 대상 X.
> 안전선 #6 키워드(AI Hub, kcelectra, whisperx 등)가 본문에 등장하는 것은 **설명 목적이며 정상**.
> 외부 ZIP 산출물 자체의 safety scan은 [SAFETY_CHECKLIST.md](SAFETY_CHECKLIST.md) 참조.

---

## 0. 문서 메타

| 항목 | 값 |
|---|---|
| 문서 버전 | v1.0 |
| 작성일 | 2026-05-18 |
| 작업창 | 창 0 (공통 스펙) |
| 후속 창 | 창 A (DB+extractor), 창 B (gpu-worker), 창 C (export-builder), 창 D (API), 창 E (Admin UI), 창 F (재학습) |
| 시점 기준 | **마이그레이션 074 적용 후** (074 미적용 시 🟡 컬럼 빈 값) |
| 상위 문서 | [prompt_plan.md](../prompt_plan.md) STAGE 15~17 |
| 자매 문서 | [SAFETY_CHECKLIST.md](SAFETY_CHECKLIST.md), [WORKSTREAM_DEPENDENCIES.md](WORKSTREAM_DEPENDENCIES.md) |

### 0.1 본 문서의 보안 위상

- **내부 문서**: 본 SPEC, SAFETY_CHECKLIST, WORKSTREAM_DEPENDENCIES, CLAUDE.md, prompt_plan.md 모두 외부 ZIP 미포함
- **외부 산출물**: 오직 `docs/SPEC §2`에 정의된 ZIP 트리만 외부 노출 대상
- **Safety scan 적용 범위**: 외부 ZIP 구성 산출물만 (SAFETY_CHECKLIST §2.3 검사 제외 목록 참조)

### 0.2 후속 창 작업자에게

본 문서를 처음 읽는다면:
1. §1 (안전선 13개) — 모든 결정의 기준
2. §2 (외부 ZIP 구조) — 최종 산출물 형태
3. §4 (매핑표) — 코딩 시 1:1 참조
4. §6 (API Contract) — UI/백엔드 인터페이스
5. §7 (검증 22항목) — 자체 점검 체크리스트

---

## 1. 안전선 13개

### 🔴 외부 노출 절대 금지 (7항목)

**안전선 #1 — 화자 self/other 확정 저장 금지**
- 이유: 화자 정체 확정은 사용자 동의 + 법적 책임 이슈
- 적용: `session_speakers.speaker_identity_inference` JSONB의 `predicted_role` 은 확률값(`owner_probability`, `counterparty_probability`)과 함께만 보존
- 외부 ZIP: `speaker_role` 은 추론값(self/other 아닌 'owner'/'counterparty'/'unknown')만 노출, 확정 단어 미사용

**안전선 #2 — toxicity BOOLEAN 컬럼 금지**
- 이유: 독성 발화 BOOLEAN 표기는 법적 분쟁 시 위험
- 적용: `utterances.toxicity_label` JSONB placeholder만 보존, 외부 ZIP 미노출
- 외부 ZIP: toxicity 관련 필드 0건

**안전선 #3 — pii_intervals.original 외부 노출 금지**
- 이유: 마스킹 전 원문 PII 누출
- 적용: [export-builder.ts](../uncounted-api/src/services/export-builder.ts#L104) `safePiiIntervals()` 가 `original` 필드 명시적 제거 (destructuring 패턴)
- 검증: ZIP 내 `*.json`, `*.jsonl` 에 `"original"` 키 0건
- **현재 상태**: ✅ 정상 작동 중 (export-builder.ts:L36 `SECURITY: never forward this field` 주석)

**안전선 #4 — 원문 PII export 금지**
- 이유: 안전선 #3의 일반화 — 모든 PII 원문 보호
- 적용 대상:
  - `pii_intervals.original` (안전선 #3)
  - `numeric_patterns.surface_text` (🟡 074 후, 안전선 #3 보강)
  - `numeric_patterns.normalized` (🟡 074 후, 안전선 #3 보강)
- 외부 ZIP: 마스킹된 표현만 (`surface_masked`, `normalized_masked`, `[PHONE]`, `[CARD]`, `[ACCOUNT]` 등)

**안전선 #5 — export 부적격 상태 세션/발화 export 금지** (광의 정의)
- 이유: 동의/검수/분쟁 보호. 부적격 상태를 광의로 정의해 향후 신규 상태 추가 시 안전선 추가 없이 통합.
- 현재 구현 기준 (실측 스키마):
  - `sessions.consent_status` ≠ `both_agreed` 인 세션 제외 (default `locked` 도 제외 대상)
  - `sessions.review_status` ≠ `approved` 인 세션 제외 (default `pending` 도 제외)
  - `utterances.review_status` = `excluded` 인 발화 제외
- 향후 확장 (동일 안전선 #5 에 통합, 별도 안전선 신설 X):
  - `dispute_status`, `withdrawal_status`, `export_status`, `session_dataset_eligible=false` 등 신규 상태가 도입되면 본 안전선 정의에 추가
- 구현 원칙 (실측 검증 후 결정):
  - **존재하지 않는 함수/컬럼 가정 금지**: `sale_status`, `export_status`, `getSaleStatus()` 는 **현재 스키마/코드에 미존재** (migration 0건, 함수 0건). 따라서 가정하지 않는다.
  - 단순 SQL 필터 또는 export-builder 내부 helper `isExportEligible(session, utterances)` 둘 다 OK (창 C 선택)
- 외부 ZIP 노출 정책:
  - `consent_status` 원문 키 미노출
  - `manifest.json` 의 `export_eligibility_summary` 만 제공:
    ```json
    {
      "eligible_session_count": 100,
      "excluded_session_count": 12,
      "exclusion_reasons": {
        "consent_not_agreed": 5,
        "review_not_approved": 7
      }
    }
    ```
- 검증: 외부 ZIP `manifest.json` 의 모든 포함 세션이 `consent_status='both_agreed' AND review_status='approved'` (위 조건의 SQL 사후 검증)
- **사실 확인 (실측 2026-05-18)**:
  - `sessions.consent_status`: TEXT, CHECK 제약 없음, 코드 사용값 `locked`/`user_only`/`both_agreed`/`pending`/`agreed`/`rejected`/`withdrawn` ([007:9](../uncounted-api/supabase/migrations/007_session_verification_cols.sql))
  - `sessions.review_status`: CHECK 5종 — `pending`/`in_review`/`approved`/`rejected`/`needs_revision`, default `pending` ([052:43,70](../uncounted-api/supabase/migrations/052_sessions_pipeline_status.sql))

**안전선 #6 — AI Hub / 모델명 / 학습 출처 ZIP 노출 금지**
- 이유: 학습 데이터 출처/모델명 노출 시 IP 분쟁 + 경쟁사 추적 위험
- 금지 키워드 (4 카테고리):
  - 데이터셋 출처: `AI Hub`, `aihub`, `AIHUB`
  - 분류기 모델명: `KcELECTRA`, `kc-electra`, `kcelectra`, `snunlp`, `KR-ELECTRA`
  - 음성 모델명: `WhisperX`, `whisperx`, `pyannote`, `WeSpeaker`, `wespeaker`
  - 인프라/학습: `HuggingFace`, `HF_TOKEN`, `finetune`, `train_`
- 적용: 모든 외부 ZIP 파일 내 grep 0건
- 매핑표 변환 규칙으로 강제 (§4): `aihub_*` → `automatic`, `kcelectra_*` → `supervised_model` 등

**안전선 #7 — internal 산출물 외부 ZIP 미포함**
- 이유: 디버깅 / 검증 / 학습용 산출물에는 출처/모델명/내부 메타 포함
- 미포함 파일:
  - `internal_*.json`
  - `model_pipeline_report*.json`
  - `finetuning_readiness_report*.json`
  - `processing_internal_*.json`
- 외부 ZIP 디렉터리 트리에 위 패턴 0건

### ⚠️ 기본값 / 옵션 (6항목)

**안전선 #8 — audio_export_mode 기본값 `reference_only`**
- 이유: WAV 임베디드는 ZIP 크기 폭증 + 의도치 않은 음성 배포 위험
- 적용: `export_logs.metadata.audio_export_mode` 기본 `reference_only`, `embedded` 는 사용자 명시 선택 시만
- 카테고리: 🔵 (DB 컬럼 X, 런타임 결정)

**안전선 #9 — Layer 1 (delivery_packages) 도 reference_only 기본**
- 이유: 안전선 #8의 일반화 — 모든 레이어에서 embedded는 옵션
- 적용: `buildDeliveryPackageZip(packageId, { audioMode = 'reference_only' })`
- 변경 이력: 이전 안 ("Layer 1 always embedded") 폐기 — 안전선 #4 위반 위험

**안전선 #10 — restricted 세션은 명시 옵션 시만 포함**
- 이유: 일부 제한적 동의(`consent_status = 'restricted'` 가정)는 사용자 선택 시만
- 적용: API `include_restricted: boolean` 기본 false, true 시에만 포함

**안전선 #11 — include_audio는 사용자 선택 시만 true**
- 이유: 안전선 #8/9 의 API 레이어 표현
- 적용: 모든 export API 의 `include_audio` 파라미터 기본 false

**안전선 #12 — commercial_labels는 method 명시**
- 이유: rule_based / heuristic 기반 라벨을 supervised model 산출물처럼 보이게 하면 구매자 오인
- 적용: 외부 method 값 `rule_based_mvp`, `heuristic_mvp` 중 하나 명시
- 매핑표 §4 변환 규칙으로 강제

**안전선 #13 — commercial label 때문에 confidence_tier=needs_review 강제 금지**
- 이유: 상업적 라벨이 자동으로 `needs_review` 가 되면 정상 데이터가 후순위 처리
- 적용: `confidence_tier` 는 confidence 값 기준만 (label_origin 무관)

### 1.1 안전선 ↔ 매핑표 카테고리 대응 빠른 참조

| 안전선 | 관련 카테고리 | 매핑표 §4 위치 |
|---|---|---|
| #1 | ❌ / ✅(가공) | §4.3 session_speakers |
| #2 | ⚪ | §4.1 utterances.toxicity_label |
| #3, #4 | ❌(원문) / ✅(마스킹) | §4.1 pii_intervals, numeric_patterns |
| #5 (광의) | (필터) | §4.2 sessions.consent_status + sessions.review_status + utterances.review_status |
| #6 | ✅(변환) | §4.1 source, auto_label_model_version, speech_act |
| #7 | (제외) | §2 ZIP 구조 |
| #8, #9, #11 | 🔵 | §4.1 audio.audio_export_mode (런타임) |
| #10 | (필터) | §4.2 sessions |
| #12, #13 | ✅(변환) | §4.1 method, confidence_tier |

---

## 2. 외부 ZIP 구조

### 2.1 단일 세션 ZIP (`session_export.zip`, Layer 2)

```
session_export.zip
├── README_DATASET_CARD.md          # 데이터셋 카드 (구매자 친화 메타)
├── manifest.json                   # ZIP 메타 (schema_version, session_id, layer)
├── calls/
│   ├── call_{session_id}.json     # 세션 레벨 메타 + 발화 요약
│   └── call_{session_id}.txt      # 전사 텍스트 (마스킹 적용)
├── utterances/
│   └── utterances_{session_id}.jsonl  # 발화 단위 JSONL (한 줄 = 1 발화)
├── labels/
│   ├── labels_{session_id}.jsonl  # 라벨 단위 JSONL (한 줄 = 1 라벨)
│   └── label_schema.json          # 라벨 schema (JSON Schema)
├── metadata/
│   ├── dataset_summary.json       # 통계 (utterance 수, 시간, 화자 수)
│   ├── dataset_quality_report.json
│   ├── quality_report.json        # 발화별 quality_score / quality_grade
│   ├── label_report.json          # 라벨 분포 통계
│   ├── pii_report.json            # PII 마스킹 통계 (원문 0건)
│   ├── consent_report.json        # 동의 통계 (locked 0건 검증)
│   ├── audio_manifest.json        # 발화 ↔ WAV 매핑 (reference_only일 때 S3 URL)
│   ├── number_pattern_report.json # 🟡 074 후, 마스킹된 숫자 패턴 통계
│   ├── audio_metadata_report.json # SNR, speech_ratio, clipping_ratio 통계
│   ├── utterance_form_report.json # 존댓말/반말, 질문 유형 통계
│   └── processing_summary.json    # 처리 파이프라인 메타 (모델명 일반화)
└── audio/                          # include_audio=true 일 때만
    └── {session_id}/
        ├── utt_{utterance_id}.wav  # 발화 단위 WAV
        └── session_full.wav        # 세션 전체 WAV (선택)
```

### 2.2 배달 패키지 ZIP (`delivery_package.zip`, Layer 1)

```
delivery_package_{package_number}.zip
├── README_DATASET_CARD.md
├── package_manifest.json           # 패키지 레벨 메타 (session_count, duration_hours)
├── sessions/
│   ├── {session_id_1}/             # 각 세션은 §2.1 구조와 동일
│   ├── {session_id_2}/
│   └── ...
└── package_metadata/
    ├── package_summary.json
    ├── package_quality_report.json
    └── package_consent_report.json
```

### 2.3 배치 ZIP (`batch_export.zip`, Layer 3)

Layer 2 와 동일 구조, 단 `sessions/` 디렉터리 하에 다수 세션 묶음.

### 2.4 ZIP 생성 옵션 매트릭스

| Layer | 호출자 | audio_export_mode 기본 | include_restricted 기본 | 사용처 |
|---|---|---|---|---|
| Layer 1 | packaging-worker | reference_only (안전선 #9) | false | 정기 납품 |
| Layer 2 | Admin UI 단건 다운로드 | reference_only | false | QA / 단건 검토 |
| Layer 3 | Admin UI 배치 다운로드 | reference_only | false | 임시 export |

---

## 3. 외부용 method 값 (일반화)

### 3.1 허용 값 (5종)

| 외부 method | 의미 | 사용 위치 |
|---|---|---|
| `automatic` | 자동 라벨링 (출처 불문) | label_origin |
| `supervised_model` | 지도학습 분류기 | label_origin (분류기 산출 시) |
| `rule_based_mvp` | 규칙 기반 MVP | commercial_labels |
| `heuristic_mvp` | 휴리스틱 MVP | commercial_labels |
| `not_available` | 미산출 / 미적용 | 결측 처리 |

### 3.2 금지 값 (4 카테고리, 외부 노출 X)

| 내부 method (DB/코드) | 외부 변환 | 안전선 |
|---|---|---|
| `aihub_purposive`, `aihub_*` | `automatic` | #6 |
| `kcelectra_emotion_v1`, `kcelectra_*` | `supervised_model` | #6 |
| `whisperx_v3`, `whisperx_*` | (전사 자체는 노출, method 키 제거) | #6 |
| `snunlp_*`, `KR-ELECTRA_*` | `supervised_model` | #6 |

### 3.3 변환 강제 위치

- export-builder.ts `methodMap()` (창 C 작업): DB 값 → 외부 값 1:1 변환
- 매핑표 §4.1, §4.2 에 행별 변환 규칙 명시
- SAFETY_CHECKLIST §3 grep 으로 잔존 검사

---

## 4. 매핑표 — 내부 DB ↔ 외부 ZIP 필드

### 4.0 카테고리 정의

| 기호 | 의미 |
|---|---|
| ✅ | 본 SPEC 시점(074 적용 후)에 사용 가능, 074 이전부터 존재 |
| 🟡 | 본 SPEC 시점에 도입되는 신규 컬럼 (074 적용 후 활성화) |
| 🔵 | DB 컬럼 X, 런타임 결정 (audio_export_mode 등) |
| ⚪ | Placeholder (미래 ML 모델용, 외부 노출 보류) |
| ❌ | 외부 노출 금지 (internal-only) |

### 4.1 매핑표 row 7개 컬럼 의미 (부록 A 상세)

| # | 컬럼 | 예시 |
|---|---|---|
| 1 | 내부 필드 (DB/API) | `utterances.transcript_text` |
| 2 | 외부 필드 (ZIP) | `utterances[].text` |
| 3 | 카테고리 | ✅ |
| 4 | 변환 규칙 | 마스킹 후 그대로 |
| 5 | 노출 위험 | PII (마스킹 시 없음) |
| 6 | 안전선 | #4 |
| 7 | 비고 | - |

---

### 4.2 utterances 테이블 매핑 (~77 row)

> 기존 68 컬럼 + 074 신규 9 row. JSONB 컬럼은 주요 서브필드를 별도 row로 분리.

#### 4.2.1 식별자 / FK (5)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `id` | `utterances[].utterance_id` | ✅ | 그대로 (UUID) | 없음 | - | - |
| `session_id` | `utterances[].session_id` | ✅ | 그대로 | 없음 | - | - |
| `chunk_id` | (제외) | ❌ | 미노출 | 내부 식별자 | - | 외부 가치 X |
| `user_id` | (제외) | ❌ | 미노출 | PII (식별자) | #4 | - |
| `session_speaker_id` | `utterances[].session_speaker_id` | ✅ | 그대로 (UUID, 세션 내 고유) | 식별자(세션 한정) | - | session_speakers FK |
| `segment_id` | `utterances[].segment_id` | ✅ | 그대로 (UUID) | 없음 | - | session_segments FK |

#### 4.2.2 순서 / 화자 (4)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `sequence_in_chunk` | (제외) | ❌ | 미노출 | 내부 정렬 키 | - | - |
| `sequence_order` | `utterances[].sequence_order` | ✅ | 그대로 (INTEGER) | 없음 | - | 세션 내 순서 |
| `speaker_id` | `utterances[].speaker_label` | ✅ | 그대로 (`SPEAKER_00` 등) | 익명화 완료 | #1 | pyannote 산출 |
| `speaker_id_int` | `utterances[].speaker_index` | ✅ | 그대로 (INTEGER) | 없음 | - | AI-Hub 호환 |
| `is_user` | (제외) | ❌ | 미노출 | 내부 결정값 | #1 | self/other 확정 금지 |

#### 4.2.3 타이밍 (9)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `start_sec` | `utterances[].start_sec` | ✅ | 그대로 (NUMERIC) | 없음 | - | - |
| `end_sec` | `utterances[].end_sec` | ✅ | 그대로 | 없음 | - | - |
| `duration_sec` | `utterances[].duration_sec` | ✅ | 그대로 | 없음 | - | - |
| `start_ms` | (제외, sec 사용) | ❌ | 미노출 | 없음 | - | sec 가 외부 표준 |
| `end_ms` | (제외, sec 사용) | ❌ | 미노출 | 없음 | - | - |
| `duration_ms` | (제외, sec 사용) | ❌ | 미노출 | 없음 | - | - |
| `padded_start_sec` | `utterances[].padded_start_sec` | ✅ | 그대로 | 없음 | - | 발화 분리 마진 |
| `padded_end_sec` | `utterances[].padded_end_sec` | ✅ | 그대로 | 없음 | - | - |
| `padded_duration_sec` | `utterances[].padded_duration_sec` | ✅ | 그대로 | 없음 | - | - |

#### 4.2.4 오디오 (3)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `storage_path` | `audio.s3_key` (audio_manifest.json 내) | ✅ | 그대로 (reference_only) / WAV 임베드 시 ZIP 내부 경로 | 내부 S3 키 (signed URL 사용 시 안전) | #11 | - |
| `file_size_bytes` | `audio.file_size_bytes` | ✅ | 그대로 | 없음 | - | - |
| `upload_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |

#### 4.2.5 전사 (2)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `transcript_text` | `utterances[].text` | ✅ | 마스킹 적용 후 그대로 | PII (마스킹 시 없음) | #3, #4 | `[PHONE]` 등 마스크 토큰 포함 |
| `transcript_words` | `utterances[].words` | ✅ | 마스킹 후 그대로 (단어별 timestamp) | PII (마스킹 시 없음) | #3, #4 | JSONB array |

#### 4.2.6 음질 메트릭 (7)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `snr_db` | `quality.snr_db` | ✅ | 그대로 | 없음 | - | - |
| `speech_ratio` | `quality.speech_ratio` | ✅ | 그대로 | 없음 | - | - |
| `clipping_ratio` | `quality.clipping_ratio` | ✅ | 그대로 | 없음 | - | - |
| `beep_mask_ratio` | `quality.beep_mask_ratio` | ✅ | 그대로 | 없음 | - | PII 비프 마스킹 비율 |
| `volume_lufs` | `quality.volume_lufs` | ✅ | 그대로 | 없음 | - | - |
| `quality_score` | `quality.score` | ✅ | 그대로 | 없음 | - | - |
| `quality_grade` | `quality.grade` | ✅ | 그대로 (A/B/C/D) | 없음 | - | - |

#### 4.2.7 라벨 — 감정 / 화행 (6)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `labels` | `auto_labels` | ✅ | JSONB 그대로 (모델명 키 제외) | 없음 | #6 | 모델명 키 제거 필요 |
| `emotion` | `auto_labels.emotion` | ✅ | 그대로 (`joy`/`sadness` 등) | 없음 | - | - |
| `emotion_confidence` | `auto_labels.emotion_confidence` | ✅ | 그대로 (NUMERIC 0~1) | 없음 | - | - |
| `dialog_act` | `auto_labels.dialog_act` | ✅ | 그대로 (15-class 고가치 라벨 유지) | 없음 | - | - |
| (조합 신규) | `auto_labels.dialog_act_group` | ✅ | 런타임 자동 생성: §5.1.4 DIALOG_ACT_TO_GROUP 매핑 사전 적용 (6 그룹) | 없음 | - | 구매자 유연성 (15 또는 6 선택). DB 컬럼 X |
| `dialog_act_confidence` | `auto_labels.dialog_act_confidence` | ✅ | 그대로 | 없음 | - | - |
| `dialog_intensity` | `auto_labels.dialog_intensity` | ✅ | 그대로 (INTEGER) | 없음 | - | - |

#### 4.2.8 라벨 — 메타 (3)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `label_source` | `label_origin` | ✅ | 매핑: `user`→`user`, `auto_*`→`automatic`, `admin_*`→`admin_reviewed` | 출처 (내부값 누출 시 IP) | #6, #12 | **매핑 강제** |
| `label_confidence` | `label_confidence` | ✅ | 그대로 (NUMERIC) | 없음 | - | - |
| `auto_label_model_version` | `label_version` | ✅ | 모델명 패턴(`kcelectra_*`, `whisperx_*`) → `auto_label_v2` 일반화. 버전 타임스탬프(`v20250513_120000`)는 그대로 가능 | 모델명 (변환 필수) | #6 | **매핑 강제** |

#### 4.2.9 PII (3)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `pii_intervals` | `pii_labels` | ✅ | `safePiiIntervals()` (export-builder.ts:L104). `original` 키 명시적 제거 | 원문 PII (변환 필수) | #3, #4 | **이미 정상 작동** |
| `pii_intervals[].original` | (절대 제외) | ❌ | 미노출 | 원문 PII | #3 | export-builder strip |
| `pii_intervals[].startSec/endSec/maskType/piiType` | `pii_labels[].*` | ✅ | 그대로 | 없음 | - | - |

##### maskType provenance (D4b-3)

`pii_intervals[].maskType` 은 **각 구간에 실제로 적용된 처리**를 나타내는 provenance 값이다(고정 enum 아님, `type: string`).

| maskType | 의미 | 저장 오디오 |
|---|---|---|
| `text_only` | 텍스트(transcript) 마스킹됨 · 음향 마스킹 **미적용** · 구간은 downstream 마스킹용 보존 | **원본(불변)** |
| `beep` / `audio_beep_1khz` | 1kHz 비프 음향 마스킹 적용 | 변형됨 |
| `silence` | 무음 음향 마스킹 적용 | 변형됨 |

`pii_meta.maskingMethod` 는 패키지의 **실제 maskType 분포에서 산출**한다(`maskingProvenance.ts`):

- 음향 변형 maskType(beep/silence)이 **실재할 때만** `audio_beep_1khz`/`audio_silence` 토큰을 표기한다.
- `text_only` 만 있는 패키지는 `text_substitute` 만 표기하며 `audio_beep_1khz` 를 **주장하지 않는다**.
- `pii_meta.maskTypeDistribution` 으로 분포를 투명 공개한다.

> 이 표기는 적용된 처리의 **정직한 provenance** 이며 **무결성 보증이 아니다**(잔존 확률적 불확실성이 있을 수 있음 — disclosure 전제). 적용되지 않은 방식을 표기하지 않는다.

#### 4.2.10 PII 감사 (5) — Migration 036

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `pii_masked` | (제외) | ❌ | 미노출 | 내부 감사 | - | - |
| `pii_masked_at` | (제외) | ❌ | 미노출 | 내부 감사 | - | - |
| `pii_masked_by` | (제외) | ❌ | 미노출 | 내부 식별자 | - | - |
| `pii_masked_by_email` | (제외) | ❌ | 미노출 | PII (이메일) | #4 | - |
| `pii_mask_version` | `pii.mask_version` | ✅ | 그대로 (TEXT) | 없음 | - | 마스킹 알고리즘 버전 |

#### 4.2.11 PII 리뷰 (3)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `pii_reviewed_at` | (제외) | ❌ | 미노출 | 내부 감사 | - | - |
| `pii_reviewed_by` | (제외) | ❌ | 미노출 | 내부 식별자 | - | - |
| `review_status` | (제외) | ❌ | 미노출 | 내부 워크플로 | - | - |

#### 4.2.12 발화 분리 / 메타 (3)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `exclude_reason` | (제외) | ❌ | 미노출 | 내부 필터 사유 | - | 제외 발화는 ZIP에 미포함 |
| `segmented_by` | (제외) | ❌ | 미노출 | 내부 메타 | - | - |
| `client_version` | (제외) | ❌ | 미노출 | 클라이언트 식별 | - | - |

#### 4.2.13 화행 이벤트 / 인터액션 (2)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `speech_act_events` | `auto_labels.speech_act` | ✅ | JSONB events → 대표값 1개로 단순화 (`{value, confidence, method}`). method는 `aihub_*`/`kcelectra_*` → `supervised_model` | 모델명 (method 변환 필수) | #6, #12 | **JSONB → flat 변환** |
| `interaction_mode` | `auto_labels.interaction_mode` | ✅ | 그대로 | 없음 | - | - |

#### 4.2.14 파생 메트릭 (5)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `speech_rate_wpm` | `metrics.speech_rate_wpm` | ✅ | 그대로 | 없음 | - | - |
| `silence_before_sec` | `metrics.silence_before_sec` | ✅ | 그대로 | 없음 | - | - |
| `filler_word_count` | `metrics.filler_word_count` | ✅ | 그대로 | 없음 | - | - |
| `confidence_tier` | `confidence_tier` | ✅ | 그대로 (`high`/`medium`/`needs_review`). **commercial label로 인한 강제 needs_review 금지** | 없음 | #13 | - |
| `audio_quality_class` | `quality.audio_class` | ✅ | 그대로 | 없음 | - | - |

#### 4.2.15 언어학적 라벨 (5)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `honorific_level` | `linguistic.honorific_level` | ✅ | 그대로 | 없음 | - | - |
| `politeness_score` | `linguistic.politeness_score` | ✅ | 그대로 | 없음 | - | - |
| `question_type` | `linguistic.question_type` | ✅ | 그대로 | 없음 | - | - |
| `interruption_flag` | `linguistic.interruption_flag` | ✅ | 그대로 (BOOLEAN) | 없음 | - | - |
| `language_mix_flag` | `linguistic.language_mix_flag` | ✅ | 그대로 | 없음 | - | - |

#### 4.2.16 ML Placeholder (7) — ⚪ 카테고리

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `intent` | (제외, 미래) | ⚪ | 미노출 (모델 미적용) | 내부 placeholder | - | 향후 모델 산출 시 활성화 |
| `satisfaction_score` | (제외, 미래) | ⚪ | 미노출 | 내부 placeholder | - | - |
| `escalation_flag` | (제외, 미래) | ⚪ | 미노출 | 내부 placeholder | - | - |
| `dialect_region` | (제외, 미래) | ⚪ | 미노출 | PII (지역 식별) | #4 | 활성화 시 일반화 필요 |
| `noise_class` | (제외, 미래) | ⚪ | 미노출 | 내부 placeholder | - | - |
| `fluency_score` | (제외, 미래) | ⚪ | 미노출 | 내부 placeholder | - | - |
| `toxicity_label` | (제외, 절대) | ⚪ → ❌ | 미노출 (BOOLEAN 형태로 절대 X) | 법적 위험 | #2 | **안전선 #2 — BOOLEAN 금지** |

#### 4.2.17 🟡 074 신규 컬럼 — utterances (2 컬럼, JSONB 통합)

> **074 범위 결정 (외부 검토 + 사용자 결정)**: utterances 신규는 **2 컬럼만**. `speech_act` 신규 추가 X (기존 `speech_act_events` 재사용). `emotion_detail` 추가 X (모델 미존재). boolean 4종 (`is_short_response`, `is_backchannel`, `is_greeting`, `is_closing`) 은 `utterance_form` JSONB 단일 컬럼으로 통합 (YAGNI + AI Hub 표준 패턴).

**컬럼 1: `numeric_patterns` JSONB** (PII 마스킹된 숫자 패턴 배열)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `numeric_patterns` (JSONB array) | `numeric_patterns` (외부 JSONB array) | 🟡 | 객체별 변환 (아래 서브필드 참조) | 원문 PII (변환 필수) | #4 | 074 후 활성화 |
| `numeric_patterns[].type` | `numeric_patterns[].type` | 🟡 | 그대로 (`phone_number`, `card`, `account`, `amount` 등) | 없음 | - | - |
| `numeric_patterns[].surface_text` | (절대 제외) | 🟡 → ❌ | 미노출 | 원문 PII | #3, #4 | **절대 외부 X** |
| `numeric_patterns[].normalized` | (절대 제외) | 🟡 → ❌ | 미노출 | 원문 PII | #3, #4 | **절대 외부 X** |
| `numeric_patterns[].surface_masked` | `numeric_patterns[].surface_masked` | 🟡 | 그대로 (`[PHONE]` 등) | 없음 | #4 | 마스킹된 표현만 |
| `numeric_patterns[].normalized_masked` | `numeric_patterns[].normalized_masked` | 🟡 | 그대로 | 없음 | #4 | - |
| `numeric_patterns[].start_char` | `numeric_patterns[].start_char` | 🟡 | 그대로 (INTEGER) | 없음 | - | text 위치 |
| `numeric_patterns[].end_char` | `numeric_patterns[].end_char` | 🟡 | 그대로 | 없음 | - | - |
| `numeric_patterns[].pii_related` | `numeric_patterns[].pii_related` | 🟡 | 그대로 (BOOLEAN) | 없음 | - | - |

**컬럼 2: `utterance_form` JSONB** (발화 유형/턴 구조 통합)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `utterance_form` (JSONB object) | `utterance_form` (외부 JSONB) | 🟡 | 객체 그대로 노출 (서브필드 참조) | 없음 | - | 074 신규. 6 서브필드 통합 |
| `utterance_form.utterance_type` | `utterance_form.utterance_type` | 🟡 | 그대로 (`statement`/`question`/`exclamation`/`unknown` 등) | 없음 | - | - |
| `utterance_form.turn_type` | `utterance_form.turn_type` | 🟡 | 그대로 (`opening`/`mid`/`closing`/`unknown` 등) | 없음 | - | - |
| `utterance_form.is_short_response` | `utterance_form.is_short_response` | 🟡 | 그대로 (BOOLEAN) | 없음 | - | - |
| `utterance_form.is_backchannel` | `utterance_form.is_backchannel` | 🟡 | 그대로 (BOOLEAN) | 없음 | - | "응", "네" 등 맞장구 |
| `utterance_form.is_greeting` | `utterance_form.is_greeting` | 🟡 | 그대로 (BOOLEAN) | 없음 | - | - |
| `utterance_form.is_closing` | `utterance_form.is_closing` | 🟡 | 그대로 (BOOLEAN) | 없음 | - | - |

**제외된 074 후보 컬럼 (외부 검토 + 사용자 결정 반영)**:

| 제외 컬럼 | 사유 |
|---|---|
| `speech_act` (별도 컬럼) | 기존 `utterances.speech_act_events` JSONB 재사용 (migration 029). 중복 위험 회피 |
| `emotion_detail` | 현재 산출 모델 없음. placeholder 추가 = 가치 X. 모델 도입 시 075 이후로 이연 |
| `is_short_response`/`is_backchannel`/`is_greeting`/`is_closing` 개별 컬럼 | `utterance_form` JSONB 로 통합 (정규화 과다 회피, AI Hub 호환) |

#### 4.2.18 🔵 런타임 (1)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| (DB 컬럼 X) | `audio.audio_export_mode` | 🔵 | export 시점 결정 (`reference_only` / `embedded`). `export_logs.metadata.audio_export_mode` 에도 기록 | 없음 | #8, #9, #11 | utterance별 기록 |

#### 4.2.19 timestamp / 감사 (2)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `created_at` | (제외) | ❌ | 미노출 | 내부 시간 (구매자 가치 X) | - | - |
| `updated_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |

**utterances 매핑표 소계: 77 row**

---

### 4.3 sessions 테이블 매핑 (~67 row)

> 기존 64 + 074 신규 3 row.

#### 4.3.1 식별자 / FK (5)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `id` | `session_id` | ✅ | 그대로 (TEXT) | 없음 | - | - |
| `pid` | (제외) | ❌ | 미노출 | 내부 FK | - | - |
| `user_id` | (제외) | ❌ | 미노출 | PII (식별자) | #4 | - |
| `peer_id` | (제외) | ❌ | 미노출 | PII (식별자) | #4 | - |
| `call_id` | (제외) | ❌ | 미노출 | 내부 FK | - | - |

#### 4.3.2 메타 (4)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `title` | (제외) | ❌ | 미노출 | PII (사용자 입력 텍스트) | #4 | - |
| `date` | `session.date` | ✅ | 그대로 (YYYY-MM-DD) | 없음 | - | - |
| `duration` | `session.duration_sec` | ✅ | 그대로 (INTEGER) | 없음 | - | - |
| `asset_type` | `session.asset_type` | ✅ | 그대로 | 없음 | - | - |

#### 4.3.3 메트릭 (2)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `qa_score` | (제외, 내부 평가) | ❌ | 미노출 | 내부 평가 | - | - |
| `contribution_score` | (제외, 내부 평가) | ❌ | 미노출 | 내부 평가 | - | - |

#### 4.3.4 라벨 (3)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `labels` | (제외, 미사용) | ❌ | 미노출 | - | - | `data-spec-v2.md` 명시: sessions.labels 미사용. utterances.labels 사용 |
| `label_source` | (제외, 미사용) | ❌ | 미노출 | - | - | - |
| `label_confidence` | (제외, 미사용) | ❌ | 미노출 | - | - | - |

#### 4.3.5 가시성 / 공유 (7)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `is_public` | (제외) | ❌ | 미노출 | 내부 정책 | - | - |
| `share_scope` | (제외) | ❌ | 미노출 | 내부 정책 | - | - |
| `eligible_for_share` | (제외) | ❌ | 미노출 | 내부 정책 | - | - |
| `visibility_status` | (제외) | ❌ | 미노출 | 내부 정책 | - | - |
| `visibility_source` | (제외) | ❌ | 미노출 | 내부 정책 | - | - |
| `visibility_consent_version` | (제외) | ❌ | 미노출 | 내부 정책 | - | - |
| `visibility_changed_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |

#### 4.3.6 상태 / 파이프라인 (10)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `upload_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `utterance_upload_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `pii_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `gpu_upload_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `stt_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `diarize_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `gpu_pii_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `quality_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |
| `review_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |

#### 4.3.7 동의 / 잠금 (6)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `consent_status` | (필터, 비노출) | ❌ | locked 세션은 export 미포함. ZIP에는 unlocked만 (필드 자체 미노출, manifest 통계로 0건 확인) | 동의 상태 | #5 | **필터 조건** |
| `consented_at` | `session.consented_at` | ✅ | ISO8601 그대로 | 없음 | - | 동의 시점 |
| `strategy_locked` | (제외) | ❌ | 미노출 | 내부 잠금 | - | - |
| `lock_reason` | (제외) | ❌ | 미노출 | 내부 사유 | - | - |
| `lock_start_ms` | (제외) | ❌ | 미노출 | 내부 메타 | - | - |
| `lock_end_ms` | (제외) | ❌ | 미노출 | 내부 메타 | - | - |

#### 4.3.8 audio / sanitize (4)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `audio_url` | (제외, 발화별 storage_path 사용) | ❌ | 미노출 | 내부 URL | - | - |
| `audio_fingerprint` | (제외) | ❌ | 미노출 | 내부 식별자 | - | - |
| `local_sanitized_wav_path` | (제외) | ❌ | 미노출 | **내부 경로** | #7 | 안전선 #7 — 내부 산출물 |
| `local_sanitized_text_preview` | (제외) | ❌ | 미노출 | **내부 미리보기 (PII 가능)** | #4, #7 | - |

#### 4.3.9 dedup (5)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `dup_status` | (제외) | ❌ | 미노출 | 내부 dedup | - | - |
| `dup_group_id` | (제외) | ❌ | 미노출 | 내부 dedup | - | - |
| `dup_confidence` | (제외) | ❌ | 미노출 | 내부 dedup | - | - |
| `dup_representative` | (제외) | ❌ | 미노출 | 내부 dedup | - | - |
| `file_hash_sha256` | (제외) | ❌ | 미노출 | 내부 무결성 | - | - |

#### 4.3.10 PII / 화자 (4)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `is_pii_cleaned` | (제외, 항상 true 보장) | ❌ | 미노출 | 내부 보증 | - | export 전제 |
| `chunk_count` | `session.chunk_count` | ✅ | 그대로 | 없음 | - | - |
| `utterance_count` | `session.utterance_count` | ✅ | 그대로 | 없음 | - | - |
| `has_diarization` | `session.has_diarization` | ✅ | 그대로 (BOOLEAN) | 없음 | - | - |
| `verified_speaker` | `session.verified_speaker` | ✅ | 그대로 (BOOLEAN) | 없음 | #1 | self 확정 아님 |

#### 4.3.11 review (2)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `review_action` | (제외) | ❌ | 미노출 | 내부 워크플로 | - | - |
| `call_record_id` | (제외) | ❌ | 미노출 | 내부 식별자 | - | - |

#### 4.3.12 timestamp / 메트릭 (5)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `audio_metrics` | `audio_quality_summary` | ✅ | JSONB 그대로 | 없음 | - | 세션 평균 |
| `created_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |
| `updated_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |
| `session_seq` | (제외) | ❌ | 미노출 | 내부 순서 | - | - |
| `label_status` | (제외) | ❌ | 미노출 | 내부 파이프라인 | - | - |

#### 4.3.13 패키지 연결 (2) — Migration 073

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `in_package_id` | (제외) | ❌ | 미노출 | 내부 FK | - | - |
| `packaged_at` | `session.packaged_at` | ✅ | ISO8601 | 없음 | - | - |

#### 4.3.14 파이프라인 timestamp (4)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `gpu_uploaded_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |
| `stt_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |
| `diarize_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |
| `gpu_pii_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |
| `quality_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |

#### 4.3.15 🟡 074 신규 (6)

> **074 범위 결정**: sessions 신규는 **6 컬럼** (JSONB 3 + TEXT 2 + BOOLEAN 1). audio_metadata/conversation_context/support_quality_labels JSONB 3종 추가.

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `audio_metadata` | `session.audio_metadata` | 🟡 | JSONB 그대로 (장비/포맷/녹음 환경 메타) | 없음 | - | **기존 `audio_metrics` 와 별개** (audio_metrics 는 그대로 유지) |
| `conversation_context` | `session.conversation_context` | 🟡 | JSONB 그대로 (대화 상황/배경 메타) | 없음 | - | 074 신규 |
| `support_quality_labels` | `session.support_quality_labels` | 🟡 | JSONB 그대로 (도움/이해도 라벨, rule_based_mvp/heuristic_mvp) | 없음 | #12 | method 일반화 강제 |
| `session_topic_summary` | `session.topic_summary` | 🟡 | 그대로 (TEXT) | 없음 | - | 세션 주제 요약 |
| `session_quality_tier` | `session.quality_tier` | 🟡 | 그대로 (`A`/`B`/`C`) | 없음 | - | - |
| `session_dataset_eligible` | (필터, 비노출) | 🟡 | true 세션만 export. ZIP 미노출 | 내부 필터 | #5 | manifest `export_eligibility_summary` 통계만 |

**sessions 매핑표 소계: 70 row** (기존 64 + 074 신규 6)

---

### 4.4 session_speakers 테이블 매핑 (~22 row)

> **노출 정책 변경 (외부 검토 반영)**: speaker_role 확정 필드 노출 금지, `speaker_relation` 외부 노출 금지, `gender`/`age` 는 `estimate` 객체 구조로 변환.

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `id` | `speakers[].session_speaker_id` | ✅ | 그대로 (UUID, 세션 한정) | 식별자(세션 한정) | - | utterances.session_speaker_id FK 대상 |
| `session_id` | (제외, 컨텍스트로 자명) | ❌ | 미노출 | - | - | - |
| `speaker_label` | `speakers[].speaker_label` | ✅ | 그대로 (`SPEAKER_00`) | 익명화 완료 | #1 | pyannote 산출 |
| `speaker_role` | (제외) | ❌ | 미노출. **확정 표현 금지 (안전선 #1)**. 외부에는 `identity_inference.predicted_role` (candidate 형) 만 노출 | 확정 표현 위험 | #1 | **이전 owner/counterparty 노출 정책 폐기** |
| `speaker_role_source` | (제외) | ❌ | 미노출 | 내부 출처 | - | identity_inference.method 로 대체 |
| `speaker_gender` | (제외, estimate 사용) | ❌ | 미노출. `gender_estimate` 객체로 변환 | 확정 표현 위험 | #1 | - |
| `speaker_voice_age_range` | (제외, estimate 사용) | ❌ | 미노출. `age_group_estimate.voice_age_range` 로 변환 | 확정 표현 위험 | #1 | - |
| `speaker_speech_age_range` | (제외, estimate 사용) | ❌ | 미노출. `age_group_estimate.speech_age_range` 로 변환 | 확정 표현 위험 | #1 | - |
| `speaker_speech_age_model_version` | (제외) | ❌ | 미노출. `age_group_estimate.method` 로 일반화 | 모델명 | #6 | - |
| `speaker_relation` | **(제외)** | ❌ | **미노출**. 부모/배우자/친구 등 관계 정보 = PII 위험 ↑ + 구매자 가치 낮음 | 관계 PII | #4 | **노출 금지 확정** |
| `speaker_identity_inference` | `speakers[].identity_inference` | ✅ | JSONB 부분 노출 (아래 서브필드 참조) | 모델명 (method 변환 필수) | #1, #6 | **확률형만 노출** |
| `speaker_identity_inference.predicted_role` | `speakers[].identity_inference.predicted_role` | ✅ | 매핑: `owner` → `owner_candidate`, `counterparty` → `counterparty_candidate`, `unknown` → `unknown`. **확정 단어 금지** | 추론값 | #1 | **안전 명명 강제** |
| `speaker_identity_inference.owner_probability` | `speakers[].identity_inference.owner_probability` | ✅ | 그대로 (필수 동반) | 없음 | #1 | predicted_role 와 함께만 |
| `speaker_identity_inference.counterparty_probability` | `speakers[].identity_inference.counterparty_probability` | ✅ | 그대로 (필수 동반) | 없음 | #1 | - |
| `speaker_identity_inference.confidence` | `speakers[].identity_inference.confidence` | ✅ | 그대로 (필수 동반) | 없음 | #1 | - |
| `speaker_identity_inference.method` | `speakers[].identity_inference.method` | ✅ | §3 허용 5종으로 일반화 | 모델명 | #6 | **변환 강제** |
| `speaker_identity_inference.status` | `speakers[].identity_inference.status` | ✅ | 그대로 | 없음 | - | - |
| `speaker_identity_inference.counterparty_count` | `speakers[].identity_inference.counterparty_count` | ✅ | 그대로 | 없음 | - | - |
| `speaker_identity_inference.note` | (제외) | ❌ | 미노출 | 내부 노트 (자유 텍스트) | #4 | - |
| (조합 신규) | `speakers[].identity_inference.disclaimer` | 🔵 | 런타임 추가. 고정 문자열: `"Probabilistic inference only. Not a verified identity."` | 없음 | #1 | export-builder 가 항상 추가 |
| `speaker_gender_estimate` | `speakers[].gender_estimate` | ✅ | JSONB → `{ value, confidence, method, disclaimer }` 구조로 변환 | 추론값 | #1, #6 | `speaker_gender` 대체. disclaimer 필수 |
| `speaker_age_group_estimate` | `speakers[].age_group_estimate` | ✅ | JSONB → `{ voice_age_range, speech_age_range, confidence, method, disclaimer }` 구조로 변환 | 추론값 | #1, #6 | `speaker_voice_age_range` + `speaker_speech_age_range` 대체 |
| `created_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |

**session_speakers 매핑표 소계: 22 row**

#### 4.4.1 외부 ZIP `speakers[]` 객체 예시

```json
{
  "session_speaker_id": "uuid-...",
  "speaker_label": "SPEAKER_00",
  "identity_inference": {
    "predicted_role": "owner_candidate",
    "owner_probability": 0.78,
    "counterparty_probability": 0.22,
    "confidence": 0.78,
    "method": "supervised_model",
    "status": "confirmed_by_heuristic",
    "counterparty_count": 1,
    "disclaimer": "Probabilistic inference only. Not a verified identity."
  },
  "gender_estimate": {
    "value": "unknown",
    "confidence": null,
    "method": "not_available",
    "disclaimer": "Estimated attribute, not verified identity."
  },
  "age_group_estimate": {
    "voice_age_range": "30대",
    "speech_age_range": "30대",
    "confidence": 0.65,
    "method": "supervised_model",
    "disclaimer": "Estimated attribute, not verified identity."
  }
}
```

**노출 금지 항목 (외부 ZIP `speakers[]` 에 절대 미포함)**:
- `speaker_role` 확정 필드 (`owner`/`counterparty`/`self`/`other`)
- `speaker_relation` (`부모`/`배우자` 등 관계)
- `speaker_identity_inference.note` (자유 텍스트)

---

### 4.5 session_segments 테이블 매핑 (~8 row)

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `id` | `segments[].segment_id` | ✅ | 그대로 (UUID) | 없음 | - | - |
| `session_id` | (제외, 컨텍스트) | ❌ | 미노출 | - | - | - |
| `segment_index` | `segments[].segment_index` | ✅ | 그대로 (INTEGER) | 없음 | - | - |
| `topic` | `segments[].topic` | ✅ | 그대로 (현 30종 또는 null. 창 F prepare 후 class 수 변동 가능) | 없음 | - | - |
| (조합 신규) | `segments[].topic_group` | ✅ | 런타임 자동 생성: §5.1.5 TOPIC_TO_GROUP 매핑 사전 적용 (창 F prepare 후 확정) | 없음 | - | schema 안정성 — topic class 수 변동에도 group 유지. DB 컬럼 X |
| `start_ms` | `segments[].start_ms` | ✅ | 그대로 | 없음 | - | - |
| `end_ms` | `segments[].end_ms` | ✅ | 그대로 | 없음 | - | - |
| `utterance_count` | `segments[].utterance_count` | ✅ | 그대로 | 없음 | - | - |
| `created_at` | (제외) | ❌ | 미노출 | 내부 시간 | - | - |

**session_segments 매핑표 소계: 8 row**

---

### 4.6 delivery_packages 테이블 매핑 (~16 row)

> Layer 1 ZIP 의 `package_manifest.json` 에 노출. 단, 다수 필드는 내부.

| 내부 필드 | 외부 필드 | 카테고리 | 변환 규칙 | 노출 위험 | 안전선 | 비고 |
|---|---|---|---|---|---|---|
| `id` | `package.id` | ✅ | 그대로 (UUID) | 식별자 (외부에는 의미 X) | - | - |
| `package_number` | `package.package_number` | ✅ | 그대로 (TEXT) | 식별자 | - | - |
| `filename` | `package.filename` | ✅ | 그대로 (basename만) | 식별자 | - | - |
| `storage_path` | (제외) | ❌ | 미노출 | **내부 S3 경로** | #7 | 안전선 #7 |
| `status` | (제외, complete만 export) | ❌ | 미노출 | 내부 상태 | - | - |
| `duration_seconds` | `package.duration_seconds` | ✅ | 그대로 | 없음 | - | - |
| `duration_minutes` | `package.duration_minutes` | ✅ | 그대로 | 없음 | - | - |
| `billable_hours` | (제외, 내부 과금) | ❌ | 미노출 | 내부 과금 | - | - |
| `session_count` | `package.session_count` | ✅ | 그대로 | 없음 | - | - |
| `utterance_count` | `package.utterance_count` | ✅ | 그대로 | 없음 | - | - |
| `size_bytes` | `package.size_bytes` | ✅ | 그대로 | 없음 | - | - |
| `metadata` | `package.metadata` | ✅ | JSONB 일부만 (audio_export_mode 포함) | 없음 | - | export_logs.metadata와 동일 키 셋 |
| `created_at` | `package.created_at` | ✅ | ISO8601 | 없음 | - | - |
| `completed_at` | `package.completed_at` | ✅ | ISO8601 | 없음 | - | - |
| `delivered_at` | (제외) | ❌ | 미노출 | 내부 납품 시간 | - | - |
| `delivered_to_client_id` | (제외) | ❌ | 미노출 | **구매자 식별자** | #7 | 다른 구매자에게 노출 시 IP 누출 |

**delivery_packages 매핑표 소계: 16 row**

---

### 4.7 매핑표 총계

| 테이블 | row 수 | ✅ | 🟡 | 🔵 | ⚪ | ❌ |
|---|---|---|---|---|---|---|
| utterances | 85 | 41 | 16 | 1 | 7 | 20 |
| sessions | 70 | 12 | 6 | 0 | 0 | 52 |
| session_speakers | 22 | 13 | 0 | 1 | 0 | 8 |
| session_segments | 9 | 7 | 0 | 0 | 0 | 2 |
| delivery_packages | 16 | 9 | 0 | 0 | 0 | 7 |
| **합계** | **~202** | **~82** | **~22** | **~2** | **7** | **~89** |

> 실제 row 수는 작성 후 자동 카운트로 재집계 (예상 안전 범위: 190~210 row).
> 변경 이력 (외부 검토 반영 3회차):
> - utterances: 074 신규 9 → 16 row (utterance_form JSONB 7 row 추가)
> - sessions: 074 신규 3 → 6 row (audio_metadata, conversation_context, support_quality_labels 추가)
> - session_speakers: 노출 정책 축소 (speaker_relation/role 직접 노출 ❌, gender/age estimate 객체 구조, identity_inference.disclaimer 런타임 추가)
> - utterances +1 row: dialog_act_group 런타임 자동 생성 (DIALOG_ACT_TO_GROUP_v1 매핑)
> - session_segments +1 row: topic_group 런타임 자동 생성 (TOPIC_TO_GROUP_v1, 창 F prepare 후 확정)

---

### 4.8 마이그레이션 074 적용 가이드

본 SPEC 의 🟡 카테고리 row 는 **마이그레이션 074 적용 후** 활성화된다. 074 미적용 상태에서는 해당 컬럼이 DB에 존재하지 않으므로 매핑표상 빈 값.

**074 컬럼 범위 (외부 검토 + 사용자 결정 — 8 컬럼 확정)**:

| 테이블 | 신규 컬럼 | 타입 | 비고 |
|---|---|---|---|
| utterances | numeric_patterns | JSONB | PII 마스킹된 숫자 패턴 |
| utterances | utterance_form | JSONB | 발화 유형/턴/boolean 4종 통합 |
| sessions | audio_metadata | JSONB | 장비/포맷/녹음 환경 메타 (audio_metrics 와 별개) |
| sessions | conversation_context | JSONB | 대화 상황/배경 |
| sessions | support_quality_labels | JSONB | 도움/이해도 라벨 (MVP) |
| sessions | session_topic_summary | TEXT | 세션 주제 요약 |
| sessions | session_quality_tier | TEXT | A/B/C |
| sessions | session_dataset_eligible | BOOLEAN | export 적격 (안전선 #5 사용) |

**074 에서 추가 X (이연/거부)**:
- `speech_act` 별도 컬럼 ❌ → 기존 `speech_act_events` (migration 029) 재사용
- `emotion_detail` ❌ → 산출 모델 없음, 075+ 이연
- boolean 4종 개별 컬럼 ❌ → `utterance_form` JSONB 통합

#### 4.8.1 074 마이그레이션 SQL

> 본 SQL은 **창 A 작업 범위**. 본 문서는 명세만 제공.

```sql
-- 074_export_v2_columns.sql

-- utterances 신규 2 컬럼
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS numeric_patterns JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS utterance_form   JSONB DEFAULT '{}'::jsonb;

CREATE INDEX IF NOT EXISTS idx_utterances_numeric_patterns
  ON utterances USING GIN (numeric_patterns);

-- utterance_form 의 자주 쓰는 필드는 GIN 인덱스로 충분 (별도 generated column 미사용)
CREATE INDEX IF NOT EXISTS idx_utterances_utterance_form
  ON utterances USING GIN (utterance_form);

-- sessions 신규 6 컬럼
ALTER TABLE sessions
  ADD COLUMN IF NOT EXISTS audio_metadata           JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS conversation_context     JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS support_quality_labels   JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS session_topic_summary    TEXT,
  ADD COLUMN IF NOT EXISTS session_quality_tier     TEXT
    CHECK (session_quality_tier IN ('A', 'B', 'C') OR session_quality_tier IS NULL),
  ADD COLUMN IF NOT EXISTS session_dataset_eligible BOOLEAN DEFAULT NULL;

CREATE INDEX IF NOT EXISTS idx_sessions_dataset_eligible
  ON sessions(session_dataset_eligible)
  WHERE session_dataset_eligible = true;

-- audio_metadata, conversation_context 는 필요 시점에 GIN 추가 (현재는 미추가)
```

#### 4.8.2 074 적용 시 영향 받는 매핑표 row

전환 시점: 🟡 → ✅ (DB 컬럼 활성화 시)

| 매핑표 위치 | row 수 (서브필드 포함) | DB 컬럼 수 |
|---|---|---|
| §4.2.17 utterances 🟡 074 신규 | 16 row (numeric_patterns 9 + utterance_form 7) | **2** |
| §4.3.15 sessions 🟡 074 신규 | 6 row | **6** |
| **합계** | **22 row** | **8 DB 컬럼** |

#### 4.8.3 074 적용 후 검증

```powershell
# 컬럼 존재 확인
psql -c "\d+ utterances" | Select-String "numeric_patterns|utterance_form"
psql -c "\d+ sessions" | Select-String "audio_metadata|conversation_context|support_quality_labels|session_topic_summary|session_quality_tier|session_dataset_eligible"

# 인덱스 확인
psql -c "\di idx_utterances_numeric_patterns idx_utterances_utterance_form idx_sessions_dataset_eligible"

# 매핑표 row 카테고리 변환 (수동)
# docs/SPEC_EXPORT_V2.md §4.2.17, §4.3.15 의 🟡 → ✅ 교체
```

#### 4.8.4 074 미적용 상태 처리 (창 C export-builder 지침)

- `numeric_patterns`, `utterance_form`, 신규 sessions 컬럼 조회 시 `column does not exist` 에러 발생 가능
- 창 C 의 `extractUtterance()`/`extractSession()` 는 `try/catch` 로 기본값 처리 (빈 배열/객체)
- ZIP 의 `number_pattern_report.json`, `utterance_form_report.json` 은 074 미적용 시 `{ "applicable": false }` 로 보고

---

## 5. labels JSONL Schema

### 5.1 utterances_{session_id}.jsonl — 한 줄 = 1 발화

JSON Schema (draft-07 기준):

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://uncounted.cloud/schema/utterance/v2.json",
  "type": "object",
  "required": ["utterance_id", "session_id", "sequence_order", "start_sec", "end_sec", "text"],
  "properties": {
    "utterance_id": { "type": "string", "format": "uuid" },
    "session_id": { "type": "string" },
    "session_speaker_id": { "type": ["string", "null"], "format": "uuid" },
    "segment_id": { "type": ["string", "null"], "format": "uuid" },
    "sequence_order": { "type": "integer", "minimum": 0 },
    "speaker_label": { "type": "string", "pattern": "^SPEAKER_\\d{2}$" },
    "speaker_index": { "type": ["integer", "null"] },
    "start_sec": { "type": "number", "minimum": 0 },
    "end_sec": { "type": "number", "minimum": 0 },
    "duration_sec": { "type": "number", "minimum": 0 },
    "padded_start_sec": { "type": ["number", "null"] },
    "padded_end_sec": { "type": ["number", "null"] },
    "padded_duration_sec": { "type": ["number", "null"] },
    "text": { "type": "string", "description": "PII 마스킹 적용 (안전선 #3, #4)" },
    "words": {
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "properties": {
          "word": { "type": "string" },
          "start_sec": { "type": "number" },
          "end_sec": { "type": "number" },
          "confidence": { "type": "number" }
        }
      }
    },
    "audio": {
      "type": "object",
      "properties": {
        "s3_key": { "type": ["string", "null"], "description": "reference_only 일 때만" },
        "zip_path": { "type": ["string", "null"], "description": "embedded 일 때만" },
        "file_size_bytes": { "type": ["integer", "null"] },
        "audio_export_mode": { "enum": ["reference_only", "embedded"] }
      }
    },
    "quality": {
      "type": "object",
      "properties": {
        "snr_db": { "type": ["number", "null"] },
        "speech_ratio": { "type": ["number", "null"] },
        "clipping_ratio": { "type": ["number", "null"] },
        "beep_mask_ratio": { "type": ["number", "null"] },
        "volume_lufs": { "type": ["number", "null"] },
        "score": { "type": ["number", "null"] },
        "grade": { "enum": ["A", "B", "C", "D", null] },
        "audio_class": { "type": ["string", "null"] }
      }
    },
    "auto_labels": {
      "type": "object",
      "properties": {
        "emotion": { "type": ["string", "null"] },
        "emotion_confidence": { "type": ["number", "null"] },
        "dialog_act": { "type": ["string", "null"], "description": "15-class 고가치 라벨" },
        "dialog_act_group": {
          "type": ["string", "null"],
          "description": "런타임 자동 생성. dialog_act 기반 6 그룹 매핑 (§5.1.4)"
        },
        "dialog_act_confidence": { "type": ["number", "null"] },
        "dialog_intensity": { "type": ["integer", "null"] },
        "interaction_mode": { "type": ["string", "null"] },
        "topic": {
          "type": ["string", "null"],
          "description": "발화가 속한 segment 의 topic (dehydrated from session_segments)"
        },
        "topic_group": {
          "type": ["string", "null"],
          "description": "런타임 자동 생성. topic 기반 group 매핑 (§5.1.5, 창 F prepare 후 확정)"
        },
        "topic_confidence": { "type": ["number", "null"] },
        "speech_act": {
          "type": ["object", "null"],
          "properties": {
            "value": { "type": "string" },
            "confidence": { "type": "number" },
            "method": {
              "enum": ["automatic", "supervised_model", "rule_based_mvp", "heuristic_mvp", "not_available"],
              "description": "안전선 #6: 모델명 직접 노출 금지"
            }
          }
        }
      }
    },
    "label_origin": {
      "enum": ["user", "automatic", "admin_reviewed", "supervised_model"],
      "description": "안전선 #6, #12"
    },
    "label_confidence": { "type": ["number", "null"] },
    "label_version": { "type": "string", "description": "안전선 #6: 모델명 패턴 일반화" },
    "confidence_tier": {
      "enum": ["high", "medium", "needs_review"],
      "description": "안전선 #13: commercial label로 인한 강제 needs_review 금지"
    },
    "pii": {
      "type": "object",
      "properties": {
        "mask_version": { "type": ["string", "null"] }
      }
    },
    "pii_labels": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["startSec", "endSec", "maskType", "piiType"],
        "properties": {
          "startSec": { "type": "number" },
          "endSec": { "type": "number" },
          "maskType": { "type": "string" },
          "piiType": { "type": "string" }
        },
        "additionalProperties": false,
        "description": "안전선 #3: original 필드 절대 미포함 (additionalProperties: false 로 강제)"
      }
    },
    "numeric_patterns": {
      "type": ["array", "null"],
      "description": "🟡 074 후 활성화. 안전선 #4: surface_text/normalized 절대 미포함",
      "items": {
        "type": "object",
        "required": ["type", "surface_masked", "normalized_masked", "start_char", "end_char"],
        "properties": {
          "type": { "type": "string" },
          "surface_masked": { "type": "string" },
          "normalized_masked": { "type": "string" },
          "start_char": { "type": "integer" },
          "end_char": { "type": "integer" },
          "pii_related": { "type": "boolean" }
        },
        "additionalProperties": false
      }
    },
    "utterance_form": {
      "type": ["object", "null"],
      "description": "🟡 074 후 활성화. 발화 유형/턴/boolean 4종 통합 JSONB.",
      "properties": {
        "utterance_type": { "type": ["string", "null"], "description": "statement/question/exclamation/unknown 등" },
        "turn_type": { "type": ["string", "null"], "description": "opening/mid/closing/unknown 등" },
        "is_short_response": { "type": ["boolean", "null"] },
        "is_backchannel": { "type": ["boolean", "null"], "description": "맞장구 (응/네 등)" },
        "is_greeting": { "type": ["boolean", "null"] },
        "is_closing": { "type": ["boolean", "null"] }
      },
      "additionalProperties": false
    },
    "metrics": {
      "type": "object",
      "properties": {
        "speech_rate_wpm": { "type": ["number", "null"] },
        "silence_before_sec": { "type": ["number", "null"] },
        "filler_word_count": { "type": ["integer", "null"] }
      }
    },
    "linguistic": {
      "type": "object",
      "properties": {
        "honorific_level": { "type": ["string", "null"] },
        "politeness_score": { "type": ["number", "null"] },
        "question_type": { "type": ["string", "null"] },
        "interruption_flag": { "type": ["boolean", "null"] },
        "language_mix_flag": { "type": ["string", "null"] }
      }
    }
  },
  "additionalProperties": false
}
```

### 5.1.1 method 값 정의 (label_schema.json 에 동봉)

외부 ZIP `labels/label_schema.json` 에 다음 객체 포함 — 구매자가 method 5종 의미 파악 가능:

```json
{
  "version": "v2",
  "method_definitions": {
    "automatic": "Generic automatic processing (e.g., regex extraction, language detection, deterministic rules without ML training).",
    "supervised_model": "Output from a supervised classifier model. Training source generalized; model identifier not disclosed.",
    "rule_based_mvp": "Explicit hand-written rules. MVP scope. Subject to refinement.",
    "heuristic_mvp": "Heuristic scoring/composition (weighted features). MVP scope. Subject to refinement.",
    "not_available": "Label not produced (missing input data, model unavailable, or out of scope)."
  }
}
```

### 5.1.2 speaker_identity 객체 — 확률형 명세

`speakers[].identity_inference` 객체 (안전선 #1 강제):

```json
{
  "predicted_role": "owner_candidate",       // 또는 counterparty_candidate / unknown
  "owner_probability": 0.78,                  // [0, 1]
  "counterparty_probability": 0.22,           // [0, 1]
  "confidence": 0.78,                          // [0, 1]
  "method": "supervised_model",                // §3 허용 5종
  "status": "string",                          // pyannote/heuristic 상태
  "counterparty_count": 1,                     // 추정 상대방 수
  "disclaimer": "Probabilistic inference only. Not a verified identity."
}
```

**필수 동반 필드**: `predicted_role` 노출 시 반드시 `owner_probability` + `counterparty_probability` + `confidence` + `disclaimer` 함께 노출.

### 5.1.3 gender_estimate / age_group_estimate 객체

`speakers[].gender_estimate` (안전선 #1):

```json
{
  "value": "unknown",                          // 또는 male/female (확정 단어 X, 추정값임을 disclaimer로 명시)
  "confidence": null,                          // [0, 1] 또는 null
  "method": "not_available",                   // §3 허용 5종
  "disclaimer": "Estimated attribute, not verified identity."
}
```

`speakers[].age_group_estimate`:

```json
{
  "voice_age_range": "30대",                   // 또는 20대/40대/50대+
  "speech_age_range": "30대",
  "confidence": 0.65,
  "method": "supervised_model",
  "disclaimer": "Estimated attribute, not verified identity."
}
```

### 5.1.4 DIALOG_ACT_TO_GROUP 매핑 사전

`auto_labels.dialog_act_group` 은 export 런타임에 본 매핑 사전을 적용하여 생성된다. DB 컬럼 추가 없음.

```json
{
  "DIALOG_ACT_TO_GROUP_v1": {
    "진술": "정보",
    "질문": "질문/확인",
    "확인": "질문/확인",
    "요청": "요청/제안",
    "제안": "요청/제안",
    "감사": "감사/사과",
    "사과": "감사/사과",
    "인사": "사회적",
    "동의": "응답",
    "반대": "응답",
    "부정": "응답",
    "응답": "응답",
    "명령": "지시",
    "감탄": "감정 표현",
    "기타": "기타"
  }
}
```

**6 그룹 (외부 ZIP 노출)**: `정보` / `질문/확인` / `요청/제안` / `감사/사과` / `사회적` / `응답` / `지시` / `감정 표현` / `기타` (총 9 group, 의미 클러스터)

> 그룹 수가 9 이지만 사용자 표현 기준 "6 그룹" 호환 분류 유지. 추후 통폐합 시 `_v2` 로 버전 분기.

구매자 가치:
- 15-class 그대로 사용 가능 (raw `dialog_act`)
- 6 그룹 단순화 가능 (`dialog_act_group`)
- 동일 ZIP 에서 양쪽 선택

### 5.1.5 TOPIC_TO_GROUP 매핑 사전 (placeholder)

`segments[].topic_group` / `auto_labels.topic_group` 은 export 런타임에 본 매핑 사전을 적용하여 생성된다.

```json
{
  "TOPIC_TO_GROUP_v1": "<placeholder — 창 F prepare_topic_dataset.py 실행 후 unique 카테고리 확인, 이후 매핑 사전 작성>"
}
```

**현 상태**: 창 F 의 `prepare_topic_dataset.py` 실행 결과로 unique topic 목록 확정 후 group 매핑 사전 작성. 본 SPEC 에서는 **schema 만 명시** (`topic_group` 필드 존재). 매핑 사전 작성 전에는 export 런타임에 `topic_group: null` 로 노출.

schema 안정성 효과:
- topic class 수 변동 (현 30종 → 추후 N 종) 시에도 외부 ZIP schema 유지
- 구매자가 topic / topic_group 양쪽 사용 가능
- 매핑 사전만 갱신하면 ZIP 재빌드 없이 정의 변경 (단, 신규 ZIP 빌드 시점부터 반영)

---

### 5.2 labels_{session_id}.jsonl — 한 줄 = 1 라벨 인스턴스

별도 jsonl. 한 발화가 여러 라벨(emotion, dialog_act, speech_act, ...) 을 가질 때 each label을 한 줄로.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["utterance_id", "label_type", "value"],
  "properties": {
    "utterance_id": { "type": "string", "format": "uuid" },
    "session_id": { "type": "string" },
    "label_type": { "enum": ["emotion", "dialog_act", "speech_act", "interaction_mode", "honorific_level", "question_type"] },
    "value": { "type": "string" },
    "confidence": { "type": ["number", "null"] },
    "label_origin": { "enum": ["user", "automatic", "admin_reviewed", "supervised_model"] },
    "label_version": { "type": "string" },
    "method": {
      "enum": ["automatic", "supervised_model", "rule_based_mvp", "heuristic_mvp", "not_available"]
    },
    "reviewed": { "type": "boolean" }
  },
  "additionalProperties": false
}
```

---

## 6. API Contract (6개 엔드포인트)

### 6.1 단일 세션 export (Layer 2)

```
POST /api/admin/sessions/:id/export
Authorization: Bearer <admin_token>
Content-Type: application/json (encrypted via ENCRYPTION_KEY)

Request body:
{
  "include_audio": boolean,    // 안전선 #11: 기본 false
  "include_restricted": boolean // 안전선 #10: 기본 false
}

Response 200:
{
  "success": true,
  "data": {
    "download_url": string,    // signed URL, 24h 유효
    "expires_at": string,      // ISO8601
    "size_bytes_estimate": number
  }
}

Response 400:
{ "success": false, "error": "session is not export-eligible (consent_status or review_status)" }   // 안전선 #5 (광의)
```

**서버 필터 조건 (안전선 #5)**:
- `sessions.consent_status = 'both_agreed'`
- `sessions.review_status = 'approved'`
- 발화 단위: `utterances.review_status != 'excluded'`

### 6.2 배치 세션 export (Layer 3)

```
POST /api/admin/sessions/export-batch
Authorization: Bearer <admin_token>

Request:
{
  "session_ids": string[],
  "include_audio": boolean,
  "include_restricted": boolean
}

Response 202:
{
  "success": true,
  "data": {
    "job_id": string,
    "status": "queued"
  }
}
```

### 6.3 Export job 상태 조회

```
GET /api/admin/export-jobs/:id
Authorization: Bearer <admin_token>

Response 200:
{
  "success": true,
  "data": {
    "id": string,
    "type": "single_session" | "batch_session" | "delivery_package",
    "status": "queued" | "processing" | "complete" | "failed",
    "progress": number,
    "total": number,
    "download_url": string | null,
    "expires_at": string | null,
    "error_message": string | null
  }
}
```

### 6.4 Delivery package 목록 조회 (Layer 1)

```
GET /api/admin/delivery/packages?status=complete&page=1&limit=20
Authorization: Bearer <admin_token>

Response 200:
{
  "success": true,
  "data": {
    "packages": DeliveryPackage[],
    "meta": { "total": number, "page": number, "limit": number }
  }
}

DeliveryPackage:
{
  "id": string,
  "package_number": string,
  "filename": string,
  "status": "building" | "complete" | "pending" | "archived",
  "duration_seconds": number,
  "duration_minutes": number,
  "session_count": number,
  "utterance_count": number,
  "size_bytes": number,
  "created_at": string,
  "completed_at": string | null,
  "metadata": {
    "audio_export_mode": "reference_only" | "embedded",
    "export_eligibility_summary": {
      "eligible_session_count": number,
      "excluded_session_count": number,
      "exclusion_reasons": {
        "consent_not_agreed": number,
        "review_not_approved": number
      }
    }
  }
}
```

### 6.5 Delivery package 다운로드

```
GET /api/admin/delivery/packages/:id/download
Authorization: Bearer <admin_token>

Request (query):
?include_audio=false

Response 200:
{
  "success": true,
  "data": {
    "download_url": string,
    "expires_at": string
  }
}
```

### 6.6 Packaging worker 트리거 (Admin only)

```
POST /api/admin/packaging/run
Authorization: Bearer <admin_token>

Response 200:
{
  "success": true,
  "data": {
    "triggered": boolean,
    "current_package_id": string | null
  }
}
```

### 6.7 API 응답 공통 envelope

[uncounted-root/.claude/rules/typescript/patterns.md](../.claude/rules/typescript/patterns.md) 의 `ApiResponse<T>` 패턴 준수:

```typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: { total: number, page: number, limit: number }
}
```

### 6.8 모든 API 공통

- 암호화: AES-256-GCM (`ENCRYPTION_KEY` 환경 변수)
- 인증: `Authorization: Bearer <admin_token>` (admin role 검증)
- 401 시 자동 refresh (1회) → 실패 시 logout

---

## 7. 검증 22개 항목

검증은 외부 ZIP 산출물 기준. 내부 문서(본 SPEC 등)는 검증 제외.

| # | 항목 | 검증 방법 | 안전선 |
|---|---|---|---|
| 1 | ZIP에 `internal_*.json` 미존재 | `unzip -l export.zip \| grep "internal_"` 0건 | #7 |
| 2 | ZIP에 `model_pipeline_report*` 미존재 | grep 0건 | #7 |
| 3 | ZIP에 `finetuning_readiness_report*` 미존재 | grep 0건 | #7 |
| 4 | export 부적격 세션 미포함 (광의) | `manifest.json` 의 모든 session_id 가 `consent_status='both_agreed' AND review_status='approved'` (사후 DB 조회로 재검증). `manifest.export_eligibility_summary` 에 통계 노출 | #5 |
| 4a | utterances.review_status='excluded' 발화 미포함 | utterances JSONL 내 `review_status` 키 미존재 + excluded utterance 개수가 `excluded_utterance_count` 통계와 일치 | #5 |
| 5 | `restricted` 세션은 옵션 시만 | `include_restricted=false` 일 때 0건 | #10 |
| 6 | `pii_intervals[].original` 키 0건 | `jq '.. \| objects \| select(has("original"))' utterances/*.jsonl` 0건 | #3 |
| 7 | `numeric_patterns[].surface_text` 키 0건 | jq 검색 0건 (074 후 유효) | #4 |
| 8 | `numeric_patterns[].normalized` 키 0건 | jq 검색 0건 (074 후 유효) | #4 |
| 9 | `aihub_*` method 값 0건 | grep `"method":\s*"aihub_` 0건 | #6 |
| 10 | `kcelectra_*` method 값 0건 | grep 0건 | #6 |
| 11 | `whisperx_*` method 값 0건 | grep 0건 | #6 |
| 12 | `snunlp_*`, `KR-ELECTRA_*` 값 0건 | grep 0건 | #6 |
| 13 | `HF_TOKEN`, `HuggingFace`, `finetune` 키워드 0건 | grep 0건 | #6 |
| 14 | speaker_role 에 `self`/`other` 단어 0건 (확정 단어) | grep 0건. `owner`/`counterparty`/`unknown` 만 허용 | #1 |
| 15 | toxicity 관련 필드 0건 | grep `toxicity` 0건 | #2 |
| 16 | audio_export_mode 가 모든 utterance 에 명시 | jq 검사 | #8, #11 |
| 17 | Layer 1 ZIP 이 `audio_export_mode=embedded` 인 경우 명시 옵션 확인 | export_logs.metadata 확인 | #9 |
| 18 | manifest.json 의 schema_version=2 | jq | - |
| 19 | label_origin 값이 허용 enum 내 | jq 검사 | #6, #12 |
| 20 | method 값이 허용 enum 5종 내 | jq 검사 (§3.1) | #6, #12 |
| 21 | confidence_tier 가 commercial label만으로 needs_review 강제되지 않음 | sample 검증 | #13 |
| 22 | ZIP 내 모든 `.json`, `.jsonl`, `.md`, `.txt` 가 UTF-8 인코딩 + JSON 유효 | `jq empty < f.jsonl`, 인코딩 검사 | - |

### 7.1 검증 자동화

위 22항목은 SAFETY_CHECKLIST.md §2~5 자동 검증 스크립트로 구현 (창 C 작업).

---

## 부록 A — 매핑표 7개 컬럼 정의 상세

### A.1 컬럼별 작성 가이드

| # | 컬럼 | 채움 규칙 |
|---|---|---|
| 1 | 내부 필드 (DB/API) | DB 컬럼명 (소문자 snake_case). JSONB 서브필드는 `.subfield` 표기 |
| 2 | 외부 필드 (ZIP) | JSONL/JSON 내 키 경로 (camelCase 또는 snake_case 통일). 미노출 시 `(제외)` + 사유 |
| 3 | 카테고리 | ✅ / 🟡 / 🔵 / ⚪ / ❌ 중 하나. 이중 카테고리(예: ⚪ → ❌) 가능 |
| 4 | 변환 규칙 | "그대로" / "매핑: A→B, C→D" / "일반화: pattern_* → external_value" / "마스킹" / "JSONB 부분 노출" |
| 5 | 노출 위험 | "없음" / "PII (식별자/연락처/이메일)" / "내부 식별자" / "내부 경로" / "모델명/출처" / "법적 위험" |
| 6 | 안전선 | 관련 안전선 번호 (없으면 `-`) |
| 7 | 비고 | 추가 컨텍스트 (필요 시) |

### A.2 빈 셀 금지 원칙

모든 row의 7개 컬럼은 채움 필수. "변환 규칙: 그대로", "안전선: -" 도 명시.

### A.3 row 단위 검토 6단계 (작성자용)

1. DB 컬럼 존재 확인 (migration 파일 1:1 대조)
2. 외부 노출 가치 평가 (구매자 입장)
3. 외부 노출 위험 평가 (PII / IP / 식별자)
4. 변환 규칙 결정 (그대로 / 일반화 / 마스킹 / 익명화)
5. 안전선 연결 (해당 시)
6. 적용 시점 확정 (현재 / 074 후 / 런타임)

---

## 부록 B — 매핑표 진화 방향

본 SPEC 의 매핑표는 단순 문서가 아니라 **보안 인프라**. 향후 진화 단계:

| 버전 | 시점 | 내용 |
|---|---|---|
| v1 | 현재 (창 0) | DB → ZIP 매핑 (본 문서 §4) |
| v2 | 향후 (외부 API/Webhook 추가 시) | DB → ZIP / API 응답 / Webhook payload 매핑 |
| v3 | 향후 (구매자별 계약 차별화 시) | 구매자별 매핑 (예: 클로바용 / KT용 / 네이버용) |
| v4 | 장기 (자동화) | 자동 검증 코드 생성 (매핑표 → TypeScript 타입 → ZIP 빌더 → 검증 스크립트) |

각 진화 단계는 별도 RFC 로 진행. 본 SPEC 은 v1 만 다룬다.

---

## 변경 이력

| 버전 | 일자 | 변경 사항 |
|---|---|---|
| v1.0 | 2026-05-18 | 초안 작성 (창 0). 안전선 13개 + 매핑표 ~190 row + API contract + 검증 22항목 |

---

**문서 끝.** 후속 창은 본 문서를 단일 진실 문서로 참조.
