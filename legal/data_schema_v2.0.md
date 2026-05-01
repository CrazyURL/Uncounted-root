# Uncounted Data Schema v2.0 — 정식 표준

> **작성일:** 2026-05-01
> **상태:** BM v9.0 정식 채택 동반 표준 (사용자 승인 완료)
> **이전 버전:** v1.0 (게이트 C+ 시점 packageBuilder.ts 출력)
> **준거:** AI-Hub 11개 데이터셋 분석 + NIA 데이터 품질관리 가이드라인 v3.5 (2025.05) + v9.0 4 SKU 그리드

---

## 0. 개요

본 표준은 Uncounted 데이터 패키지의 **정식 export 스키마**를 정의한다. v1.0(현재)에서 v2.0으로 이행하면서:
- 16 객체 표준화 (이전 4 파일 → 16 객체)
- **external** vs **internal** 필드 명시적 구분 (보안)
- `schema_version` 필드 모든 export root에 박음
- AI-Hub 표준 호환 (시간 ms, speaker_id 정수)
- consent 메타 데이터 내장 (차별화 핵심)

### v9.0 SKU별 객체 매핑

| SKU | 단가 | 필수 객체 | 선택 객체 |
|---|---|---|---|
| **UC-A1 (기본 ₩300K/h)** | manifest, utterances, audio_files, consent_meta, pii_meta, schema_meta | speakers (anon), quality_metrics |
| **UC-A2 (고품질 ₩600K/h)** | A1 + speakers (full demo), quality_metrics, noise_env, natural_speech | dialog_summary, freshness |
| **UC-A3 (희소 ₩1,200K/h)** | A2 + taxonomy (3-level), labels (auto+verify), processing_status | freshness, dialog_summary |
| **UC-LLM (4세대 ₩2,000K/h)** | A2 + instruction_tuning_data, dialog_summary | — |

---

## 1. external vs internal 필드 정책

**정책 핵심:** 모든 필드는 다음 3 등급 중 하나로 분류:

| 등급 | 정의 | export 가능? |
|---|---|---|
| 🟢 **EXT** (external) | 매수자 패키지에 그대로 포함 | YES |
| 🟡 **HASH** (hashed/anonymized) | 해시·가명·집계만 export | YES (변환 후) |
| 🔴 **INT** (internal-only) | 매수자에게 절대 노출 X. 내부 운영·감사용 | NEVER |

### 🔴 INT (internal-only) — 절대 export 금지 목록

| 필드 | 위치 | 위험 |
|---|---|---|
| `users.email` | auth.users | 사용자 식별 |
| `consent_invitations.ip_address` | DB | 동의자 위치 추적 가능 |
| `consent_invitations.user_agent` | DB | 디바이스 fingerprint |
| `users.phone_hash` (raw) | users_profile | 역해시 가능성 |
| `transcripts.text_raw` (PII 마스킹 전) | 임시 메모리만 | PII 직접 노출 |
| `audio.original_path` (전체 경로) | 임시 | 디바이스 디렉터리 노출 |
| `voice_profiles.origin_reference_embedding` | DB | 화자 재식별 가능 |
| `voice_profiles.live_anchor` (raw vector) | DB | 동일 |
| `sessions.local_phone_hash` | client storage | 통신비밀보호법 위반 가능 |
| `pii_intervals` (raw 좌표) | DB | 역추적 가능 |

### 🟡 HASH — 변환 후 export

| 원본 | 변환 | export 형태 |
|---|---|---|
| `user_id` (UUID) | SHA-256 truncated | `pseudo_id` (16자) |
| `peer_phone_hash` | 동일 SHA → 해시 마스킹 | `peer_anon_id` (12자) |
| `consent_invitation.id` | UUID → token suffix | `consent_token_id` (8자) |
| `recording_device_id` | 모델명만 | `device_model` ("samsung_a52" 등) |
| `recording_location` | GPS → 시·도 단위 | `region_code` ("KR-11") |

### 🟢 EXT — 그대로 export 안전

