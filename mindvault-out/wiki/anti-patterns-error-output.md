# Anti-Patterns & Error Output
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Anti-Patterns** (path) -- 2 connections
  - -> related_to -> [[overlapping-tools]]
  - -> related_to -> [[error-output]]
- **Error Output** (path) -- 1 connections
  - <- related_to <- [[anti-patterns]]
- **Overlapping Tools** (path) -- 1 connections
  - <- related_to <- [[anti-patterns]]

## Internal Relationships
- Anti-Patterns -> related_to -> Overlapping Tools [EXTRACTED]
- Anti-Patterns -> related_to -> Error Output [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Anti-Patterns, Error Output, Overlapping Tools를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
