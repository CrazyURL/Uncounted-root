// sanitized-audio 버킷 파일과 sessions 의 매핑 검증
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
  console.log('=== sanitized-audio 버킷 ↔ sessions 매핑 ===\n')

  // 1) 버킷 안의 user_id 폴더 모두 list
  const { data: topDirs } = await supabase.storage
    .from('sanitized-audio')
    .list('', { limit: 100 })
  const userFolders = topDirs?.filter((f) => !f.metadata).map((f) => f.name) ?? []
  console.log(`사용자 폴더: ${userFolders.length}개`)
  for (const u of userFolders.slice(0, 5)) console.log(`  ${u}`)

  // 2) 각 사용자 폴더 안의 파일 수 + 총 파일 수 계산
  let totalFiles = 0
  const userFileCounts = {}
  for (const userId of userFolders) {
    let offset = 0
    let collected = 0
    while (true) {
      const { data: files, error } = await supabase.storage
        .from('sanitized-audio')
        .list(userId, { limit: 1000, offset })
      if (error || !files || files.length === 0) break
      collected += files.length
      offset += files.length
      if (files.length < 1000) break
    }
    userFileCounts[userId] = collected
    totalFiles += collected
  }
  console.log(`\n총 storage 파일: ${totalFiles}개`)
  console.log(`사용자별 분포:`)
  for (const [u, c] of Object.entries(userFileCounts).sort((a, b) => b[1] - a[1]).slice(0, 5)) {
    console.log(`  ${u} : ${c}개`)
  }

  // 3) 양측동의 919 sessions 의 user_id 분포
  const { data: agreedSessions } = await supabase
    .from('sessions')
    .select('id, user_id')
    .eq('consent_status', 'both_agreed')
  const sessionUserDist = {}
  for (const s of agreedSessions) {
    sessionUserDist[s.user_id] = (sessionUserDist[s.user_id] ?? 0) + 1
  }
  console.log(`\n양측동의 919 sessions 의 user_id 분포:`)
  for (const [u, c] of Object.entries(sessionUserDist).sort((a, b) => b[1] - a[1]).slice(0, 5)) {
    console.log(`  ${u} : ${c}건`)
  }

  // 4) 사용자별 storage vs session 매칭 — 첫 사용자 샘플
  const firstSessionUser = Object.keys(sessionUserDist)[0]
  if (firstSessionUser) {
    const sessionIds = agreedSessions.filter((s) => s.user_id === firstSessionUser).map((s) => s.id)
    console.log(`\n[샘플] user=${firstSessionUser.slice(0, 8)} 의 sessions ${sessionIds.length}건`)
    console.log(`  session id 샘플: ${sessionIds.slice(0, 3).map((s) => s.slice(0, 8)).join(', ')}`)
    const { data: sFiles, error: sErr } = await supabase.storage
      .from('sanitized-audio')
      .list(firstSessionUser, { limit: 1000 })
    if (sErr) {
      console.log(`  storage list 실패: ${sErr.message}`)
    } else {
      console.log(`  storage 파일 ${sFiles.length}개 (샘플 3개): ${sFiles.slice(0, 3).map((f) => f.name).join(', ')}`)
      // session id (전체 UUID) 와 파일명 매칭
      const fileNames = new Set(sFiles.map((f) => f.name))
      const matched = sessionIds.filter((id) => fileNames.has(id))
      const matchedShort = sessionIds.filter((id) => fileNames.has(id.slice(0, 8)))
      console.log(`  session id (UUID 전체) 매칭: ${matched.length}/${sessionIds.length}`)
      console.log(`  session id (앞 8자) 매칭: ${matchedShort.length}/${sessionIds.length}`)
      // 파일명 패턴 분석
      const samples = sFiles.slice(0, 5).map((f) => f.name)
      console.log(`  파일명 패턴 샘플: ${samples.join(', ')}`)
    }
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message)
  process.exit(1)
})
