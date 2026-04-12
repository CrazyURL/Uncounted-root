# loadAllSessions & Phone A
Cohesion: 0.24 | Nodes: 10

## Key Nodes
- **loadAllSessions** (sessionRepository.ts) -- 4 connections
  - -> uses -> [[localstorage]]
  - -> calls -> [[filtertodevicesessions]]
  - <- related_to <- [[phone-a]]
  - <- related_to <- [[phone-b]]
- **Phone A** (path) -- 3 connections
  - -> related_to -> [[loadallsessions]]
  - <- references <- [[android-bug]]
  - <- uses <- [[authentication-mechanism]]
- **Phone B** (path) -- 3 connections
  - -> related_to -> [[loadallsessions]]
  - <- references <- [[android-bug]]
  - <- uses <- [[authentication-mechanism]]
- **Android Bug** (path) -- 2 connections
  - -> references -> [[phone-a]]
  - -> references -> [[phone-b]]
- **Authentication Mechanism** (path) -- 2 connections
  - -> uses -> [[phone-a]]
  - -> uses -> [[phone-b]]
- **AutoScanOnLaunch** (AutoScanOnLaunch.tsx) -- 2 connections
  - -> calls -> [[saveallsessions]]
  - -> interacts_with -> [[filtertodevicesessions]]
- **filterToDeviceSessions** (sessionDedup.ts) -- 2 connections
  - <- calls <- [[loadallsessions]]
  - <- interacts_with <- [[autoscanonlaunch]]
- **saveAllSessions** (sessionRepository.ts) -- 2 connections
  - -> calls -> [[makesessionid]]
  - <- calls <- [[autoscanonlaunch]]
- **localStorage** (path) -- 1 connections
  - <- uses <- [[loadallsessions]]
- **makeSessionId** (scanEngine.ts) -- 1 connections
  - <- calls <- [[saveallsessions]]

## Internal Relationships
- Android Bug -> references -> Phone A [EXTRACTED]
- Android Bug -> references -> Phone B [EXTRACTED]
- Authentication Mechanism -> uses -> Phone A [EXTRACTED]
- Authentication Mechanism -> uses -> Phone B [EXTRACTED]
- AutoScanOnLaunch -> calls -> saveAllSessions [EXTRACTED]
- AutoScanOnLaunch -> interacts_with -> filterToDeviceSessions [EXTRACTED]
- loadAllSessions -> uses -> localStorage [EXTRACTED]
- loadAllSessions -> calls -> filterToDeviceSessions [EXTRACTED]
- Phone A -> related_to -> loadAllSessions [EXTRACTED]
- Phone B -> related_to -> loadAllSessions [EXTRACTED]
- saveAllSessions -> calls -> makeSessionId [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 loadAllSessions, Phone A, Phone B를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 AutoScanOnLaunch.tsx, path, scanEngine.ts, sessionDedup.ts, sessionRepository.ts이다.
