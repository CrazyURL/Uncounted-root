# main & __unresolved__::ref::_ensure_global_dirs
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **main** (.claude/skills/continuous-learning-v2/scripts/instinct-cli.py) -- 15 connections
  - -> calls -> [[unresolvedrefensureglobaldirs]]
  - -> calls -> [[unresolvedrefargumentparser]]
  - -> calls -> [[unresolvedrefaddsubparsers]]
  - -> calls -> [[unresolvedrefaddparser]]
  - -> calls -> [[unresolvedrefaddargument]]
  - -> calls -> [[unresolvedrefparseargs]]
  - -> calls -> [[unresolvedrefcmdstatus]]
  - -> calls -> [[unresolvedrefcmdimport]]
  - -> calls -> [[unresolvedrefcmdexport]]
  - -> calls -> [[unresolvedrefcmdevolve]]
  - -> calls -> [[unresolvedrefcmdpromote]]
  - -> calls -> [[unresolvedrefcmdprojects]]
  - -> calls -> [[unresolvedrefcmdprune]]
  - -> calls -> [[unresolvedrefprinthelp]]
  - <- contains <- [[instinct-cli]]
- **__unresolved__::ref::_ensure_global_dirs** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::add_argument** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::add_parser** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::add_subparsers** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::argumentparser** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::cmd_evolve** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::cmd_export** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::cmd_import** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::cmd_promote** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::cmd_prune** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::parse_args** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::print_help** () -- 1 connections
  - <- calls <- [[main]]

## Internal Relationships
- main -> calls -> __unresolved__::ref::_ensure_global_dirs [EXTRACTED]
- main -> calls -> __unresolved__::ref::argumentparser [EXTRACTED]
- main -> calls -> __unresolved__::ref::add_subparsers [EXTRACTED]
- main -> calls -> __unresolved__::ref::add_parser [EXTRACTED]
- main -> calls -> __unresolved__::ref::add_argument [EXTRACTED]
- main -> calls -> __unresolved__::ref::parse_args [EXTRACTED]
- main -> calls -> __unresolved__::ref::cmd_import [EXTRACTED]
- main -> calls -> __unresolved__::ref::cmd_export [EXTRACTED]
- main -> calls -> __unresolved__::ref::cmd_evolve [EXTRACTED]
- main -> calls -> __unresolved__::ref::cmd_promote [EXTRACTED]
- main -> calls -> __unresolved__::ref::cmd_prune [EXTRACTED]
- main -> calls -> __unresolved__::ref::print_help [EXTRACTED]

## Cross-Community Connections
- main -> calls -> __unresolved__::ref::cmd_status (-> [[unresolvedrefpush-testparseinstinct]])
- main -> calls -> __unresolved__::ref::cmd_projects (-> [[unresolvedrefpush-testparseinstinct]])

## Context
이 커뮤니티는 main, __unresolved__::ref::_ensure_global_dirs, __unresolved__::ref::add_argument를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 instinct-cli.py이다.
