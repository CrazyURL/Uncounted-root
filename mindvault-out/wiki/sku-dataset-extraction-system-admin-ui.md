# SKU Dataset Extraction System & Admin UI
Cohesion: 0.10 | Nodes: 20

## Key Nodes
- **SKU Dataset Extraction System** (Orchestration Strategy) -- 8 connections
  - -> references -> [[u-a01-1-hour-package]]
  - -> references -> [[database-schema-upgrade]]
  - -> references -> [[audio-processing]]
  - -> references -> [[admin-ui]]
  - -> references -> [[team-composition-recommendation]]
  - -> references -> [[wave-execution-plan]]
  - -> references -> [[risk-assessment]]
  - -> references -> [[alternative-strategies]]
- **Admin UI** (Orchestration Strategy) -- 3 connections
  - -> implements -> [[sku-dashboard-wizard-extension]]
  - -> implements -> [[utterance-review-bulk-labeling]]
  - <- references <- [[sku-dataset-extraction-system]]
- **Audio Processing** (Orchestration Strategy) -- 2 connections
  - -> implements -> [[core-audio-utilities]]
  - <- references <- [[sku-dataset-extraction-system]]
- **Core Audio Utilities** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[server-side-quality-analysis]]
  - <- implements <- [[audio-processing]]
- **Database Schema Upgrade** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[s3-bucket-setup]]
  - <- references <- [[sku-dataset-extraction-system]]
- **Inventory & BU Pooling** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[process-utterance-management]]
  - <- related_to <- [[server-side-batch-stt-masking]]
- **Process & Utterance Management** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[finalize-packaging]]
  - <- related_to <- [[inventory-bu-pooling]]
- **Server-side Batch STT & Masking** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[inventory-bu-pooling]]
  - <- related_to <- [[utterance-re-segmenting-engine]]
- **Server-side Quality Analysis** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[utterance-re-segmenting-engine]]
  - <- related_to <- [[core-audio-utilities]]
- **U-A01 1-hour package** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[clova-speech]]
  - <- references <- [[sku-dataset-extraction-system]]
- **Utterance Re-segmenting Engine** (Orchestration Strategy) -- 2 connections
  - -> related_to -> [[server-side-batch-stt-masking]]
  - <- related_to <- [[server-side-quality-analysis]]
- **Alternative Strategies** (Orchestration Strategy) -- 1 connections
  - <- references <- [[sku-dataset-extraction-system]]
- **CLOVA Speech** (Orchestration Strategy) -- 1 connections
  - <- related_to <- [[u-a01-1-hour-package]]
- **Finalize & Packaging** (Orchestration Strategy) -- 1 connections
  - <- related_to <- [[process-utterance-management]]
- **Risk Assessment** (Orchestration Strategy) -- 1 connections
  - <- references <- [[sku-dataset-extraction-system]]
- **S3 Bucket Setup** (Orchestration Strategy) -- 1 connections
  - <- related_to <- [[database-schema-upgrade]]
- **SKU Dashboard & Wizard Extension** (Orchestration Strategy) -- 1 connections
  - <- implements <- [[admin-ui]]
- **Team Composition Recommendation** (Orchestration Strategy) -- 1 connections
  - <- references <- [[sku-dataset-extraction-system]]
- **Utterance Review & Bulk Labeling** (Orchestration Strategy) -- 1 connections
  - <- implements <- [[admin-ui]]
- **Wave Execution Plan** (Orchestration Strategy) -- 1 connections
  - <- references <- [[sku-dataset-extraction-system]]

## Internal Relationships
- Admin UI -> implements -> SKU Dashboard & Wizard Extension [EXTRACTED]
- Admin UI -> implements -> Utterance Review & Bulk Labeling [EXTRACTED]
- Audio Processing -> implements -> Core Audio Utilities [EXTRACTED]
- Core Audio Utilities -> related_to -> Server-side Quality Analysis [INFERRED]
- Database Schema Upgrade -> related_to -> S3 Bucket Setup [INFERRED]
- Inventory & BU Pooling -> related_to -> Process & Utterance Management [INFERRED]
- Process & Utterance Management -> related_to -> Finalize & Packaging [INFERRED]
- Server-side Batch STT & Masking -> related_to -> Inventory & BU Pooling [INFERRED]
- Server-side Quality Analysis -> related_to -> Utterance Re-segmenting Engine [INFERRED]
- SKU Dataset Extraction System -> references -> U-A01 1-hour package [EXTRACTED]
- SKU Dataset Extraction System -> references -> Database Schema Upgrade [EXTRACTED]
- SKU Dataset Extraction System -> references -> Audio Processing [EXTRACTED]
- SKU Dataset Extraction System -> references -> Admin UI [EXTRACTED]
- SKU Dataset Extraction System -> references -> Team Composition Recommendation [EXTRACTED]
- SKU Dataset Extraction System -> references -> Wave Execution Plan [EXTRACTED]
- SKU Dataset Extraction System -> references -> Risk Assessment [EXTRACTED]
- SKU Dataset Extraction System -> references -> Alternative Strategies [EXTRACTED]
- U-A01 1-hour package -> related_to -> CLOVA Speech [INFERRED]
- Utterance Re-segmenting Engine -> related_to -> Server-side Batch STT & Masking [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 SKU Dataset Extraction System, Admin UI, Audio Processing를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 Orchestration Strategy이다.
