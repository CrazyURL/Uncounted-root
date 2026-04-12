# Design Patterns & Common Patterns
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Design Patterns** (.claude/rules/common/patterns.md) -- 3 connections
  - -> contains -> [[repository-pattern]]
  - -> contains -> [[api-response-format]]
  - <- contains <- [[common-patterns]]
- **Common Patterns** (.claude/rules/common/patterns.md) -- 2 connections
  - -> contains -> [[skeleton-projects]]
  - -> contains -> [[design-patterns]]
- **API Response Format** (.claude/rules/common/patterns.md) -- 1 connections
  - <- contains <- [[design-patterns]]
- **Repository Pattern** (.claude/rules/common/patterns.md) -- 1 connections
  - <- contains <- [[design-patterns]]
- **Skeleton Projects** (.claude/rules/common/patterns.md) -- 1 connections
  - <- contains <- [[common-patterns]]

## Internal Relationships
- Common Patterns -> contains -> Skeleton Projects [EXTRACTED]
- Common Patterns -> contains -> Design Patterns [EXTRACTED]
- Design Patterns -> contains -> Repository Pattern [EXTRACTED]
- Design Patterns -> contains -> API Response Format [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Design Patterns, Common Patterns, API Response Format를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 patterns.md이다.
