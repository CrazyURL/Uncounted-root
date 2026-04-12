# Wave 구조 & Orchestration Consultation Synthesis
Cohesion: 0.17 | Nodes: 13

## Key Nodes
- **Wave 구조** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 6 connections
  - -> contains -> [[wave-1]]
  - -> contains -> [[wave-2-api-app-ui]]
  - -> contains -> [[wave-3-export-ui]]
  - -> contains -> [[wave-4]]
  - <- contains <- [[disagreement]]
  - <- contains <- [[recommended-strategy]]
- **Orchestration Consultation Synthesis** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 5 connections
  - -> contains -> [[agreement]]
  - -> contains -> [[disagreement]]
  - -> contains -> [[unique-insights]]
  - -> contains -> [[recommended-strategy]]
  - -> contains -> [[needs-discussion]]
- **고유 인사이트 (Unique Insights)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 3 connections
  - -> contains -> [[gemini]]
  - -> contains -> [[codex]]
  - <- contains <- [[orchestration-consultation-synthesis]]
- **불일치점 (Disagreement)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 2 connections
  - -> contains -> [[wave]]
  - <- contains <- [[orchestration-consultation-synthesis]]
- **통합 오케스트레이션 전략 (Recommended Strategy)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 2 connections
  - -> contains -> [[wave]]
  - <- contains <- [[orchestration-consultation-synthesis]]
- **일치점 (Agreement)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-consultation-synthesis]]
- **Codex만 발견** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[unique-insights]]
- **Gemini만 발견** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[unique-insights]]
- **추가 검토 필요 (Needs Discussion)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-consultation-synthesis]]
- **Wave 1: 기반 + 독립 엔진 (병렬)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 2: 핵심 API + App 통합 + 검수 UI (병렬)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 3: Export 파이프라인 + 특수 UI (병렬)** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 4: 통합 검증** (.orchestrate-consult/20260408-090630/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]

## Internal Relationships
- 불일치점 (Disagreement) -> contains -> Wave 구조 [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 일치점 (Agreement) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 불일치점 (Disagreement) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 고유 인사이트 (Unique Insights) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 통합 오케스트레이션 전략 (Recommended Strategy) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 추가 검토 필요 (Needs Discussion) [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> Wave 구조 [EXTRACTED]
- 고유 인사이트 (Unique Insights) -> contains -> Gemini만 발견 [EXTRACTED]
- 고유 인사이트 (Unique Insights) -> contains -> Codex만 발견 [EXTRACTED]
- Wave 구조 -> contains -> Wave 1: 기반 + 독립 엔진 (병렬) [EXTRACTED]
- Wave 구조 -> contains -> Wave 2: 핵심 API + App 통합 + 검수 UI (병렬) [EXTRACTED]
- Wave 구조 -> contains -> Wave 3: Export 파이프라인 + 특수 UI (병렬) [EXTRACTED]
- Wave 구조 -> contains -> Wave 4: 통합 검증 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Wave 구조, Orchestration Consultation Synthesis, 고유 인사이트 (Unique Insights)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
