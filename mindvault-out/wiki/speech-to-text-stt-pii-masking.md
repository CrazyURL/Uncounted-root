# Speech to Text (STT) & PII Masking
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Speech to Text (STT)** (Voice API Reference) -- 2 connections
  - -> utilizes -> [[speaker-diarization]]
  - -> utilizes -> [[pii-masking]]
- **PII Masking** (Voice API Reference) -- 1 connections
  - <- utilizes <- [[speech-to-text-stt]]
- **Speaker Diarization** (Voice API Reference) -- 1 connections
  - <- utilizes <- [[speech-to-text-stt]]

## Internal Relationships
- Speech to Text (STT) -> utilizes -> Speaker Diarization [EXTRACTED]
- Speech to Text (STT) -> utilizes -> PII Masking [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Speech to Text (STT), PII Masking, Speaker Diarization를 중심으로 utilizes 관계로 연결되어 있다. 주요 소스 파일은 Voice API Reference이다.
