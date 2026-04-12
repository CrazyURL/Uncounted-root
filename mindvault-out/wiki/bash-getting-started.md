# bash & Getting Started
Cohesion: 0.24 | Nodes: 12

## Key Nodes
- **bash** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 6 connections
  - <- has_code_example <- [[agent-setup-recommended]]
  - <- has_code_example <- [[1-install-dependencies]]
  - <- has_code_example <- [[2-initialize-wiki-in-your-project]]
  - <- has_code_example <- [[3-verify-setup]]
  - <- has_code_example <- [[first-ingest]]
  - <- has_code_example <- [[maintenance]]
- **Getting Started** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 6 connections
  - -> contains -> [[agent-setup-recommended]]
  - -> contains -> [[manual-setup]]
  - -> contains -> [[first-ingest]]
  - -> contains -> [[first-compile]]
  - -> contains -> [[first-query]]
  - -> contains -> [[maintenance]]
- **Manual Setup** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 5 connections
  - -> contains -> [[prerequisites]]
  - -> contains -> [[1-install-dependencies]]
  - -> contains -> [[2-initialize-wiki-in-your-project]]
  - -> contains -> [[3-verify-setup]]
  - <- contains <- [[getting-started]]
- **1. Install dependencies** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[manual-setup]]
- **2. Initialize wiki in your project** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[manual-setup]]
- **3. Verify setup** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[manual-setup]]
- **Agent Setup (Recommended)** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[getting-started]]
- **First Ingest** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[getting-started]]
- **Maintenance** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[getting-started]]
- **First Compile** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 1 connections
  - <- contains <- [[getting-started]]
- **First Query** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 1 connections
  - <- contains <- [[getting-started]]
- **Prerequisites** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/getting-started.md) -- 1 connections
  - <- contains <- [[manual-setup]]

## Internal Relationships
- 1. Install dependencies -> has_code_example -> bash [EXTRACTED]
- 2. Initialize wiki in your project -> has_code_example -> bash [EXTRACTED]
- 3. Verify setup -> has_code_example -> bash [EXTRACTED]
- Agent Setup (Recommended) -> has_code_example -> bash [EXTRACTED]
- First Ingest -> has_code_example -> bash [EXTRACTED]
- Getting Started -> contains -> Agent Setup (Recommended) [EXTRACTED]
- Getting Started -> contains -> Manual Setup [EXTRACTED]
- Getting Started -> contains -> First Ingest [EXTRACTED]
- Getting Started -> contains -> First Compile [EXTRACTED]
- Getting Started -> contains -> First Query [EXTRACTED]
- Getting Started -> contains -> Maintenance [EXTRACTED]
- Maintenance -> has_code_example -> bash [EXTRACTED]
- Manual Setup -> contains -> Prerequisites [EXTRACTED]
- Manual Setup -> contains -> 1. Install dependencies [EXTRACTED]
- Manual Setup -> contains -> 2. Initialize wiki in your project [EXTRACTED]
- Manual Setup -> contains -> 3. Verify setup [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 bash, Getting Started, Manual Setup를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 getting-started.md이다.
