# ContactGroupCard & InfoPopup
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **ContactGroupCard** (uncounted-app/src/pages/AssetsPage.tsx) -- 12 connections
  - -> calls -> [[unresolvedrefderivegrade]]
  - -> calls -> [[unresolvedrefround]]
  - -> calls -> [[unresolvedrefstoppropagation]]
  - -> calls -> [[unresolvedrefonrelbadgeclick]]
  - -> calls -> [[unresolvedrefmaskcontactname]]
  - -> calls -> [[unresolvedreftolocalestring]]
  - -> calls -> [[unresolvedrefconsentstatusicon]]
  - -> calls -> [[unresolvedrefgroupconsentstatus]]
  - -> calls -> [[unresolvedrefconsentstatuslabel]]
  - -> calls -> [[unresolvedrefmap]]
  - -> calls -> [[unresolvedrefonrelchange]]
  - <- contains <- [[assetspage]]
- **InfoPopup** (uncounted-app/src/pages/ValuePage.tsx) -- 3 connections
  - -> calls -> [[unresolvedrefstoppropagation]]
  - -> calls -> [[unresolvedrefmap]]
  - <- contains <- [[valuepage]]
- **__unresolved__::ref::stoppropagation** () -- 2 connections
  - <- calls <- [[infopopup]]
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::consentstatusicon** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::consentstatuslabel** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::derivegrade** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::groupconsentstatus** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::maskcontactname** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::onrelbadgeclick** () -- 1 connections
  - <- calls <- [[contactgroupcard]]
- **__unresolved__::ref::onrelchange** () -- 1 connections
  - <- calls <- [[contactgroupcard]]

## Internal Relationships
- ContactGroupCard -> calls -> __unresolved__::ref::derivegrade [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::stoppropagation [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::onrelbadgeclick [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::maskcontactname [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::consentstatusicon [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::groupconsentstatus [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::consentstatuslabel [EXTRACTED]
- ContactGroupCard -> calls -> __unresolved__::ref::onrelchange [EXTRACTED]
- InfoPopup -> calls -> __unresolved__::ref::stoppropagation [EXTRACTED]

## Cross-Community Connections
- ContactGroupCard -> calls -> __unresolved__::ref::round (-> [[unresolvedrefpush-unresolvedreflen]])
- ContactGroupCard -> calls -> __unresolved__::ref::tolocalestring (-> [[unresolvedrefreact-unresolvedreftypessession]])
- ContactGroupCard -> calls -> __unresolved__::ref::map (-> [[unresolvedrefpush-unresolvedreflen]])
- InfoPopup -> calls -> __unresolved__::ref::map (-> [[unresolvedrefpush-unresolvedreflen]])

## Context
이 커뮤니티는 ContactGroupCard, InfoPopup, __unresolved__::ref::stoppropagation를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 AssetsPage.tsx, ValuePage.tsx이다.
