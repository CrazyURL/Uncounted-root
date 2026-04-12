# 2. build.gradle ONNX Runtime 의존성 제거 & [BLOCK] 반드시 함께 처리해야 할 항목
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **2. build.gradle ONNX Runtime 의존성 제거** (uncounted-docs/앱/온디바이스_모델_파일_제거_분석.md) -- 2 connections
  - -> has_code_example -> [[gradle]]
  - <- contains <- [[block]]
- **[BLOCK] 반드시 함께 처리해야 할 항목** (uncounted-docs/앱/온디바이스_모델_파일_제거_분석.md) -- 2 connections
  - -> contains -> [[1]]
  - -> contains -> [[2-buildgradle-onnx-runtime]]
- **gradle** (uncounted-docs/앱/온디바이스_모델_파일_제거_분석.md) -- 1 connections
  - <- has_code_example <- [[2-buildgradle-onnx-runtime]]
- **1. 테스트 파일 삭제** (uncounted-docs/앱/온디바이스_모델_파일_제거_분석.md) -- 1 connections
  - <- contains <- [[block]]

## Internal Relationships
- 2. build.gradle ONNX Runtime 의존성 제거 -> has_code_example -> gradle [EXTRACTED]
- [BLOCK] 반드시 함께 처리해야 할 항목 -> contains -> 1. 테스트 파일 삭제 [EXTRACTED]
- [BLOCK] 반드시 함께 처리해야 할 항목 -> contains -> 2. build.gradle ONNX Runtime 의존성 제거 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 2. build.gradle ONNX Runtime 의존성 제거, [BLOCK] 반드시 함께 처리해야 할 항목, gradle를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 온디바이스_모델_파일_제거_분석.md이다.
