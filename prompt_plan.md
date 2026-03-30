# A2 파일 스캔 & 품질 분석 — CRITICAL 5건 버그픽스 실행계획

상태: 계획 확정 대기
타입: bugfix
생성일: 2026-03-30
근거 문서: uncounted-docs/bugfix/A2-file-scan-quality-review.md
멀티모델 자문: Gemini + Codex → Claude synthesis → planner 검증

## 이전 계획

> A2 보안 검수 및 코드 리뷰 (2026-03-27, review 타입) — 완료됨. CRITICAL 5건, HIGH 15건, MEDIUM 23건, LOW 17건 발견.

---

## 목표

보안/품질 리뷰에서 발견된 CRITICAL 5건을 수정한다.

---

## 현재 상태 분석 결과

### C1: PII 마스킹 순서 오류 — 확인됨
- **파일**: `uncounted-app/src/lib/audioSanitizer.ts:252-265` (uncounted-admin에도 동일 코드)
- 현재 순서: 리샘플링 → **무음 제거** → **PII 마스킹**
- `piiIntervals`는 원본 타임라인 기준 좌표 → 무음 제거 후 타임라인 어긋남

### C2: resolveFilePath() 경로 순회 — 확인됨
- **파일**: `AudioDecoderPlugin.java:150-167`
- `path.startsWith("/")` → 절대경로 무조건 통과, 상대경로도 `..` 미검증

### C3: getOrDecodeWav() 경로 순회 — 확인됨
- **파일**: `AudioDecoderPlugin.java:177-183`
- C2와 동일 패턴. SttProcessingService에서 직접 호출

### C4: decodeAudioToTempWav() 경로 순회 — 확인됨
- **파일**: `audioDecoderBridge.ts:21-27`
- path 파라미터 검증 전무

### C5: 등급 기준 불일치 — 확인됨
- `audioScanner.ts`: A≥**75**, B≥**50** (문제)
- `valueEngine.ts`: A≥**80**, B≥**60** (정상)
- `admin.ts`: A≥**80**, B≥**60** (정상)
- admin 프로젝트의 `adminHelpers.ts`, `billableUnitEngine.ts`는 `valueEngine.ts` import → 일관성 유지

### 테스트 현황
- 5개 버그 관련 테스트 파일: **0건** (전무)

---

## 구현 계획

### Wave 1: 병렬 수정 (3 에이전트)

#### Agent 1: TS 보안 (C1 + C4)

**C1 수정: PII 마스킹 순서 변경**

대상 파일 (2곳 동일 수정):
- `uncounted-app/src/lib/audioSanitizer.ts`
- `uncounted-admin/src/lib/audioSanitizer.ts`

수정 내용 (256-265행 영역):
1. 3단계(무음 제거)와 4단계(PII 마스킹) 순서 교체
2. 변경 후 순서: 리샘플링 → PII 비프 마스킹 → 무음 제거
3. `applyBeepMask(resampled, RATE, piiIntervals)` — resampled에 대해 마스킹
4. `removeSilence(masked, RATE)` — 마스킹 완료 데이터에서 무음 제거
5. 3행의 파이프라인 설명 주석도 갱신

```typescript
// 변경 후
// 3) PII 비프 마스킹 (무음 제거 전 — piiIntervals가 원본 타임라인 기준)
const masked = piiIntervals?.length
  ? applyBeepMask(resampled, RATE, piiIntervals)
  : resampled

// 4) 무음 제거
const trimmed = removeSilence(masked, RATE)
const sanitizedDurationSec = trimmed.length / RATE
const silenceRemovedSec = originalDurationSec - sanitizedDurationSec
```

**C4 수정: decodeAudioToTempWav() 경로 검증**

대상 파일: `uncounted-app/src/lib/audioDecoderBridge.ts`

수정 내용:
1. 검증 함수 추가: `..` 차단, 절대경로 차단, 확장자 화이트리스트(`.m4a`, `.mp3`, `.aac`, `.ogg`, `.wav`, `.opus`)
2. `decodeAudioToTempWav()` 시작 부분에 `validateAudioPath(path)` 호출

```typescript
const ALLOWED_EXTENSIONS = new Set(['.m4a', '.mp3', '.aac', '.ogg', '.wav', '.opus'])

function validateAudioPath(path: string): void {
  if (!path || typeof path !== 'string') {
    throw new Error('오디오 파일 경로가 비어있습니다')
  }
  if (path.startsWith('/')) {
    throw new Error('절대 경로는 허용되지 않습니다')
  }
  if (path.includes('..')) {
    throw new Error('상위 디렉토리 참조(..)는 허용되지 않습니다')
  }
  const ext = '.' + path.split('.').pop()?.toLowerCase()
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    throw new Error(`허용되지 않는 파일 확장자: ${ext}`)
  }
}
```

