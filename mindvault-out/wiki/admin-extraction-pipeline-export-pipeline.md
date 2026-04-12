# Admin Extraction Pipeline & Export Pipeline
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **Admin Extraction Pipeline** (Orchestration Strategy) -- 6 connections
  - -> references -> [[metadata-repository]]
  - -> references -> [[api]]
  - -> references -> [[inventory-management]]
  - -> references -> [[export-pipeline]]
  - -> references -> [[user-interface]]
  - <- related_to <- [[u-m01-call-metadata]]
- **Export Pipeline** (path) -- 2 connections
  - -> references -> [[zip-packaging]]
  - <- references <- [[admin-extraction-pipeline]]
- **Metadata Repository** (path) -- 2 connections
  - -> implements -> [[jsonb-key-aggregation]]
  - <- references <- [[admin-extraction-pipeline]]
- **User Interface** (path) -- 2 connections
  - -> implements -> [[heatmap]]
  - <- references <- [[admin-extraction-pipeline]]
- **API** (path) -- 1 connections
  - <- references <- [[admin-extraction-pipeline]]
- **Heatmap** (path) -- 1 connections
  - <- implements <- [[user-interface]]
- **Inventory Management** (path) -- 1 connections
  - <- references <- [[admin-extraction-pipeline]]
- **JSONB Key Aggregation** (path) -- 1 connections
  - <- implements <- [[metadata-repository]]
- **U-M01 (Call Metadata)** (Orchestration Strategy) -- 1 connections
  - -> related_to -> [[admin-extraction-pipeline]]
- **ZIP Packaging** (path) -- 1 connections
  - <- references <- [[export-pipeline]]

## Internal Relationships
- Admin Extraction Pipeline -> references -> Metadata Repository [EXTRACTED]
- Admin Extraction Pipeline -> references -> API [EXTRACTED]
- Admin Extraction Pipeline -> references -> Inventory Management [EXTRACTED]
- Admin Extraction Pipeline -> references -> Export Pipeline [EXTRACTED]
- Admin Extraction Pipeline -> references -> User Interface [EXTRACTED]
- Export Pipeline -> references -> ZIP Packaging [EXTRACTED]
- Metadata Repository -> implements -> JSONB Key Aggregation [EXTRACTED]
- U-M01 (Call Metadata) -> related_to -> Admin Extraction Pipeline [EXTRACTED]
- User Interface -> implements -> Heatmap [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Admin Extraction Pipeline, Export Pipeline, Metadata Repository를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 Orchestration Strategy, path이다.
