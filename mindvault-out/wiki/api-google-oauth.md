# API 서버 & Google OAuth
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **API 서버** (path) -- 2 connections
  - -> related_to -> [[supabase-sdk]]
  - <- references <- [[google-oauth]]
- **Google OAuth** (path) -- 1 connections
  - -> references -> [[api]]
- **Supabase SDK** (path) -- 1 connections
  - <- related_to <- [[api]]

## Internal Relationships
- API 서버 -> related_to -> Supabase SDK [INFERRED]
- Google OAuth -> references -> API 서버 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 API 서버, Google OAuth, Supabase SDK를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
