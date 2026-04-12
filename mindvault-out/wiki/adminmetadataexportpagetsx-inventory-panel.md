# AdminMetadataExportPage.tsx & Inventory Panel
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **AdminMetadataExportPage.tsx** (uncounted-admin/src/pages/admin/) -- 3 connections
  - -> implements -> [[inventory-panel]]
  - -> implements -> [[preview-visualization]]
  - -> implements -> [[quality-filter-ui]]
- **Inventory Panel** (path) -- 1 connections
  - <- implements <- [[adminmetadataexportpagetsx]]
- **Preview Visualization** (path) -- 1 connections
  - <- implements <- [[adminmetadataexportpagetsx]]
- **Quality Filter UI** (path) -- 1 connections
  - <- implements <- [[adminmetadataexportpagetsx]]

## Internal Relationships
- AdminMetadataExportPage.tsx -> implements -> Inventory Panel [INFERRED]
- AdminMetadataExportPage.tsx -> implements -> Preview Visualization [INFERRED]
- AdminMetadataExportPage.tsx -> implements -> Quality Filter UI [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 AdminMetadataExportPage.tsx, Inventory Panel, Preview Visualization를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 admin, path이다.
