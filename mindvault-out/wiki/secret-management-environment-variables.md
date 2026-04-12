# Secret Management & Environment Variables
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Secret Management** (path) -- 3 connections
  - -> references -> [[hardcoded-secrets]]
  - -> references -> [[environment-variables]]
  - -> references -> [[security-reviewer-skill]]
- **Environment Variables** (path) -- 2 connections
  - -> related_to -> [[api-key-configuration]]
  - <- references <- [[secret-management]]
- **Security Reviewer Skill** (path) -- 2 connections
  - -> related_to -> [[comprehensive-security-audits]]
  - <- references <- [[secret-management]]
- **API Key Configuration** (path) -- 1 connections
  - <- related_to <- [[environment-variables]]
- **Comprehensive Security Audits** (path) -- 1 connections
  - <- related_to <- [[security-reviewer-skill]]
- **Hardcoded Secrets** (path) -- 1 connections
  - <- references <- [[secret-management]]

## Internal Relationships
- Environment Variables -> related_to -> API Key Configuration [INFERRED]
- Secret Management -> references -> Hardcoded Secrets [EXTRACTED]
- Secret Management -> references -> Environment Variables [EXTRACTED]
- Secret Management -> references -> Security Reviewer Skill [EXTRACTED]
- Security Reviewer Skill -> related_to -> Comprehensive Security Audits [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Secret Management, Environment Variables, Security Reviewer Skill를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
