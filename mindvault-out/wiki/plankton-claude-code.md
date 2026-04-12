# Plankton & Claude Code
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Plankton** (path) -- 4 connections
  - -> implements -> [[claude-code]]
  - -> related_to -> [[config-protection]]
  - -> related_to -> [[package-manager-enforcement]]
  - -> complementary -> [[ecc]]
- **Claude Code** (path) -- 1 connections
  - <- implements <- [[plankton]]
- **Config Protection** (path) -- 1 connections
  - <- related_to <- [[plankton]]
- **ECC** (path) -- 1 connections
  - <- complementary <- [[plankton]]
- **Package Manager Enforcement** (path) -- 1 connections
  - <- related_to <- [[plankton]]

## Internal Relationships
- Plankton -> implements -> Claude Code [EXTRACTED]
- Plankton -> related_to -> Config Protection [INFERRED]
- Plankton -> related_to -> Package Manager Enforcement [INFERRED]
- Plankton -> complementary -> ECC [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Plankton, Claude Code, Config Protection를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
