# Voice API 제공 기능 (서버로 이전 가능) & Phase 1: Voice API 클라이언트 + 어댑터 (앱)
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Voice API 제공 기능 (서버로 이전 가능)** (prompt_plan.md) -- 3 connections
  - -> contains -> [[phase-1-voice-api]]
  - -> contains -> [[phase-2-ui]]
  - -> contains -> [[phase-3]]
- **Phase 1: Voice API 클라이언트 + 어댑터 (앱)** (prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api]]
- **Phase 2: 설정 UI + 폴백 메커니즘** (prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api]]
- **Phase 3: 최적화 + 정리** (prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api]]

## Internal Relationships
- Voice API 제공 기능 (서버로 이전 가능) -> contains -> Phase 1: Voice API 클라이언트 + 어댑터 (앱) [EXTRACTED]
- Voice API 제공 기능 (서버로 이전 가능) -> contains -> Phase 2: 설정 UI + 폴백 메커니즘 [EXTRACTED]
- Voice API 제공 기능 (서버로 이전 가능) -> contains -> Phase 3: 최적화 + 정리 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice API 제공 기능 (서버로 이전 가능), Phase 1: Voice API 클라이언트 + 어댑터 (앱), Phase 2: 설정 UI + 폴백 메커니즘를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
