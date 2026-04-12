# Iterative Retrieval & EVALUATE Phase
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **Iterative Retrieval** (path) -- 5 connections
  - -> references -> [[context-problem]]
  - -> references -> [[dispatch-phase]]
  - -> references -> [[evaluate-phase]]
  - -> references -> [[refine-phase]]
  - -> references -> [[loop-phase]]
- **EVALUATE Phase** (path) -- 3 connections
  - -> implements -> [[scoring-criteria]]
  - -> implements -> [[identify-gaps]]
  - <- references <- [[iterative-retrieval]]
- **REFINE Phase** (path) -- 3 connections
  - -> implements -> [[patterns-extraction]]
  - -> implements -> [[keywords-extraction]]
  - <- references <- [[iterative-retrieval]]
- **DISPATCH Phase** (path) -- 2 connections
  - -> related_to -> [[retrieval-agent]]
  - <- references <- [[iterative-retrieval]]
- **Feature Implementation Context** (path) -- 2 connections
  - -> related_to -> [[medium-relevance]]
  - -> references -> [[scoring-criteria]]
- **LOOP Phase** (path) -- 2 connections
  - -> related_to -> [[context-refinement]]
  - <- references <- [[iterative-retrieval]]
- **Scoring Criteria** (path) -- 2 connections
  - <- implements <- [[evaluate-phase]]
  - <- references <- [[feature-implementation-context]]
- **Context Problem** (path) -- 1 connections
  - <- references <- [[iterative-retrieval]]
- **Context Refinement** (path) -- 1 connections
  - <- related_to <- [[loop-phase]]
- **Identify Gaps** (path) -- 1 connections
  - <- implements <- [[evaluate-phase]]
- **Keywords Extraction** (path) -- 1 connections
  - <- implements <- [[refine-phase]]
- **Medium Relevance** (path) -- 1 connections
  - <- related_to <- [[feature-implementation-context]]
- **Patterns Extraction** (path) -- 1 connections
  - <- implements <- [[refine-phase]]
- **Retrieval Agent** (path) -- 1 connections
  - <- related_to <- [[dispatch-phase]]

## Internal Relationships
- DISPATCH Phase -> related_to -> Retrieval Agent [INFERRED]
- EVALUATE Phase -> implements -> Scoring Criteria [EXTRACTED]
- EVALUATE Phase -> implements -> Identify Gaps [EXTRACTED]
- Feature Implementation Context -> related_to -> Medium Relevance [INFERRED]
- Feature Implementation Context -> references -> Scoring Criteria [EXTRACTED]
- Iterative Retrieval -> references -> Context Problem [EXTRACTED]
- Iterative Retrieval -> references -> DISPATCH Phase [EXTRACTED]
- Iterative Retrieval -> references -> EVALUATE Phase [EXTRACTED]
- Iterative Retrieval -> references -> REFINE Phase [EXTRACTED]
- Iterative Retrieval -> references -> LOOP Phase [EXTRACTED]
- LOOP Phase -> related_to -> Context Refinement [INFERRED]
- REFINE Phase -> implements -> Patterns Extraction [EXTRACTED]
- REFINE Phase -> implements -> Keywords Extraction [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Iterative Retrieval, EVALUATE Phase, REFINE Phase를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
