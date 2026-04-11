# 음성 처리 파이프라인 서버 전환 실행 계획

상태: Phase 1 완료 (코드 리뷰 + 검증 통과, 커밋 대기)
타입: feature
생성일: 2026-04-10
완료일: 2026-04-10
Voice API Swagger: http://183.96.42.95:8000/docs

## 배경

온디바이스(Android)에서 Moonshine-ko ONNX 기반 STT + 에너지/MFCC 기반 화자분리를 수행해왔으나,
성능 및 정합성 부족으로 GPU 서버(WhisperX large-v3 + pyannote)로 전환한다.

## 현재 아키텍처 (온디바이스 처리)

```
[Android Native Pipeline — SttProcessingService.java]
PHASE1: loadOrDecodeWav → loadFullPcm → removeSilence → noiseReduction
PHASE2: splitPcmIntoChunks (60초 단위)
PHASE3: per-chunk: fingerprint → computeStats → OnnxSttRunner(STT) → PiiMasker → VoiceLabeler + TextLabeler
PHASE4: 1-chunk lag 발화분리(UtteranceSegmenter) → 발화별 WAV 추출 + PII 비프 + 업로드(Phase4UtteranceUploader)
```

### 온디바이스 처리의 문제점

| 처리 단계 | 온디바이스 | 문제 |
|-----------|-----------|------|
| STT | Moonshine-ko ONNX (base, 237MB) | 한국어 고유명사 인식 한계, 반복 토큰 발생 |
| 화자분리 | RMS 에너지 + MFCC + WeSpeaker 임베딩 | 에너지 기반 휴리스틱 — 조용한 화자 오분류 빈번 |
| PII 마스킹 | PiiMasker.java (정규식) | STT 오류로 PII 미탐지 |
| 발화 분리 | UtteranceSegmenter.java | 화자분리 오류 전파 → 발화 경계 부정확 |
| 오디오 품질 | AudioProcessor (무음/잡음 제거) | CPU 한계로 고급 노이즈 제거 불가 |

## 목표 아키텍처 (서버 전환)

```
[App] 오디오 스캔 → 디코딩(MediaCodec) → fingerprint(중복 skip)
  ↓
[App → Voice API] POST /api/v1/transcribe (원본 m4a/wav 업로드)
  ↓
[Voice API — GPU 서버]
  WhisperX large-v3 → Forced Alignment → pyannote 화자분리
  → PII 마스킹(9종) → 발화분리 → 화자별 오디오 → 인메모리 서빙
  ↓
[App ← Voice API] GET /api/v1/jobs/{task_id} (폴링 → completed)
  ↓
[App] 결과 매핑 → 라벨링(VoiceLabeler/TextLabeler) → 기존 저장 흐름 유지
  ↓
[App → uncounted-api] 세션/청크/발화/트랜스크립트 업로드 (기존 API 그대로)
```

## Voice API 제공 기능 (서버로 이전 가능)

| 기능 | API 파라미터 | 결과 필드 |
|------|-------------|----------|
| STT (WhisperX large-v3) | `language=ko` | `segments[].text`, `full_text` |
| Word-level 타임스탬프 | (기본 포함) | `segments[].words[].{word, start, end}` |
| 화자분리 (pyannote) | `diarize=true` | `segments[].speaker`, `words[].speaker` |
| PII 마스킹 (9종) | `mask_pii=true` | `pii_summary[]`, 마스킹된 text |
| 이름 마스킹 | `enable_name_masking=true` | 김OO 형태 마스킹 |
| 발화 분리 | `split_by_utterance=true` | `utterances[]` + `utterance_NNN.wav` |
| 화자별 오디오 | `split_by_speaker=true` | `speaker_audio[]` + `speaker_SPEAKER_NN.wav` |

## 온디바이스에 유지해야 하는 것

