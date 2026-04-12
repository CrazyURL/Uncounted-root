# sttEngine.ts & Polling Strategy
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **sttEngine.ts** (path) -- 2 connections
  - <- related_to <- [[wave-1]]
  - <- related_to <- [[polling-strategy]]
- **Polling Strategy** (path) -- 1 connections
  - -> related_to -> [[sttenginets]]
- **Wave 1** (path) -- 1 connections
  - -> related_to -> [[sttenginets]]

## Internal Relationships
- Polling Strategy -> related_to -> sttEngine.ts [INFERRED]
- Wave 1 -> related_to -> sttEngine.ts [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 sttEngine.ts, Polling Strategy, Wave 1를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
