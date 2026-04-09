# SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트)

상태: Wave 1~3 구현 완료 (2026-04-08) + v3 스펙 차이 보정 완료 (2026-04-09) + U-M01 통화 메타데이터 SKU 완성 (2026-04-09) + WeSpeaker 화자분리 리팩토링 완료 (2026-04-09)
타입: feature
생성일: 2026-04-08
스프린트: 4/8(수) ~ 4/10(금) | 납품 마감: 4/14(월)

## 목표

CLOVA Speech 샘플 납품 대응: 앱에서 녹음 → PHASE 4 온디바이스 발화 분리 → 서버 업로드 → 어드민 검수 → ZIP 다운로드 → CLOVA 전달 가능 상태 구현.

**완료 기준**: U-A01 1시간 패키지 ZIP 다운로드 가능 (utterance WAV + transcript + metadata 포함)

## v3 스펙 보정 완료 항목 (2026-04-09)

| ID | 항목 | 파일 | 상태 |
|----|------|------|------|
| FIX-1 | storage.ts volumeLufs 수신 누락 | `storage.ts:290,373` | ✅ 완료 |
| FIX-2 | utterances 테이블 U-A03 필드 추가 | `migrations/029_utterances_a03_fields.sql` | ✅ 완료 (수동 적용 필요) |
| FIX-3 | packageBuilder UtteranceMetaLine 완전 재작성 (demographics, consent, 라벨 평탄화, U-A03) | `packageBuilder.ts` | ✅ 완료 |
| FIX-4 | packageBuilder qa_score → quality_score 통일 | `packageBuilder.ts` | ✅ 완료 |
| FIX-5 | admin-utterances preview-mask 엔드포인트 추가 | `admin-utterances.ts` | ✅ 완료 |
| FIX-6 | apply-mask S3 원본 백업 추가 | `admin-utterances.ts` | ✅ 완료 |
| FIX-7 | inventoryService skuId 'A01'→'U-A01' 테스트 수정 | `poolingService.test.ts` | ✅ 완료 |

**테스트 결과**: 82/82 passed ✅

## U-M01 통화 메타데이터 SKU 완성 (2026-04-09)

| 항목 | 파일 | 상태 |
|------|------|------|
| callMetaCollector.ts 신규 구현 | `uncounted-app/src/lib/callMetaCollector.ts` | ✅ 완료 |
| MetadataCollectorInit 등록 (9→10번째) | `src/app/bootstrap/MetadataCollectorInit.tsx` | ✅ 완료 |
| CallLogPlugin.java (READ_CALL_LOG, 버케팅) | `android/.../CallLogPlugin.java` | ✅ 완료 |
| AndroidManifest READ_CALL_LOG 권한 추가 | `android/.../AndroidManifest.xml` | ✅ 완료 |
| MainActivity registerPlugin 등록 | `android/.../MainActivity.java` | ✅ 완료 |
| metadataRepository U-M01-v1 schemas 추가 | `uncounted-api/.../metadataRepository.ts` | ✅ 완료 |

**동의 게이트**: `um01Enabled` 미동의 시 수집 건너뜀. `DEFAULT_METADATA_CONSENT.um01Enabled = false` — 신규 설치 기본값 수집 안 함.

## PII 마스킹 에디터 + 검증 로직 TDD (2026-04-09)

| 항목 | 파일 | 상태 |
|------|------|------|
| PiiMaskingEditor.tsx 구현 (wavesurfer.js + Region) | `uncounted-admin/.../PiiMaskingEditor.tsx` | ✅ 완료 (F8) |
| admin.ts API 함수 AbortController + signal 추가 | `uncounted-admin/src/lib/api/admin.ts` | ✅ 완료 |
| validatePiiInterval / validatePiiIntervals 헬퍼 추출 | `uncounted-api/src/routes/admin-utterances-helpers.ts` | ✅ 완료 |
| 헬퍼 TDD 단위 테스트 13개 | `uncounted-api/src/routes/admin-utterances-helpers.test.ts` | ✅ 완료 |
| admin-utterances.ts 3개 라우트 헬퍼 교체 | `uncounted-api/src/routes/admin-utterances.ts` | ✅ 완료 |

