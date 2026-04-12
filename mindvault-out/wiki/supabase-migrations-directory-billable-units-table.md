# Supabase Migrations Directory & Billable Units Table
Cohesion: 0.09 | Nodes: 22

## Key Nodes
- **Supabase Migrations Directory** (supabase/migrations/) -- 18 connections
  - -> contains -> [[sessions-table]]
  - -> contains -> [[session-chunks-table]]
  - -> contains -> [[transcripts-table]]
  - -> contains -> [[transcript-chunks-table]]
  - -> contains -> [[utterances-table]]
  - -> contains -> [[users-profile-table]]
  - -> contains -> [[voice-profiles-table]]
  - -> contains -> [[billable-units-table]]
  - -> contains -> [[billable-unit-quality-metrics-table]]
  - -> contains -> [[export-jobs-table]]
  - -> contains -> [[export-package-items-table]]
  - -> contains -> [[metadata-events-table]]
  - -> contains -> [[user-asset-ledger-table]]
  - -> contains -> [[delivery-records-table]]
  - -> contains -> [[clients-table]]
  - -> contains -> [[delivery-profiles-table]]
  - -> contains -> [[client-sku-rules-table]]
  - -> contains -> [[sku-presets-table]]
- **Billable Units Table** (supabase/migrations/) -- 2 connections
  - -> provides -> [[unresolvedrefunresolvedrefunresolvedrefconsentstatus]]
  - <- contains <- [[supabase-migrations-directory]]
- **Users Profile Table** (supabase/migrations/) -- 2 connections
  - -> provides -> [[unresolvedrefunresolvedrefunresolvedrefdemographics]]
  - <- contains <- [[supabase-migrations-directory]]
- **Utterances Table** (supabase/migrations/) -- 2 connections
  - -> contains -> [[unresolvedrefunresolvedrefunresolvedreflabels]]
  - <- contains <- [[supabase-migrations-directory]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__consent_status** () -- 1 connections
  - <- provides <- [[billable-units-table]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__demographics** () -- 1 connections
  - <- provides <- [[users-profile-table]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__labels** () -- 1 connections
  - <- contains <- [[utterances-table]]
- **Billable Unit Quality Metrics Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Client SKU Rules Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Clients Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Delivery Profiles Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Delivery Records Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Export Jobs Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Export Package Items Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Metadata Events Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Session Chunks Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Sessions Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **SKU Presets Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Transcript Chunks Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Transcripts Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **User Asset Ledger Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]
- **Voice Profiles Table** (supabase/migrations/) -- 1 connections
  - <- contains <- [[supabase-migrations-directory]]

## Internal Relationships
- Billable Units Table -> provides -> __unresolved__::ref::__unresolved____ref____unresolved____ref__consent_status [EXTRACTED]
- Supabase Migrations Directory -> contains -> Sessions Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Session Chunks Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Transcripts Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Transcript Chunks Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Utterances Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Users Profile Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Voice Profiles Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Billable Units Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Billable Unit Quality Metrics Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Export Jobs Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Export Package Items Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Metadata Events Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> User Asset Ledger Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Delivery Records Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Clients Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Delivery Profiles Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> Client SKU Rules Table [EXTRACTED]
- Supabase Migrations Directory -> contains -> SKU Presets Table [EXTRACTED]
- Users Profile Table -> provides -> __unresolved__::ref::__unresolved____ref____unresolved____ref__demographics [EXTRACTED]
- Utterances Table -> contains -> __unresolved__::ref::__unresolved____ref____unresolved____ref__labels [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Supabase Migrations Directory, Billable Units Table, Users Profile Table를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 migrations이다.
