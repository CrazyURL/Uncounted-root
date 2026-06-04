// rollback_peer_identity_from_title — backfill apply 되돌리기
//
// 사전: uncounted-api 에 @supabase 미설치 시 `cd uncounted-api && npm install` (또는 worktree node_modules).
// 실행 (uncounted-root 루트에서):
//   node scripts/analysis/rollback_peer_identity_from_title.mjs           (dry-run, 카운트만)
//   node scripts/analysis/rollback_peer_identity_from_title.mjs --apply    (되돌리기 — 별도 승인 후에만)
//
// 동작: identity_source='title_parse' 로 적재된 peers 에 연결된 sessions.peer_id 를 NULL 로
//   되돌리고(연결 해제), 해당 peers 행을 삭제한다. red-green 검증·apply 되돌리기 전용.
// ⚠ relationship/rel_* 등 다른 트랙이 쓴 peers(identity_source != 'title_parse')는 건드리지 않는다.
// ⚠ PII 보호: 카운트만 출력. 실명·번호 미출력.

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const DRY_RUN = !process.argv.includes('--apply')

const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

async function fetchTitlePeerIds() {
  const ids = []
  const PAGE = 1000
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb
      .from('peers')
      .select('id')
      .eq('identity_source', 'title_parse')
      .range(from, from + PAGE - 1)
    if (error) throw new Error(`peers select failed: ${error.message}`)
    if (!data || data.length === 0) break
    ids.push(...data.map((r) => r.id))
    if (data.length < PAGE) break
  }
  return ids
}

async function main() {
  console.log(`\n=== rollback peer identity from title ${DRY_RUN ? '[DRY-RUN]' : '[APPLY]'} ===`)
  const peerIds = await fetchTitlePeerIds()
  console.log(`title_parse peers: ${peerIds.length}`)

  // 연결된 sessions 카운트
  let linkedSessions = 0
  for (let i = 0; i < peerIds.length; i += 500) {
    const chunk = peerIds.slice(i, i + 500)
    const { count, error } = await sb
      .from('sessions')
      .select('id', { count: 'exact', head: true })
      .in('peer_id', chunk)
    if (error) throw new Error(`sessions count failed: ${error.message}`)
    linkedSessions += count || 0
  }
  console.log(`연결된 sessions(peer_id 해제 예정): ${linkedSessions}`)

  if (DRY_RUN) {
    console.log(`\n[DRY-RUN] 변경 없음. 되돌리려면 --apply (별도 승인 후).`)
    return
  }

  console.log(`\n[APPLY] sessions.peer_id 해제 + peers 삭제 시작…`)
  for (let i = 0; i < peerIds.length; i += 500) {
    const chunk = peerIds.slice(i, i + 500)
    const { error: unlinkErr } = await sb.from('sessions').update({ peer_id: null }).in('peer_id', chunk)
    if (unlinkErr) throw new Error(`sessions unlink failed: ${unlinkErr.message}`)
  }
  for (let i = 0; i < peerIds.length; i += 500) {
    const chunk = peerIds.slice(i, i + 500)
    const { error: delErr } = await sb.from('peers').delete().in('id', chunk)
    if (delErr) throw new Error(`peers delete failed: ${delErr.message}`)
  }
  console.log(`[APPLY] 완료 — peers ${peerIds.length} 삭제, sessions ${linkedSessions} 해제.`)
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
