# API Endpoints & Admin UI
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **API Endpoints** (uncounted-api/src/routes) -- 5 connections
  - -> implements -> [[utterance-segmenter]]
  - -> implements -> [[chunk-assigner]]
  - -> implements -> [[admin-export-api]]
  - -> implements -> [[zip-engine]]
  - <- references <- [[supabase-schema]]
- **Admin UI** (uncounted-admin/src/pages) -- 4 connections
  - -> implements -> [[export-wizard]]
  - -> implements -> [[consent-override]]
  - -> implements -> [[pii-masking-editor]]
  - <- references <- [[admin-export-api]]
- **Admin Export API** (uncounted-api/src/routes) -- 2 connections
  - -> references -> [[admin-ui]]
  - <- implements <- [[api-endpoints]]
- **CLOVA Speech Workflow** (path) -- 2 connections
  - -> related_to -> [[on-device-utterance-separation]]
  - <- references <- [[sku-dataset-extraction-system]]
- **Export Wizard** (uncounted-admin/src/pages) -- 2 connections
  - -> related_to -> [[full-flow-verification]]
  - <- implements <- [[admin-ui]]
- **On-device Utterance Separation** (path) -- 2 connections
  - -> implements -> [[supabase-schema]]
  - <- related_to <- [[clova-speech-workflow]]
- **Supabase Schema** (uncounted-api/supabase/migrations) -- 2 connections
  - -> references -> [[api-endpoints]]
  - <- implements <- [[on-device-utterance-separation]]
- **Chunk Assigner** (uncounted-app/android) -- 1 connections
  - <- implements <- [[api-endpoints]]
- **Consent Override** (uncounted-admin/src/components/export) -- 1 connections
  - <- implements <- [[admin-ui]]
- **Full Flow Verification** (path) -- 1 connections
  - <- related_to <- [[export-wizard]]
- **PII Masking Editor** (uncounted-admin/src/components/export) -- 1 connections
  - <- implements <- [[admin-ui]]
- **SKU Dataset Extraction System** (path) -- 1 connections
  - -> references -> [[clova-speech-workflow]]
- **Utterance Segmenter** (uncounted-app/android) -- 1 connections
  - <- implements <- [[api-endpoints]]
- **ZIP Engine** (uncounted-api/src/lib/export) -- 1 connections
  - <- implements <- [[api-endpoints]]

## Internal Relationships
- Admin Export API -> references -> Admin UI [EXTRACTED]
- Admin UI -> implements -> Export Wizard [EXTRACTED]
- Admin UI -> implements -> Consent Override [EXTRACTED]
- Admin UI -> implements -> PII Masking Editor [EXTRACTED]
- API Endpoints -> implements -> Utterance Segmenter [EXTRACTED]
- API Endpoints -> implements -> Chunk Assigner [EXTRACTED]
- API Endpoints -> implements -> Admin Export API [EXTRACTED]
- API Endpoints -> implements -> ZIP Engine [EXTRACTED]
- CLOVA Speech Workflow -> related_to -> On-device Utterance Separation [EXTRACTED]
- Export Wizard -> related_to -> Full Flow Verification [INFERRED]
- On-device Utterance Separation -> implements -> Supabase Schema [EXTRACTED]
- SKU Dataset Extraction System -> references -> CLOVA Speech Workflow [EXTRACTED]
- Supabase Schema -> references -> API Endpoints [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 API Endpoints, Admin UI, Admin Export API를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 android, export, migrations, pages, path이다.
