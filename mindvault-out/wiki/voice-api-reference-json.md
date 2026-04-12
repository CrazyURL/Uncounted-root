# Voice API Reference & json
Cohesion: 0.43 | Nodes: 7

## Key Nodes
- **Voice API Reference** (uncounted-voice-api/docs/api-reference.md) -- 4 connections
  - -> contains -> [[get-health]]
  - -> contains -> [[post-transcribe]]
  - -> contains -> [[get-jobstaskid]]
  - -> contains -> [[get-jobstaskidaudiofilename]]
- **json** (uncounted-voice-api/docs/api-reference.md) -- 3 connections
  - <- has_code_example <- [[get-health]]
  - <- has_code_example <- [[post-transcribe]]
  - <- has_code_example <- [[get-jobstaskid]]
- **POST /transcribe** (uncounted-voice-api/docs/api-reference.md) -- 3 connections
  - -> has_code_example -> [[json]]
  - -> has_code_example -> [[bash]]
  - <- contains <- [[voice-api-reference]]
- **bash** (uncounted-voice-api/docs/api-reference.md) -- 2 connections
  - <- has_code_example <- [[post-transcribe]]
  - <- has_code_example <- [[get-jobstaskidaudiofilename]]
- **GET /health** (uncounted-voice-api/docs/api-reference.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[voice-api-reference]]
- **GET /jobs/{task_id}** (uncounted-voice-api/docs/api-reference.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[voice-api-reference]]
- **GET /jobs/{task_id}/audio/{filename}** (uncounted-voice-api/docs/api-reference.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[voice-api-reference]]

## Internal Relationships
- GET /health -> has_code_example -> json [EXTRACTED]
- GET /jobs/{task_id} -> has_code_example -> json [EXTRACTED]
- GET /jobs/{task_id}/audio/{filename} -> has_code_example -> bash [EXTRACTED]
- POST /transcribe -> has_code_example -> json [EXTRACTED]
- POST /transcribe -> has_code_example -> bash [EXTRACTED]
- Voice API Reference -> contains -> GET /health [EXTRACTED]
- Voice API Reference -> contains -> POST /transcribe [EXTRACTED]
- Voice API Reference -> contains -> GET /jobs/{task_id} [EXTRACTED]
- Voice API Reference -> contains -> GET /jobs/{task_id}/audio/{filename} [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice API Reference, json, POST /transcribe를 중심으로 has_code_example 관계로 연결되어 있다. 주요 소스 파일은 api-reference.md이다.
