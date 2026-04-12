# Phase 1: U-M01 End-to-End 완성 (MVP) & U-M 메타데이터 SKU 어드민 추출 시스템 구현 계획
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Phase 1: U-M01 End-to-End 완성 (MVP)** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 4 connections
  - -> contains -> [[wave-1-api-mb1-mb2-mb3]]
  - -> contains -> [[wave-2-ui-mf1-mf2-mf3-wave-1]]
  - -> contains -> [[wave-3-mf4-mb4-mb5-mf5-wave-2]]
  - <- contains <- [[u-m-sku]]
- **U-M 메타데이터 SKU 어드민 추출 시스템 구현 계획** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 4 connections
  - -> contains -> [[9]]
  - -> contains -> [[phase-1-u-m01-end-to-end-mvp]]
  - -> contains -> [[phase-2-sku-phase-1]]
  - -> contains -> [[phase-3-phase-2]]
- **미구현 항목 (기획서 섹션 9 기준)** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 1 connections
  - <- contains <- [[u-m-sku]]
- **Phase 2: 전체 SKU 확장 (Phase 1 완료 후)** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 1 connections
  - <- contains <- [[u-m-sku]]
- **Phase 3: 번들 납품 (Phase 2 완료 후)** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 1 connections
  - <- contains <- [[u-m-sku]]
- **Wave 1: 백엔드 API (MB1 + MB2 + MB3) — 병렬** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-1-u-m01-end-to-end-mvp]]
- **Wave 2: 프론트엔드 UI (MF1 + MF2 + MF3) — Wave 1 완료 후** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-1-u-m01-end-to-end-mvp]]
- **Wave 3: 검수 + 패키징 (MF4 + MB4 + MB5 + MF5) — Wave 2 완료 후** (.orchestrate-consult/20260410-124847/prompt_plan.md) -- 1 connections
  - <- contains <- [[phase-1-u-m01-end-to-end-mvp]]

## Internal Relationships
- Phase 1: U-M01 End-to-End 완성 (MVP) -> contains -> Wave 1: 백엔드 API (MB1 + MB2 + MB3) — 병렬 [EXTRACTED]
- Phase 1: U-M01 End-to-End 완성 (MVP) -> contains -> Wave 2: 프론트엔드 UI (MF1 + MF2 + MF3) — Wave 1 완료 후 [EXTRACTED]
- Phase 1: U-M01 End-to-End 완성 (MVP) -> contains -> Wave 3: 검수 + 패키징 (MF4 + MB4 + MB5 + MF5) — Wave 2 완료 후 [EXTRACTED]
- U-M 메타데이터 SKU 어드민 추출 시스템 구현 계획 -> contains -> 미구현 항목 (기획서 섹션 9 기준) [EXTRACTED]
- U-M 메타데이터 SKU 어드민 추출 시스템 구현 계획 -> contains -> Phase 1: U-M01 End-to-End 완성 (MVP) [EXTRACTED]
- U-M 메타데이터 SKU 어드민 추출 시스템 구현 계획 -> contains -> Phase 2: 전체 SKU 확장 (Phase 1 완료 후) [EXTRACTED]
- U-M 메타데이터 SKU 어드민 추출 시스템 구현 계획 -> contains -> Phase 3: 번들 납품 (Phase 2 완료 후) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Phase 1: U-M01 End-to-End 완성 (MVP), U-M 메타데이터 SKU 어드민 추출 시스템 구현 계획, 미구현 항목 (기획서 섹션 9 기준)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
