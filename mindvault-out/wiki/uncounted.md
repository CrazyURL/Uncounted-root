# Uncounted 플랫폼 & 라벨 신뢰도 시스템
Cohesion: 0.18 | Nodes: 14

## Key Nodes
- **Uncounted 플랫폼** (SKU 데이터 엔진 설계 명세) -- 11 connections
  - -> related_to -> [[sku-u-a01]]
  - -> related_to -> [[sku-u-a02]]
  - -> related_to -> [[sku-u-a03]]
  - -> related_to -> [[sku-u-m01]]
  - -> related_to -> [[sku-u-m02]]
  - -> related_to -> [[sku-u-m03]]
  - -> related_to -> [[sku-u-m04]]
  - -> related_to -> [[sku-u-m05]]
  - -> related_to -> [[p1]]
  - -> related_to -> [[p2]]
  - -> related_to -> [[p3]]
- **라벨 신뢰도 시스템** (SKU 데이터 엔진 설계 명세) -- 3 connections
  - <- implements <- [[sku-u-a02]]
  - <- implements <- [[sku-u-a03]]
  - <- implements <- [[sku-u-m01]]
- **품질 점수 계산법** (SKU 데이터 엔진 설계 명세) -- 2 connections
  - <- implements <- [[sku-u-a01]]
  - <- implements <- [[sku-u-m05]]
- **SKU U-A01** (SKU 데이터 엔진 설계 명세) -- 2 connections
  - -> implements -> [[]]
  - <- related_to <- [[uncounted]]
- **SKU U-A02** (SKU 데이터 엔진 설계 명세) -- 2 connections
  - -> implements -> [[]]
  - <- related_to <- [[uncounted]]
- **SKU U-A03** (SKU 데이터 엔진 설계 명세) -- 2 connections
  - -> implements -> [[]]
  - <- related_to <- [[uncounted]]
- **SKU U-M01** (SKU 데이터 엔진 설계 명세) -- 2 connections
  - -> implements -> [[]]
  - <- related_to <- [[uncounted]]
- **SKU U-M05** (SKU 데이터 엔진 설계 명세) -- 2 connections
  - -> implements -> [[]]
  - <- related_to <- [[uncounted]]
- **프리미엄 번들 P1** (SKU 데이터 엔진 설계 명세) -- 1 connections
  - <- related_to <- [[uncounted]]
- **프리미엄 번들 P2** (SKU 데이터 엔진 설계 명세) -- 1 connections
  - <- related_to <- [[uncounted]]
- **프리미엄 번들 P3** (SKU 데이터 엔진 설계 명세) -- 1 connections
  - <- related_to <- [[uncounted]]
- **SKU U-M02** (SKU 데이터 엔진 설계 명세) -- 1 connections
  - <- related_to <- [[uncounted]]
- **SKU U-M03** (SKU 데이터 엔진 설계 명세) -- 1 connections
  - <- related_to <- [[uncounted]]
- **SKU U-M04** (SKU 데이터 엔진 설계 명세) -- 1 connections
  - <- related_to <- [[uncounted]]

## Internal Relationships
- SKU U-A01 -> implements -> 품질 점수 계산법 [EXTRACTED]
- SKU U-A02 -> implements -> 라벨 신뢰도 시스템 [EXTRACTED]
- SKU U-A03 -> implements -> 라벨 신뢰도 시스템 [EXTRACTED]
- SKU U-M01 -> implements -> 라벨 신뢰도 시스템 [EXTRACTED]
- SKU U-M05 -> implements -> 품질 점수 계산법 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-A01 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-A02 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-A03 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-M01 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-M02 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-M03 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-M04 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> SKU U-M05 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> 프리미엄 번들 P1 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> 프리미엄 번들 P2 [EXTRACTED]
- Uncounted 플랫폼 -> related_to -> 프리미엄 번들 P3 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted 플랫폼, 라벨 신뢰도 시스템, 품질 점수 계산법를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 SKU 데이터 엔진 설계 명세이다.
