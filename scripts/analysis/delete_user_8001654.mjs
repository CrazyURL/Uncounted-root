// 8001654@gmail.com 사용자 데이터 삭제 영향 분석 + 실행 (2-step: --dry-run / --apply)
//
// Phase 1: --dry-run (default)
//   user_id 조회 + 영향받는 테이블 별 행 수 카운트만, 삭제 X
//
// Phase 2: --apply (사용자 명시)
//   실제 삭제 실행. 알파 209건 검수 자산 (다른 user_id) 보존.
//
// 사용:
//   node scripts/analysis/delete_user_8001654.mjs           # dry-run
//   node scripts/analysis/delete_user_8001654.mjs --apply   # 실제 삭제

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// uncounted-api/.env에서 SUPABASE 자격 로드
const envPath = resolve(process.cwd(), 'uncounted-api/.env')
const env = {}
for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const url = env.SUPABASE_URL
const key = env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) {
  console.error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not found in uncounted-api/.env')
  process.exit(1)
}

const supabase = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const TARGET_EMAIL = '8001654@gmail.com'
const APPLY = process.argv.includes('--apply')

// 본인 데이터 영향받는 테이블 (user_id로 직접/간접 link)
// 삭제 순서: 외래키 제약 고려 (자식 → 부모)
const TARGET_TABLES = [
  // utterance 계열 (sessions FK)
  'utterances',
  'utterance_review_audit',
  'pii_intervals',
  // billable_units / quality_metrics (utterance/session FK)
  'bu_quality_metrics',
  'billable_units',
  // export 계열
  'export_package_items',
  'user_asset_ledger',
  'delivery_records',
  // session 계열
  'session_chunks',
  'transcript_chunks',
  'transcripts',
  'sessions',
  // user-scope 직접
  'voice_profiles',
  'consent_invitations',
  'consent_withdrawals',
  'upload_block_logs',
  'metadata_events',
  'pii_masking_audit',
  'users_profile',
  // BM v10.0 신규 (migration 045)
  'version_contributors',
  'user_reward_log',
  'kept_data_pool',
]

async function findUserId() {
  const { data, error } = await supabase.auth.admin.listUsers({ perPage: 200 })
  if (error) {
    console.error('listUsers failed:', error.message)
    return null
  }
  const user = data?.users?.find(u => u.email === TARGET_EMAIL)
  if (!user) {
    console.error(`User not found: ${TARGET_EMAIL}`)
    return null
  }
  return user
}

async function countTable(table, userId) {
  // 일부 테이블은 user_id 컬럼 없음 (sessions FK chain) — 시도 후 fallback
  // 우선 user_id 직접 컬럼 시도
  const { count, error } = await supabase
    .from(table)
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
  if (error) {
    // user_id 컬럼 없는 테이블 — session_id chain 필요. dry-run은 sessions 통한 추정만.
    return { count: null, error: error.message }
  }
  return { count, error: null }
}

async function deleteFromTable(table, userId) {
  const { error, count } = await supabase
    .from(table)
    .delete({ count: 'exact' })
    .eq('user_id', userId)
  return { count, error: error?.message }
}

async function main() {
  console.log(`=== 8001654@gmail.com 데이터 삭제 ${APPLY ? '실행' : '영향 분석 (dry-run)'} ===\n`)
  const user = await findUserId()
  if (!user) process.exit(1)

  console.log(`User found:`)
  console.log(`  email: ${user.email}`)
  console.log(`  user_id: ${user.id}`)
  console.log(`  created_at: ${user.created_at}`)
  console.log()

  console.log('== 영향받는 테이블 행 수 (user_id 직접 컬럼만) ==')
  let totalRows = 0
  const counts = {}
  for (const table of TARGET_TABLES) {
    const { count, error } = await countTable(table, user.id)
    if (count !== null) {
      counts[table] = count
      totalRows += count
      console.log(`  ${table.padEnd(35)} ${String(count).padStart(8)}`)
    } else {
      counts[table] = `(skip: ${error})`
      console.log(`  ${table.padEnd(35)}      SKIP (${error.slice(0, 60)})`)
    }
  }
  console.log(`  ${'TOTAL'.padEnd(35)} ${String(totalRows).padStart(8)}`)
  console.log()

  if (!APPLY) {
    console.log('Dry-run 완료. 실제 삭제는 --apply 옵션 추가:')
    console.log(`  node scripts/analysis/delete_user_8001654.mjs --apply`)
    return
  }

  console.log('== 실제 삭제 실행 ==')
  console.log('주의: alpha 209건 검수 자산은 다른 user_id이므로 보존됩니다.')
  console.log()

  for (const table of TARGET_TABLES) {
    if (typeof counts[table] !== 'number' || counts[table] === 0) continue
    process.stdout.write(`  ${table.padEnd(35)} ... `)
    const { count, error } = await deleteFromTable(table, user.id)
    if (error) {
      console.log(`FAIL: ${error}`)
    } else {
      console.log(`OK (${count ?? 'n/a'} deleted)`)
    }
  }

  console.log()
  console.log('== 사후 검증 (모두 0 기대) ==')
  for (const table of TARGET_TABLES) {
    if (typeof counts[table] !== 'number') continue
    const { count } = await countTable(table, user.id)
    if (count !== null && count > 0) {
      console.log(`  ${table.padEnd(35)} ${String(count).padStart(8)} 잔존 (확인 필요)`)
    }
  }

  console.log()
  console.log('완료. auth.users 자체는 보존됨 (사용자 재로그인 가능). 필요 시 별도 삭제.')
}

main().catch(e => {
  console.error('FATAL:', e)
  process.exit(1)
})
