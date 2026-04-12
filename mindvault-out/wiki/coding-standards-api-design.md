# Coding Standards & API Design
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **Coding Standards** (path) -- 13 connections
  - -> references -> [[frontend-patterns]]
  - -> references -> [[backend-patterns]]
  - -> references -> [[api-design]]
  - -> references -> [[type-safety]]
  - -> related_to -> [[readability]]
  - -> related_to -> [[kiss-principle]]
  - -> related_to -> [[dry-principle]]
  - -> related_to -> [[yagni-principle]]
  - -> references -> [[react-best-practices]]
  - -> related_to -> [[api-response-format]]
  - -> related_to -> [[input-validation]]
  - -> related_to -> [[test-structure]]
  - -> related_to -> [[code-smell-detection]]
- **API Design** (path) -- 1 connections
  - <- references <- [[coding-standards]]
- **API Response Format** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]
- **Backend Patterns** (path) -- 1 connections
  - <- references <- [[coding-standards]]
- **Code Smell Detection** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]
- **DRY Principle** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]
- **Frontend Patterns** (path) -- 1 connections
  - <- references <- [[coding-standards]]
- **Input Validation** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]
- **KISS Principle** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]
- **React Best Practices** (path) -- 1 connections
  - <- references <- [[coding-standards]]
- **Readability** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]
- **Test Structure** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]
- **Type Safety** (path) -- 1 connections
  - <- references <- [[coding-standards]]
- **YAGNI Principle** (path) -- 1 connections
  - <- related_to <- [[coding-standards]]

## Internal Relationships
- Coding Standards -> references -> Frontend Patterns [EXTRACTED]
- Coding Standards -> references -> Backend Patterns [EXTRACTED]
- Coding Standards -> references -> API Design [EXTRACTED]
- Coding Standards -> references -> Type Safety [EXTRACTED]
- Coding Standards -> related_to -> Readability [EXTRACTED]
- Coding Standards -> related_to -> KISS Principle [EXTRACTED]
- Coding Standards -> related_to -> DRY Principle [EXTRACTED]
- Coding Standards -> related_to -> YAGNI Principle [EXTRACTED]
- Coding Standards -> references -> React Best Practices [EXTRACTED]
- Coding Standards -> related_to -> API Response Format [INFERRED]
- Coding Standards -> related_to -> Input Validation [INFERRED]
- Coding Standards -> related_to -> Test Structure [INFERRED]
- Coding Standards -> related_to -> Code Smell Detection [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Coding Standards, API Design, API Response Format를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
