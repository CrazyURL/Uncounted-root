# 작업 분해 (Task Breakdown) & 청크 모드 WAV 미생성 버그픽스 계획
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **작업 분해 (Task Breakdown)** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 9 connections
  - -> contains -> [[t1-utterancesegmenter]]
  - -> contains -> [[t2-audiosplitter]]
  - -> contains -> [[t3-transcribechunked-wav]]
  - -> contains -> [[t4-transcribe]]
  - -> contains -> [[t5-api]]
  - -> contains -> [[t6]]
  - -> contains -> [[t7]]
  - -> contains -> [[t8]]
  - <- contains <- [[wav]]
- **청크 모드 WAV 미생성 버그픽스 계획** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 3 connections
  - -> contains -> [[a]]
  - -> contains -> [[task-breakdown]]
  - -> contains -> [[dag]]
- **채택 전략 — 옵션 A: 청크별 로컬 분리** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 2 connections
  - -> contains -> [[transcribe]]
  - <- contains <- [[wav]]
- **의존성 DAG** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[wav]]
- **T1. utterance_segmenter 청크 단위 적응** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **T2. audio_splitter에 로컬 슬라이스 헬퍼 추가** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **T3. `_transcribe_chunked` 루프에 발화 분리 + WAV 생성 통합** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **T4. `transcribe()` 상위 병합** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **T5. API 스펙/문서 업데이트** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **T6. 테스트** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **T7. 실측 검증** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **T8. 앱/어드민 클라이언트 수용 확인** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[task-breakdown]]
- **`transcribe()` 병합** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260412-121319/prompt_plan.md) -- 1 connections
  - <- contains <- [[a]]

## Internal Relationships
- 채택 전략 — 옵션 A: 청크별 로컬 분리 -> contains -> `transcribe()` 병합 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T1. utterance_segmenter 청크 단위 적응 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T2. audio_splitter에 로컬 슬라이스 헬퍼 추가 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T3. `_transcribe_chunked` 루프에 발화 분리 + WAV 생성 통합 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T4. `transcribe()` 상위 병합 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T5. API 스펙/문서 업데이트 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T6. 테스트 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T7. 실측 검증 [EXTRACTED]
- 작업 분해 (Task Breakdown) -> contains -> T8. 앱/어드민 클라이언트 수용 확인 [EXTRACTED]
- 청크 모드 WAV 미생성 버그픽스 계획 -> contains -> 채택 전략 — 옵션 A: 청크별 로컬 분리 [EXTRACTED]
- 청크 모드 WAV 미생성 버그픽스 계획 -> contains -> 작업 분해 (Task Breakdown) [EXTRACTED]
- 청크 모드 WAV 미생성 버그픽스 계획 -> contains -> 의존성 DAG [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 작업 분해 (Task Breakdown), 청크 모드 WAV 미생성 버그픽스 계획, 채택 전략 — 옵션 A: 청크별 로컬 분리를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
