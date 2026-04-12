# U-M/U-P Metadata Extraction Pipeline & API Endpoints
Cohesion: 0.50 | Nodes: 5

## Key Nodes
- **U-M/U-P Metadata Extraction Pipeline** (uncounted-docs/어드민/U-M_메타데이터_SKU_어드민_기획서.html) -- 3 connections
  - -> related_to -> [[features]]
  - -> references -> [[api-endpoints]]
  - -> related_to -> [[admin-panel]]
- **API Endpoints** (uncounted-docs/어드민/U-M_메타데이터_SKU_어드민_기획서.html) -- 2 connections
  - <- references <- [[u-mu-p-metadata-extraction-pipeline]]
  - <- references <- [[technical-decisions]]
- **Features** (uncounted-docs/어드민/U-M_메타데이터_SKU_어드민_기획서.html) -- 2 connections
  - <- related_to <- [[u-mu-p-metadata-extraction-pipeline]]
  - <- implements <- [[technical-decisions]]
- **Technical Decisions** (uncounted-docs/어드민/U-M_메타데이터_SKU_어드민_기획서.html) -- 2 connections
  - -> implements -> [[features]]
  - -> references -> [[api-endpoints]]
- **Admin Panel** (uncounted-docs/어드민/U-M_메타데이터_SKU_어드민_기획서.html) -- 1 connections
  - <- related_to <- [[u-mu-p-metadata-extraction-pipeline]]

## Internal Relationships
- Technical Decisions -> implements -> Features [EXTRACTED]
- Technical Decisions -> references -> API Endpoints [EXTRACTED]
- U-M/U-P Metadata Extraction Pipeline -> related_to -> Features [EXTRACTED]
- U-M/U-P Metadata Extraction Pipeline -> references -> API Endpoints [EXTRACTED]
- U-M/U-P Metadata Extraction Pipeline -> related_to -> Admin Panel [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 U-M/U-P Metadata Extraction Pipeline, API Endpoints, Features를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 U-M_메타데이터_SKU_어드민_기획서.html이다.
