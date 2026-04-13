# STT Pipeline Architecture & stt-pipeline
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **STT Pipeline Architecture** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 10 connections
  - -> contains -> [[processing-flow]]
  - -> contains -> [[key-components]]
  - -> contains -> [[gpu-singleton-pattern]]
  - -> contains -> [[chunked-mode-large-audio]]
  - -> contains -> [[async-job-pattern]]
  - -> contains -> [[audio-file-storage]]
  - -> contains -> [[chunked-mode-large-audio]]
  - -> contains -> [[queue-backpressure-503]]
  - -> contains -> [[test-environment]]
  - <- contains <- [[stt-pipeline]]
- **stt-pipeline** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - -> contains -> [[stt-pipeline-architecture]]
- **Async Job Pattern** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **Audio File Storage** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **Chunked Mode (Large Audio)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **Chunked Mode (Large Audio)** (uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **GPU Singleton Pattern** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **Key Components** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **Processing Flow** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **Queue Backpressure (503)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]
- **Test Environment** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/stt-pipeline.md) -- 1 connections
  - <- contains <- [[stt-pipeline-architecture]]

## Internal Relationships
- stt-pipeline -> contains -> STT Pipeline Architecture [EXTRACTED]
- STT Pipeline Architecture -> contains -> Processing Flow [EXTRACTED]
- STT Pipeline Architecture -> contains -> Key Components [EXTRACTED]
- STT Pipeline Architecture -> contains -> GPU Singleton Pattern [EXTRACTED]
- STT Pipeline Architecture -> contains -> Chunked Mode (Large Audio) [EXTRACTED]
- STT Pipeline Architecture -> contains -> Async Job Pattern [EXTRACTED]
- STT Pipeline Architecture -> contains -> Audio File Storage [EXTRACTED]
- STT Pipeline Architecture -> contains -> Chunked Mode (Large Audio) [EXTRACTED]
- STT Pipeline Architecture -> contains -> Queue Backpressure (503) [EXTRACTED]
- STT Pipeline Architecture -> contains -> Test Environment [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 STT Pipeline Architecture, stt-pipeline, Async Job Pattern를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 stt-pipeline.md이다.
