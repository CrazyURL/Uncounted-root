# Agent-Sync & Agent-Auth
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Agent-Sync** (path) -- 3 connections
  - -> related_to -> [[metadatauploadsyncinit]]
  - -> related_to -> [[clienttestts]]
  - <- implements <- [[gemini-codex]]
- **Agent-Auth** (path) -- 2 connections
  - -> related_to -> [[refresh-mutex]]
  - <- implements <- [[gemini-codex]]
- **Gemini (Codex 타임아웃)** (path) -- 2 connections
  - -> implements -> [[agent-auth]]
  - -> implements -> [[agent-sync]]
- **client.test.ts** (path) -- 1 connections
  - <- related_to <- [[agent-sync]]
- **MetadataUploadSyncInit** (path) -- 1 connections
  - <- related_to <- [[agent-sync]]
- **refresh mutex** (path) -- 1 connections
  - <- related_to <- [[agent-auth]]

## Internal Relationships
- Agent-Auth -> related_to -> refresh mutex [EXTRACTED]
- Agent-Sync -> related_to -> MetadataUploadSyncInit [EXTRACTED]
- Agent-Sync -> related_to -> client.test.ts [EXTRACTED]
- Gemini (Codex 타임아웃) -> implements -> Agent-Auth [EXTRACTED]
- Gemini (Codex 타임아웃) -> implements -> Agent-Sync [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent-Sync, Agent-Auth, Gemini (Codex 타임아웃)를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
