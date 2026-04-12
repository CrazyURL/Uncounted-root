# HomePage & Delete Confirm Modal
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **HomePage** (HomePage) -- 5 connections
  - -> references -> [[valuerangecard]]
  - -> references -> [[vaultcard]]
  - -> references -> [[refineryreportcard]]
  - -> references -> [[readinessskucard]]
  - -> references -> [[delete-confirm-modal]]
- **Delete Confirm Modal** (unknown) -- 1 connections
  - <- references <- [[homepage]]
- **ReadinessSKUCard** (src/components/domain/ReadinessSKUCard.tsx) -- 1 connections
  - <- references <- [[homepage]]
- **RefineryReportCard** (src/components/domain/RefineryReportCard.tsx) -- 1 connections
  - <- references <- [[homepage]]
- **ValueRangeCard** (src/components/domain/ValueRangeCard.tsx) -- 1 connections
  - <- references <- [[homepage]]
- **VaultCard** (src/components/domain/VaultCard.tsx) -- 1 connections
  - <- references <- [[homepage]]

## Internal Relationships
- HomePage -> references -> ValueRangeCard [EXTRACTED]
- HomePage -> references -> VaultCard [EXTRACTED]
- HomePage -> references -> RefineryReportCard [EXTRACTED]
- HomePage -> references -> ReadinessSKUCard [EXTRACTED]
- HomePage -> references -> Delete Confirm Modal [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 HomePage, Delete Confirm Modal, ReadinessSKUCard를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 HomePage, ReadinessSKUCard.tsx, RefineryReportCard.tsx, ValueRangeCard.tsx, VaultCard.tsx이다.
