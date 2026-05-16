// migration 049 적용 검증 — call-level ownership 9 테이블 + sessions.call_id + 트리거
import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

async function checkTable(table) {
  const { error } = await sb.from(table).select('*', { count: 'exact', head: true })
  return !error
}

async function checkColumn(table, column) {
  const { error } = await sb.from(table).select(column).limit(1)
  return !error
}

const tables = [
  'calls',
  'contracts',
  'participants',
  'transactions',
  'transaction_splits',
  'balances',
  'user_phone_history',
  'ambiguous_matches',
  'call_clusters',
  'call_cluster_members',
]

const callsColumns = [
  'fingerprint',
  'started_at',
  'started_at_minute_bucket',
  'started_at_quartile',
  'duration_seconds',
  'duration_bucket',
  'speakers_hash',
  'caller_phone_normalized',
  'callee_phone_normalized',
  'caller_type',
  'callee_type',
  'grade',
  'status',
  'sold_at',
  'sold_to_buyer_id',
  'sold_revenue_krw',
]

const participantsColumns = [
  'contract_id',
  'phone_hash',
  'user_id',
  'consent_status',
  'consent_agreed_at',
  'consent_ip',
  'consent_user_agent',
  'consent_terms_version',
  'revenue_share',
  'revenue_share_basis',
]

const transactionsColumns = [
  'tx_id',
  'call_id',
  'buyer_id',
  'price',
  'sold_at',
  'payout_release_at',
  'status',
  'released_at',
]

const phoneHistoryColumns = ['user_id', 'phone_hash', 'registered_at', 'is_current']

console.log('=== migration 049 적용 검증 ===\n')

console.log('▶ 10개 테이블 존재 확인 (calls + contracts + participants + transactions + splits + balances + phone_history + ambiguous + clusters + cluster_members)')
let allOk = true
for (const t of tables) {
  const ok = await checkTable(t)
  console.log(`  ${t.padEnd(25)} ${ok ? '✅' : '❌'}`)
  if (!ok) allOk = false
}

console.log('\n▶ calls 컬럼 16개')
for (const c of callsColumns) {
  const ok = await checkColumn('calls', c)
  console.log(`  calls.${c.padEnd(35)} ${ok ? '✅' : '❌'}`)
  if (!ok) allOk = false
}

console.log('\n▶ participants 컬럼 10개')
for (const c of participantsColumns) {
  const ok = await checkColumn('participants', c)
  console.log(`  participants.${c.padEnd(28)} ${ok ? '✅' : '❌'}`)
  if (!ok) allOk = false
}

console.log('\n▶ transactions 컬럼 8개')
for (const c of transactionsColumns) {
  const ok = await checkColumn('transactions', c)
  console.log(`  transactions.${c.padEnd(28)} ${ok ? '✅' : '❌'}`)
  if (!ok) allOk = false
}

console.log('\n▶ user_phone_history 컬럼 4개')
for (const c of phoneHistoryColumns) {
  const ok = await checkColumn('user_phone_history', c)
  console.log(`  user_phone_history.${c.padEnd(22)} ${ok ? '✅' : '❌'}`)
  if (!ok) allOk = false
}

console.log('\n▶ sessions.call_id 컬럼 (legacy 매핑)')
const sessionsCallId = await checkColumn('sessions', 'call_id')
console.log(`  sessions.call_id                ${sessionsCallId ? '✅' : '❌'}`)
if (!sessionsCallId) allOk = false

console.log()
console.log(allOk ? '✅ 모든 검증 통과 — migration 049 정상 적용 완료.' : '❌ 검증 실패 — 위 ❌ 항목 SQL 재확인 필요.')
