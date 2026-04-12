# Dead Code Java 클래스 (선택적 삭제 권장) & Orchestration Synthesis — Android 온디바이스 모델 파일 제거 사이드 이펙트 분석
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **Dead Code Java 클래스 (선택적 삭제 권장)** (.orchestrate-consult/20260412-202911/orchestrate-synthesis.md) -- 3 connections
  - -> contains -> [[speakerdiarizerjava]]
  - -> contains -> [[web-side-onnx]]
  - <- contains <- [[orchestration-synthesis-android]]
- **Orchestration Synthesis — Android 온디바이스 모델 파일 제거 사이드 이펙트 분석** (.orchestrate-consult/20260412-202911/orchestrate-synthesis.md) -- 3 connections
  - -> contains -> [[block]]
  - -> contains -> [[block-buildgradle-onnx-runtime]]
  - -> contains -> [[dead-code-java]]
- **[BLOCK] build.gradle ONNX Runtime 의존성 제거** (.orchestrate-consult/20260412-202911/orchestrate-synthesis.md) -- 2 connections
  - -> has_code_example -> [[gradle]]
  - <- contains <- [[orchestration-synthesis-android]]
- **gradle** (.orchestrate-consult/20260412-202911/orchestrate-synthesis.md) -- 1 connections
  - <- has_code_example <- [[block-buildgradle-onnx-runtime]]
- **[BLOCK] 테스트 파일 삭제 필요** (.orchestrate-consult/20260412-202911/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-synthesis-android]]
- **SpeakerDiarizer.java — 부분 정리 (선택)** (.orchestrate-consult/20260412-202911/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[dead-code-java]]
- **Web-side ONNX는 별도 (건드리지 않음)** (.orchestrate-consult/20260412-202911/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[dead-code-java]]

## Internal Relationships
- [BLOCK] build.gradle ONNX Runtime 의존성 제거 -> has_code_example -> gradle [EXTRACTED]
- Dead Code Java 클래스 (선택적 삭제 권장) -> contains -> SpeakerDiarizer.java — 부분 정리 (선택) [EXTRACTED]
- Dead Code Java 클래스 (선택적 삭제 권장) -> contains -> Web-side ONNX는 별도 (건드리지 않음) [EXTRACTED]
- Orchestration Synthesis — Android 온디바이스 모델 파일 제거 사이드 이펙트 분석 -> contains -> [BLOCK] 테스트 파일 삭제 필요 [EXTRACTED]
- Orchestration Synthesis — Android 온디바이스 모델 파일 제거 사이드 이펙트 분석 -> contains -> [BLOCK] build.gradle ONNX Runtime 의존성 제거 [EXTRACTED]
- Orchestration Synthesis — Android 온디바이스 모델 파일 제거 사이드 이펙트 분석 -> contains -> Dead Code Java 클래스 (선택적 삭제 권장) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Dead Code Java 클래스 (선택적 삭제 권장), Orchestration Synthesis — Android 온디바이스 모델 파일 제거 사이드 이펙트 분석, [BLOCK] build.gradle ONNX Runtime 의존성 제거를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
