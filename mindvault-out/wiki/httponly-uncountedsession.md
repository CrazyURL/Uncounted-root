# httpOnly 쿠키 & uncounted_session
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **httpOnly 쿠키** (path) -- 3 connections
  - -> contains -> [[uncountedsession]]
  - -> contains -> [[uncountedrefresh]]
  - <- stored_in <- [[uncountedaccesstoken]]
- **uncounted_session** (path) -- 2 connections
  - -> uses -> [[accesstoken]]
  - <- contains <- [[httponly]]
- **access_token** (path) -- 1 connections
  - <- uses <- [[uncountedsession]]
- **uncounted_access_token** (path) -- 1 connections
  - -> stored_in -> [[httponly]]
- **uncounted_refresh** (path) -- 1 connections
  - <- contains <- [[httponly]]

## Internal Relationships
- httpOnly 쿠키 -> contains -> uncounted_session [EXTRACTED]
- httpOnly 쿠키 -> contains -> uncounted_refresh [EXTRACTED]
- uncounted_access_token -> stored_in -> httpOnly 쿠키 [EXTRACTED]
- uncounted_session -> uses -> access_token [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 httpOnly 쿠키, uncounted_session, access_token를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 path이다.
