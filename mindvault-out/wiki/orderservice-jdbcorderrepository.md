# OrderService & JdbcOrderRepository
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **OrderService** (path) -- 4 connections
  - -> uses -> [[orderrepository]]
  - -> handles -> [[order]]
  - -> throws -> [[ordernotfoundexception]]
  - -> uses -> [[pricingutils]]
- **JdbcOrderRepository** (path) -- 3 connections
  - -> handles -> [[order]]
  - -> uses -> [[pgsimpledatasource]]
  - <- related_to <- [[postgresqlcontainer]]
- **Order** (path) -- 2 connections
  - <- handles <- [[orderservice]]
  - <- handles <- [[jdbcorderrepository]]
- **OrderNotFoundException** (path) -- 1 connections
  - <- throws <- [[orderservice]]
- **OrderRepository** (path) -- 1 connections
  - <- uses <- [[orderservice]]
- **PGSimpleDataSource** (path) -- 1 connections
  - <- uses <- [[jdbcorderrepository]]
- **PostgreSQLContainer** (path) -- 1 connections
  - -> related_to -> [[jdbcorderrepository]]
- **PricingUtils** (path) -- 1 connections
  - <- uses <- [[orderservice]]

## Internal Relationships
- JdbcOrderRepository -> handles -> Order [EXTRACTED]
- JdbcOrderRepository -> uses -> PGSimpleDataSource [EXTRACTED]
- OrderService -> uses -> OrderRepository [EXTRACTED]
- OrderService -> handles -> Order [EXTRACTED]
- OrderService -> throws -> OrderNotFoundException [EXTRACTED]
- OrderService -> uses -> PricingUtils [INFERRED]
- PostgreSQLContainer -> related_to -> JdbcOrderRepository [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 OrderService, JdbcOrderRepository, Order를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 path이다.
