# auth-api & API 클라이언트 패턴
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **auth-api** (/Users/gdash/project/uncounted-project/uncounted-admin/.claude/rules/auth-api.md) -- 2 connections
  - -> contains -> [[api]]
  - -> contains -> [[api]]
- **API 클라이언트 패턴** (/Users/gdash/project/uncounted-project/uncounted-admin/.claude/rules/auth-api.md) -- 1 connections
  - <- contains <- [[auth-api]]
- **API 클라이언트 패턴** (uncounted-admin/.claude/rules/auth-api.md) -- 1 connections
  - <- contains <- [[auth-api]]

## Internal Relationships
- auth-api -> contains -> API 클라이언트 패턴 [EXTRACTED]
- auth-api -> contains -> API 클라이언트 패턴 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 auth-api, API 클라이언트 패턴, API 클라이언트 패턴를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 auth-api.md이다.
