# uncounted-admin & API client
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **uncounted-admin** (path) -- 2 connections
  - -> includes -> [[api-client]]
  - -> includes -> [[ui]]
- **API client** (path) -- 1 connections
  - <- includes <- [[uncounted-admin]]
- **UI** (path) -- 1 connections
  - <- includes <- [[uncounted-admin]]

## Internal Relationships
- uncounted-admin -> includes -> API client [EXTRACTED]
- uncounted-admin -> includes -> UI [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 uncounted-admin, API client, UI를 중심으로 includes 관계로 연결되어 있다. 주요 소스 파일은 path이다.
