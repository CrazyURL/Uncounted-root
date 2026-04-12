# Dependency Injection & Hilt
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **Dependency Injection** (path) -- 2 connections
  - -> implements -> [[koin]]
  - -> implements -> [[hilt]]
- **Hilt** (path) -- 1 connections
  - <- implements <- [[dependency-injection]]
- **Koin** (path) -- 1 connections
  - <- implements <- [[dependency-injection]]

## Internal Relationships
- Dependency Injection -> implements -> Koin [EXTRACTED]
- Dependency Injection -> implements -> Hilt [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Dependency Injection, Hilt, Koin를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
