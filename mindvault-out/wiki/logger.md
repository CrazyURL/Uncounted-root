# Logger & 핸들러
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Logger** (src/lib/logging) -- 2 connections
  - -> related_to -> [[]]
  - <- related_to <- [[cors]]
- **핸들러** (src/lib/handler) -- 1 connections
  - <- related_to <- [[logger]]
- **CORS** (src/lib/security) -- 1 connections
  - -> related_to -> [[logger]]

## Internal Relationships
- CORS -> related_to -> Logger [EXTRACTED]
- Logger -> related_to -> 핸들러 [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Logger, 핸들러, CORS를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 handler, logging, security이다.
