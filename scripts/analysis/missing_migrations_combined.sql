-- 일괄 적용: dev DB 미적용 migration 8건 (2026-05-01)
-- 의존성 순서: 036 → 038 → 039 → 040 → 041 → 042 → 043 → 044
-- POLICY는 DROP IF EXISTS 사전 박힘 (재실행 안전)


-- ════════════════════════════════════════════════════════════════════
-- 036_pii_masking_audit.sql
-- ════════════════════════════════════════════════════════════════════
-- 036_pii_masking_audit.sql
-- PII 마스킹 적용 이력을 감사할 수 있도록 utterances 테이블에 메타 컬럼 추가.
-- pii_intervals/pii_reviewed_*는 "구간 그렸음/저장됨" 단계,
-- pii_masked_*는 "apply-mask로 WAV가 실제 변경됨" 단계.

ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS pii_masked          BOOLEAN     NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS pii_masked_at       TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS pii_masked_by       TEXT,
  ADD COLUMN IF NOT EXISTS pii_masked_by_email TEXT,
  ADD COLUMN IF NOT EXISTS pii_mask_version    INTEGER     NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_utt_pii_masked
  ON utterances(pii_masked) WHERE pii_masked = true;

COMMENT ON COLUMN utterances.pii_masked IS 'apply-mask로 WAV 변경이 완료된 상태';
COMMENT ON COLUMN utterances.pii_masked_at IS '마지막 apply-mask 시각';
COMMENT ON COLUMN utterances.pii_masked_by IS '마지막 apply-mask를 실행한 admin user_id (auth.users.id)';
COMMENT ON COLUMN utterances.pii_masked_by_email IS '감사 편의용 — admin email 스냅샷';
COMMENT ON COLUMN utterances.pii_mask_version IS 'apply-mask 누적 적용 횟수 (재적용 추적)';

-- ════════════════════════════════════════════════════════════════════
-- 038_utterance_review_tracking.sql
-- ════════════════════════════════════════════════════════════════════
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

-- 수동 제외 건 백필 (검수자 불명 -> NULL)
UPDATE utterances
SET reviewed_at = COALESCE(updated_at, created_at),
    reviewed_by = NULL
WHERE review_status = 'excluded'
  AND exclude_reason = 'manual'
  AND reviewed_at IS NULL;

-- ════════════════════════════════════════════════════════════════════
-- 039_upload_block_logs.sql
-- ════════════════════════════════════════════════════════════════════
-- 동의 게이팅 컴플라이언스: 업로드 차단 로그
-- v3.0 BM 게이트 C 작업 (2026-04-29)
--
-- uploadSanitizedAudio() 가드가 동의 미충족(consentStatus='locked' 등)으로 인해
-- WAV 업로드를 차단했을 때 운영 추적용으로 기록한다.
-- 컴플라이언스 감사 + 사용자 동의 흐름 디버깅에 사용.

CREATE TABLE IF NOT EXISTS upload_block_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT,
  consent_status TEXT,           -- 'locked' | 'user_only' | 'both_agreed' | NULL
  visibility_status TEXT,        -- 'PRIVATE' | 'PUBLIC_CONSENTED' | NULL
  block_reason TEXT NOT NULL,    -- 'consent_locked' | 'visibility_private' | 'diarization_pending'
  attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  metadata JSONB DEFAULT NULL    -- 추가 컨텍스트 (sessionTitle, blob size 등)
);

CREATE INDEX IF NOT EXISTS idx_upload_block_user_session
  ON upload_block_logs(user_id, session_id);

CREATE INDEX IF NOT EXISTS idx_upload_block_attempted_at
  ON upload_block_logs(attempted_at DESC);

CREATE INDEX IF NOT EXISTS idx_upload_block_reason
  ON upload_block_logs(block_reason);

-- service_role만 접근 (RLS 활성화, 정책 없음 = 모든 anon/authenticated 차단)
ALTER TABLE upload_block_logs ENABLE ROW LEVEL SECURITY;

-- ════════════════════════════════════════════════════════════════════
-- 040_consent_invitations.sql
-- ════════════════════════════════════════════════════════════════════
-- 통화 상대방 동의 초대 영속화 (법무 가이드 Step 3 + Option A 게이트 C+)
-- 2026-04-29
--
-- 기존 consentInvitation.ts는 localStorage로만 초대 기록을 보관했으나,
-- 법무 컨설팅(2026-04-04)은 다음을 요구:
--   1. 초대 기록 영속화 (기기 초기화 시 손실 방지, 동의 사실 증빙)
--   2. 토큰 유효기간 무기한 권장 (expires_at NULL 허용)
--   3. 동의자 IP 주소 기록 (감사 추적)
--
-- localStorage는 클라이언트 캐시로만 활용하고, 본 테이블이 source of truth.

