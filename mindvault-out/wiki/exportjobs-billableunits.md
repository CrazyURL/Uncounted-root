# export_jobs & billable_units
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **export_jobs** (SKU 데이터셋 추출 시스템) -- 4 connections
  - -> references -> [[billableunits]]
  - -> related_to -> [[userassetledger]]
  - <- implements <- [[clova-speech]]
  - <- restricts <- [[consent-on]]
- **billable_units** (SKU 데이터셋 추출 시스템) -- 2 connections
  - <- references <- [[exportjobs]]
  - <- related_to <- [[api]]
- **CLOVA Speech** (SKU 데이터셋 추출 시스템) -- 2 connections
  - -> implements -> [[exportjobs]]
  - -> related_to -> [[deliveryrecords]]
- **재고 현황 API** (SKU 데이터셋 추출 시스템) -- 1 connections
  - -> related_to -> [[billableunits]]
- **consent ON 데이터** (SKU 데이터셋 추출 시스템) -- 1 connections
  - -> restricts -> [[exportjobs]]
- **delivery_records** (SKU 데이터셋 추출 시스템) -- 1 connections
  - <- related_to <- [[clova-speech]]
- **user_asset_ledger** (SKU 데이터셋 추출 시스템) -- 1 connections
  - <- related_to <- [[exportjobs]]

## Internal Relationships
- 재고 현황 API -> related_to -> billable_units [INFERRED]
- CLOVA Speech -> implements -> export_jobs [EXTRACTED]
- CLOVA Speech -> related_to -> delivery_records [INFERRED]
- consent ON 데이터 -> restricts -> export_jobs [EXTRACTED]
- export_jobs -> references -> billable_units [EXTRACTED]
- export_jobs -> related_to -> user_asset_ledger [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 export_jobs, billable_units, CLOVA Speech를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 SKU 데이터셋 추출 시스템이다.
