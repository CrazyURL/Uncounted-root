// 기존 utterance 품질 점수 백필 스크립트
//
// 대상: quality_status='done' 이지만 utterances.quality_score가 null인 세션
//
// 실행 (uncounted-root 루트에서):
//   node scripts/analysis/backfill_utterance_quality.mjs --dry-run
//   node scripts/analysis/backfill_utterance_quality.mjs --batch=50

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { S3Client, GetObjectCommand } from '../../uncounted-api/node_modules/@aws-sdk/client-s3/dist/cjs/index.js'
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { execSync } from 'node:child_process'
import { resolve } from 'node:path'

// ── CLI 인자 파싱 ──────────────────────────────────────────────────────
const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const batchArg = args.find((a) => a.startsWith('--batch='))
const BATCH_SIZE = batchArg ? parseInt(batchArg.split('=')[1], 10) : 50
const BATCH_DELAY_MS = 1000

console.log(`\n=== utterance 품질 백필 ===`)
console.log(`모드: ${isDryRun ? 'DRY-RUN (DB 미변경)' : '실제 실행'}`)
console.log(`배치 크기: ${BATCH_SIZE} utterances`)
console.log()

// ── 환경 변수 로드 ─────────────────────────────────────────────────────
const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}

const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const s3 = new S3Client({
  endpoint: env.S3_ENDPOINT,
  region: env.S3_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.S3_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
})

const S3_AUDIO_BUCKET = env.S3_AUDIO_BUCKET

// ── 품질 계산 (gpu-worker와 동일 공식) ───────────────────────────────
function computeQualityGrade(score) {
  if (score >= 80) return 'A'
  if (score >= 50) return 'B'
  return 'C'
}

function computeQualityScoreFromStats(stats) {
  const snrDb = Math.abs(stats.peakDb - stats.rmsDb)
  const speechRatio = Math.max(0, 1 - stats.silenceRatio)
  const clippingRatio = stats.peakDb > -1 ? Math.min(1, (stats.peakDb + 1) / 1) : 0

  const snrScore = Math.min(100, Math.max(0, snrDb * 3))
  const speechScore = Math.min(100, speechRatio * 120)
  const clippingPenalty = clippingRatio * 30

  return Math.round(
    Math.max(0, Math.min(100, snrScore * 0.4 + speechScore * 0.4 + 20 - clippingPenalty)),
  )
}

function getAudioStatsFromPath(wavPath) {
  // FFmpeg astats
  let astatsOut = ''
  try {
    astatsOut = execSync(
      `ffmpeg -i "${wavPath}" -af astats=metadata=1:reset=0 -f null - 2>&1`,
      { encoding: 'utf-8', timeout: 30000 },
    )
  } catch (e) {
    astatsOut = e.stdout ?? e.message ?? ''
  }

  const rmsMatch = astatsOut.match(/RMS level dB:\s*([-\d.]+)/)
  const peakMatch = astatsOut.match(/Peak level dB:\s*([-\d.]+)/)
  const rmsDb = rmsMatch ? parseFloat(rmsMatch[1]) : -60
  const peakDb = peakMatch ? parseFloat(peakMatch[1]) : -60

  // FFmpeg silencedetect
  let silenceOut = ''
  try {
    silenceOut = execSync(
      `ffmpeg -i "${wavPath}" -af silencedetect=noise=-40dB:d=0.3 -f null - 2>&1`,
      { encoding: 'utf-8', timeout: 30000 },
    )
  } catch (e) {
    silenceOut = e.stdout ?? e.message ?? ''
  }

  // Duration
  let durationSec = 0
  try {
    const durOut = execSync(
      `ffprobe -v error -show_entries format=duration -of csv=p=0 "${wavPath}" 2>&1`,
      { encoding: 'utf-8', timeout: 10000 },
    )
    durationSec = parseFloat(durOut.trim()) || 0
  } catch { /* ignore */ }

  let totalSilence = 0
  const starts = [...silenceOut.matchAll(/silence_start:\s*([\d.]+)/g)].map((m) => parseFloat(m[1]))
  const ends = [...silenceOut.matchAll(/silence_end:\s*([\d.]+)/g)].map((m) => parseFloat(m[1]))
  for (let i = 0; i < starts.length; i++) {
    const end = i < ends.length ? ends[i] : durationSec
    totalSilence += end - starts[i]
  }
  const silenceRatio = durationSec > 0 ? totalSilence / durationSec : 0

  return { durationSec, rmsDb, peakDb, silenceRatio }
}

