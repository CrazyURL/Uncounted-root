# sanitizeAudio function & __unresolved__::ref::processedpath
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **sanitizeAudio function** (path) -- 2 connections
  - -> returns -> [[unresolvedrefprocessedpath]]
  - <- calls <- [[audioscannerts]]
- **__unresolved__::ref::processedpath** () -- 1 connections
  - <- returns <- [[sanitizeaudio-function]]
- **audioScanner.ts** (path) -- 1 connections
  - -> calls -> [[sanitizeaudio-function]]

## Internal Relationships
- audioScanner.ts -> calls -> sanitizeAudio function [EXTRACTED]
- sanitizeAudio function -> returns -> __unresolved__::ref::processedpath [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 sanitizeAudio function, __unresolved__::ref::processedpath, audioScanner.ts를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 path이다.
