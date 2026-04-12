# Java Security & Dependency Security
Cohesion: 0.11 | Nodes: 19

## Key Nodes
- **Java Security** (path) -- 8 connections
  - -> references -> [[secrets-management]]
  - -> references -> [[sql-injection-prevention]]
  - -> references -> [[input-validation]]
  - -> references -> [[authentication-and-authorization]]
  - -> references -> [[dependency-security]]
  - -> references -> [[error-messages]]
  - -> references -> [[spring-security]]
  - -> references -> [[security-review]]
- **Dependency Security** (path) -- 5 connections
  - -> references -> [[owasp-dependency-check]]
  - -> references -> [[snyk]]
  - -> related_to -> [[dependabot]]
  - -> related_to -> [[renovate]]
  - <- references <- [[java-security]]
- **Authentication and Authorization** (path) -- 3 connections
  - -> related_to -> [[bcrypt]]
  - -> related_to -> [[argon2]]
  - <- references <- [[java-security]]
- **Secrets Management** (path) -- 3 connections
  - -> related_to -> [[vault]]
  - -> related_to -> [[aws-secrets-manager]]
  - <- references <- [[java-security]]
- **Input Validation** (path) -- 2 connections
  - -> related_to -> [[bean-validation]]
  - <- references <- [[java-security]]
- **SQL Injection Prevention** (path) -- 2 connections
  - -> related_to -> [[preparedstatement]]
  - <- references <- [[java-security]]
- **Argon2** (path) -- 1 connections
  - <- related_to <- [[authentication-and-authorization]]
- **AWS Secrets Manager** (path) -- 1 connections
  - <- related_to <- [[secrets-management]]
- **bcrypt** (path) -- 1 connections
  - <- related_to <- [[authentication-and-authorization]]
- **Bean Validation** (path) -- 1 connections
  - <- related_to <- [[input-validation]]
- **Dependabot** (path) -- 1 connections
  - <- related_to <- [[dependency-security]]
- **Error Messages** (path) -- 1 connections
  - <- references <- [[java-security]]
- **OWASP Dependency-Check** (path) -- 1 connections
  - <- references <- [[dependency-security]]
- **PreparedStatement** (path) -- 1 connections
  - <- related_to <- [[sql-injection-prevention]]
- **Renovate** (path) -- 1 connections
  - <- related_to <- [[dependency-security]]
- **Security Review** (path) -- 1 connections
  - <- references <- [[java-security]]
- **Snyk** (path) -- 1 connections
  - <- references <- [[dependency-security]]
- **Spring Security** (path) -- 1 connections
  - <- references <- [[java-security]]
- **Vault** (path) -- 1 connections
  - <- related_to <- [[secrets-management]]

## Internal Relationships
- Authentication and Authorization -> related_to -> bcrypt [EXTRACTED]
- Authentication and Authorization -> related_to -> Argon2 [EXTRACTED]
- Dependency Security -> references -> OWASP Dependency-Check [EXTRACTED]
- Dependency Security -> references -> Snyk [EXTRACTED]
- Dependency Security -> related_to -> Dependabot [EXTRACTED]
- Dependency Security -> related_to -> Renovate [EXTRACTED]
- Input Validation -> related_to -> Bean Validation [EXTRACTED]
- Java Security -> references -> Secrets Management [EXTRACTED]
- Java Security -> references -> SQL Injection Prevention [EXTRACTED]
- Java Security -> references -> Input Validation [EXTRACTED]
- Java Security -> references -> Authentication and Authorization [EXTRACTED]
- Java Security -> references -> Dependency Security [EXTRACTED]
- Java Security -> references -> Error Messages [EXTRACTED]
- Java Security -> references -> Spring Security [EXTRACTED]
- Java Security -> references -> Security Review [EXTRACTED]
- Secrets Management -> related_to -> Vault [EXTRACTED]
- Secrets Management -> related_to -> AWS Secrets Manager [EXTRACTED]
- SQL Injection Prevention -> related_to -> PreparedStatement [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Java Security, Dependency Security, Authentication and Authorization를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
