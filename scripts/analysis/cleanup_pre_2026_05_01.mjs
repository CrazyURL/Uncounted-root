// 2026-05-01 cutoff 기반 storage 정리 스크립트
//
// 사용:
//   node scripts/analysis/cleanup_pre_2026_05_01.mjs              # dry-run (보존/삭제 카운트만)
//   node scripts/analysis/cleanup_pre_2026_05_01.mjs --apply      # 실제 정리
//
// 보존 기준 (사용자 결정):
//   sessions WHERE consent_status='both_agreed' AND consented_at >= '2026-05-01T00:00:00Z'
//
// 삭제 대상:
//   1. 비보존 sessions
//   2. 연결된 utterances / transcripts / transcript_chunks / session_chunks / billable_units / bu_quality_metrics
//   3. 비보존 sessions 의 storage objects (bucket 전체 wipe 가 아니라 session_id 기반 prefix 제거)
//
// 보존 (영향 없음):
//   - auth.users (재로그인 가능)
//   - users_profile (디모그래픽 보존)
//   - voice_profiles (재학습 불요)
//   - clients / delivery_profiles / sku_presets (운영 데이터)
//   - kept_data_pool / data_versions / version_contributors / user_reward_log (BM v10 운영 이력)
//   - consent_invitations / consent_withdrawals (감사 추적)
//
// 안전장치:
//   - dry-run 기본 (--apply 명시 필요)
//   - 보존 세션 0건이면 자동 중단 (부주의한 전체 삭제 방지)
//   - 사후 검증 (보존 세션 카운트 일치 확인)

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const CUTOFF = '2026-05-01T00:00:00Z'

// ── env 로드 ───────────────────────────────────────────────────────────
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

// ── safe fetch ──────────────────────────────────────────────────────────
async function safeFetch(url, options = {}, label = 'fetch') {
  try {
    const r = await fetch(url, options)
    const text = await r.text()
    let json = null
    try { json = text ? JSON.parse(text) : null } catch {}
    return { ok: r.ok, status: r.status, json, text }
  } catch (err) {
    return { ok: false, status: 0, json: null, text: '', error: err.message, label }
  }
}

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

// ── 보존 세션 수집 ──────────────────────────────────────────────────────
async function collectPreservedSessionIds() {
  const ids = new Set()
  let from = 0
  const pageSize = 1000
  while (true) {
    const { data, error } = await supabase
      .from('sessions')
      .select('id, consented_at, user_id')
      .eq('consent_status', 'both_agreed')
      .gte('consented_at', CUTOFF)
      .range(from, from + pageSize - 1)
    if (error) throw new Error(`보존 세션 수집 실패: ${error.message}`)
    if (!data || data.length === 0) break
    for (const row of data) ids.add(row.id)
    if (data.length < pageSize) break
    from += pageSize
  }
  return ids
}

// ── 비보존 세션 수집 ───────────────────────────────────────────────────
async function collectAllSessionIds() {
  const ids = new Set()
  let from = 0
  const pageSize = 1000
  while (true) {
    const { data, error } = await supabase
      .from('sessions')
      .select('id')
      .range(from, from + pageSize - 1)
    if (error) throw new Error(`전체 세션 수집 실패: ${error.message}`)
    if (!data || data.length === 0) break
    for (const row of data) ids.add(row.id)
    if (data.length < pageSize) break
    from += pageSize
  }
  return ids
}

