# client.ts & Refresh Token
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **client.ts** (uncounted-app/src/lib/api/client.ts) -- 4 connections
  - -> implements -> [[refresh-token]]
  - -> related_to -> [[metadatauploadsyncinittsx]]
  - -> related_to -> [[sessionrepositoryts]]
  - -> references -> [[authts]]
- **Refresh Token** (uncounted-app/src/lib/api/client.ts) -- 4 connections
  - -> related_to -> [[mutex]]
  - <- related_to <- [[access-token]]
  - <- implements <- [[clientts]]
  - <- references <- [[supabase]]
- **Access Token** (uncounted-app/src/lib/api/client.ts) -- 1 connections
  - -> related_to -> [[refresh-token]]
- **auth.ts** (uncounted-api/src/routes/auth.ts) -- 1 connections
  - <- references <- [[clientts]]
- **MetadataUploadSyncInit.tsx** (uncounted-app/src/app/bootstrap/MetadataUploadSyncInit.tsx) -- 1 connections
  - <- related_to <- [[clientts]]
- **Mutex** (uncounted-app/src/lib/api/client.ts) -- 1 connections
  - <- related_to <- [[refresh-token]]
- **sessionRepository.ts** (uncounted-app/src/domains/session/sessionRepository.ts) -- 1 connections
  - <- related_to <- [[clientts]]
- **Supabase** (uncounted-api/src/routes/auth.ts) -- 1 connections
  - -> references -> [[refresh-token]]

## Internal Relationships
- Access Token -> related_to -> Refresh Token [EXTRACTED]
- client.ts -> implements -> Refresh Token [EXTRACTED]
- client.ts -> related_to -> MetadataUploadSyncInit.tsx [INFERRED]
- client.ts -> related_to -> sessionRepository.ts [EXTRACTED]
- client.ts -> references -> auth.ts [EXTRACTED]
- Refresh Token -> related_to -> Mutex [EXTRACTED]
- Supabase -> references -> Refresh Token [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 client.ts, Refresh Token, Access Token를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 MetadataUploadSyncInit.tsx, auth.ts, client.ts, sessionRepository.ts이다.
