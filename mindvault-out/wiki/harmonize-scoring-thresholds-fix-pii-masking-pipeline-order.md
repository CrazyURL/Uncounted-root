# Harmonize Scoring Thresholds & Fix PII Masking Pipeline Order
Cohesion: 0.16 | Nodes: 15

## Key Nodes
- **Harmonize Scoring Thresholds** (uncounted-app/src/lib/audioScanner.ts) -- 7 connections
  - -> related_to -> [[harmonize-scoring-api]]
  - -> related_to -> [[integration-risk]]
  - <- related_to <- [[fix-pii-masking-pipeline-order]]
  - <- handles <- [[agent-3-fullstacklogic]]
  - <- includes <- [[wave-2-logic-harmonization]]
  - <- involves <- [[agent-1-tssecurity]]
  - <- presents <- [[by-repo]]
- **Fix PII Masking Pipeline Order** (uncounted-app/src/lib/audioSanitizer.ts) -- 5 connections
  - -> related_to -> [[harmonize-scoring-thresholds]]
  - -> related_to -> [[processing-logic-risk]]
  - <- handles <- [[agent-1-tssecurity]]
  - <- includes <- [[wave-1-security-hardening]]
  - <- presents <- [[sequential-fix]]
- **Secure Android Native Path Resolution** (uncounted-app/android/.../audio/AudioDecoderPlugin.java) -- 4 connections
  - -> related_to -> [[validate-canonical-paths]]
  - <- implements <- [[secure-audio-decoder-bridge]]
  - <- handles <- [[agent-2-androidjava]]
  - <- includes <- [[wave-1-security-hardening]]
- **Agent 1 (TS/Security)** (N/A) -- 3 connections
  - -> handles -> [[fix-pii-masking-pipeline-order]]
  - -> handles -> [[secure-audio-decoder-bridge]]
  - -> involves -> [[harmonize-scoring-thresholds]]
- **Secure Audio Decoder Bridge** (uncounted-app/src/lib/audioDecoderBridge.ts) -- 3 connections
  - -> implements -> [[secure-android-native-path-resolution]]
  - <- handles <- [[agent-1-tssecurity]]
  - <- includes <- [[wave-1-security-hardening]]
- **Wave 1: Security Hardening** (N/A) -- 3 connections
  - -> includes -> [[fix-pii-masking-pipeline-order]]
  - -> includes -> [[secure-android-native-path-resolution]]
  - -> includes -> [[secure-audio-decoder-bridge]]
- **Agent 2 (Android/Java)** (N/A) -- 1 connections
  - -> handles -> [[secure-android-native-path-resolution]]
- **Agent 3 (Fullstack/Logic)** (N/A) -- 1 connections
  - -> handles -> [[harmonize-scoring-thresholds]]
- **By Repo** (N/A) -- 1 connections
  - -> presents -> [[harmonize-scoring-thresholds]]
- **Harmonize Scoring API** (uncounted-api/.../admin.ts) -- 1 connections
  - <- related_to <- [[harmonize-scoring-thresholds]]
- **Integration Risk** (N/A) -- 1 connections
  - <- related_to <- [[harmonize-scoring-thresholds]]
- **Processing Logic Risk** (N/A) -- 1 connections
  - <- related_to <- [[fix-pii-masking-pipeline-order]]
- **Sequential Fix** (N/A) -- 1 connections
  - -> presents -> [[fix-pii-masking-pipeline-order]]
- **Validate Canonical Paths** (uncounted-app/android/.../audio/AudioDecoderPlugin.java) -- 1 connections
  - <- related_to <- [[secure-android-native-path-resolution]]
- **Wave 2: Logic Harmonization** (N/A) -- 1 connections
  - -> includes -> [[harmonize-scoring-thresholds]]

## Internal Relationships
- Agent 1 (TS/Security) -> handles -> Fix PII Masking Pipeline Order [EXTRACTED]
- Agent 1 (TS/Security) -> handles -> Secure Audio Decoder Bridge [EXTRACTED]
- Agent 1 (TS/Security) -> involves -> Harmonize Scoring Thresholds [INFERRED]
- Agent 2 (Android/Java) -> handles -> Secure Android Native Path Resolution [EXTRACTED]
- Agent 3 (Fullstack/Logic) -> handles -> Harmonize Scoring Thresholds [EXTRACTED]
- By Repo -> presents -> Harmonize Scoring Thresholds [INFERRED]
- Fix PII Masking Pipeline Order -> related_to -> Harmonize Scoring Thresholds [EXTRACTED]
- Fix PII Masking Pipeline Order -> related_to -> Processing Logic Risk [EXTRACTED]
- Harmonize Scoring Thresholds -> related_to -> Harmonize Scoring API [EXTRACTED]
- Harmonize Scoring Thresholds -> related_to -> Integration Risk [EXTRACTED]
- Secure Android Native Path Resolution -> related_to -> Validate Canonical Paths [EXTRACTED]
- Secure Audio Decoder Bridge -> implements -> Secure Android Native Path Resolution [INFERRED]
- Sequential Fix -> presents -> Fix PII Masking Pipeline Order [INFERRED]
- Wave 1: Security Hardening -> includes -> Fix PII Masking Pipeline Order [EXTRACTED]
- Wave 1: Security Hardening -> includes -> Secure Android Native Path Resolution [EXTRACTED]
- Wave 1: Security Hardening -> includes -> Secure Audio Decoder Bridge [EXTRACTED]
- Wave 2: Logic Harmonization -> includes -> Harmonize Scoring Thresholds [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Harmonize Scoring Thresholds, Fix PII Masking Pipeline Order, Secure Android Native Path Resolution를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 A, AudioDecoderPlugin.java, admin.ts, audioDecoderBridge.ts, audioSanitizer.ts이다.
