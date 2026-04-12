# Auth & Sessions
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Auth** (path) -- 3 connections
  - -> related_to -> [[sessions]]
  - <- related_to <- [[health]]
  - <- related_to <- [[user]]
- **Sessions** (path) -- 3 connections
  - -> related_to -> [[storage]]
  - <- related_to <- [[auth]]
  - <- related_to <- [[transcripts]]
- **Admin** (path) -- 2 connections
  - -> related_to -> [[transcripts]]
  - <- related_to <- [[export]]
- **Storage** (path) -- 2 connections
  - <- related_to <- [[sessions]]
  - <- related_to <- [[upload]]
- **Transcripts** (path) -- 2 connections
  - -> related_to -> [[sessions]]
  - <- related_to <- [[admin]]
- **Export** (path) -- 1 connections
  - -> related_to -> [[admin]]
- **Health** (path) -- 1 connections
  - -> related_to -> [[auth]]
- **Upload** (path) -- 1 connections
  - -> related_to -> [[storage]]
- **User** (path) -- 1 connections
  - -> related_to -> [[auth]]

## Internal Relationships
- Admin -> related_to -> Transcripts [INFERRED]
- Auth -> related_to -> Sessions [INFERRED]
- Export -> related_to -> Admin [INFERRED]
- Health -> related_to -> Auth [INFERRED]
- Sessions -> related_to -> Storage [INFERRED]
- Transcripts -> related_to -> Sessions [INFERRED]
- Upload -> related_to -> Storage [INFERRED]
- User -> related_to -> Auth [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Auth, Sessions, Admin를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
