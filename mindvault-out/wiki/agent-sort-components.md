# Agent Sort & Components
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **Agent Sort** (path) -- 9 connections
  - -> implements -> [[ecc]]
  - -> related_to -> [[daily]]
  - -> related_to -> [[library]]
  - -> requires -> [[repo-evidence]]
  - -> produces -> [[install-plan]]
  - -> produces -> [[verification-report]]
  - -> optional_output -> [[skill-library]]
  - -> provides -> [[evidence-sources]]
  - -> classifies -> [[components]]
- **Components** (path) -- 1 connections
  - <- classifies <- [[agent-sort]]
- **DAILY** (path) -- 1 connections
  - <- related_to <- [[agent-sort]]
- **ECC** (path) -- 1 connections
  - <- implements <- [[agent-sort]]
- **Evidence Sources** (path) -- 1 connections
  - <- provides <- [[agent-sort]]
- **Install Plan** (path) -- 1 connections
  - <- produces <- [[agent-sort]]
- **LIBRARY** (path) -- 1 connections
  - <- related_to <- [[agent-sort]]
- **Repo Evidence** (path) -- 1 connections
  - <- requires <- [[agent-sort]]
- **Skill Library** (path) -- 1 connections
  - <- optional_output <- [[agent-sort]]
- **Verification Report** (path) -- 1 connections
  - <- produces <- [[agent-sort]]

## Internal Relationships
- Agent Sort -> implements -> ECC [EXTRACTED]
- Agent Sort -> related_to -> DAILY [EXTRACTED]
- Agent Sort -> related_to -> LIBRARY [EXTRACTED]
- Agent Sort -> requires -> Repo Evidence [EXTRACTED]
- Agent Sort -> produces -> Install Plan [EXTRACTED]
- Agent Sort -> produces -> Verification Report [EXTRACTED]
- Agent Sort -> optional_output -> Skill Library [EXTRACTED]
- Agent Sort -> provides -> Evidence Sources [EXTRACTED]
- Agent Sort -> classifies -> Components [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent Sort, Components, DAILY를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
