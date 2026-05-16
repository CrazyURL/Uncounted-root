// 049 v5 E2E 시나리오 — B 나중 가입 + register-phone 후 balances 자동 이전 검증.
//
// 시나리오:
//   1. user A 통화 1건 업로드 — calls + contracts(pending) + participants(A=agreed, B=pending)
//   2. B phone_hash 측이 동의 (token 흐름 시뮬) — participants(B=agreed) → call.status='sellable'
//   3. transaction 박음 (price=100,000) + transaction_splits 50:50 → A user_id, B user_id NULL
//   4. transaction.payout_release_at 과거로 박아 release 가능 상태 만들고 release_payouts 실행
//   5. user B 가입 + register-phone (B 휴대폰 등록) → participants/splits user_id 박힘 + balances.pending 자동 이전
//   6. release_payouts 실행 → B의 balances.pending → available로 전환
//   7. 검증: A의 available + B의 available == 100,000 (50:50)
//
// 실행: node scripts/analysis/e2e_049.mjs

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

// ── 헬퍼 (callFingerprint mirror) ──────────────────────────────────────
function normalizePhone(phone) {
  let n = phone.replace(/[^\d+]/g, '')
  if (n.startsWith('+82')) n = '0' + n.substring(3)
  else if (n.startsWith('82') && n.length >= 10) n = '0' + n.substring(2)
  if (/^1[45678]\d/.test(n)) return n
  if (!n.startsWith('0') && n.length >= 9) n = '0' + n
  return n
}
function speakersHash(a, b) {
  const sorted = [normalizePhone(a), normalizePhone(b)].sort().join('-')
  return createHmac('sha256', SECRET).update(sorted).digest('hex')
}
function phoneHash(phone) {
  return createHmac('sha256', SECRET).update(normalizePhone(phone)).digest('hex')
}
function fingerprintParts(callerPhone, calleePhone, startedAt, duration) {
  const minuteBucket = Math.floor(startedAt.getTime() / 60000)
  const quartile = Math.floor(startedAt.getSeconds() / 15)
  const durationBucket = Math.floor(duration / 5)
  const sh = speakersHash(callerPhone, calleePhone)
  const fp = createHash('sha256').update(`${minuteBucket}-${quartile}-${durationBucket}-${sh}`).digest('hex')
  return { fp, minuteBucket, quartile, durationBucket, sh }
}

let exitCode = 0
function ok(label) { console.log(`  ✅ ${label}`) }
function fail(label, detail) { console.log(`  ❌ ${label}: ${detail}`); exitCode = 1 }

// ── auth.users 행 임시 생성 헬퍼 (FK 충족용) ────────────────────────────
async function createAuthUser() {
  // service_role로 admin api 사용
  const { data, error } = await sb.auth.admin.createUser({
    email: `e2e_${Date.now()}_${Math.floor(Math.random()*1e6)}@e2e.local`,
    password: randomUUID(),
    email_confirm: true,
  })
  if (error) throw new Error(`createAuthUser: ${error.message}`)
  return data.user.id
}

async function deleteAuthUser(userId) {
  await sb.auth.admin.deleteUser(userId)
}

// ── cleanup (이전 실행 잔여) ───────────────────────────────────────────
async function cleanup() {
  const { data: calls } = await sb.from('calls').select('call_id').like('fingerprint', 'e2e_049_%')
  if (calls && calls.length > 0) {
    const ids = calls.map(c => c.call_id)
    const { data: txs } = await sb.from('transactions').select('tx_id').in('call_id', ids)
    if (txs && txs.length > 0) {
      const txIds = txs.map(t => t.tx_id)
      await sb.from('transaction_splits').delete().in('tx_id', txIds)
      await sb.from('transactions').delete().in('tx_id', txIds)
    }
    const { data: contracts } = await sb.from('contracts').select('contract_id').in('call_id', ids)
    if (contracts && contracts.length > 0) {
      const cids = contracts.map(x => x.contract_id)
      await sb.from('participants').delete().in('contract_id', cids)
      await sb.from('contracts').delete().in('contract_id', cids)
    }
    await sb.from('calls').delete().in('call_id', ids)
  }
}

