// 발화 미생성 버그 진단 — 세션 #003186, #004302, #005826, #006821
// 실행: node scripts/analysis/diagnose_zero_utterances.mjs
// (uncounted-root 루트에서 실행)

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

const TARGET_IDS = ['003186', '004302', '005826', '006821']

console.log('\n=== 발화 미생성 버그 진단 ===')
console.log(`대상: #${TARGET_IDS.join(', #')}\n`)

for (const shortId of TARGET_IDS) {
  // session_seq 로 찾기
  const { data: sessions, error } = await sb
    .from('sessions')
    .select(`
      id, session_seq,
      gpu_upload_status, gpu_retry_count, gpu_last_error,
      stt_status, diarize_status, gpu_pii_status, quality_status,
      utterance_count,
      raw_audio_url,
      consent_status, review_status,
      updated_at
    `)
    .eq('session_seq', Number(shortId))
    .limit(5)

  if (error) {
    console.error(`[#${shortId}] DB 쿼리 실패:`, error.message)
    continue
  }
  if (!sessions || sessions.length === 0) {
    console.log(`[#${shortId}] ⚠ 세션 없음 — ID 형식 다를 수 있음`)
    continue
  }

  for (const s of sessions) {
    // utterances 실제 개수
    const { count: uttCount, error: uttErr } = await sb
      .from('utterances')
      .select('id', { count: 'exact', head: true })
      .eq('session_id', s.id)

    const uttReal = uttErr ? '쿼리 실패' : uttCount

    console.log(`\n──────────────────────────────`)
    console.log(`세션: #${shortId}  seq=${s.session_seq}  id=${s.id}`)
    console.log(`  gpu_upload_status  : ${s.gpu_upload_status}`)
    console.log(`  gpu_retry_count    : ${s.gpu_retry_count ?? 0}`)
    console.log(`  gpu_last_error     : ${s.gpu_last_error ?? '없음'}`)
    console.log(`  stt_status         : ${s.stt_status}`)
    console.log(`  diarize_status     : ${s.diarize_status}`)
    console.log(`  gpu_pii_status     : ${s.gpu_pii_status}`)
    console.log(`  quality_status     : ${s.quality_status}`)
    console.log(`  utterance_count    : ${s.utterance_count ?? 'null'} (sessions 컬럼)`)
    console.log(`  utterances (실제)  : ${uttReal}건 (utterances 테이블)`)
    console.log(`  consent_status     : ${s.consent_status}`)
    console.log(`  review_status      : ${s.review_status}`)
    console.log(`  raw_audio_url      : ${s.raw_audio_url ? '있음' : '없음 (null)'}`)
    console.log(`  updated_at         : ${s.updated_at}`)

    // 진단
    const issues = []
    if ((uttReal === 0 || uttReal === null) && s.gpu_upload_status === 'done') {
      issues.push('❌ gpu_upload_status=done 인데 utterances 0건 — 버그 대상')
    }
    if (s.quality_status === 'failed' && s.gpu_last_error === 'voice_api_0_utterances') {
      issues.push('✅ 이미 수정 로직 적용됨 (quality_status=failed, error=voice_api_0_utterances)')
    }
    if (s.gpu_upload_status === 'failed' && (s.gpu_retry_count ?? 0) >= 3) {
      issues.push('⚠ retry 소진 (3/3) — 수동 재시도 필요')
    }
    if (!s.raw_audio_url) {
      issues.push('⚠ raw_audio_url 없음 — 오디오 미업로드 상태')
    }
    if (s.quality_status === 'done' && (uttReal === 0)) {
      issues.push('❌ quality_status=done 인데 utterances 0건 — 수동 교정 필요')
    }

    if (issues.length === 0) {
      console.log('  진단: 문제 없음 또는 추가 분석 필요')
    } else {
      for (const issue of issues) {
        console.log(`  진단: ${issue}`)
      }
    }
  }
}

console.log('\n=== 진단 완료 ===\n')
