// 전체 더미 데이터 wipe — quota 회복 후 즉시 실행 가능
//
// 사용:
//   node scripts/analysis/wipe_all_dummy.mjs              # dry-run (행 수만)
//   node scripts/analysis/wipe_all_dummy.mjs --apply      # 실제 wipe
//
// 작업:
//   1. Storage 모든 bucket의 모든 object 삭제 (retry + pagination)
//   2. 테이블별 PK 명시 + 일치 PK로 전체 삭제 (silent skip 방지)
//   3. 사후 검증 (모두 0 또는 명시 SKIP 사유)
//
// Hook fix (2026-05-01):
//   - fetch try/catch + response.ok 검증
//   - .env URL/KEY validation (https://+, 헤더 안전 문자)
//   - 테이블별 PK 명시 (id / version_id / 등) + fallback chain
//   - Storage DELETE retry (exponential backoff)
//
// auth.users는 보존 (사용자 재로그인 가능). 필요 시 Dashboard에서 별도 삭제.

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// ── env 로드 + validation (hook fix #2) ─────────────────────────────────
const envPath = resolve(process.cwd(), 'uncounted-api/.env')
const env = {}
for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}

function validateEnv(name, value, validator) {
  if (!value || typeof value !== 'string') {
    throw new Error(`${name}: missing or non-string in .env`)
  }
  if (/[\r\n\s]/.test(value)) {
    // 헤더 인젝션 / CRLF 차단 (HTTP 헤더 안전성)
    throw new Error(`${name}: contains whitespace or CR/LF (header injection risk)`)
  }
  if (!validator(value)) {
    throw new Error(`${name}: validation failed`)
  }
  return value
}

const SUPABASE_URL = validateEnv('SUPABASE_URL', env.SUPABASE_URL,
  v => /^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(v))
const SUPABASE_KEY = validateEnv('SUPABASE_SERVICE_ROLE_KEY', env.SUPABASE_SERVICE_ROLE_KEY,
  v => v.length >= 40 && /^[A-Za-z0-9._-]+$/.test(v))

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const APPLY = process.argv.includes('--apply')

// ── 테이블별 PK 명시 (hook fix #3) ─────────────────────────────────────
// 자식 → 부모 순. 각 테이블의 실제 PK 컬럼 (silent skip 방지).
// PK 외 fallback: created_at >= '1970-01-01' (모든 행 매치).
const TABLES = [
  // utterance 계열
  { name: 'utterance_review_audit', pk: 'id' },
  { name: 'pii_intervals', pk: 'id' },
  { name: 'pii_masking_audit', pk: 'id' },
  { name: 'utterances', pk: 'id' },
  // BM v10.0 신규 (migration 045)
  { name: 'kept_data_pool', pk: 'id' },
  { name: 'user_reward_log', pk: 'id' },
  { name: 'version_contributors', pk: 'id' },
  { name: 'data_versions', pk: 'version_id' },           // ← 비-id PK
  { name: 'operating_cost_quarterly', pk: 'id' },
  // billable / quality
  { name: 'bu_quality_metrics', pk: 'id' },
  { name: 'billable_units', pk: 'id' },
  // export
  { name: 'export_package_items', pk: 'id' },
  { name: 'user_asset_ledger', pk: 'id' },
  { name: 'delivery_records', pk: 'id' },
  { name: 'export_jobs', pk: 'id' },
  // session 계열
  { name: 'session_chunks', pk: 'id' },
  { name: 'transcript_chunks', pk: 'id' },
  { name: 'transcripts', pk: 'id' },
  { name: 'sessions', pk: 'id' },
  // user-scope
  { name: 'voice_profiles', pk: 'id' },
  { name: 'consent_invitations', pk: 'id' },
  { name: 'consent_withdrawals', pk: 'id' },
  { name: 'upload_block_logs', pk: 'id' },
  { name: 'metadata_events', pk: 'id' },
  { name: 'users_profile', pk: 'user_id' },              // ← 비-id PK
]

