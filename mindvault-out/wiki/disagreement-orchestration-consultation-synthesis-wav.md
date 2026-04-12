# 불일치점 (Disagreement) & Orchestration Consultation Synthesis — 청크 모드 WAV 버그픽스
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **불일치점 (Disagreement)** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 7 connections
  - -> contains -> [[1-sttprocessorpy-codex]]
  - -> contains -> [[2-wave-0-baseline-orientation]]
  - -> contains -> [[3-utterancesegmenterpy]]
  - -> contains -> [[4-agent]]
  - -> contains -> [[gemini]]
  - -> contains -> [[codex]]
  - <- contains <- [[orchestration-consultation-synthesis-wav]]
- **Orchestration Consultation Synthesis — 청크 모드 WAV 버그픽스** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 4 connections
  - -> contains -> [[agreement-high-confidence]]
  - -> contains -> [[disagreement]]
  - -> contains -> [[recommended]]
  - -> contains -> [[needs-discussion]]
- **통합 오케스트레이션 전략 (Recommended)** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 3 connections
  - -> contains -> [[hard-rule]]
  - -> contains -> [[wave]]
  - <- contains <- [[orchestration-consultation-synthesis-wav]]
- **(1) stt_processor.py 통합 단위 — Codex가 더 엄격** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **(2) Wave 0 (Baseline Orientation) 추가 여부** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **(3) utterance_segmenter.py 수정 범위** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **(4) Agent 수** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **일치점 (Agreement) — High confidence** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-consultation-synthesis-wav]]
- **Codex만 지적** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **Gemini만 지적** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[disagreement]]
- **시간 좌표 규약 (Hard Rule)** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended]]
- **추가 검토 필요 (Needs Discussion)** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-consultation-synthesis-wav]]
- **Wave 실행 계획 (최종)** (.orchestrate-consult/20260412-121319/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[recommended]]

## Internal Relationships
- 불일치점 (Disagreement) -> contains -> (1) stt_processor.py 통합 단위 — Codex가 더 엄격 [EXTRACTED]
- 불일치점 (Disagreement) -> contains -> (2) Wave 0 (Baseline Orientation) 추가 여부 [EXTRACTED]
- 불일치점 (Disagreement) -> contains -> (3) utterance_segmenter.py 수정 범위 [EXTRACTED]
- 불일치점 (Disagreement) -> contains -> (4) Agent 수 [EXTRACTED]
- 불일치점 (Disagreement) -> contains -> Gemini만 지적 [EXTRACTED]
- 불일치점 (Disagreement) -> contains -> Codex만 지적 [EXTRACTED]
- Orchestration Consultation Synthesis — 청크 모드 WAV 버그픽스 -> contains -> 일치점 (Agreement) — High confidence [EXTRACTED]
- Orchestration Consultation Synthesis — 청크 모드 WAV 버그픽스 -> contains -> 불일치점 (Disagreement) [EXTRACTED]
- Orchestration Consultation Synthesis — 청크 모드 WAV 버그픽스 -> contains -> 통합 오케스트레이션 전략 (Recommended) [EXTRACTED]
- Orchestration Consultation Synthesis — 청크 모드 WAV 버그픽스 -> contains -> 추가 검토 필요 (Needs Discussion) [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended) -> contains -> 시간 좌표 규약 (Hard Rule) [EXTRACTED]
- 통합 오케스트레이션 전략 (Recommended) -> contains -> Wave 실행 계획 (최종) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 불일치점 (Disagreement), Orchestration Consultation Synthesis — 청크 모드 WAV 버그픽스, 통합 오케스트레이션 전략 (Recommended)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
