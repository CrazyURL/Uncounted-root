# Task Decomposition & T0. Backend boundary prep
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **Task Decomposition** (.orchestrate-consult/20260406-133030/codex.md) -- 13 connections
  - -> contains -> [[t0-backend-boundary-prep]]
  - -> contains -> [[t1-db-migration-and-storage-bootstrap]]
  - -> contains -> [[t2-server-audio-primitives]]
  - -> contains -> [[t3-quality-metrics-job]]
  - -> contains -> [[t4-stt-batch-pii-masking-sync]]
  - -> contains -> [[t5-utterance-segmentation-pipeline]]
  - -> contains -> [[t6-pooling-ranking-and-inventory]]
  - -> contains -> [[t7-package-builder-and-download-service]]
  - -> contains -> [[t8-export-api-surface]]
  - -> contains -> [[t9-admin-api-client-and-types]]
  - -> contains -> [[t10-wizard-extension-inventory-card]]
  - -> contains -> [[t11-utterance-review-ui]]
  - -> contains -> [[t12-bulk-labeling-ui]]
- **T0. Backend boundary prep** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T10. Wizard extension + inventory card** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T11. Utterance review UI** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T12. Bulk labeling UI** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T1. DB migration and storage bootstrap** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T2. Server audio primitives** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T3. Quality metrics job** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T4. STT batch + PII masking sync** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T5. Utterance segmentation pipeline** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T6. Pooling, ranking, and inventory** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T7. Package builder and download service** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T8. Export API surface** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **T9. Admin API client and types** (.orchestrate-consult/20260406-133030/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]

## Internal Relationships
- Task Decomposition -> contains -> T0. Backend boundary prep [EXTRACTED]
- Task Decomposition -> contains -> T1. DB migration and storage bootstrap [EXTRACTED]
- Task Decomposition -> contains -> T2. Server audio primitives [EXTRACTED]
- Task Decomposition -> contains -> T3. Quality metrics job [EXTRACTED]
- Task Decomposition -> contains -> T4. STT batch + PII masking sync [EXTRACTED]
- Task Decomposition -> contains -> T5. Utterance segmentation pipeline [EXTRACTED]
- Task Decomposition -> contains -> T6. Pooling, ranking, and inventory [EXTRACTED]
- Task Decomposition -> contains -> T7. Package builder and download service [EXTRACTED]
- Task Decomposition -> contains -> T8. Export API surface [EXTRACTED]
- Task Decomposition -> contains -> T9. Admin API client and types [EXTRACTED]
- Task Decomposition -> contains -> T10. Wizard extension + inventory card [EXTRACTED]
- Task Decomposition -> contains -> T11. Utterance review UI [EXTRACTED]
- Task Decomposition -> contains -> T12. Bulk labeling UI [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Task Decomposition, T0. Backend boundary prep, T10. Wizard extension + inventory card를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 codex.md이다.
