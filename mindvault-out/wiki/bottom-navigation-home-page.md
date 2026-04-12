# Bottom Navigation & Home Page
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **Bottom Navigation** (Flat Minimal Redesign) -- 5 connections
  - <- contains <- [[home-page]]
  - <- contains <- [[assets-page]]
  - <- contains <- [[session-detail-page]]
  - <- contains <- [[value-page]]
  - <- contains <- [[profile-page]]
- **Home Page** (Flat Minimal Redesign) -- 4 connections
  - -> contains -> [[status-bar]]
  - -> contains -> [[next-action-card]]
  - -> contains -> [[value-summary]]
  - -> contains -> [[bottom-navigation]]
- **Assets Page** (Flat Minimal Redesign) -- 3 connections
  - -> contains -> [[search-input]]
  - -> contains -> [[contact-group-card]]
  - -> contains -> [[bottom-navigation]]
- **Session Detail Page** (Flat Minimal Redesign) -- 3 connections
  - -> contains -> [[audio-player]]
  - -> contains -> [[key-information]]
  - -> contains -> [[bottom-navigation]]
- **Profile Page** (Flat Minimal Redesign) -- 2 connections
  - -> contains -> [[profile-card]]
  - -> contains -> [[bottom-navigation]]
- **Value Page** (Flat Minimal Redesign) -- 2 connections
  - -> contains -> [[value-card]]
  - -> contains -> [[bottom-navigation]]
- **Audio Player** (SessionDetailPage) -- 1 connections
  - <- contains <- [[session-detail-page]]
- **Contact Group Card** (AssetsPage) -- 1 connections
  - <- contains <- [[assets-page]]
- **Key Information** (SessionDetailPage) -- 1 connections
  - <- contains <- [[session-detail-page]]
- **Next Action Card** (HomePage) -- 1 connections
  - <- contains <- [[home-page]]
- **Profile Card** (ProfilePage) -- 1 connections
  - <- contains <- [[profile-page]]
- **Search Input** (AssetsPage) -- 1 connections
  - <- contains <- [[assets-page]]
- **Status Bar** (HomePage) -- 1 connections
  - <- contains <- [[home-page]]
- **Value Card** (ValuePage) -- 1 connections
  - <- contains <- [[value-page]]
- **Value Summary** (HomePage) -- 1 connections
  - <- contains <- [[home-page]]

## Internal Relationships
- Assets Page -> contains -> Search Input [EXTRACTED]
- Assets Page -> contains -> Contact Group Card [EXTRACTED]
- Assets Page -> contains -> Bottom Navigation [EXTRACTED]
- Home Page -> contains -> Status Bar [EXTRACTED]
- Home Page -> contains -> Next Action Card [EXTRACTED]
- Home Page -> contains -> Value Summary [EXTRACTED]
- Home Page -> contains -> Bottom Navigation [EXTRACTED]
- Profile Page -> contains -> Profile Card [EXTRACTED]
- Profile Page -> contains -> Bottom Navigation [EXTRACTED]
- Session Detail Page -> contains -> Audio Player [EXTRACTED]
- Session Detail Page -> contains -> Key Information [EXTRACTED]
- Session Detail Page -> contains -> Bottom Navigation [EXTRACTED]
- Value Page -> contains -> Value Card [EXTRACTED]
- Value Page -> contains -> Bottom Navigation [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Bottom Navigation, Home Page, Assets Page를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 AssetsPage, Flat Minimal Redesign, HomePage, ProfilePage, SessionDetailPage이다.
