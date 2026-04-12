# Export API & DB Migration
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Export API** (path) -- 2 connections
  - -> related_to -> [[db-migration]]
  - <- related_to <- [[sessionapiclient]]
- **DB Migration** (path) -- 1 connections
  - <- related_to <- [[export-api]]
- **SessionApiClient** (path) -- 1 connections
  - -> related_to -> [[export-api]]

## Internal Relationships
- Export API -> related_to -> DB Migration [EXTRACTED]
- SessionApiClient -> related_to -> Export API [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Export API, DB Migration, SessionApiClient를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
