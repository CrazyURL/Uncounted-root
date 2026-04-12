# User Voice Recording & Embedding Engine
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **User Voice Recording** (N/A) -- 3 connections
  - -> identified_as -> [[speaker-0-user]]
  - -> identified_as -> [[speaker-1-peer]]
  - <- references <- [[voice-enrollment-page]]
- **Embedding Engine** (src/lib/embeddingEngine.ts) -- 2 connections
  - -> generates -> [[reference-embedding]]
  - <- implements <- [[voice-enrollment-page]]
- **Voice Enrollment Page** (src/pages/VoiceEnrollmentPage.tsx) -- 2 connections
  - -> references -> [[user-voice-recording]]
  - -> implements -> [[embedding-engine]]
- **Reference Embedding** (local storage) -- 1 connections
  - <- generates <- [[embedding-engine]]
- **Speaker 0 (User)** (N/A) -- 1 connections
  - <- identified_as <- [[user-voice-recording]]
- **Speaker 1 (Peer)** (N/A) -- 1 connections
  - <- identified_as <- [[user-voice-recording]]

## Internal Relationships
- Embedding Engine -> generates -> Reference Embedding [EXTRACTED]
- User Voice Recording -> identified_as -> Speaker 0 (User) [EXTRACTED]
- User Voice Recording -> identified_as -> Speaker 1 (Peer) [EXTRACTED]
- Voice Enrollment Page -> references -> User Voice Recording [EXTRACTED]
- Voice Enrollment Page -> implements -> Embedding Engine [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 User Voice Recording, Embedding Engine, Voice Enrollment Page를 중심으로 identified_as 관계로 연결되어 있다. 주요 소스 파일은 A, VoiceEnrollmentPage.tsx, embeddingEngine.ts, local storage이다.