// ── 자식 테이블 정리 ────────────────────────────────────────────────────
// 자식 → 부모 순서. session_id FK 가진 테이블만 일괄 정리.
const CHILD_TABLES = [
  // 가장 깊은 자식부터
  { name: 'pii_intervals', fk: 'utterance_id', via: 'utterances' },
  { name: 'pii_masking_audit', fk: 'utterance_id', via: 'utterances' },
  { name: 'utterance_review_audit', fk: 'utterance_id', via: 'utterances' },
  // session_id 직접 참조
  { name: 'utterances', fk: 'session_id' },
  { name: 'transcript_chunks', fk: 'transcript_id', via: 'transcripts' },
  { name: 'transcripts', fk: 'session_id' },
  { name: 'session_chunks', fk: 'session_id' },
  { name: 'bu_quality_metrics', fk: 'bu_id', via: 'billable_units' },
  { name: 'billable_units', fk: 'session_id' },
  { name: 'export_package_items', fk: 'session_id' },
  { name: 'metadata_events', fk: 'session_id' },
]

async function tableCountForSessionIds(table, fk, sessionIds) {
  if (sessionIds.size === 0) return 0
  // chunked IN query (in 절은 너무 크면 URL too long)
  let total = 0
  const ids = Array.from(sessionIds)
  const chunkSize = 100
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize)
    const { count, error } = await supabase
      .from(table)
      .select('*', { count: 'exact', head: true })
      .in(fk, chunk)
    if (error) {
      // 테이블 미존재 가능 — skip
      return null
    }
    total += count ?? 0
  }
  return total
}

async function tableDeleteForSessionIds(table, fk, sessionIds) {
  if (sessionIds.size === 0) return { count: 0 }
  let total = 0
  const ids = Array.from(sessionIds)
  const chunkSize = 100
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize)
    const { count, error } = await supabase
      .from(table)
      .delete({ count: 'exact' })
      .in(fk, chunk)
    if (error) return { count: total, error: error.message }
    total += count ?? 0
  }
  return { count: total }
}

// `via` 테이블이 있는 경우: via 테이블에서 session_id 기반으로 child id 수집 후 삭제
async function collectChildIdsViaParent(viaTable, parentFk, sessionIds) {
  if (sessionIds.size === 0) return new Set()
  const childIds = new Set()
  const ids = Array.from(sessionIds)
  const chunkSize = 100
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize)
    const { data, error } = await supabase
      .from(viaTable)
      .select('id')
      .in(parentFk, chunk)
    if (error) return null
    for (const row of data ?? []) childIds.add(row.id)
  }
  return childIds
}

// ── Storage 정리 (session_id prefix 기반) ───────────────────────────────
async function listBuckets() {
  const r = await safeFetch(`${SUPABASE_URL}/storage/v1/bucket`, {
    headers: { Authorization: `Bearer ${SUPABASE_KEY}`, apikey: SUPABASE_KEY },
  }, 'list buckets')
  if (!r.ok || !Array.isArray(r.json)) {
    console.error('  Bucket list 실패:', r.text.slice(0, 200))
    return []
  }
  return r.json
}

