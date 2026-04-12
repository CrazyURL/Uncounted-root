# Admin Routes & getMetas
Cohesion: 0.50 | Nodes: 5

## Key Nodes
- **Admin Routes** (src/routes/admin.ts) -- 3 connections
  - -> utilizes -> [[unresolvedrefunresolvedrefunresolvedrefs3utilities]]
  - -> implements -> [[getmetas]]
  - -> implements -> [[getmetasignedurl]]
- **getMetas** (src/api/admin.ts) -- 2 connections
  - <- implements <- [[admin-routes]]
  - <- calls <- [[storagemetapage]]
- **getMetaSignedUrl** (src/api/admin.ts) -- 2 connections
  - <- implements <- [[admin-routes]]
  - <- calls <- [[storagemetapage]]
- **StorageMetaPage** (src/pages/admin/StorageMetaPage.tsx) -- 2 connections
  - -> calls -> [[getmetas]]
  - -> calls -> [[getmetasignedurl]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__s3_utilities** () -- 1 connections
  - <- utilizes <- [[admin-routes]]

## Internal Relationships
- StorageMetaPage -> calls -> getMetas [INFERRED]
- StorageMetaPage -> calls -> getMetaSignedUrl [INFERRED]
- Admin Routes -> utilizes -> __unresolved__::ref::__unresolved____ref____unresolved____ref__s3_utilities [EXTRACTED]
- Admin Routes -> implements -> getMetas [EXTRACTED]
- Admin Routes -> implements -> getMetaSignedUrl [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Admin Routes, getMetas, getMetaSignedUrl를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 StorageMetaPage.tsx, admin.ts이다.
