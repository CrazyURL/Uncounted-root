# DB/스토리지 스키마 & Supabase sessions 테이블 추가 컬럼
Cohesion: 0.40 | Nodes: 6

## Key Nodes
- **DB/스토리지 스키마** (uncounted-docs/앱/consent-design-spec.md) -- 3 connections
  - -> contains -> [[typescript-types]]
  - -> contains -> [[localstorage]]
  - -> contains -> [[supabase-sessions]]
- **Supabase sessions 테이블 추가 컬럼** (uncounted-docs/앱/consent-design-spec.md) -- 3 connections
  - -> has_code_example -> [[sql]]
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[db]]
- **typescript** (uncounted-docs/앱/consent-design-spec.md) -- 2 connections
  - <- has_code_example <- [[typescript-types]]
  - <- has_code_example <- [[supabase-sessions]]
- **TypeScript Types** (uncounted-docs/앱/consent-design-spec.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[db]]
- **sql** (uncounted-docs/앱/consent-design-spec.md) -- 1 connections
  - <- has_code_example <- [[supabase-sessions]]
- **localStorage 키** (uncounted-docs/앱/consent-design-spec.md) -- 1 connections
  - <- contains <- [[db]]

## Internal Relationships
- DB/스토리지 스키마 -> contains -> TypeScript Types [EXTRACTED]
- DB/스토리지 스키마 -> contains -> localStorage 키 [EXTRACTED]
- DB/스토리지 스키마 -> contains -> Supabase sessions 테이블 추가 컬럼 [EXTRACTED]
- Supabase sessions 테이블 추가 컬럼 -> has_code_example -> sql [EXTRACTED]
- Supabase sessions 테이블 추가 컬럼 -> has_code_example -> typescript [EXTRACTED]
- TypeScript Types -> has_code_example -> typescript [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 DB/스토리지 스키마, Supabase sessions 테이블 추가 컬럼, typescript를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 consent-design-spec.md이다.
