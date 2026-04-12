# Agent 2 (TS Scan) & Task M1
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Agent 2 (TS Scan)** (path) -- 3 connections
  - <- implemented_by <- [[task-m1]]
  - <- implemented_by <- [[task-m2]]
  - <- implemented_by <- [[task-m23]]
- **Task M1** (path) -- 1 connections
  - -> implemented_by -> [[agent-2-ts-scan]]
- **Task M2** (path) -- 1 connections
  - -> implemented_by -> [[agent-2-ts-scan]]
- **Task M23** (path) -- 1 connections
  - -> implemented_by -> [[agent-2-ts-scan]]

## Internal Relationships
- Task M1 -> implemented_by -> Agent 2 (TS Scan) [EXTRACTED]
- Task M2 -> implemented_by -> Agent 2 (TS Scan) [EXTRACTED]
- Task M23 -> implemented_by -> Agent 2 (TS Scan) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent 2 (TS Scan), Task M1, Task M2를 중심으로 implemented_by 관계로 연결되어 있다. 주요 소스 파일은 path이다.
