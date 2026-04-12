# Speaker Diarizer & MFCC
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Speaker Diarizer** (android/.../SpeakerDiarizer.java) -- 4 connections
  - -> uses -> [[mfcc]]
  - -> calculates -> [[cosine-similarity]]
  - -> enables -> [[real-time-processing]]
  - <- transfers <- [[embedding-transfer]]
- **MFCC** (N/A) -- 2 connections
  - <- uses <- [[speaker-diarizer]]
  - <- extracts <- [[audio-processor]]
- **Audio Processor** (android/.../AudioProcessor.java) -- 1 connections
  - -> extracts -> [[mfcc]]
- **Cosine Similarity** (N/A) -- 1 connections
  - <- calculates <- [[speaker-diarizer]]
- **Embedding Transfer** (N/A) -- 1 connections
  - -> transfers -> [[speaker-diarizer]]
- **Real Time Processing** (N/A) -- 1 connections
  - <- enables <- [[speaker-diarizer]]

## Internal Relationships
- Audio Processor -> extracts -> MFCC [EXTRACTED]
- Embedding Transfer -> transfers -> Speaker Diarizer [INFERRED]
- Speaker Diarizer -> uses -> MFCC [EXTRACTED]
- Speaker Diarizer -> calculates -> Cosine Similarity [EXTRACTED]
- Speaker Diarizer -> enables -> Real Time Processing [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Speaker Diarizer, MFCC, Audio Processor를 중심으로 extracts 관계로 연결되어 있다. 주요 소스 파일은 A, AudioProcessor.java, SpeakerDiarizer.java이다.