audio file (PII 마스킹 + 비프 처리 후), duration_ms, snr_db, speaker_id (정수), consent_status, consent_chain_verified, schema_version, sku_code 등.

---

## 2. 16 객체 정의

### 2.1 schema_meta (필수, root)

```json
{
  "schema_version": "2.0",
  "sku_code": "UC-A1" | "UC-A2" | "UC-A3" | "UC-LLM",
  "export_id": "UUID",
  "export_date": "ISO 8601",
  "uncounted_version": "package_builder version",
  "license": "Uncounted Data License v2",
  "buyer_id": "client UUID (계약 매수자)",
  "delivery_terms": {
    "exclusivity": "non_exclusive" | "time_limited" | "perpetual",
    "expiry_date": "ISO | null",
    "redistribution": "forbidden"
  }
}
```

### 2.2 manifest (필수)

```json
{
  "sku": "UC-A1",
  "package_name": "20260601_clova_pilot_5h",
  "total_duration_sec": 18000.0,
  "total_duration_hours": 5.0,
  "utterance_count": 1234,
  "speaker_count": 78,
  "session_count": 42,
  "format": {
    "sample_rate_hz": 16000,
    "bit_depth": 16,
    "channels": 1,
    "encoding": "PCM"
  },
  "segment_padding_ms": 250,
  "consent_level": "both_agreed" | "user_only" | "mixed",
  "consent_chain_verified": true,
  "pii_masking_summary": {
    "version": "1.0",
    "recall_estimate_pct": 97.5,
    "categories_covered": 8
  }
}
```

### 2.3 utterances.jsonl (필수, 1줄=1발화)

```json
{
  "utterance_id": "utt_xxxxx",
  "session_id": "ses_xxxxx",
  "pseudo_id": "16자 해시",          // HASH (user_id에서)
  "speaker_id": 0 | 1,               // INT (정수, 0=user, 1=peer)
  "speaker_uuid_internal": null,     // INT (export 제외, DB만)
  "duration_ms": 4252,               // EXT (ms 단위, AI-Hub 표준)
  "duration_sec": 4.252,             // EXT (호환)
  "start_ms": 0,
  "end_ms": 4252,
  "audio_file_relative": "audio/utt_xxxxx.wav",

  // Quality (필수)
  "snr_db": 42.0,
  "speech_ratio": 0.91,
  "quality_grade": "A" | "B" | "C",  // 자동 산정 (Day 4 정의)
  "quality_score": 100,

  // Consent (Day 5 — 데이터 내장 핵심)
  "consent_status": "user_only" | "both_agreed",
  "consent_chain_verified": true,
  "consent_token_id": "8자",         // HASH (consent_invitations.id에서)
  "consented_at": "ISO",
  "ip_recorded": true,               // EXT (boolean only — 실제 IP는 INT)

  // PII (필수)
  "pii_masked": true,
  "pii_categories_detected": ["name", "phone"],  // EXT (count는 OK)
  "pii_count": 3,
  "pii_intervals_internal": null,    // INT (export 제외)

  // Demographics (UC-A2+, HASH)
  "speaker_age_band": "20대" | null,
  "speaker_gender": "남" | "여" | null,
  "speaker_region": "수도권" | null,

  // STT (UC-A2+)
  "text": "마스킹된 전사 텍스트",
  "text_raw_internal": null,         // INT (PII 마스킹 전 텍스트)
  "language": "ko"
}
```

### 2.4 audio_files (필수, 폴더)

```
audio/
├── utt_xxxxx.wav  (16kHz/16bit/mono PCM, PII 비프 처리 완료)
└── ...
```

**INT:** 원본 파일명·디바이스 경로는 export 제외.

### 2.5 consent_meta.jsonl (필수 — 차별화 핵심, Day 5)

