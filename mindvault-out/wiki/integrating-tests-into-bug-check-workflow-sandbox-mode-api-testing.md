# Integrating Tests into Bug-Check Workflow & Sandbox-Mode API Testing
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Integrating Tests into Bug-Check Workflow** (path) -- 6 connections
  - -> references -> [[claude-code]]
  - -> references -> [[cursor]]
  - -> references -> [[codex]]
  - -> related_to -> [[notification-settings]]
  - -> related_to -> [[test-strategy]]
  - <- related_to <- [[ai-regression-testing]]
- **Sandbox-Mode API Testing** (path) -- 5 connections
  - -> related_to -> [[sandboxproduction-path-mismatch]]
  - -> related_to -> [[select-clause-omission]]
  - -> related_to -> [[error-state-leakage]]
  - -> related_to -> [[optimistic-update-without-proper-rollback]]
  - <- related_to <- [[ai-regression-testing]]
- **AI Regression Testing** (path) -- 2 connections
  - -> related_to -> [[sandbox-mode-api-testing]]
  - -> related_to -> [[integrating-tests-into-bug-check-workflow]]
- **Claude Code** (path) -- 1 connections
  - <- references <- [[integrating-tests-into-bug-check-workflow]]
- **Codex** (path) -- 1 connections
  - <- references <- [[integrating-tests-into-bug-check-workflow]]
- **Cursor** (path) -- 1 connections
  - <- references <- [[integrating-tests-into-bug-check-workflow]]
- **Error State Leakage** (path) -- 1 connections
  - <- related_to <- [[sandbox-mode-api-testing]]
- **Notification Settings** (path) -- 1 connections
  - <- related_to <- [[integrating-tests-into-bug-check-workflow]]
- **Optimistic Update Without Proper Rollback** (path) -- 1 connections
  - <- related_to <- [[sandbox-mode-api-testing]]
- **Sandbox/Production Path Mismatch** (path) -- 1 connections
  - <- related_to <- [[sandbox-mode-api-testing]]
- **SELECT Clause Omission** (path) -- 1 connections
  - <- related_to <- [[sandbox-mode-api-testing]]
- **Test Strategy** (path) -- 1 connections
  - <- related_to <- [[integrating-tests-into-bug-check-workflow]]

## Internal Relationships
- AI Regression Testing -> related_to -> Sandbox-Mode API Testing [EXTRACTED]
- AI Regression Testing -> related_to -> Integrating Tests into Bug-Check Workflow [EXTRACTED]
- Integrating Tests into Bug-Check Workflow -> references -> Claude Code [EXTRACTED]
- Integrating Tests into Bug-Check Workflow -> references -> Cursor [EXTRACTED]
- Integrating Tests into Bug-Check Workflow -> references -> Codex [EXTRACTED]
- Integrating Tests into Bug-Check Workflow -> related_to -> Notification Settings [EXTRACTED]
- Integrating Tests into Bug-Check Workflow -> related_to -> Test Strategy [EXTRACTED]
- Sandbox-Mode API Testing -> related_to -> Sandbox/Production Path Mismatch [EXTRACTED]
- Sandbox-Mode API Testing -> related_to -> SELECT Clause Omission [EXTRACTED]
- Sandbox-Mode API Testing -> related_to -> Error State Leakage [EXTRACTED]
- Sandbox-Mode API Testing -> related_to -> Optimistic Update Without Proper Rollback [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Integrating Tests into Bug-Check Workflow, Sandbox-Mode API Testing, AI Regression Testing를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
