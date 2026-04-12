# Rating Criteria Inconsistency & Agent 3 Role
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Rating Criteria Inconsistency** (path) -- 3 connections
  - -> references -> [[codex-model]]
  - -> references -> [[gemini-model]]
  - <- implements <- [[agent-3-role]]
- **Agent 3 Role** (path) -- 1 connections
  - -> implements -> [[rating-criteria-inconsistency]]
- **Codex Model** (path) -- 1 connections
  - <- references <- [[rating-criteria-inconsistency]]
- **Gemini Model** (path) -- 1 connections
  - <- references <- [[rating-criteria-inconsistency]]

## Internal Relationships
- Agent 3 Role -> implements -> Rating Criteria Inconsistency [EXTRACTED]
- Rating Criteria Inconsistency -> references -> Codex Model [EXTRACTED]
- Rating Criteria Inconsistency -> references -> Gemini Model [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Rating Criteria Inconsistency, Agent 3 Role, Codex Model를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
