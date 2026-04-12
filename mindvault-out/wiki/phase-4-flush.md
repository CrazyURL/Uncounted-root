# Phase 4: 업로드 큐 → 백엔드 전송 & 자동 Flush 조건
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Phase 4: 업로드 큐 → 백엔드 전송** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 2 connections
  - -> contains -> [[flush]]
  - -> contains -> [[flushqueue-srclibuploadqueuets]]
- **자동 Flush 조건** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-4]]
- **flushQueue 처리 흐름 (`src/lib/uploadQueue.ts`)** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-4]]

## Internal Relationships
- Phase 4: 업로드 큐 → 백엔드 전송 -> contains -> 자동 Flush 조건 [EXTRACTED]
- Phase 4: 업로드 큐 → 백엔드 전송 -> contains -> flushQueue 처리 흐름 (`src/lib/uploadQueue.ts`) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Phase 4: 업로드 큐 → 백엔드 전송, 자동 Flush 조건, flushQueue 처리 흐름 (`src/lib/uploadQueue.ts`)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 스캔_업로드_플로우.md이다.
