# Campaign Sessions & Database Schema Migration
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **Campaign Sessions** (path) -- 1 connections
  - -> related_to -> [[database-schema-migration]]
- **Database Schema Migration** (path) -- 1 connections
  - <- related_to <- [[campaign-sessions]]

## Internal Relationships
- Campaign Sessions -> related_to -> Database Schema Migration [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Campaign Sessions, Database Schema Migration를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
