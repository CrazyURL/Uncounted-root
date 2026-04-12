# 핵심 라이브러리 모듈 (`src/lib/`) & modules
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **핵심 라이브러리 모듈 (`src/lib/`)** (uncounted-app/.claude/rules/modules.md) -- 6 connections
  - -> contains -> [[stt]]
  - -> contains -> [[srclibautolabel]]
  - -> contains -> [[pii]]
  - -> contains -> [[srclibcollectorts]]
  - -> contains -> [[api-srclibapi]]
  - <- contains <- [[modules]]
- **modules** (uncounted-app/.claude/rules/modules.md) -- 1 connections
  - -> contains -> [[srclib]]
- **API 클라이언트 (`src/lib/api/`)** (uncounted-app/.claude/rules/modules.md) -- 1 connections
  - <- contains <- [[srclib]]
- **PII + 프라이버시** (uncounted-app/.claude/rules/modules.md) -- 1 connections
  - <- contains <- [[srclib]]
- **메타데이터 컬렉터 (`src/lib/*Collector.ts`)** (uncounted-app/.claude/rules/modules.md) -- 1 connections
  - <- contains <- [[srclib]]
- **라벨링 (`src/lib/autoLabel/`)** (uncounted-app/.claude/rules/modules.md) -- 1 connections
  - <- contains <- [[srclib]]
- **STT/음성 처리** (uncounted-app/.claude/rules/modules.md) -- 1 connections
  - <- contains <- [[srclib]]

## Internal Relationships
- modules -> contains -> 핵심 라이브러리 모듈 (`src/lib/`) [EXTRACTED]
- 핵심 라이브러리 모듈 (`src/lib/`) -> contains -> STT/음성 처리 [EXTRACTED]
- 핵심 라이브러리 모듈 (`src/lib/`) -> contains -> 라벨링 (`src/lib/autoLabel/`) [EXTRACTED]
- 핵심 라이브러리 모듈 (`src/lib/`) -> contains -> PII + 프라이버시 [EXTRACTED]
- 핵심 라이브러리 모듈 (`src/lib/`) -> contains -> 메타데이터 컬렉터 (`src/lib/*Collector.ts`) [EXTRACTED]
- 핵심 라이브러리 모듈 (`src/lib/`) -> contains -> API 클라이언트 (`src/lib/api/`) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 핵심 라이브러리 모듈 (`src/lib/`), modules, API 클라이언트 (`src/lib/api/`)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 modules.md이다.
