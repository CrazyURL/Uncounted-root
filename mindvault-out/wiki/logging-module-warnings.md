# logging module & Warnings
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **logging module** (path) -- 1 connections
  - <- warns_about <- [[warnings]]
- **Warnings** (path) -- 1 connections
  - -> warns_about -> [[logging-module]]

## Internal Relationships
- Warnings -> warns_about -> logging module [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 logging module, Warnings를 중심으로 warns_about 관계로 연결되어 있다. 주요 소스 파일은 path이다.
