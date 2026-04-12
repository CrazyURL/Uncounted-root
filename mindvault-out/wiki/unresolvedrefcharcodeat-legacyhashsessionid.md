# __unresolved__::ref::charcodeat & legacyHashSessionId
Cohesion: 0.20 | Nodes: 12

## Key Nodes
- **__unresolved__::ref::charcodeat** () -- 6 connections
  - <- calls <- [[legacyhashsessionid]]
  - <- calls <- [[getorcreateaeskey]]
  - <- calls <- [[writestring]]
  - <- calls <- [[writestring]]
  - <- calls <- [[getorcreateaeskey]]
  - <- calls <- [[writestring]]
- **legacyHashSessionId** (uncounted-app/src/lib/sessionId.ts) -- 5 connections
  - -> calls -> [[unresolvedrefcharcodeat]]
  - -> calls -> [[unresolvedrefpadstart]]
  - -> calls -> [[unresolvedreftostring]]
  - -> calls -> [[unresolvedrefabs]]
  - <- contains <- [[sessionid]]
- **sessionId** (uncounted-app/src/lib/sessionId.ts) -- 4 connections
  - -> contains -> [[legacyhashsessionid]]
  - -> contains -> [[hextobytes]]
  - -> contains -> [[bytestohex]]
  - -> imports -> [[unresolvedrefdeviceid]]
- **__unresolved__::ref::setuint8** () -- 3 connections
  - <- calls <- [[writestring]]
  - <- calls <- [[writestring]]
  - <- calls <- [[writestring]]
- **writeString** (.orchestrate-consult/20260327-210056/wavEncoder.ts) -- 3 connections
  - -> calls -> [[unresolvedrefsetuint8]]
  - -> calls -> [[unresolvedrefcharcodeat]]
  - <- contains <- [[wavencoder]]
- **writeString** (uncounted-admin/src/lib/wavEncoder.ts) -- 3 connections
  - -> calls -> [[unresolvedrefsetuint8]]
  - -> calls -> [[unresolvedrefcharcodeat]]
  - <- contains <- [[wavencoder]]
- **writeString** (uncounted-app/src/lib/wavEncoder.ts) -- 3 connections
  - -> calls -> [[unresolvedrefsetuint8]]
  - -> calls -> [[unresolvedrefcharcodeat]]
  - <- contains <- [[wavencoder]]
- **__unresolved__::ref::_deviceid_** () -- 2 connections
  - <- imports <- [[sessionid]]
  - <- imports <- [[deviceidtest]]
- **deviceId.test** (uncounted-app/src/lib/deviceId.test.ts) -- 2 connections
  - -> imports -> [[unresolvedrefvitest]]
  - -> imports -> [[unresolvedrefdeviceid]]
- **wavEncoder** (.orchestrate-consult/20260327-210056/wavEncoder.ts) -- 1 connections
  - -> contains -> [[writestring]]
- **wavEncoder** (uncounted-admin/src/lib/wavEncoder.ts) -- 1 connections
  - -> contains -> [[writestring]]
- **wavEncoder** (uncounted-app/src/lib/wavEncoder.ts) -- 1 connections
  - -> contains -> [[writestring]]

## Internal Relationships
- writeString -> calls -> __unresolved__::ref::setuint8 [EXTRACTED]
- writeString -> calls -> __unresolved__::ref::charcodeat [EXTRACTED]
- wavEncoder -> contains -> writeString [EXTRACTED]
- writeString -> calls -> __unresolved__::ref::setuint8 [EXTRACTED]
- writeString -> calls -> __unresolved__::ref::charcodeat [EXTRACTED]
- wavEncoder -> contains -> writeString [EXTRACTED]
- deviceId.test -> imports -> __unresolved__::ref::_deviceid_ [EXTRACTED]
- legacyHashSessionId -> calls -> __unresolved__::ref::charcodeat [EXTRACTED]
- sessionId -> contains -> legacyHashSessionId [EXTRACTED]
- sessionId -> imports -> __unresolved__::ref::_deviceid_ [EXTRACTED]
- writeString -> calls -> __unresolved__::ref::setuint8 [EXTRACTED]
- writeString -> calls -> __unresolved__::ref::charcodeat [EXTRACTED]
- wavEncoder -> contains -> writeString [EXTRACTED]

## Cross-Community Connections
- deviceId.test -> imports -> __unresolved__::ref::_vitest_ (-> [[unresolvedrefjs-unresolvedrefvitest]])
- legacyHashSessionId -> calls -> __unresolved__::ref::padstart (-> [[unresolvedrefpush-unresolvedreflen]])
- legacyHashSessionId -> calls -> __unresolved__::ref::tostring (-> [[unresolvedrefpush-unresolvedreflen]])
- legacyHashSessionId -> calls -> __unresolved__::ref::abs (-> [[unresolvedrefresolve-runpiiforall]])
- sessionId -> contains -> hexToBytes (-> [[unresolvedrefpush-unresolvedreflen]])
- sessionId -> contains -> bytesToHex (-> [[unresolvedrefpush-unresolvedreflen]])

## Context
이 커뮤니티는 __unresolved__::ref::charcodeat, legacyHashSessionId, sessionId를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 deviceId.test.ts, sessionId.ts, wavEncoder.ts이다.
