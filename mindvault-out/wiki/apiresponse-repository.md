# ApiResponse & Repository
Cohesion: 1.00 | Nodes: 3

## Key Nodes
- **ApiResponse** (path) -- 2 connections
  - -> related_to -> [[usedebounce]]
  - -> related_to -> [[repository]]
- **Repository** (path) -- 2 connections
  - <- related_to <- [[apiresponse]]
  - <- related_to <- [[usedebounce]]
- **useDebounce** (path) -- 2 connections
  - -> related_to -> [[repository]]
  - <- related_to <- [[apiresponse]]

## Internal Relationships
- ApiResponse -> related_to -> useDebounce [EXTRACTED]
- ApiResponse -> related_to -> Repository [EXTRACTED]
- useDebounce -> related_to -> Repository [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 ApiResponse, Repository, useDebounce를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
