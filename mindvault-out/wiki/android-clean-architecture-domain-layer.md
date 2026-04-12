# Android Clean Architecture & Domain Layer
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Android Clean Architecture** (path) -- 3 connections
  - -> references -> [[usecase-pattern]]
  - <- related_to <- [[convention-plugins-gradle]]
  - <- avoids <- [[anti-patterns]]
- **Domain Layer** (path) -- 2 connections
  - -> includes -> [[repository-interface]]
  - <- implements <- [[usecase-pattern]]
- **UseCase Pattern** (path) -- 2 connections
  - -> implements -> [[domain-layer]]
  - <- references <- [[android-clean-architecture]]
- **Anti-Patterns** (path) -- 1 connections
  - -> avoids -> [[android-clean-architecture]]
- **Convention Plugins (Gradle)** (path) -- 1 connections
  - -> related_to -> [[android-clean-architecture]]
- **Repository Interface** (path) -- 1 connections
  - <- includes <- [[domain-layer]]

## Internal Relationships
- Android Clean Architecture -> references -> UseCase Pattern [EXTRACTED]
- Anti-Patterns -> avoids -> Android Clean Architecture [EXTRACTED]
- Convention Plugins (Gradle) -> related_to -> Android Clean Architecture [INFERRED]
- Domain Layer -> includes -> Repository Interface [EXTRACTED]
- UseCase Pattern -> implements -> Domain Layer [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Android Clean Architecture, Domain Layer, UseCase Pattern를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
