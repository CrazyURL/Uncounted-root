# Bugfix Strategy & Alternative Strategies
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Bugfix Strategy** (.orchestrate-consult/20260330-174936/gemini.md) -- 8 connections
  - -> includes -> [[task-decomposition]]
  - -> includes -> [[dependency-analysis]]
  - -> includes -> [[team-composition-recommendation]]
  - -> includes -> [[wave-execution-plan]]
  - -> includes -> [[risk-assessment]]
  - -> includes -> [[alternative-strategies]]
  - -> includes -> [[confidence-level]]
  - <- references <- [[implementation-plan]]
- **Alternative Strategies** (.orchestrate-consult/20260330-174936/gemini.md) -- 1 connections
  - <- includes <- [[bugfix-strategy]]
- **Confidence Level** (.orchestrate-consult/20260330-174936/gemini.md) -- 1 connections
  - <- includes <- [[bugfix-strategy]]
- **Dependency Analysis** (.orchestrate-consult/20260330-174936/gemini.md) -- 1 connections
  - <- includes <- [[bugfix-strategy]]
- **Implementation Plan** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - -> references -> [[bugfix-strategy]]
- **Risk Assessment** (.orchestrate-consult/20260330-174936/gemini.md) -- 1 connections
  - <- includes <- [[bugfix-strategy]]
- **Task Decomposition** (.orchestrate-consult/20260330-174936/gemini.md) -- 1 connections
  - <- includes <- [[bugfix-strategy]]
- **Team Composition Recommendation** (.orchestrate-consult/20260330-174936/gemini.md) -- 1 connections
  - <- includes <- [[bugfix-strategy]]
- **Wave Execution Plan** (.orchestrate-consult/20260330-174936/gemini.md) -- 1 connections
  - <- includes <- [[bugfix-strategy]]

## Internal Relationships
- Bugfix Strategy -> includes -> Task Decomposition [EXTRACTED]
- Bugfix Strategy -> includes -> Dependency Analysis [EXTRACTED]
- Bugfix Strategy -> includes -> Team Composition Recommendation [EXTRACTED]
- Bugfix Strategy -> includes -> Wave Execution Plan [EXTRACTED]
- Bugfix Strategy -> includes -> Risk Assessment [EXTRACTED]
- Bugfix Strategy -> includes -> Alternative Strategies [EXTRACTED]
- Bugfix Strategy -> includes -> Confidence Level [EXTRACTED]
- Implementation Plan -> references -> Bugfix Strategy [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Bugfix Strategy, Alternative Strategies, Confidence Level를 중심으로 includes 관계로 연결되어 있다. 주요 소스 파일은 gemini.md, prompt_plan.md이다.
