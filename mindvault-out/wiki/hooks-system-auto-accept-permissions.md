# Hooks System & Auto-Accept Permissions
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Hooks System** (.claude/rules/common/hooks.md) -- 3 connections
  - -> contains -> [[hook-types]]
  - -> contains -> [[auto-accept-permissions]]
  - -> contains -> [[todowrite-best-practices]]
- **Auto-Accept Permissions** (.claude/rules/common/hooks.md) -- 1 connections
  - <- contains <- [[hooks-system]]
- **Hook Types** (.claude/rules/common/hooks.md) -- 1 connections
  - <- contains <- [[hooks-system]]
- **TodoWrite Best Practices** (.claude/rules/common/hooks.md) -- 1 connections
  - <- contains <- [[hooks-system]]

## Internal Relationships
- Hooks System -> contains -> Hook Types [EXTRACTED]
- Hooks System -> contains -> Auto-Accept Permissions [EXTRACTED]
- Hooks System -> contains -> TodoWrite Best Practices [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Hooks System, Auto-Accept Permissions, Hook Types를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 hooks.md이다.
