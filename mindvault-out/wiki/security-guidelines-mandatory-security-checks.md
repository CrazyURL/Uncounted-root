# Security Guidelines & Mandatory Security Checks
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Security Guidelines** (.claude/rules/common/security.md) -- 3 connections
  - -> contains -> [[mandatory-security-checks]]
  - -> contains -> [[secret-management]]
  - -> contains -> [[security-response-protocol]]
- **Mandatory Security Checks** (.claude/rules/common/security.md) -- 1 connections
  - <- contains <- [[security-guidelines]]
- **Secret Management** (.claude/rules/common/security.md) -- 1 connections
  - <- contains <- [[security-guidelines]]
- **Security Response Protocol** (.claude/rules/common/security.md) -- 1 connections
  - <- contains <- [[security-guidelines]]

## Internal Relationships
- Security Guidelines -> contains -> Mandatory Security Checks [EXTRACTED]
- Security Guidelines -> contains -> Secret Management [EXTRACTED]
- Security Guidelines -> contains -> Security Response Protocol [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Guidelines, Mandatory Security Checks, Secret Management를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 security.md이다.
