# Compress Silence & DeepFilterNet
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Compress Silence** (app/stt_processor.py) -- 3 connections
  - -> involves -> [[memory-management]]
  - <- precedes <- [[deduplicate]]
  - <- required_for <- [[ffmpeg]]
- **DeepFilterNet** (app/stt_processor.py) -- 3 connections
  - -> avoids -> [[whisperx]]
  - -> uses -> [[file-based-ipc]]
  - <- requires <- [[gpu-inference]]
- **Memory Management** (app/services/audio_preprocessor.py) -- 3 connections
  - -> utilizes -> [[streaming-upload]]
  - -> involves -> [[ram-disk]]
  - <- involves <- [[compress-silence]]
- **Deduplicate** (app/core/job_store.py) -- 2 connections
  - -> precedes -> [[compress-silence]]
  - <- precedes <- [[denoise]]
- **Denoise** (app/services/audio_preprocessor.py) -- 2 connections
  - -> precedes -> [[deduplicate]]
  - <- precedes <- [[gain-normalize]]
- **File-based IPC** (app/core/job_store.py) -- 2 connections
  - -> facilitates -> [[gain-normalize]]
  - <- uses <- [[deepfilternet]]
- **Gain Normalize** (app/stt_processor.py) -- 2 connections
  - -> precedes -> [[denoise]]
  - <- facilitates <- [[file-based-ipc]]
- **ffmpeg** (app/core/job_store.py) -- 1 connections
  - -> required_for -> [[compress-silence]]
- **GPU Inference** (app/services/audio_preprocessor.py) -- 1 connections
  - -> requires -> [[deepfilternet]]
- **RAM Disk** (app/core/job_store.py) -- 1 connections
  - <- involves <- [[memory-management]]
- **Streaming Upload** (app/core/job_store.py) -- 1 connections
  - <- utilizes <- [[memory-management]]
- **WhisperX** (app/services/audio_preprocessor.py) -- 1 connections
  - <- avoids <- [[deepfilternet]]

## Internal Relationships
- Compress Silence -> involves -> Memory Management [INFERRED]
- Deduplicate -> precedes -> Compress Silence [EXTRACTED]
- DeepFilterNet -> avoids -> WhisperX [EXTRACTED]
- DeepFilterNet -> uses -> File-based IPC [EXTRACTED]
- Denoise -> precedes -> Deduplicate [EXTRACTED]
- ffmpeg -> required_for -> Compress Silence [EXTRACTED]
- File-based IPC -> facilitates -> Gain Normalize [INFERRED]
- Gain Normalize -> precedes -> Denoise [EXTRACTED]
- GPU Inference -> requires -> DeepFilterNet [INFERRED]
- Memory Management -> utilizes -> Streaming Upload [EXTRACTED]
- Memory Management -> involves -> RAM Disk [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Compress Silence, DeepFilterNet, Memory Management를 중심으로 precedes 관계로 연결되어 있다. 주요 소스 파일은 audio_preprocessor.py, job_store.py, stt_processor.py이다.
