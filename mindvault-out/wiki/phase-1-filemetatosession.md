# Phase 1: 음성 파일 스캔 & 파일 → 세션 변환 (`fileMetaToSession`)
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Phase 1: 음성 파일 스캔** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 2 connections
  - -> contains -> [[filemetatosession]]
  - -> contains -> [[mergewithexisting]]
- **파일 → 세션 변환 (`fileMetaToSession`)** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-1]]
- **기존 세션과 병합 (`mergeWithExisting`)** (uncounted-docs/앱/스캔_업로드_플로우.md) -- 1 connections
  - <- contains <- [[phase-1]]

## Internal Relationships
- Phase 1: 음성 파일 스캔 -> contains -> 파일 → 세션 변환 (`fileMetaToSession`) [EXTRACTED]
- Phase 1: 음성 파일 스캔 -> contains -> 기존 세션과 병합 (`mergeWithExisting`) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Phase 1: 음성 파일 스캔, 파일 → 세션 변환 (`fileMetaToSession`), 기존 세션과 병합 (`mergeWithExisting`)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 스캔_업로드_플로우.md이다.
