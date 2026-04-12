# authMiddleware & 암호화 패턴
Cohesion: 0.40 | Nodes: 6

## Key Nodes
- **authMiddleware** (src/lib/auth) -- 4 connections
  - -> related_to -> [[signout]]
  - <- implements <- [[]]
  - <- related_to <- [[]]
  - <- related_to <- [[bodydecryptmiddleware]]
- **암호화 패턴** (src/lib/encryption) -- 2 connections
  - <- implements <- [[bodydecryptmiddleware]]
  - <- implements <- [[]]
- **민감 필드 암호화** (src/lib/encryption) -- 2 connections
  - -> related_to -> [[authmiddleware]]
  - -> implements -> [[]]
- **bodyDecryptMiddleware** (src/lib/middleware) -- 2 connections
  - -> implements -> [[]]
  - -> related_to -> [[authmiddleware]]
- **세션 관리** (src/lib/session) -- 1 connections
  - -> implements -> [[authmiddleware]]
- **Signout** (src/lib/auth) -- 1 connections
  - <- related_to <- [[authmiddleware]]

## Internal Relationships
- 세션 관리 -> implements -> authMiddleware [EXTRACTED]
- 민감 필드 암호화 -> related_to -> authMiddleware [EXTRACTED]
- 민감 필드 암호화 -> implements -> 암호화 패턴 [EXTRACTED]
- authMiddleware -> related_to -> Signout [EXTRACTED]
- bodyDecryptMiddleware -> implements -> 암호화 패턴 [EXTRACTED]
- bodyDecryptMiddleware -> related_to -> authMiddleware [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 authMiddleware, 암호화 패턴, 민감 필드 암호화를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 auth, encryption, middleware, session이다.
