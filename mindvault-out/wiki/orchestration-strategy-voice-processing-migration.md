# Orchestration Strategy & Voice Processing Migration
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **Orchestration Strategy** (.orchestrate-consult/20260410-201236/gemini.md) -- 8 connections
  - -> references -> [[task-decomposition]]
  - -> references -> [[dependency-analysis]]
  - -> references -> [[team-composition-recommendation]]
  - -> references -> [[wave-execution-plan]]
  - -> references -> [[risk-assessment]]
  - -> references -> [[alternative-strategies]]
  - -> references -> [[confidence-level]]
  - <- references <- [[voice-processing-migration]]
- **Voice Processing Migration** (prompt_plan.md) -- 3 connections
  - -> related_to -> [[on-device-android]]
  - -> related_to -> [[voice-api-server]]
  - -> references -> [[orchestration-strategy]]
- **Alternative Strategies** (.orchestrate-consult/20260410-201236/gemini.md) -- 1 connections
  - <- references <- [[orchestration-strategy]]
- **Confidence Level** (.orchestrate-consult/20260410-201236/gemini.md) -- 1 connections
  - <- references <- [[orchestration-strategy]]
- **Dependency Analysis** (.orchestrate-consult/20260410-201236/gemini.md) -- 1 connections
  - <- references <- [[orchestration-strategy]]
- **On-Device Android** (prompt_plan.md) -- 1 connections
  - <- related_to <- [[voice-processing-migration]]
- **Risk Assessment** (.orchestrate-consult/20260410-201236/gemini.md) -- 1 connections
  - <- references <- [[orchestration-strategy]]
- **Task Decomposition** (.orchestrate-consult/20260410-201236/gemini.md) -- 1 connections
  - <- references <- [[orchestration-strategy]]
- **Team Composition Recommendation** (.orchestrate-consult/20260410-201236/gemini.md) -- 1 connections
  - <- references <- [[orchestration-strategy]]
- **Voice API Server** (prompt_plan.md) -- 1 connections
  - <- related_to <- [[voice-processing-migration]]
- **Wave Execution Plan** (.orchestrate-consult/20260410-201236/gemini.md) -- 1 connections
  - <- references <- [[orchestration-strategy]]

## Internal Relationships
- Orchestration Strategy -> references -> Task Decomposition [EXTRACTED]
- Orchestration Strategy -> references -> Dependency Analysis [EXTRACTED]
- Orchestration Strategy -> references -> Team Composition Recommendation [EXTRACTED]
- Orchestration Strategy -> references -> Wave Execution Plan [EXTRACTED]
- Orchestration Strategy -> references -> Risk Assessment [EXTRACTED]
- Orchestration Strategy -> references -> Alternative Strategies [INFERRED]
- Orchestration Strategy -> references -> Confidence Level [EXTRACTED]
- Voice Processing Migration -> related_to -> On-Device Android [EXTRACTED]
- Voice Processing Migration -> related_to -> Voice API Server [EXTRACTED]
- Voice Processing Migration -> references -> Orchestration Strategy [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Orchestration Strategy, Voice Processing Migration, Alternative Strategies를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 gemini.md, prompt_plan.md이다.
