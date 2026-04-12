# Session & loadAllSessions Function
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Session** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260322-165054-multi-device-session-sync-bug/codex.md) -- 5 connections
  - <- filters <- [[filtertodevicesessions-function]]
  - <- returns <- [[loadsessionsfromls-function]]
  - <- returns <- [[loadsessionsfromapi-function]]
  - <- saves <- [[saveallsessions-function]]
  - <- references <- [[uncounteddeviceinstallid]]
- **loadAllSessions Function** (src/domains/session/sessionRepository.ts) -- 4 connections
  - -> implements -> [[session-repository]]
  - -> calls -> [[saveallsessions-function]]
  - -> related_to -> [[autoscancomplete-event]]
  - <- calls <- [[autoscanonlaunch-component]]
- **filterToDeviceSessions Function** (src/domains/session/sessionDedup.ts) -- 3 connections
  - -> uses -> [[localfileids-variable]]
  - -> filters -> [[session]]
  - <- related_to <- [[cleanupstalesessions-function]]
- **autoscan:complete Event** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260322-165054-multi-device-session-sync-bug/codex.md) -- 2 connections
  - <- references <- [[homepage-component]]
  - <- related_to <- [[loadallsessions-function]]
- **saveAllSessions Function** (src/domains/session/sessionRepository.ts) -- 2 connections
  - -> saves -> [[session]]
  - <- calls <- [[loadallsessions-function]]
- **AutoScanOnLaunch Component** (src/app/bootstrap/AutoScanOnLaunch.tsx) -- 1 connections
  - -> calls -> [[loadallsessions-function]]
- **cleanupStaleSessions Function** (src/domains/session/sessionRepository.ts) -- 1 connections
  - -> related_to -> [[filtertodevicesessions-function]]
- **HomePage Component** (src/pages/HomePage.tsx) -- 1 connections
  - -> references -> [[autoscancomplete-event]]
- **loadSessionsFromApi Function** (src/domains/session/sessionRepository.ts) -- 1 connections
  - -> returns -> [[session]]
- **loadSessionsFromLS Function** (src/domains/session/sessionRepository.ts) -- 1 connections
  - -> returns -> [[session]]
- **localFileIds Variable** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260322-165054-multi-device-session-sync-bug/codex.md) -- 1 connections
  - <- uses <- [[filtertodevicesessions-function]]
- **Session Repository** (src/domains/session/sessionRepository.ts) -- 1 connections
  - <- implements <- [[loadallsessions-function]]
- **uncounted_device_install_id** (src/domains/session/sessionRepository.ts) -- 1 connections
  - -> references -> [[session]]

## Internal Relationships
- AutoScanOnLaunch Component -> calls -> loadAllSessions Function [EXTRACTED]
- cleanupStaleSessions Function -> related_to -> filterToDeviceSessions Function [INFERRED]
- filterToDeviceSessions Function -> uses -> localFileIds Variable [EXTRACTED]
- filterToDeviceSessions Function -> filters -> Session [EXTRACTED]
- HomePage Component -> references -> autoscan:complete Event [EXTRACTED]
- loadAllSessions Function -> implements -> Session Repository [EXTRACTED]
- loadAllSessions Function -> calls -> saveAllSessions Function [EXTRACTED]
- loadAllSessions Function -> related_to -> autoscan:complete Event [INFERRED]
- loadSessionsFromApi Function -> returns -> Session [EXTRACTED]
- loadSessionsFromLS Function -> returns -> Session [EXTRACTED]
- saveAllSessions Function -> saves -> Session [EXTRACTED]
- uncounted_device_install_id -> references -> Session [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Session, loadAllSessions Function, filterToDeviceSessions Function를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 AutoScanOnLaunch.tsx, HomePage.tsx, codex.md, sessionDedup.ts, sessionRepository.ts이다.