---

#### Agent 2: Android 보안 (C2 + C3)

대상 파일: `uncounted-app/android/.../audio/AudioDecoderPlugin.java`

**공통 검증 메서드 추가:**

```java
private static String validateAndResolvePath(File base, String path) throws IOException {
    File resolved = new File(base, path);
    String canonicalBase = base.getCanonicalPath();
    String canonicalResolved = resolved.getCanonicalPath();
    if (!canonicalResolved.startsWith(canonicalBase + File.separator)
        && !canonicalResolved.equals(canonicalBase)) {
        throw new SecurityException("Path traversal detected");
    }
    return canonicalResolved;
}
```

**C2 수정: resolveFilePath() (150-167행)**
1. 절대경로: 허용 디렉토리(filesDir, cacheDir, externalStorageDir)에 대해 canonical path 비교
2. 상대경로: `validateAndResolvePath(base, path)` 호출
3. 검증 실패 → `null` 반환 → 호출부에서 reject

**C3 수정: getOrDecodeWav() (177-183행)**
1. 상대경로 → `validateAndResolvePath(base, path)` 적용
2. 절대경로 → 허용 범위 canonical path 비교
3. 앱 내부 디코딩 캐시(`context.getFilesDir()/stt_decoded/`)도 허용 범위에 포함

주의: `getOrDecodeWav`은 static이므로 `validateAndResolvePath`도 static

---

#### Agent 3: 등급 통일 (C5)

**통일 기준: A ≥ 80, B ≥ 60**

대상 파일 (2곳 동일 수정):
- `uncounted-app/src/lib/audioScanner.ts:147-151`
- `uncounted-admin/src/lib/audioScanner.ts:147-151`

변경: `75 → 80`, `50 → 60`

```typescript
// 변경 후
export function calcQualityGrade(score: number): AudioQualityGrade {
  if (score >= 80) return 'A'
  if (score >= 60) return 'B'
  return 'C'
}
```

영향 범위:
- `audioScanner.ts`의 `calcQualityGrade`는 `buildAudioScanRecord()` 내부에서만 호출 (213행)
- 외부 import 없음 확인됨
- 기존 75-79점 세션: A → B로 변경
- 기존 50-59점 세션: B → C로 변경
- valueEngine, admin API는 이미 80/60이므로 변경 불필요

---

### Wave 2: 검증

#### 2-1. 빌드 검증
```bash
cd uncounted-app && npx tsc --noEmit
cd uncounted-admin && npx tsc --noEmit
cd uncounted-api && npx tsc --noEmit
cd uncounted-app/android && ./gradlew compileLocalDebugJavaWithJavac
```

#### 2-2. 테스트 작성 (관련 테스트 0건 → 신규 작성)

| 테스트 파일 | 대상 | 주요 케이스 |
|-----------|------|-----------|
| audioSanitizer.test.ts | C1 | PII 구간 + 무음 구간 조합 시 마스킹 위치 정확성 |
| audioDecoderBridge.test.ts | C4 | `../` 차단, 절대경로 차단, 확장자 화이트리스트 |
| audioScanner.test.ts | C5 | 경계값 79→B, 80→A, 59→C, 60→B |

#### 2-3. 기존 테스트 실행
```bash
cd uncounted-app && npx vitest run
cd uncounted-api && npx vitest run
```

---

## 리스크 및 주의사항

1. **C1 PII 좌표 기준**: `piiIntervals`가 리샘플링 후 16kHz 기준일 가능성 높음 → 리샘플링 후 마스킹이 정확한 순서
2. **C2/C3 앱 내부 경로**: 디코딩 결과 WAV(`filesDir/stt_decoded/`)가 차단되지 않도록 허용 범위 포함 필수
3. **C5 동시 배포**: audioScanner만 수정 → app + admin 단독 배포 가능
4. **테스트 부재**: 최소 경계값 테스트 작성하여 회귀 방지

---

## 에이전트 소유권 요약

| 에이전트 | 담당 | 파일 | 복잡도 |
|---------|------|------|--------|
| Agent 1 (TS 보안) | C1 + C4 | audioSanitizer.ts (×2), audioDecoderBridge.ts | Medium |
| Agent 2 (Android 보안) | C2 + C3 | AudioDecoderPlugin.java | Medium |
| Agent 3 (등급 통일) | C5 | audioScanner.ts (×2) | Low |

모든 에이전트 Wave 1 병렬 실행 → Wave 2 검증.
