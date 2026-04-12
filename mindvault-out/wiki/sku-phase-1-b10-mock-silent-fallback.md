# SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 & B10. Mock 데이터 silent fallback 제거
Cohesion: 0.12 | Nodes: 17

## Key Nodes
- **SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 16 connections
  - -> contains -> [[b1-esm-require-critical]]
  - -> contains -> [[b2-sku-inventory-api-404]]
  - -> contains -> [[b3-inventorymap-is-not-a-function-typeerror]]
  - -> contains -> [[b4-confirm-api-http-method-400]]
  - -> contains -> [[b5-process-status-expected-queued-400]]
  - -> contains -> [[b6-upsertbillableunits]]
  - -> contains -> [[b7-admin-role-critical]]
  - -> contains -> [[b8-rls-critical]]
  - -> contains -> [[b9-audio-cleanup]]
  - -> contains -> [[b10-mock-silent-fallback]]
  - -> contains -> [[b11-admin-exportsts-800]]
  - -> contains -> [[b12-handleexecute]]
  - -> contains -> [[i1-s3-critical]]
  - -> contains -> [[i2-transcript-132]]
  - -> contains -> [[i3-s3]]
  - -> contains -> [[phase-2]]
- **B10. Mock 데이터 silent fallback 제거** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B11. admin-exports.ts 800줄 초과** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B12. handleExecute 이중 잠금 문제** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B1. ESM require 에러 (CRITICAL)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B2. SKU Inventory API 경로 불일치 (404)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B3. inventory.map is not a function (TypeError)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B4. confirm API HTTP method 불일치 (400)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B5. process 시 status 에러 — "expected 'queued'" (400)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B6. upsertBillableUnits 스택 오버플로우** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B7. Admin role 미검증 (CRITICAL — 보안)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B8. RLS 정책 과다 허용 (CRITICAL — 보안)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **B9. Audio cleanup 누락 (메모리 누수)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **I1. S3 청크 병합 미구현 (CRITICAL — 기능 불가)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **I2. Transcript 커버리지 낮음 (1/32 세션)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **I3. S3 버킷명 하드코딩** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]
- **코드 리뷰에서 발견된 추가 이슈 (Phase 2)** (uncounted-docs/bugfix/SKU-export-phase1-bugfix.md) -- 1 connections
  - <- contains <- [[sku-phase-1]]

## Internal Relationships
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B1. ESM require 에러 (CRITICAL) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B2. SKU Inventory API 경로 불일치 (404) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B3. inventory.map is not a function (TypeError) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B4. confirm API HTTP method 불일치 (400) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B5. process 시 status 에러 — "expected 'queued'" (400) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B6. upsertBillableUnits 스택 오버플로우 [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B7. Admin role 미검증 (CRITICAL — 보안) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B8. RLS 정책 과다 허용 (CRITICAL — 보안) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B9. Audio cleanup 누락 (메모리 누수) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B10. Mock 데이터 silent fallback 제거 [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B11. admin-exports.ts 800줄 초과 [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> B12. handleExecute 이중 잠금 문제 [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> I1. S3 청크 병합 미구현 (CRITICAL — 기능 불가) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> I2. Transcript 커버리지 낮음 (1/32 세션) [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> I3. S3 버킷명 하드코딩 [EXTRACTED]
- SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리 -> contains -> 코드 리뷰에서 발견된 추가 이슈 (Phase 2) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SKU 데이터셋 추출 Phase 1 — 버그픽스 & 이슈 정리, B10. Mock 데이터 silent fallback 제거, B11. admin-exports.ts 800줄 초과를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKU-export-phase1-bugfix.md이다.
