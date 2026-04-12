# Security Scan Skill & Usage
Cohesion: 0.12 | Nodes: 21

## Key Nodes
- **Security Scan Skill** (.claude/skills/security-scan/SKILL.md) -- 8 connections
  - -> contains -> [[when-to-activate]]
  - -> contains -> [[what-it-scans]]
  - -> contains -> [[prerequisites]]
  - -> contains -> [[usage]]
  - -> contains -> [[severity-levels]]
  - -> contains -> [[interpreting-results]]
  - -> contains -> [[links]]
  - <- contains <- [[skill]]
- **Usage** (.claude/skills/security-scan/SKILL.md) -- 7 connections
  - -> contains -> [[basic-scan]]
  - -> contains -> [[output-formats]]
  - -> contains -> [[auto-fix]]
  - -> contains -> [[opus-46-deep-analysis]]
  - -> contains -> [[initialize-secure-config]]
  - -> contains -> [[github-action]]
  - <- contains <- [[security-scan-skill]]
- **bash** (.claude/skills/security-scan/SKILL.md) -- 6 connections
  - <- has_code_example <- [[prerequisites]]
  - <- has_code_example <- [[basic-scan]]
  - <- has_code_example <- [[output-formats]]
  - <- has_code_example <- [[auto-fix]]
  - <- has_code_example <- [[opus-46-deep-analysis]]
  - <- has_code_example <- [[initialize-secure-config]]
- **Interpreting Results** (.claude/skills/security-scan/SKILL.md) -- 5 connections
  - -> contains -> [[critical-findings-fix-immediately]]
  - -> contains -> [[high-findings-fix-before-production]]
  - -> contains -> [[medium-findings-recommended]]
  - -> contains -> [[info-findings-awareness]]
  - <- contains <- [[security-scan-skill]]
- **Auto-Fix** (.claude/skills/security-scan/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[usage]]
- **Basic Scan** (.claude/skills/security-scan/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[usage]]
- **GitHub Action** (.claude/skills/security-scan/SKILL.md) -- 2 connections
  - -> has_code_example -> [[yaml]]
  - <- contains <- [[usage]]
- **Initialize Secure Config** (.claude/skills/security-scan/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[usage]]
- **Opus 4.6 Deep Analysis** (.claude/skills/security-scan/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[usage]]
- **Output Formats** (.claude/skills/security-scan/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[usage]]
- **Prerequisites** (.claude/skills/security-scan/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[security-scan-skill]]
- **yaml** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- has_code_example <- [[github-action]]
- **SKILL** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - -> contains -> [[security-scan-skill]]
- **Critical Findings (fix immediately)** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[interpreting-results]]
- **High Findings (fix before production)** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[interpreting-results]]
- **Info Findings (awareness)** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[interpreting-results]]
- **Links** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[security-scan-skill]]
- **Medium Findings (recommended)** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[interpreting-results]]
- **Severity Levels** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[security-scan-skill]]
- **What It Scans** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[security-scan-skill]]
- **When to Activate** (.claude/skills/security-scan/SKILL.md) -- 1 connections
  - <- contains <- [[security-scan-skill]]

## Internal Relationships
- SKILL -> contains -> Security Scan Skill [EXTRACTED]
- Auto-Fix -> has_code_example -> bash [EXTRACTED]
- Basic Scan -> has_code_example -> bash [EXTRACTED]
- GitHub Action -> has_code_example -> yaml [EXTRACTED]
- Initialize Secure Config -> has_code_example -> bash [EXTRACTED]
- Interpreting Results -> contains -> Critical Findings (fix immediately) [EXTRACTED]
- Interpreting Results -> contains -> High Findings (fix before production) [EXTRACTED]
- Interpreting Results -> contains -> Medium Findings (recommended) [EXTRACTED]
- Interpreting Results -> contains -> Info Findings (awareness) [EXTRACTED]
- Opus 4.6 Deep Analysis -> has_code_example -> bash [EXTRACTED]
- Output Formats -> has_code_example -> bash [EXTRACTED]
- Prerequisites -> has_code_example -> bash [EXTRACTED]
- Security Scan Skill -> contains -> When to Activate [EXTRACTED]
- Security Scan Skill -> contains -> What It Scans [EXTRACTED]
- Security Scan Skill -> contains -> Prerequisites [EXTRACTED]
- Security Scan Skill -> contains -> Usage [EXTRACTED]
- Security Scan Skill -> contains -> Severity Levels [EXTRACTED]
- Security Scan Skill -> contains -> Interpreting Results [EXTRACTED]
- Security Scan Skill -> contains -> Links [EXTRACTED]
- Usage -> contains -> Basic Scan [EXTRACTED]
- Usage -> contains -> Output Formats [EXTRACTED]
- Usage -> contains -> Auto-Fix [EXTRACTED]
- Usage -> contains -> Opus 4.6 Deep Analysis [EXTRACTED]
- Usage -> contains -> Initialize Secure Config [EXTRACTED]
- Usage -> contains -> GitHub Action [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Scan Skill, Usage, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
