# 컴포넌트 스펙 — Flat Minimal Redesign & 21st.dev 참고
Cohesion: 0.27 | Nodes: 11

## Key Nodes
- **컴포넌트 스펙 — Flat Minimal Redesign** (uncounted-docs/ux-design-update/07-component-spec.md) -- 9 connections
  - -> contains -> [[bottomnav]]
  - -> contains -> [[1-homepage-home]]
  - -> contains -> [[2-assetspage-assets]]
  - -> contains -> [[3-sessiondetailpage-assetssessionid]]
  - -> contains -> [[4-valuepage-value]]
  - -> contains -> [[5-profilepage-profile]]
  - -> contains -> [[6-onboardingpage-welcomepage-welcome]]
  - -> contains -> [[7-campaignspage-missionspage]]
  - -> contains -> [[8-privacycontrolcenterpage]]
- **21st.dev 참고** (uncounted-docs/ux-design-update/07-component-spec.md) -- 6 connections
  - <- contains <- [[1-homepage-home]]
  - <- contains <- [[2-assetspage-assets]]
  - <- contains <- [[3-sessiondetailpage-assetssessionid]]
  - <- contains <- [[4-valuepage-value]]
  - <- contains <- [[6-onboardingpage-welcomepage-welcome]]
  - <- contains <- [[8-privacycontrolcenterpage]]
- **1. HomePage (`/home`)** (uncounted-docs/ux-design-update/07-component-spec.md) -- 2 connections
  - -> contains -> [[21stdev]]
  - <- contains <- [[flat-minimal-redesign]]
- **2. AssetsPage (`/assets`)** (uncounted-docs/ux-design-update/07-component-spec.md) -- 2 connections
  - -> contains -> [[21stdev]]
  - <- contains <- [[flat-minimal-redesign]]
- **3. SessionDetailPage (`/assets/:sessionId`)** (uncounted-docs/ux-design-update/07-component-spec.md) -- 2 connections
  - -> contains -> [[21stdev]]
  - <- contains <- [[flat-minimal-redesign]]
- **4. ValuePage (`/value`)** (uncounted-docs/ux-design-update/07-component-spec.md) -- 2 connections
  - -> contains -> [[21stdev]]
  - <- contains <- [[flat-minimal-redesign]]
- **6. OnboardingPage (`/`) + WelcomePage (`/welcome`)** (uncounted-docs/ux-design-update/07-component-spec.md) -- 2 connections
  - -> contains -> [[21stdev]]
  - <- contains <- [[flat-minimal-redesign]]
- **8. PrivacyControlCenterPage** (uncounted-docs/ux-design-update/07-component-spec.md) -- 2 connections
  - -> contains -> [[21stdev]]
  - <- contains <- [[flat-minimal-redesign]]
- **5. ProfilePage (`/profile`)** (uncounted-docs/ux-design-update/07-component-spec.md) -- 1 connections
  - <- contains <- [[flat-minimal-redesign]]
- **7. CampaignsPage + MissionsPage** (uncounted-docs/ux-design-update/07-component-spec.md) -- 1 connections
  - <- contains <- [[flat-minimal-redesign]]
- **공통: BottomNav** (uncounted-docs/ux-design-update/07-component-spec.md) -- 1 connections
  - <- contains <- [[flat-minimal-redesign]]

## Internal Relationships
- 1. HomePage (`/home`) -> contains -> 21st.dev 참고 [EXTRACTED]
- 2. AssetsPage (`/assets`) -> contains -> 21st.dev 참고 [EXTRACTED]
- 3. SessionDetailPage (`/assets/:sessionId`) -> contains -> 21st.dev 참고 [EXTRACTED]
- 4. ValuePage (`/value`) -> contains -> 21st.dev 참고 [EXTRACTED]
- 6. OnboardingPage (`/`) + WelcomePage (`/welcome`) -> contains -> 21st.dev 참고 [EXTRACTED]
- 8. PrivacyControlCenterPage -> contains -> 21st.dev 참고 [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 공통: BottomNav [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 1. HomePage (`/home`) [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 2. AssetsPage (`/assets`) [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 3. SessionDetailPage (`/assets/:sessionId`) [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 4. ValuePage (`/value`) [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 5. ProfilePage (`/profile`) [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 6. OnboardingPage (`/`) + WelcomePage (`/welcome`) [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 7. CampaignsPage + MissionsPage [EXTRACTED]
- 컴포넌트 스펙 — Flat Minimal Redesign -> contains -> 8. PrivacyControlCenterPage [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 컴포넌트 스펙 — Flat Minimal Redesign, 21st.dev 참고, 1. HomePage (`/home`)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 07-component-spec.md이다.
