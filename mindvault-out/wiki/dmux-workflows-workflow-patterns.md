# dmux Workflows & Workflow Patterns
Cohesion: 0.12 | Nodes: 18

## Key Nodes
- **dmux Workflows** (.claude/skills/dmux-workflows/SKILL.md) -- 10 connections
  - -> contains -> [[when-to-activate]]
  - -> contains -> [[what-is-dmux]]
  - -> contains -> [[quick-start]]
  - -> contains -> [[workflow-patterns]]
  - -> contains -> [[best-practices]]
  - -> contains -> [[git-worktree-integration]]
  - -> contains -> [[complementary-tools]]
  - -> contains -> [[ecc-helper]]
  - -> contains -> [[troubleshooting]]
  - <- contains <- [[skill]]
- **Workflow Patterns** (.claude/skills/dmux-workflows/SKILL.md) -- 6 connections
  - -> contains -> [[pattern-1-research-implement]]
  - -> contains -> [[pattern-2-multi-file-feature]]
  - -> contains -> [[pattern-3-test-fix-loop]]
  - -> contains -> [[pattern-4-cross-harness]]
  - -> contains -> [[pattern-5-code-review-pipeline]]
  - <- contains <- [[dmux-workflows]]
- **bash** (.claude/skills/dmux-workflows/SKILL.md) -- 3 connections
  - <- has_code_example <- [[quick-start]]
  - <- has_code_example <- [[git-worktree-integration]]
  - <- has_code_example <- [[ecc-helper]]
- **ECC Helper** (.claude/skills/dmux-workflows/SKILL.md) -- 3 connections
  - -> has_code_example -> [[bash]]
  - -> has_code_example -> [[json]]
  - <- contains <- [[dmux-workflows]]
- **Git Worktree Integration** (.claude/skills/dmux-workflows/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[dmux-workflows]]
- **Quick Start** (.claude/skills/dmux-workflows/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[dmux-workflows]]
- **json** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- has_code_example <- [[ecc-helper]]
- **SKILL** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - -> contains -> [[dmux-workflows]]
- **Best Practices** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[dmux-workflows]]
- **Complementary Tools** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[dmux-workflows]]
- **Pattern 1: Research + Implement** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[workflow-patterns]]
- **Pattern 2: Multi-File Feature** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[workflow-patterns]]
- **Pattern 3: Test + Fix Loop** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[workflow-patterns]]
- **Pattern 4: Cross-Harness** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[workflow-patterns]]
- **Pattern 5: Code Review Pipeline** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[workflow-patterns]]
- **Troubleshooting** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[dmux-workflows]]
- **What is dmux** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[dmux-workflows]]
- **When to Activate** (.claude/skills/dmux-workflows/SKILL.md) -- 1 connections
  - <- contains <- [[dmux-workflows]]

## Internal Relationships
- SKILL -> contains -> dmux Workflows [EXTRACTED]
- dmux Workflows -> contains -> When to Activate [EXTRACTED]
- dmux Workflows -> contains -> What is dmux [EXTRACTED]
- dmux Workflows -> contains -> Quick Start [EXTRACTED]
- dmux Workflows -> contains -> Workflow Patterns [EXTRACTED]
- dmux Workflows -> contains -> Best Practices [EXTRACTED]
- dmux Workflows -> contains -> Git Worktree Integration [EXTRACTED]
- dmux Workflows -> contains -> Complementary Tools [EXTRACTED]
- dmux Workflows -> contains -> ECC Helper [EXTRACTED]
- dmux Workflows -> contains -> Troubleshooting [EXTRACTED]
- ECC Helper -> has_code_example -> bash [EXTRACTED]
- ECC Helper -> has_code_example -> json [EXTRACTED]
- Git Worktree Integration -> has_code_example -> bash [EXTRACTED]
- Quick Start -> has_code_example -> bash [EXTRACTED]
- Workflow Patterns -> contains -> Pattern 1: Research + Implement [EXTRACTED]
- Workflow Patterns -> contains -> Pattern 2: Multi-File Feature [EXTRACTED]
- Workflow Patterns -> contains -> Pattern 3: Test + Fix Loop [EXTRACTED]
- Workflow Patterns -> contains -> Pattern 4: Cross-Harness [EXTRACTED]
- Workflow Patterns -> contains -> Pattern 5: Code Review Pipeline [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 dmux Workflows, Workflow Patterns, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
