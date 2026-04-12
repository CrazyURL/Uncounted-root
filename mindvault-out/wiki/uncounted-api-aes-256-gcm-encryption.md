# Uncounted API & AES-256-GCM Encryption
Cohesion: 0.10 | Nodes: 21

## Key Nodes
- **Uncounted API** (path) -- 20 connections
  - -> references -> [[hono-framework]]
  - -> references -> [[supabase-database]]
  - -> references -> [[iwinv-s3-storage]]
  - -> references -> [[aes-256-gcm-encryption]]
  - -> references -> [[nodejs]]
  - -> references -> [[typescript]]
  - -> references -> [[vitest-testing]]
  - -> references -> [[swagger-ui]]
  - -> references -> [[openapi-specification]]
  - -> references -> [[rendercom]]
  - -> related_to -> [[cors]]
  - -> related_to -> [[body-decrypt-middleware]]
  - -> related_to -> [[auth-middleware]]
  - -> related_to -> [[optional-auth-middleware]]
  - -> related_to -> [[api-authentication]]
  - -> related_to -> [[api-sessions]]
  - -> related_to -> [[api-storage]]
  - -> related_to -> [[api-transcripts]]
  - -> related_to -> [[db-migration]]
  - -> related_to -> [[google-oauth]]
- **AES-256-GCM Encryption** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **API Authentication** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **API Sessions** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **API Storage** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **API Transcripts** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **Auth Middleware** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **Body Decrypt Middleware** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **CORS** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **DB Migration** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **Google OAuth** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **Hono Framework** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **iwinv S3 Storage** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **Node.js** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **OpenAPI Specification** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **Optional Auth Middleware** (path) -- 1 connections
  - <- related_to <- [[uncounted-api]]
- **Render.com** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **Supabase Database** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **Swagger UI** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **TypeScript** (path) -- 1 connections
  - <- references <- [[uncounted-api]]
- **Vitest Testing** (path) -- 1 connections
  - <- references <- [[uncounted-api]]

## Internal Relationships
- Uncounted API -> references -> Hono Framework [EXTRACTED]
- Uncounted API -> references -> Supabase Database [EXTRACTED]
- Uncounted API -> references -> iwinv S3 Storage [EXTRACTED]
- Uncounted API -> references -> AES-256-GCM Encryption [EXTRACTED]
- Uncounted API -> references -> Node.js [EXTRACTED]
- Uncounted API -> references -> TypeScript [EXTRACTED]
- Uncounted API -> references -> Vitest Testing [EXTRACTED]
- Uncounted API -> references -> Swagger UI [EXTRACTED]
- Uncounted API -> references -> OpenAPI Specification [EXTRACTED]
- Uncounted API -> references -> Render.com [EXTRACTED]
- Uncounted API -> related_to -> CORS [INFERRED]
- Uncounted API -> related_to -> Body Decrypt Middleware [INFERRED]
- Uncounted API -> related_to -> Auth Middleware [INFERRED]
- Uncounted API -> related_to -> Optional Auth Middleware [INFERRED]
- Uncounted API -> related_to -> API Authentication [INFERRED]
- Uncounted API -> related_to -> API Sessions [INFERRED]
- Uncounted API -> related_to -> API Storage [INFERRED]
- Uncounted API -> related_to -> API Transcripts [INFERRED]
- Uncounted API -> related_to -> DB Migration [INFERRED]
- Uncounted API -> related_to -> Google OAuth [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted API, AES-256-GCM Encryption, API Authentication를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
