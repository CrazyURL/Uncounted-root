# Code Review & AI-First Engineering
Cohesion: 0.12 | Nodes: 16

## Key Nodes
- **Code Review** (path) -- 6 connections
  - -> related_to -> [[behavior-regressions]]
  - -> related_to -> [[security-assumptions]]
  - -> related_to -> [[data-integrity]]
  - -> related_to -> [[failure-handling]]
  - -> related_to -> [[rollout-safety]]
  - <- references <- [[ai-first-engineering]]
- **AI-First Engineering** (path) -- 5 connections
  - -> references -> [[process-shifts]]
  - -> references -> [[architecture-requirements]]
  - -> references -> [[code-review]]
  - -> references -> [[hiring-and-evaluation-signals]]
  - -> references -> [[testing-standard]]
- **Process Shifts** (path) -- 3 connections
  - -> related_to -> [[planning-quality]]
  - -> related_to -> [[eval-coverage]]
  - <- references <- [[ai-first-engineering]]
- **Architecture Requirements** (path) -- 2 connections
  - -> related_to -> [[agent-friendly-architecture]]
  - <- references <- [[ai-first-engineering]]
- **Hiring and Evaluation Signals** (path) -- 2 connections
  - -> related_to -> [[strong-ai-first-engineers]]
  - <- references <- [[ai-first-engineering]]
- **Testing Standard** (path) -- 2 connections
  - -> related_to -> [[testing-bar-for-generated-code]]
  - <- references <- [[ai-first-engineering]]
- **Agent-Friendly Architecture** (path) -- 1 connections
  - <- related_to <- [[architecture-requirements]]
- **Behavior Regressions** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **Data Integrity** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **Eval Coverage** (path) -- 1 connections
  - <- related_to <- [[process-shifts]]
- **Failure Handling** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **Planning Quality** (path) -- 1 connections
  - <- related_to <- [[process-shifts]]
- **Rollout Safety** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **Security Assumptions** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **Strong AI-First Engineers** (path) -- 1 connections
  - <- related_to <- [[hiring-and-evaluation-signals]]
- **Testing Bar for Generated Code** (path) -- 1 connections
  - <- related_to <- [[testing-standard]]

## Internal Relationships
- AI-First Engineering -> references -> Process Shifts [EXTRACTED]
- AI-First Engineering -> references -> Architecture Requirements [EXTRACTED]
- AI-First Engineering -> references -> Code Review [EXTRACTED]
- AI-First Engineering -> references -> Hiring and Evaluation Signals [EXTRACTED]
- AI-First Engineering -> references -> Testing Standard [EXTRACTED]
- Architecture Requirements -> related_to -> Agent-Friendly Architecture [EXTRACTED]
- Code Review -> related_to -> Behavior Regressions [EXTRACTED]
- Code Review -> related_to -> Security Assumptions [EXTRACTED]
- Code Review -> related_to -> Data Integrity [EXTRACTED]
- Code Review -> related_to -> Failure Handling [EXTRACTED]
- Code Review -> related_to -> Rollout Safety [EXTRACTED]
- Hiring and Evaluation Signals -> related_to -> Strong AI-First Engineers [EXTRACTED]
- Process Shifts -> related_to -> Planning Quality [EXTRACTED]
- Process Shifts -> related_to -> Eval Coverage [EXTRACTED]
- Testing Standard -> related_to -> Testing Bar for Generated Code [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Code Review, AI-First Engineering, Process Shifts를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
