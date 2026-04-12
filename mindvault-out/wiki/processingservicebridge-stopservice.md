# processingServiceBridge & stopService
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **processingServiceBridge** (uncounted-admin/src/lib/processingServiceBridge.ts) -- 2 connections
  - -> contains -> [[syncservice]]
  - -> contains -> [[stopservice]]
- **stopService** (uncounted-admin/src/lib/processingServiceBridge.ts) -- 1 connections
  - <- contains <- [[processingservicebridge]]
- **syncService** (uncounted-admin/src/lib/processingServiceBridge.ts) -- 1 connections
  - <- contains <- [[processingservicebridge]]

## Internal Relationships
- processingServiceBridge -> contains -> syncService [EXTRACTED]
- processingServiceBridge -> contains -> stopService [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 processingServiceBridge, stopService, syncService를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 processingServiceBridge.ts이다.
