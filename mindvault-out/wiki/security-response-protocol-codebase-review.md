# Security Response Protocol & Codebase Review
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Security Response Protocol** (path) -- 3 connections
  - -> references -> [[security-issue-response]]
  - -> related_to -> [[security-reviewer-agent]]
  - -> related_to -> [[codebase-review]]
- **Codebase Review** (path) -- 1 connections
  - <- related_to <- [[security-response-protocol]]
- **Security Issue Response** (path) -- 1 connections
  - <- references <- [[security-response-protocol]]
- **Security Reviewer Agent** (path) -- 1 connections
  - <- related_to <- [[security-response-protocol]]

## Internal Relationships
- Security Response Protocol -> references -> Security Issue Response [EXTRACTED]
- Security Response Protocol -> related_to -> Security Reviewer Agent [EXTRACTED]
- Security Response Protocol -> related_to -> Codebase Review [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Response Protocol, Codebase Review, Security Issue Response를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
