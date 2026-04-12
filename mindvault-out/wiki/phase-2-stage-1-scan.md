# Phase 2: 파이프라인 처리 & Stage 1: Scan
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Phase 2: 파이프라인 처리** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 5 connections
  - -> contains -> [[stage-1-scan]]
  - -> contains -> [[stage-2-stt]]
  - -> contains -> [[stage-3-pii]]
  - -> contains -> [[stage-4]]
  - -> contains -> [[stage-5]]
- **Stage 1: Scan** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-2]]
- **Stage 2: STT — 비동기 (파이프라인 블로킹 없음)** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-2]]
- **Stage 3: PII 감지 — 동기 블로킹** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-2]]
- **Stage 4: 자동 라벨링 — 동기 블로킹** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-2]]
- **Stage 5: 파생 메타데이터** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-2]]

## Internal Relationships
- Phase 2: 파이프라인 처리 -> contains -> Stage 1: Scan [EXTRACTED]
- Phase 2: 파이프라인 처리 -> contains -> Stage 2: STT — 비동기 (파이프라인 블로킹 없음) [EXTRACTED]
- Phase 2: 파이프라인 처리 -> contains -> Stage 3: PII 감지 — 동기 블로킹 [EXTRACTED]
- Phase 2: 파이프라인 처리 -> contains -> Stage 4: 자동 라벨링 — 동기 블로킹 [EXTRACTED]
- Phase 2: 파이프라인 처리 -> contains -> Stage 5: 파생 메타데이터 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Phase 2: 파이프라인 처리, Stage 1: Scan, Stage 2: STT — 비동기 (파이프라인 블로킹 없음)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 스캔_업로드_플로우.md이다.
