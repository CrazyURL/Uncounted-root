# 기기 오디오 스캔 & Capacitor Filesystem
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **기기 오디오 스캔** (scanEngine.ts) -- 2 connections
  - -> implements -> [[capacitor-filesystem]]
  - -> implements -> [[web-audio-api]]
- **Capacitor Filesystem** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/a2-spec.md) -- 1 connections
  - <- implements <- [[]]
- **Web Audio API** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/a2-spec.md) -- 1 connections
  - <- implements <- [[]]

## Internal Relationships
- 기기 오디오 스캔 -> implements -> Capacitor Filesystem [EXTRACTED]
- 기기 오디오 스캔 -> implements -> Web Audio API [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 기기 오디오 스캔, Capacitor Filesystem, Web Audio API를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 a2-spec.md, scanEngine.ts이다.
