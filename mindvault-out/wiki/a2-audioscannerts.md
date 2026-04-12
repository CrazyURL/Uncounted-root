# A2. 파일 스캔 & 품질 분석 & audioScanner.ts
Cohesion: 0.12 | Nodes: 16

## Key Nodes
- **A2. 파일 스캔 & 품질 분석** (path) -- 13 connections
  - -> references -> [[cwe-22-path-traversal]]
  - -> references -> [[cwe-400-resource-consumption]]
  - -> references -> [[cwe-119-buffer-overflow]]
  - -> references -> [[cwe-327-brokenrisky-crypto]]
  - -> references -> [[cwe-200-sensitive-info-exposure]]
  - -> references -> [[cwe-502-deserialization-of-untrusted-data]]
  - -> related_to -> [[stride]]
  - -> implements -> [[audioscannerts]]
  - <- conducts <- [[security-reviewer-a]]
  - <- conducts <- [[security-reviewer-b]]
  - <- oversees <- [[lead-security-architect]]
  - <- reviews <- [[mobilenative-security-engineer]]
  - <- reviews <- [[tsfull-stack-engineer]]
- **audioScanner.ts** (path) -- 3 connections
  - -> related_to -> [[scanenginets]]
  - -> related_to -> [[audiofileloaderts]]
  - <- implements <- [[a2]]
- **audioFileLoader.ts** (path) -- 1 connections
  - <- related_to <- [[audioscannerts]]
- **CWE-119 (Buffer Overflow)** (path) -- 1 connections
  - <- references <- [[a2]]
- **CWE-200 (Sensitive Info Exposure)** (path) -- 1 connections
  - <- references <- [[a2]]
- **CWE-22 (Path Traversal)** (path) -- 1 connections
  - <- references <- [[a2]]
- **CWE-327 (Broken/Risky Crypto)** (path) -- 1 connections
  - <- references <- [[a2]]
- **CWE-400 (Resource Consumption)** (path) -- 1 connections
  - <- references <- [[a2]]
- **CWE-502 (Deserialization of Untrusted Data)** (path) -- 1 connections
  - <- references <- [[a2]]
- **Lead Security Architect** (path) -- 1 connections
  - -> oversees -> [[a2]]
- **Mobile/Native Security Engineer** (path) -- 1 connections
  - -> reviews -> [[a2]]
- **scanEngine.ts** (path) -- 1 connections
  - <- related_to <- [[audioscannerts]]
- **Security Reviewer A** (path) -- 1 connections
  - -> conducts -> [[a2]]
- **Security Reviewer B** (path) -- 1 connections
  - -> conducts -> [[a2]]
- **STRIDE 모델링** (path) -- 1 connections
  - <- related_to <- [[a2]]
- **TS/Full-stack Engineer** (path) -- 1 connections
  - -> reviews -> [[a2]]

## Internal Relationships
- A2. 파일 스캔 & 품질 분석 -> references -> CWE-22 (Path Traversal) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 -> references -> CWE-400 (Resource Consumption) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 -> references -> CWE-119 (Buffer Overflow) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 -> references -> CWE-327 (Broken/Risky Crypto) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 -> references -> CWE-200 (Sensitive Info Exposure) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 -> references -> CWE-502 (Deserialization of Untrusted Data) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 -> related_to -> STRIDE 모델링 [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 -> implements -> audioScanner.ts [EXTRACTED]
- audioScanner.ts -> related_to -> scanEngine.ts [INFERRED]
- audioScanner.ts -> related_to -> audioFileLoader.ts [INFERRED]
- Lead Security Architect -> oversees -> A2. 파일 스캔 & 품질 분석 [EXTRACTED]
- Mobile/Native Security Engineer -> reviews -> A2. 파일 스캔 & 품질 분석 [EXTRACTED]
- Security Reviewer A -> conducts -> A2. 파일 스캔 & 품질 분석 [EXTRACTED]
- Security Reviewer B -> conducts -> A2. 파일 스캔 & 품질 분석 [EXTRACTED]
- TS/Full-stack Engineer -> reviews -> A2. 파일 스캔 & 품질 분석 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 A2. 파일 스캔 & 품질 분석, audioScanner.ts, audioFileLoader.ts를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
