# Persistent Server State & User ID
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **Persistent Server State** (path) -- 1 connections
  - -> related_to -> [[user-id]]
- **User ID** (path) -- 1 connections
  - <- related_to <- [[persistent-server-state]]

## Internal Relationships
- Persistent Server State -> related_to -> User ID [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Persistent Server State, User ID를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
