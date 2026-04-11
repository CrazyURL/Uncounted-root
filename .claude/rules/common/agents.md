# Agent Orchestration

## Available Agents

Located in `~/.claude/agents/`:

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| planner | Implementation planning | Complex features, refactoring |
| architect | System design | Architectural decisions |
| tdd-guide | Test-driven development | New features, bug fixes |
| code-reviewer | Code review | After writing code |
| security-reviewer | Security analysis | Before commits |
| build-error-resolver | Fix build errors | When build fails |
| e2e-runner | E2E testing | Critical user flows |
| refactor-cleaner | Dead code cleanup | Code maintenance |
| doc-updater | Documentation | Updating docs |
| rust-reviewer | Rust code review | Rust projects |

## Immediate Agent Usage

No user prompt needed:
1. Complex feature requests - Use **planner** agent
2. Code just written/modified - Use **code-reviewer** agent
3. Bug fix or new feature - Use **tdd-guide** agent
4. Architectural decision - Use **architect** agent

## Parallel Task Execution

ALWAYS use parallel Task execution for independent operations:

```markdown
# GOOD: Parallel execution
Launch 3 agents in parallel:
1. Agent 1: Security analysis of auth module
2. Agent 2: Performance review of cache system
3. Agent 3: Type checking of utilities

# BAD: Sequential when unnecessary
First agent 1, then agent 2, then agent 3
```

## Multi-Perspective Analysis

For complex problems, use split role sub-agents:
- Factual reviewer
- Senior engineer
- Security expert
- Consistency reviewer
- Redundancy checker

## Project Agent Ownership

| Agent | Directory | Role |
|-------|-----------|------|
| backend-expert | `uncounted-api/` | API routes, DB queries, migrations |
| voice-api-expert | `uncounted-voice-api/` | Python FastAPI, WhisperX STT, PII masking |
| app-expert | `uncounted-app/` | React UI, Capacitor, Android Java |
| admin-expert | `uncounted-admin/` | Admin web UI |
| architect-lead | All (read-only) | Planning, cross-project coordination |

## Cross-Project Rules

- API endpoint add/change → also update App and Admin API clients
- Voice API endpoint/파라미터 변경 → App의 voiceApi.ts + Android VoiceApiClient.java 동기화
- DB schema change → API migration + `uncounted-docs/` doc update
- Encryption key/logic change → sync API, App (JS+Java), Admin (all 3) — Voice API는 암호화 미적용
- Type change → verify `src/types/` consistency across projects
