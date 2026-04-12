# Security Scan & AgentShield
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **Security Scan** (path) -- 7 connections
  - -> implements -> [[agentshield]]
  - -> applies_to -> [[claude-code]]
  - -> scans -> [[claudemd]]
  - -> scans -> [[settingsjson]]
  - -> scans -> [[mcpjson]]
  - -> scans -> [[hooks]]
  - -> scans -> [[agentsmd]]
- **AgentShield** (https://github.com/affaan-m/agentshield) -- 3 connections
  - -> requires -> [[npm]]
  - -> hosts -> [[github]]
  - <- implements <- [[security-scan]]
- **agents/*.md** (path) -- 1 connections
  - <- scans <- [[security-scan]]
- **Claude Code** (path) -- 1 connections
  - <- applies_to <- [[security-scan]]
- **CLAUDE.md** (path) -- 1 connections
  - <- scans <- [[security-scan]]
- **GitHub** (https://github.com/affaan-m/agentshield) -- 1 connections
  - <- hosts <- [[agentshield]]
- **hooks/** (path) -- 1 connections
  - <- scans <- [[security-scan]]
- **mcp.json** (path) -- 1 connections
  - <- scans <- [[security-scan]]
- **npm** (https://www.npmjs.com/package/ecc-agentshield) -- 1 connections
  - <- requires <- [[agentshield]]
- **settings.json** (path) -- 1 connections
  - <- scans <- [[security-scan]]

## Internal Relationships
- AgentShield -> requires -> npm [EXTRACTED]
- AgentShield -> hosts -> GitHub [EXTRACTED]
- Security Scan -> implements -> AgentShield [EXTRACTED]
- Security Scan -> applies_to -> Claude Code [EXTRACTED]
- Security Scan -> scans -> CLAUDE.md [EXTRACTED]
- Security Scan -> scans -> settings.json [EXTRACTED]
- Security Scan -> scans -> mcp.json [EXTRACTED]
- Security Scan -> scans -> hooks/ [EXTRACTED]
- Security Scan -> scans -> agents/*.md [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Scan, AgentShield, agents/*.md를 중심으로 scans 관계로 연결되어 있다. 주요 소스 파일은 agentshield, ecc-agentshield, path이다.
