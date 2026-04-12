# Feature Implementation Workflow & Research & Reuse
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Feature Implementation Workflow** (path) -- 6 connections
  - -> references -> [[research-reuse]]
  - -> references -> [[tdd-approach]]
  - -> references -> [[code-review]]
  - -> references -> [[commit-push]]
  - -> references -> [[pre-review-checks]]
  - <- implements <- [[planner-agent]]
- **Research & Reuse** (path) -- 4 connections
  - <- references <- [[feature-implementation-workflow]]
  - <- related_to <- [[github-code-search]]
  - <- related_to <- [[package-registries]]
  - <- related_to <- [[battle-tested-libraries]]
- **Code Review** (path) -- 2 connections
  - <- references <- [[feature-implementation-workflow]]
  - <- implements <- [[code-reviewer-agent]]
- **TDD Approach** (path) -- 2 connections
  - <- references <- [[feature-implementation-workflow]]
  - <- implements <- [[tdd-guide-agent]]
- **Battle-Tested Libraries** (path) -- 1 connections
  - -> related_to -> [[research-reuse]]
- **Code Reviewer Agent** (path) -- 1 connections
  - -> implements -> [[code-review]]
- **Commit & Push** (path) -- 1 connections
  - <- references <- [[feature-implementation-workflow]]
- **GitHub Code Search** (path) -- 1 connections
  - -> related_to -> [[research-reuse]]
- **Package Registries** (path) -- 1 connections
  - -> related_to -> [[research-reuse]]
- **Planner Agent** (path) -- 1 connections
  - -> implements -> [[feature-implementation-workflow]]
- **Pre-Review Checks** (path) -- 1 connections
  - <- references <- [[feature-implementation-workflow]]
- **TDD Guide Agent** (path) -- 1 connections
  - -> implements -> [[tdd-approach]]

## Internal Relationships
- Battle-Tested Libraries -> related_to -> Research & Reuse [INFERRED]
- Code Reviewer Agent -> implements -> Code Review [EXTRACTED]
- Feature Implementation Workflow -> references -> Research & Reuse [EXTRACTED]
- Feature Implementation Workflow -> references -> TDD Approach [EXTRACTED]
- Feature Implementation Workflow -> references -> Code Review [EXTRACTED]
- Feature Implementation Workflow -> references -> Commit & Push [EXTRACTED]
- Feature Implementation Workflow -> references -> Pre-Review Checks [EXTRACTED]
- GitHub Code Search -> related_to -> Research & Reuse [EXTRACTED]
- Package Registries -> related_to -> Research & Reuse [EXTRACTED]
- Planner Agent -> implements -> Feature Implementation Workflow [EXTRACTED]
- TDD Guide Agent -> implements -> TDD Approach [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Feature Implementation Workflow, Research & Reuse, Code Review를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
