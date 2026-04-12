# Agent Orchestration & Parallel Task Execution
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Agent Orchestration** (.claude/rules/common/agents.md) -- 6 connections
  - -> contains -> [[available-agents]]
  - -> contains -> [[immediate-agent-usage]]
  - -> contains -> [[parallel-task-execution]]
  - -> contains -> [[multi-perspective-analysis]]
  - -> contains -> [[project-agent-ownership]]
  - -> contains -> [[cross-project-rules]]
- **Parallel Task Execution** (.claude/rules/common/agents.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[agent-orchestration]]
- **markdown** (.claude/rules/common/agents.md) -- 1 connections
  - <- has_code_example <- [[parallel-task-execution]]
- **Available Agents** (.claude/rules/common/agents.md) -- 1 connections
  - <- contains <- [[agent-orchestration]]
- **Cross-Project Rules** (.claude/rules/common/agents.md) -- 1 connections
  - <- contains <- [[agent-orchestration]]
- **Immediate Agent Usage** (.claude/rules/common/agents.md) -- 1 connections
  - <- contains <- [[agent-orchestration]]
- **Multi-Perspective Analysis** (.claude/rules/common/agents.md) -- 1 connections
  - <- contains <- [[agent-orchestration]]
- **Project Agent Ownership** (.claude/rules/common/agents.md) -- 1 connections
  - <- contains <- [[agent-orchestration]]

## Internal Relationships
- Agent Orchestration -> contains -> Available Agents [EXTRACTED]
- Agent Orchestration -> contains -> Immediate Agent Usage [EXTRACTED]
- Agent Orchestration -> contains -> Parallel Task Execution [EXTRACTED]
- Agent Orchestration -> contains -> Multi-Perspective Analysis [EXTRACTED]
- Agent Orchestration -> contains -> Project Agent Ownership [EXTRACTED]
- Agent Orchestration -> contains -> Cross-Project Rules [EXTRACTED]
- Parallel Task Execution -> has_code_example -> markdown [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent Orchestration, Parallel Task Execution, markdown를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 agents.md이다.
