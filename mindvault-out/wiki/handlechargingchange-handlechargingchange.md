# handleChargingChange & handleChargingChange
Cohesion: 0.43 | Nodes: 8

## Key Nodes
- **handleChargingChange** (uncounted-admin/src/lib/batteryCollector.ts) -- 8 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefsavechargingstate]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefnow]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefappendrecord]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefcreaterecord]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefloadchargingstate]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefclassifychargingspeed]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefclassifyduration]]
  - <- contains <- [[batterycollector]]
- **handleChargingChange** (uncounted-app/src/lib/batteryCollector.ts) -- 8 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefsavechargingstate]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefnow]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefappendrecord]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefcreaterecord]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefloadchargingstate]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefclassifychargingspeed]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefclassifyduration]]
  - <- contains <- [[batterycollector]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__classifyduration** () -- 3 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[aggregateentries]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__appendrecord** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__classifychargingspeed** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__createrecord** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__loadchargingstate** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__savechargingstate** () -- 2 connections
  - <- calls <- [[handlechargingchange]]
  - <- calls <- [[handlechargingchange]]

## Internal Relationships
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__savechargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__appendrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__createrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__loadchargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__classifychargingspeed [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__classifyduration [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__savechargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__appendrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__createrecord [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__loadchargingstate [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__classifychargingspeed [EXTRACTED]
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__classifyduration [EXTRACTED]

## Cross-Community Connections
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__now (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- handleChargingChange -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__now (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])

## Context
이 커뮤니티는 handleChargingChange, handleChargingChange, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__classifyduration를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 batteryCollector.ts이다.
