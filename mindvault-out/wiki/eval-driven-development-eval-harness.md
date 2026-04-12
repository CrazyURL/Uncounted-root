# Eval-Driven Development & Eval Harness
Cohesion: 0.20 | Nodes: 11

## Key Nodes
- **Eval-Driven Development** (path) -- 4 connections
  - -> related_to -> [[capability-eval]]
  - -> related_to -> [[regression-eval]]
  - <- implements <- [[eval-harness]]
  - <- describes <- [[eval-workflow]]
- **Eval Harness** (path) -- 4 connections
  - -> implements -> [[eval-driven-development]]
  - -> includes -> [[code-based-grader]]
  - -> includes -> [[model-based-grader]]
  - -> includes -> [[human-grader]]
- **Capability Eval** (path) -- 3 connections
  - -> related_to -> [[passk-metrics]]
  - <- related_to <- [[eval-driven-development]]
  - <- demonstrates <- [[add-authentication]]
- **Eval Workflow** (path) -- 2 connections
  - -> describes -> [[eval-driven-development]]
  - <- guides <- [[best-practices]]
- **pass@k Metrics** (path) -- 2 connections
  - <- related_to <- [[capability-eval]]
  - <- related_to <- [[regression-eval]]
- **Regression Eval** (path) -- 2 connections
  - -> related_to -> [[passk-metrics]]
  - <- related_to <- [[eval-driven-development]]
- **Add Authentication** (path) -- 1 connections
  - -> demonstrates -> [[capability-eval]]
- **Best Practices** (path) -- 1 connections
  - -> guides -> [[eval-workflow]]
- **Code-Based Grader** (path) -- 1 connections
  - <- includes <- [[eval-harness]]
- **Human Grader** (path) -- 1 connections
  - <- includes <- [[eval-harness]]
- **Model-Based Grader** (path) -- 1 connections
  - <- includes <- [[eval-harness]]

## Internal Relationships
- Add Authentication -> demonstrates -> Capability Eval [EXTRACTED]
- Best Practices -> guides -> Eval Workflow [INFERRED]
- Capability Eval -> related_to -> pass@k Metrics [EXTRACTED]
- Eval-Driven Development -> related_to -> Capability Eval [EXTRACTED]
- Eval-Driven Development -> related_to -> Regression Eval [EXTRACTED]
- Eval Harness -> implements -> Eval-Driven Development [EXTRACTED]
- Eval Harness -> includes -> Code-Based Grader [EXTRACTED]
- Eval Harness -> includes -> Model-Based Grader [EXTRACTED]
- Eval Harness -> includes -> Human Grader [EXTRACTED]
- Eval Workflow -> describes -> Eval-Driven Development [INFERRED]
- Regression Eval -> related_to -> pass@k Metrics [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Eval-Driven Development, Eval Harness, Capability Eval를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