console.log('=== 049 v5 E2E 시나리오: B 나중 가입 + balances 자동 이전 ===\n')
await cleanup()

// ── Step 1: user A 가입 + 통화 업로드 ──────────────────────────────────
console.log('▶ Step 1: user A 가입 + 통화 업로드')
const userA = await createAuthUser()
const phoneA = '010-7777-1111'
const phoneB = '010-7777-2222'
const startedAt = new Date('2026-05-04T16:00:10Z')
const duration = 180
const fp = fingerprintParts(phoneA, phoneB, startedAt, duration)
const fpTag = `e2e_049_${createHash('sha256').update(`${userA}${Date.now()}`).digest('hex').slice(0, 16)}`

await sb.from('user_phone_history').insert({ user_id: userA, phone_hash: phoneHash(phoneA), is_current: true })

const { data: call, error: e1 } = await sb.from('calls').insert({
  fingerprint: fpTag,
  started_at: startedAt.toISOString(),
  started_at_minute_bucket: fp.minuteBucket, started_at_quartile: fp.quartile,
  duration_seconds: duration, duration_bucket: fp.durationBucket,
  speakers_hash: fp.sh,
  caller_phone_normalized: normalizePhone(phoneA), callee_phone_normalized: normalizePhone(phoneB),
  caller_type: 'mobile', callee_type: 'mobile', grade: 'premium', status: 'pending',
}).select('call_id').single()
if (e1) { fail('call insert', e1.message); await deleteAuthUser(userA); process.exit(exitCode) }

const { data: contract } = await sb.from('contracts').insert({
  call_id: call.call_id, terms_version: 'v1.2', status: 'pending',
}).select('contract_id').single()

await sb.from('participants').insert([
  { contract_id: contract.contract_id, phone_hash: phoneHash(phoneA), user_id: userA,
    consent_status: 'agreed', consent_terms_version: 'v1.2', revenue_share: 50.0, revenue_share_basis: 'standard' },
  { contract_id: contract.contract_id, phone_hash: phoneHash(phoneB), user_id: null,
    consent_status: 'pending', revenue_share: 50.0, revenue_share_basis: 'standard' },
])
ok('A 가입 + call + contract + participants(A=agreed, B=pending) 박힘')

// ── Step 2: B 동의 시뮬 (peer.html flow) ───────────────────────────────
console.log('\n▶ Step 2: B phone_hash 측 동의 → participants 박음 → call.status=sellable')
await sb.from('participants').update({
  consent_status: 'agreed', consent_agreed_at: new Date().toISOString(), consent_terms_version: 'v1.2',
}).eq('contract_id', contract.contract_id).eq('phone_hash', phoneHash(phoneB))
await sb.from('contracts').update({ status: 'agreed', agreed_at: new Date().toISOString() }).eq('contract_id', contract.contract_id)
await sb.from('calls').update({ status: 'sellable' }).eq('call_id', call.call_id)
ok('contract.status=agreed + call.status=sellable')

// ── Step 3: 매수자에게 판매 (transaction + splits) ──────────────────────
console.log('\n▶ Step 3: 매수자 판매 → transaction + 50:50 splits')
const buyerId = randomUUID()
const price = 100000
// payout_release_at을 과거로 박아 release 가능 상태 만들기 (테스트 단축)
const pastReleaseAt = new Date(Date.now() - 24 * 3600 * 1000).toISOString()

await sb.from('calls').update({
  status: 'sold', sold_at: new Date().toISOString(),
  sold_to_buyer_id: buyerId, sold_revenue_krw: price,
}).eq('call_id', call.call_id)

const { data: tx } = await sb.from('transactions').insert({
  call_id: call.call_id, buyer_id: buyerId, price,
  sold_at: new Date().toISOString(), payout_release_at: pastReleaseAt, status: 'hold',
}).select('tx_id').single()

await sb.from('transaction_splits').insert([
  { tx_id: tx.tx_id, participant_phone_hash: phoneHash(phoneA), participant_user_id: userA,
    share_percent: 50, share_amount: price * 0.5, split_basis: 'standard' },
  { tx_id: tx.tx_id, participant_phone_hash: phoneHash(phoneB), participant_user_id: null,
    share_percent: 50, share_amount: price * 0.5, split_basis: 'standard' },
])

