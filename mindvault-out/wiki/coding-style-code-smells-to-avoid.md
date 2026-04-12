# Coding Style & Code Smells to Avoid
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **Coding Style** (.claude/rules/common/coding-style.md) -- 8 connections
  - -> contains -> [[immutability-critical]]
  - -> contains -> [[core-principles]]
  - -> contains -> [[file-organization]]
  - -> contains -> [[error-handling]]
  - -> contains -> [[input-validation]]
  - -> contains -> [[naming-conventions]]
  - -> contains -> [[code-smells-to-avoid]]
  - -> contains -> [[code-quality-checklist]]
- **Code Smells to Avoid** (.claude/rules/common/coding-style.md) -- 4 connections
  - -> contains -> [[deep-nesting]]
  - -> contains -> [[magic-numbers]]
  - -> contains -> [[long-functions]]
  - <- contains <- [[coding-style]]
- **Core Principles** (.claude/rules/common/coding-style.md) -- 4 connections
  - -> contains -> [[kiss-keep-it-simple]]
  - -> contains -> [[dry-dont-repeat-yourself]]
  - -> contains -> [[yagni-you-arent-gonna-need-it]]
  - <- contains <- [[coding-style]]
- **Code Quality Checklist** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[coding-style]]
- **Deep Nesting** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[code-smells-to-avoid]]
- **DRY (Don't Repeat Yourself)** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[core-principles]]
- **Error Handling** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[coding-style]]
- **File Organization** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[coding-style]]
- **Immutability (CRITICAL)** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[coding-style]]
- **Input Validation** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[coding-style]]
- **KISS (Keep It Simple)** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[core-principles]]
- **Long Functions** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[code-smells-to-avoid]]
- **Magic Numbers** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[code-smells-to-avoid]]
- **Naming Conventions** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[coding-style]]
- **YAGNI (You Aren't Gonna Need It)** (.claude/rules/common/coding-style.md) -- 1 connections
  - <- contains <- [[core-principles]]

## Internal Relationships
- Code Smells to Avoid -> contains -> Deep Nesting [EXTRACTED]
- Code Smells to Avoid -> contains -> Magic Numbers [EXTRACTED]
- Code Smells to Avoid -> contains -> Long Functions [EXTRACTED]
- Coding Style -> contains -> Immutability (CRITICAL) [EXTRACTED]
- Coding Style -> contains -> Core Principles [EXTRACTED]
- Coding Style -> contains -> File Organization [EXTRACTED]
- Coding Style -> contains -> Error Handling [EXTRACTED]
- Coding Style -> contains -> Input Validation [EXTRACTED]
- Coding Style -> contains -> Naming Conventions [EXTRACTED]
- Coding Style -> contains -> Code Smells to Avoid [EXTRACTED]
- Coding Style -> contains -> Code Quality Checklist [EXTRACTED]
- Core Principles -> contains -> KISS (Keep It Simple) [EXTRACTED]
- Core Principles -> contains -> DRY (Don't Repeat Yourself) [EXTRACTED]
- Core Principles -> contains -> YAGNI (You Aren't Gonna Need It) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Coding Style, Code Smells to Avoid, Core Principles를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 coding-style.md이다.
