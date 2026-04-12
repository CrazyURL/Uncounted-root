# Database & Quality Metrics
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **Database** (SKU 데이터셋 추출 시스템 v3) -- 1 connections
  - -> related_to -> [[quality-metrics]]
- **Quality Metrics** (SKU 데이터셋 추출 시스템 v3) -- 1 connections
  - <- related_to <- [[database]]

## Internal Relationships
- Database -> related_to -> Quality Metrics [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Database, Quality Metrics를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 SKU 데이터셋 추출 시스템 v3이다.
