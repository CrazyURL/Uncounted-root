# Capability Evals & CE-1: 정상 refresh
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Capability Evals** (.claude/evals/auth-token-refresh-flow.md) -- 7 connections
  - -> contains -> [[ce-1-refresh]]
  - -> contains -> [[ce-2-refreshtoken]]
  - -> contains -> [[ce-3-refreshtoken]]
  - -> contains -> [[ce-4-app-401]]
  - -> contains -> [[ce-5-refresh-mutex]]
  - -> contains -> [[ce-6-refresh]]
  - -> contains -> [[ce-7]]
- **CE-1: 정상 refresh** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[capability-evals]]
- **CE-2: 만료된 refresh_token 거부** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[capability-evals]]
- **CE-3: refresh_token 없음 거부** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[capability-evals]]
- **CE-4: App 클라이언트 401 자동 재시도** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[capability-evals]]
- **CE-5: refresh mutex (중복 호출 방지)** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[capability-evals]]
- **CE-6: refresh 실패 시 로그아웃** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[capability-evals]]
- **CE-7: 새 로그인 발생 시 경합 방지** (.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- contains <- [[capability-evals]]

## Internal Relationships
- Capability Evals -> contains -> CE-1: 정상 refresh [EXTRACTED]
- Capability Evals -> contains -> CE-2: 만료된 refresh_token 거부 [EXTRACTED]
- Capability Evals -> contains -> CE-3: refresh_token 없음 거부 [EXTRACTED]
- Capability Evals -> contains -> CE-4: App 클라이언트 401 자동 재시도 [EXTRACTED]
- Capability Evals -> contains -> CE-5: refresh mutex (중복 호출 방지) [EXTRACTED]
- Capability Evals -> contains -> CE-6: refresh 실패 시 로그아웃 [EXTRACTED]
- Capability Evals -> contains -> CE-7: 새 로그인 발생 시 경합 방지 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Capability Evals, CE-1: 정상 refresh, CE-2: 만료된 refresh_token 거부를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 auth-token-refresh-flow.md이다.
