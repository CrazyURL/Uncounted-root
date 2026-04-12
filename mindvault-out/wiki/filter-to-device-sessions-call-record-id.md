# Filter To Device Sessions & Call Record ID
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Filter To Device Sessions** (src/domains/session/sessionDedup.ts) -- 4 connections
  - -> uses -> [[local-file-ids]]
  - -> filters -> [[call-record-id]]
  - -> checks -> [[uploaded-status]]
  - <- caused_by <- [[session-leak]]
- **Call Record ID** (path) -- 1 connections
  - <- filters <- [[filter-to-device-sessions]]
- **Local File IDs** (path) -- 1 connections
  - <- uses <- [[filter-to-device-sessions]]
- **Session Leak** (path) -- 1 connections
  - -> caused_by -> [[filter-to-device-sessions]]
- **Uploaded Status** (path) -- 1 connections
  - <- checks <- [[filter-to-device-sessions]]

## Internal Relationships
- Filter To Device Sessions -> uses -> Local File IDs [EXTRACTED]
- Filter To Device Sessions -> filters -> Call Record ID [EXTRACTED]
- Filter To Device Sessions -> checks -> Uploaded Status [EXTRACTED]
- Session Leak -> caused_by -> Filter To Device Sessions [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Filter To Device Sessions, Call Record ID, Local File IDs를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 path, sessionDedup.ts이다.
