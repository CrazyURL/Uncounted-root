# listObjects Function & S3 Audio Bucket
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **listObjects Function** (src/lib/s3.ts) -- 1 connections
  - <- implements <- [[s3-audio-bucket]]
- **S3 Audio Bucket** (src/lib/s3.ts) -- 1 connections
  - -> implements -> [[listobjects-function]]

## Internal Relationships
- S3 Audio Bucket -> implements -> listObjects Function [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 listObjects Function, S3 Audio Bucket를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 s3.ts이다.
