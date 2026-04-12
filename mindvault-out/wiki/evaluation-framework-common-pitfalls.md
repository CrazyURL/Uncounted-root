# Evaluation Framework & Common Pitfalls
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Evaluation Framework** (path) -- 8 connections
  - -> related_to -> [[agent-success-quality]]
  - -> related_to -> [[process-trajectory]]
  - -> related_to -> [[trust-safety]]
  - -> references -> [[goal-plan-action-framework]]
  - -> related_to -> [[common-pitfalls]]
  - -> references -> [[evaluation-rubric]]
  - -> references -> [[automated-trajectory-check]]
  - <- references <- [[research-command]]
- **Common Pitfalls** (path) -- 4 connections
  - -> references -> [[silent-failures]]
  - -> references -> [[data-contamination]]
  - -> references -> [[trajectory-drifts]]
  - <- related_to <- [[evaluation-framework]]
- **Goal-Plan-Action Framework** (path) -- 2 connections
  - -> references -> [[llm-as-a-judge]]
  - <- references <- [[evaluation-framework]]
- **Agent Success & Quality** (path) -- 1 connections
  - <- related_to <- [[evaluation-framework]]
- **Automated Trajectory Check** (path) -- 1 connections
  - <- references <- [[evaluation-framework]]
- **Data Contamination** (path) -- 1 connections
  - <- references <- [[common-pitfalls]]
- **Evaluation Rubric** (path) -- 1 connections
  - <- references <- [[evaluation-framework]]
- **LLM as a Judge** (path) -- 1 connections
  - <- references <- [[goal-plan-action-framework]]
- **Process & Trajectory** (path) -- 1 connections
  - <- related_to <- [[evaluation-framework]]
- **Research Command** (path) -- 1 connections
  - -> references -> [[evaluation-framework]]
- **Silent Failures** (path) -- 1 connections
  - <- references <- [[common-pitfalls]]
- **Trajectory Drifts** (path) -- 1 connections
  - <- references <- [[common-pitfalls]]
- **Trust & Safety** (path) -- 1 connections
  - <- related_to <- [[evaluation-framework]]

## Internal Relationships
- Common Pitfalls -> references -> Silent Failures [EXTRACTED]
- Common Pitfalls -> references -> Data Contamination [EXTRACTED]
- Common Pitfalls -> references -> Trajectory Drifts [EXTRACTED]
- Evaluation Framework -> related_to -> Agent Success & Quality [INFERRED]
- Evaluation Framework -> related_to -> Process & Trajectory [INFERRED]
- Evaluation Framework -> related_to -> Trust & Safety [INFERRED]
- Evaluation Framework -> references -> Goal-Plan-Action Framework [EXTRACTED]
- Evaluation Framework -> related_to -> Common Pitfalls [INFERRED]
- Evaluation Framework -> references -> Evaluation Rubric [EXTRACTED]
- Evaluation Framework -> references -> Automated Trajectory Check [EXTRACTED]
- Goal-Plan-Action Framework -> references -> LLM as a Judge [EXTRACTED]
- Research Command -> references -> Evaluation Framework [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Evaluation Framework, Common Pitfalls, Goal-Plan-Action Framework를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
