# CWE-502 & Embedding Extractor
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **CWE-502** (path) -- 4 connections
  - -> related_to -> [[embedding-extractor]]
  - -> related_to -> [[onnx-stt-runner]]
  - <- references <- [[embedding-extractor]]
  - <- references <- [[onnx-stt-runner]]
- **Embedding Extractor** (path) -- 2 connections
  - -> references -> [[cwe-502]]
  - <- related_to <- [[cwe-502]]
- **ONNX STT Runner** (path) -- 2 connections
  - -> references -> [[cwe-502]]
  - <- related_to <- [[cwe-502]]

## Internal Relationships
- CWE-502 -> related_to -> Embedding Extractor [INFERRED]
- CWE-502 -> related_to -> ONNX STT Runner [INFERRED]
- Embedding Extractor -> references -> CWE-502 [EXTRACTED]
- ONNX STT Runner -> references -> CWE-502 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 CWE-502, Embedding Extractor, ONNX STT Runner를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
