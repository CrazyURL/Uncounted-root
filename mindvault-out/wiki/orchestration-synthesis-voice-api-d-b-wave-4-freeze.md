# Orchestration Synthesis: voice-api 화자 분리 정확도 (옵션 D + B) & 인터페이스 계약 (Wave 4 시작 전 freeze)
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Orchestration Synthesis: voice-api 화자 분리 정확도 (옵션 D + B)** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260413-191850/orchestrate-synthesis.md) -- 4 connections
  - -> contains -> [[wave]]
  - -> contains -> [[wave-4-freeze]]
  - -> contains -> [[codex]]
  - -> contains -> [[gemini]]
- **인터페이스 계약 (Wave 4 시작 전 freeze)** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260413-191850/orchestrate-synthesis.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[orchestration-synthesis-voice-api-d-b]]
- **python** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260413-191850/orchestrate-synthesis.md) -- 1 connections
  - <- has_code_example <- [[wave-4-freeze]]
- **Codex만 제안** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260413-191850/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-synthesis-voice-api-d-b]]
- **Gemini만 제안** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260413-191850/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-synthesis-voice-api-d-b]]
- **Wave 구조 (통합)** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260413-191850/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-synthesis-voice-api-d-b]]

## Internal Relationships
- Orchestration Synthesis: voice-api 화자 분리 정확도 (옵션 D + B) -> contains -> Wave 구조 (통합) [EXTRACTED]
- Orchestration Synthesis: voice-api 화자 분리 정확도 (옵션 D + B) -> contains -> 인터페이스 계약 (Wave 4 시작 전 freeze) [EXTRACTED]
- Orchestration Synthesis: voice-api 화자 분리 정확도 (옵션 D + B) -> contains -> Codex만 제안 [EXTRACTED]
- Orchestration Synthesis: voice-api 화자 분리 정확도 (옵션 D + B) -> contains -> Gemini만 제안 [EXTRACTED]
- 인터페이스 계약 (Wave 4 시작 전 freeze) -> has_code_example -> python [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Orchestration Synthesis: voice-api 화자 분리 정확도 (옵션 D + B), 인터페이스 계약 (Wave 4 시작 전 freeze), python를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
