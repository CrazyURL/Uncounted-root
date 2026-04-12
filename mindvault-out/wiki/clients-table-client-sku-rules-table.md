# Clients Table & Client SKU Rules Table
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **Clients Table** (path) -- 6 connections
  - -> references -> [[delivery-profiles-table]]
  - -> references -> [[client-sku-rules-table]]
  - -> references -> [[export-jobs-table]]
  - <- references <- [[user-asset-ledger]]
  - <- references <- [[delivery-records-table]]
  - <- INFERRED <- [[funnel-events-table]]
- **Client SKU Rules Table** (path) -- 1 connections
  - <- references <- [[clients-table]]
- **Delivery Profiles Table** (path) -- 1 connections
  - <- references <- [[clients-table]]
- **Delivery Records Table** (path) -- 1 connections
  - -> references -> [[clients-table]]
- **Export Jobs Table** (path) -- 1 connections
  - <- references <- [[clients-table]]
- **Funnel Events Table** (path) -- 1 connections
  - -> INFERRED -> [[clients-table]]
- **User Asset Ledger** (path) -- 1 connections
  - -> references -> [[clients-table]]

## Internal Relationships
- Clients Table -> references -> Delivery Profiles Table [EXTRACTED]
- Clients Table -> references -> Client SKU Rules Table [EXTRACTED]
- Clients Table -> references -> Export Jobs Table [EXTRACTED]
- Delivery Records Table -> references -> Clients Table [EXTRACTED]
- Funnel Events Table -> INFERRED -> Clients Table [INFERRED]
- User Asset Ledger -> references -> Clients Table [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Clients Table, Client SKU Rules Table, Delivery Profiles Table를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
