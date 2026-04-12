# JWT Authentication & Hono Framework
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **JWT Authentication** (path) -- 3 connections
  - <- implements <- [[supabase-api]]
  - <- requires <- [[session-api]]
  - <- requires <- [[user-api]]
- **Hono Framework** (path) -- 2 connections
  - -> integrates_with -> [[supabase-api]]
  - <- generates <- [[openapi-30-specification]]
- **Session API** (path) -- 2 connections
  - -> requires -> [[jwt-authentication]]
  - <- related_to <- [[transcripts-api]]
- **Supabase API** (path) -- 2 connections
  - -> implements -> [[jwt-authentication]]
  - <- integrates_with <- [[hono-framework]]
- **User API** (path) -- 2 connections
  - -> requires -> [[jwt-authentication]]
  - <- related_to <- [[admin-api]]
- **Admin API** (path) -- 1 connections
  - -> related_to -> [[user-api]]
- **OpenAPI 3.0 Specification** (path) -- 1 connections
  - -> generates -> [[hono-framework]]
- **Transcripts API** (path) -- 1 connections
  - -> related_to -> [[session-api]]

## Internal Relationships
- Admin API -> related_to -> User API [INFERRED]
- Hono Framework -> integrates_with -> Supabase API [EXTRACTED]
- OpenAPI 3.0 Specification -> generates -> Hono Framework [EXTRACTED]
- Session API -> requires -> JWT Authentication [EXTRACTED]
- Supabase API -> implements -> JWT Authentication [EXTRACTED]
- Transcripts API -> related_to -> Session API [INFERRED]
- User API -> requires -> JWT Authentication [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 JWT Authentication, Hono Framework, Session API를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