// ── safe fetch wrapper (hook fix #1) ────────────────────────────────────
async function safeFetch(url, options = {}, label = 'fetch') {
  try {
    const r = await fetch(url, options)
    const text = await r.text()
    let json = null
    try {
      json = text ? JSON.parse(text) : null
    } catch { /* non-JSON response — text 그대로 사용 */ }
    return { ok: r.ok, status: r.status, json, text }
  } catch (err) {
    return { ok: false, status: 0, json: null, text: '', error: err.message, label }
  }
}

// ── retry helper (hook fix #4) ──────────────────────────────────────────
async function retryWithBackoff(fn, { maxAttempts = 4, baseMs = 500, label = 'op' } = {}) {
  let lastErr = null
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const result = await fn()
    if (result.ok) return result
    lastErr = result
    if (attempt < maxAttempts) {
      const delay = baseMs * Math.pow(2, attempt - 1)
      console.log(`    retry ${attempt}/${maxAttempts - 1} (${delay}ms): ${label} status=${result.status}`)
      await new Promise(r => setTimeout(r, delay))
    }
  }
  return lastErr
}

// ── quota / restriction probe ───────────────────────────────────────────
async function quotaTest() {
  const r = await safeFetch(`${SUPABASE_URL}/storage/v1/bucket`, {
    headers: {
      Authorization: `Bearer ${SUPABASE_KEY}`,
      apikey: SUPABASE_KEY,
    },
  }, 'quota probe')
  if (!r.ok && r.text.includes('exceed_storage_size_quota')) {
    return { ok: false, reason: 'quota' }
  }
  if (!r.ok && r.text.includes('restricted')) {
    return { ok: false, reason: 'restricted' }
  }
  if (!r.ok) {
    return { ok: false, reason: `HTTP ${r.status}: ${r.text.slice(0, 100)}` }
  }
  return { ok: true }
}

// ── Storage purge ───────────────────────────────────────────────────────
async function listBuckets() {
  const r = await safeFetch(`${SUPABASE_URL}/storage/v1/bucket`, {
    headers: {
      Authorization: `Bearer ${SUPABASE_KEY}`,
      apikey: SUPABASE_KEY,
    },
  }, 'list buckets')
  if (!r.ok || !Array.isArray(r.json)) {
    console.error('  Bucket list failed:', r.text.slice(0, 200))
    return []
  }
  return r.json
}

async function listObjects(bucketName, limit = 1000) {
  const r = await safeFetch(
    `${SUPABASE_URL}/storage/v1/object/list/${encodeURIComponent(bucketName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prefix: '', limit }),
    },
    `list ${bucketName}`,
  )
  if (!r.ok || !Array.isArray(r.json)) return []
  return r.json
}

async function deleteObjects(bucketName, paths) {
  return retryWithBackoff(() => safeFetch(
    `${SUPABASE_URL}/storage/v1/object/${encodeURIComponent(bucketName)}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prefixes: paths }),
    },
    `delete ${bucketName} batch`,
  ), { maxAttempts: 4, baseMs: 1000, label: `delete ${bucketName} (${paths.length} objs)` })
}

async function purgeStorage() {
  const buckets = await listBuckets()
  console.log(`\n== Storage buckets (${buckets.length}개) ==`)
  for (const b of buckets) {
    process.stdout.write(`  ${b.name.padEnd(30)} `)
    if (!APPLY) {
      const objs = await listObjects(b.name)
      console.log(`(${objs.length} objects, dry-run)`)
      continue
    }
    let totalDeleted = 0
    let safety = 100  // 최대 100K objects (1K × 100 페이지)
    while (safety-- > 0) {
      const objs = await listObjects(b.name)
      if (objs.length === 0) break
      const paths = objs.map(o => o.name)
      const dr = await deleteObjects(b.name, paths)
      if (!dr.ok) {
        console.log(`(delete batch FAIL after retries: status=${dr.status})`)
        break
      }
      totalDeleted += paths.length
    }
    console.log(`(deleted ${totalDeleted} objects)`)
  }
}

