# Environment Variable & Development Environment
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Environment Variable** (path) -- 2 connections
  - -> related_to -> [[development-environment]]
  - -> related_to -> [[live-environment]]
- **Development Environment** (path) -- 1 connections
  - <- related_to <- [[environment-variable]]
- **Live Environment** (path) -- 1 connections
  - <- related_to <- [[environment-variable]]

## Internal Relationships
- Environment Variable -> related_to -> Development Environment [EXTRACTED]
- Environment Variable -> related_to -> Live Environment [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Environment Variable, Development Environment, Live Environment를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
