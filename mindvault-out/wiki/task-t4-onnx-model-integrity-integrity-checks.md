# Task T4: ONNX Model Integrity & Integrity Checks
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Task T4: ONNX Model Integrity** (EmbeddingExtractor.java) -- 2 connections
  - -> implements -> [[integrity-checks]]
  - <- related_to <- [[performance-risk]]
- **Integrity Checks** (path) -- 1 connections
  - <- implements <- [[task-t4-onnx-model-integrity]]
- **Performance Risk** (path) -- 1 connections
  - -> related_to -> [[task-t4-onnx-model-integrity]]

## Internal Relationships
- Performance Risk -> related_to -> Task T4: ONNX Model Integrity [INFERRED]
- Task T4: ONNX Model Integrity -> implements -> Integrity Checks [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Task T4: ONNX Model Integrity, Integrity Checks, Performance Risk를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 EmbeddingExtractor.java, path이다.
