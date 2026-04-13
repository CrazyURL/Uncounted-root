# Voice API 큐 안정화 3종 패치

상태: 구현 중
타입: bugfix
생성일: 2026-04-13
관련 문서: [uncounted-docs/voice-api/큐_병목_및_폴링_타임아웃_이슈.md](uncounted-docs/voice-api/큐_병목_및_폴링_타임아웃_이슈.md)

## 배경

2026-04-13 운영 중 Android 클라이언트에서 `[sttEngine:error] ... 서버 STT 처리 실패`가 반복 발생. 분석 결과:

1. Voice API의 GPU Semaphore(1) + 긴 세션(30분 청크) Head-of-Line blocking으로 짧은 세션이 큐 뒤에 쌓임
2. 서버가 "대기 중"과 "처리 중"을 구분하지 않고 모두 `processing`으로 응답
3. Android 폴링 타임아웃(현재 600초) 도달 → FAILED 처리 → 재업로드 → 큐가 더 길어짐 → 무한 루프
4. 서버에 큐 depth 제한이 없어 요청이 무한 수용됨

**본 패치의 목적**: 하드웨어(RTX 4060 Ti 8GB)와 기존 아키텍처를 건드리지 않고, **큐 폭주만** 막아 안정성 확보.

## 확정된 결정값

| 항목 | 값 |
|---|---|
| Android polling timeout | **900초** (15분) |
| 서버 `MAX_ACTIVE_JOBS` | **5** |
| 서버 `Retry-After` (503 응답) | **30초** (HTTP 헤더 + JSON body 양쪽) |
| Android 일반 실패 쿨다운 | **10초** 고정 |
| Android 503 쿨다운 | **서버 Retry-After 값 존중** (fallback 30초) |

## Phase 1 — Voice API 서버 큐 depth 제한 (503)

### 변경 파일
- `uncounted-voice-api/app/core/job_store.py` — `active_count()` 추가
- `uncounted-voice-api/app/config.py` — `MAX_ACTIVE_JOBS` 환경변수 (기본 5)
- `uncounted-voice-api/app/routers/transcribe.py` — 503 백프레셔
- `uncounted-voice-api/tests/test_queue_depth.py` — 신규 테스트

### 구현 내역

**1-A. `JobStore.active_count()` 메서드**
```python
def active_count(self) -> int:
    """pending + processing 상태인 작업 수 (백프레셔용)."""
    with self._lock:
        return sum(
            1 for t in self._tasks.values()
            if t.status in (TaskStatus.pending, TaskStatus.processing)
        )
```

**1-B. config.MAX_ACTIVE_JOBS**
```python
MAX_ACTIVE_JOBS = int(os.getenv("MAX_ACTIVE_JOBS", "5"))
```

**1-C. POST /transcribe 진입부**

확장자 검증 직후, 파일 저장 전에:
```python
active = job_store.active_count()
if active >= config.MAX_ACTIVE_JOBS:
    logger.warning("[queue-full] active=%d limit=%d reject", active, config.MAX_ACTIVE_JOBS)
    raise HTTPException(
        status_code=503,
        detail={
            "error": "queue_full",
            "active_jobs": active,
            "max_active_jobs": config.MAX_ACTIVE_JOBS,
            "retry_after_sec": 30,
        },
        headers={"Retry-After": "30"},
    )
```

**1-D. 테스트**
- 3개 활성 task + `MAX_ACTIVE_JOBS=2` monkeypatch → 신규 POST 503 확인
- 503 응답에 `Retry-After: 30` 헤더와 `detail.retry_after_sec=30` 확인

## Phase 2 — Android polling timeout 900초로 상향

### 변경 파일
- `uncounted-app/android/app/src/main/java/com/uncounted/app/service/JobPipelineExecutor.java`

### 구현 내역

상수 추출 + 15분 설정:
```java
private static final long POLL_INTERVAL_MS = 2000L;
private static final long POLL_TIMEOUT_MS = 15 * 60 * 1000L; // 15분 (900초)

// 호출부
JSONObject result = voiceApiClient.pollResult(taskId, POLL_INTERVAL_MS, POLL_TIMEOUT_MS, ...);
```

## Phase 3 — Android 실패 쿨다운 (재업로드 차단)

### 변경 파일
- `uncounted-app/android/app/src/main/java/com/uncounted/app/api/VoiceApiClient.java` — `VoiceApiException.retryAfterSec` 추가, 503 파싱
- `uncounted-app/android/app/src/main/java/com/uncounted/app/service/SttProcessingService.java` — 쿨다운 맵 + ENQUEUE 필터
- `uncounted-app/android/app/src/main/java/com/uncounted/app/service/JobPipelineExecutor.java` — `onJobError` 콜백에 retryAfterSec 전달

### 구현 내역

**3-A. VoiceApiException에 retryAfterSec 필드**
```java
public static class VoiceApiException extends Exception {
    private final ErrorType errorType;
    private final long retryAfterSec; // 0 = unspecified
    // getters, constructors
}
```

`classifyHttpError(code=503)`에서:
- `Retry-After` 헤더 파싱 (초 단위 숫자)
- fallback: JSON body `detail.retry_after_sec`
- fallback: 30초

**3-B. 쿨다운 맵 (SttProcessingService)**
```java
private static final long DEFAULT_COOLDOWN_MS = 10_000L;
private final ConcurrentHashMap<String, Long> failureCooldownUntil = new ConcurrentHashMap<>();
```

