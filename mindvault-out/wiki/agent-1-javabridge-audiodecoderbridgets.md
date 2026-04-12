# Agent 1 (Java+Bridge) & audioDecoderBridge.ts
Cohesion: 0.29 | Nodes: 8

## Key Nodes
- **Agent 1 (Java+Bridge)** (path) -- 5 connections
  - -> uses -> [[audiodecoderpluginjava]]
  - <- implemented_by <- [[task-m12]]
  - <- skipped <- [[task-m16]]
  - <- implemented_by <- [[task-m17]]
  - <- managed_by <- [[audiodecoderbridgets]]
- **audioDecoderBridge.ts** (path/to/audioDecoderBridge.ts) -- 4 connections
  - -> managed_by -> [[agent-1-javabridge]]
  - -> related_to -> [[audiodecoderpluginjava]]
  - <- modifies <- [[task-m5]]
  - <- modifies <- [[task-m11]]
- **AudioDecoderPlugin.java** (path/to/AudioDecoderPlugin.java) -- 2 connections
  - <- uses <- [[agent-1-javabridge]]
  - <- related_to <- [[audiodecoderbridgets]]
- **Task M11** (path) -- 1 connections
  - -> modifies -> [[audiodecoderbridgets]]
- **Task M12** (path) -- 1 connections
  - -> implemented_by -> [[agent-1-javabridge]]
- **Task M16** (path) -- 1 connections
  - -> skipped -> [[agent-1-javabridge]]
- **Task M17** (path) -- 1 connections
  - -> implemented_by -> [[agent-1-javabridge]]
- **Task M5** (path) -- 1 connections
  - -> modifies -> [[audiodecoderbridgets]]

## Internal Relationships
- Agent 1 (Java+Bridge) -> uses -> AudioDecoderPlugin.java [EXTRACTED]
- audioDecoderBridge.ts -> managed_by -> Agent 1 (Java+Bridge) [EXTRACTED]
- audioDecoderBridge.ts -> related_to -> AudioDecoderPlugin.java [EXTRACTED]
- Task M11 -> modifies -> audioDecoderBridge.ts [EXTRACTED]
- Task M12 -> implemented_by -> Agent 1 (Java+Bridge) [EXTRACTED]
- Task M16 -> skipped -> Agent 1 (Java+Bridge) [EXTRACTED]
- Task M17 -> implemented_by -> Agent 1 (Java+Bridge) [EXTRACTED]
- Task M5 -> modifies -> audioDecoderBridge.ts [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent 1 (Java+Bridge), audioDecoderBridge.ts, AudioDecoderPlugin.java를 중심으로 modifies 관계로 연결되어 있다. 주요 소스 파일은 AudioDecoderPlugin.java, audioDecoderBridge.ts, path이다.
