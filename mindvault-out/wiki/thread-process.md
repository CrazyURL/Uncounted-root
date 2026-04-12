# Thread & Process
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **Thread** (path) -- 5 connections
  - -> related_to -> [[python-gil]]
  - -> related_to -> [[python-multiprocessing]]
  - <- related_to <- [[process]]
  - <- references <- [[fork]]
  - <- related_to <- [[coroutine]]
- **Process** (path) -- 4 connections
  - -> related_to -> [[thread]]
  - -> related_to -> [[inter-process-communication]]
  - <- implements <- [[linux-clone2]]
  - <- references <- [[exec-family]]
- **Python multiprocessing** (path) -- 2 connections
  - <- related_to <- [[thread]]
  - <- references <- [[python-threading]]
- **Coroutine** (path) -- 1 connections
  - -> related_to -> [[thread]]
- **exec family** (path) -- 1 connections
  - -> references -> [[process]]
- **fork** (path) -- 1 connections
  - -> references -> [[thread]]
- **Inter-Process Communication** (path) -- 1 connections
  - <- related_to <- [[process]]
- **Linux clone(2)** (path) -- 1 connections
  - -> implements -> [[process]]
- **Python GIL** (path) -- 1 connections
  - <- related_to <- [[thread]]
- **Python threading** (path) -- 1 connections
  - -> references -> [[python-multiprocessing]]

## Internal Relationships
- Coroutine -> related_to -> Thread [INFERRED]
- exec family -> references -> Process [EXTRACTED]
- fork -> references -> Thread [EXTRACTED]
- Linux clone(2) -> implements -> Process [EXTRACTED]
- Process -> related_to -> Thread [EXTRACTED]
- Process -> related_to -> Inter-Process Communication [EXTRACTED]
- Python threading -> references -> Python multiprocessing [INFERRED]
- Thread -> related_to -> Python GIL [EXTRACTED]
- Thread -> related_to -> Python multiprocessing [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Thread, Process, Python multiprocessing를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
