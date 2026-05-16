// 919 sessions 의 audio_url 이 실제로 다운로드 가능한지 샘플 검증
// 업로드 상태가 LOCAL 인 게 의심스러움 — audio_url 이 dummy 일 수 있음
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
  console.log('=== audio_url 실제 다운로드 가능성 검증 ===\n')

  // 양측동의 5건 샘플
  const { data: sample, error } = await supabase
    .from('sessions')
    .select('id, audio_url, upload_status, file_hash_sha256, duration')
    .eq('consent_status', 'both_agreed')
    .limit(5)

  if (error) {
    console.error('SELECT 실패:', error.message)
    process.exit(1)
  }

  console.log(`샘플 ${sample.length}건의 audio_url 패턴:\n`)
  for (const r of sample) {
    console.log(`  id=${r.id.slice(0, 8)}`)
    console.log(`    upload_status: ${r.upload_status}`)
    console.log(`    audio_url:     ${r.audio_url}`)
    console.log(`    duration:      ${r.duration}s`)
    console.log(`    file_hash:     ${r.file_hash_sha256?.slice(0, 16) ?? '(null)'}`)
    console.log()
  }

  // 패턴 빈도 분석
  console.log(`audio_url 패턴 분석:`)
  const allUrls = await supabase
    .from('sessions')
    .select('audio_url')
    .eq('consent_status', 'both_agreed')
  const patterns = {}
  for (const r of allUrls.data) {
    const m = r.audio_url?.match(/^(https?:\/\/[^\/]+|file:\/\/|content:\/\/|[^\/:]+:\/\/)/)
    const key = m ? m[1] : '(other)'
    patterns[key] = (patterns[key] ?? 0) + 1
  }
  for (const [k, v] of Object.entries(patterns)) {
    console.log(`  ${k.padEnd(50)} : ${v}건`)
  }

  // Storage 경로 prefix 검사 (Supabase Storage URL 패턴)
  const supabaseHost = env.SUPABASE_URL?.replace('https://', '').replace(/^http:\/\//, '')
  if (supabaseHost) {
    const storageMatches = allUrls.data.filter((r) =>
      r.audio_url?.includes(supabaseHost),
    ).length
    console.log(`\n  Supabase Storage URL 매칭 (${supabaseHost}): ${storageMatches}건`)
  }

  // 최초 1건 실제 HEAD 요청
  if (sample.length > 0 && sample[0].audio_url) {
    const url = sample[0].audio_url
    console.log(`\n첫 샘플 audio_url HEAD 요청:`)
    console.log(`  URL: ${url}`)
    try {
      const res = await fetch(url, { method: 'HEAD' })
      console.log(`  status: ${res.status} ${res.statusText}`)
      console.log(`  content-type: ${res.headers.get('content-type')}`)
      console.log(`  content-length: ${res.headers.get('content-length')}`)
    } catch (e) {
      console.log(`  fetch 실패: ${e.message}`)
    }
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message)
  process.exit(1)
})
