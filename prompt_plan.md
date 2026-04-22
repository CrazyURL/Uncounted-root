---
title: "음성 PII 자동 마스킹 (Audio PII Masking)"
status: completed
created: 2026-04-22
completed: 2026-04-22
type: feature
---

# Implementation Plan: 음성 PII 자동 마스킹

> **✅ 완료** (2026-04-22, voice-api `158f161`)
> 193 tests passed, coverage pii_masker 93% / audio_pii_masker 85%.
> H1/H2 버그 + M1~M5 이슈 코드 리뷰로 발견·수정 완료.
> 다음 단계: dev 서버 통합 검증(실제 PII 샘플 업로드).

## Overview

voice-api의 텍스트 PII 마스킹을 오디오 레벨로 확장했다. WhisperX word-level
timestamps를 활용해 PII 발화 구간을 1kHz 비프로 치환한 WAV를 반환한다.
설계·결정 이력은 `uncounted-voice-api/docs/audio-pii-masking-plan.md` 참조.

## Requirements Restatement

- `pii_masker`가 char span (start/end)을 반환하도록 확장 (현재 카운트만)
- WhisperX `segments[].words[]`의 `start`/`end`를 이용해 PII→time range 매핑
- 매핑된 샘플 범위를 **1kHz sine + 10ms fade**로 치환 (결정 Q2 A)
- `transcribe()`에 `mask_audio_pii: bool = False` 플래그 추가 (opt-in)
- 이름 마스킹은 `mask_audio_names: bool = False` 별도 플래그 (결정 Q4 A)
- 버퍼 `PAD_SEC = 0.15s`, 환경변수 `PII_MASK_PAD_SEC`로 튜닝 (결정 Q5 B)
- 플래그 ON 시 `speaker_audio`/`utterance_audio`를 처음부터 마스킹된 상태로 생성 (결정 Q3 A)
- 응답에 `pii_summary[].time_ranges: [{start, end}]` 추가
- 청크 모드(>1h)에서도 동일 적용 (chunk-local 좌표계)
- dev 서버 검증 후 live 승격 (기본 플래그 off로 하위호환)

## Implementation Phases

### Phase 1: pii_masker 확장 — char span 반환 (2 files) ✅

1. **`detect_pii_spans()` 신규 함수 추가** (File: `uncounted-voice-api/app/pii_masker.py`, `mask_pii()` 함수 근처 — 현재 L216)
   - Action: `PII_PATTERNS`를 재사용해 `[{type, char_start, char_end, matched_text}]` 반환. 기존 `mask_pii()`는 내부에서 `detect_pii_spans()`를 호출 후 span 기반 치환으로 리팩터
   - Why: audio 마스킹은 char position이 필수. 기존 API는 byte-equivalent 유지
   - Dependencies: None
   - Risk: Low — 순수 함수, 기존 테스트 그대로 통과해야 함

2. **Unit tests for spans** (File: `uncounted-voice-api/tests/test_pii_spans.py` — 신규)
   - Action: 9개 PII 타입(주민/운전/여권/카드/이메일/전화/계좌/IP/이름)별 span 정확도 테스트. 기존 178개 pytest 통과 회귀 확인
   - Why: Phase 2의 전제 조건
   - Dependencies: 1
   - Risk: Low

### Phase 2: audio_pii_masker 모듈 신규 (2 files) ✅

3. **`audio_pii_masker.py` 신규** (File: `uncounted-voice-api/app/services/audio_pii_masker.py` — 신규)
   - Action: 두 함수 구현
     - `find_pii_word_ranges(segments, enable_name_masking=False, pad_sec=0.15) -> list[(start_sec, end_sec, pii_type)]` — `segment.text`의 char span을 `segment.words[].word`의 누적 char offset으로 매핑하여 걸치는 모든 word의 min start / max end 계산 후 pad 적용
     - `mask_audio_ranges(audio, ranges, sr, method="beep") -> np.ndarray` — sample range를 1kHz sine(진폭 0.1) + 10ms 선형 fade in/out으로 치환. 원본 ndarray 불변(copy)
   - Why: 핵심 변환 로직. `audio_splitter.py`와 분리하여 테스트 용이
   - Dependencies: 1
   - Risk: Medium — char→word 매핑은 공백/대소문자 처리에 엣지 케이스 있음

4. **Unit tests** (File: `uncounted-voice-api/tests/test_audio_pii_masker.py` — 신규)
   - Action: 합성 sine 오디오 + 가짜 segments로 (a) word range 매핑 정확도 (b) masked sample이 1kHz로 치환됐는지 FFT 검증 (c) fade 구간의 진폭 변화 선형성 검증
   - Why: 단위 정확도 확보 후 파이프라인 통합
   - Dependencies: 3
   - Risk: Low

### Phase 3: stt_processor 통합 — 일반 모드 (4 files) ✅

5. **`transcribe()` 시그니처 확장** (File: `uncounted-voice-api/app/stt_processor.py`, `transcribe()` — 현재 L547)
   - Action: `mask_audio_pii: bool = False`, `mask_audio_names: bool = False` 파라미터 추가. Line 644 `mask_segments()` 호출 직전에 `find_pii_word_ranges` 호출 후 `mask_audio_ranges`로 `audio` ndarray 치환. 이후 `mute_non_speaker`/`extract_utterance_audio`가 마스킹된 audio를 사용
   - Why: 마스킹이 speaker/utterance WAV에 자연히 반영되도록 흐름 앞단에 삽입
   - Dependencies: 3
   - Risk: Low — `audio.copy()`로 약 115MB(1h 16kHz mono) 일시 증가, 허용 범위

