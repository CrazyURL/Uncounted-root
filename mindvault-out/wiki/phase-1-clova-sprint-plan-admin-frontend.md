# Phase 1 CLOVA Sprint Plan & Admin Frontend
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **Phase 1 CLOVA Sprint Plan** (path) -- 14 connections
  - -> references -> [[deadline]]
  - -> references -> [[completion-criteria]]
  - -> references -> [[v3-planning-changes]]
  - -> references -> [[db-migration]]
  - -> references -> [[client-app]]
  - -> references -> [[backend-api]]
  - -> references -> [[admin-frontend]]
  - -> references -> [[completed-tasks]]
  - -> references -> [[incomplete-tasks]]
  - -> references -> [[sprint-schedule]]
  - -> references -> [[dependencies]]
  - -> references -> [[risks]]
  - -> references -> [[phase-2-items]]
  - -> references -> [[dialog-intensity-column]]
- **Admin Frontend** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Backend API** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Client App** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Completed Tasks** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Completion Criteria** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **DB Migration** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Deadline** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Dependencies** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Dialog Intensity Column** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Incomplete Tasks** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Phase 2 Items** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Risks** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **Sprint Schedule** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]
- **V3 Planning Changes** (path) -- 1 connections
  - <- references <- [[phase-1-clova-sprint-plan]]

## Internal Relationships
- Phase 1 CLOVA Sprint Plan -> references -> Deadline [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Completion Criteria [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> V3 Planning Changes [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> DB Migration [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Client App [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Backend API [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Admin Frontend [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Completed Tasks [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Incomplete Tasks [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Sprint Schedule [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Dependencies [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Risks [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Phase 2 Items [EXTRACTED]
- Phase 1 CLOVA Sprint Plan -> references -> Dialog Intensity Column [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Phase 1 CLOVA Sprint Plan, Admin Frontend, Backend API를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
