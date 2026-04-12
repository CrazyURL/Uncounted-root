# Security Review Skill & Authentication
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **Security Review Skill** (path) -- 13 connections
  - -> related_to -> [[authentication]]
  - -> related_to -> [[authorization]]
  - -> related_to -> [[input-validation]]
  - -> related_to -> [[sql-injection-prevention]]
  - -> related_to -> [[xss-prevention]]
  - -> related_to -> [[csrf-protection]]
  - -> related_to -> [[rate-limiting]]
  - -> related_to -> [[sensitive-data-exposure]]
  - -> related_to -> [[blockchain-security]]
  - -> related_to -> [[dependency-security]]
  - -> related_to -> [[security-testing]]
  - -> related_to -> [[pre-deployment-security-checklist]]
  - -> related_to -> [[security-resources]]
- **Authentication** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Authorization** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Blockchain Security** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **CSRF Protection** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Dependency Security** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Input Validation** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Pre-Deployment Security Checklist** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Rate Limiting** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Security Resources** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Security Testing** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **Sensitive Data Exposure** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **SQL Injection Prevention** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]
- **XSS Prevention** (path) -- 1 connections
  - <- related_to <- [[security-review-skill]]

## Internal Relationships
- Security Review Skill -> related_to -> Authentication [EXTRACTED]
- Security Review Skill -> related_to -> Authorization [EXTRACTED]
- Security Review Skill -> related_to -> Input Validation [EXTRACTED]
- Security Review Skill -> related_to -> SQL Injection Prevention [EXTRACTED]
- Security Review Skill -> related_to -> XSS Prevention [EXTRACTED]
- Security Review Skill -> related_to -> CSRF Protection [EXTRACTED]
- Security Review Skill -> related_to -> Rate Limiting [EXTRACTED]
- Security Review Skill -> related_to -> Sensitive Data Exposure [EXTRACTED]
- Security Review Skill -> related_to -> Blockchain Security [EXTRACTED]
- Security Review Skill -> related_to -> Dependency Security [EXTRACTED]
- Security Review Skill -> related_to -> Security Testing [EXTRACTED]
- Security Review Skill -> related_to -> Pre-Deployment Security Checklist [EXTRACTED]
- Security Review Skill -> related_to -> Security Resources [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Review Skill, Authentication, Authorization를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
