# __unresolved__::ref::__unresolved____ref__voice_api & WhisperX large-v3
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **__unresolved__::ref::__unresolved____ref__voice_api** () -- 4 connections
  - <- implements <- [[whisperx-large-v3]]
  - <- provides <- [[uncounted-api]]
  - <- communicates_with <- [[voice-api-client]]
  - <- utilizes <- [[global-consent]]
- **WhisperX large-v3** (gpu_server) -- 2 connections
  - -> implements -> [[unresolvedrefunresolvedrefvoiceapi]]
  - <- related_to <- [[pyannote]]
- **Voice API Client** (uncounted-app/src/lib/api/voiceApi.ts) -- 2 connections
  - -> communicates_with -> [[unresolvedrefunresolvedrefvoiceapi]]
  - <- utilizes <- [[embeddingengine]]
- **EmbeddingEngine** (embeddingEngine.ts) -- 1 connections
  - -> utilizes -> [[voice-api-client]]
- **Global Consent** (globalConsent.ts) -- 1 connections
  - -> utilizes -> [[unresolvedrefunresolvedrefvoiceapi]]
- **pyannote** (gpu_server) -- 1 connections
  - -> related_to -> [[whisperx-large-v3]]
- **uncounted-api** (uncounted-api) -- 1 connections
  - -> provides -> [[unresolvedrefunresolvedrefvoiceapi]]

## Internal Relationships
- EmbeddingEngine -> utilizes -> Voice API Client [EXTRACTED]
- Global Consent -> utilizes -> __unresolved__::ref::__unresolved____ref__voice_api [EXTRACTED]
- pyannote -> related_to -> WhisperX large-v3 [INFERRED]
- WhisperX large-v3 -> implements -> __unresolved__::ref::__unresolved____ref__voice_api [EXTRACTED]
- uncounted-api -> provides -> __unresolved__::ref::__unresolved____ref__voice_api [EXTRACTED]
- Voice API Client -> communicates_with -> __unresolved__::ref::__unresolved____ref__voice_api [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref__voice_api, WhisperX large-v3, Voice API Client를 중심으로 utilizes 관계로 연결되어 있다. 주요 소스 파일은 embeddingEngine.ts, globalConsent.ts, gpu_server, uncounted-api, voiceApi.ts이다.
