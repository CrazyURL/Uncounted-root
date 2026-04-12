# multi_linter.sh & Auto Format Phase
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **multi_linter.sh** (path) -- 4 connections
  - -> includes -> [[auto-format-phase]]
  - -> includes -> [[collect-violations-phase]]
  - -> includes -> [[delegate-verify-phase]]
  - <- references <- [[posttooluse-hook]]
- **Auto Format Phase** (path) -- 1 connections
  - <- includes <- [[multilintersh]]
- **Collect Violations Phase** (path) -- 1 connections
  - <- includes <- [[multilintersh]]
- **Delegate + Verify Phase** (path) -- 1 connections
  - <- includes <- [[multilintersh]]
- **PostToolUse Hook** (path) -- 1 connections
  - -> references -> [[multilintersh]]

## Internal Relationships
- multi_linter.sh -> includes -> Auto Format Phase [EXTRACTED]
- multi_linter.sh -> includes -> Collect Violations Phase [EXTRACTED]
- multi_linter.sh -> includes -> Delegate + Verify Phase [EXTRACTED]
- PostToolUse Hook -> references -> multi_linter.sh [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 multi_linter.sh, Auto Format Phase, Collect Violations Phase를 중심으로 includes 관계로 연결되어 있다. 주요 소스 파일은 path이다.
