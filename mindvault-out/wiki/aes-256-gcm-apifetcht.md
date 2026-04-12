# AES-256-GCM & apiFetch<T>
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **AES-256-GCM** (path) -- 2 connections
  - -> implemented_in -> [[libcryptots]]
  - <- uses <- [[apifetcht]]
- **apiFetch<T>** (path) -- 1 connections
  - -> uses -> [[aes-256-gcm]]
- **lib/crypto.ts** (path) -- 1 connections
  - <- implemented_in <- [[aes-256-gcm]]

## Internal Relationships
- AES-256-GCM -> implemented_in -> lib/crypto.ts [EXTRACTED]
- apiFetch<T> -> uses -> AES-256-GCM [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 AES-256-GCM, apiFetch<T>, lib/crypto.ts를 중심으로 implemented_in 관계로 연결되어 있다. 주요 소스 파일은 path이다.
