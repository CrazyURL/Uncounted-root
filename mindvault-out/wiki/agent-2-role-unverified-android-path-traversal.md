# Agent 2 Role & Unverified Android Path Traversal
Cohesion: 1.00 | Nodes: 3

## Key Nodes
- **Agent 2 Role** (path) -- 2 connections
  - -> implements -> [[unverified-android-path-traversal]]
  - -> implements -> [[unverified-ts-bridge-path-traversal]]
- **Unverified Android Path Traversal** (path) -- 2 connections
  - -> related_to -> [[unverified-ts-bridge-path-traversal]]
  - <- implements <- [[agent-2-role]]
- **Unverified TS Bridge Path Traversal** (path) -- 2 connections
  - <- related_to <- [[unverified-android-path-traversal]]
  - <- implements <- [[agent-2-role]]

## Internal Relationships
- Agent 2 Role -> implements -> Unverified Android Path Traversal [EXTRACTED]
- Agent 2 Role -> implements -> Unverified TS Bridge Path Traversal [EXTRACTED]
- Unverified Android Path Traversal -> related_to -> Unverified TS Bridge Path Traversal [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent 2 Role, Unverified Android Path Traversal, Unverified TS Bridge Path Traversal를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
