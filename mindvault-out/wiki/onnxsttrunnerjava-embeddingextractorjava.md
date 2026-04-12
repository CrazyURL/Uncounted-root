# OnnxSttRunner.java & EmbeddingExtractor.java
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **OnnxSttRunner.java** (path) -- 2 connections
  - -> implements -> [[embeddingextractorjava]]
  - -> implements -> [[mfccextractorjava]]
- **EmbeddingExtractor.java** (path) -- 1 connections
  - <- implements <- [[onnxsttrunnerjava]]
- **MfccExtractor.java** (path) -- 1 connections
  - <- implements <- [[onnxsttrunnerjava]]

## Internal Relationships
- OnnxSttRunner.java -> implements -> EmbeddingExtractor.java [EXTRACTED]
- OnnxSttRunner.java -> implements -> MfccExtractor.java [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 OnnxSttRunner.java, EmbeddingExtractor.java, MfccExtractor.java를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
