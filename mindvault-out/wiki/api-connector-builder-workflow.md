# API Connector Builder & Workflow
Cohesion: 0.14 | Nodes: 16

## Key Nodes
- **API Connector Builder** (.claude/skills/api-connector-builder/SKILL.md) -- 7 connections
  - -> contains -> [[when-to-use]]
  - -> contains -> [[guardrails]]
  - -> contains -> [[workflow]]
  - -> contains -> [[reference-shapes]]
  - -> contains -> [[quality-checklist]]
  - -> contains -> [[related-skills]]
  - <- contains <- [[skill]]
- **Workflow** (.claude/skills/api-connector-builder/SKILL.md) -- 5 connections
  - -> contains -> [[1-learn-the-house-style]]
  - -> contains -> [[2-narrow-the-target-integration]]
  - -> contains -> [[3-build-in-repo-native-layers]]
  - -> contains -> [[4-validate-against-the-source-pattern]]
  - <- contains <- [[api-connector-builder]]
- **Reference Shapes** (.claude/skills/api-connector-builder/SKILL.md) -- 4 connections
  - -> contains -> [[provider-style]]
  - -> contains -> [[connector-style]]
  - -> contains -> [[typescript-plugin-style]]
  - <- contains <- [[api-connector-builder]]
- **text** (.claude/skills/api-connector-builder/SKILL.md) -- 3 connections
  - <- has_code_example <- [[provider-style]]
  - <- has_code_example <- [[connector-style]]
  - <- has_code_example <- [[typescript-plugin-style]]
- **Connector-style** (.claude/skills/api-connector-builder/SKILL.md) -- 2 connections
  - -> has_code_example -> [[text]]
  - <- contains <- [[reference-shapes]]
- **Provider-style** (.claude/skills/api-connector-builder/SKILL.md) -- 2 connections
  - -> has_code_example -> [[text]]
  - <- contains <- [[reference-shapes]]
- **TypeScript plugin-style** (.claude/skills/api-connector-builder/SKILL.md) -- 2 connections
  - -> has_code_example -> [[text]]
  - <- contains <- [[reference-shapes]]
- **SKILL** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - -> contains -> [[api-connector-builder]]
- **1. Learn the house style** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **2. Narrow the target integration** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **3. Build in repo-native layers** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **4. Validate against the source pattern** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[workflow]]
- **Guardrails** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[api-connector-builder]]
- **Quality Checklist** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[api-connector-builder]]
- **Related Skills** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[api-connector-builder]]
- **When to Use** (.claude/skills/api-connector-builder/SKILL.md) -- 1 connections
  - <- contains <- [[api-connector-builder]]

## Internal Relationships
- SKILL -> contains -> API Connector Builder [EXTRACTED]
- API Connector Builder -> contains -> When to Use [EXTRACTED]
- API Connector Builder -> contains -> Guardrails [EXTRACTED]
- API Connector Builder -> contains -> Workflow [EXTRACTED]
- API Connector Builder -> contains -> Reference Shapes [EXTRACTED]
- API Connector Builder -> contains -> Quality Checklist [EXTRACTED]
- API Connector Builder -> contains -> Related Skills [EXTRACTED]
- Connector-style -> has_code_example -> text [EXTRACTED]
- Provider-style -> has_code_example -> text [EXTRACTED]
- Reference Shapes -> contains -> Provider-style [EXTRACTED]
- Reference Shapes -> contains -> Connector-style [EXTRACTED]
- Reference Shapes -> contains -> TypeScript plugin-style [EXTRACTED]
- TypeScript plugin-style -> has_code_example -> text [EXTRACTED]
- Workflow -> contains -> 1. Learn the house style [EXTRACTED]
- Workflow -> contains -> 2. Narrow the target integration [EXTRACTED]
- Workflow -> contains -> 3. Build in repo-native layers [EXTRACTED]
- Workflow -> contains -> 4. Validate against the source pattern [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 API Connector Builder, Workflow, Reference Shapes를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
