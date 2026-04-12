# Python Hooks & TypeScript/JavaScript Hooks
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Python Hooks** (.claude/rules/python/hooks.md) -- 4 connections
  - -> references -> [[unresolvedrefhooks]]
  - -> contains -> [[posttooluse-hooks]]
  - -> contains -> [[warnings]]
  - <- contains <- [[hooks]]
- **TypeScript/JavaScript Hooks** (.claude/rules/typescript/hooks.md) -- 4 connections
  - -> references -> [[unresolvedrefhooks]]
  - -> contains -> [[posttooluse-hooks]]
  - -> contains -> [[stop-hooks]]
  - <- contains <- [[hooks]]
- **__unresolved__::ref::hooks** () -- 3 connections
  - <- references <- [[python-hooks]]
  - <- references <- [[typescriptjavascript-hooks]]
  - <- references <- [[java-hooks]]
- **Java Hooks** (.claude/rules/java/hooks.md) -- 3 connections
  - -> references -> [[unresolvedrefhooks]]
  - -> contains -> [[posttooluse-hooks]]
  - <- contains <- [[hooks]]
- **hooks** (.claude/rules/java/hooks.md) -- 1 connections
  - -> contains -> [[java-hooks]]
- **PostToolUse Hooks** (.claude/rules/java/hooks.md) -- 1 connections
  - <- contains <- [[java-hooks]]
- **hooks** (.claude/rules/python/hooks.md) -- 1 connections
  - -> contains -> [[python-hooks]]
- **PostToolUse Hooks** (.claude/rules/python/hooks.md) -- 1 connections
  - <- contains <- [[python-hooks]]
- **Warnings** (.claude/rules/python/hooks.md) -- 1 connections
  - <- contains <- [[python-hooks]]
- **hooks** (.claude/rules/typescript/hooks.md) -- 1 connections
  - -> contains -> [[typescriptjavascript-hooks]]
- **PostToolUse Hooks** (.claude/rules/typescript/hooks.md) -- 1 connections
  - <- contains <- [[typescriptjavascript-hooks]]
- **Stop Hooks** (.claude/rules/typescript/hooks.md) -- 1 connections
  - <- contains <- [[typescriptjavascript-hooks]]

## Internal Relationships
- hooks -> contains -> Java Hooks [EXTRACTED]
- Java Hooks -> references -> __unresolved__::ref::hooks [EXTRACTED]
- Java Hooks -> contains -> PostToolUse Hooks [EXTRACTED]
- hooks -> contains -> Python Hooks [EXTRACTED]
- Python Hooks -> references -> __unresolved__::ref::hooks [EXTRACTED]
- Python Hooks -> contains -> PostToolUse Hooks [EXTRACTED]
- Python Hooks -> contains -> Warnings [EXTRACTED]
- hooks -> contains -> TypeScript/JavaScript Hooks [EXTRACTED]
- TypeScript/JavaScript Hooks -> references -> __unresolved__::ref::hooks [EXTRACTED]
- TypeScript/JavaScript Hooks -> contains -> PostToolUse Hooks [EXTRACTED]
- TypeScript/JavaScript Hooks -> contains -> Stop Hooks [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Python Hooks, TypeScript/JavaScript Hooks, __unresolved__::ref::hooks를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 hooks.md이다.