CREATE TABLE IF NOT EXISTS consent_invitations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- 누구의 어떤 세션에 대한 초대인지
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT NOT NULL,

  -- 공유 토큰 (URL-safe, 16자 random)
  token TEXT UNIQUE NOT NULL,

  -- 상태: 'pending' | 'sent' | 'opened' | 'agreed' | 'declined' | 'expired'
  status TEXT NOT NULL DEFAULT 'pending',

  -- 시간 추적
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  sent_at TIMESTAMPTZ,
  responded_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,  -- NULL = 무기한 (법무 권고 기본값)

  -- 동의자 정보 (감사 추적)
  ip_address INET,
  user_agent TEXT,

  -- 공유 방식: 'web_share' | 'clipboard' | NULL
  share_method TEXT,

  -- 멱등성 보장 (동일 사용자가 동일 세션에 활성 초대 1건만)
  CONSTRAINT unique_active_invitation_per_session
    UNIQUE NULLS NOT DISTINCT (user_id, session_id, status)
    DEFERRABLE INITIALLY DEFERRED
);

CREATE INDEX IF NOT EXISTS idx_consent_invitations_token
  ON consent_invitations(token);

CREATE INDEX IF NOT EXISTS idx_consent_invitations_user_session
  ON consent_invitations(user_id, session_id);

CREATE INDEX IF NOT EXISTS idx_consent_invitations_status
  ON consent_invitations(status);

CREATE INDEX IF NOT EXISTS idx_consent_invitations_created_at
  ON consent_invitations(created_at DESC);

-- RLS: service_role만 접근. 클라이언트는 API 경유.
-- 토큰 자체가 capability이므로, 토큰을 아는 사람만 조회 가능 (API에서 제어).
ALTER TABLE consent_invitations ENABLE ROW LEVEL SECURITY;

-- ════════════════════════════════════════════════════════════════════
-- 041_consent_withdrawals.sql
-- ════════════════════════════════════════════════════════════════════
-- 동의 철회 감사 로그 (Option A 게이트 C+, 2026-04-29)
--
-- PIPA 제36조에 따른 동의 철회 시 회사가 이행한 4단계 처리를 감사 추적.
-- 처리 5일 이내 요건(PIPA 시행령 43조) 준수 증빙.
--
-- 4단계 처리:
--   1. cancelled_pending_count: 납품 대기 항목 취소 수
--   2. deleted_storage_files: 삭제된 S3 파일 수
--   3. anonymized_at: 개인정보 익명화 시각
--   4. delivered_sessions: 이미 제3자에게 제공된 세션·구매자 목록 (사용자 안내용)

CREATE TABLE IF NOT EXISTS consent_withdrawals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  -- 4단계 처리 결과
  withdrawn_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  cancelled_pending_count INT DEFAULT 0,
  deleted_storage_files INT DEFAULT 0,
  anonymized_at TIMESTAMPTZ,

  -- 이미 제공된 세션 목록 (구매자 안내용 — JSONB)
  -- 형식: [{ "sessionId": "...", "clientId": "...", "deliveredAt": "ISO" }, ...]
  delivered_sessions JSONB DEFAULT '[]'::jsonb,

  -- 사용자 사유 (선택)
  reason TEXT,

  -- 처리 완료 시각 (5일 SLA 추적)
  completed_at TIMESTAMPTZ,

  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_consent_withdrawals_user
  ON consent_withdrawals(user_id);

CREATE INDEX IF NOT EXISTS idx_consent_withdrawals_withdrawn_at
  ON consent_withdrawals(withdrawn_at DESC);

ALTER TABLE consent_withdrawals ENABLE ROW LEVEL SECURITY;

