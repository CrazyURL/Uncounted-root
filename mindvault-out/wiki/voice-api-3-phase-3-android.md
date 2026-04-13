# Voice API 큐 안정화 3종 패치 & Phase 3 — Android 실패 쿨다운 (재업로드 차단)
Cohesion: 0.20 | Nodes: 11

## Key Nodes
- **Voice API 큐 안정화 3종 패치** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 5 connections
  - -> references -> [[unresolvedrefunresolvedref]]
  - -> contains -> [[phase-1-voice-api-depth-503]]
  - -> contains -> [[phase-2-android-polling-timeout-900]]
  - -> contains -> [[phase-3-android]]
  - -> contains -> [[out-of-scope]]
- **Phase 3 — Android 실패 쿨다운 (재업로드 차단)** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 4 connections
  - -> has_code_example -> [[java]]
  - -> contains -> [[phase-1]]
  - -> contains -> [[phase-2-3]]
  - <- contains <- [[voice-api-3]]
- **java** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 2 connections
  - <- has_code_example <- [[phase-2-android-polling-timeout-900]]
  - <- has_code_example <- [[phase-3-android]]
- **Phase 1** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[phase-3-android]]
- **Phase 1 — Voice API 서버 큐 depth 제한 (503)** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[voice-api-3]]
- **Phase 2 — Android polling timeout 900초로 상향** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 2 connections
  - -> has_code_example -> [[java]]
  - <- contains <- [[voice-api-3]]
- **__unresolved__::ref::__unresolved____ref___________________** () -- 1 connections
  - <- references <- [[voice-api-3]]
- **bash** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- has_code_example <- [[phase-1]]
- **Out of Scope** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-3]]
- **Phase 2 & 3** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-3-android]]
- **python** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- has_code_example <- [[phase-1-voice-api-depth-503]]

## Internal Relationships
- Phase 1 -> has_code_example -> bash [EXTRACTED]
- Phase 1 — Voice API 서버 큐 depth 제한 (503) -> has_code_example -> python [EXTRACTED]
- Phase 2 — Android polling timeout 900초로 상향 -> has_code_example -> java [EXTRACTED]
- Phase 3 — Android 실패 쿨다운 (재업로드 차단) -> has_code_example -> java [EXTRACTED]
- Phase 3 — Android 실패 쿨다운 (재업로드 차단) -> contains -> Phase 1 [EXTRACTED]
- Phase 3 — Android 실패 쿨다운 (재업로드 차단) -> contains -> Phase 2 & 3 [EXTRACTED]
- Voice API 큐 안정화 3종 패치 -> references -> __unresolved__::ref::__unresolved____ref___________________ [EXTRACTED]
- Voice API 큐 안정화 3종 패치 -> contains -> Phase 1 — Voice API 서버 큐 depth 제한 (503) [EXTRACTED]
- Voice API 큐 안정화 3종 패치 -> contains -> Phase 2 — Android polling timeout 900초로 상향 [EXTRACTED]
- Voice API 큐 안정화 3종 패치 -> contains -> Phase 3 — Android 실패 쿨다운 (재업로드 차단) [EXTRACTED]
- Voice API 큐 안정화 3종 패치 -> contains -> Out of Scope [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice API 큐 안정화 3종 패치, Phase 3 — Android 실패 쿨다운 (재업로드 차단), java를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
