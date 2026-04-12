# Race Condition & Auto Scan On Launch
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Race Condition** (path) -- 3 connections
  - -> involves -> [[home-page]]
  - -> involves -> [[auto-scan-on-launch]]
  - <- explains <- [[multi-device-session-sync-bug]]
- **Auto Scan On Launch** (src/app/bootstrap/AutoScanOnLaunch.tsx) -- 1 connections
  - <- involves <- [[race-condition]]
- **Home Page** (src/pages/HomePage.tsx) -- 1 connections
  - <- involves <- [[race-condition]]
- **Multi-Device Session Sync Bug** (path) -- 1 connections
  - -> explains -> [[race-condition]]

## Internal Relationships
- Multi-Device Session Sync Bug -> explains -> Race Condition [EXTRACTED]
- Race Condition -> involves -> Home Page [EXTRACTED]
- Race Condition -> involves -> Auto Scan On Launch [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Race Condition, Auto Scan On Launch, Home Page를 중심으로 involves 관계로 연결되어 있다. 주요 소스 파일은 AutoScanOnLaunch.tsx, HomePage.tsx, path이다.
