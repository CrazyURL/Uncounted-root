# Sessions & Users Profile
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Sessions** (path) -- 3 connections
  - -> related_to -> [[users-profile]]
  - -> references -> [[billable-units]]
  - <- related_to <- [[session-chunks]]
- **Users Profile** (path) -- 2 connections
  - <- related_to <- [[sessions]]
  - <- related_to <- [[user-asset-ledger]]
- **Billable Units** (path) -- 1 connections
  - <- references <- [[sessions]]
- **Session Chunks** (path) -- 1 connections
  - -> related_to -> [[sessions]]
- **User Asset Ledger** (path) -- 1 connections
  - -> related_to -> [[users-profile]]

## Internal Relationships
- Session Chunks -> related_to -> Sessions [EXTRACTED]
- Sessions -> related_to -> Users Profile [EXTRACTED]
- Sessions -> references -> Billable Units [EXTRACTED]
- User Asset Ledger -> related_to -> Users Profile [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Sessions, Users Profile, Billable Units를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
