// backfill_peer_identity_from_title — sessions.title 파싱 → 상대 identity peer 적재
//
// 사전: uncounted-api 에 @supabase 미설치 시 `cd uncounted-api && npm install` (또는 worktree node_modules).
// 실행 (uncounted-root 루트에서):
//   node scripts/analysis/backfill_peer_identity_from_title.mjs           (dry-run, 카운트만)
//   node scripts/analysis/backfill_peer_identity_from_title.mjs --apply    (write — 별도 승인 후에만)
//
// ⚠ 이 스크립트의 파싱/정규화/키 로직은 src/lib/counterpartyKey.ts 의 거울(mirror)이다.
//    한쪽을 고치면 다른 쪽도 같이 고쳐 드리프트를 막을 것. (.mjs 는 .ts 를 직접 import 불가)
// ⚠ PII 보호: 실명·전화번호·title 원문을 절대 출력/로그하지 않는다. 카운트·해시 prefix 만.
// 설계/근거: scripts/analysis/relationship_identity_from_title_finding_20260526.md
//            C:\Users\user\.claude\plans\title-buzzing-nygaard.md

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { createHmac } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const DRY_RUN = !process.argv.includes('--apply')

// ── env ──────────────────────────────────────────────────────────
const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const SECRET = env.PHONE_HASH_SECRET
if (!SECRET) {
  console.error('PHONE_HASH_SECRET not configured in uncounted-api/.env')
  process.exit(1)
}
const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

// ── 파싱/정규화/키 (src/lib/counterpartyKey.ts 거울) ───────────────
const TITLE_RE = /^통화\s?녹음\s+(.+)_\d{6}_\d{6}$/
const TRAILING_HONORIFIC_RE = /(선생님|님|씨)$/
const PHONE_CONFIDENCE = 0.9
const NAME_CONFIDENCE = 0.5

function normalizePhone(phone) {
  if (!phone) return ''
  let n = phone.replace(/[^\d+]/g, '')
  if (n.startsWith('+82')) n = '0' + n.substring(3)
  else if (n.startsWith('82') && n.length >= 10) n = '0' + n.substring(2)
  if (/^1[45678]\d/.test(n)) return n
  if (!n.startsWith('0') && n.length >= 9) n = '0' + n
  return n
}

function parseCounterpartyTitle(title) {
  if (!title) return null
  const m = TITLE_RE.exec(String(title).trim())
  if (!m) return null
  const rawId = m[1].trim()
  return rawId.length > 0 ? rawId : null
}

function looksLikePhone(rawId) {
  if (!/^[\d+][\d+\-\s().]*$/.test(rawId)) return false
  return rawId.replace(/\D/g, '').length >= 7
}

function normalizeCounterpartyId(rawId) {
  if (looksLikePhone(rawId)) {
    return { kind: 'title_phone', normalizedId: normalizePhone(rawId), confidence: PHONE_CONFIDENCE }
  }
  const normalizedId = rawId
    .normalize('NFC')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(TRAILING_HONORIFIC_RE, '')
    .trim()
  return { kind: 'title_name', normalizedId, confidence: NAME_CONFIDENCE }
}

function buildKey(userId, parsed) {
  const identityHash = createHmac('sha256', SECRET)
    .update(`${userId}|${parsed.kind}|${parsed.normalizedId}`)
    .digest('hex')
  const phoneHash =
    parsed.kind === 'title_phone'
      ? createHmac('sha256', SECRET).update(parsed.normalizedId).digest('hex')
      : null
  return { kind: parsed.kind, identityHash, phoneHash, confidence: parsed.confidence }
}

function deriveFromTitle(userId, title) {
  const rawId = parseCounterpartyTitle(title)
  if (rawId === null) return null
  const parsed = normalizeCounterpartyId(rawId)
  if (parsed.normalizedId.length === 0) return null
  return buildKey(userId, parsed)
}

const maskedDisplayName = (h) => `상대#${h.slice(0, 8)}`

// ── 1) 전체 sessions 페이지네이션 조회 (id, user_id, title, peer_id) ─
async function fetchAllSessions() {
  const rows = []
  const PAGE = 1000
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb
      .from('sessions')
      .select('id, user_id, title, peer_id')
      .range(from, from + PAGE - 1)
    if (error) throw new Error(`sessions select failed: ${error.message}`)
    if (!data || data.length === 0) break
    rows.push(...data)
    if (data.length < PAGE) break
  }
  return rows
}

