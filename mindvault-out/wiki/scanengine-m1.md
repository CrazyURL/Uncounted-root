# scanEngine & M1
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **scanEngine** (uncounted-app/src/lib/scanEngine.ts) -- 2 connections
  - <- related_to <- [[m1]]
  - <- related_to <- [[m2]]
- **M1** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - -> related_to -> [[scanengine]]
- **M2** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - -> related_to -> [[scanengine]]

## Internal Relationships
- M1 -> related_to -> scanEngine [EXTRACTED]
- M2 -> related_to -> scanEngine [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 scanEngine, M1, M2를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 codex.md, scanEngine.ts이다.
