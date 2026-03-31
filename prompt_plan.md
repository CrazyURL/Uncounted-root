# A2 MEDIUM 16건 버그픽스

상태: 완료
타입: bugfix
생성일: 2026-03-31
대상: uncounted-docs/bugfix/A2-file-scan-quality-review.md MEDIUM 미처리 16건

## 이전 계획
> Refresh token race condition 버그픽스 — 완료.

---

## 대상 버그 목록

### 그룹 A: AudioDecoderPlugin.java (M6, M8, M9, M10, M11)

| # | 라인 | CWE | 문제 | 수정 방안 |
|---|------|-----|------|----------|
| M6 | :75 | CWE-459 | 오래된 .wav.tmp 파일 정리 없음 | stt_decoded 디렉토리에 24h 이상 된 .wav.tmp 삭제 로직 추가 |
| M8 | :97 | CWE-190 | WAV dataSize int 캐스팅 | long 산술 후 Integer.MAX_VALUE 검증 |
| M9 | :78 | CWE-532 | 20+ Log.d()에 절대경로 기록 | 경로를 파일명만 남기거나 해시 처리 |
| M10 | :139 | CWE-200 | checkWavExists 경로 제한 없음 | stt_decoded/ 하위만 허용 (H6에서 이미 수정했으나 재검증) |
| M11 | TS↔Java | Interface | deleteTempFile 미구현 | TS 인터페이스 정의 + Java 플러그인 메서드 구현 |

### 그룹 B: scanEngine.ts + audioFileLoader.ts + audioDecoderBridge.ts (M1, M2, M3, M5)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| M1 | scanEngine.ts:139 | CWE-22 | entry.name 경로 정규화 없음 | entry.name에서 `..` 포함 시 skip + 로그 |
| M2 | scanEngine.ts:129 | CWE-755 | 권한 거부 무시 후 스캔 진행 | 권한 거부를 명시적으로 캐치하고 사용자에 알림 |
| M3 | audioFileLoader.ts:25 | CWE-209 | 에러 메시지에 전체 경로 | 경로를 파일명만으로 교체 |
| M5 | audioDecoderBridge.ts:44 | CWE-209 | 에러 메시지에 절대경로 | 경로를 파일명만으로 교체 |

### 그룹 C: AudioProcessor.java + WavParser.java (M12, M17)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| M12 | AudioProcessor.java:369 | CWE-190 | WAV 헤더 pcmBytesWritten int 캐스팅 | long 유지 후 int 범위 검증, 초과 시 에러 |
| M17 | WavParser.java:138 | CWE-190 | extractChunk 바이트 오프셋 오버플로우 | long 산술로 전환, 범위 초과 시 예외 |

### 그룹 D: OnnxSttRunner.java (M16)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| M16 | OnnxSttRunner.java:859 | CWE-400 | O(N^2) 디코딩 (KV-Cache 비활성) | 성능 개선 — 위험도 높아 별도 검토 필요 (이번 스프린트 skip 권장) |

### 그룹 E: wavEncoder.ts (M18)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| M18 | wavEncoder.ts:111 | CWE-200 | PII 구간 안전 마진(padding) 미적용 | muteSegment에 전후 50ms 패딩 추가 |

### 그룹 F: audioDedupe.ts (M21, M22)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| M21 | audioDedupe.ts:25 | CWE-922 | 캐시 TTL/크기 제한 없음 | 7일 TTL + 최대 500항목 제한 |
| M22 | audioDedupe.ts:59 | CWE-359 | 핑거프린트 localStorage 평문 저장 | 핑거프린트를 SHA-256 해시로 저장 |

### 그룹 G: audioScanner.ts (M23)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| M23 | audioScanner.ts:190 | CWE-682 | bitrate 폴백 삼항 조건 반전 버그 | 조건 논리 수정 (실제 코드 확인 후 반전 교정) |

---

## Wave 구성 (초안)

### Wave 1 (병렬 3팀)
- **팀원 1 (Java)**: M6 + M8 + M9 + M10 + M11 — AudioDecoderPlugin.java 중심
- **팀원 2 (TS-scan)**: M1 + M2 + M3 + M5 + M23 — scanEngine/audioFileLoader/audioDecoderBridge/audioScanner
- **팀원 3 (TS-audio)**: M18 + M21 + M22 — wavEncoder/audioDedupe

### Wave 2
- **팀원 1 (Java)**: M12 + M17 — AudioProcessor/WavParser 정수 오버플로우

### Skip
- M16: KV-Cache 성능 이슈는 아키텍처 변경 수반 — 별도 태스크로 분리 권장

---

## 의존성 분석

- M10(checkWavExists)은 H6에서 이미 수정됨 — 재검증만 필요할 수 있음
- M11(deleteTempFile)은 M6(tmp 정리)와 연관 — 동일 팀원이 처리
- M22(핑거프린트 해시)는 M21(TTL/크기)과 같은 파일 — 동일 팀원 필수
- M1, M2는 같은 scanEngine.ts — 동일 팀원 필수
- M12, M17은 같은 Java 정수 오버플로 패턴 — 동일 팀원이 일관성 있게 처리

## 리스크

1. M16(KV-Cache)은 ONNX 추론 아키텍처 변경이라 side-effect 위험 높음
2. M11(deleteTempFile)은 TS↔Java 양쪽 수정 필요 — 인터페이스 정합성 주의
3. M22(핑거프린트 해시)는 기존 캐시와 호환성 깨짐 — 마이그레이션 로직 필요
