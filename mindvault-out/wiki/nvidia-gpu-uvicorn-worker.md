# NVIDIA GPU & Uvicorn Worker
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **NVIDIA GPU** (path) -- 2 connections
  - -> implements -> [[gpu-model]]
  - <- references <- [[uvicorn-worker]]
- **Uvicorn Worker** (path) -- 2 connections
  - -> references -> [[nvidia-gpu]]
  - <- related_to <- [[voice-api]]
- **Voice API** (path) -- 2 connections
  - -> related_to -> [[wsl-environment]]
  - -> related_to -> [[uvicorn-worker]]
- **GPU Model** (path) -- 1 connections
  - <- implements <- [[nvidia-gpu]]
- **WSL Environment** (path) -- 1 connections
  - <- related_to <- [[voice-api]]

## Internal Relationships
- NVIDIA GPU -> implements -> GPU Model [EXTRACTED]
- Uvicorn Worker -> references -> NVIDIA GPU [EXTRACTED]
- Voice API -> related_to -> WSL Environment [EXTRACTED]
- Voice API -> related_to -> Uvicorn Worker [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 NVIDIA GPU, Uvicorn Worker, Voice API를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
