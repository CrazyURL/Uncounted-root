# Data Transfer & Iwinv S3 Storage
Cohesion: 0.67 | Nodes: 4

## Key Nodes
- **Data Transfer** (path) -- 3 connections
  - -> references -> [[execution-plan]]
  - <- references <- [[supabase-storage]]
  - <- references <- [[iwinv-s3-storage]]
- **Iwinv S3 Storage** (path) -- 2 connections
  - -> references -> [[data-transfer]]
  - <- related_to <- [[supabase-storage]]
- **Supabase Storage** (path) -- 2 connections
  - -> related_to -> [[iwinv-s3-storage]]
  - -> references -> [[data-transfer]]
- **Execution Plan** (path) -- 1 connections
  - <- references <- [[data-transfer]]

## Internal Relationships
- Data Transfer -> references -> Execution Plan [EXTRACTED]
- Iwinv S3 Storage -> references -> Data Transfer [EXTRACTED]
- Supabase Storage -> related_to -> Iwinv S3 Storage [EXTRACTED]
- Supabase Storage -> references -> Data Transfer [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Data Transfer, Iwinv S3 Storage, Supabase Storage를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
