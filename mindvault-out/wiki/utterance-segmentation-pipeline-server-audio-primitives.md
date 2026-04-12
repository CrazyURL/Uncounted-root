# Utterance Segmentation Pipeline & Server Audio Primitives
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Utterance Segmentation Pipeline** (path) -- 2 connections
  - <- references <- [[server-audio-primitives]]
  - <- dependencies <- [[stt-batch-pii-masking]]
- **Server Audio Primitives** (path) -- 1 connections
  - -> references -> [[utterance-segmentation-pipeline]]
- **STT Batch + PII Masking** (path) -- 1 connections
  - -> dependencies -> [[utterance-segmentation-pipeline]]

## Internal Relationships
- Server Audio Primitives -> references -> Utterance Segmentation Pipeline [EXTRACTED]
- STT Batch + PII Masking -> dependencies -> Utterance Segmentation Pipeline [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Utterance Segmentation Pipeline, Server Audio Primitives, STT Batch + PII Masking를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
