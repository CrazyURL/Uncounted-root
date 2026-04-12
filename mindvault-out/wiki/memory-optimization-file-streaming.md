# Memory Optimization & File Streaming
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Memory Optimization** (path) -- 2 connections
  - -> related_to -> [[file-streaming]]
  - <- related_to <- [[job-store]]
- **File Streaming** (path) -- 1 connections
  - <- related_to <- [[memory-optimization]]
- **Job Store** (path) -- 1 connections
  - -> related_to -> [[memory-optimization]]

## Internal Relationships
- Job Store -> related_to -> Memory Optimization [EXTRACTED]
- Memory Optimization -> related_to -> File Streaming [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Memory Optimization, File Streaming, Job Store를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
