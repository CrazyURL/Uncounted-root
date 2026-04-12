# AudioMetrics & Java processAudio method
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **AudioMetrics** (path) -- 2 connections
  - <- creates <- [[java-processaudio-method]]
  - <- returns <- [[getaudiometrics-function]]
- **Java processAudio method** (path) -- 2 connections
  - -> creates -> [[audiometrics]]
  - <- uses <- [[audioanalyzerts]]
- **audioAnalyzer.ts** (path) -- 1 connections
  - -> uses -> [[java-processaudio-method]]
- **getAudioMetrics function** (path) -- 1 connections
  - -> returns -> [[audiometrics]]

## Internal Relationships
- audioAnalyzer.ts -> uses -> Java processAudio method [EXTRACTED]
- getAudioMetrics function -> returns -> AudioMetrics [EXTRACTED]
- Java processAudio method -> creates -> AudioMetrics [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 AudioMetrics, Java processAudio method, audioAnalyzer.ts를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 path이다.
