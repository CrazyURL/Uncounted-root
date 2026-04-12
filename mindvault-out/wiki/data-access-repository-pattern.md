# Data Access & Repository Pattern
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **Data Access** (path) -- 1 connections
  - <- references <- [[repository-pattern]]
- **Repository Pattern** (path) -- 1 connections
  - -> references -> [[data-access]]

## Internal Relationships
- Repository Pattern -> references -> Data Access [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Data Access, Repository Pattern를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
