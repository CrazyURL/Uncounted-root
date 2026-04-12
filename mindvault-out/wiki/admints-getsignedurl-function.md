# admin.ts & getSignedUrl Function
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **admin.ts** (src/routes/admin.ts) -- 2 connections
  - -> references -> [[getsignedurl-function]]
  - -> references -> [[openapi-definition]]
- **getSignedUrl Function** (src/lib/s3.ts) -- 2 connections
  - <- implements <- [[s3-meta-bucket]]
  - <- references <- [[admints]]
- **OpenAPI Definition** (src/openapi.ts) -- 1 connections
  - <- references <- [[admints]]
- **S3 Meta Bucket** (src/lib/s3.ts) -- 1 connections
  - -> implements -> [[getsignedurl-function]]

## Internal Relationships
- admin.ts -> references -> getSignedUrl Function [EXTRACTED]
- admin.ts -> references -> OpenAPI Definition [EXTRACTED]
- S3 Meta Bucket -> implements -> getSignedUrl Function [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 admin.ts, getSignedUrl Function, OpenAPI Definition를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 admin.ts, openapi.ts, s3.ts이다.