**테스트 결과**: 95/95 passed ✅

## 목소리 등록 프로필 서버 동기화 (2026-04-10)

| 항목 | 파일 | 상태 |
|------|------|------|
| voice_profiles 테이블 생성 | `uncounted-api/supabase/migrations/030_voice_profiles.sql` | ✅ 완료 |
| GET/PUT/DELETE /api/user/voice-profile | `uncounted-api/src/routes/user.ts` | ✅ 완료 |
| PUT payload 크기 검증 (embeddings ≤20, referenceEmbedding ≤256) | `uncounted-api/src/routes/user.ts` | ✅ 완료 |
| voice-profile API 테스트 12개 | `uncounted-api/src/routes/voiceProfile.test.ts` | ✅ 완료 |
| voiceProfile API 클라이언트 | `uncounted-app/src/lib/api/voiceProfile.ts` | ✅ 완료 |
| saveProfile/resetProfile 서버 동기화 (fire-and-forget) | `uncounted-app/src/lib/embedding/embeddingProfile.ts` | ✅ 완료 |
| ensureProfileLoaded 4-tier 복원 (localStorage→Preferences→Filesystem→서버) | `uncounted-app/src/lib/embedding/embeddingProfile.ts` | ✅ 완료 |
| sessions batch upsert labels null 덮어쓰기 버그 수정 | `uncounted-api/src/routes/sessions-helpers.ts` | ✅ 완료 |

**효과**: 기기 교체/앱 재설치 후 목소리 등록 데이터 자동 복원. 전송은 AES-256-GCM 암호화.

**테스트 결과**: 107/107 passed ✅

## PII 마스킹 원본 백업 경로 수정 (2026-04-10)

| 항목 | 파일 | 상태 |
|------|------|------|
| S3 backupPath에서 `user_id` 세그먼트 제거 (3곳) | `uncounted-api/src/routes/admin-utterances.ts` | ✅ 완료 |

**변경**: `{user_id}/{session_id}/original/{id}.wav` → `{session_id}/original/{id}.wav`

## WeSpeaker 임베딩 기반 화자분리 리팩토링 (2026-04-09)

| 항목 | 파일 | 상태 |
|------|------|------|
| `assignSpeakersByEmbedding()` 추가 (등록 사용자: USER/PEER_N) | `SpeakerDiarizer.java` | ✅ 완료 |
| `assignSpeakersByUnsupervisedEmbedding()` 추가 (미등록: SPEAKER_N) | `SpeakerDiarizer.java` | ✅ 완료 |
| EmbeddingExtractor 항상 초기화 + 통합 분기 호출 | `SttProcessingService.java` | ✅ 완료 |
| `identifyUserSpeaker()` 제거 → `findUserSpeakerId()` 교체 | `SttProcessingService.java` | ✅ 완료 |
| consent 제한 제거 — `hasEnrolledVoice`이면 referenceEmbedding 전달 | `sttEngine.ts` | ✅ 완료 |

**효과**: MFCC 13차원 → WeSpeaker 256차원 임베딩으로 화자분리 정확도 대폭 향상. MFCC는 초기화 실패 시 폴백으로만 유지.

## 기반 문서

- `uncounted-docs/SKU_데이터셋_추출_최종기획서_v3.html`

## 프로젝트 구조

```
uncounted-project/
├── uncounted-api/      # Hono REST API (TypeScript, Supabase, iwinv S3)
├── uncounted-app/      # React + Capacitor (모바일 앱, Java Android)
├── uncounted-admin/    # React + Vite (관리자 웹)
└── uncounted-docs/     # 기능정의서, DB 스키마
```

## 코드베이스 검증 결과 (2026-04-08)

### 이미 존재하는 코드 (재사용/수정 대상)

