# downloadMetaJsonlFromStorage Function & __unresolved__::ref::getadminmetasignedurlapi
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **downloadMetaJsonlFromStorage Function** (uncounted-admin/src/lib/adminHelpers.ts) -- 2 connections
  - -> related_to -> [[unresolvedrefgetadminmetasignedurlapi]]
  - <- uses <- [[admin-session-list-page]]
- **__unresolved__::ref::getadminmetasignedurlapi** () -- 1 connections
  - <- related_to <- [[downloadmetajsonlfromstorage-function]]
- **Admin Session List Page** (uncounted-admin/src/pages/admin/AdminSessionListPage.tsx) -- 1 connections
  - -> uses -> [[downloadmetajsonlfromstorage-function]]

## Internal Relationships
- Admin Session List Page -> uses -> downloadMetaJsonlFromStorage Function [INFERRED]
- downloadMetaJsonlFromStorage Function -> related_to -> __unresolved__::ref::getadminmetasignedurlapi [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 downloadMetaJsonlFromStorage Function, __unresolved__::ref::getadminmetasignedurlapi, Admin Session List Page를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 AdminSessionListPage.tsx, adminHelpers.ts이다.