-- ════════════════════════════════════════════════════════════════════
-- 042_voice_profiles_origin_anchor.sql
-- ════════════════════════════════════════════════════════════════════
-- voice_profiles Origin Anchor 보존 (Option A 게이트 C+, 2026-04-29)
--
-- v1.3 Speaker Identity System Design 채택 부분:
--   - Origin Anchor: 최초 등록된 reference embedding을 영구 보존 (수정 불가)
--   - Drift Detection: live ↔ origin 유사도가 임계값(0.65) 미만이면 갱신 중단
--   - Anchor Quality: owner_score (spread + diversity + regularity 가중)
--
-- 시나리오 방어:
--   - 친구가 폰을 빌려 장시간 통화 → 시스템이 친구를 owner로 오판 →
--     앵커가 친구 쪽으로 이동 → 본인이 OTHER로 분류 → 복구 불가능 ("앵커 오염 피드백 루프")
--   - Origin Anchor 보존 + drift 차단으로 복구 가능 상태 유지
--
-- 본 마이그레이션은 스키마 확장만 수행. 실제 anchor 매칭 알고리즘은 voice-api
-- STT/diarization 통합 시점에 적용 예정 (deferred).

ALTER TABLE voice_profiles
  ADD COLUMN IF NOT EXISTS origin_reference_embedding JSONB,
  -- 최초 확정된 reference. 절대 수정 불가 (이탈 감지의 기준선).
  ADD COLUMN IF NOT EXISTS origin_confirmed_at TIMESTAMPTZ,
  -- Origin Anchor 확정 시각 (drift_limit 시간 완화 계산의 기준).
  ADD COLUMN IF NOT EXISTS anchor_quality NUMERIC,
  -- 0.0 ~ 1.0. owner_score = spread*0.4 + diversity*0.4 + regularity*0.2.
  ADD COLUMN IF NOT EXISTS drift_from_origin NUMERIC,
  -- 현재 reference ↔ origin 코사인 유사도 (0.65 미만 = drift 차단).
  ADD COLUMN IF NOT EXISTS drift_event_count INTEGER NOT NULL DEFAULT 0,
  -- drift 차단 누적 횟수 (3회 이상이면 anchor 재구축 검토).
  ADD COLUMN IF NOT EXISTS clean_calls INTEGER NOT NULL DEFAULT 0,
  -- SNR 15dB 이상 깨끗한 통화 건수 (앵커 후보 자격 게이트).
  ADD COLUMN IF NOT EXISTS processed_calls INTEGER NOT NULL DEFAULT 0;
  -- 처리 누적 통화 수 (점진적 확신 모델 단계 판정용).

-- 부분 인덱스: drift 이벤트 발생한 프로필만 (모니터링용)
CREATE INDEX IF NOT EXISTS idx_voice_profiles_drift_events
  ON voice_profiles(drift_event_count)
  WHERE drift_event_count > 0;

COMMENT ON COLUMN voice_profiles.origin_reference_embedding IS
  '최초 확정된 reference embedding. 절대 수정 불가. Drift 감지 기준선.';

COMMENT ON COLUMN voice_profiles.drift_from_origin IS
  '현재 reference ↔ origin 코사인 유사도. 0.65 미만 시 reference 갱신 차단.';

-- ════════════════════════════════════════════════════════════════════
-- 043_utterances_v2_schema.sql
-- ════════════════════════════════════════════════════════════════════
-- 데이터 스키마 v2.0 (Day 3, 2026-05-01) — utterances 컬럼 확장
--
-- legal/data_schema_v2.0.md 표준 반영:
--   1. duration_ms: AI-Hub 표준 ms 단위 (기존 duration_sec 보존, GENERATED)
--   2. speaker_id_int: AI-Hub 표준 정수 (0=user, 1=peer)
--      → 기존 speaker_id TEXT (SPEAKER_00 등 pyannote 출력)는 보존
--   3. start_ms / end_ms: 기존 start_sec / end_sec 보조
--
-- 마이그레이션 호환:
--   - 기존 컬럼은 모두 보존 (BREAKING CHANGE 없음)
--   - 신규 컬럼은 nullable 또는 GENERATED — packageBuilder export만 v2.0
--   - 기존 admin·label·STT 코드 영향 0

-- ── 1. ms 단위 컬럼 (GENERATED) ────────────────────────────────────────
-- duration_sec → duration_ms
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS duration_ms INTEGER
    GENERATED ALWAYS AS ((duration_sec * 1000)::INTEGER) STORED;

-- start_sec → start_ms (start_sec가 nullable이라 GENERATED는 NULL 처리)
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS start_ms INTEGER
    GENERATED ALWAYS AS (
      CASE WHEN start_sec IS NOT NULL THEN (start_sec * 1000)::INTEGER ELSE NULL END
    ) STORED;

ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS end_ms INTEGER
    GENERATED ALWAYS AS (
      CASE WHEN end_sec IS NOT NULL THEN (end_sec * 1000)::INTEGER ELSE NULL END
    ) STORED;

