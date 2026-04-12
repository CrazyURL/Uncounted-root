# main & __unresolved__::ref::__unresolved____ref___ensure_global_dirs
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **main** (.claude/skills/continuous-learning-v2/scripts/instinct-cli.py) -- 15 connections
  - -> calls -> [[unresolvedrefunresolvedrefensureglobaldirs]]
  - -> calls -> [[unresolvedrefunresolvedrefargumentparser]]
  - -> calls -> [[unresolvedrefunresolvedrefaddsubparsers]]
  - -> calls -> [[unresolvedrefunresolvedrefaddparser]]
  - -> calls -> [[unresolvedrefunresolvedrefaddargument]]
  - -> calls -> [[unresolvedrefunresolvedrefparseargs]]
  - -> calls -> [[unresolvedrefunresolvedrefcmdstatus]]
  - -> calls -> [[unresolvedrefunresolvedrefcmdimport]]
  - -> calls -> [[unresolvedrefunresolvedrefcmdexport]]
  - -> calls -> [[unresolvedrefunresolvedrefcmdevolve]]
  - -> calls -> [[unresolvedrefunresolvedrefcmdpromote]]
  - -> calls -> [[unresolvedrefunresolvedrefcmdprojects]]
  - -> calls -> [[unresolvedrefunresolvedrefcmdprune]]
  - -> calls -> [[unresolvedrefunresolvedrefprinthelp]]
  - <- contains <- [[instinct-cli]]
- **__unresolved__::ref::__unresolved____ref___ensure_global_dirs** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__add_argument** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__add_parser** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__add_subparsers** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__argumentparser** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__cmd_evolve** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__cmd_export** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__cmd_import** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__cmd_promote** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__cmd_prune** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__parse_args** () -- 1 connections
  - <- calls <- [[main]]
- **__unresolved__::ref::__unresolved____ref__print_help** () -- 1 connections
  - <- calls <- [[main]]

## Internal Relationships
- main -> calls -> __unresolved__::ref::__unresolved____ref___ensure_global_dirs [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__argumentparser [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__add_subparsers [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__add_parser [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__add_argument [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__parse_args [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__cmd_import [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__cmd_export [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__cmd_evolve [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__cmd_promote [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__cmd_prune [EXTRACTED]
- main -> calls -> __unresolved__::ref::__unresolved____ref__print_help [EXTRACTED]

## Cross-Community Connections
- main -> calls -> __unresolved__::ref::__unresolved____ref__cmd_status (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- main -> calls -> __unresolved__::ref::__unresolved____ref__cmd_projects (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])

## Context
이 커뮤니티는 main, __unresolved__::ref::__unresolved____ref___ensure_global_dirs, __unresolved__::ref::__unresolved____ref__add_argument를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 instinct-cli.py이다.
