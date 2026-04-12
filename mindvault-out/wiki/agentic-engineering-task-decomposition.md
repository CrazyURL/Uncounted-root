# Agentic Engineering & Task Decomposition
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Agentic Engineering** (path) -- 7 connections
  - -> related_to -> [[eval-first-execution]]
  - -> related_to -> [[task-decomposition]]
  - -> related_to -> [[model-routing]]
  - -> related_to -> [[cost-discipline]]
  - -> related_to -> [[completion-criteria]]
  - -> related_to -> [[session-strategy]]
  - -> related_to -> [[ai-code-review]]
- **Task Decomposition** (path) -- 2 connections
  - -> explains -> [[15-minute-unit-rule]]
  - <- related_to <- [[agentic-engineering]]
- **15-Minute Unit Rule** (path) -- 1 connections
  - <- explains <- [[task-decomposition]]
- **AI Code Review** (path) -- 1 connections
  - <- related_to <- [[agentic-engineering]]
- **Completion Criteria** (path) -- 1 connections
  - <- related_to <- [[agentic-engineering]]
- **Cost Discipline** (path) -- 1 connections
  - <- related_to <- [[agentic-engineering]]
- **Eval-First Execution** (path) -- 1 connections
  - <- related_to <- [[agentic-engineering]]
- **Model Routing** (path) -- 1 connections
  - <- related_to <- [[agentic-engineering]]
- **Session Strategy** (path) -- 1 connections
  - <- related_to <- [[agentic-engineering]]

## Internal Relationships
- Agentic Engineering -> related_to -> Eval-First Execution [EXTRACTED]
- Agentic Engineering -> related_to -> Task Decomposition [EXTRACTED]
- Agentic Engineering -> related_to -> Model Routing [EXTRACTED]
- Agentic Engineering -> related_to -> Cost Discipline [EXTRACTED]
- Agentic Engineering -> related_to -> Completion Criteria [EXTRACTED]
- Agentic Engineering -> related_to -> Session Strategy [INFERRED]
- Agentic Engineering -> related_to -> AI Code Review [INFERRED]
- Task Decomposition -> explains -> 15-Minute Unit Rule [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agentic Engineering, Task Decomposition, 15-Minute Unit Rule를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