| 기능 | 이유 | 파일 |
|------|------|------|
| 오디오 스캔/파일 로딩 | Capacitor 파일시스템 접근 필요 | `scanEngine.ts`, `audioFileLoader.ts` |
| 오디오 디코딩 (M4A→WAV) | Voice API가 m4a 직접 수신 가능하므로 **선택적** | `audioDecoderBridge.ts`, `AudioDecoderPlugin.java` |
| 핑거프린트/중복 검출 | 네트워크 전송 전 중복 스킵 필수 | `audioDedupe.ts`, `AudioProcessor.java (fingerprint)` |
| 음성 임베딩 (WeSpeaker) | 목소리 등록/인증은 로컬 프라이버시 기능 | `embeddingEngine.ts`, `EmbeddingExtractor.java` |
| 자동 라벨링 | Voice API 결과 기반으로 재적용 | `VoiceLabeler.java`, `TextLabeler.java` |
| 동의 관리 | consent 필터는 앱에서 필수 | `consentEngine.ts`, `globalConsent.ts` |
| 세션/청크/발화 업로드 | 기존 uncounted-api 저장 흐름 유지 | `SessionApiClient.java`, `Phase4UtteranceUploader.java` |
| 파이프라인 상태 관리 | 진행률 추적, 복구 메커니즘 | `pipelineState.ts`, `SttRecoveryInit` |

## 실행 계획

### Phase 1: Voice API 클라이언트 + 어댑터 (앱)

**Wave 1: Voice API 통신 레이어**

Task 1-1: Voice API 클라이언트 모듈 신규 생성
- 신규: `uncounted-app/src/lib/api/voiceApi.ts`
  - `uploadToVoiceApi(audioFile: File|Blob, options)` → `{ task_id }`
  - `pollVoiceApiResult(taskId)` → 폴링 + 완료 시 전체 결과 반환
  - `downloadVoiceApiAudio(taskId, filename)` → WAV Blob
  - 에러 핸들링: 서버 다운 시 온디바이스 폴백 플래그
- 환경변수: `VITE_VOICE_API_URL` (dev: `http://183.96.42.95:8001`, live: `http://183.96.42.95:8000`)

Task 1-2: 서버 결과 → 앱 데이터 매핑 어댑터
- 신규: `uncounted-app/src/lib/voiceApiAdapter.ts`
  - Voice API `segments` → 기존 `TranscriptWord[]` 매핑
  - Voice API `utterances` → 기존 발화 구조 매핑
  - Voice API `pii_summary` → 기존 PII 데이터 매핑
  - Voice API `speaker` → 기존 `speakerId` (SPEAKER_00 등) 매핑

**Wave 2: 네이티브 파이프라인 분기 (온디바이스 vs 서버)**

Task 2-1: SttProcessingService에 서버 모드 분기 추가
- 수정: `android/.../service/SttProcessingService.java`
  - `SttMode` 확장: `'on'` (온디바이스) → `'on' | 'server'` (서버) | `'off'`
  - 서버 모드일 때: PHASE1 디코딩만 → Voice API 업로드 → 폴링 → 결과 수신
  - 온디바이스 모드: 기존 PHASE1~4 그대로 유지 (폴백용)
- 수정: `uncounted-app/src/lib/sttEngine.ts`
  - `SttMode` 타입에 `'server'` 추가
  - 네이티브 이벤트 수신 시 서버 모드 결과 처리

Task 2-2: 네이티브 Voice API 클라이언트 (Java)
- 신규: `android/.../api/VoiceApiClient.java`
  - OkHttp 기반 multipart 업로드
  - 폴링 루프 (1~2초 간격)
  - WAV 다운로드 (발화별, 화자별)
  - 네트워크 에러 시 온디바이스 폴백 트리거
  - **암호화 불필요** (Voice API는 내부 서버, AES-GCM 미적용)

**Wave 3: 저장 흐름 연결**

Task 3-1: 서버 결과 → 기존 업로드 흐름 통합
- 수정: `android/.../service/Phase4UtteranceUploader.java`
  - 서버 모드: Voice API에서 받은 발화별 WAV + 트랜스크립트 사용
  - `executeForChunk()` → `executeForServerResult()` 분기
  - 라벨 전파: VoiceLabeler/TextLabeler는 서버 결과 텍스트 기반으로 재적용
- 수정: `uncounted-app/src/lib/postSttPipeline.ts`
  - 서버 결과의 `source: 'server'`로 트랜스크립트 저장
  - 기존 라벨링/통계/동의 적용 로직 그대로 유지

Task 3-2: Transcript API에 source 구분 추가
- 수정: `uncounted-api/src/routes/transcripts.ts` (이미 `source` 필드 존재)
  - `source: 'server'` 값 추가 확인
- 수정: `uncounted-app/src/lib/api/transcripts.ts`
  - `saveTranscriptApi()` 호출 시 `source: 'server'` 전달

### Phase 2: 설정 UI + 폴백 메커니즘