async function listObjects(bucketName, limit = 1000, offset = 0) {
  const r = await safeFetch(
    `${SUPABASE_URL}/storage/v1/object/list/${encodeURIComponent(bucketName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prefix: '', limit, offset }),
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

// session_id 가 포함된 object name 인지 검사
// path 패턴 예: "<user_id>/<session_id>/audio.wav" 또는 "<session_id>/..."
function objectMatchesSessionId(objName, sessionIdSet) {
  if (!objName) return false
  // UUID 패턴이 path 어딘가에 등장하는지
  const uuidRe = /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gi
  let match
  while ((match = uuidRe.exec(objName)) !== null) {
    if (sessionIdSet.has(match[1].toLowerCase())) return true
  }
  return false
}

async function cleanupStorage(preservedIds) {
  const buckets = await listBuckets()
  const lcPreserved = new Set(Array.from(preservedIds).map(id => id.toLowerCase()))
  console.log(`\n== Storage 정리 (보존: ${lcPreserved.size}개 session_id) ==`)
  for (const b of buckets) {
    process.stdout.write(`  ${b.name.padEnd(30)} `)
    let allObjs = []
    let page = 0
    while (page < 100) {
      const objs = await listObjects(b.name, 1000, page * 1000)
      if (objs.length === 0) break
      allObjs.push(...objs)
      if (objs.length < 1000) break
      page++
    }
    if (allObjs.length === 0) {
      console.log('(empty)')
      continue
    }
    const toDelete = []
    let preserved = 0
    let unmatched = 0  // session_id 없는 object — 보수적으로 보존
    for (const o of allObjs) {
      if (objectMatchesSessionId(o.name, lcPreserved)) {
        preserved++
      } else {
        const uuidRe = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
        if (uuidRe.test(o.name)) {
          // UUID 있는데 보존 세트에 없음 = 비보존 세션 데이터 → 삭제
          toDelete.push(o.name)
        } else {
          // UUID 없는 object — 보수적 보존 (예: 운영 파일·readme)
          unmatched++
        }
      }
    }
    if (!APPLY) {
      console.log(`(전체=${allObjs.length} 보존=${preserved} 삭제예정=${toDelete.length} 미매칭=${unmatched}, dry-run)`)
      continue
    }
    if (toDelete.length === 0) {
      console.log(`(삭제 없음, 보존=${preserved})`)
      continue
    }
    let deleted = 0
    const batchSize = 100
    for (let i = 0; i < toDelete.length; i += batchSize) {
      const batch = toDelete.slice(i, i + batchSize)
      const dr = await deleteObjects(b.name, batch)
      if (dr.ok) deleted += batch.length
    }
    console.log(`(삭제=${deleted}/${toDelete.length} 보존=${preserved} 미매칭=${unmatched})`)
  }
}

// ── main ────────────────────────────────────────────────────────────────
async function main() {
  console.log(`=== 2026-05-01 cutoff 기반 정리 ${APPLY ? '실행' : '(dry-run)'} ===`)
  console.log(`프로젝트: ${SUPABASE_URL}`)
  console.log(`보존 기준: consent_status='both_agreed' AND consented_at >= ${CUTOFF}\n`)

  // 1. 보존 세션 수집
  console.log('-- 보존 세션 수집 --')
  const preservedIds = await collectPreservedSessionIds()
  console.log(`  보존 대상: ${preservedIds.size}개 sessions`)
  if (preservedIds.size === 0) {
    console.error('\n❌ 보존 세션 0건. 부주의한 전체 삭제 방지를 위해 중단.')
    console.error('   기준 cutoff 또는 consent_status 데이터 확인 필요.')
    process.exit(2)
  }

  // 2. 전체 세션 ID 수집
  console.log('\n-- 전체 세션 수집 --')
  const allIds = await collectAllSessionIds()
  console.log(`  전체: ${allIds.size}개 sessions`)
  const deleteIds = new Set()
  for (const id of allIds) {
    if (!preservedIds.has(id)) deleteIds.add(id)
  }
  console.log(`  삭제 대상: ${deleteIds.size}개 sessions`)

  if (deleteIds.size === 0) {
    console.log('\n삭제 대상 없음. Storage 만 점검.')
    await cleanupStorage(preservedIds)
    return
  }

  // 3. 자식 테이블 카운트 (dry-run)
  console.log('\n-- 자식 테이블 영향 카운트 --')
  for (const t of CHILD_TABLES) {
    let targetIds
    if (t.via) {
      // via 테이블 거쳐서 child id 수집 — dry-run 만 카운트, apply 시 실제 child 삭제 사용
      const childIds = await collectChildIdsViaParent(t.via, t.fk === 'utterance_id' ? 'session_id' : 'session_id', deleteIds)
      // 위 구조는 단순화 — 본 코드에서는 via 테이블이 모두 utterances/transcripts/billable_units 이므로
      // 그것들이 session_id 를 직접 갖고 있어서 collectChildIdsViaParent 가 정상 동작
      if (childIds === null) {
        console.log(`  ${t.name.padEnd(30)} SKIP (table missing)`)
        continue
      }
      targetIds = childIds
      const count = targetIds.size
      console.log(`  ${t.name.padEnd(30)} ${String(count).padStart(8)} (via ${t.via}.${t.fk === 'utterance_id' ? 'session_id' : 'session_id'})`)
    } else {
      const count = await tableCountForSessionIds(t.name, t.fk, deleteIds)
      if (count === null) {
        console.log(`  ${t.name.padEnd(30)} SKIP (table missing)`)
        continue
      }
      console.log(`  ${t.name.padEnd(30)} ${String(count).padStart(8)} (fk=${t.fk})`)
    }
  }

  // 4. sessions 테이블 카운트 (자체)
  console.log(`  ${'sessions'.padEnd(30)} ${String(deleteIds.size).padStart(8)} (직접)`)

  if (!APPLY) {
    console.log('\nDry-run 완료. 실제 정리: node scripts/analysis/cleanup_pre_2026_05_01.mjs --apply')
    await cleanupStorage(preservedIds)  // dry-run storage 카운트도 표시
    return
  }

  // ── APPLY 모드: 실제 삭제 ────────────────────────────────────────────
  console.log('\n== 실제 정리 시작 ==')

  // 자식 → 부모 순으로 삭제
  for (const t of CHILD_TABLES) {
    process.stdout.write(`  ${t.name.padEnd(30)} `)
    let targetIds, fkUsed
    if (t.via) {
      const childIds = await collectChildIdsViaParent(t.via, 'session_id', deleteIds)
      if (childIds === null) { console.log('SKIP'); continue }
      // child 테이블에서는 child.id 기준으로 삭제 (즉 fk='id' 가 아니라 'id' in childIds)
      let total = 0
      const arr = Array.from(childIds)
      for (let i = 0; i < arr.length; i += 100) {
        const chunk = arr.slice(i, i + 100)
        const { count, error } = await supabase
          .from(t.name)
          .delete({ count: 'exact' })
          .in('id', chunk)
        if (error) {
          console.log(`FAIL (${error.message.slice(0, 80)})`)
          total = -1
          break
        }
        total += count ?? 0
      }
      if (total >= 0) console.log(`OK (deleted=${total})`)
      continue
    }
    const r = await tableDeleteForSessionIds(t.name, t.fk, deleteIds)
    if (r.error) console.log(`FAIL (${r.error.slice(0, 80)})`)
    else console.log(`OK (deleted=${r.count})`)
  }

  // sessions 테이블 자체 삭제
  process.stdout.write(`  ${'sessions'.padEnd(30)} `)
  const r = await tableDeleteForSessionIds('sessions', 'id', deleteIds)
  if (r.error) console.log(`FAIL (${r.error.slice(0, 80)})`)
  else console.log(`OK (deleted=${r.count})`)

  // Storage 정리
  await cleanupStorage(preservedIds)

  // ── 사후 검증 ────────────────────────────────────────────────────────
  console.log('\n== 사후 검증 ==')
  const finalCount = await collectPreservedSessionIds()
  console.log(`  보존 sessions: ${finalCount.size} (기대: ${preservedIds.size})`)
  if (finalCount.size === preservedIds.size) {
    console.log('  ✅ 보존 세션 카운트 일치')
  } else {
    console.log(`  ⚠️  보존 카운트 불일치 (delta=${finalCount.size - preservedIds.size})`)
  }
  const allFinal = await collectAllSessionIds()
  console.log(`  전체 sessions: ${allFinal.size} (기대: ${preservedIds.size})`)
  if (allFinal.size === preservedIds.size) {
    console.log('  ✅ 비보존 세션 모두 삭제됨')
  } else {
    console.log(`  ⚠️  비보존 잔존: ${allFinal.size - preservedIds.size}건`)
  }

  console.log('\n완료. auth.users / users_profile / voice_profiles / clients 등 운영 데이터 보존됨.')
}

main().catch(e => {
  console.error('FATAL:', e)
  process.exit(1)
})
