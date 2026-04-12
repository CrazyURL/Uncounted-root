# filterToDeviceSessions & loadAllSessions
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **filterToDeviceSessions** (src/domains/session/sessionRepository.ts) -- 4 connections
  - -> related_to -> [[loadallsessions]]
  - <- related_to <- [[autoscanonlaunch]]
  - <- references <- [[sessiondedup]]
  - <- related_to <- [[uncounteddeviceinstallid]]
- **loadAllSessions** (src/domains/session/sessionRepository.ts) -- 2 connections
  - -> references -> [[homepage]]
  - <- related_to <- [[filtertodevicesessions]]
- **AutoScanOnLaunch** (src/app/bootstrap/AutoScanOnLaunch.tsx) -- 1 connections
  - -> related_to -> [[filtertodevicesessions]]
- **HomePage** (src/pages/HomePage.tsx) -- 1 connections
  - <- references <- [[loadallsessions]]
- **sessionDedup** (src/domains/session/sessionDedup.ts) -- 1 connections
  - -> references -> [[filtertodevicesessions]]
- **uncounted_device_install_id** (src/lib/resetAll.ts) -- 1 connections
  - -> related_to -> [[filtertodevicesessions]]

## Internal Relationships
- AutoScanOnLaunch -> related_to -> filterToDeviceSessions [INFERRED]
- filterToDeviceSessions -> related_to -> loadAllSessions [EXTRACTED]
- loadAllSessions -> references -> HomePage [EXTRACTED]
- sessionDedup -> references -> filterToDeviceSessions [EXTRACTED]
- uncounted_device_install_id -> related_to -> filterToDeviceSessions [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 filterToDeviceSessions, loadAllSessions, AutoScanOnLaunch를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 AutoScanOnLaunch.tsx, HomePage.tsx, resetAll.ts, sessionDedup.ts, sessionRepository.ts이다.
