# Process & Thread
Cohesion: 0.60 | Nodes: 6

## Key Nodes
- **Process** (path) -- 5 connections
  - -> related_to -> [[thread]]
  - -> references -> [[cpu-usage]]
  - -> references -> [[memory-usage]]
  - -> influences -> [[context-switching]]
  - -> supports -> [[resource-allocation]]
- **Thread** (path) -- 5 connections
  - -> references -> [[cpu-usage]]
  - -> references -> [[memory-usage]]
  - -> influences -> [[context-switching]]
  - -> supports -> [[resource-allocation]]
  - <- related_to <- [[process]]
- **Context Switching** (path) -- 2 connections
  - <- influences <- [[process]]
  - <- influences <- [[thread]]
- **CPU Usage** (path) -- 2 connections
  - <- references <- [[process]]
  - <- references <- [[thread]]
- **Memory Usage** (path) -- 2 connections
  - <- references <- [[process]]
  - <- references <- [[thread]]
- **Resource Allocation** (path) -- 2 connections
  - <- supports <- [[process]]
  - <- supports <- [[thread]]

## Internal Relationships
- Process -> related_to -> Thread [EXTRACTED]
- Process -> references -> CPU Usage [INFERRED]
- Process -> references -> Memory Usage [INFERRED]
- Process -> influences -> Context Switching [INFERRED]
- Process -> supports -> Resource Allocation [EXTRACTED]
- Thread -> references -> CPU Usage [INFERRED]
- Thread -> references -> Memory Usage [INFERRED]
- Thread -> influences -> Context Switching [INFERRED]
- Thread -> supports -> Resource Allocation [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Process, Thread, Context Switching를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
