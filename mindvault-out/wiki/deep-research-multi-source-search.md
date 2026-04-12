# Deep Research & Multi-Source Search
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **Deep Research** (path) -- 3 connections
  - -> uses -> [[firecrawl-mcp]]
  - -> uses -> [[exa-mcp]]
  - -> includes -> [[multi-source-search]]
- **Multi-Source Search** (path) -- 3 connections
  - -> involves -> [[research-strategy]]
  - -> leads_to -> [[synthesize-and-write-report]]
  - <- includes <- [[deep-research]]
- **Synthesize and Write Report** (path) -- 2 connections
  - -> details -> [[methodology]]
  - <- leads_to <- [[multi-source-search]]
- **Exa MCP** (path) -- 1 connections
  - <- uses <- [[deep-research]]
- **Firecrawl MCP** (path) -- 1 connections
  - <- uses <- [[deep-research]]
- **Methodology** (path) -- 1 connections
  - <- details <- [[synthesize-and-write-report]]
- **Research Strategy** (path) -- 1 connections
  - <- involves <- [[multi-source-search]]

## Internal Relationships
- Deep Research -> uses -> Firecrawl MCP [EXTRACTED]
- Deep Research -> uses -> Exa MCP [EXTRACTED]
- Deep Research -> includes -> Multi-Source Search [EXTRACTED]
- Multi-Source Search -> involves -> Research Strategy [EXTRACTED]
- Multi-Source Search -> leads_to -> Synthesize and Write Report [EXTRACTED]
- Synthesize and Write Report -> details -> Methodology [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Deep Research, Multi-Source Search, Synthesize and Write Report를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 path이다.
