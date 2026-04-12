# 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote & 2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote** (uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 5 connections
  - -> contains -> [[2026-04-12-round-1]]
  - -> contains -> [[a-pyannote-vad]]
  - -> contains -> [[b-korean-specific-post-processing]]
  - -> contains -> [[c-2-pass-diarization-with-embedding-similarity]]
  - -> contains -> [[d-voice-enrollment-speaker-id]]
- **2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류** (uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 2 connections
  - -> contains -> [[gain]]
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **옵션 A — pyannote VAD / 세그멘테이션 파라미터 튜닝** (uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **옵션 B — Korean-specific post-processing** (uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **옵션 C — 2-pass diarization with embedding similarity** (uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **옵션 D — 화자 등록(Voice Enrollment) 기반 Speaker ID** (uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **gain 정규화 무관함 (기록용)** (uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[2026-04-12-round-1]]

## Internal Relationships
- 2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류 -> contains -> gain 정규화 무관함 (기록용) [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류 [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 A — pyannote VAD / 세그멘테이션 파라미터 튜닝 [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 B — Korean-specific post-processing [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 C — 2-pass diarization with embedding similarity [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 D — 화자 등록(Voice Enrollment) 기반 Speaker ID [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote, 2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류, 옵션 A — pyannote VAD / 세그멘테이션 파라미터 튜닝를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 화자분리_개선_히스토리.md이다.
