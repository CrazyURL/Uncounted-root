# iwinv S3 Compatible Storage & Current Codebase
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **iwinv S3 Compatible Storage** (path) -- 3 connections
  - -> implements -> [[rclone-tool]]
  - -> implements -> [[aws-cli]]
  - <- references <- [[current-codebase]]
- **Current Codebase** (path) -- 2 connections
  - -> references -> [[iwinv-s3-compatible-storage]]
  - -> references -> [[supabase-storage]]
- **Supabase Storage** (path) -- 2 connections
  - -> references -> [[s3-client]]
  - <- references <- [[current-codebase]]
- **AWS CLI** (path) -- 1 connections
  - <- implements <- [[iwinv-s3-compatible-storage]]
- **rclone Tool** (path) -- 1 connections
  - <- implements <- [[iwinv-s3-compatible-storage]]
- **S3 Client** (path) -- 1 connections
  - <- references <- [[supabase-storage]]

## Internal Relationships
- Current Codebase -> references -> iwinv S3 Compatible Storage [EXTRACTED]
- Current Codebase -> references -> Supabase Storage [EXTRACTED]
- iwinv S3 Compatible Storage -> implements -> rclone Tool [EXTRACTED]
- iwinv S3 Compatible Storage -> implements -> AWS CLI [EXTRACTED]
- Supabase Storage -> references -> S3 Client [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 iwinv S3 Compatible Storage, Current Codebase, Supabase Storage를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
