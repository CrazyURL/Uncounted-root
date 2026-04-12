# Audio Chunk & Utterance Segmenter
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Audio Chunk** (Phase_4_Issue_Analysis) -- 2 connections
  - -> implements -> [[utterance-segmenter]]
  - <- references <- [[phase-4-logs]]
- **Utterance Segmenter** (Phase_4_Issue_Analysis) -- 2 connections
  - <- implements <- [[audio-chunk]]
  - <- related_to <- [[stt-n-gram]]
- **PHASE 4 Logs** (Phase_4_Issue_Analysis) -- 1 connections
  - -> references -> [[audio-chunk]]
- **STT N-gram** (Phase_4_Issue_Analysis) -- 1 connections
  - -> related_to -> [[utterance-segmenter]]

## Internal Relationships
- Audio Chunk -> implements -> Utterance Segmenter [INFERRED]
- PHASE 4 Logs -> references -> Audio Chunk [EXTRACTED]
- STT N-gram -> related_to -> Utterance Segmenter [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Audio Chunk, Utterance Segmenter, PHASE 4 Logs를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 Phase_4_Issue_Analysis이다.
