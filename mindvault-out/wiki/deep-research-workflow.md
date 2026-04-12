# Deep Research & Workflow
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **Deep Research** (.claude/skills/deep-research/SKILL.md) -- 7 connections
  - -> contains -> [[when-to-activate]]
  - -> contains -> [[mcp-requirements]]
  - -> contains -> [[workflow]]
  - -> contains -> [[parallel-research-with-subagents]]
  - -> contains -> [[quality-rules]]
  - -> contains -> [[examples]]
  - <- contains <- [[skill]]
- **Workflow** (.claude/skills/deep-research/SKILL.md) -- 7 connections
  - -> contains -> [[step-1-understand-the-goal]]
  - -> contains -> [[step-2-plan-the-research]]
  - -> contains -> [[step-3-execute-multi-source-search]]
  - -> contains -> [[step-4-deep-read-key-sources]]
  - -> contains -> [[step-5-synthesize-and-write-report]]
  - -> contains -> [[step-6-deliver]]
  - <- contains <- [[deep-research]]
- **Step 5: Synthesize and Write Report** (.claude/skills/deep-research/SKILL.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[workflow]]
- **markdown** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- has_code_example <- [[step-5-synthesize-and-write-report]]
- **SKILL** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - -> contains -> [[deep-research]]
- **Examples** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[deep-research]]
- **MCP Requirements** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[deep-research]]
- **Parallel Research with Subagents** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[deep-research]]
- **Quality Rules** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[deep-research]]
- **Step 1: Understand the Goal** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **Step 2: Plan the Research** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **Step 3: Execute Multi-Source Search** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **Step 4: Deep-Read Key Sources** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **Step 6: Deliver** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **When to Activate** (.claude/skills/deep-research/SKILL.md) -- 1 connections
  - <- contains <- [[deep-research]]

## Internal Relationships
- SKILL -> contains -> Deep Research [EXTRACTED]
- Deep Research -> contains -> When to Activate [EXTRACTED]
- Deep Research -> contains -> MCP Requirements [EXTRACTED]
- Deep Research -> contains -> Workflow [EXTRACTED]
- Deep Research -> contains -> Parallel Research with Subagents [EXTRACTED]
- Deep Research -> contains -> Quality Rules [EXTRACTED]
- Deep Research -> contains -> Examples [EXTRACTED]
- Step 5: Synthesize and Write Report -> has_code_example -> markdown [EXTRACTED]
- Workflow -> contains -> Step 1: Understand the Goal [EXTRACTED]
- Workflow -> contains -> Step 2: Plan the Research [EXTRACTED]
- Workflow -> contains -> Step 3: Execute Multi-Source Search [EXTRACTED]
- Workflow -> contains -> Step 4: Deep-Read Key Sources [EXTRACTED]
- Workflow -> contains -> Step 5: Synthesize and Write Report [EXTRACTED]
- Workflow -> contains -> Step 6: Deliver [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Deep Research, Workflow, Step 5: Synthesize and Write Report를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
