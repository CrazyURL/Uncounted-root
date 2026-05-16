// sanitized-audio 버킷 실제 내용 확인 — 919 sessions 와 매핑되는 파일 있는지
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
  console.log('=== sanitized-audio 버킷 검사 ===\n')

  // 최상위 list
  const { data: top, error } = await supabase.storage
    .from('sanitized-audio')
    .list('', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } })
  if (error) {
    console.error('list 실패:', error.message)
    process.exit(1)
  }
  console.log(`최상위 ${top.length}개 항목:`)
  for (const f of top) {
    const isFolder = !f.metadata
    console.log(
      `  ${isFolder ? '[DIR]' : '[FILE]'} ${f.name} ${
        isFolder ? '' : `(size=${f.metadata?.size ?? '?'}, type=${f.metadata?.mimetype ?? '?'})`
      }`,
    )
  }

  // 폴더면 하나 들어가서 더 보기
  const folders = top.filter((f) => !f.metadata)
  if (folders.length > 0) {
    const folder = folders[0].name
    console.log(`\n${folder}/ 하위 검사:`)
    const { data: sub, error: e2 } = await supabase.storage
      .from('sanitized-audio')
      .list(folder, { limit: 10 })
    if (e2) console.log(`  실패: ${e2.message}`)
    else {
      for (const f of sub) {
        console.log(`  ${f.name} (size=${f.metadata?.size ?? '?'})`)
      }
    }
  }

  // local_sanitized_wav_path 컬럼이 sessions 에 있음 — 이게 sanitized-audio 와 매핑되는 듯
  const { data: pathSamples } = await supabase
    .from('sessions')
    .select('id, local_sanitized_wav_path, file_hash_sha256')
    .eq('consent_status', 'both_agreed')
    .not('local_sanitized_wav_path', 'is', null)
    .limit(5)
  console.log(`\nlocal_sanitized_wav_path 샘플 5건:`)
  if (pathSamples?.length) {
    for (const r of pathSamples) {
      console.log(
        `  ${r.id.slice(0, 8)} | path=${r.local_sanitized_wav_path} | hash=${r.file_hash_sha256?.slice(0, 12) ?? '(null)'}`,
      )
    }
  } else {
    console.log(`  → 모두 null (서버에 sanitized 음성 파일 없음)`)
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message)
  process.exit(1)
})
