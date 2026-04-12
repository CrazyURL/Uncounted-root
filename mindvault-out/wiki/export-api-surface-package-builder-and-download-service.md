# Export API Surface & Package Builder and Download Service
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Export API Surface** (path) -- 2 connections
  - -> implements -> [[package-builder-and-download-service]]
  - <- references <- [[admin-api-client-and-types]]
- **Package Builder and Download Service** (path) -- 2 connections
  - <- dependencies <- [[pooling-ranking-and-inventory]]
  - <- implements <- [[export-api-surface]]
- **Pooling, Ranking, and Inventory** (path) -- 2 connections
  - -> dependencies -> [[package-builder-and-download-service]]
  - <- references <- [[quality-metrics-job]]
- **Quality Metrics Job** (path) -- 2 connections
  - -> references -> [[pooling-ranking-and-inventory]]
  - <- dependencies <- [[db-migration-and-storage-bootstrap]]
- **Admin API Client and Types** (path) -- 1 connections
  - -> references -> [[export-api-surface]]
- **DB Migration and Storage Bootstrap** (path) -- 1 connections
  - -> dependencies -> [[quality-metrics-job]]

## Internal Relationships
- Admin API Client and Types -> references -> Export API Surface [EXTRACTED]
- DB Migration and Storage Bootstrap -> dependencies -> Quality Metrics Job [EXTRACTED]
- Export API Surface -> implements -> Package Builder and Download Service [EXTRACTED]
- Pooling, Ranking, and Inventory -> dependencies -> Package Builder and Download Service [EXTRACTED]
- Quality Metrics Job -> references -> Pooling, Ranking, and Inventory [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Export API Surface, Package Builder and Download Service, Pooling, Ranking, and Inventory를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
