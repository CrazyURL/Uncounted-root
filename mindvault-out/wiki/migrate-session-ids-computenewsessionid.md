# migrate-session-ids & computeNewSessionId
Cohesion: 0.12 | Nodes: 16

## Key Nodes
- **migrate-session-ids** (uncounted-api/scripts/migrate-session-ids.ts) -- 8 connections
  - -> contains -> [[getarg]]
  - -> contains -> [[computenewsessionid]]
  - -> contains -> [[loadsessions]]
  - -> contains -> [[buildmigrations]]
  - -> contains -> [[migrateone]]
  - -> contains -> [[main]]
  - -> imports -> [[unresolvedrefunresolvedrefsupabasesupabasejs]]
  - -> imports -> [[unresolvedrefunresolvedrefnodecrypto]]
- **computeNewSessionId** (uncounted-api/scripts/migrate-session-ids.ts) -- 6 connections
  - -> calls -> [[unresolvedrefunresolvedrefcreatehmac]]
  - -> calls -> [[unresolvedrefunresolvedreffrom]]
  - -> calls -> [[unresolvedrefunresolvedrefupdate]]
  - -> calls -> [[unresolvedrefunresolvedrefslice]]
  - -> calls -> [[unresolvedrefunresolvedrefdigest]]
  - <- contains <- [[migrate-session-ids]]
- **main** (uncounted-api/scripts/migrate-session-ids.ts) -- 6 connections
  - -> calls -> [[unresolvedrefunresolvedreflog]]
  - -> calls -> [[unresolvedrefunresolvedrefloadsessions]]
  - -> calls -> [[unresolvedrefunresolvedrefbuildmigrations]]
  - -> calls -> [[unresolvedrefunresolvedrefmigrateone]]
  - -> calls -> [[unresolvedrefunresolvedrefentries]]
  - <- contains <- [[migrate-session-ids]]
- **__unresolved__::ref::__unresolved____ref____supabase_supabase_js_** () -- 5 connections
  - <- imports <- [[reset-all]]
  - <- imports <- [[migrate-session-ids]]
  - <- imports <- [[dedup-sessions]]
  - <- imports <- [[reset-consent-to-private]]
  - <- imports <- [[supabase]]
- **__unresolved__::ref::__unresolved____ref__digest** () -- 3 connections
  - <- calls <- [[hashfingerprint]]
  - <- calls <- [[generatecodechallenge]]
  - <- calls <- [[computenewsessionid]]
- **buildMigrations** (uncounted-api/scripts/migrate-session-ids.ts) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefcomputenewsessionid]]
  - -> calls -> [[unresolvedrefunresolvedrefpush]]
  - <- contains <- [[migrate-session-ids]]
- **__unresolved__::ref::__unresolved____ref___node_crypto_** () -- 2 connections
  - <- imports <- [[migrate-session-ids]]
  - <- imports <- [[crypto]]
- **getArg** (uncounted-api/scripts/migrate-session-ids.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefindexof]]
  - <- contains <- [[migrate-session-ids]]
- **__unresolved__::ref::__unresolved____ref__buildmigrations** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__computenewsessionid** () -- 1 connections
  - <- calls <- [[buildmigrations]]
- **__unresolved__::ref::__unresolved____ref__createhmac** () -- 1 connections
  - <- calls <- [[computenewsessionid]]
- **__unresolved__::ref::__unresolved____ref__loadsessions** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__migrateone** () -- 1 connections
  - <- calls <- [[main]]
- **reset-consent-to-private** (uncounted-api/scripts/reset-consent-to-private.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefsupabasesupabasejs]]
- **crypto** (uncounted-api/src/lib/crypto.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefnodecrypto]]
- **supabase** (uncounted-api/src/lib/supabase.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefsupabasesupabasejs]]

## Internal Relationships
- migrate-session-ids -> contains -> getArg [EXTRACTED]
- migrate-session-ids -> contains -> computeNewSessionId [EXTRACTED]
- migrate-session-ids -> contains -> buildMigrations [EXTRACTED]
- migrate-session-ids -> contains -> main [EXTRACTED]
- migrate-session-ids -> imports -> __unresolved__::ref::__unresolved____ref____supabase_supabase_js_ [EXTRACTED]
- migrate-session-ids -> imports -> __unresolved__::ref::__unresolved____ref___node_crypto_ [EXTRACTED]
- buildMigrations -> calls -> __unresolved__::ref::__unresolved____ref__computenewsessionid [EXTRACTED]
- computeNewSessionId -> calls -> __unresolved__::ref::__unresolved____ref__createhmac [EXTRACTED]
- computeNewSessionId -> calls -> __unresolved__::ref::__unresolved____ref__digest [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__loadsessions [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__buildmigrations [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__migrateone [EXTRACTED]
- reset-consent-to-private -> imports -> __unresolved__::ref::__unresolved____ref____supabase_supabase_js_ [EXTRACTED]
- crypto -> imports -> __unresolved__::ref::__unresolved____ref___node_crypto_ [EXTRACTED]
- supabase -> imports -> __unresolved__::ref::__unresolved____ref____supabase_supabase_js_ [EXTRACTED]

## Cross-Community Connections
- migrate-session-ids -> contains -> loadSessions (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- migrate-session-ids -> contains -> migrateOne (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- buildMigrations -> calls -> __unresolved__::ref::__unresolved____ref__push (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- computeNewSessionId -> calls -> __unresolved__::ref::__unresolved____ref__from (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- computeNewSessionId -> calls -> __unresolved__::ref::__unresolved____ref__update (-> [[transcribe-unresolvedrefunresolvedrefmin]])
- computeNewSessionId -> calls -> __unresolved__::ref::__unresolved____ref__slice (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- getArg -> calls -> __unresolved__::ref::__unresolved____ref__indexof (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- main -> calls -> __unresolved__::ref::__unresolved____ref__log (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- main -> calls -> __unresolved__::ref::__unresolved____ref__entries (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])

## Context
이 커뮤니티는 migrate-session-ids, computeNewSessionId, main를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 crypto.ts, migrate-session-ids.ts, reset-consent-to-private.ts, supabase.ts이다.
