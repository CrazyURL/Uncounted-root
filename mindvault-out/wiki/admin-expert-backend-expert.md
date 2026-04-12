# Admin Expert & Backend Expert
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Admin Expert** (path) -- 5 connections
  - -> related_to -> [[wave-2]]
  - <- implements <- [[u-m-sku]]
  - <- references <- [[admin-metadatats]]
  - <- references <- [[adminmetadataexportpagetsx]]
  - <- related_to <- [[api-client]]
- **Backend Expert** (path) -- 3 connections
  - -> related_to -> [[wave-1]]
  - <- implements <- [[u-m-sku]]
  - <- references <- [[metadatarepositoryts]]
- **U-M 메타데이터 SKU 어드민 추출 시스템** (path) -- 2 connections
  - -> implements -> [[backend-expert]]
  - -> implements -> [[admin-expert]]
- **admin-metadata.ts** (path) -- 1 connections
  - -> references -> [[admin-expert]]
- **AdminMetadataExportPage.tsx** (path) -- 1 connections
  - -> references -> [[admin-expert]]
- **API Client** (path) -- 1 connections
  - -> related_to -> [[admin-expert]]
- **metadataRepository.ts** (path) -- 1 connections
  - -> references -> [[backend-expert]]
- **Wave 1** (path) -- 1 connections
  - <- related_to <- [[backend-expert]]
- **Wave 2** (path) -- 1 connections
  - <- related_to <- [[admin-expert]]

## Internal Relationships
- Admin Expert -> related_to -> Wave 2 [EXTRACTED]
- admin-metadata.ts -> references -> Admin Expert [EXTRACTED]
- AdminMetadataExportPage.tsx -> references -> Admin Expert [EXTRACTED]
- API Client -> related_to -> Admin Expert [EXTRACTED]
- Backend Expert -> related_to -> Wave 1 [EXTRACTED]
- metadataRepository.ts -> references -> Backend Expert [EXTRACTED]
- U-M 메타데이터 SKU 어드민 추출 시스템 -> implements -> Backend Expert [EXTRACTED]
- U-M 메타데이터 SKU 어드민 추출 시스템 -> implements -> Admin Expert [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Admin Expert, Backend Expert, U-M 메타데이터 SKU 어드민 추출 시스템를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
