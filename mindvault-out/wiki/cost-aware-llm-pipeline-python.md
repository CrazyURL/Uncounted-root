# Cost-Aware LLM Pipeline & python
Cohesion: 0.19 | Nodes: 14

## Key Nodes
- **Cost-Aware LLM Pipeline** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 8 connections
  - -> contains -> [[when-to-activate]]
  - -> contains -> [[core-concepts]]
  - -> contains -> [[composition]]
  - -> contains -> [[pricing-reference-2025-2026]]
  - -> contains -> [[best-practices]]
  - -> contains -> [[anti-patterns-to-avoid]]
  - -> contains -> [[when-to-use]]
  - <- contains <- [[skill]]
- **python** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 5 connections
  - <- has_code_example <- [[1-model-routing-by-task-complexity]]
  - <- has_code_example <- [[2-immutable-cost-tracking]]
  - <- has_code_example <- [[3-narrow-retry-logic]]
  - <- has_code_example <- [[4-prompt-caching]]
  - <- has_code_example <- [[composition]]
- **Core Concepts** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 5 connections
  - -> contains -> [[1-model-routing-by-task-complexity]]
  - -> contains -> [[2-immutable-cost-tracking]]
  - -> contains -> [[3-narrow-retry-logic]]
  - -> contains -> [[4-prompt-caching]]
  - <- contains <- [[cost-aware-llm-pipeline]]
- **1. Model Routing by Task Complexity** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[core-concepts]]
- **2. Immutable Cost Tracking** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[core-concepts]]
- **3. Narrow Retry Logic** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[core-concepts]]
- **4. Prompt Caching** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[core-concepts]]
- **Composition** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 2 connections
  - -> has_code_example -> [[python]]
  - <- contains <- [[cost-aware-llm-pipeline]]
- **SKILL** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 1 connections
  - -> contains -> [[cost-aware-llm-pipeline]]
- **Anti-Patterns to Avoid** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 1 connections
  - <- contains <- [[cost-aware-llm-pipeline]]
- **Best Practices** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 1 connections
  - <- contains <- [[cost-aware-llm-pipeline]]
- **Pricing Reference (2025-2026)** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 1 connections
  - <- contains <- [[cost-aware-llm-pipeline]]
- **When to Activate** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 1 connections
  - <- contains <- [[cost-aware-llm-pipeline]]
- **When to Use** (.claude/skills/cost-aware-llm-pipeline/SKILL.md) -- 1 connections
  - <- contains <- [[cost-aware-llm-pipeline]]

## Internal Relationships
- SKILL -> contains -> Cost-Aware LLM Pipeline [EXTRACTED]
- 1. Model Routing by Task Complexity -> has_code_example -> python [EXTRACTED]
- 2. Immutable Cost Tracking -> has_code_example -> python [EXTRACTED]
- 3. Narrow Retry Logic -> has_code_example -> python [EXTRACTED]
- 4. Prompt Caching -> has_code_example -> python [EXTRACTED]
- Composition -> has_code_example -> python [EXTRACTED]
- Core Concepts -> contains -> 1. Model Routing by Task Complexity [EXTRACTED]
- Core Concepts -> contains -> 2. Immutable Cost Tracking [EXTRACTED]
- Core Concepts -> contains -> 3. Narrow Retry Logic [EXTRACTED]
- Core Concepts -> contains -> 4. Prompt Caching [EXTRACTED]
- Cost-Aware LLM Pipeline -> contains -> When to Activate [EXTRACTED]
- Cost-Aware LLM Pipeline -> contains -> Core Concepts [EXTRACTED]
- Cost-Aware LLM Pipeline -> contains -> Composition [EXTRACTED]
- Cost-Aware LLM Pipeline -> contains -> Pricing Reference (2025-2026) [EXTRACTED]
- Cost-Aware LLM Pipeline -> contains -> Best Practices [EXTRACTED]
- Cost-Aware LLM Pipeline -> contains -> Anti-Patterns to Avoid [EXTRACTED]
- Cost-Aware LLM Pipeline -> contains -> When to Use [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Cost-Aware LLM Pipeline, python, Core Concepts를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
