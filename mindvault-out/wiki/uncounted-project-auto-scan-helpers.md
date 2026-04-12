# uncounted Project & Auto Scan Helpers
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **uncounted Project** (path) -- 5 connections
  - -> implements -> [[ts-scan-engine]]
  - -> implements -> [[auto-scan-helpers]]
  - -> implements -> [[ts-audio-logic]]
  - -> implements -> [[java-audio-processing]]
  - -> implements -> [[java-audio-stability]]
- **Auto Scan Helpers** (uncounted-app/src/scan/autoScanHelpers.ts) -- 1 connections
  - <- implements <- [[uncounted-project]]
- **Java Audio Processing** (uncounted-api/src/main/java/.../AudioDecoderPlugin.java) -- 1 connections
  - <- implements <- [[uncounted-project]]
- **Java Audio Stability** (uncounted-api/src/main/java/.../MfccExtractor.java) -- 1 connections
  - <- implements <- [[uncounted-project]]
- **TS Audio Logic** (uncounted-app/src/audio/audioScanner.ts) -- 1 connections
  - <- implements <- [[uncounted-project]]
- **TS Scan Engine** (uncounted-app/src/scan/scanEngine.ts) -- 1 connections
  - <- implements <- [[uncounted-project]]

## Internal Relationships
- uncounted Project -> implements -> TS Scan Engine [EXTRACTED]
- uncounted Project -> implements -> Auto Scan Helpers [EXTRACTED]
- uncounted Project -> implements -> TS Audio Logic [EXTRACTED]
- uncounted Project -> implements -> Java Audio Processing [EXTRACTED]
- uncounted Project -> implements -> Java Audio Stability [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 uncounted Project, Auto Scan Helpers, Java Audio Processing를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 AudioDecoderPlugin.java, MfccExtractor.java, audioScanner.ts, autoScanHelpers.ts, path이다.
