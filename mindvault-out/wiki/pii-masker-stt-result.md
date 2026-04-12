# Pii Masker & STT Result
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Pii Masker** (path) -- 3 connections
  - -> references -> [[audio-pii-interval]]
  - <- references <- [[stt-result]]
  - <- references <- [[scantranscriptpii]]
- **STT Result** (path) -- 3 connections
  - -> references -> [[pii-masker]]
  - <- implements <- [[sttprocessingservice]]
  - <- related_to <- [[boundary-merging]]
- **Audio PII Interval** (path) -- 1 connections
  - <- references <- [[pii-masker]]
- **Boundary Merging** (path) -- 1 connections
  - -> related_to -> [[stt-result]]
- **scanTranscriptPii** (path) -- 1 connections
  - -> references -> [[pii-masker]]
- **SttProcessingService** (path) -- 1 connections
  - -> implements -> [[stt-result]]

## Internal Relationships
- Boundary Merging -> related_to -> STT Result [INFERRED]
- Pii Masker -> references -> Audio PII Interval [EXTRACTED]
- scanTranscriptPii -> references -> Pii Masker [EXTRACTED]
- STT Result -> references -> Pii Masker [EXTRACTED]
- SttProcessingService -> implements -> STT Result [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Pii Masker, STT Result, Audio PII Interval를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
