# React Refactoring Plan & Repository Integration
Cohesion: 0.11 | Nodes: 19

## Key Nodes
- **React Refactoring Plan** (path) -- 15 connections
  - -> references -> [[apptsx]]
  - -> related_to -> [[srclib]]
  - -> related_to -> [[valuepage]]
  - -> related_to -> [[sessiondetailpage]]
  - -> related_to -> [[homepage]]
  - -> related_to -> [[component-reusability-analysis]]
  - -> related_to -> [[bundle-size-and-code-splitting]]
  - -> related_to -> [[type-system-cleanup]]
  - -> related_to -> [[error-handling-integration]]
  - -> related_to -> [[app-bootstrap-separation]]
  - -> related_to -> [[session-domain-extraction]]
  - -> related_to -> [[page-decomposition]]
  - -> related_to -> [[value-domain-facade]]
  - -> related_to -> [[repository-integration]]
  - -> related_to -> [[remaining-engine-cleanup]]
- **Repository Integration** (path) -- 4 connections
  - <- related_to <- [[localstorage]]
  - <- related_to <- [[capacitor-preferences]]
  - <- related_to <- [[api]]
  - <- related_to <- [[react-refactoring-plan]]
- **API** (path) -- 1 connections
  - -> related_to -> [[repository-integration]]
- **App Bootstrap Separation** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **App.tsx** (src/app/App.tsx) -- 1 connections
  - <- references <- [[react-refactoring-plan]]
- **Bundle Size and Code Splitting** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **Capacitor Preferences** (path) -- 1 connections
  - -> related_to -> [[repository-integration]]
- **Component Reusability Analysis** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **Error Handling Integration** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **HomePage** (src/pages/HomePage.tsx) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **localStorage** (path) -- 1 connections
  - -> related_to -> [[repository-integration]]
- **Page Decomposition** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **Remaining Engine Cleanup** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **Session Domain Extraction** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **SessionDetailPage** (src/pages/SessionDetailPage.tsx) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **src/lib** (src/lib/) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **Type System Cleanup** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **Value Domain Facade** (path) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]
- **ValuePage** (src/pages/ValuePage.tsx) -- 1 connections
  - <- related_to <- [[react-refactoring-plan]]

## Internal Relationships
- API -> related_to -> Repository Integration [INFERRED]
- Capacitor Preferences -> related_to -> Repository Integration [INFERRED]
- localStorage -> related_to -> Repository Integration [INFERRED]
- React Refactoring Plan -> references -> App.tsx [EXTRACTED]
- React Refactoring Plan -> related_to -> src/lib [EXTRACTED]
- React Refactoring Plan -> related_to -> ValuePage [EXTRACTED]
- React Refactoring Plan -> related_to -> SessionDetailPage [EXTRACTED]
- React Refactoring Plan -> related_to -> HomePage [EXTRACTED]
- React Refactoring Plan -> related_to -> Component Reusability Analysis [EXTRACTED]
- React Refactoring Plan -> related_to -> Bundle Size and Code Splitting [EXTRACTED]
- React Refactoring Plan -> related_to -> Type System Cleanup [EXTRACTED]
- React Refactoring Plan -> related_to -> Error Handling Integration [EXTRACTED]
- React Refactoring Plan -> related_to -> App Bootstrap Separation [EXTRACTED]
- React Refactoring Plan -> related_to -> Session Domain Extraction [EXTRACTED]
- React Refactoring Plan -> related_to -> Page Decomposition [EXTRACTED]
- React Refactoring Plan -> related_to -> Value Domain Facade [EXTRACTED]
- React Refactoring Plan -> related_to -> Repository Integration [EXTRACTED]
- React Refactoring Plan -> related_to -> Remaining Engine Cleanup [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 React Refactoring Plan, Repository Integration, API를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 App.tsx, HomePage.tsx, SessionDetailPage.tsx, ValuePage.tsx, lib이다.
