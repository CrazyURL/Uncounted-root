// Contact-level consent (Option B) — 현재 dev DB 실태 조사 (확장판)
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

console.log('=== Contact-level Consent 사전 조사 (확장) ===\n')

// ─ sessions consent_status 전체 분포 ────────────────────────────
console.log('▶ sessions.consent_status 전체 분포')
const { count: total } = await sb.from('sessions').select('*', { count: 'exact', head: true })
console.log(`  total sessions: ${total}`)
for (const st of ['locked', 'user_only', 'both_agreed', 'pending', null]) {
  const q = st === null
    ? sb.from('sessions').select('*', { count: 'exact', head: true }).is('consent_status', null)
    : sb.from('sessions').select('*', { count: 'exact', head: true }).eq('consent_status', st)
  const { count } = await q
  console.log(`  ${String(st).padEnd(15)} ${count}`)
}

// ─ visibility_status 분포 ─────────────────────────────────────────
console.log('\n▶ sessions.visibility_status 분포')
for (const st of ['PRIVATE', 'PUBLIC_CONSENTED', 'PUBLIC_PENDING', null]) {
  const q = st === null
    ? sb.from('sessions').select('*', { count: 'exact', head: true }).is('visibility_status', null)
    : sb.from('sessions').select('*', { count: 'exact', head: true }).eq('visibility_status', st)
  const { count } = await q
  console.log(`  ${String(st).padEnd(20)} ${count}`)
}

// ─ users 수 + user별 sessions ─────────────────────────────────────
console.log('\n▶ users 분포 (sessions 기준)')
const { data: userSessions } = await sb.from('sessions').select('user_id')
const byUser = {}
for (const r of userSessions ?? []) byUser[r.user_id ?? '(null)'] = (byUser[r.user_id ?? '(null)'] ?? 0) + 1
const userIds = Object.entries(byUser).sort((a,b)=>b[1]-a[1])
console.log(`  user 수: ${userIds.length}`)
for (const [uid, cnt] of userIds.slice(0, 5)) {
  console.log(`    ${(uid?.slice(0,16) ?? '(null)').padEnd(16)} ${cnt}건`)
}

// ─ sessions 샘플 (실제 어떤 컬럼이 채워져 있나) ─────────────────
console.log('\n▶ sessions 샘플 (10건, 채움 확인)')
const { data: sampleSessions } = await sb
  .from('sessions')
  .select('id, user_id, peer_id, consent_status, visibility_status, share_scope, eligible_for_share, label_status')
  .limit(10)
for (const s of sampleSessions ?? []) {
  console.log(`  ${s.id?.slice(0,8)} | cs:${s.consent_status} | vs:${s.visibility_status} | ss:${s.share_scope} | label:${s.label_status}`)
}

// ─ session_labels 테이블 (라벨 + peer_id 매핑 가능성) ─────────────
console.log('\n▶ session_labels 테이블 (peer_id 추론용)')
const { count: labelCount } = await sb.from('session_labels').select('*', { count: 'exact', head: true })
console.log(`  total: ${labelCount}`)
const { count: labelWithPeer } = await sb.from('session_labels').select('*', { count: 'exact', head: true }).not('peer_id', 'is', null)
console.log(`  peer_id 있음: ${labelWithPeer}`)

// ─ billable_units (consent source of truth라고 docs에 명시) ───────
console.log('\n▶ billable_units consent 분포')
const { count: buTotal } = await sb.from('billable_units').select('*', { count: 'exact', head: true })
console.log(`  total: ${buTotal}`)
if (buTotal > 0) {
  const { data: buSample } = await sb
    .from('billable_units').select('id, session_id, consent_status').limit(5)
  for (const b of buSample ?? []) {
    console.log(`  ${b.id?.slice(0,8)} | sess:${b.session_id?.slice(0,8)} | cs:${b.consent_status}`)
  }
}

// ─ visibility_overrides (클라이언트가 영향 줄 가능성) ─────────────
console.log('\n▶ 다른 consent 관련 테이블 존재 여부')
for (const t of ['visibility_overrides', 'consent_withdrawals', 'consents', 'kept_data_pool']) {
  const { count, error } = await sb.from(t).select('*', { count: 'exact', head: true })
  console.log(`  ${t.padEnd(25)} ${error ? '(table missing)' : `${count} rows`}`)
}

console.log('\n=== 끝 ===')
