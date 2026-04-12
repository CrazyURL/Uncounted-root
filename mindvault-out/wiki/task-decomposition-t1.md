# Task Decomposition & T1. 메타데이터 어드민 라우트 분리 스캐폴딩
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **Task Decomposition** (.orchestrate-consult/20260410-124847/codex.md) -- 10 connections
  - -> contains -> [[t1]]
  - -> contains -> [[t2-api]]
  - -> contains -> [[t3-sku-api]]
  - -> contains -> [[t4-api]]
  - -> contains -> [[t5]]
  - -> contains -> [[t6-export-api]]
  - -> contains -> [[t7-sku]]
  - -> contains -> [[t8]]
  - -> contains -> [[t9]]
  - -> contains -> [[t10-export-ui]]
- **T1. 메타데이터 어드민 라우트 분리 스캐폴딩** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T10. 검수 필터 + export 확정/다운로드 UI 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T2. 인벤토리 집계 리포지토리 + API 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T3. SKU 상세 통계 API 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T4. 이벤트 프리뷰 API 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T5. 메타데이터 패키지 빌더 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T6. 메타데이터 Export 작업 API 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T7. 관리자 페이지 셸 + SKU 카드 그리드 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T8. 재고/동기화 패널 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T9. 이벤트 프리뷰 시각화 구현** (.orchestrate-consult/20260410-124847/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]

## Internal Relationships
- Task Decomposition -> contains -> T1. 메타데이터 어드민 라우트 분리 스캐폴딩 [EXTRACTED]
- Task Decomposition -> contains -> T2. 인벤토리 집계 리포지토리 + API 구현 [EXTRACTED]
- Task Decomposition -> contains -> T3. SKU 상세 통계 API 구현 [EXTRACTED]
- Task Decomposition -> contains -> T4. 이벤트 프리뷰 API 구현 [EXTRACTED]
- Task Decomposition -> contains -> T5. 메타데이터 패키지 빌더 구현 [EXTRACTED]
- Task Decomposition -> contains -> T6. 메타데이터 Export 작업 API 구현 [EXTRACTED]
- Task Decomposition -> contains -> T7. 관리자 페이지 셸 + SKU 카드 그리드 구현 [EXTRACTED]
- Task Decomposition -> contains -> T8. 재고/동기화 패널 구현 [EXTRACTED]
- Task Decomposition -> contains -> T9. 이벤트 프리뷰 시각화 구현 [EXTRACTED]
- Task Decomposition -> contains -> T10. 검수 필터 + export 확정/다운로드 UI 구현 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Task Decomposition, T1. 메타데이터 어드민 라우트 분리 스캐폴딩, T10. 검수 필터 + export 확정/다운로드 UI 구현를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 codex.md이다.
