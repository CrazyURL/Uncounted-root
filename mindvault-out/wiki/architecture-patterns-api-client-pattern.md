# Architecture Patterns & API Client Pattern
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Architecture Patterns** (.claude/rules/common/architecture.md) -- 3 connections
  - -> contains -> [[encrypted-communication-all-projects]]
  - -> contains -> [[auth-flow]]
  - -> contains -> [[api-client-pattern]]
- **API Client Pattern** (.claude/rules/common/architecture.md) -- 1 connections
  - <- contains <- [[architecture-patterns]]
- **Auth Flow** (.claude/rules/common/architecture.md) -- 1 connections
  - <- contains <- [[architecture-patterns]]
- **Encrypted Communication (All Projects)** (.claude/rules/common/architecture.md) -- 1 connections
  - <- contains <- [[architecture-patterns]]

## Internal Relationships
- Architecture Patterns -> contains -> Encrypted Communication (All Projects) [EXTRACTED]
- Architecture Patterns -> contains -> Auth Flow [EXTRACTED]
- Architecture Patterns -> contains -> API Client Pattern [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Architecture Patterns, API Client Pattern, Auth Flow를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 architecture.md이다.
