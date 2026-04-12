# HIGH (10건) & CRITICAL (7건)
Cohesion: 0.09 | Nodes: 23

## Key Nodes
- **HIGH (10건)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 11 connections
  - -> contains -> [[h-1-pipa-1517]]
  - -> contains -> [[h-2-pkce-codeverifier-localstorage]]
  - -> contains -> [[h-3-aes-localstorage]]
  - -> contains -> [[h-4-userid]]
  - -> contains -> [[h-5-errmessage]]
  - -> contains -> [[h-6-guidedonboardingpage-746]]
  - -> contains -> [[h-7-onauthstatechange-checking-navigate]]
  - -> contains -> [[h-8]]
  - -> contains -> [[h-9-apiauthts-any-5]]
  - -> contains -> [[h-10-authpage]]
  - <- contains <- [[a1]]
- **CRITICAL (7건)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 8 connections
  - -> contains -> [[c-1]]
  - -> contains -> [[c-2-accesstoken-localstorage-xss]]
  - -> contains -> [[c-3-oauth-redirect]]
  - -> contains -> [[c-4-tutorialstore-defaultstate]]
  - -> contains -> [[c-5-authinitpromise]]
  - -> contains -> [[c-6-navigateafterauth-stale-useeffect]]
  - -> contains -> [[c-7-trackfunnelonboardingcomplete]]
  - <- contains <- [[a1]]
- **A1 온보딩 & 인증 — 보안/품질 리뷰 결과 및 수정 현황** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 5 connections
  - -> contains -> [[critical-7]]
  - -> contains -> [[high-10]]
  - -> contains -> [[medium-12]]
  - -> contains -> [[low-8]]
  - -> contains -> [[vs]]
- **C-1. 프로덕션 시크릿 파일 평문 존재** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[critical-7]]
- **C-2. access_token localStorage 평문 저장 (XSS 취약)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[critical-7]]
- **C-3. OAuth redirect 파라미터 미검증 (오픈 리다이렉트)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[critical-7]]
- **C-4. tutorialStore DEFAULT_STATE 직접 변이** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[critical-7]]
- **C-5. authInitPromise 싱글턴 재초기화 시 영구 미결** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[critical-7]]
- **C-6. navigateAfterAuth stale 클로저 + useEffect 의존성 누락** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[critical-7]]
- **C-7. trackFunnel('onboarding_complete') 데드코드** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[critical-7]]
- **H-10. AuthPage 게스트 로그인 버튼 미구현** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-1. 온보딩 동의가 PIPA 제15조/17조 미충족 (허위 고지)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-2. PKCE code_verifier localStorage 저장** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-3. AES 키 localStorage 평문 저장** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-4. 로깅 엔드포인트 인증 없이 user_id 저장** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-5. 서버 에러 핸들러 err.message 클라이언트 노출** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-6. GuidedOnboardingPage 746줄 단일 컴포넌트** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-7. onAuthStateChange 구독 타이밍 (checking 중 navigate)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-8. 스캔 실패 시 사용자 에러 피드백 없음** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **H-9. api/auth.ts `any` 타입 5곳** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[high-10]]
- **LOW (8건)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[a1]]
- **MEDIUM (12건)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[a1]]
- **스펙 정합성 (기능정의서 vs 구현)** (uncounted-docs/bugfix/A1-onboarding-auth-review.md) -- 1 connections
  - <- contains <- [[a1]]

## Internal Relationships
- A1 온보딩 & 인증 — 보안/품질 리뷰 결과 및 수정 현황 -> contains -> CRITICAL (7건) [EXTRACTED]
- A1 온보딩 & 인증 — 보안/품질 리뷰 결과 및 수정 현황 -> contains -> HIGH (10건) [EXTRACTED]
- A1 온보딩 & 인증 — 보안/품질 리뷰 결과 및 수정 현황 -> contains -> MEDIUM (12건) [EXTRACTED]
- A1 온보딩 & 인증 — 보안/품질 리뷰 결과 및 수정 현황 -> contains -> LOW (8건) [EXTRACTED]
- A1 온보딩 & 인증 — 보안/품질 리뷰 결과 및 수정 현황 -> contains -> 스펙 정합성 (기능정의서 vs 구현) [EXTRACTED]
- CRITICAL (7건) -> contains -> C-1. 프로덕션 시크릿 파일 평문 존재 [EXTRACTED]
- CRITICAL (7건) -> contains -> C-2. access_token localStorage 평문 저장 (XSS 취약) [EXTRACTED]
- CRITICAL (7건) -> contains -> C-3. OAuth redirect 파라미터 미검증 (오픈 리다이렉트) [EXTRACTED]
- CRITICAL (7건) -> contains -> C-4. tutorialStore DEFAULT_STATE 직접 변이 [EXTRACTED]
- CRITICAL (7건) -> contains -> C-5. authInitPromise 싱글턴 재초기화 시 영구 미결 [EXTRACTED]
- CRITICAL (7건) -> contains -> C-6. navigateAfterAuth stale 클로저 + useEffect 의존성 누락 [EXTRACTED]
- CRITICAL (7건) -> contains -> C-7. trackFunnel('onboarding_complete') 데드코드 [EXTRACTED]
- HIGH (10건) -> contains -> H-1. 온보딩 동의가 PIPA 제15조/17조 미충족 (허위 고지) [EXTRACTED]
- HIGH (10건) -> contains -> H-2. PKCE code_verifier localStorage 저장 [EXTRACTED]
- HIGH (10건) -> contains -> H-3. AES 키 localStorage 평문 저장 [EXTRACTED]
- HIGH (10건) -> contains -> H-4. 로깅 엔드포인트 인증 없이 user_id 저장 [EXTRACTED]
- HIGH (10건) -> contains -> H-5. 서버 에러 핸들러 err.message 클라이언트 노출 [EXTRACTED]
- HIGH (10건) -> contains -> H-6. GuidedOnboardingPage 746줄 단일 컴포넌트 [EXTRACTED]
- HIGH (10건) -> contains -> H-7. onAuthStateChange 구독 타이밍 (checking 중 navigate) [EXTRACTED]
- HIGH (10건) -> contains -> H-8. 스캔 실패 시 사용자 에러 피드백 없음 [EXTRACTED]
- HIGH (10건) -> contains -> H-9. api/auth.ts `any` 타입 5곳 [EXTRACTED]
- HIGH (10건) -> contains -> H-10. AuthPage 게스트 로그인 버튼 미구현 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 HIGH (10건), CRITICAL (7건), A1 온보딩 & 인증 — 보안/품질 리뷰 결과 및 수정 현황를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 A1-onboarding-auth-review.md이다.