```json
{
  "consent_token_id": "8자",         // utterance.consent_token_id와 매칭
  "session_id": "ses_xxxxx",
  "consent_status": "both_agreed",
  "consenter_role": "owner" | "peer",
  "consented_at": "ISO",
  "ip_recorded_anon_country": "KR",  // HASH (ip_address → 국가만)
  "consent_text_version": "v2.0_2026-05-01",
  "withdrawal_status": "active" | "withdrawn",
  "chain_verified": true,             // owner + peer 모두 동의 완료
  "verification_signature": "HMAC-SHA256 (서버 서명)"
}
```

**INT:** `consent_invitations.ip_address` (raw IPv4) / `user_agent` 절대 export 금지. 국가 코드만 HASH 변환.

### 2.6 pii_meta.json (필수)

```json
{
  "masker_version": "1.0",
  "masker_commit": "1716d50",
  "pii_categories": {
    "name": 145,
    "phone": 23,
    "email": 8,
    "address": 12,
    "rrn": 0,
    "card": 0
  },
  "masking_method": "audio_beep_1khz + text_substitute",
  "kisa_compliance": "guideline_v3.5",
  "k_anonymity_k": 5,
  "spot_check_coverage_pct": 5
}
```

### 2.7 quality_metrics (UC-A2+)

```json
{
  "avg_snr_db": 38.2,
  "grade_distribution": { "A": 1100, "B": 134, "C": 0 },
  "avg_speech_ratio": 0.78,
  "avg_quality_score": 92.3,
  "diarization_confidence_avg": 0.88
}
```

### 2.8 speakers (UC-A2+ — 화자 인구통계 집계)

```json
{
  "total_unique_speakers": 78,
  "gender_distribution": { "남": 38, "여": 40 },
  "age_distribution": { "20대": 32, "30대": 28, "40대": 14, "50+": 4 },
  "region_distribution": { "수도권": 52, "영남": 14, "호남": 8, "기타": 4 },
  "primary_language_distribution": { "ko": 78 }
}
```

**INT:** `speaker_uuid` (실제 user_id), `speaker_real_name` 절대 X.

### 2.9 noise_env (UC-A2+, Day 6)

```json
{
  "snr_distribution": { "20+dB": 1100, "15-20dB": 134, "<15dB": 0 },
  "noise_category_distribution": {  // EXT (Day 6 enum 11종)
    "indoor_quiet": 800,
    "indoor_noisy": 200,
    "outdoor": 134,
    "vehicle": 60,
    "unknown": 40
  }
}
```

### 2.10 natural_speech (UC-A2+, 미래)

```json
{
  "interruption_rate": 0.12,        // 끼어들기 비율
  "turn_taking_avg_gap_sec": 0.45,
  "emotion_volatility_index": 0.22,
  "silence_ratio": 0.18,
  "code_switch_count": 3
}
```

→ **slot만** Day 6에 추가, 실제 값 산정은 BM v9.0 단계 2 (UC-A2 정식 출시 시).

### 2.11 labels (UC-A3+, 자동+검수 이중 — 미래)

```json
{
  "per_utterance": [
    {
      "utterance_id": "utt_xxxxx",
      "auto_label": { "emotion": "기쁨", "confidence": 0.87, "model_version": "v1" },
      "verify_label": { "emotion": "기쁨", "verified_by_anon": "rev_001", "verified_at": "ISO" },
      "agreement": true
    }
  ],
  "summary": {
    "auto_label_count": 1234,
    "verify_label_count": 124,
    "agreement_rate_pct": 92
  }
}
```

→ **slot만**. 실제 값은 BM 단계 2.

### 2.12 taxonomy (UC-A3+, 미래)

```json
{
  "level1": "통화" | "회의" | "상담",
  "level2": "고객지원" | "비즈니스" | "일상",
  "level3": "자유 입력 (예: 카드사 청구 문의)"
}
```

→ slot only.

### 2.13 processing_status (UC-A3+, 미래)

AI-Hub #119 표준 9 단계:
```
1.수집 → 2.전처리 → 3.STT → 4.PII마스킹 → 5.화자분리 →
6.품질평가 → 7.spot-check → 8.승인 → 9.export
```

