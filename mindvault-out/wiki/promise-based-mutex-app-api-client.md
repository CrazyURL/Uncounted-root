# Promise-based Mutex & App API Client
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Promise-based Mutex** (path) -- 3 connections
  - -> implements -> [[app-api-client]]
  - -> implements -> [[admin-api-client]]
  - <- references <- [[refresh-token-race-condition]]
- **App API Client** (uncounted-app/src/lib/api/client.ts) -- 2 connections
  - <- implements <- [[promise-based-mutex]]
  - <- responsible_for <- [[agent-a-lead-fixer]]
- **Admin API Client** (uncounted-admin/src/lib/api/client.ts) -- 1 connections
  - <- implements <- [[promise-based-mutex]]
- **Agent A (Lead Fixer)** (path) -- 1 connections
  - -> responsible_for -> [[app-api-client]]
- **Refresh Token Race Condition** (path) -- 1 connections
  - -> references -> [[promise-based-mutex]]

## Internal Relationships
- Agent A (Lead Fixer) -> responsible_for -> App API Client [EXTRACTED]
- Promise-based Mutex -> implements -> App API Client [EXTRACTED]
- Promise-based Mutex -> implements -> Admin API Client [EXTRACTED]
- Refresh Token Race Condition -> references -> Promise-based Mutex [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Promise-based Mutex, App API Client, Admin API Client를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 client.ts, path이다.
