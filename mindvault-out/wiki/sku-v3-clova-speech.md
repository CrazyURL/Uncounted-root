# SKU 데이터셋 추출 시스템 v3 & CLOVA Speech
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **SKU 데이터셋 추출 시스템 v3** (path) -- 5 connections
  - -> related_to -> [[phase-1]]
  - <- references <- [[clova-speech]]
  - <- part_of <- [[react-capacitor]]
  - <- part_of <- [[react-vite]]
  - <- related_to <- [[e2e]]
- **CLOVA Speech** (path) -- 1 connections
  - -> references -> [[sku-v3]]
- **E2E 흐름 검증** (path) -- 1 connections
  - -> related_to -> [[sku-v3]]
- **Phase 1** (path) -- 1 connections
  - <- related_to <- [[sku-v3]]
- **React + Capacitor** (path) -- 1 connections
  - -> part_of -> [[sku-v3]]
- **React + Vite** (path) -- 1 connections
  - -> part_of -> [[sku-v3]]

## Internal Relationships
- CLOVA Speech -> references -> SKU 데이터셋 추출 시스템 v3 [EXTRACTED]
- E2E 흐름 검증 -> related_to -> SKU 데이터셋 추출 시스템 v3 [INFERRED]
- React + Capacitor -> part_of -> SKU 데이터셋 추출 시스템 v3 [INFERRED]
- React + Vite -> part_of -> SKU 데이터셋 추출 시스템 v3 [INFERRED]
- SKU 데이터셋 추출 시스템 v3 -> related_to -> Phase 1 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SKU 데이터셋 추출 시스템 v3, CLOVA Speech, E2E 흐름 검증를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
