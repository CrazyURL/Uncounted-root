# audioAnalyzer.ts & AudioDecoderPlugin.java
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **audioAnalyzer.ts** (path) -- 2 connections
  - -> implements -> [[audioprocessorjava]]
  - -> related_to -> [[audiodecoderpluginjava]]
- **AudioDecoderPlugin.java** (path) -- 1 connections
  - <- related_to <- [[audioanalyzerts]]
- **AudioProcessor.java** (path) -- 1 connections
  - <- implements <- [[audioanalyzerts]]

## Internal Relationships
- audioAnalyzer.ts -> implements -> AudioProcessor.java [EXTRACTED]
- audioAnalyzer.ts -> related_to -> AudioDecoderPlugin.java [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 audioAnalyzer.ts, AudioDecoderPlugin.java, AudioProcessor.java를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
