# voice-api 화자 분리 정확도 개선 (옵션 D + B, TDD 8-Phase)

상태: 계획 확정 — 구현 대기 (2026-04-13)
관련 문서: `uncounted-docs/voice-api/화자분리_정확도_이슈.md`
회귀 anchor: task `5dc13ea73c62`, utterance 431 (3443~3472s, 38 word 모두 SPEAKER_00 → 3449~3456s 7초 구간이 다른 화자여야 함)
멀티모델 자문: `.plan-consult/latest/plan-synthesis.md`

## 목표

1. 옵션 D — 통화 녹음 엔드포인트에 `min_speakers=2, max_speakers=2` hint 전달, 환상 화자 SPEAKER_02 제거
2. 옵션 B — voice-api에 WeSpeaker ResNet34-LM ONNX 후처리 포팅, 발화 구간별 임베딩 → AHC 재클러스터링 → 화자 경계 재라벨
3. 옵션 C(청크 간 Hungarian matching)는 **이번 PR scope out**, 후속 작업으로 `uncounted-docs/voice-api/화자분리_정확도_이슈.md`에 별도 트래킹

## 확정된 결정값

| # | 항목 | 값 |
|---|---|---|
| 1 | WeSpeaker ONNX 배치 | 별도 다운로드 스크립트 (앱 ONNX 재사용 X) |
| 2 | Long audio fixture | `sample_data/Call/통화 녹음 임명훈_260313_195506.m4a` |
| 3 | 임베딩 차원 검증 | Phase 4 RED 단계에서 같이 탐색 (모델 메타에서 동적 추론) |
| 4 | GPU 통합 테스트 | dev 서버 수동 실행 (`RUN_GPU_INTEGRATION=1 pytest -m "slow and gpu"`) |
| 5 | 옵션 C | 이번 PR scope out, 이슈 문서에 후속 섹션 추가 |

## 제약

- voice-api 소스는 로컬에서만 수정 — GPU 서버 직접 패치 금지, 서버에는 `.env`/systemctl만 tmux로 적용
- AI 추론 결과 자체 DB 저장/판매 금지 — 화자 라벨은 utterances 내부 사용만 OK
- 임베딩은 메모리 휘발 — 저장/재사용 금지 (생체정보 컴플라이언스)
- 처리 시간 회귀 가드: `<= min(18.0x realtime, baseline × 1.12)`

## Feature Flags

| 환경변수 | 기본값 | 용도 |
|---|---|---|
| `VOICE_DIARIZATION_FORCE_TWO_SPEAKERS` | `false` | 옵션 D 활성화 |
| `VOICE_DIARIZATION_FORCE_TWO_SPEAKERS_ENDPOINTS` | `call_recording` | 옵션 D 적용 endpoint scope |
| `VOICE_DIARIZATION_WESPEAKER_RECLUSTER` | `false` | 옵션 B 활성화 (D와 독립 kill switch) |
| `VOICE_DIARIZATION_WESPEAKER_MODEL_PATH` | `(unset)` | ONNX 파일 경로 |
| `VOICE_DIARIZATION_EMBEDDING_PROVIDER` | `cpu` | onnxruntime provider |
| `VOICE_DIARIZATION_RECLUSTER_CONFIDENCE_THRESHOLD` | `(TBD)` | low-confidence fallback gate |
| `VOICE_DIARIZATION_ONNX_INTRA_OP_THREADS` | `2` | CPU thread cap |

## 메트릭

- **Primary**: word-level speaker accuracy (label-invariant, 2-speaker permutation)
- **Secondary**: DER (250ms collar, 부분 windows만), JER, speaker count error
- **회귀 게이트**:
  - utterance 431 window word-level accuracy ≥ 0.80
  - 3449~3456s 부근 화자 경계 1회 이상 검출
  - 통화 전체에 `SPEAKER_02` 0건
  - 처리 시간 ≤ baseline × 1.12

## TDD 8-Phase

### Phase 0: Fixture + Metric Harness

RED:
- `tests/fixtures/diarization/utterance_431_words.json` — 38 word 타임스탬프 + 현재 SPEAKER_00 라벨
- `tests/fixtures/diarization/utterance_431_expected.json` — 3449~3456s 화자 전환 reference
- `tests/test_diarization_regression.py`:
  - `test_utterance_431_expected_fixture_contains_speaker_switch` (실패)
  - `test_word_speaker_accuracy_detects_merged_failure` (실패)

