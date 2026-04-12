# Supabase Storage & iwinv S3
Cohesion: 0.24 | Nodes: 11

## Key Nodes
- **Supabase Storage** (path) -- 7 connections
  - -> migrates_to -> [[iwinv-s3]]
  - <- related_to <- [[rclone]]
  - <- migrates_from <- [[custom-nodejs-migration-script]]
  - <- related_to <- [[aws-cli]]
  - <- supports <- [[s3-protocol-support]]
  - <- avoids <- [[data-streaming]]
  - <- necessary_for <- [[pagination]]
- **iwinv S3** (path) -- 5 connections
  - <- migrates_to <- [[supabase-storage]]
  - <- related_to <- [[rclone]]
  - <- migrates_to <- [[custom-nodejs-migration-script]]
  - <- related_to <- [[aws-cli]]
  - <- requires <- [[bucket-creation]]
- **Custom Node.js Migration Script** (path) -- 4 connections
  - -> migrates_to -> [[iwinv-s3]]
  - -> migrates_from -> [[supabase-storage]]
  - <- used_in <- [[supabaseadmin]]
  - <- used_in <- [[s3client]]
- **AWS CLI** (path) -- 2 connections
  - -> related_to -> [[iwinv-s3]]
  - -> related_to -> [[supabase-storage]]
- **rclone** (path) -- 2 connections
  - -> related_to -> [[iwinv-s3]]
  - -> related_to -> [[supabase-storage]]
- **Bucket Creation** (path) -- 1 connections
  - -> requires -> [[iwinv-s3]]
- **Data Streaming** (path) -- 1 connections
  - -> avoids -> [[supabase-storage]]
- **Pagination** (path) -- 1 connections
  - -> necessary_for -> [[supabase-storage]]
- **S3 Protocol Support** (path) -- 1 connections
  - -> supports -> [[supabase-storage]]
- **s3Client** (path) -- 1 connections
  - -> used_in -> [[custom-nodejs-migration-script]]
- **supabaseAdmin** (path) -- 1 connections
  - -> used_in -> [[custom-nodejs-migration-script]]

## Internal Relationships
- AWS CLI -> related_to -> iwinv S3 [INFERRED]
- AWS CLI -> related_to -> Supabase Storage [INFERRED]
- Bucket Creation -> requires -> iwinv S3 [EXTRACTED]
- Custom Node.js Migration Script -> migrates_to -> iwinv S3 [INFERRED]
- Custom Node.js Migration Script -> migrates_from -> Supabase Storage [INFERRED]
- Data Streaming -> avoids -> Supabase Storage [INFERRED]
- Pagination -> necessary_for -> Supabase Storage [EXTRACTED]
- rclone -> related_to -> iwinv S3 [EXTRACTED]
- rclone -> related_to -> Supabase Storage [EXTRACTED]
- S3 Protocol Support -> supports -> Supabase Storage [EXTRACTED]
- s3Client -> used_in -> Custom Node.js Migration Script [EXTRACTED]
- Supabase Storage -> migrates_to -> iwinv S3 [EXTRACTED]
- supabaseAdmin -> used_in -> Custom Node.js Migration Script [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Supabase Storage, iwinv S3, Custom Node.js Migration Script를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
