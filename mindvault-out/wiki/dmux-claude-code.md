# dmux & Claude Code
Cohesion: 0.12 | Nodes: 17

## Key Nodes
- **dmux** (path) -- 16 connections
  - -> implements -> [[tmux]]
  - -> related_to -> [[claude-code]]
  - -> related_to -> [[codex]]
  - -> related_to -> [[opencode]]
  - -> related_to -> [[cline]]
  - -> related_to -> [[gemini]]
  - -> related_to -> [[qwen]]
  - -> references -> [[parallel-workflows]]
  - -> references -> [[research-implement]]
  - -> references -> [[multi-file-feature]]
  - -> references -> [[test-fix-loop]]
  - -> references -> [[cross-harness]]
  - -> references -> [[code-review-pipeline]]
  - -> references -> [[git-worktree-integration]]
  - -> references -> [[ecc-helper]]
  - -> references -> [[troubleshooting]]
- **Claude Code** (path) -- 1 connections
  - <- related_to <- [[dmux]]
- **Cline** (path) -- 1 connections
  - <- related_to <- [[dmux]]
- **Code Review Pipeline** (path) -- 1 connections
  - <- references <- [[dmux]]
- **Codex** (path) -- 1 connections
  - <- related_to <- [[dmux]]
- **Cross-Harness** (path) -- 1 connections
  - <- references <- [[dmux]]
- **ECC Helper** (path) -- 1 connections
  - <- references <- [[dmux]]
- **Gemini** (path) -- 1 connections
  - <- related_to <- [[dmux]]
- **Git Worktree Integration** (path) -- 1 connections
  - <- references <- [[dmux]]
- **Multi-File Feature** (path) -- 1 connections
  - <- references <- [[dmux]]
- **OpenCode** (path) -- 1 connections
  - <- related_to <- [[dmux]]
- **Parallel Workflows** (path) -- 1 connections
  - <- references <- [[dmux]]
- **Qwen** (path) -- 1 connections
  - <- related_to <- [[dmux]]
- **Research + Implement** (path) -- 1 connections
  - <- references <- [[dmux]]
- **Test + Fix Loop** (path) -- 1 connections
  - <- references <- [[dmux]]
- **tmux** (path) -- 1 connections
  - <- implements <- [[dmux]]
- **Troubleshooting** (path) -- 1 connections
  - <- references <- [[dmux]]

## Internal Relationships
- dmux -> implements -> tmux [EXTRACTED]
- dmux -> related_to -> Claude Code [INFERRED]
- dmux -> related_to -> Codex [INFERRED]
- dmux -> related_to -> OpenCode [INFERRED]
- dmux -> related_to -> Cline [INFERRED]
- dmux -> related_to -> Gemini [INFERRED]
- dmux -> related_to -> Qwen [INFERRED]
- dmux -> references -> Parallel Workflows [EXTRACTED]
- dmux -> references -> Research + Implement [EXTRACTED]
- dmux -> references -> Multi-File Feature [EXTRACTED]
- dmux -> references -> Test + Fix Loop [EXTRACTED]
- dmux -> references -> Cross-Harness [EXTRACTED]
- dmux -> references -> Code Review Pipeline [EXTRACTED]
- dmux -> references -> Git Worktree Integration [EXTRACTED]
- dmux -> references -> ECC Helper [EXTRACTED]
- dmux -> references -> Troubleshooting [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 dmux, Claude Code, Cline를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
