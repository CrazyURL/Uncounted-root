# PR Triage & Active Work
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **PR Triage** (path) -- 6 connections
  - -> references -> [[issue-backlog]]
  - -> references -> [[active-work]]
  - <- implements <- [[merge]]
  - <- implements <- [[portrebuild]]
  - <- implements <- [[close]]
  - <- implements <- [[park]]
- **Active Work** (path) -- 2 connections
  - -> related_to -> [[internal-execution]]
  - <- references <- [[pr-triage]]
- **Close** (path) -- 1 connections
  - -> implements -> [[pr-triage]]
- **Internal Execution** (path) -- 1 connections
  - <- related_to <- [[active-work]]
- **Issue Backlog** (path) -- 1 connections
  - <- references <- [[pr-triage]]
- **Merge** (path) -- 1 connections
  - -> implements -> [[pr-triage]]
- **Park** (path) -- 1 connections
  - -> implements -> [[pr-triage]]
- **Port/Rebuild** (path) -- 1 connections
  - -> implements -> [[pr-triage]]

## Internal Relationships
- Active Work -> related_to -> Internal Execution [INFERRED]
- Close -> implements -> PR Triage [EXTRACTED]
- Merge -> implements -> PR Triage [EXTRACTED]
- Park -> implements -> PR Triage [EXTRACTED]
- Port/Rebuild -> implements -> PR Triage [EXTRACTED]
- PR Triage -> references -> Issue Backlog [EXTRACTED]
- PR Triage -> references -> Active Work [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 PR Triage, Active Work, Close를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
