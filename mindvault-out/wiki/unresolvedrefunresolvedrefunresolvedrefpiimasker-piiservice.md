# __unresolved__::ref::__unresolved____ref____unresolved____ref__pii_masker & pii_service
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__pii_masker** () -- 2 connections
  - <- imports <- [[sttprocessor]]
  - <- imports <- [[piiservice]]
- **pii_service** (uncounted-voice-api/app/services/pii_service.py) -- 2 connections
  - -> contains -> [[piiservice]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefpiimasker]]
- **PIIService** (uncounted-voice-api/app/services/pii_service.py) -- 1 connections
  - <- contains <- [[piiservice]]

## Internal Relationships
- pii_service -> contains -> PIIService [EXTRACTED]
- pii_service -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref__pii_masker [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref____unresolved____ref__pii_masker, pii_service, PIIService를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 pii_service.py이다.
