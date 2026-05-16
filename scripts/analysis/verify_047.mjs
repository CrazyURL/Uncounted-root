// migration 047 적용 검증 — is_test_mode 컬럼 + consent_method enum + p_live_only 함수
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

async function checkColumn(table, column) {
  const { error } = await sb.from(table).select(column).limit(1)
  return !error
}

async function rpcLiveOnly() {
  // p_live_only 인자로 호출 가능한지 검증 (없으면 RPC 에러)
  const { error } = await sb.rpc('user_yearly_reward_total', {
    p_user_id: '00000000-0000-0000-0000-000000000000',
    p_fiscal_year: 2026,
    p_live_only: true,
  })
  // user_id 미존재라 0 반환되거나 RPC 자체 OK. 시그니처 매칭 실패 시 PGRST116 또는 함수명 에러.
  if (error && (error.message?.includes('function') || error.message?.includes('not found'))) {
    return { ok: false, reason: error.message.slice(0, 80) }
  }
  return { ok: true }
}

const checks = [
  { label: 'data_versions.is_test_mode', table: 'data_versions', column: 'is_test_mode' },
  { label: 'version_contributors.is_test_mode', table: 'version_contributors', column: 'is_test_mode' },
  { label: 'user_reward_log.is_test_mode', table: 'user_reward_log', column: 'is_test_mode' },
  { label: 'consent_invitations.consent_method', table: 'consent_invitations', column: 'consent_method' },
]

console.log('=== migration 047 적용 검증 ===\n')
for (const c of checks) {
  const ok = await checkColumn(c.table, c.column)
  console.log(`  ${c.label.padEnd(40)} ${ok ? '✅' : '❌'}`)
}
const rpc = await rpcLiveOnly()
console.log(`  user_yearly_reward_total(p_live_only)   ${rpc.ok ? '✅' : '❌ ' + rpc.reason}`)
console.log()
console.log('모두 ✅면 migration 047 정상 적용 완료.')
