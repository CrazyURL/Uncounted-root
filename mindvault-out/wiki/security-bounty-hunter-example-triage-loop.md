# Security Bounty Hunter & Example Triage Loop
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Security Bounty Hunter** (.claude/skills/security-bounty-hunter/SKILL.md) -- 9 connections
  - -> contains -> [[when-to-use]]
  - -> contains -> [[how-it-works]]
  - -> contains -> [[in-scope-patterns]]
  - -> contains -> [[skip-these]]
  - -> contains -> [[workflow]]
  - -> contains -> [[example-triage-loop]]
  - -> contains -> [[report-structure]]
  - -> contains -> [[quality-gate]]
  - <- contains <- [[skill]]
- **Example Triage Loop** (.claude/skills/security-bounty-hunter/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[security-bounty-hunter]]
- **Report Structure** (.claude/skills/security-bounty-hunter/SKILL.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[security-bounty-hunter]]
- **bash** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- has_code_example <- [[example-triage-loop]]
- **markdown** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- has_code_example <- [[report-structure]]
- **SKILL** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - -> contains -> [[security-bounty-hunter]]
- **How It Works** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- contains <- [[security-bounty-hunter]]
- **In-Scope Patterns** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- contains <- [[security-bounty-hunter]]
- **Quality Gate** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- contains <- [[security-bounty-hunter]]
- **Skip These** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- contains <- [[security-bounty-hunter]]
- **When to Use** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- contains <- [[security-bounty-hunter]]
- **Workflow** (.claude/skills/security-bounty-hunter/SKILL.md) -- 1 connections
  - <- contains <- [[security-bounty-hunter]]

## Internal Relationships
- SKILL -> contains -> Security Bounty Hunter [EXTRACTED]
- Example Triage Loop -> has_code_example -> bash [EXTRACTED]
- Report Structure -> has_code_example -> markdown [EXTRACTED]
- Security Bounty Hunter -> contains -> When to Use [EXTRACTED]
- Security Bounty Hunter -> contains -> How It Works [EXTRACTED]
- Security Bounty Hunter -> contains -> In-Scope Patterns [EXTRACTED]
- Security Bounty Hunter -> contains -> Skip These [EXTRACTED]
- Security Bounty Hunter -> contains -> Workflow [EXTRACTED]
- Security Bounty Hunter -> contains -> Example Triage Loop [EXTRACTED]
- Security Bounty Hunter -> contains -> Report Structure [EXTRACTED]
- Security Bounty Hunter -> contains -> Quality Gate [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Bounty Hunter, Example Triage Loop, Report Structure를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