GREEN:
- `app/services/diarization_metrics.py`:
  - `word_level_speaker_accuracy(words, reference, collar=0.25)` — label-invariant best permutation
  - `speaker_count(labels)`
  - `count_speaker_label(labels, target)` — SPEAKER_02 검출용

REFACTOR:
- `tests/conftest.py`에 fixture loader
- pytest markers 정의: `unit`, `slow`, `gpu`, `real_audio`
- Commit: `test: add diarization regression fixtures and metrics`

### Phase 1: Option D — Config Contract

RED:
- `tests/test_diarization_config.py`:
  - `call_recording` 모드 + flag on → `{"min_speakers": 2, "max_speakers": 2}`
  - flag off → `{}`
  - non-call endpoint → `{}` (명시 요청 없으면)
  - invalid env → 시작 시 fail closed

GREEN:
- `app/services/diarization_config.py`:
  - `@dataclass(frozen=True) class DiarizationConfig`
  - `force_two_speakers: bool`, `min_speakers: int | None`, `max_speakers: int | None`, `enabled_endpoint_modes: frozenset[str]`
  - `from_env() -> DiarizationConfig`, `resolve_options(mode: str) -> dict`

REFACTOR:
- `.env.example`에 새 변수 문서화
- Commit: `feat: add diarization speaker hint config`

### Phase 2: Option D — Pyannote Invocation

RED:
- `tests/test_stt_processor_diarization_options.py`:
  - fake pyannote pipeline → `transcribe()` 호출이 `min_speakers=2, max_speakers=2` 전달 검증
  - chunked path (`_transcribe_chunk`)도 동일 hint 전달 검증
  - 합성 2-speaker 결과에서 `SPEAKER_02` 미발생 검증

GREEN:
- `app/stt_processor.py`:
  - 작업 시작 시 `DiarizationConfig.resolve_options(mode)` 1회 호출
  - 모든 `_diarize_model(...)` 호출 site에 옵션 전달 (transcribe + chunked 양쪽)

REFACTOR:
- 헬퍼 `_run_diarization(audio, options)` 추출 (중복 제거)
- Commit: `fix: pass two-speaker hints to pyannote diarization`

### Phase 3: Option D — Slow Integration Gate

RED:
- `tests/integration/test_diarization_long_call.py`:
  - `@pytest.mark.gpu @pytest.mark.slow @pytest.mark.real_audio`
  - skip 조건: `RUN_GPU_INTEGRATION=1` + `VOICE_API_LONG_CALL_FIXTURE` 환경변수
  - baseline 실행 → SPEAKER_02 존재 + utterance 431 단일 화자 → 실패
- 옵션 D enable 후 재실행 → 통과 기대

GREEN:
- 통합 헬퍼: 로컬 voice-api transcription 경로를 옵션 D enable로 호출
- 산출 JSON을 `tmp_path`에 저장 (DB X)
- assertion:
  - 모든 라벨 ∈ `{SPEAKER_00, SPEAKER_01}`
  - utterance 431 window에 화자 전환 ≥ 1회

REFACTOR:
- `pytest.ini` markers 등록 + skip reason
- 벤치마크 timer fixture (realtime multiplier 기록)
- Commit: `test: add long-call diarization integration gate`

**→ 여기서 1차 PR 가능 (옵션 D만)**

### Phase 4: Option B — WeSpeaker Runtime Wrapper

RED:
- `tests/test_speaker_embedding.py`:
  - fake ONNX session — 실모델 로드 X
  - mono float32 입력 shape 변환 검증
  - 출력 L2 normalize 검증
  - 출력 dim을 모델 메타에서 추론 (하드코딩 X) — **여기서 같이 dim 결정**
  - 모델 경로 미설정 시 `EmbeddingUnavailable` typed result 반환
  - provider 기본값 = `CPUExecutionProvider`

GREEN:
- `app/services/speaker_embedding.py`:
  - `class SpeakerEmbeddingModel` — lazy load
  - `extract_embedding(audio: np.ndarray, sample_rate: int) -> np.ndarray | None`
  - `VOICE_DIARIZATION_WESPEAKER_MODEL_PATH`, `VOICE_DIARIZATION_EMBEDDING_PROVIDER` 읽기

REFACTOR:
- 전처리 결정성 보장: resample, mono mixdown, float32 normalize
- `onnxruntime` import 실패 + flag off → silent skip (서비스 부팅 영향 없음)
- 모델 다운로드 스크립트: `scripts/download_wespeaker.sh` (별도 다운로드 결정)
- Commit: `feat: add WeSpeaker ONNX embedding runtime`

### Phase 5: Option B — Window Selection

