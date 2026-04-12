# Signout 만료 토큰 처리 & typescript
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Signout 만료 토큰 처리** (uncounted-api/.claude/rules/auth-encryption.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[auth-encryption]]
- **typescript** (uncounted-api/.claude/rules/auth-encryption.md) -- 1 connections
  - <- has_code_example <- [[signout]]
- **auth-encryption** (uncounted-api/.claude/rules/auth-encryption.md) -- 1 connections
  - -> contains -> [[signout]]

## Internal Relationships
- auth-encryption -> contains -> Signout 만료 토큰 처리 [EXTRACTED]
- Signout 만료 토큰 처리 -> has_code_example -> typescript [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Signout 만료 토큰 처리, typescript, auth-encryption를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 auth-encryption.md이다.