-- ── 2. speaker_id 정수형 (AI-Hub 표준) ────────────────────────────────
-- 기존 speaker_id TEXT (SPEAKER_00, SPEAKER_01 등)는 그대로 보존.
-- 신규 speaker_id_int: pyannote SPEAKER_NN → 0/1 변환 (utterance_segmenter에서 채움)
-- 변환 규칙: is_user=true → 0, is_user=false → 1, NULL이면 NULL
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS speaker_id_int INTEGER
    GENERATED ALWAYS AS (
      CASE
        WHEN is_user IS TRUE THEN 0
        WHEN is_user IS FALSE THEN 1
        ELSE NULL
      END
    ) STORED;

-- ── 3. 인덱스 (필요 시) ────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_utterances_speaker_id_int
  ON utterances(speaker_id_int)
  WHERE speaker_id_int IS NOT NULL;

-- ── 4. 코멘트 ──────────────────────────────────────────────────────────
COMMENT ON COLUMN utterances.duration_ms IS
  'v2.0 (2026-05-01): ms 단위 — AI-Hub 표준 호환. duration_sec * 1000.';

COMMENT ON COLUMN utterances.speaker_id_int IS
  'v2.0 (2026-05-01): 0=user, 1=peer. AI-Hub 표준 정수형. 기존 speaker_id TEXT(SPEAKER_NN)는 보존.';

COMMENT ON COLUMN utterances.start_ms IS 'v2.0 ms 단위 (start_sec * 1000)';
COMMENT ON COLUMN utterances.end_ms IS 'v2.0 ms 단위 (end_sec * 1000)';

-- ════════════════════════════════════════════════════════════════════
-- 044_utterances_v2_slots.sql
-- ════════════════════════════════════════════════════════════════════
-- 데이터 스키마 v2.0 (Day 6, 2026-05-01) — utterances slot 컬럼 (BM v9.0 단계 2~3)
--
-- legal/data_schema_v2.0.md 정의 16 객체 중 "slot only" 카테고리:
--   - noise_environment: 11 카테고리 enum (지금은 nullable, 데이터 채움은 단계 2)
--   - taxonomy: 3-level 분류 (지금은 nullable, 단계 2 SaaS API 결정 후 채움)
--
-- 본 마이그레이션은 컬럼만 추가 — packageBuilder는 nullable 그대로 export.
-- 실제 값 채움 로직은 BM v9.0 단계 2 (UC-A2 정식 출시) 시.

-- ── noise_environment slot ────────────────────────────────────────────
-- 11 카테고리 enum (legal/data_schema_v2.0.md 2.9 noise_env 정의):
--   indoor_quiet / indoor_noisy / outdoor_traffic / outdoor_other /
--   vehicle / public_transport / cafe / office / home / unknown / other
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS noise_category TEXT
    CHECK (noise_category IS NULL OR noise_category IN (
      'indoor_quiet', 'indoor_noisy', 'outdoor_traffic', 'outdoor_other',
      'vehicle', 'public_transport', 'cafe', 'office', 'home', 'unknown', 'other'
    ));

COMMENT ON COLUMN utterances.noise_category IS
  'v2.0 (2026-05-01): 11 카테고리 noise enum. nullable. 단계 2 (UC-A2)에서 자동 분류기로 채움.';

-- ── taxonomy slot (3-level) ───────────────────────────────────────────
ALTER TABLE utterances
  ADD COLUMN IF NOT EXISTS taxonomy_level1 TEXT,
  ADD COLUMN IF NOT EXISTS taxonomy_level2 TEXT,
  ADD COLUMN IF NOT EXISTS taxonomy_level3 TEXT;

COMMENT ON COLUMN utterances.taxonomy_level1 IS
  'v2.0 (2026-05-01): 도메인 대분류 (예: 통화/회의/상담). 단계 2 SaaS API 결정 후 채움.';
COMMENT ON COLUMN utterances.taxonomy_level2 IS 'v2.0: 중분류 (예: 고객지원/일상)';
COMMENT ON COLUMN utterances.taxonomy_level3 IS 'v2.0: 소분류 (자유 입력)';

-- ── 인덱스 (선택적 필터 — 단계 2 이후 활용) ──────────────────────────
CREATE INDEX IF NOT EXISTS idx_utterances_noise_category
  ON utterances(noise_category) WHERE noise_category IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_utterances_taxonomy_level1
  ON utterances(taxonomy_level1) WHERE taxonomy_level1 IS NOT NULL;
