# Chunked Mode & audio_preprocessor.py
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Chunked Mode** (N/A) -- 2 connections
  - <- related_to <- [[audiopreprocessorpy]]
  - <- related_to <- [[audiosplitterpy]]
- **audio_preprocessor.py** (app/services/audio_preprocessor.py) -- 1 connections
  - -> related_to -> [[chunked-mode]]
- **audio_splitter.py** (app/services/audio_splitter.py) -- 1 connections
  - -> related_to -> [[chunked-mode]]

## Internal Relationships
- audio_preprocessor.py -> related_to -> Chunked Mode [INFERRED]
- audio_splitter.py -> related_to -> Chunked Mode [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Chunked Mode, audio_preprocessor.py, audio_splitter.py를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 A, audio_preprocessor.py, audio_splitter.py이다.
