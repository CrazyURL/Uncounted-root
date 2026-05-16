// 사용자 한 명의 모든 sessions를 깨끗한 user_only 상태로 reset
// 조건:
//   - consent_status = 'user_only'
//   - consented_at = null
//   - manual_dev_test invitation 제거 (감사 추적은 user_id별로 따로 보관 가능 — 여기선 삭제)
//
// 실행: node scripts/analysis/reset_consent_clean.mjs <user_id_keyword> [--apply]
// 예:   node scripts/analysis/reset_consent_clean.mjs cbee40db --apply
// --apply 없으면 dry-run

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

const userKey = process.argv[2]
const apply = process.argv.includes('--apply')

if (!userKey) {
  console.error('Usage: node reset_consent_clean.mjs <user_id_keyword> [--apply]')
  process.exit(1)
}

console.log(`\n=== consent reset (user_id ~ "${userKey}") ${apply ? '[APPLY]' : '[DRY-RUN]'} ===\n`)

// 1. user_id 결정 — sessions 테이블에서 user_id LIKE keyword% 매칭
const { data: someSession } = await sb
  .from('sessions')
  .select('user_id')
  .like('user_id', `${userKey}%`)
  .limit(1)
const userId = someSession?.[0]?.user_id
if (!userId) {
  console.log(`❌ user_id LIKE "${userKey}%" 매칭 실패`)
  process.exit(1)
}
console.log(`▶ 대상 user_id: ${userId}\n`)

// 2. 현재 분포
const { count: total } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId)
const { count: both } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('consent_status', 'both_agreed')
const { count: uo } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('consent_status', 'user_only')
const { count: lk } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('consent_status', 'locked')
console.log(`▶ 현재 sessions 분포 (총 ${total}건):`)
console.log(`  both_agreed ${both}`)
console.log(`  user_only   ${uo}`)
console.log(`  locked      ${lk}`)

// 3. manual_dev_test invitation 카운트
const { count: devInvCount } = await sb
  .from('consent_invitations')
  .select('*', { count: 'exact', head: true })
  .eq('user_id', userId)
  .eq('consent_method', 'manual_dev_test')
console.log(`▶ manual_dev_test invitation: ${devInvCount}건`)

if (!apply) {
  console.log('\n[DRY-RUN] 실제 변경 안 했음. --apply 추가해서 실행하면 적용.')
  process.exit(0)
}

// 4. sessions 일괄 reset (페이지네이션으로 안전)
console.log('\n▶ sessions consent_status → user_only, consented_at → null ...')
{
  const { error } = await sb
    .from('sessions')
    .update({ consent_status: 'user_only', consented_at: null })
    .eq('user_id', userId)
    .neq('consent_status', 'user_only')
  if (error) {
    console.log(`❌ status reset 실패: ${error.message}`)
    process.exit(1)
  }
}
{
  const { error } = await sb
    .from('sessions')
    .update({ consented_at: null })
    .eq('user_id', userId)
    .not('consented_at', 'is', null)
  if (error) {
    console.log(`❌ consented_at clear 실패: ${error.message}`)
  }
}

// 5. manual_dev_test invitation 삭제
{
  const { error } = await sb
    .from('consent_invitations')
    .delete()
    .eq('user_id', userId)
    .eq('consent_method', 'manual_dev_test')
  if (error) {
    console.log(`❌ invitation 삭제 실패: ${error.message}`)
  } else {
    console.log(`▶ manual_dev_test invitation 삭제됨`)
  }
}

// 6. 검증
const { count: both2 } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('consent_status', 'both_agreed')
const { count: uo2 } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('consent_status', 'user_only')
const { count: lk2 } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('consent_status', 'locked')
const { count: ca } = await sb.from('sessions').select('*', { count: 'exact', head: true }).eq('user_id', userId).not('consented_at', 'is', null)
console.log(`\n▶ reset 후 분포 (총 ${total}건):`)
console.log(`  both_agreed ${both2}  (목표: 0)`)
console.log(`  user_only   ${uo2}    (목표: ${total})`)
console.log(`  locked      ${lk2}    (목표: 0)`)
console.log(`  consented_at NOT NULL: ${ca}  (목표: 0)`)
