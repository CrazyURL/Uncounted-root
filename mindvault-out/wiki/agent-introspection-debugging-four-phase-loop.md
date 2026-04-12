# Agent Introspection Debugging & Four-Phase Loop
Cohesion: 0.18 | Nodes: 13

## Key Nodes
- **Agent Introspection Debugging** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 7 connections
  - -> contains -> [[when-to-activate]]
  - -> contains -> [[scope-boundaries]]
  - -> contains -> [[four-phase-loop]]
  - -> contains -> [[recovery-heuristics]]
  - -> contains -> [[integration-with-ecc]]
  - -> contains -> [[output-standard]]
  - <- contains <- [[skill]]
- **Four-Phase Loop** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 5 connections
  - -> contains -> [[phase-1-failure-capture]]
  - -> contains -> [[phase-2-root-cause-diagnosis]]
  - -> contains -> [[phase-3-contained-recovery]]
  - -> contains -> [[phase-4-introspection-report]]
  - <- contains <- [[agent-introspection-debugging]]
- **markdown** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 3 connections
  - <- has_code_example <- [[phase-1-failure-capture]]
  - <- has_code_example <- [[phase-3-contained-recovery]]
  - <- has_code_example <- [[phase-4-introspection-report]]
- **Phase 1: Failure Capture** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[four-phase-loop]]
- **Phase 3: Contained Recovery** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[four-phase-loop]]
- **Phase 4: Introspection Report** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[four-phase-loop]]
- **SKILL** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 1 connections
  - -> contains -> [[agent-introspection-debugging]]
- **Integration with ECC** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 1 connections
  - <- contains <- [[agent-introspection-debugging]]
- **Output Standard** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 1 connections
  - <- contains <- [[agent-introspection-debugging]]
- **Phase 2: Root-Cause Diagnosis** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 1 connections
  - <- contains <- [[four-phase-loop]]
- **Recovery Heuristics** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 1 connections
  - <- contains <- [[agent-introspection-debugging]]
- **Scope Boundaries** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 1 connections
  - <- contains <- [[agent-introspection-debugging]]
- **When to Activate** (.claude/skills/agent-introspection-debugging/SKILL.md) -- 1 connections
  - <- contains <- [[agent-introspection-debugging]]

## Internal Relationships
- SKILL -> contains -> Agent Introspection Debugging [EXTRACTED]
- Agent Introspection Debugging -> contains -> When to Activate [EXTRACTED]
- Agent Introspection Debugging -> contains -> Scope Boundaries [EXTRACTED]
- Agent Introspection Debugging -> contains -> Four-Phase Loop [EXTRACTED]
- Agent Introspection Debugging -> contains -> Recovery Heuristics [EXTRACTED]
- Agent Introspection Debugging -> contains -> Integration with ECC [EXTRACTED]
- Agent Introspection Debugging -> contains -> Output Standard [EXTRACTED]
- Four-Phase Loop -> contains -> Phase 1: Failure Capture [EXTRACTED]
- Four-Phase Loop -> contains -> Phase 2: Root-Cause Diagnosis [EXTRACTED]
- Four-Phase Loop -> contains -> Phase 3: Contained Recovery [EXTRACTED]
- Four-Phase Loop -> contains -> Phase 4: Introspection Report [EXTRACTED]
- Phase 1: Failure Capture -> has_code_example -> markdown [EXTRACTED]
- Phase 3: Contained Recovery -> has_code_example -> markdown [EXTRACTED]
- Phase 4: Introspection Report -> has_code_example -> markdown [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent Introspection Debugging, Four-Phase Loop, markdown를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
