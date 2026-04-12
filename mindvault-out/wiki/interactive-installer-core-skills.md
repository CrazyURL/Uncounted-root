# Interactive Installer & Core Skills
Cohesion: 0.17 | Nodes: 13

## Key Nodes
- **Interactive Installer** (path) -- 6 connections
  - -> uses -> [[askuserquestion]]
  - -> processes -> [[post-installation-verification]]
  - -> processes -> [[optimize-installed-files]]
  - -> references -> [[common-rules]]
  - -> references -> [[language-specific-rules]]
  - <- implements <- [[configure-everything-claude-code]]
- **Core Skills** (path) -- 5 connections
  - -> includes -> [[unresolvedrefunresolvedrefunresolvedrefdjangopatterns]]
  - -> includes -> [[laravel-patterns]]
  - -> includes -> [[spring-boot-patterns]]
  - -> includes -> [[python-patterns]]
  - <- selects <- [[askuserquestion]]
- **Common Rules** (path) -- 2 connections
  - <- references <- [[interactive-installer]]
  - <- contributes_to <- [[installation-target]]
- **AskUserQuestion** (path) -- 2 connections
  - -> selects -> [[core-skills]]
  - <- uses <- [[interactive-installer]]
- **Optimize Installed Files** (path) -- 2 connections
  - <- processes <- [[interactive-installer]]
  - <- prerequisite <- [[post-installation-verification]]
- **Post-Installation Verification** (path) -- 2 connections
  - -> prerequisite -> [[optimize-installed-files]]
  - <- processes <- [[interactive-installer]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__django_patterns** () -- 1 connections
  - <- includes <- [[core-skills]]
- **Configure Everything Claude Code** (path) -- 1 connections
  - -> implements -> [[interactive-installer]]
- **Language-Specific Rules** (path) -- 1 connections
  - <- references <- [[interactive-installer]]
- **Installation Target** (path) -- 1 connections
  - -> contributes_to -> [[common-rules]]
- **Laravel Patterns** (path) -- 1 connections
  - <- includes <- [[core-skills]]
- **Python Patterns** (path) -- 1 connections
  - <- includes <- [[core-skills]]
- **Spring Boot Patterns** (path) -- 1 connections
  - <- includes <- [[core-skills]]

## Internal Relationships
- Configure Everything Claude Code -> implements -> Interactive Installer [EXTRACTED]
- Interactive Installer -> uses -> AskUserQuestion [EXTRACTED]
- Interactive Installer -> processes -> Post-Installation Verification [EXTRACTED]
- Interactive Installer -> processes -> Optimize Installed Files [EXTRACTED]
- Interactive Installer -> references -> Common Rules [EXTRACTED]
- Interactive Installer -> references -> Language-Specific Rules [EXTRACTED]
- AskUserQuestion -> selects -> Core Skills [EXTRACTED]
- Core Skills -> includes -> __unresolved__::ref::__unresolved____ref____unresolved____ref__django_patterns [EXTRACTED]
- Core Skills -> includes -> Laravel Patterns [EXTRACTED]
- Core Skills -> includes -> Spring Boot Patterns [EXTRACTED]
- Core Skills -> includes -> Python Patterns [EXTRACTED]
- Installation Target -> contributes_to -> Common Rules [EXTRACTED]
- Post-Installation Verification -> prerequisite -> Optimize Installed Files [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Interactive Installer, Core Skills, Common Rules를 중심으로 includes 관계로 연결되어 있다. 주요 소스 파일은 path이다.
