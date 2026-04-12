# Auth Flow & 401 Error Handling
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **Auth Flow** (Architecture Patterns) -- 4 connections
  - -> related_to -> [[supabase]]
  - -> references -> [[tokens]]
  - -> related_to -> [[401-error-handling]]
  - <- related_to <- [[tokens]]
- **401 Error Handling** (Architecture Patterns) -- 2 connections
  - <- related_to <- [[auth-flow]]
  - <- references <- [[apifetch]]
- **apiFetch** (Architecture Patterns) -- 2 connections
  - -> implements -> [[encrypted-communication]]
  - -> references -> [[401-error-handling]]
- **Encrypted Communication** (Architecture Patterns) -- 2 connections
  - -> implements -> [[aes-256-gcm]]
  - <- implements <- [[apifetch]]
- **Tokens** (Architecture Patterns) -- 2 connections
  - -> related_to -> [[auth-flow]]
  - <- references <- [[auth-flow]]
- **AES-256-GCM** (Architecture Patterns) -- 1 connections
  - <- implements <- [[encrypted-communication]]
- **Supabase** (Architecture Patterns) -- 1 connections
  - <- related_to <- [[auth-flow]]

## Internal Relationships
- apiFetch -> implements -> Encrypted Communication [EXTRACTED]
- apiFetch -> references -> 401 Error Handling [EXTRACTED]
- Auth Flow -> related_to -> Supabase [EXTRACTED]
- Auth Flow -> references -> Tokens [EXTRACTED]
- Auth Flow -> related_to -> 401 Error Handling [EXTRACTED]
- Encrypted Communication -> implements -> AES-256-GCM [EXTRACTED]
- Tokens -> related_to -> Auth Flow [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Auth Flow, 401 Error Handling, apiFetch를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 Architecture Patterns이다.
