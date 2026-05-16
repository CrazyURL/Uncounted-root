// dev DB에 어떤 migration이 적용됐는지 진단 — 각 migration이 생성하는 핵심 객체 존재 확인
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

// 각 migration이 도입한 테이블 또는 식별 컬럼 (실제 SQL 확인 후 정정)
const checks = [
  { migration: '036_pii_masking_audit',          table: 'utterances', column: 'pii_masked' },
  { migration: '036_bu_quality_metrics_rls_fix', table: 'bu_quality_metrics', via: 'table' },
  { migration: '037_review_sync_tracking',       table: 'export_jobs', column: 'review_sync_status' },
  { migration: '038_utterance_review_tracking',  table: 'utterances', column: 'reviewed_at' },
  { migration: '039_upload_block_logs',          table: 'upload_block_logs', via: 'table' },
  { migration: '040_consent_invitations',        table: 'consent_invitations', via: 'table' },
  { migration: '041_consent_withdrawals',        table: 'consent_withdrawals', via: 'table' },
  { migration: '042_voice_profiles_origin_anchor', table: 'voice_profiles', column: 'origin_reference_embedding' },
  { migration: '043_utterances_v2_schema',       table: 'utterances', column: 'duration_ms' },
  { migration: '044_utterances_v2_slots',        table: 'utterances', column: 'noise_category' },
  { migration: '045_bm_v10_versions_rewards',    table: 'data_versions', via: 'table' },
]

for (const c of checks) {
  if (c.via === 'table') {
    const { data, error } = await sb.from(c.table).select('*').limit(1)
    const status = error
      ? (error.message.includes('Could not find the table') ? '❌ 미적용' : `⚠️ ${error.message.slice(0, 50)}`)
      : '✅ 적용됨'
    console.log(`${c.migration.padEnd(40)} ${status}`)
  } else {
    // 컬럼 존재 확인 — select column
    const { error } = await sb.from(c.table).select(c.column).limit(1)
    const status = error
      ? (error.message.includes('column') ? '❌ 컬럼 미적용' : `⚠️ ${error.message.slice(0, 50)}`)
      : '✅ 컬럼 적용됨'
    console.log(`${c.migration.padEnd(40)} ${status} (col=${c.column})`)
  }
}
