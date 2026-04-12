# handleChargingChange & handleChargingChange
Cohesion: 0.43 | Nodes: 8

## Key Nodes
- **handleChargingChange** (uncounted-admin/src/lib/batteryCollector.ts) -- 8 connections
  - -> calls -> [[unresolvedrefsavechargingstate]]
  - -> calls -> [[unresolvedrefnow]]
  - -> calls -> [[unresolvedrefappendrecord]]
  - -> calls -> [[unresolvedrefcreaterecord]]
  - -> calls -> [[unresolvedrefloadchargingstate]]
  - -> calls -> [[unresolvedrefclassifychargingspeed]]
  - -> calls -> [[unresolvedrefclassifyduration]]
  - <- contains <- [[batterycollector]]
- **handleChargingChange** (uncounted-app/src/lib/batteryCollector.ts) -- 8 connections
  - -> calls -> [[unresolvedrefsavechargingstate]]
  - -> calls -> [[unresolvedrefnow]]
  - -> calls -> [[unresolvedrefappendrecord]]
  - -> calls -> [[unresolvedrefcreaterecord]]
  - -> calls -> [[unresolvedrefloadchargingstate]]
  - -> calls -> [[unresolvedrefclassifychargingspeed]]
  - -> calls -> [[unresolvedrefclassifyduration]]
  - <- contains <- [[batterycollector]]
- **__unresolved__::ref::appendrecord** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::classifychargingspeed** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::classifyduration** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::createrecord** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::loadchargingstate** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::savechargingstate** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]

## Internal Relationships
- handleChargingChange -> calls -> __unresolved__::ref::savechargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::appendrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::createrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::loadchargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::classifychargingspeed [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::classifyduration [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::savechargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::appendrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::createrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::loadchargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::classifychargingspeed [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::classifyduration [EXTRACTED]

## Cross-Community Connections
- handleChargingChange -> calls -> __unresolved__::ref::now (-> [[unresolvedrefpush-unresolvedreflen]])
- handleChargingChange -> calls -> __unresolved__::ref::now (-> [[unresolvedrefpush-unresolvedreflen]])

## Context
이 커뮤니티는 handleChargingChange, handleChargingChange, __unresolved__::ref::appendrecord를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 batteryCollector.ts이다.
