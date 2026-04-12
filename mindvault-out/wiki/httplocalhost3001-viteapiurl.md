# http://localhost:3001 & VITE_API_URL
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **http://localhost:3001** (path) -- 1 connections
  - <- configures <- [[viteapiurl]]
- **VITE_API_URL** (path) -- 1 connections
  - -> configures -> [[httplocalhost3001]]

## Internal Relationships
- VITE_API_URL -> configures -> http://localhost:3001 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 http://localhost:3001, VITE_API_URL를 중심으로 configures 관계로 연결되어 있다. 주요 소스 파일은 path이다.
