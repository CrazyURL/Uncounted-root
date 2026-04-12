# Hybrid Batch-First 아키텍처 & CLOVA Speech API
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Hybrid Batch-First 아키텍처** (architecture) -- 3 connections
  - -> references -> [[clova-speech-api]]
  - <- related_to <- [[sku-v3]]
  - <- implements <- [[silero-vad-onnx]]
- **CLOVA Speech API** (serverside) -- 1 connections
  - <- references <- [[hybrid-batch-first]]
- **Silero VAD (ONNX)** (on_device) -- 1 connections
  - -> implements -> [[hybrid-batch-first]]
- **SKU 데이터셋 추출 시스템 v3** (prompt_plan.md) -- 1 connections
  - -> related_to -> [[hybrid-batch-first]]

## Internal Relationships
- Hybrid Batch-First 아키텍처 -> references -> CLOVA Speech API [EXTRACTED]
- Silero VAD (ONNX) -> implements -> Hybrid Batch-First 아키텍처 [EXTRACTED]
- SKU 데이터셋 추출 시스템 v3 -> related_to -> Hybrid Batch-First 아키텍처 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Hybrid Batch-First 아키텍처, CLOVA Speech API, Silero VAD (ONNX)를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 architecture, on_device, prompt_plan.md, serverside이다.
