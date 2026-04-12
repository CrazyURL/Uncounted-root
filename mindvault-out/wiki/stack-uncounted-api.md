# Stack & Uncounted API
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Stack** (uncounted-api/CLAUDE.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[uncounted-api]]
- **Uncounted API** (uncounted-api/CLAUDE.md) -- 2 connections
  - -> contains -> [[stack]]
  - -> contains -> [[rules]]
- **bash** (uncounted-api/CLAUDE.md) -- 1 connections
  - <- has_code_example <- [[stack]]
- **Rules 참조** (uncounted-api/CLAUDE.md) -- 1 connections
  - <- contains <- [[uncounted-api]]

## Internal Relationships
- Stack -> has_code_example -> bash [EXTRACTED]
- Uncounted API -> contains -> Stack [EXTRACTED]
- Uncounted API -> contains -> Rules 참조 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Stack, Uncounted API, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 CLAUDE.md이다.
