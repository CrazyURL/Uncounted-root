# Data Assetization Platform & Uncounted
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **Data Assetization Platform** (path) -- 5 connections
  - -> implements -> [[on-device-deidentification]]
  - -> implements -> [[explicit-dual-consent]]
  - -> related_to -> [[ai-learning-data]]
  - <- references <- [[uncounted]]
  - <- related_to <- [[ai-competitors]]
- **Uncounted** (path) -- 2 connections
  - -> references -> [[data-assetization-platform]]
  - <- references <- [[team-composition]]
- **AI Competitors** (path) -- 1 connections
  - -> related_to -> [[data-assetization-platform]]
- **AI Learning Data** (path) -- 1 connections
  - <- related_to <- [[data-assetization-platform]]
- **Explicit Dual Consent** (path) -- 1 connections
  - <- implements <- [[data-assetization-platform]]
- **On-Device Deidentification** (path) -- 1 connections
  - <- implements <- [[data-assetization-platform]]
- **Team Composition** (path) -- 1 connections
  - -> references -> [[uncounted]]

## Internal Relationships
- AI Competitors -> related_to -> Data Assetization Platform [INFERRED]
- Data Assetization Platform -> implements -> On-Device Deidentification [EXTRACTED]
- Data Assetization Platform -> implements -> Explicit Dual Consent [EXTRACTED]
- Data Assetization Platform -> related_to -> AI Learning Data [INFERRED]
- Team Composition -> references -> Uncounted [EXTRACTED]
- Uncounted -> references -> Data Assetization Platform [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Data Assetization Platform, Uncounted, AI Competitors를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
