# QueueItem 구조 & ts
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **QueueItem 구조** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 2 connections
  - -> has_code_example -> [[ts]]
  - <- contains <- [[phase-3]]
- **ts** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- has_code_example <- [[queueitem]]
- **Phase 3: 공유 준비 → 업로드 큐** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - -> contains -> [[queueitem]]

## Internal Relationships
- Phase 3: 공유 준비 → 업로드 큐 -> contains -> QueueItem 구조 [EXTRACTED]
- QueueItem 구조 -> has_code_example -> ts [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 QueueItem 구조, ts, Phase 3: 공유 준비 → 업로드 큐를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 스캔_업로드_플로우.md이다.
