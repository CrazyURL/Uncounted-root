# 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote & 2026-04-12 — utterance_segmenter Case C 과병합 버그 (수정 완료)
Cohesion: 0.18 | Nodes: 12

## Key Nodes
- **화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 6 connections
  - -> contains -> [[2026-04-12-round-1]]
  - -> contains -> [[a-pyannote-vad]]
  - -> contains -> [[b-korean-specific-post-processing]]
  - -> contains -> [[c-2-pass-diarization-with-embedding-similarity]]
  - -> contains -> [[d-voice-enrollment-speaker-id]]
  - -> contains -> [[2026-04-12-utterancesegmenter-case-c]]
- **2026-04-12 — utterance_segmenter Case C 과병합 버그 (수정 완료)** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 4 connections
  - -> contains -> [[utterancesegmenterpymergeshortutterances-case-c]]
  - -> contains -> [[88]]
  - -> contains -> [[pyannote]]
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **python** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 2 connections
  - <- has_code_example <- [[utterancesegmenterpymergeshortutterances-case-c]]
  - <- has_code_example <- [[88]]
- **2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 2 connections
  - -> contains -> [[gain]]
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **실증 분석 (88 토큰 샘플)** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[2026-04-12-utterancesegmenter-case-c]]
- **근본 원인 — `utterance_segmenter.py:_merge_short_utterances` Case C** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[2026-04-12-utterancesegmenter-case-c]]
- **옵션 A — pyannote VAD / 세그멘테이션 파라미터 튜닝** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **옵션 B — Korean-specific post-processing** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **옵션 C — 2-pass diarization with embedding similarity** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **옵션 D — 화자 등록(Voice Enrollment) 기반 Speaker ID** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[speaker-diarization-whisperx-pyannote]]
- **gain 정규화 무관함 (기록용)** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[2026-04-12-round-1]]
- **pyannote 경계 오류와의 관계** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_개선_히스토리.md) -- 1 connections
  - <- contains <- [[2026-04-12-utterancesegmenter-case-c]]

## Internal Relationships
- 2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류 -> contains -> gain 정규화 무관함 (기록용) [EXTRACTED]
- 2026-04-12 — utterance_segmenter Case C 과병합 버그 (수정 완료) -> contains -> 근본 원인 — `utterance_segmenter.py:_merge_short_utterances` Case C [EXTRACTED]
- 2026-04-12 — utterance_segmenter Case C 과병합 버그 (수정 완료) -> contains -> 실증 분석 (88 토큰 샘플) [EXTRACTED]
- 2026-04-12 — utterance_segmenter Case C 과병합 버그 (수정 완료) -> contains -> pyannote 경계 오류와의 관계 [EXTRACTED]
- 실증 분석 (88 토큰 샘플) -> has_code_example -> python [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 2026-04-12 — 전처리 재적용 Round 1 검증 중 발견된 경계 오류 [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 A — pyannote VAD / 세그멘테이션 파라미터 튜닝 [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 B — Korean-specific post-processing [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 C — 2-pass diarization with embedding similarity [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 옵션 D — 화자 등록(Voice Enrollment) 기반 Speaker ID [EXTRACTED]
- 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote -> contains -> 2026-04-12 — utterance_segmenter Case C 과병합 버그 (수정 완료) [EXTRACTED]
- 근본 원인 — `utterance_segmenter.py:_merge_short_utterances` Case C -> has_code_example -> python [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 화자분리 (Speaker Diarization) 개선 히스토리 — 서버 사이드 WhisperX + pyannote, 2026-04-12 — utterance_segmenter Case C 과병합 버그 (수정 완료), python를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 화자분리_개선_히스토리.md이다.
