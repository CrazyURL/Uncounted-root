# __unresolved__::ref::l & notify
Cohesion: 0.22 | Nodes: 11

## Key Nodes
- **__unresolved__::ref::l** () -- 6 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **notify** (uncounted-admin/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefpersist]]
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **notify** (uncounted-app/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefpersist]]
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **__unresolved__::ref::_shareprepengine_** () -- 2 connections
  - <- imports <- [[shareprepstore]]
  - <- imports <- [[shareprepstore]]
- **__unresolved__::ref::persist** () -- 2 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **notify** (uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **sharePrepStore** (uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefshareprepengine]]
- **notify** (uncounted-admin/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[verificationengine]]
- **notify** (uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **sharePrepStore** (uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefshareprepengine]]
- **notify** (uncounted-app/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[verificationengine]]

## Internal Relationships
- notify -> calls -> __unresolved__::ref::persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::_shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::_shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 __unresolved__::ref::l, notify, notify를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 pipelineState.ts, sharePrepStore.ts, verificationEngine.ts이다.
