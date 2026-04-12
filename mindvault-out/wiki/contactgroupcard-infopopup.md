# ContactGroupCard & InfoPopup
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **ContactGroupCard** (uncounted-app/src/pages/AssetsPage.tsx) -- 12 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefderivegrade]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefround]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefstoppropagation]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefonrelbadgeclick]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefmaskcontactname]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedreftolocalestring]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefconsentstatusicon]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefgroupconsentstatus]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefconsentstatuslabel]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefmap]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefonrelchange]]
  - <- contains <- [[assetspage]]
- **InfoPopup** (uncounted-app/src/pages/ValuePage.tsx) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefstoppropagation]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefmap]]
  - <- contains <- [[valuepage]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation** () -- 2 connections
  - <- calls <- [[infopopup]]
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__consentstatusicon** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__consentstatuslabel** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__derivegrade** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__groupconsentstatus** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__maskcontactname** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__onrelbadgeclick** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__onrelchange** () -- 1 connections
  - <- calls <- [[contactgroupcard]]

## Internal Relationships
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__derivegrade [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__onrelbadgeclick [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__maskcontactname [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__consentstatusicon [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__groupconsentstatus [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__consentstatuslabel [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__onrelchange [EXTRACTED]
- InfoPopup -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation [EXTRACTED]

## Cross-Community Connections
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__round (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__tolocalestring (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefreact-unresolvedrefunresolvedrefunresolvedrefunresolvedreftypessession]])
- ContactGroupCard -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__map (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- InfoPopup -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__map (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])

## Context
이 커뮤니티는 ContactGroupCard, InfoPopup, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__stoppropagation를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 AssetsPage.tsx, ValuePage.tsx이다.
