# __unresolved__::ref::_consent_ & __unresolved__::ref::_lib_audioanalyzer_
Cohesion: 0.67 | Nodes: 4

## Key Nodes
- **__unresolved__::ref::_consent_** () -- 2 connections
  - <- imports <- [[session]]
  - <- imports <- [[session]]
- **__unresolved__::ref::_lib_audioanalyzer_** () -- 2 connections
  - <- imports <- [[session]]
  - <- imports <- [[session]]
- **session** (uncounted-admin/src/types/session.ts) -- 2 connections
  - -> imports -> [[unresolvedreflibaudioanalyzer]]
  - -> imports -> [[unresolvedrefconsent]]
- **session** (uncounted-app/src/types/session.ts) -- 2 connections
  - -> imports -> [[unresolvedreflibaudioanalyzer]]
  - -> imports -> [[unresolvedrefconsent]]

## Internal Relationships
- session -> imports -> __unresolved__::ref::_lib_audioanalyzer_ [EXTRACTED]
- session -> imports -> __unresolved__::ref::_consent_ [EXTRACTED]
- session -> imports -> __unresolved__::ref::_lib_audioanalyzer_ [EXTRACTED]
- session -> imports -> __unresolved__::ref::_consent_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 __unresolved__::ref::_consent_, __unresolved__::ref::_lib_audioanalyzer_, session를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 session.ts이다.
