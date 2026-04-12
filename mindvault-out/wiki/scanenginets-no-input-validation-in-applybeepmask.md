# scanEngine.ts & No Input Validation in applyBeepMask
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **scanEngine.ts** (uncounted-app/src/lib/scanEngine.ts) -- 2 connections
  - -> related_to -> [[type-safety-violation]]
  - -> extracted -> [[no-input-validation-in-applybeepmask]]
- **No Input Validation in applyBeepMask** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- extracted <- [[scanenginets]]
- **Type Safety Violation** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- related_to <- [[scanenginets]]

## Internal Relationships
- scanEngine.ts -> related_to -> Type Safety Violation [INFERRED]
- scanEngine.ts -> extracted -> No Input Validation in applyBeepMask [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 scanEngine.ts, No Input Validation in applyBeepMask, Type Safety Violation를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md, scanEngine.ts이다.
