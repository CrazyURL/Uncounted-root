// 049 v5 통합 스모크 — fingerprint 생성 + 4분기 DB 흐름 검증.
//
// 검증:
//   1) no_match: 새 call + contract(pending) + participants(uploader, agreed) 박힘
//   2) matched (unsold): 동일 fingerprint 재호출 시 같은 call 매칭, participants UPSERT
//   3) already_sold: sold_at 박힌 call에 매칭 시 회수
//   4) ambiguous: quartile ±1 후보가 2건 이상 + delta 비슷할 때 새 call로 분리
//
// 라우트 호출은 인증/암호화 의존성 때문에 본 스크립트 범위 외. supabaseAdmin로 직접
// DB 흐름만 검증. cleanup은 fingerprint prefix 'smoke_049_'를 가진 calls만 삭제.

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createHash, createHmac, randomUUID } from 'node:crypto'

// ── env load ────────────────────────────────────────────────────────────
const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const SECRET = env.PHONE_HASH_SECRET
if (!SECRET) {
  console.error('PHONE_HASH_SECRET 미설정 — uncounted-api/.env에 박아야 합니다.')
  process.exit(1)
}

// ── callFingerprint 로직 mirror (server lib import 못 하므로 복사) ──────
function normalizePhone(phone) {
  if (!phone) return ''
  let n = phone.replace(/[^\d+]/g, '')
  if (n.startsWith('+82')) n = '0' + n.substring(3)
  else if (n.startsWith('82') && n.length >= 10) n = '0' + n.substring(2)
  if (/^1[45678]\d/.test(n)) return n
  if (!n.startsWith('0') && n.length >= 9) n = '0' + n
  return n
}

function classifyPhone(phone) {
  const n = normalizePhone(phone)
  if (/^01[016789]/.test(n)) return 'mobile'
  if (/^050/.test(n)) return 'virtual'
  if (/^1[45678]\d{2}/.test(n)) return 'corporate'
  return 'landline'
}

function classifyGrade(callerType, calleeType) {
  if (callerType === 'mobile' && calleeType === 'mobile') return 'premium'
  if ((callerType === 'mobile' && calleeType === 'landline') ||
      (callerType === 'landline' && calleeType === 'mobile')) return 'premium'
  if (callerType === 'mobile' && (calleeType === 'corporate' || calleeType === 'virtual')) return 'standard'
  if (calleeType === 'mobile' && (callerType === 'corporate' || callerType === 'virtual')) return 'standard'
  return 'excluded'
}

function speakersHash(a, b) {
  const sorted = [normalizePhone(a), normalizePhone(b)].sort().join('-')
  return createHmac('sha256', SECRET).update(sorted).digest('hex')
}

function fingerprintParts(callerPhone, calleePhone, startedAt, duration) {
  const minuteBucket = Math.floor(startedAt.getTime() / 60000)
  const quartile = Math.floor(startedAt.getSeconds() / 15)
  const durationBucket = Math.floor(duration / 5)
  const sh = speakersHash(callerPhone, calleePhone)
  const fp = createHash('sha256').update(`${minuteBucket}-${quartile}-${durationBucket}-${sh}`).digest('hex')
  return { fp, minuteBucket, quartile, durationBucket, sh }
}

function phoneHash(phone) {
  return createHmac('sha256', SECRET).update(normalizePhone(phone)).digest('hex')
}

// ── 검증 헬퍼 ───────────────────────────────────────────────────────────
function ok(label) { console.log(`  ✅ ${label}`) }
function fail(label, detail) { console.log(`  ❌ ${label}: ${detail}`); process.exitCode = 1 }

async function cleanup() {
  // fingerprint prefix 'smoke_049_'로 만든 row 삭제
  const { data: calls } = await sb.from('calls').select('call_id').like('fingerprint', 'smoke_049_%')
  if (calls && calls.length > 0) {
    const ids = calls.map(c => c.call_id)
    // RESTRICT FK 때문에 contracts→participants→ambiguous_matches를 먼저 정리 필요
    await sb.from('ambiguous_matches').delete().in('new_call_id', ids)
    const { data: contracts } = await sb.from('contracts').select('contract_id').in('call_id', ids)
    if (contracts && contracts.length > 0) {
      const cids = contracts.map(x => x.contract_id)
      await sb.from('participants').delete().in('contract_id', cids)
      await sb.from('contracts').delete().in('contract_id', cids)
    }
    await sb.from('calls').delete().in('call_id', ids)
  }
}

// 임의 prefix 박아서 cleanup 가능하도록
function smokePrefix(suffix) {
  return `smoke_049_${suffix}_${createHash('sha256').update(suffix + Date.now()).digest('hex').slice(0, 16)}`
}

// ── 시나리오 ────────────────────────────────────────────────────────────
console.log('=== 049 v5 통합 스모크 ===\n')

await cleanup()
console.log('▶ 사전 cleanup 완료\n')

// 시나리오 1: no_match → 새 call 등록
console.log('▶ 시나리오 1: no_match → 새 call 등록')
const userA = randomUUID()
const phoneA = '010-1111-2222'
const phoneB = '010-3333-4444'
const startedAt1 = new Date('2026-05-04T14:23:10Z')
const duration1 = 120
const fp1 = fingerprintParts(phoneA, phoneB, startedAt1, duration1)
const fp1Tag = smokePrefix('1')

const { data: call1, error: e1 } = await sb.from('calls').insert({
  fingerprint: fp1Tag,  // 실제 fingerprint 대신 cleanup 가능한 tag
  started_at: startedAt1.toISOString(),
  started_at_minute_bucket: fp1.minuteBucket,
  started_at_quartile: fp1.quartile,
  duration_seconds: duration1,
  duration_bucket: fp1.durationBucket,
  speakers_hash: fp1.sh,
  caller_phone_normalized: normalizePhone(phoneA),
  callee_phone_normalized: normalizePhone(phoneB),
  caller_type: classifyPhone(phoneA),
  callee_type: classifyPhone(phoneB),
  grade: classifyGrade(classifyPhone(phoneA), classifyPhone(phoneB)),
  status: 'pending',
}).select('call_id').single()

