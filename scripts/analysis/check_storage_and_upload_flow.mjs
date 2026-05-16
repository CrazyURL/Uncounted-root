// Storage 버킷 + upload_status enum + 실제 서버 업로드 메커니즘 검증
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

async function main() {
  console.log('=== Storage 버킷 + 업로드 상태 분포 ===\n')

  // 1) 모든 sessions 의 upload_status 분포 (양측동의 외 포함)
  const { data: allSessions, error: e1 } = await supabase
    .from('sessions')
    .select('upload_status, consent_status, audio_url')

  if (e1) {
    console.error('sessions select 실패:', e1.message)
    process.exit(1)
  }

  console.log(`전체 sessions ${allSessions.length}건의 upload_status 분포:`)
  const allDist = {}
  for (const r of allSessions) {
    const k = r.upload_status ?? '(null)'
    allDist[k] = (allDist[k] ?? 0) + 1
  }
  for (const [k, v] of Object.entries(allDist)) {
    console.log(`  ${k.padEnd(15)} : ${v}건`)
  }

  // 2) audio_url 형태 분류
  console.log(`\naudio_url 형태 분류 (전체):`)
  const urlDist = {}
  for (const r of allSessions) {
    let k
    if (!r.audio_url) k = '(null)'
    else if (r.audio_url.startsWith('http')) k = 'http(s)://'
    else if (r.audio_url.startsWith('Recordings/')) k = 'Recordings/ (phone-local)'
    else if (r.audio_url.startsWith('audio/')) k = 'audio/ (storage path)'
    else if (r.audio_url.includes('.m4a') || r.audio_url.includes('.wav')) k = 'other audio path'
    else k = 'other'
    urlDist[k] = (urlDist[k] ?? 0) + 1
  }
  for (const [k, v] of Object.entries(urlDist)) {
    console.log(`  ${k.padEnd(40)} : ${v}건`)
  }

  // 3) Supabase Storage 버킷 목록
  console.log(`\nSupabase Storage 버킷 목록:`)
  const { data: buckets, error: e2 } = await supabase.storage.listBuckets()
  if (e2) {
    console.error('  버킷 목록 실패:', e2.message)
  } else {
    for (const b of buckets) {
      console.log(`  - ${b.name} (public=${b.public})`)
    }
  }

  // 4) audio 버킷 상세 (있으면)
  if (buckets?.find((b) => b.name === 'audio')) {
    const { data: files, error: e3 } = await supabase.storage
      .from('audio')
      .list('', { limit: 10 })
    if (e3) {
      console.log(`  audio 버킷 list 실패: ${e3.message}`)
    } else {
      console.log(`\n  audio 버킷 최상위 ${files.length}개:`)
      for (const f of files) {
        console.log(`    ${f.name} (size=${f.metadata?.size ?? '?'})`)
      }
    }
  }

  // 5) 최근 utterances 행 (있으면 — GPU 처리 결과물)
  const { data: utts, error: e4, count: uttCount } = await supabase
    .from('utterances')
    .select('*', { count: 'exact' })
    .limit(3)
  if (e4) {
    console.log(`\nutterances 테이블 query 실패: ${e4.message}`)
  } else {
    console.log(`\nutterances 행 수: ${uttCount}건`)
    if (utts.length > 0) {
      console.log(`샘플 1건의 컬럼:`)
      console.log(`  ${Object.keys(utts[0]).sort().join(', ')}`)
    }
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message, e.stack)
  process.exit(1)
})