Task 4-1: STT 모드 설정 UI 업데이트
- 수정: `uncounted-app/src/pages/settings/SettingsPage.tsx` (또는 해당 설정 화면)
  - STT 모드 토글: OFF / 온디바이스 / 서버
  - 서버 상태 표시: Voice API health 체크 → "서버 연결됨" / "서버 오프라인"
  - 서버 오프라인 시 자동 온디바이스 폴백 안내

Task 4-2: 네트워크/서버 폴백 로직
- 수정: `uncounted-app/src/lib/sttEngine.ts`
  - Voice API 연결 실패 → 자동 온디바이스 전환
  - 네트워크 복구 시 서버 모드 재시도
  - 폴백 이벤트 로깅

### Phase 3: 최적화 + 정리

Task 5-1: 온디바이스 ONNX 모델 선택적 로딩
- 수정: `android/.../audio/OnnxSttRunner.java`
  - 서버 모드에서는 ONNX 모델 미로딩 → 메모리 절약 (237MB)
  - 폴백 시에만 lazy 로딩

Task 5-2: 배터리/네트워크 조건별 자동 전환
- 신규: `uncounted-app/src/lib/sttModeResolver.ts`
  - WiFi + 충전 중 → 서버 모드 권장
  - 모바일 데이터 + 배터리 → 온디바이스 유지
  - 사용자 설정 우선, 자동은 옵션

## 파일 변경 예상

| 파일 | 변경 | Phase |
|------|------|-------|
| `uncounted-app/src/lib/api/voiceApi.ts` | 신규 — Voice API 클라이언트 | 1 |
| `uncounted-app/src/lib/voiceApiAdapter.ts` | 신규 — 결과 매핑 어댑터 | 1 |
| `android/.../api/VoiceApiClient.java` | 신규 — 네이티브 Voice API 클라이언트 | 1 |
| `android/.../service/SttProcessingService.java` | 서버 모드 분기 추가 | 1 |
| `android/.../service/Phase4UtteranceUploader.java` | 서버 결과 → 업로드 통합 | 1 |
| `uncounted-app/src/lib/sttEngine.ts` | SttMode 확장 + 서버 이벤트 처리 | 1 |
| `uncounted-app/src/lib/postSttPipeline.ts` | source: 'server' 처리 | 1 |
| `uncounted-app/src/types/session.ts` | SttMode 타입 확장 | 1 |
| `uncounted-app/.env.*` | VITE_VOICE_API_URL 추가 | 1 |
| `android/local.properties` | VOICE_API_URL 추가 | 1 |
| `uncounted-app/src/pages/settings/` | STT 모드 설정 UI | 2 |
| `uncounted-app/src/lib/sttModeResolver.ts` | 신규 — 자동 전환 로직 | 3 |
| `android/.../audio/OnnxSttRunner.java` | 선택적 모델 로딩 | 3 |

## 에이전트 소유권

| 에이전트 | 담당 | 항목 |
|---------|------|------|
| app-expert | uncounted-app/src/ | Task 1-1, 1-2, 3-2(앱), 4-1, 4-2, 5-2 |
| backend-expert (Android) | android/ | Task 2-1, 2-2, 3-1, 5-1 |

## 기술 결정

1. **Voice API 직접 호출 (네이티브 Java)**: 앱은 Android Foreground Service에서 동작하므로 JS보다 네이티브에서 직접 호출이 안정적
2. **온디바이스 폴백 유지**: 서버 다운/오프라인 시 기존 파이프라인으로 자동 전환 — 서비스 중단 방지
3. **m4a 직접 업로드**: Voice API가 m4a 수신 가능하므로 디코딩 생략 가능 → 전송 크기 절약
4. **기존 저장 흐름 100% 유지**: uncounted-api의 세션/청크/발화/트랜스크립트 API 변경 없음
5. **서버 모드 = 전체 옵션 ON**: `diarize=true, mask_pii=true, enable_name_masking=true, split_by_utterance=true, split_by_speaker=true`

## 핵심 비즈니스 규칙

1. GPU 기반 AI 추론 결과 저장/표시/판매 금지 — Voice API 결과는 처리 도구이며 판매 대상 아님
2. 라벨은 사용자 입력만 — Voice API의 분류 결과를 라벨로 사용 금지
3. consent ON 데이터만 서버 전송 — `resolveConsentStatus(s) !== 'locked'` 체크 필수
4. PII 완전 배제 — Voice API의 PII 마스킹 결과를 신뢰하되, 추가 검증 레이어 유지