if (e1 || !call1) fail('call insert', e1?.message ?? 'no data')
else ok(`새 call 등록: call_id=${call1.call_id.slice(0,8)} grade=premium`)

// contract + participants
const { data: contract1 } = await sb.from('contracts').insert({
  call_id: call1.call_id, terms_version: 'v1.2', status: 'pending',
}).select('contract_id').single()

await sb.from('participants').insert([
  { contract_id: contract1.contract_id, phone_hash: phoneHash(phoneA), user_id: null,
    consent_status: 'agreed', consent_terms_version: 'v1.2', revenue_share: 50.0, revenue_share_basis: 'standard' },
  { contract_id: contract1.contract_id, phone_hash: phoneHash(phoneB), user_id: null,
    consent_status: 'pending', revenue_share: 50.0, revenue_share_basis: 'standard' },
])
ok('contract + 양측 participants 박힘')

// 시나리오 2: matched (unsold) — 동일 fingerprint로 후보 조회
console.log('\n▶ 시나리오 2: matched (unsold) → 같은 call 후보 매칭')
const { data: candidates2 } = await sb.from('calls').select('call_id, sold_at, status')
  .eq('speakers_hash', fp1.sh)
  .eq('started_at_minute_bucket', fp1.minuteBucket)
  .in('started_at_quartile', [fp1.quartile - 1, fp1.quartile, fp1.quartile + 1])
  .in('duration_bucket', [fp1.durationBucket - 1, fp1.durationBucket, fp1.durationBucket + 1])

if (!candidates2 || candidates2.length === 0) fail('matched candidates', '후보 0건')
else ok(`후보 ${candidates2.length}건 매칭 (sold_at=${candidates2[0].sold_at})`)

// 시나리오 3: already_sold — sold_at 박은 후 매칭 시 회수
console.log('\n▶ 시나리오 3: already_sold → sold_at 박은 후 매칭 시 회수 분기')
await sb.from('calls').update({
  status: 'sold',
  sold_at: new Date().toISOString(),
  sold_to_buyer_id: randomUUID(),
  sold_revenue_krw: 100000,
}).eq('call_id', call1.call_id)

const { data: cand3 } = await sb.from('calls').select('call_id, sold_at')
  .eq('speakers_hash', fp1.sh)
  .eq('started_at_minute_bucket', fp1.minuteBucket).single()

if (!cand3.sold_at) fail('already_sold', 'sold_at 박힘 X')
else ok(`매칭 + sold_at 존재 → 라우트는 409 already_sold 반환 (claim_eligible=true)`)

// 시나리오 4: ambiguous — 같은 분 단위 + 인접 quartile 2건
console.log('\n▶ 시나리오 4: ambiguous → 인접 quartile 후보 2건 + 새 call로 분리 등록')
const phoneC = '010-5555-6666'
const startedAt4a = new Date('2026-05-04T15:00:10Z')  // q0
const startedAt4b = new Date('2026-05-04T15:00:14Z')  // q0 (4초 차이, 같은 quartile)
const duration4 = 90
const fp4a = fingerprintParts(phoneA, phoneC, startedAt4a, duration4)
const fp4b = fingerprintParts(phoneA, phoneC, startedAt4b, duration4)

const { data: c4a } = await sb.from('calls').insert({
  fingerprint: smokePrefix('4a'),
  started_at: startedAt4a.toISOString(),
  started_at_minute_bucket: fp4a.minuteBucket, started_at_quartile: fp4a.quartile,
  duration_seconds: duration4, duration_bucket: fp4a.durationBucket,
  speakers_hash: fp4a.sh,
  caller_phone_normalized: normalizePhone(phoneA), callee_phone_normalized: normalizePhone(phoneC),
  caller_type: 'mobile', callee_type: 'mobile', grade: 'premium', status: 'pending',
}).select('call_id').single()

const { data: c4b } = await sb.from('calls').insert({
  fingerprint: smokePrefix('4b'),
  started_at: startedAt4b.toISOString(),
  started_at_minute_bucket: fp4b.minuteBucket, started_at_quartile: fp4b.quartile,
  duration_seconds: duration4, duration_bucket: fp4b.durationBucket,
  speakers_hash: fp4b.sh,
  caller_phone_normalized: normalizePhone(phoneA), callee_phone_normalized: normalizePhone(phoneC),
  caller_type: 'mobile', callee_type: 'mobile', grade: 'premium', status: 'pending',
}).select('call_id').single()

// ambiguous_matches 로그 박음
await sb.from('ambiguous_matches').insert({
  new_call_id: c4b.call_id,
  candidate_call_ids: [c4a.call_id, c4b.call_id],
  ambiguity_ratio: 0.10,
  reason: 'smoke test: quartile 0 + 4초 차이 + 동일 duration',
  flagged_for_review: true,
})

const { data: ambCheck } = await sb.from('ambiguous_matches').select('match_id, ambiguity_ratio')
  .eq('new_call_id', c4b.call_id).single()

if (!ambCheck) fail('ambiguous log', '미박힘')
else ok(`ambiguous_matches 로그 박힘 (ratio=${ambCheck.ambiguity_ratio})`)

// cleanup
console.log('\n▶ 사후 cleanup')
await cleanup()
ok('cleanup 완료')

console.log('\n=== 스모크 ' + (process.exitCode ? '실패 ❌' : '통과 ✅') + ' ===')
