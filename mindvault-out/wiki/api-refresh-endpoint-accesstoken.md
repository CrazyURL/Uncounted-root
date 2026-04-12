# API refresh endpoint & access_token
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **API refresh endpoint** (uncounted-api/src/routes/auth.ts) -- 4 connections
  - -> implements -> [[refreshtoken]]
  - -> references -> [[accesstoken]]
  - -> references -> [[uncountedsession-cookie]]
  - -> related_to -> [[error-response]]
- **access_token** (/Users/gdash/project/uncounted-project/.claude/evals/auth-token-refresh-flow.md) -- 2 connections
  - <- references <- [[api-refresh-endpoint]]
  - <- references <- [[app-auth-utility]]
- **App API client** (uncounted-app/src/lib/api/client.ts) -- 2 connections
  - -> references -> [[refreshtoken]]
  - -> related_to -> [[retry-mechanism]]
- **App auth utility** (uncounted-app/src/lib/api/auth.ts) -- 2 connections
  - -> references -> [[accesstoken]]
  - -> related_to -> [[refresh-mutex]]
- **Error response** (/Users/gdash/project/uncounted-project/.claude/evals/auth-token-refresh-flow.md) -- 2 connections
  - <- related_to <- [[api-refresh-endpoint]]
  - <- related_to <- [[logout-process]]
- **refresh_token** (/Users/gdash/project/uncounted-project/.claude/evals/auth-token-refresh-flow.md) -- 2 connections
  - <- implements <- [[api-refresh-endpoint]]
  - <- references <- [[app-api-client]]
- **Logout process** (/Users/gdash/project/uncounted-project/.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - -> related_to -> [[error-response]]
- **refresh mutex** (/Users/gdash/project/uncounted-project/.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- related_to <- [[app-auth-utility]]
- **Retry mechanism** (/Users/gdash/project/uncounted-project/.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- related_to <- [[app-api-client]]
- **uncounted_session cookie** (/Users/gdash/project/uncounted-project/.claude/evals/auth-token-refresh-flow.md) -- 1 connections
  - <- references <- [[api-refresh-endpoint]]

## Internal Relationships
- API refresh endpoint -> implements -> refresh_token [EXTRACTED]
- API refresh endpoint -> references -> access_token [EXTRACTED]
- API refresh endpoint -> references -> uncounted_session cookie [EXTRACTED]
- API refresh endpoint -> related_to -> Error response [EXTRACTED]
- App API client -> references -> refresh_token [EXTRACTED]
- App API client -> related_to -> Retry mechanism [EXTRACTED]
- App auth utility -> references -> access_token [EXTRACTED]
- App auth utility -> related_to -> refresh mutex [EXTRACTED]
- Logout process -> related_to -> Error response [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 API refresh endpoint, access_token, App API client를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 auth-token-refresh-flow.md, auth.ts, client.ts이다.
