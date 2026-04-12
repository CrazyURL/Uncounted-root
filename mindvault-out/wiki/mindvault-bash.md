# /mindvault & bash
Cohesion: 0.19 | Nodes: 16

## Key Nodes
- **/mindvault** (.claude/skills/mindvault/SKILL.md) -- 10 connections
  - -> contains -> [[usage]]
  - -> contains -> [[what-mindvault-does]]
  - -> contains -> [[what-you-must-do-when-invoked]]
  - -> contains -> [[for-mindvault-query]]
  - -> contains -> [[for-mindvault-lint]]
  - -> contains -> [[for-mindvault-status]]
  - -> contains -> [[for-mindvault-ingest]]
  - -> contains -> [[for-mindvault-install]]
  - -> contains -> [[outputs]]
  - <- contains <- [[skill]]
- **bash** (.claude/skills/mindvault/SKILL.md) -- 9 connections
  - <- has_code_example <- [[step-1-ensure-mindvault-is-installed]]
  - <- has_code_example <- [[step-2-run-the-full-pipeline]]
  - <- has_code_example <- [[step-3-read-the-report-and-present-findings]]
  - <- has_code_example <- [[step-4-open-the-interactive-graph-optional]]
  - <- has_code_example <- [[for-mindvault-query]]
  - <- has_code_example <- [[for-mindvault-lint]]
  - <- has_code_example <- [[for-mindvault-status]]
  - <- has_code_example <- [[for-mindvault-ingest]]
  - <- has_code_example <- [[for-mindvault-install]]
- **What You Must Do When Invoked** (.claude/skills/mindvault/SKILL.md) -- 5 connections
  - -> contains -> [[step-1-ensure-mindvault-is-installed]]
  - -> contains -> [[step-2-run-the-full-pipeline]]
  - -> contains -> [[step-3-read-the-report-and-present-findings]]
  - -> contains -> [[step-4-open-the-interactive-graph-optional]]
  - <- contains <- [[mindvault]]
- **For /mindvault ingest** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault]]
- **For /mindvault install** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault]]
- **For /mindvault lint** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault]]
- **For /mindvault query** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault]]
- **For /mindvault status** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault]]
- **Step 1 -- Ensure mindvault is installed** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[what-you-must-do-when-invoked]]
- **Step 2 -- Run the full pipeline** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[what-you-must-do-when-invoked]]
- **Step 3 -- Read the report and present findings** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[what-you-must-do-when-invoked]]
- **Step 4 -- Open the interactive graph (optional)** (.claude/skills/mindvault/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[what-you-must-do-when-invoked]]
- **SKILL** (.claude/skills/mindvault/SKILL.md) -- 1 connections
  - -> contains -> [[mindvault]]
- **Outputs** (.claude/skills/mindvault/SKILL.md) -- 1 connections
  - <- contains <- [[mindvault]]
- **Usage** (.claude/skills/mindvault/SKILL.md) -- 1 connections
  - <- contains <- [[mindvault]]
- **What MindVault does** (.claude/skills/mindvault/SKILL.md) -- 1 connections
  - <- contains <- [[mindvault]]

## Internal Relationships
- SKILL -> contains -> /mindvault [EXTRACTED]
- For /mindvault ingest -> has_code_example -> bash [EXTRACTED]
- For /mindvault install -> has_code_example -> bash [EXTRACTED]
- For /mindvault lint -> has_code_example -> bash [EXTRACTED]
- For /mindvault query -> has_code_example -> bash [EXTRACTED]
- For /mindvault status -> has_code_example -> bash [EXTRACTED]
- /mindvault -> contains -> Usage [EXTRACTED]
- /mindvault -> contains -> What MindVault does [EXTRACTED]
- /mindvault -> contains -> What You Must Do When Invoked [EXTRACTED]
- /mindvault -> contains -> For /mindvault query [EXTRACTED]
- /mindvault -> contains -> For /mindvault lint [EXTRACTED]
- /mindvault -> contains -> For /mindvault status [EXTRACTED]
- /mindvault -> contains -> For /mindvault ingest [EXTRACTED]
- /mindvault -> contains -> For /mindvault install [EXTRACTED]
- /mindvault -> contains -> Outputs [EXTRACTED]
- Step 1 -- Ensure mindvault is installed -> has_code_example -> bash [EXTRACTED]
- Step 2 -- Run the full pipeline -> has_code_example -> bash [EXTRACTED]
- Step 3 -- Read the report and present findings -> has_code_example -> bash [EXTRACTED]
- Step 4 -- Open the interactive graph (optional) -> has_code_example -> bash [EXTRACTED]
- What You Must Do When Invoked -> contains -> Step 1 -- Ensure mindvault is installed [EXTRACTED]
- What You Must Do When Invoked -> contains -> Step 2 -- Run the full pipeline [EXTRACTED]
- What You Must Do When Invoked -> contains -> Step 3 -- Read the report and present findings [EXTRACTED]
- What You Must Do When Invoked -> contains -> Step 4 -- Open the interactive graph (optional) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 /mindvault, bash, What You Must Do When Invoked를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
