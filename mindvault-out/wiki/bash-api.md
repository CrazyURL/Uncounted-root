# bash & 🔌 API 엔드포인트
Cohesion: 0.31 | Nodes: 9

## Key Nodes
- **bash** (uncounted-api/README.md) -- 4 connections
  - <- has_code_example <- [[1]]
  - <- has_code_example <- [[2]]
  - <- has_code_example <- [[3]]
  - <- has_code_example <- [[storage]]
- **🔌 API 엔드포인트** (uncounted-api/README.md) -- 4 connections
  - -> contains -> [[auth]]
  - -> contains -> [[sessions]]
  - -> contains -> [[storage]]
  - <- contains <- [[uncounted-backend-api]]
- **Uncounted Backend API** (uncounted-api/README.md) -- 4 connections
  - -> contains -> [[1]]
  - -> contains -> [[2]]
  - -> contains -> [[3]]
  - -> contains -> [[api]]
- **1. 환경변수 설정** (uncounted-api/README.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[uncounted-backend-api]]
- **2. 개발 서버 실행** (uncounted-api/README.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[uncounted-backend-api]]
- **3. 빌드** (uncounted-api/README.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[uncounted-backend-api]]
- **Storage** (uncounted-api/README.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[api]]
- **Auth** (uncounted-api/README.md) -- 1 connections
  - <- contains <- [[api]]
- **Sessions** (uncounted-api/README.md) -- 1 connections
  - <- contains <- [[api]]

## Internal Relationships
- 1. 환경변수 설정 -> has_code_example -> bash [EXTRACTED]
- 2. 개발 서버 실행 -> has_code_example -> bash [EXTRACTED]
- 3. 빌드 -> has_code_example -> bash [EXTRACTED]
- 🔌 API 엔드포인트 -> contains -> Auth [EXTRACTED]
- 🔌 API 엔드포인트 -> contains -> Sessions [EXTRACTED]
- 🔌 API 엔드포인트 -> contains -> Storage [EXTRACTED]
- Storage -> has_code_example -> bash [EXTRACTED]
- Uncounted Backend API -> contains -> 1. 환경변수 설정 [EXTRACTED]
- Uncounted Backend API -> contains -> 2. 개발 서버 실행 [EXTRACTED]
- Uncounted Backend API -> contains -> 3. 빌드 [EXTRACTED]
- Uncounted Backend API -> contains -> 🔌 API 엔드포인트 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 bash, 🔌 API 엔드포인트, Uncounted Backend API를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 README.md이다.
