# Error Recovery Contract & Root Cause Hint
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Error Recovery Contract** (path) -- 2 connections
  - -> related_to -> [[root-cause-hint]]
  - -> related_to -> [[safe-retry-instruction]]
- **Root Cause Hint** (path) -- 1 connections
  - <- related_to <- [[error-recovery-contract]]
- **Safe Retry Instruction** (path) -- 1 connections
  - <- related_to <- [[error-recovery-contract]]

## Internal Relationships
- Error Recovery Contract -> related_to -> Root Cause Hint [EXTRACTED]
- Error Recovery Contract -> related_to -> Safe Retry Instruction [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Error Recovery Contract, Root Cause Hint, Safe Retry Instruction를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
