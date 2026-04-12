# Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis) & Security Review
Cohesion: 0.20 | Nodes: 11

## Key Nodes
- **Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis)** (.orchestrate-consult/20260327-210056/gemini.md) -- 5 connections
  - -> contains -> [[summary-2-3-sentences]]
  - -> contains -> [[security-review]]
  - -> contains -> [[code-quality-review]]
  - -> contains -> [[task-decomposition-for-fixes]]
  - -> contains -> [[confidence-level-highmediumlow-with-reason]]
- **Security Review** (.orchestrate-consult/20260327-210056/gemini.md) -- 5 connections
  - -> contains -> [[critical-issues-must-fix-before-production]]
  - -> contains -> [[high-issues-should-fix-soon]]
  - -> contains -> [[medium-issues-recommended-fixes]]
  - -> contains -> [[low-issues-nice-to-have]]
  - <- contains <- [[security-audit-and-code-review-a2-file-scan-quality-analysis]]
- **typescript** (.orchestrate-consult/20260327-210056/gemini.md) -- 2 connections
  - <- has_code_example <- [[high-issues-should-fix-soon]]
  - <- has_code_example <- [[medium-issues-recommended-fixes]]
- **HIGH Issues (should fix soon)** (.orchestrate-consult/20260327-210056/gemini.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[security-review]]
- **MEDIUM Issues (recommended fixes)** (.orchestrate-consult/20260327-210056/gemini.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[security-review]]
- **Code Quality Review** (.orchestrate-consult/20260327-210056/gemini.md) -- 1 connections
  - <- contains <- [[security-audit-and-code-review-a2-file-scan-quality-analysis]]
- **Confidence Level (High/Medium/Low with reason)** (.orchestrate-consult/20260327-210056/gemini.md) -- 1 connections
  - <- contains <- [[security-audit-and-code-review-a2-file-scan-quality-analysis]]
- **CRITICAL Issues (must fix before production)** (.orchestrate-consult/20260327-210056/gemini.md) -- 1 connections
  - <- contains <- [[security-review]]
- **LOW Issues (nice to have)** (.orchestrate-consult/20260327-210056/gemini.md) -- 1 connections
  - <- contains <- [[security-review]]
- **Summary (2-3 sentences)** (.orchestrate-consult/20260327-210056/gemini.md) -- 1 connections
  - <- contains <- [[security-audit-and-code-review-a2-file-scan-quality-analysis]]
- **Task Decomposition for Fixes** (.orchestrate-consult/20260327-210056/gemini.md) -- 1 connections
  - <- contains <- [[security-audit-and-code-review-a2-file-scan-quality-analysis]]

## Internal Relationships
- HIGH Issues (should fix soon) -> has_code_example -> typescript [EXTRACTED]
- MEDIUM Issues (recommended fixes) -> has_code_example -> typescript [EXTRACTED]
- Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis) -> contains -> Summary (2-3 sentences) [EXTRACTED]
- Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis) -> contains -> Security Review [EXTRACTED]
- Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis) -> contains -> Code Quality Review [EXTRACTED]
- Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis) -> contains -> Task Decomposition for Fixes [EXTRACTED]
- Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis) -> contains -> Confidence Level (High/Medium/Low with reason) [EXTRACTED]
- Security Review -> contains -> CRITICAL Issues (must fix before production) [EXTRACTED]
- Security Review -> contains -> HIGH Issues (should fix soon) [EXTRACTED]
- Security Review -> contains -> MEDIUM Issues (recommended fixes) [EXTRACTED]
- Security Review -> contains -> LOW Issues (nice to have) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Audit and Code Review: A2. 파일 스캔 & 품질 분석 (File Scan & Quality Analysis), Security Review, typescript를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 gemini.md이다.