**3-C. onJobError에서 쿨다운 기록**
```java
@Override
public void onJobError(String sessionId, int jobIndex, int totalJobs, String error, long retryAfterSec) {
    long cooldownMs = retryAfterSec > 0 ? retryAfterSec * 1000L : DEFAULT_COOLDOWN_MS;
    failureCooldownUntil.put(sessionId, System.currentTimeMillis() + cooldownMs);
    Log.w(TAG, "[cooldown] " + sessionId + " | " + cooldownMs + "ms | reason=" + error);
    // 기존 broadcastState / stt:error 발행
}
```

**3-D. ENQUEUE 필터 (SttProcessingService)**
```java
long now = System.currentTimeMillis();
List<Job> filtered = new ArrayList<>();
int skipped = 0;
for (Job job : parsedJobs) {
    Long until = failureCooldownUntil.get(job.sessionId);
    if (until != null && until > now) {
        Log.w(TAG, "[ENQUEUE] cooldown | " + job.sessionId + " | 남은=" + (until - now) + "ms");
        skipped++;
        continue;
    }
    if (until != null) failureCooldownUntil.remove(job.sessionId);
    filtered.add(job);
}
if (skipped > 0) Log.w(TAG, "[ENQUEUE] " + skipped + "개 세션 쿨다운으로 스킵");
```

## 의존성

```
Phase 1 (서버)    ← 독립, 먼저 배포 가능
Phase 2 (timeout) ← 독립
Phase 3 (cooldown) ← Phase 2와 같은 Android 빌드에 묶음. VoiceApiException 필드 추가로 JobPipelineExecutor와 인터페이스 공동 수정.
```

## 검증 계획

### Phase 1
```bash
cd uncounted-voice-api && source venv/bin/activate
python -m pytest -q tests/test_queue_depth.py
# 기존 테스트도 깨지지 않는지
python -m pytest -q
```

### Phase 2 & 3
- 빌드: `cd uncounted-app && npm run build:dev && npm run android:dev:debug`
- logcat에서 `POLL_TIMEOUT_MS`, `[cooldown]`, `[ENQUEUE] cooldown` 로그 확인
- 일부러 서버 셧다운 → 실패 유발 → 쿨다운 동작 확인

## 리스크

| 리스크 | 완화 |
|---|---|
| `MAX_ACTIVE_JOBS=5`가 너무 빡빡해서 정상 트래픽 막힘 | 환경변수화. 운영 로그 보고 조정 |
| Android 503 분류 로직 버그 | pytest로 서버 응답 먼저 검증, Android 로깅으로 교차 확인 |
| 쿨다운 맵 무한 성장 | 쿨다운 만료 시 즉시 제거, 동시 세션 수 제한적이라 메모리 걱정 없음 |
| 서버 재시작 시 Android가 404 → 즉시 재업로드 | Phase 3 쿨다운이 404도 동일하게 처리 |

## Out of Scope

- GPU Semaphore(1) 변경 / batch_size 상향 / compute_type 변경 (별도 성능 개선 작업)
- 큐 상태 `queued`/`processing` 구분 응답 스키마
- 긴 세션 별도 큐 분리 (Head-of-Line 완화)
- 측정 로그 추가 (단계별 타이밍, VRAM 피크)

이것들은 **성능 개선** 범주이며, 본 패치는 **안정성 확보**만 목적. 성능 개선은 본 패치 배포 후 별도 스프린트.

## 예상 소요

| Phase | 시간 |
|---|---|
| 1 (서버) | 1~2시간 |
| 2 (Android timeout) | 30분 |
| 3 (Android cooldown) | 2~3시간 |
| 검증 | 1시간 |
| **합계** | **4~6시간** |

---

## 이전 계획

<details>
<summary>음성 처리 파이프라인 서버 전환 실행 계획 (2026-04-10, 완료)</summary>

상태: Phase 1 완료 (코드 리뷰 + 검증 통과, 커밋 대기)
타입: feature
생성일: 2026-04-10
완료일: 2026-04-10
Voice API Swagger: http://183.96.42.95:8000/docs

### 배경

온디바이스(Android)에서 Moonshine-ko ONNX 기반 STT + 에너지/MFCC 기반 화자분리를 수행해왔으나,
성능 및 정합성 부족으로 GPU 서버(WhisperX large-v3 + pyannote)로 전환한다.

### 확정 사항

- Phase 1: Voice API 클라이언트(TS+Java) + 어댑터 + 네이티브 분기
- Phase 2: 설정 UI + 폴백 메커니즘
- Phase 3: 온디바이스 ONNX 선택 로딩 + 자동 전환

변경 파일 주요 항목:
- `uncounted-app/src/lib/api/voiceApi.ts` (신규)
- `uncounted-app/src/lib/voiceApiAdapter.ts` (신규)
- `android/.../api/VoiceApiClient.java` (신규)
- `android/.../service/SttProcessingService.java` (서버 모드 분기)
- `android/.../service/Phase4UtteranceUploader.java` (`executeForServerResult()`)
- `uncounted-app/src/lib/sttEngine.ts` (SttMode 확장)
- `uncounted-app/src/lib/postSttPipeline.ts` (source: 'server')
- `android/local.properties` (VOICE_API_URL)

완료된 전환 내역은 `uncounted-app/.claude/rules/native-stt.md`에 반영됨.

</details>
