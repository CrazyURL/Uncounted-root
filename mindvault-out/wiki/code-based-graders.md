# Code-Based & Graders
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Code-Based** (.claude/evals/auth-token-refresh-flow.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[graders]]
- **Graders** (.claude/evals/auth-token-refresh-flow.md) -- 2 connections
  - -> contains -> [[code-based]]
  - -> contains -> [[human-review-required]]
- **bash** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- has_code_example <- [[code-based]]
- **Human Review Required** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[graders]]

## Internal Relationships
- Code-Based -> has_code_example -> bash [EXTRACTED]
- Graders -> contains -> Code-Based [EXTRACTED]
- Graders -> contains -> Human Review Required [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Code-Based, Graders, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 auth-token-refresh-flow.md이다.
