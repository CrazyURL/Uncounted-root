# Performance Optimizations & performance
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Performance Optimizations** (uncounted-voice-api/.claude/rules/python/performance.md) -- 5 connections
  - -> contains -> [[deepfilternet-cuda-isolation]]
  - -> contains -> [[preprocessing-pipeline-4-stages]]
  - -> contains -> [[memory-management]]
  - -> contains -> [[critical-constraints]]
  - <- contains <- [[performance]]
- **performance** (uncounted-voice-api/.claude/rules/python/performance.md) -- 1 connections
  - -> contains -> [[performance-optimizations]]
- **Critical Constraints** (uncounted-voice-api/.claude/rules/python/performance.md) -- 1 connections
  - <- contains <- [[performance-optimizations]]
- **DeepFilterNet CUDA Isolation** (uncounted-voice-api/.claude/rules/python/performance.md) -- 1 connections
  - <- contains <- [[performance-optimizations]]
- **Memory Management** (uncounted-voice-api/.claude/rules/python/performance.md) -- 1 connections
  - <- contains <- [[performance-optimizations]]
- **Preprocessing Pipeline (4 stages)** (uncounted-voice-api/.claude/rules/python/performance.md) -- 1 connections
  - <- contains <- [[performance-optimizations]]

## Internal Relationships
- performance -> contains -> Performance Optimizations [EXTRACTED]
- Performance Optimizations -> contains -> DeepFilterNet CUDA Isolation [EXTRACTED]
- Performance Optimizations -> contains -> Preprocessing Pipeline (4 stages) [EXTRACTED]
- Performance Optimizations -> contains -> Memory Management [EXTRACTED]
- Performance Optimizations -> contains -> Critical Constraints [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Performance Optimizations, performance, Critical Constraints를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 performance.md이다.
