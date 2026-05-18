// scripts/validate_session.mjs
// 처리 완료된 세션의 모든 컬럼 검증

import { createClient } from '../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const session_id = process.argv[2]
if (!session_id) {
  console.error('사용법: node scripts/validate_session.mjs <session_id>')
  process.exit(1)
}

const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}

const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

async function countNull(column) {
  const { count, error } = await supabase
    .from('utterances')
    .select('*', { count: 'exact', head: true })
    .eq('session_id', session_id)
    .is(column, null)
  if (error) throw new Error(`utterances.${column} query failed: ${error.message}`)
  return count ?? 0
}

const checks = {
  '자동 라벨': async () => {
    const [emotionNull, dialogActNull] = await Promise.all([
      countNull('emotion'),
      countNull('dialog_act'),
    ])
    const fail = emotionNull + dialogActNull
    const parts = []
    if (emotionNull > 0) parts.push(`emotion NULL ${emotionNull}개`)
    if (dialogActNull > 0) parts.push(`dialog_act NULL ${dialogActNull}개`)
    return { fail, message: fail === 0 ? '모두 채워짐' : parts.join(', ') }
  },

  'Tier A': async () => {
    const cols = ['speech_rate_wpm', 'silence_before_sec', 'confidence_tier', 'audio_quality_class']
    const counts = await Promise.all(cols.map(c => countNull(c)))
    const fail = counts.reduce((a, b) => a + b, 0)
    const failParts = cols.map((c, i) => counts[i] > 0 ? `${c} NULL ${counts[i]}개` : null).filter(Boolean)
    return { fail, message: fail === 0 ? '모두 채워짐' : failParts.join(', ') }
  },

  'Tier B': async () => {
    const cols = ['honorific_level', 'question_type', 'language_mix_flag']
    const counts = await Promise.all(cols.map(c => countNull(c)))
    const fail = counts.reduce((a, b) => a + b, 0)
    const failParts = cols.map((c, i) => counts[i] > 0 ? `${c} NULL ${counts[i]}개` : null).filter(Boolean)
    return { fail, message: fail === 0 ? '모두 채워짐' : failParts.join(', ') }
  },

  '품질 메트릭': async () => {
    const [snrNull, gradeNull] = await Promise.all([
      countNull('snr_db'),
      countNull('quality_grade'),
    ])
    const { data: session, error: sesErr } = await supabase
      .from('sessions')
      .select('audio_metrics')
      .eq('id', session_id)
      .single()
    if (sesErr) throw new Error(`sessions query failed: ${sesErr.message}`)

    const audioMetricsMissing = session?.audio_metrics == null
    const fail = snrNull + gradeNull + (audioMetricsMissing ? 1 : 0)
    const parts = []
    if (snrNull > 0) parts.push(`snr_db NULL ${snrNull}개`)
    if (gradeNull > 0) parts.push(`quality_grade NULL ${gradeNull}개`)
    if (audioMetricsMissing) parts.push('sessions.audio_metrics NULL')
    return { fail, message: fail === 0 ? '모두 채워짐' : parts.join(', ') }
  },

  '세그먼트': async () => {
    const { data: segments, error: segErr } = await supabase
      .from('session_segments')
      .select('id, segment_index, utterance_count, topic')
      .eq('session_id', session_id)
    if (segErr) throw new Error(`session_segments query failed: ${segErr.message}`)

    if (!segments || segments.length === 0) {
      return { fail: 1, message: 'session_segments 없음' }
    }

    const mismatchParts = []
    for (const seg of segments) {
      const { count, error } = await supabase
        .from('utterances')
        .select('*', { count: 'exact', head: true })
        .eq('session_id', session_id)
        .eq('segment_id', seg.id)
      if (error) throw new Error(`segment utterance count query failed: ${error.message}`)
      if (count !== seg.utterance_count) {
        mismatchParts.push(`seg[${seg.segment_index}]: 기록=${seg.utterance_count} 실제=${count}`)
      }
    }

    const topicNullCount = segments.filter(s => !s.topic).length
    const fail = mismatchParts.length + topicNullCount
    const parts = []
    if (mismatchParts.length > 0) parts.push(`발화수 불일치 ${mismatchParts.length}건 (${mismatchParts.join(' | ')})`)
    if (topicNullCount > 0) parts.push(`topic NULL ${topicNullCount}개`)
    return { fail, message: fail === 0 ? `세그먼트 ${segments.length}개 정상` : parts.join(', ') }
  },

  '화자 카운트 일치': async () => {
    const [speakersRes, sessionRes, unassignedRes] = await Promise.all([
      supabase.from('session_speakers').select('id, speaker_label, speaker_role').eq('session_id', session_id),
      supabase.from('sessions').select('auto_label_status').eq('id', session_id).single(),
      supabase.from('utterances').select('*', { count: 'exact', head: true }).eq('session_id', session_id).is('session_speaker_id', null),
    ])

    if (speakersRes.error) throw new Error(`session_speakers query failed: ${speakersRes.error.message}`)
    if (sessionRes.error) throw new Error(`sessions query failed: ${sessionRes.error.message}`)
    if (unassignedRes.error) throw new Error(`utterances speaker_id query failed: ${unassignedRes.error.message}`)

    const speakers = speakersRes.data ?? []
    const autoLabelStatus = sessionRes.data?.auto_label_status
    const unassignedCount = unassignedRes.count ?? 0

    const parts = []
    if (speakers.length === 0) parts.push('session_speakers 없음')
    if (unassignedCount > 0) parts.push(`session_speaker_id NULL ${unassignedCount}개`)
    if (autoLabelStatus !== 'done') parts.push(`auto_label_status=${autoLabelStatus ?? 'NULL'}`)

    const fail = parts.length
    return {
      fail,
      message: fail === 0
        ? `화자 ${speakers.length}명, auto_label_status=done`
        : parts.join(', '),
    }
  },
}

console.log(`\n세션 검증: ${session_id}\n`)

let totalFail = 0
for (const [name, check] of Object.entries(checks)) {
  try {
    const result = await check()
    totalFail += result.fail
    console.log(`${result.fail === 0 ? '✅' : '❌'} ${name}: ${result.message}`)
  } catch (err) {
    totalFail += 1
    console.log(`❌ ${name}: ERROR — ${err.message}`)
  }
}

console.log(`\n총 결과: ${totalFail === 0 ? '✅ 모두 통과' : `❌ ${totalFail}건 실패`}\n`)
process.exit(totalFail === 0 ? 0 : 1)
