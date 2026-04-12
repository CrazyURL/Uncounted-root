# Critical Refresh Token Race Condition Bug & Serialize Refresh Requests
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Critical Refresh Token Race Condition Bug** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 2 connections
  - -> causes -> [[mobile-app]]
  - -> requires_fix -> [[serialize-refresh-requests]]
- **Serialize Refresh Requests** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 2 connections
  - -> implemented_as -> [[promise-based-queue]]
  - <- requires_fix <- [[critical-refresh-token-race-condition-bug]]
- **Mobile App** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - <- causes <- [[critical-refresh-token-race-condition-bug]]
- **Promise-based Queue** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - <- implemented_as <- [[serialize-refresh-requests]]

## Internal Relationships
- Critical Refresh Token Race Condition Bug -> causes -> Mobile App [EXTRACTED]
- Critical Refresh Token Race Condition Bug -> requires_fix -> Serialize Refresh Requests [INFERRED]
- Serialize Refresh Requests -> implemented_as -> Promise-based Queue [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Critical Refresh Token Race Condition Bug, Serialize Refresh Requests, Mobile App를 중심으로 causes 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
