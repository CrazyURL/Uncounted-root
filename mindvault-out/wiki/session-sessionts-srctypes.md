# Session (`session.ts`) & 핵심 타입 (`src/types/`)
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Session (`session.ts`)** (uncounted-app/.claude/rules/types.md) -- 2 connections
  - -> has_code_example -> [[ts]]
  - <- contains <- [[srctypes]]
- **핵심 타입 (`src/types/`)** (uncounted-app/.claude/rules/types.md) -- 2 connections
  - -> contains -> [[session-sessionts]]
  - <- contains <- [[types]]
- **ts** (uncounted-app/.claude/rules/types.md) -- 1 connections
  - <- has_code_example <- [[session-sessionts]]
- **types** (uncounted-app/.claude/rules/types.md) -- 1 connections
  - -> contains -> [[srctypes]]

## Internal Relationships
- types -> contains -> 핵심 타입 (`src/types/`) [EXTRACTED]
- Session (`session.ts`) -> has_code_example -> ts [EXTRACTED]
- 핵심 타입 (`src/types/`) -> contains -> Session (`session.ts`) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Session (`session.ts`), 핵심 타입 (`src/types/`), ts를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 types.md이다.
