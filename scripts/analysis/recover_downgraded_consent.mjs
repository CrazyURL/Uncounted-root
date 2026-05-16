// 다운그레이드된 sessions 복구
// 조건: consent_status='user_only' AND consented_at IS NOT NULL
//   → DEV 토글로 promote됐었지만 batch upsert가 덮어쓴 케이스
// 액션: consent_status를 'both_agreed'로 복구

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

console.log('\n=== 다운그레이드된 sessions 복구 ===\n')

// 1. 전체 카운트
const { count: totalCount } = await sb
  .from('sessions')
  .select('*', { count: 'exact', head: true })
  .eq('consent_status', 'user_only')
  .not('consented_at', 'is', null)
console.log(`▶ 전체 후보 카운트: ${totalCount}건\n`)

// 후보를 range 페이지네이션으로 모두 fetch
const PAGE = 1000
const candidates = []
for (let offset = 0; offset < totalCount; offset += PAGE) {
  const { data: page, error: pErr } = await sb
    .from('sessions')
    .select('id, user_id, title, consent_status, consented_at, updated_at')
    .eq('consent_status', 'user_only')
    .not('consented_at', 'is', null)
    .range(offset, offset + PAGE - 1)
  if (pErr) {
    console.log(`❌ page ${offset}: ${pErr.message}`)
    process.exit(1)
  }
  candidates.push(...(page ?? []))
}
const error = null

console.log(`▶ 복구 후보 sessions: ${candidates.length}건`)
const userBreak = {}
for (const s of candidates) userBreak[s.user_id] = (userBreak[s.user_id] ?? 0) + 1
for (const [uid, c] of Object.entries(userBreak)) {
  console.log(`  user=${uid?.slice(0, 8)}... ${c}건`)
}

if (candidates.length === 0) {
  console.log('\n복구 대상 없음.')
  process.exit(0)
}

// 2. dry-run 샘플
console.log('\n▶ 샘플 5건:')
for (const s of candidates.slice(0, 5)) {
  console.log(`  ${s.id.slice(0, 8)}... consented=${s.consented_at?.slice(0, 19)} ${s.title?.slice(0, 30)}`)
}

// 3. dry-run 모드 — DRYRUN=1 환경변수로 차단 가능
if (process.env.DRYRUN === '1') {
  console.log('\n[DRYRUN] 실제 UPDATE 안 했음. DRYRUN=0 또는 미설정으로 다시 실행.')
  process.exit(0)
}

// 4. 일괄 UPDATE
console.log('\n▶ UPDATE 실행 중...')
const ids = candidates.map((s) => s.id)
const BATCH = 200
let updated = 0
for (let i = 0; i < ids.length; i += BATCH) {
  const slice = ids.slice(i, i + BATCH)
  const { error: uErr, count } = await sb
    .from('sessions')
    .update({ consent_status: 'both_agreed' }, { count: 'exact' })
    .in('id', slice)
  if (uErr) {
    console.log(`❌ batch ${i}~${i+slice.length}: ${uErr.message}`)
  } else {
    updated += count ?? 0
  }
}
console.log(`▶ 복구 완료: ${updated}/${candidates.length}건 both_agreed로 갱신`)

// 5. 검증
const { count: remaining } = await sb
  .from('sessions')
  .select('*', { count: 'exact', head: true })
  .eq('consent_status', 'user_only')
  .not('consented_at', 'is', null)
console.log(`▶ 잔여 다운그레이드 케이스 (재발 가능성): ${remaining}건`)
