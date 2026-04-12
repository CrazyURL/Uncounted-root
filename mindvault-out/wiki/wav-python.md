# 청크 모드에서 발화/화자 WAV 미생성 이슈 & python
Cohesion: 0.24 | Nodes: 10

## Key Nodes
- **청크 모드에서 발화/화자 WAV 미생성 이슈** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 8 connections
  - -> has_code_example -> [[json]]
  - -> contains -> [[1h]]
  - -> contains -> [[1h-sttprocessorpytranscribe]]
  - -> contains -> [[a]]
  - -> contains -> [[b-streaming]]
  - -> contains -> [[c-wav-wav]]
  - -> contains -> [[d-ffmpeg]]
  - -> contains -> [[e-duration]]
- **python** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 3 connections
  - <- has_code_example <- [[1h]]
  - <- has_code_example <- [[1h-sttprocessorpytranscribe]]
  - <- has_code_example <- [[a]]
- **일반 모드 (< 1h)** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[wav]]
- **청크 모드 (≥ 1h) — `stt_processor.py:transcribe()`** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[wav]]
- **옵션 A — 청크별 로컬 분리 (메모리 안전)** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[wav]]
- **json** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 1 connections
  - <- has_code_example <- [[wav]]
- **옵션 B — 처리 후 streaming 병합 (파일 기반)** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 1 connections
  - <- contains <- [[wav]]
- **옵션 C — 화자별 WAV만 서버 사이드에서 포기, 발화 WAV만 복원** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 1 connections
  - <- contains <- [[wav]]
- **옵션 D — 클라이언트 사이드에서 직접 ffmpeg로 잘라 쓰기** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 1 connections
  - <- contains <- [[wav]]
- **옵션 E — duration 제한 완화 (비권장)** (uncounted-docs/voice-api/청크모드_WAV_미생성_이슈.md) -- 1 connections
  - <- contains <- [[wav]]

## Internal Relationships
- 일반 모드 (< 1h) -> has_code_example -> python [EXTRACTED]
- 청크 모드 (≥ 1h) — `stt_processor.py:transcribe()` -> has_code_example -> python [EXTRACTED]
- 옵션 A — 청크별 로컬 분리 (메모리 안전) -> has_code_example -> python [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> has_code_example -> json [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> contains -> 일반 모드 (< 1h) [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> contains -> 청크 모드 (≥ 1h) — `stt_processor.py:transcribe()` [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> contains -> 옵션 A — 청크별 로컬 분리 (메모리 안전) [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> contains -> 옵션 B — 처리 후 streaming 병합 (파일 기반) [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> contains -> 옵션 C — 화자별 WAV만 서버 사이드에서 포기, 발화 WAV만 복원 [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> contains -> 옵션 D — 클라이언트 사이드에서 직접 ffmpeg로 잘라 쓰기 [EXTRACTED]
- 청크 모드에서 발화/화자 WAV 미생성 이슈 -> contains -> 옵션 E — duration 제한 완화 (비권장) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 청크 모드에서 발화/화자 WAV 미생성 이슈, python, 일반 모드 (< 1h)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 청크모드_WAV_미생성_이슈.md이다.
