# Audio Decoder Plugin & CWE-209
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Audio Decoder Plugin** (path) -- 6 connections
  - -> references -> [[cwe-22]]
  - -> references -> [[cwe-400]]
  - -> references -> [[cwe-209]]
  - <- related_to <- [[cwe-22]]
  - <- related_to <- [[cwe-400]]
  - <- related_to <- [[cwe-209]]
- **CWE-209** (path) -- 2 connections
  - -> related_to -> [[audio-decoder-plugin]]
  - <- references <- [[audio-decoder-plugin]]
- **CWE-22** (path) -- 2 connections
  - -> related_to -> [[audio-decoder-plugin]]
  - <- references <- [[audio-decoder-plugin]]
- **CWE-400** (path) -- 2 connections
  - -> related_to -> [[audio-decoder-plugin]]
  - <- references <- [[audio-decoder-plugin]]

## Internal Relationships
- Audio Decoder Plugin -> references -> CWE-22 [EXTRACTED]
- Audio Decoder Plugin -> references -> CWE-400 [EXTRACTED]
- Audio Decoder Plugin -> references -> CWE-209 [EXTRACTED]
- CWE-209 -> related_to -> Audio Decoder Plugin [INFERRED]
- CWE-22 -> related_to -> Audio Decoder Plugin [INFERRED]
- CWE-400 -> related_to -> Audio Decoder Plugin [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Audio Decoder Plugin, CWE-209, CWE-22를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
