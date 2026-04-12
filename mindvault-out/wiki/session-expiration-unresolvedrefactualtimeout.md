# Session Expiration & __unresolved__::ref::actual_timeout
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Session Expiration** (path) -- 2 connections
  - -> related_to -> [[unresolvedrefalreadyused]]
  - -> related_to -> [[unresolvedrefactualtimeout]]
- **__unresolved__::ref::actual_timeout** () -- 1 connections
  - <- related_to <- [[session-expiration]]
- **__unresolved__::ref::already_used** () -- 1 connections
  - <- related_to <- [[session-expiration]]

## Internal Relationships
- Session Expiration -> related_to -> __unresolved__::ref::already_used [EXTRACTED]
- Session Expiration -> related_to -> __unresolved__::ref::actual_timeout [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Session Expiration, __unresolved__::ref::actual_timeout, __unresolved__::ref::already_used를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
