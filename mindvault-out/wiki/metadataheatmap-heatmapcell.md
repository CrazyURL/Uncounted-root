# MetadataHeatmap & HeatmapCell
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **MetadataHeatmap** (uncounted-admin/src/components/domain/metadata/MetadataHeatmap.tsx) -- 4 connections
  - -> contains -> [[heatmapcell]]
  - -> contains -> [[metadataheatmapprops]]
  - -> contains -> [[getheatcolor]]
  - -> imports -> [[unresolvedrefreact]]
- **HeatmapCell** (uncounted-admin/src/components/domain/metadata/MetadataHeatmap.tsx) -- 1 connections
  - <- contains <- [[metadataheatmap]]
- **MetadataHeatmapProps** (uncounted-admin/src/components/domain/metadata/MetadataHeatmap.tsx) -- 1 connections
  - <- contains <- [[metadataheatmap]]
- **getHeatColor** (uncounted-admin/src/components/domain/metadata/MetadataHeatmap.tsx) -- 1 connections
  - <- contains <- [[metadataheatmap]]

## Internal Relationships
- MetadataHeatmap -> contains -> HeatmapCell [EXTRACTED]
- MetadataHeatmap -> contains -> MetadataHeatmapProps [EXTRACTED]
- MetadataHeatmap -> contains -> getHeatColor [EXTRACTED]

## Cross-Community Connections
- MetadataHeatmap -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])

## Context
이 커뮤니티는 MetadataHeatmap, HeatmapCell, MetadataHeatmapProps를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 MetadataHeatmap.tsx이다.
