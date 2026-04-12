# WhisperX Model & Batch Size
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **WhisperX Model** (path) -- 2 connections
  - -> references -> [[huggingface-token]]
  - -> references -> [[batch-size]]
- **Batch Size** (path) -- 1 connections
  - <- references <- [[whisperx-model]]
- **HuggingFace Token** (path) -- 1 connections
  - <- references <- [[whisperx-model]]

## Internal Relationships
- WhisperX Model -> references -> HuggingFace Token [EXTRACTED]
- WhisperX Model -> references -> Batch Size [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 WhisperX Model, Batch Size, HuggingFace Token를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
