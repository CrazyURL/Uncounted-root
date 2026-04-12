# findPiiAudioIntervals & SttProcessingService
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **findPiiAudioIntervals** (SttProcessingService.java) -- 1 connections
  - <- implements <- [[sttprocessingservice]]
- **SttProcessingService** (android/app/src/main/java/com/uncounted/app/service/SttProcessingService.java) -- 1 connections
  - -> implements -> [[findpiiaudiointervals]]

## Internal Relationships
- SttProcessingService -> implements -> findPiiAudioIntervals [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 findPiiAudioIntervals, SttProcessingService를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 SttProcessingService.java이다.
