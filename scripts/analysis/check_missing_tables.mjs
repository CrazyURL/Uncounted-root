// SKIP 6 테이블 진단 — 미존재 vs RLS 차단 구분
// 사용: node scripts/analysis/check_missing_tables.mjs

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const SUSPECT = [
  { name: 'utterance_review_audit', migration: '038_utterance_review_tracking.sql' },
  { name: 'pii_intervals', migration: '036_pii_masking_audit.sql or earlier' },
  { name: 'pii_masking_audit', migration: '036_pii_masking_audit.sql' },
  { name: 'consent_invitations', migration: '040_consent_invitations.sql' },
  { name: 'consent_withdrawals', migration: '041_consent_withdrawals.sql' },
  { name: 'upload_block_logs', migration: '039_upload_block_logs.sql' },
]

async function checkExists(table) {
  // information_schema 조회 (RLS 무시)
  const { data, error } = await supabase
    .from('information_schema.tables')
    .select('table_name')
    .eq('table_schema', 'public')
    .eq('table_name', table)
  if (error) return { exists: null, error: error.message }
  return { exists: (data?.length ?? 0) > 0 }
}

async function tryDirectQuery(table) {
  const { error, count } = await supabase
    .from(table)
    .select('*', { count: 'exact', head: true })
  return { error: error?.message, count }
}

async function main() {
  console.log(`=== SKIP 테이블 진단 ===\n`)

  // information_schema는 RPC로 가야 할 수도 있음 — 직접 시도부터
  console.log('테이블별 직접 query 시도:')
  for (const t of SUSPECT) {
    const r = await tryDirectQuery(t.name)
    const status = r.error ? `❌ ${r.error.slice(0, 80)}` : `✅ exists (count=${r.count})`
    console.log(`  ${t.name.padEnd(28)} ${status}`)
    console.log(`     → migration: ${t.migration}`)
  }

  // information_schema는 PostgREST 통해서는 보통 차단 — RPC 시도
  console.log('\nRPC pg_tables 조회 시도:')
  const { data, error } = await supabase.rpc('exec_sql', {
    query: "SELECT table_name FROM pg_tables WHERE schemaname='public' ORDER BY table_name",
  }).single()
  if (error) {
    console.log(`  RPC exec_sql 미존재 (정상): ${error.message.slice(0, 80)}`)
    console.log(`  → SQL Editor에서 직접 확인:`)
    console.log(`     SELECT table_name FROM pg_tables WHERE schemaname='public' ORDER BY table_name;`)
  } else {
    console.log('  Tables:', data)
  }
}

main().catch(e => {
  console.error('FATAL:', e.message)
  process.exit(1)
})
