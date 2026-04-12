# Uncounted Voice API & API Endpoints
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Uncounted Voice API** (path) -- 9 connections
  - -> references -> [[whisperx]]
  - -> references -> [[fastapi]]
  - -> references -> [[python-312]]
  - -> references -> [[pyannotespeaker-diarization]]
  - -> references -> [[pii-masquing]]
  - -> related_to -> [[api-endpoints]]
  - -> references -> [[docker]]
  - -> references -> [[systemd]]
  - -> references -> [[cloudflare-tunnel]]
- **API Endpoints** (path) -- 4 connections
  - -> implements -> [[transcribe-endpoint]]
  - -> implements -> [[jobs-endpoint]]
  - -> implements -> [[health-check-endpoint]]
  - <- related_to <- [[uncounted-voice-api]]
- **Cloudflare Tunnel** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]
- **Docker** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]
- **FastAPI** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]
- **Health Check Endpoint** (path) -- 1 connections
  - <- implements <- [[api-endpoints]]
- **Jobs Endpoint** (path) -- 1 connections
  - <- implements <- [[api-endpoints]]
- **PII Masquing** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]
- **pyannote/speaker-diarization** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]
- **Python 3.12** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]
- **Systemd** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]
- **Transcribe Endpoint** (path) -- 1 connections
  - <- implements <- [[api-endpoints]]
- **WhisperX** (path) -- 1 connections
  - <- references <- [[uncounted-voice-api]]

## Internal Relationships
- API Endpoints -> implements -> Transcribe Endpoint [EXTRACTED]
- API Endpoints -> implements -> Jobs Endpoint [EXTRACTED]
- API Endpoints -> implements -> Health Check Endpoint [EXTRACTED]
- Uncounted Voice API -> references -> WhisperX [EXTRACTED]
- Uncounted Voice API -> references -> FastAPI [EXTRACTED]
- Uncounted Voice API -> references -> Python 3.12 [EXTRACTED]
- Uncounted Voice API -> references -> pyannote/speaker-diarization [EXTRACTED]
- Uncounted Voice API -> references -> PII Masquing [EXTRACTED]
- Uncounted Voice API -> related_to -> API Endpoints [EXTRACTED]
- Uncounted Voice API -> references -> Docker [EXTRACTED]
- Uncounted Voice API -> references -> Systemd [EXTRACTED]
- Uncounted Voice API -> references -> Cloudflare Tunnel [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted Voice API, API Endpoints, Cloudflare Tunnel를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
