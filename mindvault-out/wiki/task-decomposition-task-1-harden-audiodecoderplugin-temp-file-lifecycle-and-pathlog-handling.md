# Task Decomposition & Task 1: Harden `AudioDecoderPlugin` temp-file lifecycle and path/log handling
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **Task Decomposition** (.orchestrate-consult/20260331-162426/codex.md) -- 9 connections
  - -> contains -> [[task-1-harden-audiodecoderplugin-temp-file-lifecycle-and-pathlog-handling]]
  - -> contains -> [[task-2-complete-tsjava-temp-file-delete-contract]]
  - -> contains -> [[task-3-fix-native-scan-traversal-and-permission-denied-handling]]
  - -> contains -> [[task-4-remove-absolute-paths-from-file-loading-and-decode-bridge-errors]]
  - -> contains -> [[task-5-correct-bitrate-fallback-logic-in-audioscanner]]
  - -> contains -> [[task-6-add-pii-mute-padding-in-wav-encoder]]
  - -> contains -> [[task-7-add-cache-ttl-and-hashed-fingerprint-persistence]]
  - -> contains -> [[task-8-fix-java-integer-overflow-protections-in-downstream-audio-processing]]
  - -> contains -> [[task-9-validate-skip-decision-for-onnx-decode-optimization]]
- **Task 1: Harden `AudioDecoderPlugin` temp-file lifecycle and path/log handling** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 2: Complete TS↔Java temp-file delete contract** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 3: Fix native scan traversal and permission-denied handling** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 4: Remove absolute paths from file-loading and decode bridge errors** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 5: Correct bitrate fallback logic in `audioScanner`** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 6: Add PII mute padding in WAV encoder** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 7: Add cache TTL and hashed fingerprint persistence** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 8: Fix Java integer-overflow protections in downstream audio processing** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 9: Validate skip decision for ONNX decode optimization** (.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]

## Internal Relationships
- Task Decomposition -> contains -> Task 1: Harden `AudioDecoderPlugin` temp-file lifecycle and path/log handling [EXTRACTED]
- Task Decomposition -> contains -> Task 2: Complete TS↔Java temp-file delete contract [EXTRACTED]
- Task Decomposition -> contains -> Task 3: Fix native scan traversal and permission-denied handling [EXTRACTED]
- Task Decomposition -> contains -> Task 4: Remove absolute paths from file-loading and decode bridge errors [EXTRACTED]
- Task Decomposition -> contains -> Task 5: Correct bitrate fallback logic in `audioScanner` [EXTRACTED]
- Task Decomposition -> contains -> Task 6: Add PII mute padding in WAV encoder [EXTRACTED]
- Task Decomposition -> contains -> Task 7: Add cache TTL and hashed fingerprint persistence [EXTRACTED]
- Task Decomposition -> contains -> Task 8: Fix Java integer-overflow protections in downstream audio processing [EXTRACTED]
- Task Decomposition -> contains -> Task 9: Validate skip decision for ONNX decode optimization [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Task Decomposition, Task 1: Harden `AudioDecoderPlugin` temp-file lifecycle and path/log handling, Task 2: Complete TS↔Java temp-file delete contract를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 codex.md이다.