RED:
- `tests/test_speaker_recluster_windows.py`:
  - utterance 431 형태 timeline (A → B(7s) → A) + 모든 word `SPEAKER_00`
  - window builder가 multiple candidate 생성
  - audio bounds clip 검증
  - 최소 길이 이하 window는 skip 또는 인접 merge

GREEN:
- `app/services/speaker_recluster.py::build_embedding_windows(words, segments, min_window=1.0, max_window=4.0, hop_on_speaker_boundaries=True)`
- word 타임스탬프 기반 (utterance 431 해상도 확보)
- 청크 로컬 audio offset → 절대 시간 변환 헬퍼

REFACTOR:
- window selection과 ONNX inference 분리 (fast test 가능)
- 모든 반환 구조 immutable (dict copy)
- Commit: `feat: build speaker embedding windows`

### Phase 6: Option B — Reclustering & Relabeling

RED:
- `tests/test_speaker_recluster.py`:
  - 결정적 fake embedding: A=`[1,0,0]`,`[0.98,0.02,0]` / B=`[0,1,0]`,`[0.02,0.98,0]`
  - 모든 SPEAKER_00 → 임베딩 분리 시 두 라벨로 split
  - SPEAKER_02 존재 → 가장 가까운 두 cluster 중 하나로 재할당
  - low-confidence → 원본 라벨 유지
  - 출력 라벨은 항상 `SPEAKER_00`/`SPEAKER_01` (sklearn cluster id X)

GREEN:
- `sklearn.cluster.AgglomerativeClustering(metric="cosine", linkage="average", n_clusters=2)`
- 구버전 sklearn 호환: `affinity="cosine"` fallback
- word를 timestamp overlap으로 가장 가까운 window에 매핑 → relabel
- confidence gate:
  - mean intra-cluster cosine ≥ threshold
  - inter-cluster margin ≥ threshold
  - 클러스터당 최소 발화 ≥ 1s (local) / 3s (global)

REFACTOR:
- label canonicalization, confidence scoring 헬퍼 분리
- Commit: `feat: recluster diarization with speaker embeddings`

### Phase 7: Option B — Pipeline Integration

RED:
- `tests/test_stt_processor_recluster_integration.py`:
  - 모든 외부 호출 mock (transcription/alignment/pyannote/embedding)
  - flag off → byte-equivalent 라벨 (회귀 X)
  - flag on → `assign_word_speakers` 다음, `segment_utterances` 이전에 hook 검증
  - 청크 모드: 청크별 옵션 B 실행, 청크 간 라벨 통합은 나중 (옵션 C)

GREEN:
- `app/stt_processor.py`:
  - `assign_word_speakers` 직후 `maybe_recluster_speakers(...)` 호출
  - audio array, sample rate, words, segments, mode 전달
  - 결과는 immutable copy로 segments/words 갱신

REFACTOR:
- structured logging:
  - `diarization_hint_enabled`, `wespeaker_recluster_enabled`
  - `wespeaker_windows`, `wespeaker_confidence`
  - `speaker_count_before`, `speaker_count_after`
  - `wespeaker_elapsed_ms`
- Commit: `feat: integrate WeSpeaker diarization post-processing`

### Phase 8: Regression + Performance Gate

RED:
- 성능 가드: long-call fixture에서 baseline RTF 기록 → D+B 활성화 시 `<= min(18.0x, baseline × 1.12)` 강제
- utterance 431 word-level accuracy ≥ 0.80 강제
- SPEAKER_02 0건 강제

GREEN:
- 윈도우 수 최적화: speech window만 sample, 분당 cap, 중복 span 임베딩 재사용, 가능하면 batch inference
- `VOICE_DIARIZATION_ONNX_INTRA_OP_THREADS=2` 기본

REFACTOR:
- 측정 리포트 작성 (`uncounted-docs/voice-api/화자분리_정확도_이슈.md` 업데이트):
  - DER/JER (가능 영역만)
  - utterance 431 word-level accuracy
  - 통화 전체 speaker count
  - realtime multiplier (baseline / D / D+B)
- Commit: `test: guard diarization accuracy and throughput`

## 롤아웃

### Dev 단계 (옵션 D 먼저)
1. Phase 0~3 코드 + 테스트 로컬 머지
2. fast pytest 통과 (`pytest -m "not slow and not gpu"`)
3. dev 서버 `.env.dev`에 `VOICE_DIARIZATION_FORCE_TWO_SPEAKERS=true` 추가 → systemctl restart
4. GPU 통합 테스트 수동 실행 → utterance 431 + SPEAKER_02 검증
5. 1시간 실트래픽 모니터링 (turbo 전환 때와 동일 패턴)

