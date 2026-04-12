# Dependency Analysis & Risk Assessment
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Dependency Analysis** (gemini.md) -- 3 connections
  - -> related_to -> [[team-composition-recommendation]]
  - -> related_to -> [[wave-execution-plan]]
  - <- related_to <- [[task-decomposition]]
- **Risk Assessment** (gemini.md) -- 3 connections
  - -> references -> [[alternative-strategies]]
  - -> related_to -> [[confidence-level]]
  - <- related_to <- [[wave-execution-plan]]
- **Task Decomposition** (gemini.md) -- 2 connections
  - -> related_to -> [[dependency-analysis]]
  - <- references <- [[implementation-plan]]
- **Wave Execution Plan** (gemini.md) -- 2 connections
  - -> related_to -> [[risk-assessment]]
  - <- related_to <- [[dependency-analysis]]
- **Alternative Strategies** (gemini.md) -- 1 connections
  - <- references <- [[risk-assessment]]
- **Confidence Level** (gemini.md) -- 1 connections
  - <- related_to <- [[risk-assessment]]
- **Implementation Plan** (prompt_plan.md) -- 1 connections
  - -> references -> [[task-decomposition]]
- **Team Composition Recommendation** (gemini.md) -- 1 connections
  - <- related_to <- [[dependency-analysis]]

## Internal Relationships
- Dependency Analysis -> related_to -> Team Composition Recommendation [EXTRACTED]
- Dependency Analysis -> related_to -> Wave Execution Plan [EXTRACTED]
- Implementation Plan -> references -> Task Decomposition [EXTRACTED]
- Risk Assessment -> references -> Alternative Strategies [EXTRACTED]
- Risk Assessment -> related_to -> Confidence Level [EXTRACTED]
- Task Decomposition -> related_to -> Dependency Analysis [EXTRACTED]
- Wave Execution Plan -> related_to -> Risk Assessment [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Dependency Analysis, Risk Assessment, Task Decomposition를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 gemini.md, prompt_plan.md이다.
