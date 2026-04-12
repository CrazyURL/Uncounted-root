# AES-256-GCM & Request
Cohesion: 1.00 | Nodes: 3

## Key Nodes
- **AES-256-GCM** (document) -- 2 connections
  - -> applies_to -> [[request]]
  - -> applies_to -> [[response]]
- **Request** (document) -- 2 connections
  - -> transforms -> [[response]]
  - <- applies_to <- [[aes-256-gcm]]
- **Response** (document) -- 2 connections
  - <- applies_to <- [[aes-256-gcm]]
  - <- transforms <- [[request]]

## Internal Relationships
- AES-256-GCM -> applies_to -> Request [EXTRACTED]
- AES-256-GCM -> applies_to -> Response [EXTRACTED]
- Request -> transforms -> Response [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 AES-256-GCM, Request, Response를 중심으로 applies_to 관계로 연결되어 있다. 주요 소스 파일은 document이다.
