# Pipeline State & Embedding Engine
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Pipeline State** (src/lib/pipelineState.ts) -- 2 connections
  - -> implements -> [[stt-engine]]
  - <- related_to <- [[embedding-engine]]
- **Embedding Engine** (src/lib/embeddingEngine.ts) -- 1 connections
  - -> related_to -> [[pipeline-state]]
- **STT Engine** (src/lib/sttEngine.ts) -- 1 connections
  - <- implements <- [[pipeline-state]]

## Internal Relationships
- Embedding Engine -> related_to -> Pipeline State [INFERRED]
- Pipeline State -> implements -> STT Engine [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Pipeline State, Embedding Engine, STT Engine를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 embeddingEngine.ts, pipelineState.ts, sttEngine.ts이다.
