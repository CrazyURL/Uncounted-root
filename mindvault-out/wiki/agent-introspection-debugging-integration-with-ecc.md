# Agent Introspection Debugging & Integration with ECC
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Agent Introspection Debugging** (path) -- 5 connections
  - -> implements -> [[phase-1-failure-capture]]
  - -> implements -> [[phase-2-root-cause-diagnosis]]
  - -> implements -> [[phase-3-contained-recovery]]
  - -> implements -> [[phase-4-introspection-report]]
  - -> related_to -> [[integration-with-ecc]]
- **Integration with ECC** (path) -- 5 connections
  - -> references -> [[verification-loop]]
  - -> references -> [[continuous-learning-v2]]
  - -> references -> [[council]]
  - -> references -> [[workspace-surface-audit]]
  - <- related_to <- [[agent-introspection-debugging]]
- **Phase 2: Root-Cause Diagnosis** (path) -- 2 connections
  - -> references -> [[common-agent-failure-patterns]]
  - <- implements <- [[agent-introspection-debugging]]
- **Phase 3: Contained Recovery** (path) -- 2 connections
  - -> produces -> [[agent-self-debug-report]]
  - <- implements <- [[agent-introspection-debugging]]
- **Agent Self-Debug Report** (path) -- 1 connections
  - <- produces <- [[phase-3-contained-recovery]]
- **Common Agent Failure Patterns** (path) -- 1 connections
  - <- references <- [[phase-2-root-cause-diagnosis]]
- **continuous-learning-v2** (path) -- 1 connections
  - <- references <- [[integration-with-ecc]]
- **council** (path) -- 1 connections
  - <- references <- [[integration-with-ecc]]
- **Phase 1: Failure Capture** (path) -- 1 connections
  - <- implements <- [[agent-introspection-debugging]]
- **Phase 4: Introspection Report** (path) -- 1 connections
  - <- implements <- [[agent-introspection-debugging]]
- **verification-loop** (path) -- 1 connections
  - <- references <- [[integration-with-ecc]]
- **workspace-surface-audit** (path) -- 1 connections
  - <- references <- [[integration-with-ecc]]

## Internal Relationships
- Agent Introspection Debugging -> implements -> Phase 1: Failure Capture [EXTRACTED]
- Agent Introspection Debugging -> implements -> Phase 2: Root-Cause Diagnosis [EXTRACTED]
- Agent Introspection Debugging -> implements -> Phase 3: Contained Recovery [EXTRACTED]
- Agent Introspection Debugging -> implements -> Phase 4: Introspection Report [EXTRACTED]
- Agent Introspection Debugging -> related_to -> Integration with ECC [EXTRACTED]
- Integration with ECC -> references -> verification-loop [EXTRACTED]
- Integration with ECC -> references -> continuous-learning-v2 [EXTRACTED]
- Integration with ECC -> references -> council [EXTRACTED]
- Integration with ECC -> references -> workspace-surface-audit [EXTRACTED]
- Phase 2: Root-Cause Diagnosis -> references -> Common Agent Failure Patterns [EXTRACTED]
- Phase 3: Contained Recovery -> produces -> Agent Self-Debug Report [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent Introspection Debugging, Integration with ECC, Phase 2: Root-Cause Diagnosis를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
