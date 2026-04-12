# database & DB 마이그레이션 규칙
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **database** (uncounted-api/.claude/rules/database.md) -- 1 connections
  - -> contains -> [[db]]
- **DB 마이그레이션 규칙** (uncounted-api/.claude/rules/database.md) -- 1 connections
  - <- contains <- [[database]]

## Internal Relationships
- database -> contains -> DB 마이그레이션 규칙 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 database, DB 마이그레이션 규칙를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 database.md이다.
