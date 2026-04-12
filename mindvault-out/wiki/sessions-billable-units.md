# Sessions & Billable Units
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Sessions** (DB Schema Definition) -- 3 connections
  - -> related_to -> [[billable-units]]
  - <- related_to <- [[users-profile]]
  - <- related_to <- [[bu-quality-metrics]]
- **Billable Units** (DB Schema Definition) -- 1 connections
  - <- related_to <- [[sessions]]
- **BU Quality Metrics** (DB Schema Definition) -- 1 connections
  - -> related_to -> [[sessions]]
- **Users Profile** (DB Schema Definition) -- 1 connections
  - -> related_to -> [[sessions]]

## Internal Relationships
- BU Quality Metrics -> related_to -> Sessions [EXTRACTED]
- Sessions -> related_to -> Billable Units [EXTRACTED]
- Users Profile -> related_to -> Sessions [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Sessions, Billable Units, BU Quality Metrics를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 DB Schema Definition이다.
