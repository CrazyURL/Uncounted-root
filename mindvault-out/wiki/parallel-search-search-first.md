# Parallel Search & Search-First
Cohesion: 0.11 | Nodes: 19

## Key Nodes
- **Parallel Search** (path) -- 5 connections
  - -> related_to -> [[npm]]
  - -> related_to -> [[pypi]]
  - -> related_to -> [[github]]
  - -> related_to -> [[mcp]]
  - <- references <- [[search-first]]
- **Search-First** (path) -- 5 connections
  - -> references -> [[need-analysis]]
  - -> references -> [[parallel-search]]
  - -> references -> [[evaluate]]
  - -> references -> [[decide]]
  - -> references -> [[implement]]
- **Decide** (path) -- 4 connections
  - -> references -> [[adopt]]
  - -> references -> [[extend]]
  - -> references -> [[build]]
  - <- references <- [[search-first]]
- **Evaluate** (path) -- 4 connections
  - -> evaluates -> [[dead-link-checker]]
  - -> evaluates -> [[http-client]]
  - -> evaluates -> [[config-linter]]
  - <- references <- [[search-first]]
- **Adopt** (path) -- 3 connections
  - -> implements -> [[httpx]]
  - -> implements -> [[got]]
  - <- references <- [[decide]]
- **Extend** (path) -- 2 connections
  - -> implements -> [[ajv-cli]]
  - <- references <- [[decide]]
- **ajv-cli** (path) -- 1 connections
  - <- implements <- [[extend]]
- **Build** (path) -- 1 connections
  - <- references <- [[decide]]
- **Config Linter** (path) -- 1 connections
  - <- evaluates <- [[evaluate]]
- **Dead Link Checker** (path) -- 1 connections
  - <- evaluates <- [[evaluate]]
- **GitHub** (path) -- 1 connections
  - <- related_to <- [[parallel-search]]
- **got** (path) -- 1 connections
  - <- implements <- [[adopt]]
- **HTTP Client** (path) -- 1 connections
  - <- evaluates <- [[evaluate]]
- **httpx** (path) -- 1 connections
  - <- implements <- [[adopt]]
- **Implement** (path) -- 1 connections
  - <- references <- [[search-first]]
- **MCP** (path) -- 1 connections
  - <- related_to <- [[parallel-search]]
- **Need Analysis** (path) -- 1 connections
  - <- references <- [[search-first]]
- **npm** (path) -- 1 connections
  - <- related_to <- [[parallel-search]]
- **PyPI** (path) -- 1 connections
  - <- related_to <- [[parallel-search]]

## Internal Relationships
- Adopt -> implements -> httpx [EXTRACTED]
- Adopt -> implements -> got [EXTRACTED]
- Decide -> references -> Adopt [EXTRACTED]
- Decide -> references -> Extend [EXTRACTED]
- Decide -> references -> Build [EXTRACTED]
- Evaluate -> evaluates -> Dead Link Checker [EXTRACTED]
- Evaluate -> evaluates -> HTTP Client [EXTRACTED]
- Evaluate -> evaluates -> Config Linter [EXTRACTED]
- Extend -> implements -> ajv-cli [EXTRACTED]
- Parallel Search -> related_to -> npm [EXTRACTED]
- Parallel Search -> related_to -> PyPI [EXTRACTED]
- Parallel Search -> related_to -> GitHub [EXTRACTED]
- Parallel Search -> related_to -> MCP [EXTRACTED]
- Search-First -> references -> Need Analysis [EXTRACTED]
- Search-First -> references -> Parallel Search [EXTRACTED]
- Search-First -> references -> Evaluate [EXTRACTED]
- Search-First -> references -> Decide [EXTRACTED]
- Search-First -> references -> Implement [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Parallel Search, Search-First, Decide를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
