# Clients Table & Sessions Table
Cohesion: 0.20 | Nodes: 11

## Key Nodes
- **Clients Table** (db_schema_v1.5) -- 5 connections
  - -> references -> [[delivery-profiles-table]]
  - -> references -> [[client-sku-rules-table]]
  - -> references -> [[delivery-records-table]]
  - <- related_to <- [[billable-units-table]]
  - <- related_to <- [[user-asset-ledger-table]]
- **Sessions Table** (db_schema_v1.5) -- 3 connections
  - -> references -> [[transcripts-table]]
  - -> references -> [[session-chunks-table]]
  - -> references -> [[billable-units-table]]
- **Billable Units Table** (db_schema_v1.5) -- 2 connections
  - -> related_to -> [[clients-table]]
  - <- references <- [[sessions-table]]
- **Delivery Profiles Table** (db_schema_v1.5) -- 2 connections
  - -> related_to -> [[export-jobs-table]]
  - <- references <- [[clients-table]]
- **Export Jobs Table** (db_schema_v1.5) -- 2 connections
  - -> related_to -> [[user-asset-ledger-table]]
  - <- related_to <- [[delivery-profiles-table]]
- **Session Chunks Table** (db_schema_v1.5) -- 2 connections
  - -> references -> [[transcript-chunks-table]]
  - <- references <- [[sessions-table]]
- **User Asset Ledger Table** (db_schema_v1.5) -- 2 connections
  - -> related_to -> [[clients-table]]
  - <- related_to <- [[export-jobs-table]]
- **Client SKU Rules Table** (db_schema_v1.5) -- 1 connections
  - <- references <- [[clients-table]]
- **Delivery Records Table** (db_schema_v1.5) -- 1 connections
  - <- references <- [[clients-table]]
- **Transcript Chunks Table** (db_schema_v1.5) -- 1 connections
  - <- references <- [[session-chunks-table]]
- **Transcripts Table** (db_schema_v1.5) -- 1 connections
  - <- references <- [[sessions-table]]

## Internal Relationships
- Billable Units Table -> related_to -> Clients Table [INFERRED]
- Clients Table -> references -> Delivery Profiles Table [EXTRACTED]
- Clients Table -> references -> Client SKU Rules Table [EXTRACTED]
- Clients Table -> references -> Delivery Records Table [EXTRACTED]
- Delivery Profiles Table -> related_to -> Export Jobs Table [INFERRED]
- Export Jobs Table -> related_to -> User Asset Ledger Table [INFERRED]
- Session Chunks Table -> references -> Transcript Chunks Table [EXTRACTED]
- Sessions Table -> references -> Transcripts Table [EXTRACTED]
- Sessions Table -> references -> Session Chunks Table [EXTRACTED]
- Sessions Table -> references -> Billable Units Table [EXTRACTED]
- User Asset Ledger Table -> related_to -> Clients Table [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Clients Table, Sessions Table, Billable Units Table를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 db_schema_v1.5이다.
