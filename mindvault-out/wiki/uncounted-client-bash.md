# Uncounted Client & bash
Cohesion: 0.60 | Nodes: 5

## Key Nodes
- **Uncounted Client** (uncounted-app/README.md) -- 4 connections
  - -> has_code_example -> [[bash]]
  - -> contains -> [[android]]
  - -> contains -> [[onnx-1]]
  - -> contains -> [[stt]]
- **bash** (uncounted-app/README.md) -- 3 connections
  - <- has_code_example <- [[uncounted-client]]
  - <- has_code_example <- [[android]]
  - <- has_code_example <- [[onnx-1]]
- **Android 기기 설치** (uncounted-app/README.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[uncounted-client]]
- **ONNX 모델 생성 (최초 1회)** (uncounted-app/README.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[uncounted-client]]
- **네이티브 STT 파이프라인** (uncounted-app/README.md) -- 1 connections
  - <- contains <- [[uncounted-client]]

## Internal Relationships
- Android 기기 설치 -> has_code_example -> bash [EXTRACTED]
- ONNX 모델 생성 (최초 1회) -> has_code_example -> bash [EXTRACTED]
- Uncounted Client -> has_code_example -> bash [EXTRACTED]
- Uncounted Client -> contains -> Android 기기 설치 [EXTRACTED]
- Uncounted Client -> contains -> ONNX 모델 생성 (최초 1회) [EXTRACTED]
- Uncounted Client -> contains -> 네이티브 STT 파이프라인 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted Client, bash, Android 기기 설치를 중심으로 has_code_example 관계로 연결되어 있다. 주요 소스 파일은 README.md이다.
