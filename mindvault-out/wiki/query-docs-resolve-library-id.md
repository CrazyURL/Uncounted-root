# query-docs & resolve-library-id
Cohesion: 0.53 | Nodes: 6

## Key Nodes
- **query-docs** (documentation-lookup) -- 4 connections
  - -> references -> [[nextjs]]
  - -> references -> [[prisma]]
  - -> references -> [[supabase]]
  - <- references <- [[context7]]
- **resolve-library-id** (documentation-lookup) -- 4 connections
  - -> related_to -> [[nextjs]]
  - -> related_to -> [[prisma]]
  - -> related_to -> [[supabase]]
  - <- references <- [[context7]]
- **Context7** (documentation-lookup) -- 2 connections
  - -> references -> [[resolve-library-id]]
  - -> references -> [[query-docs]]
- **Next.js** (documentation-lookup) -- 2 connections
  - <- related_to <- [[resolve-library-id]]
  - <- references <- [[query-docs]]
- **Prisma** (documentation-lookup) -- 2 connections
  - <- related_to <- [[resolve-library-id]]
  - <- references <- [[query-docs]]
- **Supabase** (documentation-lookup) -- 2 connections
  - <- related_to <- [[resolve-library-id]]
  - <- references <- [[query-docs]]

## Internal Relationships
- Context7 -> references -> resolve-library-id [EXTRACTED]
- Context7 -> references -> query-docs [EXTRACTED]
- query-docs -> references -> Next.js [INFERRED]
- query-docs -> references -> Prisma [INFERRED]
- query-docs -> references -> Supabase [INFERRED]
- resolve-library-id -> related_to -> Next.js [EXTRACTED]
- resolve-library-id -> related_to -> Prisma [EXTRACTED]
- resolve-library-id -> related_to -> Supabase [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 query-docs, resolve-library-id, Context7를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 documentation-lookup이다.
