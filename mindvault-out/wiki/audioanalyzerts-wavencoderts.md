# audioAnalyzer.ts & wavEncoder.ts
Cohesion: 0.33 | Nodes: 7

## Key Nodes
- **audioAnalyzer.ts** (path) -- 4 connections
  - -> references -> [[web-audio-api]]
  - -> implements -> [[sha-256-hashing]]
  - -> related_to -> [[ffmpegwasm]]
  - <- related_to <- [[wavencoderts]]
- **wavEncoder.ts** (path) -- 3 connections
  - -> references -> [[web-audio-api]]
  - -> uses -> [[dataview]]
  - -> related_to -> [[audioanalyzerts]]
- **Web Audio API** (path) -- 3 connections
  - <- implements <- [[a2]]
  - <- references <- [[audioanalyzerts]]
  - <- references <- [[wavencoderts]]
- **A2. 파일 스캔 & 품질 분석** (path) -- 1 connections
  - -> implements -> [[web-audio-api]]
- **DataView** (path) -- 1 connections
  - <- uses <- [[wavencoderts]]
- **ffmpeg.wasm** (path) -- 1 connections
  - <- related_to <- [[audioanalyzerts]]
- **SHA-256 Hashing** (path) -- 1 connections
  - <- implements <- [[audioanalyzerts]]

## Internal Relationships
- A2. 파일 스캔 & 품질 분석 -> implements -> Web Audio API [EXTRACTED]
- audioAnalyzer.ts -> references -> Web Audio API [EXTRACTED]
- audioAnalyzer.ts -> implements -> SHA-256 Hashing [EXTRACTED]
- audioAnalyzer.ts -> related_to -> ffmpeg.wasm [INFERRED]
- wavEncoder.ts -> references -> Web Audio API [EXTRACTED]
- wavEncoder.ts -> uses -> DataView [EXTRACTED]
- wavEncoder.ts -> related_to -> audioAnalyzer.ts [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 audioAnalyzer.ts, wavEncoder.ts, Web Audio API를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
