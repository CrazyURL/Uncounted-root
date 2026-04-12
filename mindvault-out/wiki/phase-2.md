# 오디오 해시 (중복 탐지) & 중복 탐지 (Phase 2)
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **오디오 해시 (중복 탐지)** (audioAnalyzer.ts) -- 2 connections
  - -> implements -> [[sha-256]]
  - <- references <- [[phase-2]]
- **중복 탐지 (Phase 2)** (dupDetector.ts) -- 1 connections
  - -> references -> [[]]
- **SHA-256 해시** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/a2-spec.md) -- 1 connections
  - <- implements <- [[]]

## Internal Relationships
- 오디오 해시 (중복 탐지) -> implements -> SHA-256 해시 [EXTRACTED]
- 중복 탐지 (Phase 2) -> references -> 오디오 해시 (중복 탐지) [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 오디오 해시 (중복 탐지), 중복 탐지 (Phase 2), SHA-256 해시를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 a2-spec.md, audioAnalyzer.ts, dupDetector.ts이다.
