# Voice API & FastAPI
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Voice API** (prompt_plan.md) -- 5 connections
  - -> implements -> [[fastapi]]
  - -> implements -> [[whisperx-stt]]
  - -> runs_on -> [[wsl-server]]
  - -> uses -> [[uvicorn-worker]]
  - -> utilizes -> [[nvidia-gpu]]
- **FastAPI** (prompt_plan.md) -- 1 connections
  - <- implements <- [[voice-api]]
- **NVIDIA GPU** (prompt_plan.md) -- 1 connections
  - <- utilizes <- [[voice-api]]
- **Uvicorn Worker** (prompt_plan.md) -- 1 connections
  - <- uses <- [[voice-api]]
- **WhisperX STT** (prompt_plan.md) -- 1 connections
  - <- implements <- [[voice-api]]
- **WSL Server** (prompt_plan.md) -- 1 connections
  - <- runs_on <- [[voice-api]]

## Internal Relationships
- Voice API -> implements -> FastAPI [EXTRACTED]
- Voice API -> implements -> WhisperX STT [EXTRACTED]
- Voice API -> runs_on -> WSL Server [EXTRACTED]
- Voice API -> uses -> Uvicorn Worker [EXTRACTED]
- Voice API -> utilizes -> NVIDIA GPU [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice API, FastAPI, NVIDIA GPU를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
