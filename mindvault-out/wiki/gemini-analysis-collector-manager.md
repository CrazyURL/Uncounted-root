# Gemini Analysis & Collector Manager
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Gemini Analysis** (path) -- 3 connections
  - -> related_to -> [[testing-risks]]
  - -> references -> [[collector-manager]]
  - -> references -> [[device-service]]
- **Collector Manager** (path) -- 1 connections
  - <- references <- [[gemini-analysis]]
- **Device Service** (path) -- 1 connections
  - <- references <- [[gemini-analysis]]
- **Testing Risks** (path) -- 1 connections
  - <- related_to <- [[gemini-analysis]]

## Internal Relationships
- Gemini Analysis -> related_to -> Testing Risks [EXTRACTED]
- Gemini Analysis -> references -> Collector Manager [EXTRACTED]
- Gemini Analysis -> references -> Device Service [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Gemini Analysis, Collector Manager, Device Service를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
