# T1 (DB 마이그레이션) & T8 (Export API 엔드포인트)
Cohesion: 0.18 | Nodes: 13

## Key Nodes
- **T1 (DB 마이그레이션)** (Orchestration Consultation Synthesis) -- 4 connections
  - -> depends_on -> [[t2]]
  - <- depends_on <- [[t0]]
  - <- depends_on <- [[t3]]
  - <- depends_on <- [[t7-zip]]
- **T8 (Export API 엔드포인트)** (Orchestration Consultation Synthesis) -- 4 connections
  - -> depends_on -> [[t5]]
  - -> depends_on -> [[t6-bu]]
  - <- depends_on <- [[t10]]
  - <- depends_on <- [[t11-ui]]
- **T0 (라우트 분리)** (Orchestration Consultation Synthesis) -- 3 connections
  - -> depends_on -> [[t1-db]]
  - <- related_to <- [[gemini]]
  - <- related_to <- [[codex]]
- **T2 (오디오 유틸)** (Orchestration Consultation Synthesis) -- 3 connections
  - -> depends_on -> [[t4-stt]]
  - <- depends_on <- [[t1-db]]
  - <- depends_on <- [[t5]]
- **T5 (발화 재분할 엔진)** (Orchestration Consultation Synthesis) -- 3 connections
  - -> depends_on -> [[t2]]
  - -> depends_on -> [[t4-stt]]
  - <- depends_on <- [[t8-export-api]]
- **T3 (품질 분석 잡)** (Orchestration Consultation Synthesis) -- 2 connections
  - -> depends_on -> [[t1-db]]
  - <- depends_on <- [[t6-bu]]
- **T4 (STT 배치)** (Orchestration Consultation Synthesis) -- 2 connections
  - <- depends_on <- [[t2]]
  - <- depends_on <- [[t5]]
- **T6 (BU 풀링 & 랭킹 강화)** (Orchestration Consultation Synthesis) -- 2 connections
  - -> depends_on -> [[t3]]
  - <- depends_on <- [[t8-export-api]]
- **Codex** (Orchestration Consultation Synthesis) -- 1 connections
  - -> related_to -> [[t0]]
- **Gemini** (Orchestration Consultation Synthesis) -- 1 connections
  - -> related_to -> [[t0]]
- **T10 (위저드 확장)** (Orchestration Consultation Synthesis) -- 1 connections
  - -> depends_on -> [[t8-export-api]]
- **T11 (발화 검수 UI)** (Orchestration Consultation Synthesis) -- 1 connections
  - -> depends_on -> [[t8-export-api]]
- **T7 (ZIP 패키징 엔진)** (Orchestration Consultation Synthesis) -- 1 connections
  - -> depends_on -> [[t1-db]]

## Internal Relationships
- Codex -> related_to -> T0 (라우트 분리) [EXTRACTED]
- Gemini -> related_to -> T0 (라우트 분리) [EXTRACTED]
- T0 (라우트 분리) -> depends_on -> T1 (DB 마이그레이션) [EXTRACTED]
- T10 (위저드 확장) -> depends_on -> T8 (Export API 엔드포인트) [EXTRACTED]
- T11 (발화 검수 UI) -> depends_on -> T8 (Export API 엔드포인트) [EXTRACTED]
- T1 (DB 마이그레이션) -> depends_on -> T2 (오디오 유틸) [EXTRACTED]
- T2 (오디오 유틸) -> depends_on -> T4 (STT 배치) [EXTRACTED]
- T3 (품질 분석 잡) -> depends_on -> T1 (DB 마이그레이션) [EXTRACTED]
- T5 (발화 재분할 엔진) -> depends_on -> T2 (오디오 유틸) [EXTRACTED]
- T5 (발화 재분할 엔진) -> depends_on -> T4 (STT 배치) [EXTRACTED]
- T6 (BU 풀링 & 랭킹 강화) -> depends_on -> T3 (품질 분석 잡) [EXTRACTED]
- T7 (ZIP 패키징 엔진) -> depends_on -> T1 (DB 마이그레이션) [EXTRACTED]
- T8 (Export API 엔드포인트) -> depends_on -> T5 (발화 재분할 엔진) [EXTRACTED]
- T8 (Export API 엔드포인트) -> depends_on -> T6 (BU 풀링 & 랭킹 강화) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 T1 (DB 마이그레이션), T8 (Export API 엔드포인트), T0 (라우트 분리)를 중심으로 depends_on 관계로 연결되어 있다. 주요 소스 파일은 Orchestration Consultation Synthesis이다.
