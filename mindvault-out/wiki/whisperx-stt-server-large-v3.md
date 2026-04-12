# WhisperX STT Server & large-v3
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **WhisperX STT Server** (Voice API Reference) -- 3 connections
  - -> implements -> [[large-v3]]
  - -> requires -> [[nvidia-geforce-rtx-4060-ti]]
  - -> supports -> [[supported-audio-formats]]
- **large-v3** (Voice API Reference) -- 1 connections
  - <- implements <- [[whisperx-stt-server]]
- **NVIDIA GeForce RTX 4060 Ti** (Voice API Reference) -- 1 connections
  - <- requires <- [[whisperx-stt-server]]
- **Supported Audio Formats** (Voice API Reference) -- 1 connections
  - <- supports <- [[whisperx-stt-server]]

## Internal Relationships
- WhisperX STT Server -> implements -> large-v3 [EXTRACTED]
- WhisperX STT Server -> requires -> NVIDIA GeForce RTX 4060 Ti [EXTRACTED]
- WhisperX STT Server -> supports -> Supported Audio Formats [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 WhisperX STT Server, large-v3, NVIDIA GeForce RTX 4060 Ti를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 Voice API Reference이다.
