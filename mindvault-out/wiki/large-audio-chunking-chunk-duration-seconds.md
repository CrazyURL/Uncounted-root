# Large Audio Chunking & Chunk Duration Seconds
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Large Audio Chunking** (path) -- 2 connections
  - -> references -> [[chunk-threshold-seconds]]
  - -> references -> [[chunk-duration-seconds]]
- **Chunk Duration Seconds** (path) -- 1 connections
  - <- references <- [[large-audio-chunking]]
- **Chunk Threshold Seconds** (path) -- 1 connections
  - <- references <- [[large-audio-chunking]]

## Internal Relationships
- Large Audio Chunking -> references -> Chunk Threshold Seconds [EXTRACTED]
- Large Audio Chunking -> references -> Chunk Duration Seconds [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Large Audio Chunking, Chunk Duration Seconds, Chunk Threshold Seconds를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