// ── DB tables ───────────────────────────────────────────────────────────
async function tableCount(table) {
  try {
    const { count, error } = await supabase
      .from(table)
      .select('*', { count: 'exact', head: true })
    return { count, error: error?.message }
  } catch (e) {
    return { count: null, error: `exception: ${e.message}` }
  }
}

async function tableTruncate(table, pk) {
  // 1차: 명시된 PK로 IS NOT NULL 매치 (모든 행)
  try {
    const { error, count } = await supabase
      .from(table)
      .delete({ count: 'exact' })
      .not(pk, 'is', null)
    if (!error) return { count, used: pk }
    // 2차: created_at fallback
    const { error: e2, count: c2 } = await supabase
      .from(table)
      .delete({ count: 'exact' })
      .gte('created_at', '1970-01-01')
    if (!e2) return { count: c2, used: 'created_at fallback' }
    return { count: null, error: `pk=${pk}: ${error.message} | created_at: ${e2.message}` }
  } catch (e) {
    return { count: null, error: `exception: ${e.message}` }
  }
}

// ── main ────────────────────────────────────────────────────────────────
async function main() {
  console.log(`=== 전체 더미 데이터 wipe ${APPLY ? '실행' : '(dry-run)'} ===`)
  console.log(`프로젝트: ${SUPABASE_URL}`)
  console.log(`키 길이: ${SUPABASE_KEY.length}자\n`)

  const probe = await quotaTest()
  if (!probe.ok) {
    console.error(`❌ Probe failed: ${probe.reason}`)
    if (probe.reason === 'quota' || probe.reason === 'restricted') {
      console.error('\n사용자 액션 필요:')
      console.error('  Supabase Dashboard → Storage → 모든 bucket의 객체 삭제')
      console.error('  → quota 회복 후 본 스크립트 재실행')
    }
    process.exit(2)
  }
  console.log('✅ Project quota OK — wipe 진행 가능')

  await purgeStorage()

  console.log(`\n== DB 테이블 ${APPLY ? 'wipe' : '행 수 (dry-run)'} ==`)
  let total = 0
  const skipped = []
  for (const t of TABLES) {
    const { count, error } = await tableCount(t.name)
    if (error || count === null) {
      console.log(`  ${t.name.padEnd(35)} SKIP (${(error ?? 'count null').slice(0, 50)})`)
      skipped.push(t.name)
      continue
    }
    if (!APPLY) {
      console.log(`  ${t.name.padEnd(35)} ${String(count).padStart(8)} (pk=${t.pk})`)
      total += count
    } else {
      process.stdout.write(`  ${t.name.padEnd(35)} `)
      const r = await tableTruncate(t.name, t.pk)
      if (r.error) {
        console.log(`FAIL: ${r.error}`)
      } else {
        console.log(`OK (${r.count ?? count} deleted, used=${r.used})`)
      }
    }
  }
  if (!APPLY) {
    console.log(`  ${'TOTAL'.padEnd(35)} ${String(total).padStart(8)}`)
    if (skipped.length) console.log(`  SKIPPED: ${skipped.join(', ')}`)
    console.log('\nDry-run 완료. 실제 wipe: node scripts/analysis/wipe_all_dummy.mjs --apply')
    return
  }

  console.log('\n== 사후 검증 (모두 0 기대) ==')
  let leftover = 0
  for (const t of TABLES) {
    const { count } = await tableCount(t.name)
    if (count !== null && count > 0) {
      console.log(`  ${t.name.padEnd(35)} ${String(count).padStart(8)} 잔존`)
      leftover += count
    }
  }
  if (leftover === 0) {
    console.log('  ✅ 모든 테이블 0 — wipe 완료')
  } else {
    console.log(`  ⚠️  잔존 행 ${leftover}건 — 수동 확인 필요`)
  }
  console.log('\n완료. auth.users 보존됨 (재로그인 가능). 신규 데이터 수집 path 진입 가능.')
}

main().catch(e => {
  console.error('FATAL:', e)
  process.exit(1)
})