| 구분 | 파일 | 현재 상태 | v3 수정 범위 |
|------|------|----------|-------------|
| DB | `009_session_chunks.sql` | session_chunks 테이블 존재, `storage_path NOT NULL` | 컬럼 추가 + NOT NULL 제거 |
| DB | 마이그레이션 001~024 | 024번까지 사용됨 | **신규는 025번부터** |
| API | `storage.ts` POST `/audio/chunk` | 청크 WAV multipart 업로드 | 발화 업로드 엔드포인트 추가 |
| API | `admin-exports.ts` | Export API 8개 엔드포인트 이미 존재 (preview/confirm/process/utterances/review/finalize/download/inventory) | `process`에서 utterances 테이블 우선 체크, `utterances`에서 신규 테이블 조회 |
| API | `utteranceRepository.ts` | `export_package_items` 테이블 기반 CRUD | utterances 테이블 병행 조회 로직 추가 |
| API | `utteranceSegmentationService.ts` | S3 다운로드 → FFmpeg 분할 → 재업로드 | utterances 존재 시 바이패스 |
| API | `packageBuilder.ts` | `export_package_items` → S3 WAV 다운로드 → ZIP | utterances 테이블 직접 읽기로 전환 |
| App | `SttProcessingService.java` (1209줄) | PHASE 1~3 구현, PHASE 4 없음 | PHASE 4 추가, PHASE 3 청크 WAV 업로드 제거 |
| App | `SessionApiClient.java` (299줄) | `uploadChunk()` 존재 | `uploadUtterance()`, `registerLogicalChunk()`, `completeUtterances()` 추가 |
| App | `SentenceBoundaryDetector.java` | 문장경계 탐지 구현 완료 | C1 UtteranceSegmenter 구현 시 활용 |
| App | `WavParser.java` | `splitAtBoundaries()` 존재 | 발화 추출 시 활용 |
| Admin | `AdminBuildWizardPage.tsx` | 8단계 위저드 이미 존재 | utterances 테이블 연동 수정 |
| Admin | `UtteranceReviewTable.tsx` | 자동필터/재생/체크박스 존재 | 청크 매핑(C0:S0) 표시 추가 |
| Admin | `UtteranceReviewGuide.tsx` | 검수 가이드 존재 | 수정 불필요 |

### 미존재 (신규 개발)

| 구분 | 항목 | 비고 |
|------|------|------|
| DB | `utterances` 테이블 | 기획서 3-3 스키마 그대로 |
| App | `UtteranceSegmenter.java` | SentenceBoundaryDetector 활용 |
| App | `ChunkAssigner.java` | 논리 청크 배정 알고리즘 |
| Admin | `UtteranceLabelingPanel.tsx` | A02 라벨 5종 + A03 대화행위 |
| Admin | `ConsentOverridePanel.tsx` | consent_status 강제 변경 |
| Admin | `PiiMaskingEditor.tsx` | wavesurfer.js 파형 + Region |
| API | PII 수동 마스킹 API 4종 | admin-utterances.ts 신규 라우트 |

### S3 저장 경로 (sanitized-audio 버킷)

| 리소스 | S3 key | v3 변경 |
|--------|--------|---------|
| 청크 WAV | `{userId}/{sessionId}/{sessionId}-001.wav` | v3에서 더 이상 업로드 안 함 (기존 데이터 유지) |
| 발화 WAV | `utterances/{sessionId}/utt_{sessionId}_000.wav` | 클라이언트가 직접 업로드 (기존 서버 생성 경로와 동일) |
| 패키지 ZIP | `exports/{exportJobId}/package.zip` | 변경 없음 |

### utteranceId 형식

`utt_{sessionId}_{sequence:03d}` — 예: `utt_abc123_000`, `utt_abc123_042`
- `buildUtteranceId()` in `utteranceRepository.ts:49-50`
- 클라이언트/서버 동일 규칙 사용

---

## 3일 스프린트 계획

### Day 1 (4/8 수): DB + 서버 API 기반 구축

**목표**: 발화/청크 데이터를 수신·저장할 수 있는 서버 인프라 완성

