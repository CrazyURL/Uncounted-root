# __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l & notify
Cohesion: 0.22 | Nodes: 11

## Key Nodes
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l** () -- 6 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **notify** (uncounted-admin/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpersist]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **notify** (uncounted-app/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpersist]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___shareprepengine_** () -- 2 connections
  - <- imports <- [[shareprepstore]]
  - <- imports <- [[shareprepstore]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__persist** () -- 2 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **sharePrepStore** (uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefshareprepengine]]
- **notify** (uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **notify** (uncounted-admin/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefl]]
  - <- contains <- [[verificationengine]]
- **sharePrepStore** (uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefshareprepengine]]
- **notify** (uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **notify** (uncounted-app/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefl]]
  - <- contains <- [[verificationengine]]

## Internal Relationships
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__l, notify, notify를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 pipelineState.ts, sharePrepStore.ts, verificationEngine.ts이다.
