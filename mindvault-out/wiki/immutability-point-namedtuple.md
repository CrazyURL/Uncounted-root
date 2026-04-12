# Immutability & Point NamedTuple
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Immutability** (path) -- 2 connections
  - -> related_to -> [[user-data-class]]
  - -> related_to -> [[point-namedtuple]]
- **Point NamedTuple** (path) -- 1 connections
  - <- related_to <- [[immutability]]
- **User Data Class** (path) -- 1 connections
  - <- related_to <- [[immutability]]

## Internal Relationships
- Immutability -> related_to -> User Data Class [INFERRED]
- Immutability -> related_to -> Point NamedTuple [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Immutability, Point NamedTuple, User Data Class를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
