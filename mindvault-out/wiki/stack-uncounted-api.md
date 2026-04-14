# Stack & Uncounted API
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Stack** (/Users/gdash/project/uncounted-project/uncounted-api/CLAUDE.md) -- 3 connections
  - -> has_code_example -> [[uncountedapiclaudemdheaderbash]]
  - -> has_code_example -> [[bash]]
  - <- contains <- [[uncounted-api]]
- **Uncounted API** (/Users/gdash/project/uncounted-project/uncounted-api/CLAUDE.md) -- 3 connections
  - -> contains -> [[uncountedapiclaudemdheaderrules]]
  - -> contains -> [[stack]]
  - -> contains -> [[rules]]
- **bash** (/Users/gdash/project/uncounted-project/uncounted-api/CLAUDE.md) -- 1 connections
  - <- has_code_example <- [[stack]]
- **uncounted_api__claude_md::header::bash** () -- 1 connections
  - <- has_code_example <- [[stack]]
- **Rules 참조** (/Users/gdash/project/uncounted-project/uncounted-api/CLAUDE.md) -- 1 connections
  - <- contains <- [[uncounted-api]]
- **uncounted_api__claude_md::header::rules___** () -- 1 connections
  - <- contains <- [[uncounted-api]]

## Internal Relationships
- Stack -> has_code_example -> uncounted_api__claude_md::header::bash [EXTRACTED]
- Stack -> has_code_example -> bash [EXTRACTED]
- Uncounted API -> contains -> uncounted_api__claude_md::header::rules___ [EXTRACTED]
- Uncounted API -> contains -> Stack [EXTRACTED]
- Uncounted API -> contains -> Rules 참조 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Stack, Uncounted API, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 CLAUDE.md이다.