6. **Response schema 확장** (File: `uncounted-voice-api/app/models/schemas.py`)
   - Action: `PiiDetectedItem`에 `time_ranges: list[TimeRange]` optional 필드 추가. `TimeRange(start: float, end: float)` 모델 신규
   - Why: 감사 로그 및 클라이언트 확인용
   - Dependencies: 3
   - Risk: Low — optional 필드

7. **Router 파라미터 노출** (File: `uncounted-voice-api/app/routers/transcribe.py`)
   - Action: `/transcribe` 쿼리파라미터 `mask_audio_pii`, `mask_audio_names` 추가, `transcribe()`에 전달
   - Why: 클라이언트가 opt-in 가능
   - Dependencies: 5
   - Risk: Low

8. **Integration test — 일반 모드** (File: `uncounted-voice-api/tests/test_stt_processor_audio_pii.py` — 신규)
   - Action: 전화번호 음성 샘플 업로드 → 응답 WAV 재로드 → PII 구간 RMS가 비프 레퍼런스와 매칭되는지 검증. `mask_audio_pii=False`일 때 byte-equivalent 회귀 테스트
   - Why: end-to-end 정확도 + 하위호환 확인
   - Dependencies: 5, 6, 7
   - Risk: Medium — 테스트 샘플 준비 필요 (동기 녹음 or TTS)

### Phase 4: 청크 모드 지원 (2 files) ✅

9. **`_transcribe_chunked()` 내부 적용** (File: `uncounted-voice-api/app/stt_processor.py`, `_transcribe_chunked()` — 현재 L430)
   - Action: `emit_chunk_utterances(chunk_audio, ...)` 호출 이전에 chunk-local segments로 `find_pii_word_ranges` 실행 → `mask_audio_ranges`로 `chunk_audio` 치환. 이후 발화 WAV 생성이 마스킹된 chunk에서 수행
   - Why: 청크 모드의 OOM 제약 유지하면서 마스킹 적용
   - Dependencies: 3, 5
   - Risk: Medium — 청크 경계에 걸친 PII는 한쪽만 마스킹 (문서화 한계)

10. **Chunked mode integration test** (File: `uncounted-voice-api/tests/test_chunked_audio_pii.py` — 신규)
    - Action: >1h 합성 오디오 + 여러 청크에 PII 삽입 → 각 utterance WAV 마스킹 확인
    - Why: 청크 모드 정확도 검증
    - Dependencies: 9
    - Risk: Low

### Phase 5: 문서화 & 운영 (4 files) ✅

11. **API reference 업데이트** (File: `uncounted-voice-api/docs/api-reference.md`)
    - Action: `mask_audio_pii`, `mask_audio_names` 쿼리 파라미터 및 응답 `time_ranges` 필드 문서화. Known limitation(STT missed PII) 명시
    - Why: 클라이언트(앱/어드민) 팀이 사용
    - Dependencies: 7
    - Risk: Low

12. **환경변수 rule 업데이트** (File: `uncounted-voice-api/.claude/rules/python/config-and-pii.md`)
    - Action: `PII_MASK_PAD_SEC` (default 0.15) 테이블에 추가. PII Masking Details 섹션에 audio masking 동작 요약
    - Why: 운영자·다음 세션을 위한 참조
    - Dependencies: 3
    - Risk: Low

13. **CLAUDE.md 한 줄 갱신** (File: `uncounted-voice-api/CLAUDE.md`)
    - Action: "STT + 화자분리 + 발화분리 + PII 마스킹" → "STT + 화자분리 + 발화분리 + 텍스트/음성 PII 마스킹"
    - Why: 프로젝트 루트 레벨 요약 정합성
    - Dependencies: 11
    - Risk: Low

14. **config.py 환경변수 기본값 추가** (File: `uncounted-voice-api/app/config.py`)
    - Action: `PII_MASK_PAD_SEC: float = 0.15` 추가
    - Why: Phase 2의 `find_pii_word_ranges` 기본 파라미터 공급
    - Dependencies: 3
    - Risk: Low

## Dependencies (Cross-cutting)

- WhisperX word alignment 반드시 활성화 (현재 기본). 비활성 시 PII word range 매핑 불가 → 조용히 skip
- numpy (기존 의존성) — sine 파형 생성
- PII 정규식 9종 (기존 `PII_PATTERNS`)

## Risks

- **MEDIUM**: Char→word offset 매핑 엣지 케이스 (WhisperX word에 공백 포함/제외 차이). Phase 2 단위 테스트에서 다중 샘플 검증 필수
- **MEDIUM**: STT가 놓친 PII는 마스킹되지 않음 (known limitation). 문서 명시 + 사용자에게 "마스킹은 best-effort" 안내
- **LOW**: 청크 경계에 걸친 PII 부분 마스킹. 청크 overlap 없음 — 현재 아키텍처 유지
- **LOW**: `audio.copy()`로 VRAM/RAM +1x 일시 증가. 1h 16kHz mono는 약 115MB — 허용 범위

## Estimated Complexity: MEDIUM

- Phase 1: 반일 (span 확장 + 단위 테스트)
- Phase 2: 1일 (매핑 로직 + 1kHz 비프 + fade)
- Phase 3: 반일 (파이프라인 통합 + 스키마)
- Phase 4: 반일 (청크 모드)
- Phase 5: 반일 (문서화)
- **Total: ~3일** (1인, TDD 포함, end-to-end 검증 별도)

## Decision Record

설계 결정(Q1~Q5) 및 대안 비교는 `uncounted-voice-api/docs/audio-pii-masking-plan.md` 참조.
