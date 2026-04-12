# U-M Metadata SKU Admin Extraction System & Export API
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **U-M Metadata SKU Admin Extraction System** (path) -- 5 connections
  - -> references -> [[inventory-api]]
  - -> references -> [[sku-stats-api]]
  - -> references -> [[preview-api]]
  - -> references -> [[metadata-package-builder]]
  - -> references -> [[export-api]]
- **Export API** (path) -- 2 connections
  - -> related_to -> [[export-job]]
  - <- references <- [[u-m-metadata-sku-admin-extraction-system]]
- **Inventory API** (path) -- 2 connections
  - -> related_to -> [[device-status]]
  - <- references <- [[u-m-metadata-sku-admin-extraction-system]]
- **Preview API** (path) -- 2 connections
  - -> related_to -> [[metadata-preview-data]]
  - <- references <- [[u-m-metadata-sku-admin-extraction-system]]
- **Device Status** (path) -- 1 connections
  - <- related_to <- [[inventory-api]]
- **Export Job** (path) -- 1 connections
  - <- related_to <- [[export-api]]
- **Metadata Package Builder** (path) -- 1 connections
  - <- references <- [[u-m-metadata-sku-admin-extraction-system]]
- **Metadata Preview Data** (path) -- 1 connections
  - <- related_to <- [[preview-api]]
- **SKU Stats API** (path) -- 1 connections
  - <- references <- [[u-m-metadata-sku-admin-extraction-system]]

## Internal Relationships
- Export API -> related_to -> Export Job [EXTRACTED]
- Inventory API -> related_to -> Device Status [EXTRACTED]
- Preview API -> related_to -> Metadata Preview Data [EXTRACTED]
- U-M Metadata SKU Admin Extraction System -> references -> Inventory API [EXTRACTED]
- U-M Metadata SKU Admin Extraction System -> references -> SKU Stats API [EXTRACTED]
- U-M Metadata SKU Admin Extraction System -> references -> Preview API [EXTRACTED]
- U-M Metadata SKU Admin Extraction System -> references -> Metadata Package Builder [EXTRACTED]
- U-M Metadata SKU Admin Extraction System -> references -> Export API [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 U-M Metadata SKU Admin Extraction System, Export API, Inventory API를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
