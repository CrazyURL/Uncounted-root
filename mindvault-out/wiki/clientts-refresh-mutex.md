# client.ts & Refresh Mutex
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **client.ts** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 2 connections
  - -> lacks -> [[refresh-mutex]]
  - <- may_have_same_pattern_as <- [[uncounted-admin]]
- **Refresh Mutex** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - <- lacks <- [[clientts]]
- **Uncounted-admin** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - -> may_have_same_pattern_as -> [[clientts]]

## Internal Relationships
- client.ts -> lacks -> Refresh Mutex [EXTRACTED]
- Uncounted-admin -> may_have_same_pattern_as -> client.ts [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 client.ts, Refresh Mutex, Uncounted-admin를 중심으로 lacks 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