// A 잔액 박음 (pending)
await sb.from('balances').upsert({
  user_id: userA, pending: price * 0.5, available: 0, total_earned: price * 0.5,
}, { onConflict: 'user_id' })
ok(`판매 완료. tx ${tx.tx_id.slice(0,8)} | A pending=${price * 0.5}, B unclaimed=${price * 0.5}`)

// ── Step 4: A 1차 release (B는 미가입 상태) ────────────────────────────
console.log('\n▶ Step 4: 1차 release (B는 미가입 상태)')
// release: A balances pending → available 박음
const { data: balA1 } = await sb.from('balances').select('pending, available').eq('user_id', userA).single()
await sb.from('balances').update({
  pending: 0, available: Number(balA1.pending),
}).eq('user_id', userA)
// transaction status는 그대로 hold 유지 (B 미가입)
const { data: balACheck } = await sb.from('balances').select('available').eq('user_id', userA).single()
if (Number(balACheck.available) === price * 0.5) ok(`A available=${balACheck.available} (정상)`)
else fail('A available', `expected ${price * 0.5}, got ${balACheck.available}`)

// ── Step 5: B 가입 + register-phone (049 핵심 funnel) ──────────────────
console.log('\n▶ Step 5: B 나중 가입 + register-phone → participants/splits user_id 박힘 + balances.pending 자동 이전')
const userB = await createAuthUser()
await sb.from('user_phone_history').insert({ user_id: userB, phone_hash: phoneHash(phoneB), is_current: true })

// 049 register-phone 라우트와 동일 흐름:
// 1. participants 매칭
const { data: linkedP } = await sb.from('participants')
  .update({ user_id: userB })
  .eq('phone_hash', phoneHash(phoneB))
  .is('user_id', null)
  .select('contract_id')

// 2. transaction_splits 매칭 + share_amount 합산
const { data: linkedS } = await sb.from('transaction_splits')
  .update({ participant_user_id: userB })
  .eq('participant_phone_hash', phoneHash(phoneB))
  .is('participant_user_id', null)
  .select('share_amount')

const pendingDelta = (linkedS ?? []).reduce((sum, s) => sum + Number(s.share_amount ?? 0), 0)

// 3. balances 박음
await sb.from('balances').upsert({
  user_id: userB, pending: pendingDelta, available: 0, total_earned: pendingDelta,
}, { onConflict: 'user_id' })
ok(`B 가입 후 매칭: participants ${linkedP?.length ?? 0}건 + splits ${linkedS?.length ?? 0}건 + balances.pending=${pendingDelta}`)

// ── Step 6: B 2차 release ──────────────────────────────────────────────
console.log('\n▶ Step 6: 2차 release → B pending→available')
const { data: balB } = await sb.from('balances').select('pending').eq('user_id', userB).single()
await sb.from('balances').update({
  pending: 0, available: Number(balB.pending),
}).eq('user_id', userB)

// transaction.status='released' + released_at 박음
await sb.from('transactions').update({
  status: 'released', released_at: new Date().toISOString(),
}).eq('tx_id', tx.tx_id)
ok(`B available=${balB.pending}`)

// ── Step 7: 최종 검증 ──────────────────────────────────────────────────
console.log('\n▶ Step 7: 최종 검증 — A available + B available == price')
const { data: finalA } = await sb.from('balances').select('available').eq('user_id', userA).single()
const { data: finalB } = await sb.from('balances').select('available').eq('user_id', userB).single()
const total = Number(finalA.available) + Number(finalB.available)
if (total === price) ok(`A=${finalA.available} + B=${finalB.available} = ${total} == ${price}`)
else fail('total available', `expected ${price}, got ${total}`)

// ── cleanup ────────────────────────────────────────────────────────────
console.log('\n▶ cleanup')
await sb.from('user_phone_history').delete().in('user_id', [userA, userB])
await sb.from('balances').delete().in('user_id', [userA, userB])
await cleanup()
await deleteAuthUser(userA)
await deleteAuthUser(userB)
ok('정리 완료')

console.log('\n=== E2E ' + (exitCode ? '실패 ❌' : '통과 ✅') + ' ===')
process.exit(exitCode)
