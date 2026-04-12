# Phase 1 신규 개발 항목 & SKU 데이터셋 추출 시스템 — Phase 1 구현 계획
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Phase 1 신규 개발 항목** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 5 connections
  - -> contains -> [[layer-1-db]]
  - -> contains -> [[layer-2]]
  - -> contains -> [[layer-3-export-api]]
  - -> contains -> [[layer-4-ui]]
  - <- contains <- [[sku-phase-1]]
- **SKU 데이터셋 추출 시스템 — Phase 1 구현 계획** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 3 connections
  - -> contains -> [[db]]
  - -> contains -> [[api]]
  - -> contains -> [[phase-1]]
- **백엔드 API (이미 존재)** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **DB (이미 존재)** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **Layer 1: DB 마이그레이션** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-1]]
- **Layer 2: 백엔드 — 오디오 처리 파이프라인** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-1]]
- **Layer 3: 백엔드 — Export 파이프라인 API** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-1]]
- **Layer 4: 프론트엔드 — 어드민 UI** (.orchestrate-consult/20260406-133030/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-1]]

## Internal Relationships
- Phase 1 신규 개발 항목 -> contains -> Layer 1: DB 마이그레이션 [EXTRACTED]
- Phase 1 신규 개발 항목 -> contains -> Layer 2: 백엔드 — 오디오 처리 파이프라인 [EXTRACTED]
- Phase 1 신규 개발 항목 -> contains -> Layer 3: 백엔드 — Export 파이프라인 API [EXTRACTED]
- Phase 1 신규 개발 항목 -> contains -> Layer 4: 프론트엔드 — 어드민 UI [EXTRACTED]
- SKU 데이터셋 추출 시스템 — Phase 1 구현 계획 -> contains -> DB (이미 존재) [EXTRACTED]
- SKU 데이터셋 추출 시스템 — Phase 1 구현 계획 -> contains -> 백엔드 API (이미 존재) [EXTRACTED]
- SKU 데이터셋 추출 시스템 — Phase 1 구현 계획 -> contains -> Phase 1 신규 개발 항목 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Phase 1 신규 개발 항목, SKU 데이터셋 추출 시스템 — Phase 1 구현 계획, 백엔드 API (이미 존재)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
