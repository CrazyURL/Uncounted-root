# Task T2: Native DoS & Info Leak & Agent-Native
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Task T2: Native DoS & Info Leak** (AudioDecoderPlugin.java) -- 4 connections
  - -> implements -> [[denial-of-service-prevention]]
  - <- handles <- [[agent-native]]
  - <- includes <- [[wave-2-core-security-native-logic]]
  - <- related_to <- [[conflict-risk]]
- **Agent-Native** (path) -- 1 connections
  - -> handles -> [[task-t2-native-dos-info-leak]]
- **Conflict Risk** (path) -- 1 connections
  - -> related_to -> [[task-t2-native-dos-info-leak]]
- **Denial of Service Prevention** (path) -- 1 connections
  - <- implements <- [[task-t2-native-dos-info-leak]]
- **Wave 2: Core Security & Native Logic** (path) -- 1 connections
  - -> includes -> [[task-t2-native-dos-info-leak]]

## Internal Relationships
- Agent-Native -> handles -> Task T2: Native DoS & Info Leak [EXTRACTED]
- Conflict Risk -> related_to -> Task T2: Native DoS & Info Leak [INFERRED]
- Task T2: Native DoS & Info Leak -> implements -> Denial of Service Prevention [EXTRACTED]
- Wave 2: Core Security & Native Logic -> includes -> Task T2: Native DoS & Info Leak [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Task T2: Native DoS & Info Leak, Agent-Native, Conflict Risk를 중심으로 handles 관계로 연결되어 있다. 주요 소스 파일은 AudioDecoderPlugin.java, path이다.
