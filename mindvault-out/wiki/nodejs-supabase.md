# Node.js & Supabase
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Node.js** (document) -- 3 connections
  - <- implements <- [[hono]]
  - <- uses <- [[supabase]]
  - <- uses <- [[iwinv-s3-storage]]
- **Supabase** (document) -- 3 connections
  - -> uses -> [[nodejs]]
  - <- configuration_for <- [[supabaseurl]]
  - <- references <- [[rules]]
- **Hono** (document) -- 1 connections
  - -> implements -> [[nodejs]]
- **iwinv S3 Storage** (document) -- 1 connections
  - -> uses -> [[nodejs]]
- **Rules** (document) -- 1 connections
  - -> references -> [[supabase]]
- **SUPABASE_URL** (document) -- 1 connections
  - -> configuration_for -> [[supabase]]

## Internal Relationships
- Hono -> implements -> Node.js [EXTRACTED]
- iwinv S3 Storage -> uses -> Node.js [EXTRACTED]
- Rules -> references -> Supabase [EXTRACTED]
- Supabase -> uses -> Node.js [EXTRACTED]
- SUPABASE_URL -> configuration_for -> Supabase [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Node.js, Supabase, Hono를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 document이다.
