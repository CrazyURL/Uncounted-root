# 백엔드 API 구조 & Admin API `/api/admin`
Cohesion: 0.15 | Nodes: 15

## Key Nodes
- **백엔드 API 구조** (uncounted-docs/백앤드/BACKEND_API.md) -- 15 connections
  - -> has_code_example -> [[json]]
  - -> has_code_example -> [[bash]]
  - -> contains -> [[api]]
  - -> contains -> [[root]]
  - -> contains -> [[auth-api-apiauth]]
  - -> contains -> [[sessions-api-apisessions]]
  - -> contains -> [[session-chunks-api-apisession-chunks]]
  - -> contains -> [[storage-api-apistorage]]
  - -> contains -> [[user-api-apiuser]]
  - -> contains -> [[transcripts-api-apitranscripts]]
  - -> contains -> [[transcript-chunks-api-apitranscript-chunks]]
  - -> contains -> [[upload-api-apiupload]]
  - -> contains -> [[logging-api-apilogging]]
  - -> contains -> [[admin-api-apiadmin]]
  - <- contains <- [[api]]
- **Admin API `/api/admin`** (uncounted-docs/백앤드/BACKEND_API.md) -- 3 connections
  - -> has_code_example -> [[bash]]
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[api]]
- **bash** (uncounted-docs/백앤드/BACKEND_API.md) -- 2 connections
  - <- has_code_example <- [[api]]
  - <- has_code_example <- [[admin-api-apiadmin]]
- **json** (uncounted-docs/백앤드/BACKEND_API.md) -- 2 connections
  - <- has_code_example <- [[api]]
  - <- has_code_example <- [[user-api-apiuser]]
- **User API `/api/user`** (uncounted-docs/백앤드/BACKEND_API.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[api]]
- **typescript** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- has_code_example <- [[admin-api-apiadmin]]
- **Auth API `/api/auth`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Logging API `/api/logging`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Root** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Session Chunks API `/api/session-chunks`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Sessions API `/api/sessions`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Storage API `/api/storage`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Transcript Chunks API `/api/transcript-chunks`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Transcripts API `/api/transcripts`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]
- **Upload API `/api/upload`** (uncounted-docs/백앤드/BACKEND_API.md) -- 1 connections
  - <- contains <- [[api]]

## Internal Relationships
- Admin API `/api/admin` -> has_code_example -> bash [EXTRACTED]
- Admin API `/api/admin` -> has_code_example -> typescript [EXTRACTED]
- 백엔드 API 구조 -> has_code_example -> json [EXTRACTED]
- 백엔드 API 구조 -> has_code_example -> bash [EXTRACTED]
- 백엔드 API 구조 -> contains -> 백엔드 API 구조 [EXTRACTED]
- 백엔드 API 구조 -> contains -> Root [EXTRACTED]
- 백엔드 API 구조 -> contains -> Auth API `/api/auth` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Sessions API `/api/sessions` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Session Chunks API `/api/session-chunks` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Storage API `/api/storage` [EXTRACTED]
- 백엔드 API 구조 -> contains -> User API `/api/user` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Transcripts API `/api/transcripts` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Transcript Chunks API `/api/transcript-chunks` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Upload API `/api/upload` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Logging API `/api/logging` [EXTRACTED]
- 백엔드 API 구조 -> contains -> Admin API `/api/admin` [EXTRACTED]
- User API `/api/user` -> has_code_example -> json [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 백엔드 API 구조, Admin API `/api/admin`, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 BACKEND_API.md이다.
