# whisperx_service & __unresolved__::ref::stt_processor
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **whisperx_service** (/Users/gdash/project/uncounted-project/uncounted-voice-api/app/services/whisperx_service.py) -- 3 connections
  - -> contains -> [[whisperxservice]]
  - -> imports -> [[unresolvedrefapp]]
  - -> imports -> [[unresolvedrefsttprocessor]]
- **__unresolved__::ref::stt_processor** () -- 1 connections
  - <- imports <- [[whisperxservice]]
- **WhisperXService** (/Users/gdash/project/uncounted-project/uncounted-voice-api/app/services/whisperx_service.py) -- 1 connections
  - <- contains <- [[whisperxservice]]

## Internal Relationships
- whisperx_service -> contains -> WhisperXService [EXTRACTED]
- whisperx_service -> imports -> __unresolved__::ref::stt_processor [EXTRACTED]

## Cross-Community Connections
- whisperx_service -> imports -> __unresolved__::ref::app (-> [[unresolvedrefpush-testparseinstinct]])

## Context
이 커뮤니티는 whisperx_service, __unresolved__::ref::stt_processor, WhisperXService를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 whisperx_service.py이다.