#### Wave 1-1 (병렬) — DB 마이그레이션

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| D1 | session_chunks 확장 | `uncounted-api/supabase/migrations/025_session_chunks_logical.sql` | utterance_count, total_utterance_duration, chunk_type 컬럼 추가 + **storage_path NOT NULL 제거** |
| D2 | utterances 테이블 | `uncounted-api/supabase/migrations/026_utterances.sql` | 전체 스키마 + 인덱스 + RLS (기획서 3-3 그대로) |
| D3 | sessions 확장 | `uncounted-api/supabase/migrations/027_sessions_utterance_status.sql` | utterance_count, utterance_upload_status 컬럼 추가 |

#### Wave 1-2 (병렬, D1~D3 완료 후) — 서버 API 3종

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| B1 | 논리 청크 등록 API | `uncounted-api/src/routes/storage.ts` 추가 | POST /api/storage/session-chunks (메타만, WAV 없음) → session_chunks INSERT (chunk_type='logical', storage_path=NULL) |
| B2 | 발화 업로드 API | `uncounted-api/src/routes/storage.ts` 추가 | POST /api/storage/audio/utterance (multipart: WAV + 암호화 메타) → S3 `utterances/{sessionId}/{utteranceId}.wav` 저장 + utterances INSERT |
| B3 | 발화 완료 API | `uncounted-api/src/routes/sessions.ts` 확장 | POST /api/sessions/:id/utterances/complete → sessions 상태 업데이트 (멱등성 보장) |

#### Wave 1-3 (B1~B3 완료 후) — 서버 파이프라인 수정

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| B4 | segmentationService 바이패스 | `uncounted-api/src/lib/export/utteranceSegmentationService.ts` 수정 | utterances 테이블에 데이터 존재 시 FFmpeg 분리 스킵 |
| B6 | qualityMetrics 수정 | `uncounted-api/src/lib/export/qualityMetricsService.ts` 수정 | 클라이언트 측정값(utterances 테이블) 집계 사용 |

---

### Day 2 (4/9 목): 클라이언트 PHASE 4 + Export 파이프라인 전환

**목표**: 앱에서 발화 분리·업로드 + 서버 패키징 파이프라인을 utterances 테이블 기반으로 전환

#### Wave 2-1 (병렬)

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| C1 | UtteranceSegmenter.java | `uncounted-app/android/.../UtteranceSegmenter.java` 신규 | sessionWords → 발화 경계 (화자변경 + 0.5s 묵음, 5~30초, ±0.15s 패딩). 기존 `SentenceBoundaryDetector.java` 활용 |
| C2 | ChunkAssigner.java | `uncounted-app/android/.../ChunkAssigner.java` 신규 | 발화 → 논리 청크 배정 (합산 ≥60초 + 문장 완성 기준) |
| B7 | Export process 수정 | `uncounted-api/src/routes/admin-exports.ts` 수정 | `process` 엔드포인트: utterances 테이블 존재 시 segmentBulk 스킵, 직접 사용 |
| B8 | packageBuilder 전환 | `uncounted-api/src/lib/export/packageBuilder.ts` 수정 | `export_package_items` 대신 `utterances` 테이블에서 직접 읽기, storage_path로 S3 WAV 다운로드 |

#### Wave 2-2 (C1, C2 완료 후)

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| C3 | SttProcessingService PHASE 4 | `uncounted-app/android/.../SttProcessingService.java` 수정 | 기존 PHASE 3 후에 PHASE 4 (5 Step) 추가 |
| C4 | SessionApiClient 확장 | `uncounted-app/android/.../SessionApiClient.java` 수정 | uploadUtterance() + registerLogicalChunk() + completeUtterances() 추가 |
| C5 | PHASE 3 청크 WAV 업로드 제거 | `uncounted-app/android/.../SttProcessingService.java` 수정 | Flow1에서 `sac.uploadChunk()` 호출 제거, sessionWords 누적만 유지 |

#### Wave 2-3 (B7, B8 완료 후)

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| B5 | utterances 엔드포인트 수정 | `uncounted-api/src/routes/admin-exports.ts` 수정 | GET utterances: utterances 테이블 직접 조회 (export_package_items 폴백 유지) |
| B9 | PII 수동 마스킹 API | `uncounted-api/src/routes/admin-utterances.ts` 신규 | 4개 엔드포인트: audio URL, PII 조회/저장, 마스킹 실행, 미리듣기 |

