# Claude Pipelines & Autonomous Loops Skill
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Claude Pipelines** (path) -- 7 connections
  - -> related_to -> [[sequential-pipeline]]
  - -> related_to -> [[nanoclaw-repl]]
  - -> related_to -> [[infinite-agentic-loop]]
  - -> related_to -> [[continuous-claude-pr-loop]]
  - -> related_to -> [[de-sloppify-pattern]]
  - -> related_to -> [[rfc-driven-dag-orchestration]]
  - <- implements <- [[autonomous-loops-skill]]
- **Autonomous Loops Skill** (path) -- 2 connections
  - -> references -> [[continuous-agent-loop]]
  - -> implements -> [[claude-pipelines]]
- **Continuous Agent Loop** (path) -- 1 connections
  - <- references <- [[autonomous-loops-skill]]
- **Continuous Claude PR Loop** (path) -- 1 connections
  - <- related_to <- [[claude-pipelines]]
- **De-Sloppify Pattern** (path) -- 1 connections
  - <- related_to <- [[claude-pipelines]]
- **Infinite Agentic Loop** (path) -- 1 connections
  - <- related_to <- [[claude-pipelines]]
- **NanoClaw REPL** (path) -- 1 connections
  - <- related_to <- [[claude-pipelines]]
- **RFC-Driven DAG Orchestration** (path) -- 1 connections
  - <- related_to <- [[claude-pipelines]]
- **Sequential Pipeline** (path) -- 1 connections
  - <- related_to <- [[claude-pipelines]]

## Internal Relationships
- Autonomous Loops Skill -> references -> Continuous Agent Loop [EXTRACTED]
- Autonomous Loops Skill -> implements -> Claude Pipelines [EXTRACTED]
- Claude Pipelines -> related_to -> Sequential Pipeline [INFERRED]
- Claude Pipelines -> related_to -> NanoClaw REPL [INFERRED]
- Claude Pipelines -> related_to -> Infinite Agentic Loop [INFERRED]
- Claude Pipelines -> related_to -> Continuous Claude PR Loop [INFERRED]
- Claude Pipelines -> related_to -> De-Sloppify Pattern [INFERRED]
- Claude Pipelines -> related_to -> RFC-Driven DAG Orchestration [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Claude Pipelines, Autonomous Loops Skill, Continuous Agent Loop를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
