# Project Flow Ops & Core Workflow
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Project Flow Ops** (.claude/skills/project-flow-ops/SKILL.md) -- 7 connections
  - -> contains -> [[when-to-use]]
  - -> contains -> [[operating-model]]
  - -> contains -> [[core-workflow]]
  - -> contains -> [[review-rules]]
  - -> contains -> [[output-format]]
  - -> contains -> [[good-use-cases]]
  - <- contains <- [[skill]]
- **Core Workflow** (.claude/skills/project-flow-ops/SKILL.md) -- 5 connections
  - -> contains -> [[1-read-the-public-surface-first]]
  - -> contains -> [[2-classify-the-work]]
  - -> contains -> [[3-decide-whether-linear-is-warranted]]
  - -> contains -> [[4-keep-the-two-systems-consistent]]
  - <- contains <- [[project-flow-ops]]
- **Output Format** (.claude/skills/project-flow-ops/SKILL.md) -- 2 connections
  - -> has_code_example -> [[text]]
  - <- contains <- [[project-flow-ops]]
- **text** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- has_code_example <- [[output-format]]
- **SKILL** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - -> contains -> [[project-flow-ops]]
- **1. Read the public surface first** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **2. Classify the work** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **3. Decide whether Linear is warranted** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **4. Keep the two systems consistent** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[core-workflow]]
- **Good Use Cases** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[project-flow-ops]]
- **Operating Model** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[project-flow-ops]]
- **Review Rules** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[project-flow-ops]]
- **When to Use** (.claude/skills/project-flow-ops/SKILL.md) -- 1 connections
  - <- contains <- [[project-flow-ops]]

## Internal Relationships
- SKILL -> contains -> Project Flow Ops [EXTRACTED]
- Core Workflow -> contains -> 1. Read the public surface first [EXTRACTED]
- Core Workflow -> contains -> 2. Classify the work [EXTRACTED]
- Core Workflow -> contains -> 3. Decide whether Linear is warranted [EXTRACTED]
- Core Workflow -> contains -> 4. Keep the two systems consistent [EXTRACTED]
- Output Format -> has_code_example -> text [EXTRACTED]
- Project Flow Ops -> contains -> When to Use [EXTRACTED]
- Project Flow Ops -> contains -> Operating Model [EXTRACTED]
- Project Flow Ops -> contains -> Core Workflow [EXTRACTED]
- Project Flow Ops -> contains -> Review Rules [EXTRACTED]
- Project Flow Ops -> contains -> Output Format [EXTRACTED]
- Project Flow Ops -> contains -> Good Use Cases [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Project Flow Ops, Core Workflow, Output Format를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
