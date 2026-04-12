# Wave 실행 계획 & Orchestration Synthesis: HIGH 15건 버그픽스
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Wave 실행 계획** (.orchestrate-consult/20260330-182051/orchestrate-synthesis.md) -- 4 connections
  - -> contains -> [[wave-1-lowmedium]]
  - -> contains -> [[wave-2-mediumhigh]]
  - -> contains -> [[wave-3-medium]]
  - <- contains <- [[orchestration-synthesis-high-15]]
- **Orchestration Synthesis: HIGH 15건 버그픽스** (.orchestrate-consult/20260330-182051/orchestrate-synthesis.md) -- 2 connections
  - -> contains -> [[gemini]]
  - -> contains -> [[wave]]
- **태스크 분해 (Gemini 기반)** (.orchestrate-consult/20260330-182051/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-synthesis-high-15]]
- **Wave 1: 기초 수정 (Low~Medium, 병렬)** (.orchestrate-consult/20260330-182051/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 2: 핵심 보안 (Medium~High, 병렬)** (.orchestrate-consult/20260330-182051/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 3: 통합 (Medium)** (.orchestrate-consult/20260330-182051/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[wave]]

## Internal Relationships
- Orchestration Synthesis: HIGH 15건 버그픽스 -> contains -> 태스크 분해 (Gemini 기반) [EXTRACTED]
- Orchestration Synthesis: HIGH 15건 버그픽스 -> contains -> Wave 실행 계획 [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 1: 기초 수정 (Low~Medium, 병렬) [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 2: 핵심 보안 (Medium~High, 병렬) [EXTRACTED]
- Wave 실행 계획 -> contains -> Wave 3: 통합 (Medium) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Wave 실행 계획, Orchestration Synthesis: HIGH 15건 버그픽스, 태스크 분해 (Gemini 기반)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
