# Wave 실행 계획 & 통합 오케스트레이션 전략 (Recommended Strategy)
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **Wave 실행 계획** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 6 connections
  - -> contains -> [[wave-1-foundation-deadline-track]]
  - -> contains -> [[wave-2-core-runtime-separation]]
  - -> contains -> [[wave-3-orchestration-schema-expansion]]
  - -> contains -> [[wave-4-routing-review]]
  - -> contains -> [[wave-5-integration-hardening]]
  - <- contains <- [[recommended-strategy]]
- **통합 오케스트레이션 전략 (Recommended Strategy)** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 4 connections
  - -> contains -> [[hybrid-batch-first-3-layer]]
  - -> contains -> [[3]]
  - -> contains -> [[wave]]
  - <- contains <- [[orchestration-consultation-synthesis-stt]]
- **불일치점 (Disagreement)** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 3 connections
  - -> contains -> [[gemini]]
  - -> contains -> [[codex]]
  - <- contains <- [[orchestration-consultation-synthesis-stt]]
- **Orchestration Consultation Synthesis — STT 정합성 + 화자분리 리팩토링** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 3 connections
  - -> contains -> [[agreement]]
  - -> contains -> [[disagreement]]
  - -> contains -> [[recommended-strategy]]
- **팀 구성: 3 에이전트** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended-strategy]]
- **일치점 (Agreement) — 신뢰도 최고** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-consultation-synthesis-stt]]
- **Codex만 발견** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **Gemini만 발견** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **아키텍처: Hybrid Batch-First, 3-Layer** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended-strategy]]
- **Wave 1: Foundation + Deadline Track** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 2: Core Runtime Separation** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 3: Orchestration + Schema Expansion** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 4: Routing + Review** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 5: Integration Hardening** (.orchestrate-consult/20260409-171540/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]

## Internal Relationships
- 불일치점 (Disagreement) -> contains -> Gemini만 발견 [EXTRACTED]
- 불일치점 (Disagreement) -> contains -> Codex만 발견 [EXTRACTED]
- Orchestration Consultation Synthesis — STT 정합성 + 화자분리 리팩토링 -> contains -> 일치점 (Agreement) — 신뢰도 최고 [EXTRACTED]
- Orchestration Consultation Synthesis — STT 정합성 + 화자분리 리팩토링 -> contains -> 불일치점 (Disagreement) [EXTRACTED]
- Orchestration Consultation Synthesis — STT 정합성 + 화자분리 리팩토링 -> contains -> 통합 오케스트레이션 전략 (Recommended Strategy) [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> 아키텍처: Hybrid Batch-First, 3-Layer [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> 팀 구성: 3 에이전트 [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended Strategy) -> contains -> Wave 실행 계획 [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 1: Foundation + Deadline Track [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 2: Core Runtime Separation [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 3: Orchestration + Schema Expansion [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 4: Routing + Review [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 5: Integration Hardening [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Wave 실행 계획, 통합 오케스트레이션 전략 (Recommended Strategy), 불일치점 (Disagreement)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
