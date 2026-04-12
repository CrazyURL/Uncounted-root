# App.tsx & src/lib/
Cohesion: 0.12 | Nodes: 16

## Key Nodes
- **App.tsx** (src/app/App.tsx) -- 6 connections
  - -> references -> [[custom-hook]]
  - -> related_to -> [[unified-storage-service]]
  - -> related_to -> [[collector-manager]]
  - -> related_to -> [[device-service]]
  - -> related_to -> [[apifetch]]
  - <- references <- [[uncounted-project]]
- **src/lib/** (src/lib/) -- 6 connections
  - -> references -> [[localstorage]]
  - -> references -> [[collector]]
  - -> references -> [[api]]
  - -> references -> [[service]]
  - -> related_to -> [[unit-testing]]
  - <- related_to <- [[uncounted-project]]
- **Uncounted Project** (summary) -- 5 connections
  - -> implements -> [[capacitor]]
  - -> implements -> [[react]]
  - -> implements -> [[typescript]]
  - -> references -> [[apptsx]]
  - -> related_to -> [[srclib]]
- **API** (key_findings) -- 1 connections
  - <- references <- [[srclib]]
- **apiFetch** (refactoring_plan) -- 1 connections
  - <- related_to <- [[apptsx]]
- **Capacitor** (summary) -- 1 connections
  - <- implements <- [[uncounted-project]]
- **Collector** (key_findings) -- 1 connections
  - <- references <- [[srclib]]
- **Collector Manager** (refactoring_plan) -- 1 connections
  - <- related_to <- [[apptsx]]
- **Custom Hook** (refactoring_plan) -- 1 connections
  - <- references <- [[apptsx]]
- **Device Service** (refactoring_plan) -- 1 connections
  - <- related_to <- [[apptsx]]
- **localStorage** (key_findings) -- 1 connections
  - <- references <- [[srclib]]
- **React** (summary) -- 1 connections
  - <- implements <- [[uncounted-project]]
- **Service** (key_findings) -- 1 connections
  - <- references <- [[srclib]]
- **TypeScript** (summary) -- 1 connections
  - <- implements <- [[uncounted-project]]
- **Unified Storage Service** (refactoring_plan) -- 1 connections
  - <- related_to <- [[apptsx]]
- **Unit Testing** (refactoring_plan) -- 1 connections
  - <- related_to <- [[srclib]]

## Internal Relationships
- App.tsx -> references -> Custom Hook [INFERRED]
- App.tsx -> related_to -> Unified Storage Service [INFERRED]
- App.tsx -> related_to -> Collector Manager [INFERRED]
- App.tsx -> related_to -> Device Service [INFERRED]
- App.tsx -> related_to -> apiFetch [INFERRED]
- src/lib/ -> references -> localStorage [EXTRACTED]
- src/lib/ -> references -> Collector [EXTRACTED]
- src/lib/ -> references -> API [EXTRACTED]
- src/lib/ -> references -> Service [EXTRACTED]
- src/lib/ -> related_to -> Unit Testing [INFERRED]
- Uncounted Project -> implements -> Capacitor [EXTRACTED]
- Uncounted Project -> implements -> React [EXTRACTED]
- Uncounted Project -> implements -> TypeScript [EXTRACTED]
- Uncounted Project -> references -> App.tsx [EXTRACTED]
- Uncounted Project -> related_to -> src/lib/ [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 App.tsx, src/lib/, Uncounted Project를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 App.tsx, key_findings, lib, refactoring_plan, summary이다.