---

### Day 3 (4/10 금): 어드민 UI 수정/추가 + 통합 테스트

**목표**: 어드민에서 전체 플로우 동작 확인 + CLOVA 샘플 생성 테스트

#### Wave 3-1 (병렬)

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| F1 | AdminBuildWizardPage 수정 | `uncounted-admin/src/pages/admin/AdminBuildWizardPage.tsx` 수정 | utterances 테이블 기반 데이터 연동, 처리 진행 단계에서 클라이언트 발화 존재 시 segmentation 스킵 표시 |
| F2 | UtteranceReviewTable 수정 | `uncounted-admin/src/components/domain/UtteranceReviewTable.tsx` 수정 | 청크 매핑 표시(C0:S0 형태), utterances 테이블 필드 대응 (chunkId, sequenceInChunk) |
| F3 | UtteranceLabelingPanel | `uncounted-admin/src/components/domain/UtteranceLabelingPanel.tsx` 신규 | A02 라벨 5종 (relationship, purpose, domain, tone, noise) + A03 대화행위/강도 |

#### Wave 3-2 (F1~F3 완료 후)

| ID | 항목 | 파일 | 설명 |
|----|------|------|------|
| F6 | ConsentOverridePanel | `uncounted-admin/src/components/domain/ConsentOverridePanel.tsx` 신규 | consent_status 관리자 강제 변경 |
| F8 | PiiMaskingEditor | `uncounted-admin/src/components/domain/PiiMaskingEditor.tsx` 신규 | wavesurfer.js 파형 + Region 드래그 + beep/무음 처리 |

#### Wave 3-3: 통합 검증

| 항목 | 검증 내용 |
|------|----------|
| E2E 흐름 | 앱 녹음 → PHASE 4 → 서버 수신(utterances 테이블 + S3) → 어드민 검수 → ZIP 다운로드 |
| 빌드 검증 | API 빌드 + App Android 빌드 + Admin 빌드 |
| DB 정합성 | utterances ↔ session_chunks 매핑, storage_path와 실제 S3 파일 일치 |

---

## 의존성 그래프

```
Day 1:
  D1, D2, D3 (병렬)
    → B1, B2, B3 (병렬)
      → B4, B6 (병렬)

Day 2:
  C1, C2, B7, B8 (병렬)
    → C3, C4, C5 (순차)
    → B5, B9 (병렬)

Day 3:
  F1, F2, F3 (병렬)
    → F6, F8 (병렬)
      → E2E 통합 검증
```

## 에이전트 소유권

| 에이전트 | 담당 | 항목 |
|---------|------|------|
| backend-expert | uncounted-api/ | D1~D3, B1~B9 |
| app-expert | uncounted-app/ | C1~C5 |
| admin-expert | uncounted-admin/ | F1~F3, F6, F8 |

## 기술 스택

- API: Hono 4 + Node.js, Supabase (service_role), iwinv S3 호환, AES-256-GCM
- App: React 19 + Capacitor 8, Java (Android STT pipeline)
- Admin: React 19 + Vite 6, TypeScript, Tailwind CSS 3
- 테스트: Vitest 3
- 암호화: 모든 API 요청/응답 AES-256-GCM

## 핵심 비즈니스 규칙

1. GPU 기반 AI 추론 결과 저장/표시/판매 금지
2. 라벨은 사용자 입력만 (AI 자동 판정 라벨 금지)
3. 정밀 데이터 저장 금지
4. consent ON 데이터만 SKU 납품 가능
5. BU 이중 판매 방지 (lock_status)

## 크로스 프로젝트 동기화

- API 엔드포인트 추가 시 → App SessionApiClient + Admin apiFetch 동시 수정
- DB 스키마 변경 시 → API 마이그레이션 + uncounted-docs 문서 업데이트
- utteranceId 규칙: `utt_{sessionId}_{sequence:03d}` — 클라이언트/서버 동일
- 타입 변경 시 → 각 프로젝트 src/types/ 일관성 확인
