# WhisperX STT Server & /api/v1/health
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **WhisperX STT Server** (uncounted-voice-api) -- 14 connections
  - -> implements -> [[python-312]]
  - -> implements -> [[fastapi]]
  - -> implements -> [[uvicorn]]
  - -> uses -> [[whisperx-385]]
  - -> uses -> [[pyannote]]
  - -> uses -> [[numpy]]
  - -> uses -> [[soundfile]]
  - -> uses -> [[pytest]]
  - -> related_to -> [[stt-pipeline]]
  - -> related_to -> [[pii-masking]]
  - -> provides -> [[apiv1health]]
  - -> provides -> [[apiv1transcribe]]
  - -> provides -> [[apiv1jobstaskid]]
  - -> provides -> [[apiv1jobstaskidaudiofilename]]
- **/api/v1/health** (uncounted-voice-api) -- 1 connections
  - <- provides <- [[whisperx-stt-server]]
- **/api/v1/jobs/{task_id}** (uncounted-voice-api) -- 1 connections
  - <- provides <- [[whisperx-stt-server]]
- **/api/v1/jobs/{task_id}/audio/{filename}** (uncounted-voice-api) -- 1 connections
  - <- provides <- [[whisperx-stt-server]]
- **/api/v1/transcribe** (uncounted-voice-api) -- 1 connections
  - <- provides <- [[whisperx-stt-server]]
- **FastAPI** (uncounted-voice-api) -- 1 connections
  - <- implements <- [[whisperx-stt-server]]
- **NumPy** (uncounted-voice-api) -- 1 connections
  - <- uses <- [[whisperx-stt-server]]
- **PII Masking** (uncounted-voice-api) -- 1 connections
  - <- related_to <- [[whisperx-stt-server]]
- **Pyannote** (uncounted-voice-api) -- 1 connections
  - <- uses <- [[whisperx-stt-server]]
- **Pytest** (uncounted-voice-api) -- 1 connections
  - <- uses <- [[whisperx-stt-server]]
- **Python 3.12** (uncounted-voice-api) -- 1 connections
  - <- implements <- [[whisperx-stt-server]]
- **SoundFile** (uncounted-voice-api) -- 1 connections
  - <- uses <- [[whisperx-stt-server]]
- **STT Pipeline** (uncounted-voice-api) -- 1 connections
  - <- related_to <- [[whisperx-stt-server]]
- **Uvicorn** (uncounted-voice-api) -- 1 connections
  - <- implements <- [[whisperx-stt-server]]
- **WhisperX 3.8.5** (uncounted-voice-api) -- 1 connections
  - <- uses <- [[whisperx-stt-server]]

## Internal Relationships
- WhisperX STT Server -> implements -> Python 3.12 [EXTRACTED]
- WhisperX STT Server -> implements -> FastAPI [EXTRACTED]
- WhisperX STT Server -> implements -> Uvicorn [EXTRACTED]
- WhisperX STT Server -> uses -> WhisperX 3.8.5 [EXTRACTED]
- WhisperX STT Server -> uses -> Pyannote [EXTRACTED]
- WhisperX STT Server -> uses -> NumPy [EXTRACTED]
- WhisperX STT Server -> uses -> SoundFile [EXTRACTED]
- WhisperX STT Server -> uses -> Pytest [EXTRACTED]
- WhisperX STT Server -> related_to -> STT Pipeline [INFERRED]
- WhisperX STT Server -> related_to -> PII Masking [INFERRED]
- WhisperX STT Server -> provides -> /api/v1/health [EXTRACTED]
- WhisperX STT Server -> provides -> /api/v1/transcribe [EXTRACTED]
- WhisperX STT Server -> provides -> /api/v1/jobs/{task_id} [EXTRACTED]
- WhisperX STT Server -> provides -> /api/v1/jobs/{task_id}/audio/{filename} [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 WhisperX STT Server, /api/v1/health, /api/v1/jobs/{task_id}를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 uncounted-voice-api이다.
