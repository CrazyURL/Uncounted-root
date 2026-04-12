# Checkstyle & Google Java Format
Cohesion: 0.60 | Nodes: 5

## Key Nodes
- **Checkstyle** (settings.json) -- 3 connections
  - -> references -> [[gradle-wrapper-compile-java]]
  - <- related_to <- [[google-java-format]]
  - <- references <- [[common-hooks-document]]
- **Google Java Format** (settings.json) -- 3 connections
  - -> related_to -> [[maven-wrapper-compile]]
  - -> related_to -> [[checkstyle]]
  - <- references <- [[common-hooks-document]]
- **Common Hooks Document** (../common/hooks.md) -- 2 connections
  - -> references -> [[google-java-format]]
  - -> references -> [[checkstyle]]
- **Gradle Wrapper Compile Java** (settings.json) -- 2 connections
  - <- references <- [[checkstyle]]
  - <- implements <- [[maven-wrapper-compile]]
- **Maven Wrapper Compile** (settings.json) -- 2 connections
  - -> implements -> [[gradle-wrapper-compile-java]]
  - <- related_to <- [[google-java-format]]

## Internal Relationships
- Checkstyle -> references -> Gradle Wrapper Compile Java [EXTRACTED]
- Common Hooks Document -> references -> Google Java Format [EXTRACTED]
- Common Hooks Document -> references -> Checkstyle [EXTRACTED]
- Google Java Format -> related_to -> Maven Wrapper Compile [EXTRACTED]
- Google Java Format -> related_to -> Checkstyle [EXTRACTED]
- Maven Wrapper Compile -> implements -> Gradle Wrapper Compile Java [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Checkstyle, Google Java Format, Common Hooks Document를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 hooks.md, settings.json이다.
