# Core Principles & Code Smells to Avoid
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **Core Principles** (path) -- 10 connections
  - -> related_to -> [[kiss]]
  - -> related_to -> [[dry]]
  - -> related_to -> [[yagni]]
  - <- related_to <- [[immutability]]
  - <- related_to <- [[file-organization]]
  - <- related_to <- [[error-handling]]
  - <- related_to <- [[input-validation]]
  - <- related_to <- [[naming-conventions]]
  - <- related_to <- [[code-smells-to-avoid]]
  - <- related_to <- [[code-quality-checklist]]
- **Code Smells to Avoid** (path) -- 4 connections
  - -> related_to -> [[core-principles]]
  - <- related_to <- [[deep-nesting]]
  - <- related_to <- [[magic-numbers]]
  - <- related_to <- [[long-functions]]
- **Code Quality Checklist** (path) -- 1 connections
  - -> related_to -> [[core-principles]]
- **Deep Nesting** (path) -- 1 connections
  - -> related_to -> [[code-smells-to-avoid]]
- **DRY** (path) -- 1 connections
  - <- related_to <- [[core-principles]]
- **Error Handling** (path) -- 1 connections
  - -> related_to -> [[core-principles]]
- **File Organization** (path) -- 1 connections
  - -> related_to -> [[core-principles]]
- **Immutability** (path) -- 1 connections
  - -> related_to -> [[core-principles]]
- **Input Validation** (path) -- 1 connections
  - -> related_to -> [[core-principles]]
- **KISS** (path) -- 1 connections
  - <- related_to <- [[core-principles]]
- **Long Functions** (path) -- 1 connections
  - -> related_to -> [[code-smells-to-avoid]]
- **Magic Numbers** (path) -- 1 connections
  - -> related_to -> [[code-smells-to-avoid]]
- **Naming Conventions** (path) -- 1 connections
  - -> related_to -> [[core-principles]]
- **YAGNI** (path) -- 1 connections
  - <- related_to <- [[core-principles]]

## Internal Relationships
- Code Quality Checklist -> related_to -> Core Principles [INFERRED]
- Code Smells to Avoid -> related_to -> Core Principles [INFERRED]
- Core Principles -> related_to -> KISS [EXTRACTED]
- Core Principles -> related_to -> DRY [EXTRACTED]
- Core Principles -> related_to -> YAGNI [EXTRACTED]
- Deep Nesting -> related_to -> Code Smells to Avoid [EXTRACTED]
- Error Handling -> related_to -> Core Principles [INFERRED]
- File Organization -> related_to -> Core Principles [INFERRED]
- Immutability -> related_to -> Core Principles [EXTRACTED]
- Input Validation -> related_to -> Core Principles [INFERRED]
- Long Functions -> related_to -> Code Smells to Avoid [EXTRACTED]
- Magic Numbers -> related_to -> Code Smells to Avoid [EXTRACTED]
- Naming Conventions -> related_to -> Core Principles [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Core Principles, Code Smells to Avoid, Code Quality Checklist를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
