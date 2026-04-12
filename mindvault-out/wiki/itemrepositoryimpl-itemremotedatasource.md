# ItemRepositoryImpl & ItemRemoteDataSource
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **ItemRepositoryImpl** (path) -- 3 connections
  - -> uses -> [[itemlocaldatasource]]
  - -> uses -> [[itemremotedatasource]]
  - <- implements <- [[data-layer]]
- **ItemRemoteDataSource** (path) -- 2 connections
  - <- uses <- [[itemrepositoryimpl]]
  - <- provides <- [[ktor-network-client]]
- **Data Layer** (path) -- 1 connections
  - -> implements -> [[itemrepositoryimpl]]
- **ItemLocalDataSource** (path) -- 1 connections
  - <- uses <- [[itemrepositoryimpl]]
- **Ktor Network Client** (path) -- 1 connections
  - -> provides -> [[itemremotedatasource]]

## Internal Relationships
- Data Layer -> implements -> ItemRepositoryImpl [EXTRACTED]
- ItemRepositoryImpl -> uses -> ItemLocalDataSource [EXTRACTED]
- ItemRepositoryImpl -> uses -> ItemRemoteDataSource [EXTRACTED]
- Ktor Network Client -> provides -> ItemRemoteDataSource [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 ItemRepositoryImpl, ItemRemoteDataSource, Data Layer를 중심으로 uses 관계로 연결되어 있다. 주요 소스 파일은 path이다.
