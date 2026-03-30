# A2 파일 스캔 & 품질 분석 — HIGH 15건 버그픽스 실행계획

상태: 완료
타입: bugfix
생성일: 2026-03-30
근거 문서: uncounted-docs/bugfix/A2-file-scan-quality-review.md
멀티모델 자문: Gemini → Claude planner 검증

## 이전 계획

> CRITICAL 5건 버그픽스 (2026-03-30) — 완료. 커밋 88ff32a (app), 4a97180 (admin).

---

## 목표

HIGH 15건 수정. H5는 C4 수정으로 이미 해결 → 실질 14건.

## 사전 확인 결과

- H5: C4 수정에서 `validateAudioPath()` 확장자 화이트리스트 추가 완료 → **추가 작업 불요**
- H4: 68행은 CRITICAL에서 이미 경로 미노출 처리. 134행만 수정 필요
- AudioDecoderPlugin.java: CRITICAL 수정(88ff32a) 반영 상태에서 작업

---

## 에이전트 분배

### Agent-Native (Java 7건: H3, H4, H6, H7, H8, H9, H10)

| ID | 파일 | 작업 | 복잡도 |
|----|------|------|--------|
| H3 | AudioDecoderPlugin.java | 디코딩 크기/시간/출력 제한 | High |
| H4 | AudioDecoderPlugin.java:134 | 에러 메시지 경로 제거 | Low |
| H6 | AudioDecoderPlugin.java:139-146 | checkWavExists stt_decoded/ 제한 | Medium |
| H7 | EmbeddingExtractor.java:577-605 | ONNX SHA-256 체크섬 | Medium |
| H8 | OnnxSttRunner.java:1143-1173 | ONNX SHA-256 체크섬 (H7 패턴) | Medium |
| H9 | WavParser.java:73 | chunkSize 음수 검사 | Low |
| H10 | WavParser.java:205 | long 산술 오버플로우 방지 | Low |

### Agent-Frontend (TS 6건: H1, H2, H12, H13, H14, H15)

| ID | 파일 | 작업 | 복잡도 |
|----|------|------|--------|
| H1 | audioFileLoader.ts:14-19 | path 경로 검증 추가 | Low |
| H2 | audioFileLoader.ts:18-27 | console.log 5개 제거 | Low |
| H12 | audioEnvironmentCollector.ts:88-92 | 도메인 불일치 방어 | Low |
| H13 | audioDedupe.ts:14-22 | localStorage 런타임 검증 | Medium |
| H14 | audioDedupe.test.ts (신규) | 테스트 작성 | Medium |
| H15 | scanEngine.ts + AutoScanOnLaunch.tsx | 동시 스캔 잠금 | Medium |

### Agent-API (1건: H11)

| ID | 파일 | 작업 | 복잡도 |
|----|------|------|--------|
| H11 | uncounted-api sessions.ts | qaScore 범위 검증 (0-100 클램핑) | Low |

---

## Wave 실행 계획

### Wave 1: 3 에이전트 병렬
- Agent-Native: H9, H10 (WavParser) → H4, H6 (AudioDecoderPlugin) → H3 (DoS 방지)
- Agent-Frontend: H1, H2 (audioFileLoader) → H12 (도메인) → H13 (캐시 검증) → H15 (잠금)
- Agent-API: H11 (qaScore 검증)

### Wave 2: 나머지 + 테스트
- Agent-Native: H7, H8 (ONNX 체크섬 — SHA-256 해시 계산 필요)
- Agent-Frontend: H14 (audioDedupe.test.ts 작성)

### Wave 3: 검증
- 빌드 검증 (tsc --noEmit, gradlew)
- 기존 테스트 실행
- 신규 테스트 실행

---

## 검증 체크리스트

- [ ] H1: `loadAudioArrayBuffer('../../../etc/passwd')` → 에러 throw
- [ ] H2: audioFileLoader.ts에 console.log 0개
- [ ] H3: 500MB 초과 파일 reject
- [ ] H4: call.reject()에 파일 경로 미포함
- [ ] H5: (확인만) validateAudioPath() 동작 확인
- [ ] H6: checkWavExists — stt_decoded 외부 경로 → exists: false
- [ ] H7, H8: 모델 변조 시 SecurityException
- [ ] H9: chunkSize=-1 WAV → null 반환
- [ ] H10: frameCount*frameSize > MAX_INT → IOException
- [ ] H11: qaScore=999 → 100 클램핑
- [ ] H12: qualityFactor=85 → 자동 변환
- [ ] H13: 악의적 JSON → 빈 Map 반환
- [ ] H14: audioDedupe.test.ts 통과
- [ ] H15: scanDeviceAudio() 동시 2회 → 1회만 실행

---

## 리스크

1. **AudioDecoderPlugin.java 밀집**: H3+H4+H6이 동일 파일 — 반드시 단일 에이전트
2. **ONNX SHA-256 해시값**: 현재 모델 파일에서 실제 해시 계산 필요 → 에이전트가 런타임 계산
3. **H11 역호환**: API 변경은 기존 앱과 역호환 필수 (클램핑만 추가)
4. **H15 잠금 패턴**: Promise 기반 잠금 → 에러 시 잠금 해제 보장(finally) 필수
