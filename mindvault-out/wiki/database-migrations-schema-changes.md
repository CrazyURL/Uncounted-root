# Database Migrations & Schema Changes
Cohesion: 0.12 | Nodes: 17

## Key Nodes
- **Database Migrations** (path) -- 11 connections
  - -> related_to -> [[schema-changes]]
  - -> related_to -> [[data-migrations]]
  - -> related_to -> [[rollback-plan]]
  - -> references -> [[postgresql]]
  - -> references -> [[prisma]]
  - -> references -> [[drizzle]]
  - -> references -> [[kysely]]
  - -> references -> [[django]]
  - -> references -> [[golang-migrate]]
  - -> related_to -> [[zero-downtime-migration-strategy]]
  - -> related_to -> [[anti-patterns]]
- **Schema Changes** (path) -- 5 connections
  - -> implements -> [[adding-a-column]]
  - -> implements -> [[creating-an-index]]
  - -> implements -> [[renaming-a-column]]
  - -> implements -> [[removing-a-column]]
  - <- related_to <- [[database-migrations]]
- **Data Migrations** (path) -- 2 connections
  - -> related_to -> [[large-data-migrations]]
  - <- related_to <- [[database-migrations]]
- **Adding a Column** (path) -- 1 connections
  - <- implements <- [[schema-changes]]
- **Anti-Patterns** (path) -- 1 connections
  - <- related_to <- [[database-migrations]]
- **Creating an Index** (path) -- 1 connections
  - <- implements <- [[schema-changes]]
- **Django** (path) -- 1 connections
  - <- references <- [[database-migrations]]
- **Drizzle** (path) -- 1 connections
  - <- references <- [[database-migrations]]
- **Golang Migrate** (path) -- 1 connections
  - <- references <- [[database-migrations]]
- **Kysely** (path) -- 1 connections
  - <- references <- [[database-migrations]]
- **Large Data Migrations** (path) -- 1 connections
  - <- related_to <- [[data-migrations]]
- **PostgreSQL** (path) -- 1 connections
  - <- references <- [[database-migrations]]
- **Prisma** (path) -- 1 connections
  - <- references <- [[database-migrations]]
- **Removing a Column** (path) -- 1 connections
  - <- implements <- [[schema-changes]]
- **Renaming a Column** (path) -- 1 connections
  - <- implements <- [[schema-changes]]
- **Rollback Plan** (path) -- 1 connections
  - <- related_to <- [[database-migrations]]
- **Zero-Downtime Migration Strategy** (path) -- 1 connections
  - <- related_to <- [[database-migrations]]

## Internal Relationships
- Data Migrations -> related_to -> Large Data Migrations [INFERRED]
- Database Migrations -> related_to -> Schema Changes [EXTRACTED]
- Database Migrations -> related_to -> Data Migrations [EXTRACTED]
- Database Migrations -> related_to -> Rollback Plan [EXTRACTED]
- Database Migrations -> references -> PostgreSQL [EXTRACTED]
- Database Migrations -> references -> Prisma [EXTRACTED]
- Database Migrations -> references -> Drizzle [EXTRACTED]
- Database Migrations -> references -> Kysely [EXTRACTED]
- Database Migrations -> references -> Django [EXTRACTED]
- Database Migrations -> references -> Golang Migrate [EXTRACTED]
- Database Migrations -> related_to -> Zero-Downtime Migration Strategy [EXTRACTED]
- Database Migrations -> related_to -> Anti-Patterns [EXTRACTED]
- Schema Changes -> implements -> Adding a Column [EXTRACTED]
- Schema Changes -> implements -> Creating an Index [EXTRACTED]
- Schema Changes -> implements -> Renaming a Column [EXTRACTED]
- Schema Changes -> implements -> Removing a Column [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Database Migrations, Schema Changes, Data Migrations를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
