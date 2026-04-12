# PostToolUse Hooks & ~/.claude/settings.json
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **PostToolUse Hooks** (path) -- 6 connections
  - -> configures -> [[black]]
  - -> configures -> [[ruff]]
  - -> configures -> [[mypy]]
  - -> configures -> [[pyright]]
  - -> configured_in -> [[claudesettingsjson]]
  - <- extends <- [[python-hooks]]
- **~/.claude/settings.json** (path) -- 1 connections
  - <- configured_in <- [[posttooluse-hooks]]
- **black** (path) -- 1 connections
  - <- configures <- [[posttooluse-hooks]]
- **mypy** (path) -- 1 connections
  - <- configures <- [[posttooluse-hooks]]
- **pyright** (path) -- 1 connections
  - <- configures <- [[posttooluse-hooks]]
- **Python Hooks** (path) -- 1 connections
  - -> extends -> [[posttooluse-hooks]]
- **ruff** (path) -- 1 connections
  - <- configures <- [[posttooluse-hooks]]

## Internal Relationships
- PostToolUse Hooks -> configures -> black [EXTRACTED]
- PostToolUse Hooks -> configures -> ruff [EXTRACTED]
- PostToolUse Hooks -> configures -> mypy [EXTRACTED]
- PostToolUse Hooks -> configures -> pyright [EXTRACTED]
- PostToolUse Hooks -> configured_in -> ~/.claude/settings.json [EXTRACTED]
- Python Hooks -> extends -> PostToolUse Hooks [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 PostToolUse Hooks, ~/.claude/settings.json, black를 중심으로 configures 관계로 연결되어 있다. 주요 소스 파일은 path이다.
