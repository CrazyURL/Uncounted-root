# uncounted-app & uncounted-api
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **uncounted-app** (path) -- 6 connections
  - <- related_to <- [[]]
  - <- references <- [[critical-plaintext-localstorage-accesstoken]]
  - <- related_to <- [[high-pipa-compliance-issue]]
  - <- references <- [[high-store-pkce-codeverifier-in-localstorage]]
  - <- references <- [[medium-update-withdrawalnotifiedat-on-pipa-withdrawal]]
  - <- references <- [[low-privacy-policy-link-legal-risk]]
- **uncounted-api** (path) -- 5 connections
  - <- related_to <- [[]]
  - <- references <- [[critical-plaintext-production-secret-files]]
  - <- references <- [[critical-unvalidated-oauth-redirect-parameter]]
  - <- references <- [[high-logging-endpoint-without-authentication]]
  - <- references <- [[medium-csrf-vulnerability-in-samesite-cookie]]
- **온보딩 & 인증** (path) -- 2 connections
  - -> related_to -> [[uncounted-app]]
  - -> related_to -> [[uncounted-api]]
- **CRITICAL: Plaintext localStorage access_token** (path) -- 1 connections
  - -> references -> [[uncounted-app]]
- **CRITICAL: Plaintext Production Secret Files** (path) -- 1 connections
  - -> references -> [[uncounted-api]]
- **CRITICAL: Unvalidated OAuth redirect parameter** (path) -- 1 connections
  - -> references -> [[uncounted-api]]
- **HIGH: Logging endpoint without authentication** (path) -- 1 connections
  - -> references -> [[uncounted-api]]
- **HIGH: PIPA Compliance Issue** (path) -- 1 connections
  - -> related_to -> [[uncounted-app]]
- **HIGH: Store PKCE code_verifier in localStorage** (path) -- 1 connections
  - -> references -> [[uncounted-app]]
- **LOW: Privacy policy link legal risk** (path) -- 1 connections
  - -> references -> [[uncounted-app]]
- **MEDIUM: CSRF vulnerability in SameSite cookie** (path) -- 1 connections
  - -> references -> [[uncounted-api]]
- **MEDIUM: Update withdrawalNotifiedAt on PIPA withdrawal** (path) -- 1 connections
  - -> references -> [[uncounted-app]]

## Internal Relationships
- 온보딩 & 인증 -> related_to -> uncounted-app [EXTRACTED]
- 온보딩 & 인증 -> related_to -> uncounted-api [EXTRACTED]
- CRITICAL: Plaintext localStorage access_token -> references -> uncounted-app [EXTRACTED]
- CRITICAL: Plaintext Production Secret Files -> references -> uncounted-api [EXTRACTED]
- CRITICAL: Unvalidated OAuth redirect parameter -> references -> uncounted-api [EXTRACTED]
- HIGH: Logging endpoint without authentication -> references -> uncounted-api [EXTRACTED]
- HIGH: PIPA Compliance Issue -> related_to -> uncounted-app [EXTRACTED]
- HIGH: Store PKCE code_verifier in localStorage -> references -> uncounted-app [EXTRACTED]
- LOW: Privacy policy link legal risk -> references -> uncounted-app [EXTRACTED]
- MEDIUM: CSRF vulnerability in SameSite cookie -> references -> uncounted-api [EXTRACTED]
- MEDIUM: Update withdrawalNotifiedAt on PIPA withdrawal -> references -> uncounted-app [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 uncounted-app, uncounted-api, 온보딩 & 인증를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
