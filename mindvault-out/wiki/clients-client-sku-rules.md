# Clients & Client SKU Rules
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Clients** (DB Schema Definition) -- 3 connections
  - -> related_to -> [[export-jobs]]
  - -> references -> [[delivery-profiles]]
  - -> references -> [[client-sku-rules]]
- **Client SKU Rules** (DB Schema Definition) -- 2 connections
  - <- references <- [[clients]]
  - <- references <- [[sku-presets]]
- **Export Jobs** (DB Schema Definition) -- 2 connections
  - -> references -> [[export-package-items]]
  - <- related_to <- [[clients]]
- **Delivery Profiles** (DB Schema Definition) -- 1 connections
  - <- references <- [[clients]]
- **Export Package Items** (DB Schema Definition) -- 1 connections
  - <- references <- [[export-jobs]]
- **SKU Presets** (DB Schema Definition) -- 1 connections
  - -> references -> [[client-sku-rules]]

## Internal Relationships
- Clients -> related_to -> Export Jobs [EXTRACTED]
- Clients -> references -> Delivery Profiles [EXTRACTED]
- Clients -> references -> Client SKU Rules [EXTRACTED]
- Export Jobs -> references -> Export Package Items [EXTRACTED]
- SKU Presets -> references -> Client SKU Rules [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Clients, Client SKU Rules, Export Jobs를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 DB Schema Definition이다.
