# TS/Java Client & Voice API
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **TS/Java Client** (path) -- 3 connections
  - -> implements -> [[voice-api]]
  - <- related_to <- [[app-expert]]
  - <- related_to <- [[profilepagetsx]]
- **Voice API** (path) -- 3 connections
  - -> related_to -> [[gemini]]
  - -> related_to -> [[codex]]
  - <- implements <- [[tsjava-client]]
- **App Expert** (path) -- 1 connections
  - -> related_to -> [[tsjava-client]]
- **Codex** (path) -- 1 connections
  - <- related_to <- [[voice-api]]
- **Gemini** (path) -- 1 connections
  - <- related_to <- [[voice-api]]
- **ProfilePage.tsx** (path) -- 1 connections
  - -> related_to -> [[tsjava-client]]

## Internal Relationships
- App Expert -> related_to -> TS/Java Client [INFERRED]
- ProfilePage.tsx -> related_to -> TS/Java Client [INFERRED]
- TS/Java Client -> implements -> Voice API [EXTRACTED]
- Voice API -> related_to -> Gemini [INFERRED]
- Voice API -> related_to -> Codex [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 TS/Java Client, Voice API, App Expert를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
