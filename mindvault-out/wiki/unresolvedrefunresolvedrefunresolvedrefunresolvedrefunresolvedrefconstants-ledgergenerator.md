# __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___constants_ & ledgerGenerator
Cohesion: 0.18 | Nodes: 12

## Key Nodes
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___constants_** () -- 6 connections
  - <- imports <- [[ledgergenerator]]
  - <- imports <- [[ledgermetaevent]]
  - <- imports <- [[stepallactivate]]
  - <- imports <- [[stepprocessing]]
  - <- imports <- [[stepconsent]]
  - <- imports <- [[guidedcta]]
- **ledgerGenerator** (uncounted-app/src/lib/ledger/ledgerGenerator.ts) -- 6 connections
  - -> contains -> [[genid]]
  - -> contains -> [[createbaseentry]]
  - -> contains -> [[createbonusentry]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedreftypesledger]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefconstants]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefledgermultipliers]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__genid** () -- 4 connections
  - <- calls <- [[createbaseentry]]
  - <- calls <- [[createbonusentry]]
  - <- calls <- [[createbaseentry]]
  - <- calls <- [[createbonusentry]]
- **createBonusEntry** (uncounted-admin/src/lib/ledgerEngine.ts) -- 4 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefround]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefgenid]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmax]]
  - <- contains <- [[ledgerengine]]
- **createBonusEntry** (uncounted-app/src/lib/ledger/ledgerGenerator.ts) -- 4 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefround]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefgenid]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmax]]
  - <- contains <- [[ledgergenerator]]
- **createBaseEntry** (uncounted-admin/src/lib/ledgerEngine.ts) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefround]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefgenid]]
  - <- contains <- [[ledgerengine]]
- **createBaseEntry** (uncounted-app/src/lib/ledger/ledgerGenerator.ts) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefround]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefgenid]]
  - <- contains <- [[ledgergenerator]]
- **genId** (uncounted-app/src/lib/ledger/ledgerGenerator.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefnow]]
  - <- contains <- [[ledgergenerator]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___ledgermultipliers_** () -- 1 connections
  - <- imports <- [[ledgergenerator]]
- **GuidedCta** (uncounted-app/src/pages/guided-onboarding/GuidedCta.tsx) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefconstants]]
- **StepAllActivate** (uncounted-app/src/pages/guided-onboarding/StepAllActivate.tsx) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefconstants]]
- **StepConsent** (uncounted-app/src/pages/guided-onboarding/StepConsent.tsx) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefconstants]]

## Internal Relationships
- createBaseEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__genid [EXTRACTED]
- createBonusEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__genid [EXTRACTED]
- ledgerGenerator -> contains -> genId [EXTRACTED]
- ledgerGenerator -> contains -> createBaseEntry [EXTRACTED]
- ledgerGenerator -> contains -> createBonusEntry [EXTRACTED]
- ledgerGenerator -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___constants_ [EXTRACTED]
- ledgerGenerator -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___ledgermultipliers_ [EXTRACTED]
- createBaseEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__genid [EXTRACTED]
- createBonusEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__genid [EXTRACTED]
- GuidedCta -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___constants_ [EXTRACTED]
- StepAllActivate -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___constants_ [EXTRACTED]
- StepConsent -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___constants_ [EXTRACTED]

## Cross-Community Connections
- createBaseEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__round (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- createBonusEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__round (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- createBonusEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__max (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- ledgerGenerator -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___types_ledger_ (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefreact-unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedreftypessession]])
- createBaseEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__round (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- createBonusEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__round (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- createBonusEntry -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__max (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- genId -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__now (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___constants_, ledgerGenerator, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__genid를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 GuidedCta.tsx, StepAllActivate.tsx, StepConsent.tsx, ledgerEngine.ts, ledgerGenerator.ts이다.
