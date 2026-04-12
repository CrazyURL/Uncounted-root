# ContactGroupCard & InfoPopup
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **ContactGroupCard** (uncounted-app/src/pages/AssetsPage.tsx) -- 12 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefderivegrade]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefround]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefstoppropagation]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefonrelbadgeclick]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmaskcontactname]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedreftolocalestring]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefconsentstatusicon]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefgroupconsentstatus]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefconsentstatuslabel]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmap]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefonrelchange]]
  - <- contains <- [[assetspage]]
- **InfoPopup** (uncounted-app/src/pages/ValuePage.tsx) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefstoppropagation]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmap]]
  - <- contains <- [[valuepage]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation** () -- 2 connections
  - <- calls <- [[infopopup]]
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__consentstatusicon** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__consentstatuslabel** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__derivegrade** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__groupconsentstatus** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__maskcontactname** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__onrelbadgeclick** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__onrelchange** () -- 1 connections
  - <- calls <- [[contactgroupcard]]

## Internal Relationships
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__derivegrade [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__onrelbadgeclick [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__maskcontactname [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__consentstatusicon [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__groupconsentstatus [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__consentstatuslabel [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__onrelchange [EXTRACTED]
- InfoPopup -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation [EXTRACTED]

## Cross-Community Connections
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__round (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__tolocalestring (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefreact-unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedreftypessession]])
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__map (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- InfoPopup -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__map (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])

## Context
이 커뮤니티는 ContactGroupCard, InfoPopup, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 AssetsPage.tsx, ValuePage.tsx이다.
