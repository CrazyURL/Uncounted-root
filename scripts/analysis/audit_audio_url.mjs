// 919 양측 동의 sessions 의 audio_url 상태 진단
// 사용: node scripts/analysis/audit_audio_url.mjs
//
// 목적: GPU 자동 처리 워커 구현 전, 휴대폰에서 서버로 audio 업로드가
//       실제 완료된 세션이 몇 건인지 확인. audio_url IS NULL 이면
//       업로드 자체가 미완료 → 워커가 폴링해도 처리할 거리 없음.

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
  console.log('=== 919 sessions audio_url + GPU pipeline 상태 진단 ===\n')

  // 1) 양측 동의 + audio_url 존재 분포
  const { data: rows, error } = await supabase
    .from('sessions')
    .select(
      'id, audio_url, gpu_upload_status, stt_status, diarize_status, gpu_pii_status, quality_status, upload_status, duration, date, consent_status, stt_at',
    )
    .eq('consent_status', 'both_agreed')
    .order('date', { ascending: false })

  if (error) {
    console.error('SELECT 실패:', error.message)
    process.exit(1)
  }

  console.log(`총 양측동의 sessions: ${rows.length}건\n`)

  // 2) audio_url 분포
  const withAudioUrl = rows.filter((r) => r.audio_url)
  const noAudioUrl = rows.filter((r) => !r.audio_url)
  console.log(`📞 audio_url 분포:`)
  console.log(`  audio_url 존재  : ${withAudioUrl.length}건  (휴대폰 → 서버 업로드 완료)`)
  console.log(`  audio_url NULL  : ${noAudioUrl.length}건  (업로드 미완료 또는 미시도)`)

  // 3) BM v9 upload_status (구 컬럼 — 휴대폰 업로드 진척도)
  console.log(`\n📤 BM v9 upload_status (휴대폰 → 서버 단계):`)
  const uploadStatusGroups = groupBy(rows, (r) => r.upload_status ?? '(null)')
  for (const [k, v] of Object.entries(uploadStatusGroups)) {
    console.log(`  ${k.padEnd(15)} : ${v}건`)
  }

  // 4) BM v10 GPU 처리 5단계 분포
  console.log(`\n🔧 BM v10 GPU 처리 5단계 분포 (audio_url 존재 ${withAudioUrl.length}건 기준):`)
  const stages = ['gpu_upload_status', 'stt_status', 'diarize_status', 'gpu_pii_status', 'quality_status']
  for (const stage of stages) {
    const groups = groupBy(withAudioUrl, (r) => r[stage] ?? '(null)')
    const summary = Object.entries(groups)
      .map(([k, v]) => `${k}=${v}`)
      .join(', ')
    console.log(`  ${stage.padEnd(20)}: ${summary}`)
  }

  // 5) audio_url 있는데 gpu_upload_status='pending' 인 건 (워커가 처리해야 할 본 작업)
  const readyForGpu = withAudioUrl.filter(
    (r) => (r.gpu_upload_status ?? 'pending') === 'pending',
  )
  console.log(`\n🎯 워커 대상 (audio_url 존재 + gpu_upload_status='pending'): ${readyForGpu.length}건`)

  // 6) 이미 STT 처리된 건 (stt_status='done')
  const transcribed = rows.filter((r) => r.stt_status === 'done')
  console.log(`📝 이미 STT 처리된 건 (stt_status='done'): ${transcribed.length}건`)

  // 7) 가장 최근 업로드 시간
  if (withAudioUrl.length > 0) {
    const recent = withAudioUrl.slice(0, 5)
    console.log(`\n📅 최근 audio_url 존재 5건:`)
    for (const r of recent) {
      console.log(
        `  ${r.id.slice(0, 8)} | date=${r.date ?? '?'} | dur=${r.duration ?? '?'}s | gpu=${r.gpu_upload_status ?? '(null)'} | stt=${r.stt_status ?? '(null)'}`,
      )
    }
  }

  // 8) 결론
  console.log(`\n=== 결론 ===`)
  if (withAudioUrl.length === 0) {
    console.log(`❌ audio_url 있는 세션이 0건 — 휴대폰 → 서버 업로드 자체가 작동 안 함.`)
    console.log(`   → 워커 구현 전에 App 의 업로드 흐름부터 점검 필요.`)
  } else if (readyForGpu.length === 0) {
    console.log(`✅ audio_url 있는 ${withAudioUrl.length}건 모두 이미 처리됨 (또는 처리 중).`)
    console.log(`   → 워커 구현해도 즉시 처리할 거리 없음. 신규 업로드 대기.`)
  } else {
    console.log(`✅ 워커 즉시 처리 대상: ${readyForGpu.length}건.`)
    console.log(`   → 백그라운드 폴링 워커 구현 시 즉시 효과 확인 가능.`)
  }
}

function groupBy(arr, keyFn) {
  const out = {}
  for (const x of arr) {
    const k = keyFn(x)
    out[k] = (out[k] ?? 0) + 1
  }
  return out
}

main().catch((e) => {
  console.error('FATAL:', e.message, e.stack)
  process.exit(1)
})