### Live 단계 (옵션 D)
1. dev 안정 확인 후 live `.env`에도 동일 flag enable
2. 카나리 없이 즉시 적용 가능 (hint만 추가, 코드 경로 동일)

### Dev → Live 단계 (옵션 B)
1. Phase 4~7 머지 + WeSpeaker ONNX 다운로드 스크립트로 dev 서버에 모델 배치
2. dev에서 Phase 8 regression+perf gate 통과 확인
3. dev `VOICE_DIARIZATION_WESPEAKER_RECLUSTER=true` enable → 1시간 모니터링
4. live에 단계적 enable, **kill switch 즉시 사용 가능**하게 유지
5. live VRAM/RTF/에러율 모니터링 후 안정 시 고정

## 위험

| 위험 | 완화 |
|---|---|
| GPU VRAM 경합 (WhisperX + WeSpeaker) | CPU provider 기본, GPU는 측정 후 옵션 |
| 처리량 회귀 (16.1x 기반) | window cap + speech-only + bounded thread |
| 비통화 음성에 force two-speaker 적용 | `enabled_endpoint_modes=call_recording` 한정 |
| WeSpeaker over-split (감정/운율 변화) | confidence gate + min duration + fallback |
| 청크 간 라벨 drift | 잔존 위험 인정, 옵션 C로 후속 |
| onnxruntime-gpu 의존성 충돌 | generic `onnxruntime` (CPU) 우선 |
| 임베딩 생체정보 컴플라이언스 | in-memory only, 저장/재사용 금지 |

## 후속 (Backlog)

- 옵션 C: 청크 간 화자 ID Hungarian matching — `uncounted-docs/voice-api/화자분리_정확도_이슈.md` "후속 작업" 섹션 참조. 옵션 B 임베딩 인프라가 전제조건
- 옵션 A: pyannote 3.1 모델 업그레이드 — D+B 효과 측정 후 결정
- spectral clustering 실험 — n_speakers > 2 케이스용

---

## 이전 계획

<details>
<summary>WhisperX large-v3 → large-v3-turbo 전환 (2026-04-13, 완료)</summary>

상태: 완료 — dev 환경 전환, 1시간 실트래픽 검증 통과
리포트: [uncounted-docs/voice-api/large-v3-turbo-전환.md](uncounted-docs/voice-api/large-v3-turbo-전환.md)

### 핵심 수치

| 지표 | baseline (large-v3) | turbo | 개선 |
|---|---|---|---|
| idle VRAM | 5393 MiB | 3685 MiB | −1708 (−31.7%) |
| 추론 VRAM (운영) | 7792 MiB | 4469 MiB | −3323 (−42.6%) |
| 평균 RTF | 0.114 | 0.048 | 2.4x 빠름 |
| 품질 | baseline이 "Q." 환각 생성 | 환각 없음 | turbo 우위 |

### 확정된 결정값

| # | 항목 | 값 | 결과 |
|---|---|---|---|
| 1 | 벤치마크 샘플 | dev DB user_only 4건 (로컬 익명화) → `sample_data/Call`로 변경 (S3 전환 후 원본 세션 미저장) | 완료 |
| 2 | 의존성 업그레이드 | 불가 | Phase 0 통과 (faster-whisper 1.2.1이 turbo 지원) |
| 3 | 배포 대상 | dev 환경만 | 완료 |
| 4 | WER 임계값 | 2%p | 부적절 metric → 육안 검토로 대체 |

### Phase 완료 현황

- [x] Phase 0: faster-whisper/ctranslate2 turbo 지원 확인
- [x] Phase 1: 벤치마크 샘플 4개 선별
- [x] Phase 2: baseline 측정
- [x] Phase 3: turbo 로드 테스트
- [x] Phase 4: turbo 측정 + diff
- [x] Phase 5: dev 배포
- [x] Phase 6: 1시간 실트래픽 모니터링
- [x] Phase 7: 문서 업데이트

</details>

<details>
<summary>Voice API 큐 안정화 3종 패치 (2026-04-13, 완료)</summary>

서버 MAX_ACTIVE_JOBS=5 + 503 백프레셔, Android polling 15분, 실패 쿨다운.
관련 문서: `uncounted-docs/voice-api/큐_병목_및_폴링_타임아웃_이슈.md`

</details>

<details>
<summary>음성 처리 파이프라인 서버 전환 (2026-04-10, 완료)</summary>

온디바이스 Moonshine-ko ONNX 제거, Voice API (WhisperX + pyannote) 전면 전환.

</details>
