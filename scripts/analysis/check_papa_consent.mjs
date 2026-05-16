// 파파 sessions DB 상태 직접 조회 — DEV 토글 영속성 진단
// 실행: node scripts/analysis/check_papa_consent.mjs [peer_keyword]

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

const keyword = process.argv[2] || '파파'

console.log(`\n=== "${keyword}" sessions DB 상태 ===\n`)

// 전체 카운트
const { count: totalCount } = await sb
  .from('sessions')
  .select('*', { count: 'exact', head: true })
  .ilike('title', `%${keyword}%`)
console.log(`▶ 전체 매칭 sessions: ${totalCount}건\n`)

// consent_status 분포 (전체 — head=false count)
for (const status of ['both_agreed', 'user_only', 'locked']) {
  const { count } = await sb
    .from('sessions')
    .select('*', { count: 'exact', head: true })
    .ilike('title', `%${keyword}%`)
    .eq('consent_status', status)
  console.log(`  ${status.padEnd(15)} ${count}건`)
}

const { data: sess, error } = await sb
  .from('sessions')
  .select('*')
  .ilike('title', `%${keyword}%`)
  .order('date', { ascending: false })
  .limit(500)

if (error) {
  console.log(`❌ 조회 실패: ${error.message}`)
  process.exit(1)
}

console.log(`▶ 매칭된 sessions: ${sess.length}건\n`)

const statusCount = { both_agreed: 0, user_only: 0, locked: 0, other: 0 }
for (const s of sess) {
  const status = s.consent_status ?? 'null'
  if (status in statusCount) statusCount[status]++
  else statusCount.other++
}
console.log('▶ consent_status 분포:')
for (const [k, v] of Object.entries(statusCount)) {
  if (v > 0) console.log(`  ${k.padEnd(15)} ${v}건`)
}

if (sess.length > 0) {
  console.log('\n▶ 첫 행의 모든 컬럼 키:', Object.keys(sess[0]).join(', '))
}

console.log('\n▶ 최근 10건 상세 (date desc):')
for (const s of sess.slice(0, 10)) {
  const titleShort = (s.title || '').slice(0, 40)
  const consAt = s.consented_at ? s.consented_at.slice(0, 19) : '              null '
  const dateStr = s.date ?? 'null'
  console.log(`  [${s.consent_status?.padEnd(12) ?? '?           '}] consented=${consAt} date=${dateStr} ${titleShort}`)
}

console.log('\n▶ manual_dev_test invitation (이 sessions 대상):')
const ids = sess.map((s) => s.id)
const { data: invs } = await sb
  .from('consent_invitations')
  .select('session_id, status, consent_method, created_at')
  .in('session_id', ids)
  .order('created_at', { ascending: false })
  .limit(20)
console.log(`  invitation 총: ${invs?.length ?? 0}건`)
const methodCount = {}
for (const i of invs ?? []) {
  methodCount[i.consent_method] = (methodCount[i.consent_method] ?? 0) + 1
}
for (const [k, v] of Object.entries(methodCount)) {
  console.log(`  ${k}: ${v}건`)
}

const userOnly = sess.filter((s) => s.consent_status === 'user_only')
const bothAgreed = sess.filter((s) => s.consent_status === 'both_agreed')

console.log(`\n▶ user_only ${userOnly.length}건의 created/updated 분포:`)
const userOnlyConsented = userOnly.filter((s) => s.consented_at)
const userOnlyNoConsent = userOnly.filter((s) => !s.consented_at)
console.log(`  consented_at 있음: ${userOnlyConsented.length}건 (promote 됐었는데 user_only로 되돌아감 → batch upsert가 덮어씀)`)
console.log(`  consented_at 없음: ${userOnlyNoConsent.length}건 (promote 자체를 못 받음)`)

console.log('\n▶ user_only 샘플 5건:')
for (const s of userOnly.slice(0, 5)) {
  console.log(`  date=${s.date} consented=${s.consented_at?.slice(0,19) ?? '            null'} updated=${s.updated_at?.slice(0,19) ?? 'null'} ${s.title?.slice(0,30)}`)
}

console.log('\n▶ both_agreed 샘플 5건 (비교):')
for (const s of bothAgreed.slice(0, 5)) {
  console.log(`  date=${s.date} consented=${s.consented_at?.slice(0,19) ?? '            null'} updated=${s.updated_at?.slice(0,19) ?? 'null'} ${s.title?.slice(0,30)}`)
}

console.log('\n▶ user_only 121건의 user_id 분포:')
const uidCount = {}
for (const s of userOnly) uidCount[s.user_id] = (uidCount[s.user_id] ?? 0) + 1
for (const [uid, c] of Object.entries(uidCount)) {
  console.log(`  user_id=${uid?.slice(0,8) ?? 'null'}... ${c}건`)
}
console.log('\n▶ both_agreed 290건의 user_id 분포:')
const uidCount2 = {}
for (const s of bothAgreed) uidCount2[s.user_id] = (uidCount2[s.user_id] ?? 0) + 1
for (const [uid, c] of Object.entries(uidCount2)) {
  console.log(`  user_id=${uid?.slice(0,8) ?? 'null'}... ${c}건`)
}
