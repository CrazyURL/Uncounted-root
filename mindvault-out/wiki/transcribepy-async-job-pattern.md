# transcribe.py & Async Job Pattern
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **transcribe.py** (app/routers/transcribe.py) -- 2 connections
  - -> implements -> [[async-job-pattern]]
  - <- related_to <- [[audio-file-storage]]
- **Async Job Pattern** (N/A) -- 1 connections
  - <- implements <- [[transcribepy]]
- **Audio File Storage** (N/A) -- 1 connections
  - -> related_to -> [[transcribepy]]

## Internal Relationships
- Audio File Storage -> related_to -> transcribe.py [INFERRED]
- transcribe.py -> implements -> Async Job Pattern [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 transcribe.py, Async Job Pattern, Audio File Storage를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 A, transcribe.py이다.
