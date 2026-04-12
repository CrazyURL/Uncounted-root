# Admin Workflow & SKU Dataset Export System
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Admin Workflow** (path) -- 4 connections
  - -> related_to -> [[sku-dataset-export-system]]
  - <- related_to <- [[wizard-extension-inventory-card]]
  - <- related_to <- [[utterance-review-ui]]
  - <- related_to <- [[bulk-labeling-ui]]
- **SKU Dataset Export System** (path) -- 3 connections
  - -> implements -> [[backend-audio-processing]]
  - <- related_to <- [[admin-workflow]]
  - <- references <- [[u-a01-1]]
- **Backend Audio Processing** (path) -- 2 connections
  - <- implements <- [[sku-dataset-export-system]]
  - <- references <- [[export-functionality]]
- **Bulk Labeling UI** (path) -- 1 connections
  - -> related_to -> [[admin-workflow]]
- **Export Functionality** (path) -- 1 connections
  - -> references -> [[backend-audio-processing]]
- **U-A01 1시간 패키지** (path) -- 1 connections
  - -> references -> [[sku-dataset-export-system]]
- **Utterance Review UI** (path) -- 1 connections
  - -> related_to -> [[admin-workflow]]
- **Wizard Extension + Inventory Card** (path) -- 1 connections
  - -> related_to -> [[admin-workflow]]

## Internal Relationships
- Admin Workflow -> related_to -> SKU Dataset Export System [EXTRACTED]
- Bulk Labeling UI -> related_to -> Admin Workflow [EXTRACTED]
- Export Functionality -> references -> Backend Audio Processing [EXTRACTED]
- SKU Dataset Export System -> implements -> Backend Audio Processing [EXTRACTED]
- U-A01 1시간 패키지 -> references -> SKU Dataset Export System [EXTRACTED]
- Utterance Review UI -> related_to -> Admin Workflow [EXTRACTED]
- Wizard Extension + Inventory Card -> related_to -> Admin Workflow [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Admin Workflow, SKU Dataset Export System, Backend Audio Processing를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
