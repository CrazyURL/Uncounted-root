# File Scan & Quality Analysis & Security Audit
Cohesion: 0.43 | Nodes: 7

## Key Nodes
- **File Scan & Quality Analysis** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/a2-spec.md) -- 6 connections
  - -> references -> [[unresolvedreforchestrateconsult20260327210056scanenginetsentityscanenginets]]
  - -> references -> [[unresolvedreforchestrateconsult20260327210056audioanalyzertsentityaudioanalyzerts]]
  - -> references -> [[unresolvedreforchestrateconsult20260327210056wavencodertsentitywavencoderts]]
  - -> related_to -> [[topictxt]]
  - -> implements -> [[security-audit]]
  - -> implements -> [[code-review]]
- **Security Audit** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/a2-spec.md) -- 4 connections
  - <- implements <- [[file-scan-quality-analysis]]
  - <- supports <- [[unresolvedreforchestrateconsult20260327210056scanenginetsentityscanenginets]]
  - <- supports <- [[unresolvedreforchestrateconsult20260327210056audioanalyzertsentityaudioanalyzerts]]
  - <- supports <- [[unresolvedreforchestrateconsult20260327210056wavencodertsentitywavencoderts]]
- **__unresolved__::ref::_orchestrate_consult__20260327_210056__audioanalyzer_ts__entity__audioanalyzer_ts** () -- 2 connections
  - -> supports -> [[security-audit]]
  - <- references <- [[file-scan-quality-analysis]]
- **__unresolved__::ref::_orchestrate_consult__20260327_210056__scanengine_ts__entity__scanengine_ts** () -- 2 connections
  - -> supports -> [[security-audit]]
  - <- references <- [[file-scan-quality-analysis]]
- **__unresolved__::ref::_orchestrate_consult__20260327_210056__wavencoder_ts__entity__wavencoder_ts** () -- 2 connections
  - -> supports -> [[security-audit]]
  - <- references <- [[file-scan-quality-analysis]]
- **Code Review** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/a2-spec.md) -- 1 connections
  - <- implements <- [[file-scan-quality-analysis]]
- **topic.txt** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260327-210056/topic.txt) -- 1 connections
  - <- related_to <- [[file-scan-quality-analysis]]

## Internal Relationships
- __unresolved__::ref::_orchestrate_consult__20260327_210056__audioanalyzer_ts__entity__audioanalyzer_ts -> supports -> Security Audit [INFERRED]
- __unresolved__::ref::_orchestrate_consult__20260327_210056__scanengine_ts__entity__scanengine_ts -> supports -> Security Audit [INFERRED]
- __unresolved__::ref::_orchestrate_consult__20260327_210056__wavencoder_ts__entity__wavencoder_ts -> supports -> Security Audit [INFERRED]
- File Scan & Quality Analysis -> references -> __unresolved__::ref::_orchestrate_consult__20260327_210056__scanengine_ts__entity__scanengine_ts [EXTRACTED]
- File Scan & Quality Analysis -> references -> __unresolved__::ref::_orchestrate_consult__20260327_210056__audioanalyzer_ts__entity__audioanalyzer_ts [EXTRACTED]
- File Scan & Quality Analysis -> references -> __unresolved__::ref::_orchestrate_consult__20260327_210056__wavencoder_ts__entity__wavencoder_ts [EXTRACTED]
- File Scan & Quality Analysis -> related_to -> topic.txt [EXTRACTED]
- File Scan & Quality Analysis -> implements -> Security Audit [EXTRACTED]
- File Scan & Quality Analysis -> implements -> Code Review [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 File Scan & Quality Analysis, Security Audit, __unresolved__::ref::_orchestrate_consult__20260327_210056__audioanalyzer_ts__entity__audioanalyzer_ts를 중심으로 supports 관계로 연결되어 있다. 주요 소스 파일은 a2-spec.md, topic.txt이다.
