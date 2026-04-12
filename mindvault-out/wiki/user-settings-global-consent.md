# User Settings & Global Consent
Cohesion: 0.14 | Nodes: 15

## Key Nodes
- **User Settings** (path) -- 7 connections
  - -> references -> [[session-visibility]]
  - -> related_to -> [[unresolvedrefunresolvedrefunresolvedreflocalstorage]]
  - -> related_to -> [[consent-version]]
  - <- references <- [[global-consent]]
  - <- related_to <- [[edge-case-2]]
  - <- references <- [[test-case-01]]
  - <- references <- [[test-case-02]]
- **Global Consent** (path) -- 6 connections
  - -> related_to -> [[record-visibility]]
  - -> references -> [[consent-version]]
  - -> references -> [[user-settings]]
  - <- implements <- [[apply-global-consent-to-new]]
  - <- related_to <- [[edge-case-1]]
  - <- related_to <- [[test-case-03]]
- **Consent Version** (path) -- 3 connections
  - <- references <- [[global-consent]]
  - <- related_to <- [[user-settings]]
  - <- related_to <- [[edge-case-3]]
- **Record Visibility** (path) -- 3 connections
  - -> references -> [[visibility-status]]
  - <- related_to <- [[global-consent]]
  - <- implements <- [[batch-apply-consent]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__local_storage** () -- 1 connections
  - <- related_to <- [[user-settings]]
- **Apply Global Consent to New** (path) -- 1 connections
  - -> implements -> [[global-consent]]
- **Batch Apply Consent** (path) -- 1 connections
  - -> implements -> [[record-visibility]]
- **Edge Case 1** (path) -- 1 connections
  - -> related_to -> [[global-consent]]
- **Edge Case 2** (path) -- 1 connections
  - -> related_to -> [[user-settings]]
- **Edge Case 3** (path) -- 1 connections
  - -> related_to -> [[consent-version]]
- **Session Visibility** (path) -- 1 connections
  - <- references <- [[user-settings]]
- **Test Case 01** (path) -- 1 connections
  - -> references -> [[user-settings]]
- **Test Case 02** (path) -- 1 connections
  - -> references -> [[user-settings]]
- **Test Case 03** (path) -- 1 connections
  - -> related_to -> [[global-consent]]
- **Visibility Status** (path) -- 1 connections
  - <- references <- [[record-visibility]]

## Internal Relationships
- Apply Global Consent to New -> implements -> Global Consent [EXTRACTED]
- Batch Apply Consent -> implements -> Record Visibility [EXTRACTED]
- Edge Case 1 -> related_to -> Global Consent [INFERRED]
- Edge Case 2 -> related_to -> User Settings [INFERRED]
- Edge Case 3 -> related_to -> Consent Version [INFERRED]
- Global Consent -> related_to -> Record Visibility [EXTRACTED]
- Global Consent -> references -> Consent Version [EXTRACTED]
- Global Consent -> references -> User Settings [EXTRACTED]
- Record Visibility -> references -> Visibility Status [EXTRACTED]
- Test Case 01 -> references -> User Settings [EXTRACTED]
- Test Case 02 -> references -> User Settings [EXTRACTED]
- Test Case 03 -> related_to -> Global Consent [EXTRACTED]
- User Settings -> references -> Session Visibility [EXTRACTED]
- User Settings -> related_to -> __unresolved__::ref::__unresolved____ref____unresolved____ref__local_storage [EXTRACTED]
- User Settings -> related_to -> Consent Version [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 User Settings, Global Consent, Consent Version를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
