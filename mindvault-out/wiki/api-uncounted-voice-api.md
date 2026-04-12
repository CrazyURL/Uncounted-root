# API 엔드포인트 & uncounted-voice-api
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **API 엔드포인트** (uncounted-voice-api/README.md) -- 4 connections
  - -> contains -> [[post-apiv1transcribe]]
  - -> contains -> [[get-apiv1jobstaskid]]
  - -> contains -> [[get-apiv1health]]
  - <- contains <- [[uncounted-voice-api]]
- **uncounted-voice-api** (uncounted-voice-api/README.md) -- 4 connections
  - -> contains -> [[systemd]]
  - -> contains -> [[cloudflare-tunnel]]
  - -> contains -> [[api]]
  - -> contains -> [[docker]]
- **Cloudflare Tunnel (외부 공개)** (uncounted-voice-api/README.md) -- 1 connections
  - <- contains <- [[uncounted-voice-api]]
- **Docker** (uncounted-voice-api/README.md) -- 1 connections
  - <- contains <- [[uncounted-voice-api]]
- **GET /api/v1/health** (uncounted-voice-api/README.md) -- 1 connections
  - <- contains <- [[api]]
- **GET /api/v1/jobs/{task_id}** (uncounted-voice-api/README.md) -- 1 connections
  - <- contains <- [[api]]
- **POST /api/v1/transcribe** (uncounted-voice-api/README.md) -- 1 connections
  - <- contains <- [[api]]
- **systemd 서비스** (uncounted-voice-api/README.md) -- 1 connections
  - <- contains <- [[uncounted-voice-api]]

## Internal Relationships
- API 엔드포인트 -> contains -> POST /api/v1/transcribe [EXTRACTED]
- API 엔드포인트 -> contains -> GET /api/v1/jobs/{task_id} [EXTRACTED]
- API 엔드포인트 -> contains -> GET /api/v1/health [EXTRACTED]
- uncounted-voice-api -> contains -> systemd 서비스 [EXTRACTED]
- uncounted-voice-api -> contains -> Cloudflare Tunnel (외부 공개) [EXTRACTED]
- uncounted-voice-api -> contains -> API 엔드포인트 [EXTRACTED]
- uncounted-voice-api -> contains -> Docker [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 API 엔드포인트, uncounted-voice-api, Cloudflare Tunnel (외부 공개)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 README.md이다.
