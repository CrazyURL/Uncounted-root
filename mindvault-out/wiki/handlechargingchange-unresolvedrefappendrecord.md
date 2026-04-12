# handleChargingChange & __unresolved__::ref::appendrecord
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **handleChargingChange** (src/lib/batteryCollector.ts) -- 8 connections
  - -> calls -> [[unresolvedrefsavechargingstate]]
  - -> calls -> [[unresolvedrefnow]]
  - -> calls -> [[unresolvedrefappendrecord]]
  - -> calls -> [[unresolvedrefcreaterecord]]
  - -> calls -> [[unresolvedrefloadchargingstate]]
  - -> calls -> [[unresolvedrefclassifychargingspeed]]
  - -> calls -> [[unresolvedrefclassifyduration]]
  - <- contains <- [[batterycollector]]
- **__unresolved__::ref::appendrecord** () -- 1 connections
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::classifychargingspeed** () -- 1 connections
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::classifyduration** () -- 1 connections
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::createrecord** () -- 1 connections
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::loadchargingstate** () -- 1 connections
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::savechargingstate** () -- 1 connections
  - <- calls <- [[handlechargingchange]]

## Internal Relationships
- handleChargingChange -> calls -> __unresolved__::ref::savechargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::appendrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::createrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::loadchargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::classifychargingspeed [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::classifyduration [EXTRACTED]

## Cross-Community Connections
- handleChargingChange -> calls -> __unresolved__::ref::now (-> [[unresolvedrefpush-unresolvedrefmin]])

## Context
이 커뮤니티는 handleChargingChange, __unresolved__::ref::appendrecord, __unresolved__::ref::classifychargingspeed를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 batteryCollector.ts이다.
