# Frontend Agent (TS/Security) & Dedupe Robustness
Cohesion: 0.11 | Nodes: 19

## Key Nodes
- **Frontend Agent (TS/Security)** (Orchestration Synthesis) -- 5 connections
  - <- implemented_by <- [[pathlog-cleanup]]
  - <- implemented_by <- [[extension-validation-confirmation]]
  - <- implemented_by <- [[grade-domain-unification]]
  - <- implemented_by <- [[dedupe-robustness]]
  - <- implemented_by <- [[scan-race-condition]]
- **Dedupe Robustness** (Orchestration Synthesis) -- 3 connections
  - -> references -> [[localstorage-security]]
  - -> references -> [[absence-of-testing]]
  - -> implemented_by -> [[frontend-agent-tssecurity]]
- **Native Agent (Android/Java)** (Orchestration Synthesis) -- 3 connections
  - <- implemented_by <- [[native-dosinformation-leak]]
  - <- implemented_by <- [[onnx-checksum]]
  - <- implemented_by <- [[wav-integer-safety]]
- **Native DoS/Information Leak** (Orchestration Synthesis) -- 3 connections
  - -> references -> [[dos-defense]]
  - -> references -> [[pathlogging-security]]
  - -> implemented_by -> [[native-agent-androidjava]]
- **Extension Validation Confirmation** (Orchestration Synthesis) -- 2 connections
  - -> references -> [[extension-validation]]
  - -> implemented_by -> [[frontend-agent-tssecurity]]
- **Grade Domain Unification** (Orchestration Synthesis) -- 2 connections
  - -> references -> [[grade-domain-discrepancy]]
  - -> implemented_by -> [[frontend-agent-tssecurity]]
- **ONNX Checksum** (Orchestration Synthesis) -- 2 connections
  - -> references -> [[onnx-integrity]]
  - -> implemented_by -> [[native-agent-androidjava]]
- **Path/Log Cleanup** (Orchestration Synthesis) -- 2 connections
  - -> references -> [[pathlogging-security]]
  - -> implemented_by -> [[frontend-agent-tssecurity]]
- **Path/Logging Security** (Orchestration Synthesis) -- 2 connections
  - <- references <- [[pathlog-cleanup]]
  - <- references <- [[native-dosinformation-leak]]
- **Scan Race Condition** (Orchestration Synthesis) -- 2 connections
  - -> references -> [[race-condition]]
  - -> implemented_by -> [[frontend-agent-tssecurity]]
- **WAV Integer Safety** (Orchestration Synthesis) -- 2 connections
  - -> references -> [[integer-overflow]]
  - -> implemented_by -> [[native-agent-androidjava]]
- **Absence of Testing** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[dedupe-robustness]]
- **DoS Defense** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[native-dosinformation-leak]]
- **Extension Validation** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[extension-validation-confirmation]]
- **Grade Domain Discrepancy** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[grade-domain-unification]]
- **Integer Overflow** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[wav-integer-safety]]
- **localStorage Security** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[dedupe-robustness]]
- **ONNX Integrity** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[onnx-checksum]]
- **Race Condition** (Orchestration Synthesis) -- 1 connections
  - <- references <- [[scan-race-condition]]

## Internal Relationships
- Dedupe Robustness -> references -> localStorage Security [EXTRACTED]
- Dedupe Robustness -> references -> Absence of Testing [EXTRACTED]
- Dedupe Robustness -> implemented_by -> Frontend Agent (TS/Security) [EXTRACTED]
- Extension Validation Confirmation -> references -> Extension Validation [EXTRACTED]
- Extension Validation Confirmation -> implemented_by -> Frontend Agent (TS/Security) [EXTRACTED]
- Grade Domain Unification -> references -> Grade Domain Discrepancy [EXTRACTED]
- Grade Domain Unification -> implemented_by -> Frontend Agent (TS/Security) [EXTRACTED]
- Native DoS/Information Leak -> references -> DoS Defense [EXTRACTED]
- Native DoS/Information Leak -> references -> Path/Logging Security [EXTRACTED]
- Native DoS/Information Leak -> implemented_by -> Native Agent (Android/Java) [EXTRACTED]
- ONNX Checksum -> references -> ONNX Integrity [EXTRACTED]
- ONNX Checksum -> implemented_by -> Native Agent (Android/Java) [EXTRACTED]
- Path/Log Cleanup -> references -> Path/Logging Security [EXTRACTED]
- Path/Log Cleanup -> implemented_by -> Frontend Agent (TS/Security) [EXTRACTED]
- Scan Race Condition -> references -> Race Condition [EXTRACTED]
- Scan Race Condition -> implemented_by -> Frontend Agent (TS/Security) [EXTRACTED]
- WAV Integer Safety -> references -> Integer Overflow [EXTRACTED]
- WAV Integer Safety -> implemented_by -> Native Agent (Android/Java) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Frontend Agent (TS/Security), Dedupe Robustness, Native Agent (Android/Java)를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 Orchestration Synthesis이다.
