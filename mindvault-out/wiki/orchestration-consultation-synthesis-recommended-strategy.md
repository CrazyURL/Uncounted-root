# Orchestration Consultation Synthesis & 통합 오케스트레이션 전략 (Recommended Strategy)
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Orchestration Consultation Synthesis** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 5 connections
  - -> contains -> [[agreement]]
  - -> contains -> [[disagreement]]
  - -> contains -> [[unique-insights]]
  - -> contains -> [[recommended-strategy]]
  - -> contains -> [[needs-discussion]]
- **통합 오케스트레이션 전략 (Recommended Strategy)** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 5 connections
  - -> contains -> [[bugfix-3]]
  - -> contains -> [[wave-1-3]]
  - -> contains -> [[wave-2]]
  - -> contains -> [[skip]]
  - <- contains <- [[orchestration-consultation-synthesis]]
- **고유 인사이트 (Unique Insights)** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 3 connections
  - -> contains -> [[codex]]
  - -> contains -> [[gemini]]
  - <- contains <- [[orchestration-consultation-synthesis]]
- **일치점 (Agreement)** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 2 connections
  - -> contains -> [[wave]]
  - <- contains <- [[orchestration-consultation-synthesis]]
- **팀 구성: bugfix / 3 에이전트** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended-strategy]]
- **Codex만 발견** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[unique-insights]]
- **불일치점 (Disagreement)** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-consultation-synthesis]]
- **Gemini만 발견** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[unique-insights]]
- **추가 검토 필요 (Needs Discussion)** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-consultation-synthesis]]
- **Skip** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended-strategy]]
- **Wave 구조 합의** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[agreement]]
- **Wave 1 (병렬 3팀)** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended-strategy]]
- **Wave 2 (순차)** (.orchestrate-consult/20260331-162426/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended-strategy]]

## Internal Relationships
- 일치점 (Agreement) -> contains -> Wave 구조 합의 [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 일치점 (Agreement) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 불일치점 (Disagreement) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 고유 인사이트 (Unique Insights) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 통합 오케스트레이션 전략 (Recommended Strategy) [EXTRACTED]
- Orchestration Consultation Synthesis -> contains -> 추가 검토 필요 (Needs Discussion) [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> 팀 구성: bugfix / 3 에이전트 [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> Wave 1 (병렬 3팀) [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> Wave 2 (순차) [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> Skip [EXTRACTED]
- 고유 인사이트 (Unique Insights) -> contains -> Codex만 발견 [EXTRACTED]
- 고유 인사이트 (Unique Insights) -> contains -> Gemini만 발견 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Orchestration Consultation Synthesis, 통합 오케스트레이션 전략 (Recommended Strategy), 고유 인사이트 (Unique Insights)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
