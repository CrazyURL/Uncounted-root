# Regression Evals & RE-1: 기존 로그인 흐름 정상 동작
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Regression Evals** (.claude/evals/auth-token-refresh-flow.md) -- 4 connections
  - -> contains -> [[re-1]]
  - -> contains -> [[re-2]]
  - -> contains -> [[re-3]]
  - -> contains -> [[re-4-admin]]
- **RE-1: 기존 로그인 흐름 정상 동작** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[regression-evals]]
- **RE-2: 암호화 통신 유지** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[regression-evals]]
- **RE-3: 기존 테스트 통과** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[regression-evals]]
- **RE-4: Admin 동일 동작** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[regression-evals]]

## Internal Relationships
- Regression Evals -> contains -> RE-1: 기존 로그인 흐름 정상 동작 [EXTRACTED]
- Regression Evals -> contains -> RE-2: 암호화 통신 유지 [EXTRACTED]
- Regression Evals -> contains -> RE-3: 기존 테스트 통과 [EXTRACTED]
- Regression Evals -> contains -> RE-4: Admin 동일 동작 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Regression Evals, RE-1: 기존 로그인 흐름 정상 동작, RE-2: 암호화 통신 유지를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 auth-token-refresh-flow.md이다.
