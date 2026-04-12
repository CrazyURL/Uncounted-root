# Feature Team & admin.ts 파일
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Feature Team** (Orchestration Consultation Synthesis) -- 4 connections
  - -> related_to -> [[agent-1]]
  - -> related_to -> [[agent-2]]
  - -> related_to -> [[agent-3]]
  - <- references <- [[admints]]
- **admin.ts 파일** (Orchestration Consultation Synthesis) -- 1 connections
  - -> references -> [[feature-team]]
- **Agent 1** (Orchestration Consultation Synthesis) -- 1 connections
  - <- related_to <- [[feature-team]]
- **Agent 2** (Orchestration Consultation Synthesis) -- 1 connections
  - <- related_to <- [[feature-team]]
- **Agent 3** (Orchestration Consultation Synthesis) -- 1 connections
  - <- related_to <- [[feature-team]]

## Internal Relationships
- admin.ts 파일 -> references -> Feature Team [EXTRACTED]
- Feature Team -> related_to -> Agent 1 [EXTRACTED]
- Feature Team -> related_to -> Agent 2 [EXTRACTED]
- Feature Team -> related_to -> Agent 3 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Feature Team, admin.ts 파일, Agent 1를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 Orchestration Consultation Synthesis이다.
