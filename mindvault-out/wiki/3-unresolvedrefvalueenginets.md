# 등급 기준 3원화 불일치 & __unresolved__::ref::valueengine_ts
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **등급 기준 3원화 불일치** (uncounted-app/src/lib/audioScanner.ts) -- 3 connections
  - -> references -> [[audioscannerts]]
  - -> references -> [[admints]]
  - -> related_to -> [[unresolvedrefvalueenginets]]
- **__unresolved__::ref::valueengine_ts** () -- 1 connections
  - <- related_to <- [[3]]
- **admin.ts** (uncounted-api/) -- 1 connections
  - <- references <- [[3]]
- **audioScanner.ts** (uncounted-app/src/lib/) -- 1 connections
  - <- references <- [[3]]

## Internal Relationships
- 등급 기준 3원화 불일치 -> references -> audioScanner.ts [EXTRACTED]
- 등급 기준 3원화 불일치 -> references -> admin.ts [EXTRACTED]
- 등급 기준 3원화 불일치 -> related_to -> __unresolved__::ref::valueengine_ts [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 등급 기준 3원화 불일치, __unresolved__::ref::valueengine_ts, admin.ts를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 audioScanner.ts, lib, uncounted-api이다.
