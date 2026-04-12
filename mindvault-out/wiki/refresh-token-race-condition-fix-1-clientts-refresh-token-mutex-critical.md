# Refresh Token Race Condition 버그픽스 & Fix 1: client.ts — Refresh Token Mutex (CRITICAL)
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Refresh Token Race Condition 버그픽스** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 3 connections
  - -> contains -> [[fix-1-clientts-refresh-token-mutex-critical]]
  - -> contains -> [[fix-2-clientts-refresh]]
  - -> contains -> [[fix-3-metadatauploadsyncinit]]
- **Fix 1: client.ts — Refresh Token Mutex (CRITICAL)** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[refresh-token-race-condition]]
- **typescript** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - <- has_code_example <- [[fix-1-clientts-refresh-token-mutex-critical]]
- **Fix 2: client.ts — refresh 실패 시 분기 처리** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - <- contains <- [[refresh-token-race-condition]]
- **Fix 3 (선택): MetadataUploadSyncInit — 동시성 제어** (.orchestrate-consult/20260331-081045/prompt_plan.md) -- 1 connections
  - <- contains <- [[refresh-token-race-condition]]

## Internal Relationships
- Fix 1: client.ts — Refresh Token Mutex (CRITICAL) -> has_code_example -> typescript [EXTRACTED]
- Refresh Token Race Condition 버그픽스 -> contains -> Fix 1: client.ts — Refresh Token Mutex (CRITICAL) [EXTRACTED]
- Refresh Token Race Condition 버그픽스 -> contains -> Fix 2: client.ts — refresh 실패 시 분기 처리 [EXTRACTED]
- Refresh Token Race Condition 버그픽스 -> contains -> Fix 3 (선택): MetadataUploadSyncInit — 동시성 제어 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Refresh Token Race Condition 버그픽스, Fix 1: client.ts — Refresh Token Mutex (CRITICAL), typescript를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