// ── S3 다운로드 ───────────────────────────────────────────────────────
async function downloadToTmp(storagePath) {
  const resp = await s3.send(new GetObjectCommand({ Bucket: S3_AUDIO_BUCKET, Key: storagePath }))
  if (!resp.Body) throw new Error(`Empty S3 response: ${storagePath}`)
  const bytes = await resp.Body.transformToByteArray()
  const tmpPath = join(tmpdir(), `bf_${randomUUID()}.wav`)
  writeFileSync(tmpPath, bytes)
  return tmpPath
}

// ── 대상 utterance 조회 ───────────────────────────────────────────────
async function fetchTargetUtterances(offset, limit) {
  // quality_status='done'인 세션의 quality_score가 null인 utterance
  const { data, error } = await sb
    .from('utterances')
    .select('id, session_id, storage_path')
    .is('quality_score', null)
    .not('storage_path', 'is', null)
    .in(
      'session_id',
      sb.from('sessions').select('id').eq('quality_status', 'done'),
    )
    .range(offset, offset + limit - 1)
    .order('id')

  if (error) throw new Error(`fetchTargetUtterances: ${error.message}`)
  return data ?? []
}

// ── 전체 대상 건수 ─────────────────────────────────────────────────────
async function countTargets() {
  const { count, error } = await sb
    .from('utterances')
    .select('id', { count: 'exact', head: true })
    .is('quality_score', null)
    .not('storage_path', 'is', null)
    .in(
      'session_id',
      sb.from('sessions').select('id').eq('quality_status', 'done'),
    )

  if (error) throw new Error(`countTargets: ${error.message}`)
  return count ?? 0
}

// ── 메인 ─────────────────────────────────────────────────────────────
const total = await countTargets()
console.log(`백필 대상: ${total}개 utterance`)

if (isDryRun) {
  console.log('\n[DRY-RUN] 실제 변경 없음. --dry-run 없이 재실행하면 적용됩니다.')
  process.exit(0)
}

if (total === 0) {
  console.log('백필 대상 없음. 종료.')
  process.exit(0)
}

let processed = 0
let succeeded = 0
let failed = 0
let offset = 0

while (offset < total) {
  const batch = await fetchTargetUtterances(offset, BATCH_SIZE)
  if (batch.length === 0) break

  console.log(`\n배치 처리: ${offset + 1}~${offset + batch.length} / ${total}`)

  for (const utt of batch) {
    processed++
    let tmpPath = null
    try {
      tmpPath = await downloadToTmp(utt.storage_path)
      const stats = getAudioStatsFromPath(tmpPath)
      const qualityScore = computeQualityScoreFromStats(stats)
      const qualityGrade = computeQualityGrade(qualityScore)

      const { error } = await sb
        .from('utterances')
        .update({ quality_score: qualityScore, quality_grade: qualityGrade })
        .eq('id', utt.id)

      if (error) throw new Error(error.message)
      process.stdout.write(`  ✓ ${utt.id} → ${qualityGrade}·${qualityScore}\n`)
      succeeded++
    } catch (err) {
      process.stderr.write(`  ✗ ${utt.id}: ${err.message}\n`)
      failed++
    } finally {
      if (tmpPath) {
        try { unlinkSync(tmpPath) } catch { /* ignore */ }
      }
    }
  }

  offset += batch.length
  if (offset < total) {
    await new Promise((r) => setTimeout(r, BATCH_DELAY_MS))
  }
}

console.log(`\n=== 완료 ===`)
console.log(`처리: ${processed}개 / 성공: ${succeeded}개 / 실패: ${failed}개`)
