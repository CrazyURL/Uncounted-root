# Refresh Request Hang & __unresolved__::ref::__unresolved____ref__mutex_deadlock
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Refresh Request Hang** (path) -- 2 connections
  - -> causes -> [[unresolvedrefunresolvedrefmutexdeadlock]]
  - -> causes -> [[unresolvedrefunresolvedreftimeout]]
- **__unresolved__::ref::__unresolved____ref__mutex_deadlock** () -- 1 connections
  - <- causes <- [[refresh-request-hang]]
- **__unresolved__::ref::__unresolved____ref__timeout** () -- 1 connections
  - <- causes <- [[refresh-request-hang]]

## Internal Relationships
- Refresh Request Hang -> causes -> __unresolved__::ref::__unresolved____ref__mutex_deadlock [INFERRED]
- Refresh Request Hang -> causes -> __unresolved__::ref::__unresolved____ref__timeout [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Refresh Request Hang, __unresolved__::ref::__unresolved____ref__mutex_deadlock, __unresolved__::ref::__unresolved____ref__timeout를 중심으로 causes 관계로 연결되어 있다. 주요 소스 파일은 path이다.
