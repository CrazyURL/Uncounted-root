# generate & generate-icons
Cohesion: 0.12 | Nodes: 18

## Key Nodes
- **generate** (scripts/generate-icons.mjs) -- 12 connections
  - -> calls -> [[unresolvedrefforegroundsvg]]
  - -> calls -> [[unresolvedrefjoin]]
  - -> calls -> [[unresolvedreftofile]]
  - -> calls -> [[unresolvedrefpng]]
  - -> calls -> [[unresolvedrefresize]]
  - -> calls -> [[unresolvedrefsharp]]
  - -> calls -> [[unresolvedreffrom]]
  - -> calls -> [[unresolvedreflaunchersvg]]
  - -> calls -> [[unresolvedreflog]]
  - -> calls -> [[unresolvedrefroundsvg]]
  - -> calls -> [[unresolvedrefsplashsvg]]
  - <- contains <- [[generate-icons]]
- **generate-icons** (scripts/generate-icons.mjs) -- 8 connections
  - -> contains -> [[launchersvg]]
  - -> contains -> [[roundsvg]]
  - -> contains -> [[foregroundsvg]]
  - -> contains -> [[splashsvg]]
  - -> contains -> [[generate]]
  - -> imports -> [[unresolvedrefsharp]]
  - -> imports -> [[unresolvedrefpath]]
  - -> imports -> [[unresolvedreffs]]
- **reset-all** (scripts/reset-all.mjs) -- 6 connections
  - -> contains -> [[loadenv]]
  - -> contains -> [[clearsupabase]]
  - -> imports -> [[unresolvedreffs]]
  - -> imports -> [[unresolvedrefpath]]
  - -> imports -> [[unresolvedrefurl]]
  - -> imports -> [[unresolvedrefsupabasesupabasejs]]
- **__unresolved__::ref::_fs_** () -- 2 connections
  - <- imports <- [[generate-icons]]
  - <- imports <- [[reset-all]]
- **__unresolved__::ref::_path_** () -- 2 connections
  - <- imports <- [[generate-icons]]
  - <- imports <- [[reset-all]]
- **launcherSvg** (scripts/generate-icons.mjs) -- 2 connections
  - -> calls -> [[unresolvedrefreplace]]
  - <- contains <- [[generate-icons]]
- **roundSvg** (scripts/generate-icons.mjs) -- 2 connections
  - -> calls -> [[unresolvedrefreplace]]
  - <- contains <- [[generate-icons]]
- **__unresolved__::ref::__supabase_supabase_js_** () -- 1 connections
  - <- imports <- [[reset-all]]
- **__unresolved__::ref::_sharp_** () -- 1 connections
  - <- imports <- [[generate-icons]]
- **__unresolved__::ref::_url_** () -- 1 connections
  - <- imports <- [[reset-all]]
- **__unresolved__::ref::foregroundsvg** () -- 1 connections
  - <- calls <- [[generate]]
- **__unresolved__::ref::launchersvg** () -- 1 connections
  - <- calls <- [[generate]]
- **__unresolved__::ref::png** () -- 1 connections
  - <- calls <- [[generate]]
- **__unresolved__::ref::resize** () -- 1 connections
  - <- calls <- [[generate]]
- **__unresolved__::ref::roundsvg** () -- 1 connections
  - <- calls <- [[generate]]
- **__unresolved__::ref::sharp** () -- 1 connections
  - <- calls <- [[generate]]
- **__unresolved__::ref::splashsvg** () -- 1 connections
  - <- calls <- [[generate]]
- **__unresolved__::ref::tofile** () -- 1 connections
  - <- calls <- [[generate]]

## Internal Relationships
- generate -> calls -> __unresolved__::ref::foregroundsvg [EXTRACTED]
- generate -> calls -> __unresolved__::ref::tofile [EXTRACTED]
- generate -> calls -> __unresolved__::ref::png [EXTRACTED]
- generate -> calls -> __unresolved__::ref::resize [EXTRACTED]
- generate -> calls -> __unresolved__::ref::sharp [EXTRACTED]
- generate -> calls -> __unresolved__::ref::launchersvg [EXTRACTED]
- generate -> calls -> __unresolved__::ref::roundsvg [EXTRACTED]
- generate -> calls -> __unresolved__::ref::splashsvg [EXTRACTED]
- generate-icons -> contains -> launcherSvg [EXTRACTED]
- generate-icons -> contains -> roundSvg [EXTRACTED]
- generate-icons -> contains -> generate [EXTRACTED]
- generate-icons -> imports -> __unresolved__::ref::_sharp_ [EXTRACTED]
- generate-icons -> imports -> __unresolved__::ref::_path_ [EXTRACTED]
- generate-icons -> imports -> __unresolved__::ref::_fs_ [EXTRACTED]
- reset-all -> imports -> __unresolved__::ref::_fs_ [EXTRACTED]
- reset-all -> imports -> __unresolved__::ref::_path_ [EXTRACTED]
- reset-all -> imports -> __unresolved__::ref::_url_ [EXTRACTED]
- reset-all -> imports -> __unresolved__::ref::__supabase_supabase_js_ [EXTRACTED]

## Cross-Community Connections
- generate -> calls -> __unresolved__::ref::join (-> [[unresolvedrefpush-unresolvedrefmin]])
- generate -> calls -> __unresolved__::ref::from (-> [[unresolvedrefpush-unresolvedrefmin]])
- generate -> calls -> __unresolved__::ref::log (-> [[unresolvedrefstring-unresolvedrefgetmonth]])
- launcherSvg -> calls -> __unresolved__::ref::replace (-> [[unresolvedrefpush-unresolvedrefmin]])
- roundSvg -> calls -> __unresolved__::ref::replace (-> [[unresolvedrefpush-unresolvedrefmin]])
- generate-icons -> contains -> foregroundSvg (-> [[unresolvedrefpush-unresolvedrefmin]])
- generate-icons -> contains -> splashSvg (-> [[unresolvedrefpush-unresolvedrefmin]])
- reset-all -> contains -> loadEnv (-> [[unresolvedrefpush-unresolvedrefmin]])
- reset-all -> contains -> clearSupabase (-> [[unresolvedrefstring-unresolvedrefgetmonth]])

## Context
이 커뮤니티는 generate, generate-icons, reset-all를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 generate-icons.mjs, reset-all.mjs이다.
