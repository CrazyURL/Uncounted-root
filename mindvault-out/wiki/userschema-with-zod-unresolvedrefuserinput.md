# userSchema with Zod & __unresolved__::ref::userinput
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **userSchema with Zod** (path) -- 2 connections
  - -> infers -> [[unresolvedrefuserinput]]
  - <- validates <- [[validated-variable]]
- **__unresolved__::ref::userinput** () -- 1 connections
  - <- infers <- [[userschema-with-zod]]
- **validated Variable** (path) -- 1 connections
  - -> validates -> [[userschema-with-zod]]

## Internal Relationships
- userSchema with Zod -> infers -> __unresolved__::ref::userinput [EXTRACTED]
- validated Variable -> validates -> userSchema with Zod [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 userSchema with Zod, __unresolved__::ref::userinput, validated Variable를 중심으로 infers 관계로 연결되어 있다. 주요 소스 파일은 path이다.
