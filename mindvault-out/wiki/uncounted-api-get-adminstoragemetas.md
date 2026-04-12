# uncounted-api & GET /admin/storage/metas
Cohesion: 0.38 | Nodes: 7

## Key Nodes
- **uncounted-api** (path) -- 4 connections
  - -> implements -> [[meta-jsonl]]
  - -> references -> [[get-adminstoragemetas]]
  - -> references -> [[post-adminstoragemetasigned-url]]
  - -> uses -> [[s3metabucket]]
- **GET /admin/storage/metas** (path) -- 3 connections
  - <- references <- [[uncounted-api]]
  - <- implements <- [[s3-utility]]
  - <- modifies <- [[admints]]
- **POST /admin/storage/meta/signed-url** (path) -- 3 connections
  - <- references <- [[uncounted-api]]
  - <- implements <- [[s3-utility]]
  - <- modifies <- [[admints]]
- **admin.ts** (path) -- 2 connections
  - -> modifies -> [[get-adminstoragemetas]]
  - -> modifies -> [[post-adminstoragemetasigned-url]]
- **S3 utility** (path) -- 2 connections
  - -> implements -> [[get-adminstoragemetas]]
  - -> implements -> [[post-adminstoragemetasigned-url]]
- **Meta JSONL** (path) -- 1 connections
  - <- implements <- [[uncounted-api]]
- **S3_META_BUCKET** (path) -- 1 connections
  - <- uses <- [[uncounted-api]]

## Internal Relationships
- admin.ts -> modifies -> GET /admin/storage/metas [EXTRACTED]
- admin.ts -> modifies -> POST /admin/storage/meta/signed-url [EXTRACTED]
- S3 utility -> implements -> GET /admin/storage/metas [EXTRACTED]
- S3 utility -> implements -> POST /admin/storage/meta/signed-url [EXTRACTED]
- uncounted-api -> implements -> Meta JSONL [EXTRACTED]
- uncounted-api -> references -> GET /admin/storage/metas [EXTRACTED]
- uncounted-api -> references -> POST /admin/storage/meta/signed-url [EXTRACTED]
- uncounted-api -> uses -> S3_META_BUCKET [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 uncounted-api, GET /admin/storage/metas, POST /admin/storage/meta/signed-url를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
