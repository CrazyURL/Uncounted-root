# CWE-190 & WAV Parser
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **CWE-190** (path) -- 2 connections
  - -> related_to -> [[wav-parser]]
  - <- references <- [[wav-parser]]
- **WAV Parser** (path) -- 2 connections
  - -> references -> [[cwe-190]]
  - <- related_to <- [[cwe-190]]

## Internal Relationships
- CWE-190 -> related_to -> WAV Parser [INFERRED]
- WAV Parser -> references -> CWE-190 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 CWE-190, WAV Parser를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
