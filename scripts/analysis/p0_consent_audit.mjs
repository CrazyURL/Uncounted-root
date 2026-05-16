// P0-4: both_agreed 세션 중 raw_audio_url IS NULL 규모 파악
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

// 1. both_agreed 세션 raw_audio_url 유무 카운트
const { data: all, error: e1 } = await supabase
  .from('sessions')
  .select('id, raw_audio_url, consented_at, gpu_upload_status, quality_status, updated_at')
  .eq('consent_status', 'both_agreed')

if (e1) { console.error('error:', e1); process.exit(1) }

const total = all.length
const hasAudio = all.filter(r => r.raw_audio_url).length
const noAudio = all.filter(r => !r.raw_audio_url).length

console.log('\n========== P0-4 진단 결과 ==========')
console.log(`both_agreed 세션 총계: ${total}`)
console.log(`  ├ raw_audio_url 있음: ${hasAudio}`)
console.log(`  └ raw_audio_url 없음 (정체): ${noAudio}`)

// 2. 정체 세션 연령대 분포 (consented_at 기준)
const stale = all.filter(r => !r.raw_audio_url)
const now = Date.now()
const buckets = { '1h미만': 0, '1~24h': 0, '1~7일': 0, '7일초과': 0 }
for (const r of stale) {
  const ts = r.consented_at || r.updated_at
  if (!ts) { buckets['7일초과']++; continue }
  const ageMins = (now - new Date(ts).getTime()) / 60000
  if (ageMins < 60) buckets['1h미만']++
  else if (ageMins < 1440) buckets['1~24h']++
  else if (ageMins < 10080) buckets['1~7일']++
  else buckets['7일초과']++
}
console.log('\n정체 세션 연령대 (consented_at 기준):')
for (const [k, v] of Object.entries(buckets)) {
  console.log(`  ${k}: ${v}건`)
}

// 3. audio있는 세션의 품질 분포 (처리 완료 확인)
console.log('\naudio 있는 세션 quality_status 분포:')
const qDist = {}
for (const r of all.filter(r => r.raw_audio_url)) {
  qDist[r.quality_status || 'null'] = (qDist[r.quality_status || 'null'] || 0) + 1
}
for (const [k, v] of Object.entries(qDist)) {
  console.log(`  ${k}: ${v}`)
}

// 4. 전체 세션 consent_status 분포
const { data: allSessions, error: e2 } = await supabase
  .from('sessions')
  .select('consent_status')

if (!e2) {
  const cDist = {}
  for (const r of allSessions) {
    cDist[r.consent_status || 'null'] = (cDist[r.consent_status || 'null'] || 0) + 1
  }
  console.log('\n전체 sessions consent_status 분포:')
  for (const [k, v] of Object.entries(cDist)) {
    console.log(`  ${k}: ${v}`)
  }
}

console.log('\n======================================')
