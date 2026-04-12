# JWT 토큰 인증 & 인증 API
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **JWT 토큰 인증** (path) -- 2 connections
  - <- requires <- [[api]]
  - <- requires <- [[storage-api]]
- **인증 API** (path) -- 1 connections
  - -> requires -> [[jwt]]
- **Storage API** (path) -- 1 connections
  - -> requires -> [[jwt]]

## Internal Relationships
- 인증 API -> requires -> JWT 토큰 인증 [EXTRACTED]
- Storage API -> requires -> JWT 토큰 인증 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 JWT 토큰 인증, 인증 API, Storage API를 중심으로 requires 관계로 연결되어 있다. 주요 소스 파일은 path이다.
