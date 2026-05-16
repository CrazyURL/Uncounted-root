// DEV 토글 promote 검증 — 특정 peer의 sessions/consent_invitations 상태 확인
// 사용자가 폰에서 "파파" 등 특정 peer에 대해 토글 → 본 스크립트로 DB 반영 즉시 확인
//
// 실행: node scripts/analysis/verify_dev_promote.mjs [peer_label]
// 예:   node scripts/analysis/verify_dev_promote.mjs 파파

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

const peerFilter = process.argv[2] // 옵션: peer_label로 필터 (title에 포함)

console.log('\n=== DEV 토글 promote DB 검증 ===\n')

// 1. 최근 5분 내 manual_dev_test 동의 invitation 조회
const since = new Date(Date.now() - 5 * 60_000).toISOString()
const { data: invs, error: iErr } = await sb
  .from('consent_invitations')
  .select('user_id, session_id, consent_method, status, created_at')
  .eq('consent_method', 'manual_dev_test')
  .gte('created_at', since)
  .order('created_at', { ascending: false })
  .limit(20)

if (iErr) {
  console.log(`❌ consent_invitations 조회 실패: ${iErr.message}`)
  process.exit(1)
}

console.log(`▶ 최근 5분 내 manual_dev_test invitation: ${invs.length}건`)
if (invs.length === 0) {
  console.log('  (폰에서 DEV 토글 누르지 않았거나 promote 실패)')
}
for (const inv of invs.slice(0, 5)) {
  console.log(`  • session=${inv.session_id.slice(0, 8)}... status=${inv.status} created=${inv.created_at?.slice(11, 19) ?? 'null'}`)
}

if (invs.length === 0) {
  console.log('\n다음 단계: 폰 앱에서 DEV 토글 누른 후 본 스크립트 다시 실행.')
  process.exitCode = 1
} else {
  // 2. 해당 sessions의 consent_status 검증
  const sessionIds = invs.map((i) => i.session_id)
  let q = sb
    .from('sessions')
    .select('id, user_id, title, consent_status, consented_at')
    .in('id', sessionIds)
  const { data: sess, error: sErr } = await q
  if (sErr) {
    console.log(`❌ sessions 조회 실패: ${sErr.message}`)
    process.exit(1)
  }

  console.log(`\n▶ 대응 sessions의 consent_status 상태:`)
  let bothAgreedCount = 0
  for (const s of sess) {
    const ok = s.consent_status === 'both_agreed'
    if (ok) bothAgreedCount++
    const titleShort = (s.title || '').slice(0, 30)
    if (peerFilter && !titleShort.includes(peerFilter)) continue
    console.log(`  ${ok ? '✅' : '❌'} ${s.consent_status.padEnd(12)} ${titleShort}`)
  }
  console.log(`\n  → ${bothAgreedCount}/${sess.length}건 both_agreed`)

  // 3. /api/admin/sessions로 admin이 볼 수 있는지 확인 (admin auth 없이 raw query로 sessions 카운트만)
  const { count: totalBoth } = await sb
    .from('sessions')
    .select('*', { count: 'exact', head: true })
    .eq('consent_status', 'both_agreed')
  console.log(`\n▶ 전체 DB의 both_agreed 세션: ${totalBoth}건 (admin 페이지에서 동일 카운트 보임)`)

  process.exitCode = bothAgreedCount === sess.length ? 0 : 1
}
