# auth-encryption & Signout 만료 토큰 처리
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **auth-encryption** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/rules/auth-encryption.md) -- 2 connections
  - -> contains -> [[signout]]
  - -> contains -> [[cryptots]]
- **Signout 만료 토큰 처리** (uncounted-api/.claude/rules/auth-encryption.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[auth-encryption]]
- **crypto.ts 함수** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/rules/auth-encryption.md) -- 1 connections
  - <- contains <- [[auth-encryption]]
- **typescript** (uncounted-api/.claude/rules/auth-encryption.md) -- 1 connections
  - <- has_code_example <- [[signout]]

## Internal Relationships
- auth-encryption -> contains -> Signout 만료 토큰 처리 [EXTRACTED]
- auth-encryption -> contains -> crypto.ts 함수 [EXTRACTED]
- Signout 만료 토큰 처리 -> has_code_example -> typescript [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 auth-encryption, Signout 만료 토큰 처리, crypto.ts 함수를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 auth-encryption.md이다.