// ── 2) 분석 (카운트만) ──────────────────────────────────────────
async function main() {
  console.log(`\n=== peer identity from title ${DRY_RUN ? '[DRY-RUN]' : '[APPLY]'} ===`)
  const sessions = await fetchAllSessions()

  const stat = {
    total: sessions.length,
    matched: 0,
    skipped: 0,
    byKind: { title_phone: 0, title_name: 0 },
    peerIdNull: 0,
    peerIdSet: 0,
    distinctUsers: new Set(),
  }
  // identityHash → 기여 세션 수 (그룹 크기 분포용; 해시만, 원문 없음)
  const peerGroups = new Map()
  // upsert/링크용 (apply 시): identityHash → {userId, kind, phoneHash, confidence}
  const peerMeta = new Map()
  // sessionId → identityHash (apply 시 sessions.peer_id 연결용)
  const sessionToPeer = []

  for (const s of sessions) {
    if (s.user_id) stat.distinctUsers.add(s.user_id)
    const key = deriveFromTitle(s.user_id, s.title)
    if (!key) {
      stat.skipped++
      continue
    }
    stat.matched++
    stat.byKind[key.kind]++
    if (s.peer_id) stat.peerIdSet++
    else stat.peerIdNull++

    peerGroups.set(key.identityHash, (peerGroups.get(key.identityHash) || 0) + 1)
    if (!peerMeta.has(key.identityHash)) {
      peerMeta.set(key.identityHash, {
        userId: s.user_id,
        kind: key.kind,
        phoneHash: key.phoneHash,
        confidence: key.confidence,
      })
    }
    sessionToPeer.push({ sessionId: s.id, identityHash: key.identityHash })
  }

  const distinctPeers = peerGroups.size
  const distinctPhonePeers = [...peerMeta.values()].filter((m) => m.kind === 'title_phone').length
  const distinctNamePeers = [...peerMeta.values()].filter((m) => m.kind === 'title_name').length
  const groupSizes = [...peerGroups.values()].sort((a, b) => b - a)

  console.log(`전체 세션:           ${stat.total}`)
  console.log(`title 매칭:          ${stat.matched}`)
  console.log(`스킵(비매칭):        ${stat.skipped}`)
  console.log(`  ├ title_phone:     ${stat.byKind.title_phone}`)
  console.log(`  └ title_name:      ${stat.byKind.title_name}`)
  console.log(`distinct 상대(peer): ${distinctPeers}  (phone ${distinctPhonePeers} / name ${distinctNamePeers})`)
  console.log(`distinct user:       ${stat.distinctUsers.size}`)
  console.log(`peer_id 세팅 예정:   ${stat.peerIdNull}  (이미 세팅됨: ${stat.peerIdSet})`)
  console.log(`그룹 크기 상위(통수): ${groupSizes.slice(0, 10).join(', ')}${groupSizes.length > 10 ? ' …' : ''}`)

  if (DRY_RUN) {
    console.log(`\n[DRY-RUN] 변경 없음. 실제 적재는 --apply (별도 승인 후).`)
    return
  }

  // ── 3) APPLY (별도 승인 후에만) ──────────────────────────────
  // ① peers upsert (onConflict user_id,peer_identity_hash) → ② sessions.peer_id 연결
  console.log(`\n[APPLY] peers upsert + sessions.peer_id 연결 시작…`)
  const peerRows = [...peerMeta.entries()].map(([identityHash, m]) => ({
    user_id: m.userId,
    display_name: maskedDisplayName(identityHash),
    peer_identity_hash: identityHash,
    identity_kind: m.kind,
    identity_confidence: m.confidence,
    identity_source: 'title_parse',
    phone_hash: m.phoneHash,
  }))

  // upsert (id 는 DB default gen_random_uuid 로 생성 — 미공급)
  let upserted = 0
  const BATCH = 500
  for (let i = 0; i < peerRows.length; i += BATCH) {
    const chunk = peerRows.slice(i, i + BATCH)
    const { error } = await sb
      .from('peers')
      .upsert(chunk, { onConflict: 'user_id,peer_identity_hash', ignoreDuplicates: false })
    if (error) throw new Error(`peers upsert failed: ${error.message}`)
    upserted += chunk.length
  }
  console.log(`peers upsert: ${upserted}`)

  // identityHash → peers.id 재조회 (DB 생성 id 회수). hash 배열로 IN 조회.
  // 청크 200: hash 64hex × 200 ≈ 13KB — IN 절 URL 길이 한도 여유.
  const hashToId = new Map()
  const allHashes = [...peerMeta.keys()]
  const IN_CHUNK = 200
  for (let i = 0; i < allHashes.length; i += IN_CHUNK) {
    const chunk = allHashes.slice(i, i + IN_CHUNK)
    const { data, error } = await sb
      .from('peers')
      .select('id, peer_identity_hash')
      .in('peer_identity_hash', chunk)
    if (error) throw new Error(`peers id fetch failed: ${error.message}`)
    for (const r of data || []) hashToId.set(r.peer_identity_hash, r.id)
  }

  // sessions.peer_id 연결
  let linked = 0
  for (const { sessionId, identityHash } of sessionToPeer) {
    const peerId = hashToId.get(identityHash)
    if (!peerId) continue
    const { error } = await sb.from('sessions').update({ peer_id: peerId }).eq('id', sessionId)
    if (error) throw new Error(`sessions.peer_id update failed (${sessionId.slice(0, 8)}): ${error.message}`)
    linked++
  }
  console.log(`sessions.peer_id 연결: ${linked}`)
  console.log(`\n[APPLY] 완료.`)
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
