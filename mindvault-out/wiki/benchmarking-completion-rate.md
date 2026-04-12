# Benchmarking & Completion Rate
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Benchmarking** (path) -- 5 connections
  - -> related_to -> [[completion-rate]]
  - -> related_to -> [[retries-per-task]]
  - -> related_to -> [[pass1]]
  - -> related_to -> [[pass3]]
  - -> related_to -> [[cost-per-successful-task]]
- **Completion Rate** (path) -- 1 connections
  - <- related_to <- [[benchmarking]]
- **Cost per Successful Task** (path) -- 1 connections
  - <- related_to <- [[benchmarking]]
- **Pass@1** (path) -- 1 connections
  - <- related_to <- [[benchmarking]]
- **Pass@3** (path) -- 1 connections
  - <- related_to <- [[benchmarking]]
- **Retries per Task** (path) -- 1 connections
  - <- related_to <- [[benchmarking]]

## Internal Relationships
- Benchmarking -> related_to -> Completion Rate [EXTRACTED]
- Benchmarking -> related_to -> Retries per Task [EXTRACTED]
- Benchmarking -> related_to -> Pass@1 [EXTRACTED]
- Benchmarking -> related_to -> Pass@3 [EXTRACTED]
- Benchmarking -> related_to -> Cost per Successful Task [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Benchmarking, Completion Rate, Cost per Successful Task를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
