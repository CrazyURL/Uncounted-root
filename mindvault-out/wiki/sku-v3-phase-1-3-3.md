# SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트) & 3일 스프린트 계획
Cohesion: 0.10 | Nodes: 20

## Key Nodes
- **SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 5 connections
  - -> contains -> [[v3-2026-04-09]]
  - -> contains -> [[u-m01-sku-2026-04-09]]
  - -> contains -> [[wespeaker-2026-04-09]]
  - -> contains -> [[2026-04-08]]
  - -> contains -> [[3]]
- **3일 스프린트 계획** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 4 connections
  - -> contains -> [[day-1-48-db-api]]
  - -> contains -> [[day-2-49-phase-4-export]]
  - -> contains -> [[day-3-410-ui]]
  - <- contains <- [[sku-v3-phase-1-3]]
- **Day 1 (4/8 수): DB + 서버 API 기반 구축** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 4 connections
  - -> contains -> [[wave-1-1-db]]
  - -> contains -> [[wave-1-2-d1d3-api-3]]
  - -> contains -> [[wave-1-3-b1b3]]
  - <- contains <- [[3]]
- **Day 2 (4/9 목): 클라이언트 PHASE 4 + Export 파이프라인 전환** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 4 connections
  - -> contains -> [[wave-2-1]]
  - -> contains -> [[wave-2-2-c1-c2]]
  - -> contains -> [[wave-2-3-b7-b8]]
  - <- contains <- [[3]]
- **Day 3 (4/10 금): 어드민 UI 수정/추가 + 통합 테스트** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 4 connections
  - -> contains -> [[wave-3-1]]
  - -> contains -> [[wave-3-2-f1f3]]
  - -> contains -> [[wave-3-3]]
  - <- contains <- [[3]]
- **코드베이스 검증 결과 (2026-04-08)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 3 connections
  - -> contains -> [[s3-sanitized-audio]]
  - -> contains -> [[utteranceid]]
  - <- contains <- [[sku-v3-phase-1-3]]
- **S3 저장 경로 (sanitized-audio 버킷)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[2026-04-08]]
- **U-M01 통화 메타데이터 SKU 완성 (2026-04-09)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[sku-v3-phase-1-3]]
- **utteranceId 형식** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[2026-04-08]]
- **v3 스펙 보정 완료 항목 (2026-04-09)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[sku-v3-phase-1-3]]
- **Wave 1-1 (병렬) — DB 마이그레이션** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-1-48-db-api]]
- **Wave 1-2 (병렬, D1~D3 완료 후) — 서버 API 3종** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-1-48-db-api]]
- **Wave 1-3 (B1~B3 완료 후) — 서버 파이프라인 수정** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-1-48-db-api]]
- **Wave 2-1 (병렬)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-2-49-phase-4-export]]
- **Wave 2-2 (C1, C2 완료 후)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-2-49-phase-4-export]]
- **Wave 2-3 (B7, B8 완료 후)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-2-49-phase-4-export]]
- **Wave 3-1 (병렬)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-3-410-ui]]
- **Wave 3-2 (F1~F3 완료 후)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-3-410-ui]]
- **Wave 3-3: 통합 검증** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[day-3-410-ui]]
- **WeSpeaker 임베딩 기반 화자분리 리팩토링 (2026-04-09)** (.orchestrate-consult/20260409-203240/prompt_plan.md) -- 1 connections
  - <- contains <- [[sku-v3-phase-1-3]]

## Internal Relationships
- 코드베이스 검증 결과 (2026-04-08) -> contains -> S3 저장 경로 (sanitized-audio 버킷) [EXTRACTED]
- 코드베이스 검증 결과 (2026-04-08) -> contains -> utteranceId 형식 [EXTRACTED]
- 3일 스프린트 계획 -> contains -> Day 1 (4/8 수): DB + 서버 API 기반 구축 [EXTRACTED]
- 3일 스프린트 계획 -> contains -> Day 2 (4/9 목): 클라이언트 PHASE 4 + Export 파이프라인 전환 [EXTRACTED]
- 3일 스프린트 계획 -> contains -> Day 3 (4/10 금): 어드민 UI 수정/추가 + 통합 테스트 [EXTRACTED]
- Day 1 (4/8 수): DB + 서버 API 기반 구축 -> contains -> Wave 1-1 (병렬) — DB 마이그레이션 [EXTRACTED]
- Day 1 (4/8 수): DB + 서버 API 기반 구축 -> contains -> Wave 1-2 (병렬, D1~D3 완료 후) — 서버 API 3종 [EXTRACTED]
- Day 1 (4/8 수): DB + 서버 API 기반 구축 -> contains -> Wave 1-3 (B1~B3 완료 후) — 서버 파이프라인 수정 [EXTRACTED]
- Day 2 (4/9 목): 클라이언트 PHASE 4 + Export 파이프라인 전환 -> contains -> Wave 2-1 (병렬) [EXTRACTED]
- Day 2 (4/9 목): 클라이언트 PHASE 4 + Export 파이프라인 전환 -> contains -> Wave 2-2 (C1, C2 완료 후) [EXTRACTED]
- Day 2 (4/9 목): 클라이언트 PHASE 4 + Export 파이프라인 전환 -> contains -> Wave 2-3 (B7, B8 완료 후) [EXTRACTED]
- Day 3 (4/10 금): 어드민 UI 수정/추가 + 통합 테스트 -> contains -> Wave 3-1 (병렬) [EXTRACTED]
- Day 3 (4/10 금): 어드민 UI 수정/추가 + 통합 테스트 -> contains -> Wave 3-2 (F1~F3 완료 후) [EXTRACTED]
- Day 3 (4/10 금): 어드민 UI 수정/추가 + 통합 테스트 -> contains -> Wave 3-3: 통합 검증 [EXTRACTED]
- SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트) -> contains -> v3 스펙 보정 완료 항목 (2026-04-09) [EXTRACTED]
- SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트) -> contains -> U-M01 통화 메타데이터 SKU 완성 (2026-04-09) [EXTRACTED]
- SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트) -> contains -> WeSpeaker 임베딩 기반 화자분리 리팩토링 (2026-04-09) [EXTRACTED]
- SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트) -> contains -> 코드베이스 검증 결과 (2026-04-08) [EXTRACTED]
- SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트) -> contains -> 3일 스프린트 계획 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SKU 데이터셋 추출 시스템 v3 — Phase 1 (3일 스프린트), 3일 스프린트 계획, Day 1 (4/8 수): DB + 서버 API 기반 구축를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
