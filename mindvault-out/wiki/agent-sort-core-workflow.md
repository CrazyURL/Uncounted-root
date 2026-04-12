# Agent Sort & Core Workflow
Cohesion: 0.11 | Nodes: 19

## Key Nodes
- **Agent Sort** (.claude/skills/agent-sort/SKILL.md) -- 10 connections
  - -> contains -> [[when-to-use]]
  - -> contains -> [[non-negotiable-rules]]
  - -> contains -> [[outputs]]
  - -> contains -> [[classification-model]]
  - -> contains -> [[evidence-sources]]
  - -> contains -> [[parallel-review-passes]]
  - -> contains -> [[core-workflow]]
  - -> contains -> [[handoffs]]
  - -> contains -> [[output-format]]
  - <- contains <- [[skill]]
- **Core Workflow** (.claude/skills/agent-sort/SKILL.md) -- 7 connections
  - -> contains -> [[1-read-the-repo]]
  - -> contains -> [[2-build-the-evidence-table]]
  - -> contains -> [[3-decide-daily-vs-library]]
  - -> contains -> [[4-build-the-install-plan]]
  - -> contains -> [[5-create-the-optional-library-router]]
  - -> contains -> [[6-verify-the-result]]
  - <- contains <- [[agent-sort]]
- **text** (.claude/skills/agent-sort/SKILL.md) -- 2 connections
  - <- has_code_example <- [[2-build-the-evidence-table]]
  - <- has_code_example <- [[output-format]]
- **2. Build the evidence table** (.claude/skills/agent-sort/SKILL.md) -- 2 connections
  - -> has_code_example -> [[text]]
  - <- contains <- [[core-workflow]]
- **Evidence Sources** (.claude/skills/agent-sort/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[agent-sort]]
- **Output Format** (.claude/skills/agent-sort/SKILL.md) -- 2 connections
  - -> has_code_example -> [[text]]
  - <- contains <- [[agent-sort]]
- **bash** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- has_code_example <- [[evidence-sources]]
- **SKILL** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - -> contains -> [[agent-sort]]
- **1. Read the repo** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **3. Decide DAILY vs LIBRARY** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **4. Build the install plan** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **5. Create the optional library router** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **6. Verify the result** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **Classification Model** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[agent-sort]]
- **Handoffs** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[agent-sort]]
- **Non-Negotiable Rules** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[agent-sort]]
- **Outputs** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[agent-sort]]
- **Parallel Review Passes** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[agent-sort]]
- **When to Use** (.claude/skills/agent-sort/SKILL.md) -- 1 connections
  - <- contains <- [[agent-sort]]

## Internal Relationships
- SKILL -> contains -> Agent Sort [EXTRACTED]
- 2. Build the evidence table -> has_code_example -> text [EXTRACTED]
- Agent Sort -> contains -> When to Use [EXTRACTED]
- Agent Sort -> contains -> Non-Negotiable Rules [EXTRACTED]
- Agent Sort -> contains -> Outputs [EXTRACTED]
- Agent Sort -> contains -> Classification Model [EXTRACTED]
- Agent Sort -> contains -> Evidence Sources [EXTRACTED]
- Agent Sort -> contains -> Parallel Review Passes [EXTRACTED]
- Agent Sort -> contains -> Core Workflow [EXTRACTED]
- Agent Sort -> contains -> Handoffs [EXTRACTED]
- Agent Sort -> contains -> Output Format [EXTRACTED]
- Core Workflow -> contains -> 1. Read the repo [EXTRACTED]
- Core Workflow -> contains -> 2. Build the evidence table [EXTRACTED]
- Core Workflow -> contains -> 3. Decide DAILY vs LIBRARY [EXTRACTED]
- Core Workflow -> contains -> 4. Build the install plan [EXTRACTED]
- Core Workflow -> contains -> 5. Create the optional library router [EXTRACTED]
- Core Workflow -> contains -> 6. Verify the result [EXTRACTED]
- Evidence Sources -> has_code_example -> bash [EXTRACTED]
- Output Format -> has_code_example -> text [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent Sort, Core Workflow, text를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
