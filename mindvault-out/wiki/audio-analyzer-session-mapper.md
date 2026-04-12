# Audio Analyzer & Session Mapper
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Audio Analyzer** (3.기능 리스트) -- 4 connections
  - -> related_to -> [[session-mapper]]
  - <- related_to <- [[labeling-page]]
  - <- related_to <- [[pii-review-page]]
  - <- related_to <- [[admin-label-catalog-page]]
- **Session Mapper** (3.기능 리스트) -- 4 connections
  - <- implements <- [[auth-module]]
  - <- related_to <- [[audio-analyzer]]
  - <- references <- [[admin-dashboard-page]]
  - <- related_to <- [[index-css]]
- **Auth Module** (3.기능 리스트) -- 2 connections
  - -> implements -> [[session-mapper]]
  - <- references <- [[onboarding-page]]
- **Admin Dashboard Page** (3.기능 리스트) -- 1 connections
  - -> references -> [[session-mapper]]
- **Admin Label Catalog Page** (3.기능 리스트) -- 1 connections
  - -> related_to -> [[audio-analyzer]]
- **Index CSS** (3.기능 리스트) -- 1 connections
  - -> related_to -> [[session-mapper]]
- **Labeling Page** (3.기능 리스트) -- 1 connections
  - -> related_to -> [[audio-analyzer]]
- **Onboarding Page** (3.기능 리스트) -- 1 connections
  - -> references -> [[auth-module]]
- **PII Review Page** (3.기능 리스트) -- 1 connections
  - -> related_to -> [[audio-analyzer]]

## Internal Relationships
- Admin Dashboard Page -> references -> Session Mapper [EXTRACTED]
- Admin Label Catalog Page -> related_to -> Audio Analyzer [INFERRED]
- Audio Analyzer -> related_to -> Session Mapper [INFERRED]
- Auth Module -> implements -> Session Mapper [EXTRACTED]
- Index CSS -> related_to -> Session Mapper [INFERRED]
- Labeling Page -> related_to -> Audio Analyzer [INFERRED]
- Onboarding Page -> references -> Auth Module [EXTRACTED]
- PII Review Page -> related_to -> Audio Analyzer [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Audio Analyzer, Session Mapper, Auth Module를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 3.기능 리스트이다.
