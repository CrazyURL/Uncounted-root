# SKU Data Extraction Plan & Admin Export API Expansion
Cohesion: 0.12 | Nodes: 16

## Key Nodes
- **SKU Data Extraction Plan** (path) -- 15 connections
  - -> references -> [[database-schema-foundation]]
  - -> references -> [[session-chunk-registration-api]]
  - -> references -> [[utterance-audio-upload-api]]
  - -> references -> [[session-utterance-completion-api]]
  - -> references -> [[export-pipeline-bypass]]
  - -> references -> [[quality-metrics-aggregation-update]]
  - -> references -> [[android-utterance-segmentation-engine]]
  - -> references -> [[android-logical-chunk-assignment-engine]]
  - -> references -> [[mobile-api-client-extension]]
  - -> references -> [[zip-package-engine]]
  - -> references -> [[admin-export-api-expansion]]
  - -> references -> [[admin-utterance-masking-api]]
  - -> references -> [[utterance-review-table-ui]]
  - -> references -> [[consent-override-panel]]
  - -> references -> [[cross-project-integration-verification]]
- **Admin Export API Expansion** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Admin Utterance Masking API** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Android Logical Chunk Assignment Engine** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Android Utterance Segmentation Engine** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Consent Override Panel** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Cross-Project Integration Verification** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Database Schema Foundation** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Export Pipeline Bypass** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Mobile API Client Extension** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Quality Metrics Aggregation Update** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Session Chunk Registration API** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Session Utterance Completion API** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Utterance Audio Upload API** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **Utterance Review Table UI** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]
- **ZIP Package Engine** (path) -- 1 connections
  - <- references <- [[sku-data-extraction-plan]]

## Internal Relationships
- SKU Data Extraction Plan -> references -> Database Schema Foundation [EXTRACTED]
- SKU Data Extraction Plan -> references -> Session Chunk Registration API [EXTRACTED]
- SKU Data Extraction Plan -> references -> Utterance Audio Upload API [EXTRACTED]
- SKU Data Extraction Plan -> references -> Session Utterance Completion API [EXTRACTED]
- SKU Data Extraction Plan -> references -> Export Pipeline Bypass [EXTRACTED]
- SKU Data Extraction Plan -> references -> Quality Metrics Aggregation Update [EXTRACTED]
- SKU Data Extraction Plan -> references -> Android Utterance Segmentation Engine [EXTRACTED]
- SKU Data Extraction Plan -> references -> Android Logical Chunk Assignment Engine [EXTRACTED]
- SKU Data Extraction Plan -> references -> Mobile API Client Extension [EXTRACTED]
- SKU Data Extraction Plan -> references -> ZIP Package Engine [EXTRACTED]
- SKU Data Extraction Plan -> references -> Admin Export API Expansion [EXTRACTED]
- SKU Data Extraction Plan -> references -> Admin Utterance Masking API [EXTRACTED]
- SKU Data Extraction Plan -> references -> Utterance Review Table UI [EXTRACTED]
- SKU Data Extraction Plan -> references -> Consent Override Panel [EXTRACTED]
- SKU Data Extraction Plan -> references -> Cross-Project Integration Verification [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SKU Data Extraction Plan, Admin Export API Expansion, Admin Utterance Masking API를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
