# v3 기획서 기준 주요 변경사항 & 의존성 DAG
Cohesion: 0.09 | Nodes: 24

## Key Nodes
- **v3 기획서 기준 주요 변경사항** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 12 connections
  - -> contains -> [[db-d1-d5]]
  - -> contains -> [[c1-c5]]
  - -> contains -> [[api-b1-b12]]
  - -> contains -> [[f1-f8]]
  - -> contains -> [[23]]
  - -> contains -> [[0]]
  - -> contains -> [[phase-1-p0-2]]
  - -> contains -> [[day-1-48]]
  - -> contains -> [[day-2-49-db-b3b4b6f6]]
  - -> contains -> [[day-3-410-e2e-pii]]
  - -> contains -> [[buffer-411413-pii-qa]]
  - <- contains <- [[phase-1-clova-3-v3]]
- **의존성 DAG** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 5 connections
  - -> contains -> [[day-1-48]]
  - -> contains -> [[day-2-49]]
  - -> contains -> [[day-3-410]]
  - -> contains -> [[buffer-411413]]
  - <- contains <- [[phase-1-clova-3-v3]]
- **Day 2 (4/9 수) — DB 적용 + 인프라 + B3/B4/B6/F6** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 4 connections
  - -> contains -> [[wave-1]]
  - -> contains -> [[wave-2]]
  - -> contains -> [[wave-3]]
  - <- contains <- [[v3]]
- **Phase 1 CLOVA 샘플 대응 — 3일 스프린트 실행계획 (v3 재편)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 4 connections
  - -> contains -> [[v3]]
  - -> contains -> [[dag]]
  - -> contains -> [[phase-2]]
  - -> contains -> [[dialogintensity]]
- **Day 3 (4/10 목) — E2E 통합 + PII 착수** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 3 connections
  - -> contains -> [[wave-1-e2e]]
  - -> contains -> [[wave-2-pii]]
  - <- contains <- [[v3]]
- **Day 1 (4/8 화) — 데이터 기반 + 라벨 인프라 ✅ 완료** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 2 connections
  - <- contains <- [[v3]]
  - <- contains <- [[dag]]
- **⚠️ 부분구현 (0항목)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **✅ 완료 (23항목)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **백엔드 API (B1-B12)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **Buffer (4/11~4/13 주말)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[dag]]
- **Buffer (4/11~4/13 주말) — PII 완성 + 최종 QA** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **클라이언트 앱 (C1-C5)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **Day 2 (4/9)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[dag]]
- **Day 3 (4/10)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[dag]]
- **DB 마이그레이션 (D1-D5)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **참고: dialog_intensity 컬럼** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[phase-1-clova-3-v3]]
- **어드민 프론트엔드 (F1-F8)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **❌ 미완료 — Phase 1 P0 대상 (2항목)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[v3]]
- **Phase 2 이월** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[phase-1-clova-3-v3]]
- **Wave 1 (오전, 병렬)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[day-2-49-db-b3b4b6f6]]
- **Wave 1 (오전) — E2E 테스트** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[day-3-410-e2e-pii]]
- **Wave 2 (오전~오후, 순차)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[day-2-49-db-b3b4b6f6]]
- **Wave 2 (오후) — PII 착수 + 버그픽스** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[day-3-410-e2e-pii]]
- **Wave 3 (오후)** (uncounted-docs/sprint/Phase1_3일스프린트_실행계획.md) -- 1 connections
  - <- contains <- [[day-2-49-db-b3b4b6f6]]

## Internal Relationships
- 의존성 DAG -> contains -> Day 1 (4/8 화) — 데이터 기반 + 라벨 인프라 ✅ 완료 [EXTRACTED]
- 의존성 DAG -> contains -> Day 2 (4/9) [EXTRACTED]
- 의존성 DAG -> contains -> Day 3 (4/10) [EXTRACTED]
- 의존성 DAG -> contains -> Buffer (4/11~4/13 주말) [EXTRACTED]
- Day 2 (4/9 수) — DB 적용 + 인프라 + B3/B4/B6/F6 -> contains -> Wave 1 (오전, 병렬) [EXTRACTED]
- Day 2 (4/9 수) — DB 적용 + 인프라 + B3/B4/B6/F6 -> contains -> Wave 2 (오전~오후, 순차) [EXTRACTED]
- Day 2 (4/9 수) — DB 적용 + 인프라 + B3/B4/B6/F6 -> contains -> Wave 3 (오후) [EXTRACTED]
- Day 3 (4/10 목) — E2E 통합 + PII 착수 -> contains -> Wave 1 (오전) — E2E 테스트 [EXTRACTED]
- Day 3 (4/10 목) — E2E 통합 + PII 착수 -> contains -> Wave 2 (오후) — PII 착수 + 버그픽스 [EXTRACTED]
- Phase 1 CLOVA 샘플 대응 — 3일 스프린트 실행계획 (v3 재편) -> contains -> v3 기획서 기준 주요 변경사항 [EXTRACTED]
- Phase 1 CLOVA 샘플 대응 — 3일 스프린트 실행계획 (v3 재편) -> contains -> 의존성 DAG [EXTRACTED]
- Phase 1 CLOVA 샘플 대응 — 3일 스프린트 실행계획 (v3 재편) -> contains -> Phase 2 이월 [EXTRACTED]
- Phase 1 CLOVA 샘플 대응 — 3일 스프린트 실행계획 (v3 재편) -> contains -> 참고: dialog_intensity 컬럼 [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> DB 마이그레이션 (D1-D5) [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> 클라이언트 앱 (C1-C5) [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> 백엔드 API (B1-B12) [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> 어드민 프론트엔드 (F1-F8) [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> ✅ 완료 (23항목) [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> ⚠️ 부분구현 (0항목) [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> ❌ 미완료 — Phase 1 P0 대상 (2항목) [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> Day 1 (4/8 화) — 데이터 기반 + 라벨 인프라 ✅ 완료 [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> Day 2 (4/9 수) — DB 적용 + 인프라 + B3/B4/B6/F6 [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> Day 3 (4/10 목) — E2E 통합 + PII 착수 [EXTRACTED]
- v3 기획서 기준 주요 변경사항 -> contains -> Buffer (4/11~4/13 주말) — PII 완성 + 최종 QA [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 v3 기획서 기준 주요 변경사항, 의존성 DAG, Day 2 (4/9 수) — DB 적용 + 인프라 + B3/B4/B6/F6를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 Phase1_3일스프린트_실행계획.md이다.
