# Migration Plan & Absolute URL Check
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Migration Plan** (path) -- 4 connections
  - -> related_to -> [[sessions-table]]
  - -> related_to -> [[session-chunks-table]]
  - -> related_to -> [[absolute-url-check]]
  - -> related_to -> [[dry-run-process]]
- **Absolute URL Check** (path) -- 1 connections
  - <- related_to <- [[migration-plan]]
- **Dry Run Process** (path) -- 1 connections
  - <- related_to <- [[migration-plan]]
- **Session Chunks Table** (path) -- 1 connections
  - <- related_to <- [[migration-plan]]
- **Sessions Table** (path) -- 1 connections
  - <- related_to <- [[migration-plan]]

## Internal Relationships
- Migration Plan -> related_to -> Sessions Table [EXTRACTED]
- Migration Plan -> related_to -> Session Chunks Table [EXTRACTED]
- Migration Plan -> related_to -> Absolute URL Check [EXTRACTED]
- Migration Plan -> related_to -> Dry Run Process [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Migration Plan, Absolute URL Check, Dry Run Process를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
