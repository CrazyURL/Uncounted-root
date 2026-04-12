# Uncounted & Dual Consent
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Uncounted** (path) -- 3 connections
  - -> references -> [[dual-consent]]
  - -> related_to -> [[sku-package]]
  - -> implements -> [[mobile-first-spa]]
- **Dual Consent** (path) -- 1 connections
  - <- references <- [[uncounted]]
- **Mobile First SPA** (path) -- 1 connections
  - <- implements <- [[uncounted]]
- **SKU Package** (path) -- 1 connections
  - <- related_to <- [[uncounted]]

## Internal Relationships
- Uncounted -> references -> Dual Consent [EXTRACTED]
- Uncounted -> related_to -> SKU Package [INFERRED]
- Uncounted -> implements -> Mobile First SPA [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted, Dual Consent, Mobile First SPA를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
