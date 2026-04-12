# Granularity Rules & Action Space Design
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Granularity Rules** (path) -- 4 connections
  - -> related_to -> [[micro-tools]]
  - -> related_to -> [[medium-tools]]
  - -> related_to -> [[macro-tools]]
  - <- related_to <- [[action-space-design]]
- **Action Space Design** (path) -- 3 connections
  - -> related_to -> [[granularity-rules]]
  - -> EXTRACTED -> [[stable-tool-names]]
  - <- related_to <- [[core-model]]
- **Core Model** (path) -- 2 connections
  - -> related_to -> [[action-space-design]]
  - <- related_to <- [[agent-harness-construction]]
- **Agent Harness Construction** (path) -- 1 connections
  - -> related_to -> [[core-model]]
- **Macro Tools** (path) -- 1 connections
  - <- related_to <- [[granularity-rules]]
- **Medium Tools** (path) -- 1 connections
  - <- related_to <- [[granularity-rules]]
- **Micro Tools** (path) -- 1 connections
  - <- related_to <- [[granularity-rules]]
- **Stable Tool Names** (path) -- 1 connections
  - <- EXTRACTED <- [[action-space-design]]

## Internal Relationships
- Action Space Design -> related_to -> Granularity Rules [EXTRACTED]
- Action Space Design -> EXTRACTED -> Stable Tool Names [EXTRACTED]
- Agent Harness Construction -> related_to -> Core Model [EXTRACTED]
- Core Model -> related_to -> Action Space Design [EXTRACTED]
- Granularity Rules -> related_to -> Micro Tools [EXTRACTED]
- Granularity Rules -> related_to -> Medium Tools [EXTRACTED]
- Granularity Rules -> related_to -> Macro Tools [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Granularity Rules, Action Space Design, Core Model를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
