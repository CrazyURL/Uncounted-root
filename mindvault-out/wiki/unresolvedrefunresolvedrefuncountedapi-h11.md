# __unresolved__::ref::__unresolved____ref__uncounted_api & H11
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **__unresolved__::ref::__unresolved____ref__uncounted_api** () -- 2 connections
  - <- related_to <- [[api-routes-db-queries-migrations]]
  - <- requires <- [[h11]]
- **H11** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 2 connections
  - -> requires -> [[unresolvedrefunresolvedrefuncountedapi]]
  - -> exists_in -> [[different-repository]]
- **Different repository** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- exists_in <- [[h11]]
- **API routes, DB queries, migrations** (uncounted-api/) -- 1 connections
  - -> related_to -> [[unresolvedrefunresolvedrefuncountedapi]]

## Internal Relationships
- H11 -> requires -> __unresolved__::ref::__unresolved____ref__uncounted_api [EXTRACTED]
- H11 -> exists_in -> Different repository [EXTRACTED]
- API routes, DB queries, migrations -> related_to -> __unresolved__::ref::__unresolved____ref__uncounted_api [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref__uncounted_api, H11, Different repository를 중심으로 requires 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md, uncounted-api이다.
