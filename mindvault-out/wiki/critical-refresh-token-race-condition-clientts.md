# CRITICAL refresh token race condition & client.ts
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **CRITICAL refresh token race condition** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 3 connections
  - -> causes -> [[mobile-app]]
  - <- contributes_to <- [[clientts]]
  - <- addresses <- [[serialize-refresh-requests]]
- **client.ts** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 2 connections
  - -> contributes_to -> [[critical-refresh-token-race-condition]]
  - <- may_have_same_pattern_as <- [[uncounted-admin]]
- **Mobile App** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - <- causes <- [[critical-refresh-token-race-condition]]
- **Serialize Refresh Requests** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - -> addresses -> [[critical-refresh-token-race-condition]]
- **uncounted-admin** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - -> may_have_same_pattern_as -> [[clientts]]

## Internal Relationships
- client.ts -> contributes_to -> CRITICAL refresh token race condition [EXTRACTED]
- CRITICAL refresh token race condition -> causes -> Mobile App [EXTRACTED]
- Serialize Refresh Requests -> addresses -> CRITICAL refresh token race condition [EXTRACTED]
- uncounted-admin -> may_have_same_pattern_as -> client.ts [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 CRITICAL refresh token race condition, client.ts, Mobile App를 중심으로 contributes_to 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
