# /api/auth/refresh & SIGNED_OUT 이벤트
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **/api/auth/refresh** (path) -- 1 connections
  - -> triggers -> [[signedout]]
- **SIGNED_OUT 이벤트** (path) -- 1 connections
  - <- triggers <- [[apiauthrefresh]]

## Internal Relationships
- /api/auth/refresh -> triggers -> SIGNED_OUT 이벤트 [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 /api/auth/refresh, SIGNED_OUT 이벤트를 중심으로 triggers 관계로 연결되어 있다. 주요 소스 파일은 path이다.
