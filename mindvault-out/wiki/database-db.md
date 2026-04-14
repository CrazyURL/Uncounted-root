# database & DB 마이그레이션 규칙
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **database** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/rules/database.md) -- 2 connections
  - -> contains -> [[uncountedapiclauderulesdatabasemdheaderdb]]
  - -> contains -> [[db]]
- **DB 마이그레이션 규칙** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/rules/database.md) -- 1 connections
  - <- contains <- [[database]]
- **uncounted_api___claude__rules__database_md::header::db__________** () -- 1 connections
  - <- contains <- [[database]]

## Internal Relationships
- database -> contains -> uncounted_api___claude__rules__database_md::header::db__________ [EXTRACTED]
- database -> contains -> DB 마이그레이션 규칙 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 database, DB 마이그레이션 규칙, uncounted_api___claude__rules__database_md::header::db__________를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 database.md이다.
