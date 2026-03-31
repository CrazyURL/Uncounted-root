# A2 LOW 13건 버그픽스

상태: 완료
타입: bugfix
생성일: 2026-03-31
대상: uncounted-docs/bugfix/A2-file-scan-quality-review.md LOW 미처리 13건

## 이전 계획
> A2 MEDIUM 15건 버그픽스 — 완료.

---

## 대상 버그 목록

### 그룹 A: TS Scan/Helpers (L1, L2, L16, L17)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| L1 | scanEngine.ts:136 | CWE-200 | 진행률 콜백에 전체 경로 전달 | 파일명만 전달 (path.split('/').pop()) |
| L2 | scanEngine.ts:194 | CWE-400 | 웹 재귀 스캔 깊이 제한 없음 | 최대 깊이 10 제한, 초과 시 skip |
| L16 | autoScanHelpers.ts:58 | CWE-200 | callRecordId에 파일 경로 원본 저장 | 경로를 해시 또는 파일명만으로 교체 |
| L17 | autoScanHelpers.ts:39 | CWE-79 | 파일명 sanitization 미적용 | 특수문자 제거/이스케이프 |

### 그룹 B: TS Audio (L3, L11, L14, L15)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| L3 | audioScanner.ts:173 | CWE-922 | localStorage 해시 캐시 타입 무검증 | zod 또는 수동 타입 가드로 파싱 결과 검증 |
| L11 | wavEncoder.ts:32 | CWE-190 | pcmToWav 정수 오버플로 (이론적) | dataSize를 Number.MAX_SAFE_INTEGER 검증 |
| L14 | audioSanitizer.ts:295 | CWE-532 | console.warn 사용 | console.warn 제거 |
| L15 | audioAnalyzer.ts:50 | CWE-682 | totalFrames=0 시 NaN 전파 | totalFrames===0 가드 추가, 0 반환 |

### 그룹 C: TS Bridge (L4)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| L4 | audioDecoderBridge.ts:41 | CWE-772 | fetch 응답 에러 경로에서 body 미드레인 | catch 블록에서 response.body?.cancel() 호출 |

### 그룹 D: Java Audio (L5, L7, L8, L9)

| # | 파일:라인 | CWE | 문제 | 수정 방안 |
|---|-----------|-----|------|----------|
| L5 | AudioDecoderPlugin.java:97 | CWE-190 | WAV int 캐스팅 (현실적 위험 낮음) | M8에서 이미 long 산술 적용 — 재검증만 필요 |
| L7 | MfccExtractor.java:18 | Thread | 단일 스레드 전용이나 컴파일 타임 보호 없음 | 클래스에 @NotThreadSafe 어노테이션 또는 Javadoc 주석 |
| L8 | EmbeddingExtractor.java:582 | API | InputStream.available() 신뢰성 | available() 대신 실제 read 루프로 전환 |
| L9 | OnnxSttRunner.java:926 | Bounds | softmaxProb 빈 배열 가드 없음 | 배열 길이 0 체크 후 기본값 반환 |

### Skip

| # | 파일 | 사유 |
|---|------|------|
| L12 | audioSanitizer.ts:83 | applyNoiseReduction 미사용 함수 — 아키텍처 통합(D 시리즈)에서 삭제 예정 |

---

## Wave 구성

### Wave 1 (병렬 2팀)
- **팀원 1 (TS)**: L1 + L2 + L3 + L4 + L11 + L14 + L15 + L16 + L17 — TS 파일 전체 (9건)
- **팀원 2 (Java)**: L5 + L7 + L8 + L9 — Java 파일 전체 (4건)

### 의존성 분석
- L5는 M8에서 이미 수정했을 수 있음 — 재검증만 필요
- L1, L2는 같은 scanEngine.ts → 동일 팀원 필수
- L16, L17은 같은 autoScanHelpers.ts → 동일 팀원 필수
- TS와 Java 간 의존성 없음 → 완전 병렬 가능

## 리스크
- 전체적으로 LOW 등급이라 리스크 낮음
- L12는 아키텍처 통합 계획과 충돌 → skip이 적절
- L5는 M8 수정으로 이미 해소되었을 가능성 높음
