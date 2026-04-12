# App Initialization & Local Storage
Cohesion: 0.21 | Nodes: 12

## Key Nodes
- **App Initialization** (src/app/App.tsx) -- 8 connections
  - -> references -> [[home-page]]
  - -> references -> [[value-page]]
  - -> references -> [[session-detail-page]]
  - -> references -> [[assets-page]]
  - -> references -> [[auth-context]]
  - -> references -> [[toast-context]]
  - <- provides <- [[auth-context]]
  - <- provides <- [[toast-context]]
- **Local Storage** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260322-110953-react-소스를-파악해서-리팩토링-계획을-해주세요-/codex.md) -- 5 connections
  - <- uses <- [[home-page]]
  - <- uses <- [[value-page]]
  - <- uses <- [[session-detail-page]]
  - <- uses <- [[assets-page]]
  - <- uses <- [[session-mapper]]
- **Assets Page** (src/pages/AssetsPage.tsx) -- 3 connections
  - -> uses -> [[local-storage]]
  - -> uses -> [[ledger-engine]]
  - <- references <- [[app-initialization]]
- **Home Page** (src/pages/HomePage.tsx) -- 3 connections
  - -> uses -> [[local-storage]]
  - -> uses -> [[scan-engine]]
  - <- references <- [[app-initialization]]
- **Value Page** (src/pages/ValuePage.tsx) -- 3 connections
  - -> uses -> [[local-storage]]
  - -> uses -> [[value-engine]]
  - <- references <- [[app-initialization]]
- **Auth Context** (src/lib/AuthContext.tsx) -- 2 connections
  - -> provides -> [[app-initialization]]
  - <- references <- [[app-initialization]]
- **Session Detail Page** (src/pages/SessionDetailPage.tsx) -- 2 connections
  - -> uses -> [[local-storage]]
  - <- references <- [[app-initialization]]
- **Toast Context** (src/lib/toastContext.tsx) -- 2 connections
  - -> provides -> [[app-initialization]]
  - <- references <- [[app-initialization]]
- **Ledger Engine** (src/lib/ledgerEngine.ts) -- 1 connections
  - <- uses <- [[assets-page]]
- **Scan Engine** (src/lib/scanEngine.ts) -- 1 connections
  - <- uses <- [[home-page]]
- **Session Mapper** (src/lib/sessionMapper.ts) -- 1 connections
  - -> uses -> [[local-storage]]
- **Value Engine** (src/lib/valueEngine.ts) -- 1 connections
  - <- uses <- [[value-page]]

## Internal Relationships
- App Initialization -> references -> Home Page [EXTRACTED]
- App Initialization -> references -> Value Page [EXTRACTED]
- App Initialization -> references -> Session Detail Page [EXTRACTED]
- App Initialization -> references -> Assets Page [EXTRACTED]
- App Initialization -> references -> Auth Context [EXTRACTED]
- App Initialization -> references -> Toast Context [EXTRACTED]
- Assets Page -> uses -> Local Storage [EXTRACTED]
- Assets Page -> uses -> Ledger Engine [EXTRACTED]
- Auth Context -> provides -> App Initialization [EXTRACTED]
- Home Page -> uses -> Local Storage [EXTRACTED]
- Home Page -> uses -> Scan Engine [EXTRACTED]
- Session Detail Page -> uses -> Local Storage [EXTRACTED]
- Session Mapper -> uses -> Local Storage [EXTRACTED]
- Toast Context -> provides -> App Initialization [EXTRACTED]
- Value Page -> uses -> Local Storage [EXTRACTED]
- Value Page -> uses -> Value Engine [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 App Initialization, Local Storage, Assets Page를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 App.tsx, AssetsPage.tsx, AuthContext.tsx, HomePage.tsx, SessionDetailPage.tsx이다.