각 utterance에 `current_stage` + `stage_timestamps` 객체.

### 2.14 freshness (UC-A2+, 미래)

```json
{
  "package_export_date": "ISO",
  "data_collection_date_range": { "min": "ISO", "max": "ISO" },
  "slang_dictionary_count": 23,
  "trending_topics": ["챗GPT", "탕후루"],
  "data_age_avg_days": 14
}
```

### 2.15 dialog_summary (UC-LLM, 미래)

```json
{
  "per_session_summary": [
    { "session_id": "ses_xxxxx", "summary": "고객이 카드 분실 신고...", "key_topics": ["분실신고"] }
  ],
  "cross_session_aggregated_summary": "..."
}
```

### 2.16 instruction_tuning_data (UC-LLM, 미래)

```json
{
  "classification_tasks": [
    { "instruction": "다음 통화의 의도를 분류하세요", "input": "...", "output": "분실신고", "task_category": "intent" }
  ],
  "summary_tasks": [
    { "instruction": "다음 통화를 1문장으로 요약", "input": "...", "output": "..." }
  ],
  "qa_tasks": [
    { "instruction": "통화에서 카드번호를 알려달라고 요청한 시점은?", "input": "...", "output": "01:23" }
  ],
  "generation_metadata": {
    "model_version": "claude-opus-4.7",
    "generated_at": "ISO",
    "ratio_to_source": 10.76
  }
}
```

---

## 3. v1.0 → v2.0 마이그레이션 매핑 (packageBuilder.ts)

| v1.0 (현재) | v2.0 (목표) | 작업일 |
|---|---|---|
| `manifest.json` | manifest + schema_meta 분리 | Day 2 |
| `utterances.jsonl` | utterances.jsonl (ms 추가, speaker_id 정수) | Day 3 |
| `quality_summary.json` | quality_metrics | (그대로) |
| `speaker_demographics.json` | speakers (집계) | (그대로) |
| (없음) | **consent_meta.jsonl** | **Day 5** |
| (없음) | **pii_meta.json** | Day 2 |
| (없음) | schema_meta (root) | Day 2 |
| (없음) | noise_env, natural_speech, labels, taxonomy | Day 6 (slot만) |

---

## 4. 보안 검증 체크리스트 (export 전 자동 검증)

```
[ ] schema_meta.schema_version == "2.0"
[ ] 모든 utterance에 consent_token_id 매칭
[ ] consent_chain_verified=true 인 utterance만 포함 (UC-A2+)
[ ] INT 필드 (text_raw, ip_address, speaker_uuid 등) export JSON에 등장 X
[ ] 모든 audio file PII 비프 처리 완료 (pii_meta.recall_estimate_pct ≥ 95)
[ ] schema_version 미일치 시 reject
```

→ Day 7 통합 테스트 단계에서 자동화.

---

## 5. 매수자 검증 가능성 (차별화 핵심)

매수자가 우리 패키지를 받은 후 직접 검증 가능한 항목:
1. **consent_meta**의 `verification_signature` (HMAC-SHA256) — 서버 서명 검증
2. **schema_meta.uncounted_version** — 동일 버전 두 패키지 메타 일관성
3. **pii_meta.kisa_compliance** + 자체 PII 검증 도구로 우리 마스킹 결과 재현
4. `consent_chain_verified` 통계 — 패키지 내 양자 동의 비율 직접 카운트

→ 이게 AI-Hub와의 핵심 차별점. AI-Hub는 수집 시 동의받지만 메타 미내장 → 매수자 직접 검증 불가.

---

## 6. 다음 단계

**Day 2~7:** 본 문서 기반 코드/마이그레이션 작업.
**Day 7 이후:** UC-A1 5h 파일럿 빌드 (BM v9.0 단계 1).
**v2.1 (BM 단계 2):** noise_env / natural_speech / labels 슬롯에 실제 값 채움.
**v3.0 (BM 단계 3):** dialog_summary / instruction_tuning_data UC-LLM 정식 출시.
