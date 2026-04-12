# Wave 실행 계획 & 3+ 화자 스키마
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Wave 실행 계획** (execution_strategy) -- 2 connections
  - <- related_to <- [[3]]
  - <- involves <- [[provenance]]
- **3+ 화자 스키마** (schema) -- 1 connections
  - -> related_to -> [[wave]]
- **Provenance 추적** (metadata) -- 1 connections
  - -> involves -> [[wave]]

## Internal Relationships
- 3+ 화자 스키마 -> related_to -> Wave 실행 계획 [EXTRACTED]
- Provenance 추적 -> involves -> Wave 실행 계획 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Wave 실행 계획, 3+ 화자 스키마, Provenance 추적를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 execution_strategy, metadata, schema이다.
