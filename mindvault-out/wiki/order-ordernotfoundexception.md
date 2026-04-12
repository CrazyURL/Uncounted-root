# Order & OrderNotFoundException
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Order** (path) -- 2 connections
  - -> related_to -> [[ordernotfoundexception]]
  - <- implements <- [[ordersummary]]
- **OrderNotFoundException** (path) -- 1 connections
  - <- related_to <- [[order]]
- **OrderSummary** (path) -- 1 connections
  - -> implements -> [[order]]

## Internal Relationships
- Order -> related_to -> OrderNotFoundException [INFERRED]
- OrderSummary -> implements -> Order [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Order, OrderNotFoundException, OrderSummary를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
