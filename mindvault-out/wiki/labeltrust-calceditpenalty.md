# labelTrust & calcEditPenalty
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **labelTrust** (uncounted-app/src/lib/labelTrust.ts) -- 3 connections
  - -> contains -> [[calclatencypenalty]]
  - -> contains -> [[calcrepeatdecay]]
  - -> contains -> [[calceditpenalty]]
- **calcEditPenalty** (uncounted-app/src/lib/labelTrust.ts) -- 1 connections
  - <- contains <- [[labeltrust]]
- **calcLatencyPenalty** (uncounted-app/src/lib/labelTrust.ts) -- 1 connections
  - <- contains <- [[labeltrust]]
- **calcRepeatDecay** (uncounted-app/src/lib/labelTrust.ts) -- 1 connections
  - <- contains <- [[labeltrust]]

## Internal Relationships
- labelTrust -> contains -> calcLatencyPenalty [EXTRACTED]
- labelTrust -> contains -> calcRepeatDecay [EXTRACTED]
- labelTrust -> contains -> calcEditPenalty [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 labelTrust, calcEditPenalty, calcLatencyPenalty를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 labelTrust.ts이다.
