# FastAPI + WhisperX & Agent A
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **FastAPI + WhisperX** (path) -- 9 connections
  - -> related_to -> [[streaming-upload]]
  - -> related_to -> [[cuda-empty-cache]]
  - -> related_to -> [[pii-regex]]
  - -> related_to -> [[memory-optimization]]
  - -> related_to -> [[denoise]]
  - -> related_to -> [[remove-duplicates]]
  - -> related_to -> [[wav-file-storage]]
  - -> related_to -> [[benchmark]]
  - <- implements <- [[voice-api]]
- **Agent A** (path) -- 2 connections
  - -> assigned_to -> [[streaming-upload]]
  - <- recommends <- [[gemini-insight]]
- **Agent B** (path) -- 2 connections
  - -> assigned_to -> [[memory-optimization]]
  - <- recommends <- [[codex-insight]]
- **Memory Optimization** (path) -- 2 connections
  - <- related_to <- [[fastapi-whisperx]]
  - <- assigned_to <- [[agent-b]]
- **Streaming Upload** (path) -- 2 connections
  - <- related_to <- [[fastapi-whisperx]]
  - <- assigned_to <- [[agent-a]]
- **Benchmark** (path) -- 1 connections
  - <- related_to <- [[fastapi-whisperx]]
- **Codex Insight** (path) -- 1 connections
  - -> recommends -> [[agent-b]]
- **CUDA Empty Cache** (path) -- 1 connections
  - <- related_to <- [[fastapi-whisperx]]
- **Denoise** (path) -- 1 connections
  - <- related_to <- [[fastapi-whisperx]]
- **Gemini Insight** (path) -- 1 connections
  - -> recommends -> [[agent-a]]
- **PII Regex** (path) -- 1 connections
  - <- related_to <- [[fastapi-whisperx]]
- **Remove Duplicates** (path) -- 1 connections
  - <- related_to <- [[fastapi-whisperx]]
- **Voice API** (path) -- 1 connections
  - -> implements -> [[fastapi-whisperx]]
- **WAV File Storage** (path) -- 1 connections
  - <- related_to <- [[fastapi-whisperx]]

## Internal Relationships
- Agent A -> assigned_to -> Streaming Upload [EXTRACTED]
- Agent B -> assigned_to -> Memory Optimization [EXTRACTED]
- Codex Insight -> recommends -> Agent B [INFERRED]
- FastAPI + WhisperX -> related_to -> Streaming Upload [EXTRACTED]
- FastAPI + WhisperX -> related_to -> CUDA Empty Cache [EXTRACTED]
- FastAPI + WhisperX -> related_to -> PII Regex [EXTRACTED]
- FastAPI + WhisperX -> related_to -> Memory Optimization [EXTRACTED]
- FastAPI + WhisperX -> related_to -> Denoise [EXTRACTED]
- FastAPI + WhisperX -> related_to -> Remove Duplicates [EXTRACTED]
- FastAPI + WhisperX -> related_to -> WAV File Storage [EXTRACTED]
- FastAPI + WhisperX -> related_to -> Benchmark [EXTRACTED]
- Gemini Insight -> recommends -> Agent A [INFERRED]
- Voice API -> implements -> FastAPI + WhisperX [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 FastAPI + WhisperX, Agent A, Agent B를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
