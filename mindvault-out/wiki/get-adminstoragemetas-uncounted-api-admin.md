# GET /admin/storage/metas & uncounted-api admin
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **GET /admin/storage/metas** (src/routes/admin.ts) -- 4 connections
  - <- implements <- [[uncounted-api-admin]]
  - <- related_to <- [[s3-utility-functions]]
  - <- references <- [[openapi-specification]]
  - <- related_to <- [[admin-meta-storage-page]]
- **uncounted-api admin** (path) -- 2 connections
  - -> implements -> [[get-adminstoragemetas]]
  - -> implements -> [[post-adminstoragemetasigned-url]]
- **Admin Meta Storage Page** (AdminMetaStoragePage.tsx) -- 1 connections
  - -> related_to -> [[get-adminstoragemetas]]
- **OpenAPI Specification** (src/openapi.ts) -- 1 connections
  - -> references -> [[get-adminstoragemetas]]
- **POST /admin/storage/meta/signed-url** (src/routes/admin.ts) -- 1 connections
  - <- implements <- [[uncounted-api-admin]]
- **S3 Utility Functions** (path) -- 1 connections
  - -> related_to -> [[get-adminstoragemetas]]

## Internal Relationships
- Admin Meta Storage Page -> related_to -> GET /admin/storage/metas [INFERRED]
- OpenAPI Specification -> references -> GET /admin/storage/metas [EXTRACTED]
- S3 Utility Functions -> related_to -> GET /admin/storage/metas [EXTRACTED]
- uncounted-api admin -> implements -> GET /admin/storage/metas [EXTRACTED]
- uncounted-api admin -> implements -> POST /admin/storage/meta/signed-url [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 GET /admin/storage/metas, uncounted-api admin, Admin Meta Storage Page를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 AdminMetaStoragePage.tsx, admin.ts, openapi.ts, path이다.
