# SessionApiClient & utterances table
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **SessionApiClient** (SKU 데이터셋 추출 시스템 v3) -- 1 connections
  - -> references -> [[utterances-table]]
- **utterances table** (SKU 데이터셋 추출 시스템 v3) -- 1 connections
  - <- references <- [[sessionapiclient]]

## Internal Relationships
- SessionApiClient -> references -> utterances table [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SessionApiClient, utterances table를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 SKU 데이터셋 추출 시스템 v3이다.
