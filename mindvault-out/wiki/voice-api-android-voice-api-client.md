# Voice API & Android Voice API Client
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Voice API** (path) -- 8 connections
  - -> implements -> [[android-voice-api-client]]
  - <- related_to <- [[data-mapping-adapter]]
  - <- related_to <- [[api-source-field]]
  - <- related_to <- [[sttprocessingservice]]
  - <- related_to <- [[voice-api-utterances]]
  - <- related_to <- [[settings-status-ui]]
  - <- related_to <- [[fallback-mechanism]]
  - <- related_to <- [[onnxsttrunner]]
- **Android Voice API Client** (path) -- 1 connections
  - <- implements <- [[voice-api]]
- **API Source Field** (path) -- 1 connections
  - -> related_to -> [[voice-api]]
- **Data Mapping Adapter** (path) -- 1 connections
  - -> related_to -> [[voice-api]]
- **Fallback Mechanism** (path) -- 1 connections
  - -> related_to -> [[voice-api]]
- **OnnxSttRunner** (path) -- 1 connections
  - -> related_to -> [[voice-api]]
- **Settings & Status UI** (path) -- 1 connections
  - -> related_to -> [[voice-api]]
- **SttProcessingService** (path) -- 1 connections
  - -> related_to -> [[voice-api]]
- **Voice API utterances** (path) -- 1 connections
  - -> related_to -> [[voice-api]]

## Internal Relationships
- API Source Field -> related_to -> Voice API [EXTRACTED]
- Data Mapping Adapter -> related_to -> Voice API [EXTRACTED]
- Fallback Mechanism -> related_to -> Voice API [EXTRACTED]
- OnnxSttRunner -> related_to -> Voice API [EXTRACTED]
- Settings & Status UI -> related_to -> Voice API [EXTRACTED]
- SttProcessingService -> related_to -> Voice API [EXTRACTED]
- Voice API -> implements -> Android Voice API Client [EXTRACTED]
- Voice API utterances -> related_to -> Voice API [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice API, Android Voice API Client, API Source Field를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
