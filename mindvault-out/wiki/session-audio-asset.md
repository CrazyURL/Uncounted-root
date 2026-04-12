# Session & Audio Asset
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **Session** (src/types/session.ts) -- 10 connections
  - -> related_to -> [[upload-status]]
  - -> related_to -> [[diarization]]
  - -> related_to -> [[voice-biometrics]]
  - -> related_to -> [[metadata-schema]]
  - -> related_to -> [[audio-asset]]
  - -> related_to -> [[campaign]]
  - -> related_to -> [[dataset]]
  - -> related_to -> [[event-unit]]
  - -> related_to -> [[ledger]]
  - -> related_to -> [[sku]]
- **Audio Asset** (src/types/audioAsset.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Campaign** (src/types/campaign.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Dataset** (src/types/dataset.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Diarization** (src/types/diarization.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Event Unit** (src/types/eventUnit.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Ledger** (src/types/ledger.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Metadata Schema** (src/types/metadata.ts) -- 1 connections
  - <- related_to <- [[session]]
- **SKU** (src/types/sku.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Upload Status** (src/types/session.ts) -- 1 connections
  - <- related_to <- [[session]]
- **Voice Biometrics** (src/types/voiceBiometrics.ts) -- 1 connections
  - <- related_to <- [[session]]

## Internal Relationships
- Session -> related_to -> Upload Status [EXTRACTED]
- Session -> related_to -> Diarization [EXTRACTED]
- Session -> related_to -> Voice Biometrics [INFERRED]
- Session -> related_to -> Metadata Schema [INFERRED]
- Session -> related_to -> Audio Asset [INFERRED]
- Session -> related_to -> Campaign [INFERRED]
- Session -> related_to -> Dataset [INFERRED]
- Session -> related_to -> Event Unit [INFERRED]
- Session -> related_to -> Ledger [INFERRED]
- Session -> related_to -> SKU [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Session, Audio Asset, Campaign를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 audioAsset.ts, campaign.ts, dataset.ts, diarization.ts, eventUnit.ts이다.
