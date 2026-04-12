# PrivacyControlCenterPage & ConsentRestoreInit
Cohesion: 0.22 | Nodes: 13

## Key Nodes
- **PrivacyControlCenterPage** (/Users/gdash/project/uncounted-project/uncounted-app/src/pages/PrivacyControlCenterPage.tsx) -- 13 connections
  - -> contains -> [[loadconsents]]
  - -> contains -> [[saveconsents]]
  - -> contains -> [[deleteconfirmmodal]]
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedrefreactrouterdom]]
  - -> imports -> [[unresolvedreftypessku]]
  - -> imports -> [[unresolvedreftypesconsent]]
  - -> imports -> [[unresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedreflibpipelineorchestrator]]
  - -> imports -> [[unresolvedreflibglobalconsent]]
  - -> imports -> [[unresolvedreflibauthcontext]]
  - -> imports -> [[unresolvedreflibapiconsent]]
  - -> imports -> [[unresolvedreflibcallmetacollector]]
- **ConsentRestoreInit** (/Users/gdash/project/uncounted-project/uncounted-app/src/app/bootstrap/ConsentRestoreInit.tsx) -- 6 connections
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedreflibauthcontext]]
  - -> imports -> [[unresolvedreflibapiconsent]]
  - -> imports -> [[unresolvedreftypesconsent]]
  - -> imports -> [[unresolvedreflibglobalconsent]]
  - -> imports -> [[unresolvedreflibcallmetacollector]]
- **__unresolved__::ref::_lib_api_consent_** () -- 2 connections
  - <- imports <- [[consentrestoreinit]]
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_lib_authcontext_** () -- 2 connections
  - <- imports <- [[consentrestoreinit]]
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_lib_callmetacollector_** () -- 2 connections
  - <- imports <- [[consentrestoreinit]]
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_lib_globalconsent_** () -- 2 connections
  - <- imports <- [[consentrestoreinit]]
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_react_** () -- 2 connections
  - <- imports <- [[consentrestoreinit]]
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_types_consent_** () -- 2 connections
  - <- imports <- [[consentrestoreinit]]
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_lib_pipelineorchestrator_** () -- 1 connections
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_lib_sessionmapper_** () -- 1 connections
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_react_router_dom_** () -- 1 connections
  - <- imports <- [[privacycontrolcenterpage]]
- **__unresolved__::ref::_types_sku_** () -- 1 connections
  - <- imports <- [[privacycontrolcenterpage]]
- **DeleteConfirmModal** (/Users/gdash/project/uncounted-project/uncounted-app/src/pages/PrivacyControlCenterPage.tsx) -- 1 connections
  - <- contains <- [[privacycontrolcenterpage]]

## Internal Relationships
- ConsentRestoreInit -> imports -> __unresolved__::ref::_react_ [EXTRACTED]
- ConsentRestoreInit -> imports -> __unresolved__::ref::_lib_authcontext_ [EXTRACTED]
- ConsentRestoreInit -> imports -> __unresolved__::ref::_lib_api_consent_ [EXTRACTED]
- ConsentRestoreInit -> imports -> __unresolved__::ref::_types_consent_ [EXTRACTED]
- ConsentRestoreInit -> imports -> __unresolved__::ref::_lib_globalconsent_ [EXTRACTED]
- ConsentRestoreInit -> imports -> __unresolved__::ref::_lib_callmetacollector_ [EXTRACTED]
- PrivacyControlCenterPage -> contains -> DeleteConfirmModal [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_react_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_react_router_dom_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_types_sku_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_types_consent_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_lib_sessionmapper_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_lib_pipelineorchestrator_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_lib_globalconsent_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_lib_authcontext_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_lib_api_consent_ [EXTRACTED]
- PrivacyControlCenterPage -> imports -> __unresolved__::ref::_lib_callmetacollector_ [EXTRACTED]

## Cross-Community Connections
- PrivacyControlCenterPage -> contains -> loadConsents (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefsetitem]])
- PrivacyControlCenterPage -> contains -> saveConsents (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefsetitem]])

## Context
이 커뮤니티는 PrivacyControlCenterPage, ConsentRestoreInit, __unresolved__::ref::_lib_api_consent_를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 ConsentRestoreInit.tsx, PrivacyControlCenterPage.tsx이다.
