# Supabase Storage & rclone
Cohesion: 0.13 | Nodes: 16

## Key Nodes
- **Supabase Storage** (/path/to/source) -- 7 connections
  - -> migrates_to -> [[iwinv-s3]]
  - <- uses <- [[rclone]]
  - <- references <- [[audio-url]]
  - <- references <- [[storage-path]]
  - <- monitors <- [[database-integrity]]
  - <- defines <- [[supabase-endpoint]]
  - <- is_needed_for <- [[credentials-process]]
- **rclone** (/path/to/source) -- 5 connections
  - -> uses -> [[supabase-storage]]
  - -> uses -> [[iwinv-s3]]
  - <- involves <- [[migration-steps]]
  - <- specifies <- [[rclone-configuration]]
  - <- is_part_of_setup_for <- [[local-environment]]
- **Migration Steps** (/path/to/source) -- 4 connections
  - -> involves -> [[rclone]]
  - <- is_part_of <- [[cutover]]
  - <- recommended_before <- [[delta-sync]]
  - <- affects <- [[data-volume]]
- **iwinv S3** (/path/to/source) -- 3 connections
  - <- migrates_to <- [[supabase-storage]]
  - <- uses <- [[rclone]]
  - <- alternative_to <- [[aws-cli]]
- **Database Integrity** (/path/to/source) -- 2 connections
  - -> monitors -> [[supabase-storage]]
  - <- supports <- [[db-check-sql]]
- **Audio URL** (/path/to/source) -- 1 connections
  - -> references -> [[supabase-storage]]
- **AWS CLI** (/path/to/source) -- 1 connections
  - -> alternative_to -> [[iwinv-s3]]
- **Credentials Process** (/path/to/source) -- 1 connections
  - -> is_needed_for -> [[supabase-storage]]
- **Cutover** (/path/to/source) -- 1 connections
  - -> is_part_of -> [[migration-steps]]
- **Data Volume** (/path/to/source) -- 1 connections
  - -> affects -> [[migration-steps]]
- **DB Check SQL** (/path/to/source) -- 1 connections
  - -> supports -> [[database-integrity]]
- **Delta Sync** (/path/to/source) -- 1 connections
  - -> recommended_before -> [[migration-steps]]
- **Local Environment** (/path/to/source) -- 1 connections
  - -> is_part_of_setup_for -> [[rclone]]
- **rclone Configuration** (/path/to/source) -- 1 connections
  - -> specifies -> [[rclone]]
- **Storage Path** (/path/to/source) -- 1 connections
  - -> references -> [[supabase-storage]]
- **Supabase Endpoint** (/path/to/source) -- 1 connections
  - -> defines -> [[supabase-storage]]

## Internal Relationships
- Audio URL -> references -> Supabase Storage [EXTRACTED]
- AWS CLI -> alternative_to -> iwinv S3 [INFERRED]
- Credentials Process -> is_needed_for -> Supabase Storage [EXTRACTED]
- Cutover -> is_part_of -> Migration Steps [EXTRACTED]
- Data Volume -> affects -> Migration Steps [INFERRED]
- Database Integrity -> monitors -> Supabase Storage [EXTRACTED]
- DB Check SQL -> supports -> Database Integrity [EXTRACTED]
- Delta Sync -> recommended_before -> Migration Steps [EXTRACTED]
- Local Environment -> is_part_of_setup_for -> rclone [INFERRED]
- Migration Steps -> involves -> rclone [EXTRACTED]
- rclone -> uses -> Supabase Storage [EXTRACTED]
- rclone -> uses -> iwinv S3 [EXTRACTED]
- rclone Configuration -> specifies -> rclone [EXTRACTED]
- Storage Path -> references -> Supabase Storage [EXTRACTED]
- Supabase Endpoint -> defines -> Supabase Storage [EXTRACTED]
- Supabase Storage -> migrates_to -> iwinv S3 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Supabase Storage, rclone, Migration Steps를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 source이다.
