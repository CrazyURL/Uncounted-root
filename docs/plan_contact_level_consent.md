# Contact-level Consent 도입 (Option B) — 다음 세션 plan

> 작성: 2026-05-04 (Sprint 5b 직후, OAuth + SMS + 자산 탭 4 fix 완료 후)
> 의사결정: 사용자가 "한 번 동의했으면 됐지. 과거/미래 통화 다 적용"으로 B 결정.

## 1. Context

현재 시스템:
- 동의 단위 = **세션(통화) 단위**
- [sendInvitations.ts:46](../uncounted_client/src/lib/sendInvitations.ts#L46): `createInvitation(sessionIds[0], ...)` — invitation token이 그룹의 첫 세션 1개에만 묶임
- 받는 사람이 동의 링크 누르면 그 한 건만 'both_agreed'
- 결과: "파파" 411건 통화 중 178건만 동의 (관찰됨), 나머지 233건과 미래 신규 통화는 동의 외

사용자 멘탈 모델(올바른 product 설계):
- 동의 단위 = **연락처(contact) 단위**
- 한 번 "파파"가 동의했으면, 과거 + 미래의 모든 통화 자동 적용
- 동의 철회 시 모든 통화에서 회수

법무 컨설팅 필요: PIPA 포괄동의 금지 원칙 vs 미래 통화 동의 — 받는 사람이 명확히 인지/동의했다면 가능 (invitation 메시지 + peer.html 표기로 처리).

## 2. 영향 범위

### Backend (uncounted-api)

새 테이블/컬럼:
- `peer_consents` 테이블 추가
  - `id` (UUID PK)
  - `user_id` (소유자, FK auth.users)
  - `peer_phone_hash` (HMAC-SHA256(피어 전화번호) — PII 회피)
  - `peer_display_name` (소유자가 라벨링한 상대방 이름, optional)
  - `status` ('pending' / 'agreed' / 'declined' / 'withdrawn')
  - `agreed_at` / `withdrawn_at` (timestamps)
  - `agreed_by_ip` (법무: 동의자 식별용)
  - `invitation_id` (FK consent_invitations, 어떤 초대가 발생시킨 동의인지)
  - UNIQUE (user_id, peer_phone_hash) — 한 user × 한 peer 당 1 row

새 엔드포인트:
- `POST /api/peer-consent/agree` — 받는 사람의 peer.html 동의 시 호출
  - body: `{ token, agreement_full: true }`
  - 동작: token으로 invitation 조회 → user_id + peer_phone_hash 식별 → peer_consents UPSERT (status='agreed')
- `POST /api/peer-consent/withdraw` — 받는 사람이 언제든 철회
- `GET /api/peer-consent/status?peer_phone_hash=...` — 소유자 측 조회 (optional, polling)

세션 동의 상태 도출:
- 기존 `sessions.consent_status` 컬럼은 유지 (legacy compat)
- 새로 도입: 세션 조회 시 join `peer_consents on (user_id, peer_phone_hash)` →
  consent='agreed'면 해당 user의 그 peer와의 모든 sessions를 'both_agreed'로 동적 도출
- 또는: peer_consents UPSERT 시 backend trigger로 sessions.consent_status를 일괄 업데이트 (storage 단순화 vs join 비용 trade-off)

마이그레이션:
- 기존 178건 'both_agreed' 세션 → 그 user의 peer_phone_hash 기준 peer_consents row 생성
- 같은 peer의 나머지 233건도 자동 promote

### Frontend (uncounted_client)

`buildInvitationForGroup` 변경:
- invitation에 sessionId 1개가 아닌 **peer 식별자** (peer_phone_hash 또는 group.name 기반) 박음
- token이 contact 전체를 대표

InviteListPage 변경:
- "발송 확인" 후 confirmSent → invitation.status='sent' (현재대로)
- 받는 사람 동의 → backend가 peer_consents agree 처리 → 다음 sync에서 그 contact의 모든 세션이 agreed로 표시

AssetsPage 변경:
- groupToFilterValue: 그룹의 first session의 peer_consent status 보고 그룹 전체 동의 상태 판정 (단일 truth source)
- ContactCard 부분 카운트 표기 ({178/411}) 제거 — 항상 100% 또는 0%

peer.html (uncounted-web 별도 git repo):
- 동의 화면 메시지: "OOO님의 모든 통화 (과거 + 앞으로의 통화)에 대한 데이터 동의"
- 철회 옵션 노출 (언제든 철회 가능)

### 메시지 텍스트

invitation 텍스트 (`shareInvitation`, `buildInvitationForGroup`):
- 현재: "{callDescription}의 양쪽 동의를 요청드립니다"
- 변경: "{senderName}님과의 모든 통화 데이터 (과거 + 앞으로의 통화) 동의를 부탁드립니다. 언제든 철회 가능합니다."

법적 명확성:
- 동의 화면(peer.html)에 "동의 = 과거 + 미래 모든 통화에 적용" 명시
- 철회 절차 별도 박음

## 3. 작업 순서

### Phase 1 — 백엔드 + DB 마이그레이션 (가장 무거움)
1. `peer_consents` 테이블 마이그레이션 작성 + 적용 (dev → live)
2. `POST /api/peer-consent/agree` + `withdraw` 엔드포인트
3. 기존 178건 → peer_consents 마이그레이션 (one-shot script)
4. sessions 동의 상태 join 로직 또는 trigger 추가

### Phase 2 — 법무 검토 (병렬 진행 가능)
1. invitation 메시지 + peer.html 동의 화면 텍스트 검토
2. PIPA 포괄동의 금지 원칙과의 정합성 확인
3. 철회 절차 명문화

### Phase 3 — 프론트 통합
1. invitation 발급 흐름 조정 (token이 contact 단위로 동작)
2. InviteListPage 메시지 텍스트 변경
3. AssetsPage 부분 카운트 표시 단순화 (전체/없음 binary)
4. peer.html 변경 (uncounted-web 별도 PR)

### Phase 4 — 검증
1. dev 환경에서 새 invitation 발급 → 동의 → 모든 sessions agreed 확인
2. 마이그레이션된 178건 → 같은 peer의 233건도 agreed로 보이는지 확인
3. 철회 → 모두 unagreed로 회수

## 4. Risks & Open Questions

| 리스크 | 영향 | 완화 |
|---|---|---|
| PIPA "포괄동의 금지" 충돌 | 사업 자체 중단 가능 | 법무 검토 우선. 받는 사람 명시 동의 + 언제든 철회로 회피 가능 추정 |
| peer_phone_hash 충돌 | 다른 peer가 같은 number 가진 경우 (재발급 등) — 잘못 매칭 | 시간 창 + invitation token 추가 검증 |
| 마이그레이션 시 동의 상태 부정확 매핑 | 178건의 backing session들이 어떤 peer와 매칭되는지 정확한 데이터 필요 | 마이그레이션 전 explorer query로 검증 |
| 받는 사람이 철회했을 때 이미 sold 데이터 | 매수자 측 데이터 회수 불가 | 철회 = 미래 거래 차단만 (과거 거래 매수자 보유 데이터는 회수 X). 약관 명시 |

## 5. 본 plan에서 다루지 않는 것 (별도 트랙)

- 매수자 측 데이터 보유/회수 절차 (우리 시스템 외)
- 피어 간 동의 충돌 (A는 동의, B는 거절) 복잡 케이스
- 그룹 통화 / 회의 통화 (3자 이상) 동의

## 6. 시작 신호

다음 세션에서 이 plan을 진입점으로:
1. DB 마이그레이션 SQL 초안 작성부터
2. 또는 법무 컨설팅 사전 자료 준비부터
