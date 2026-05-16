import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } })

// 행 1개 샘플 (스키마 추론)
const { data, error } = await sb.from('consent_invitations').select('*').limit(1)
if (error) {
  console.log('Error:', error.message)
} else if (data.length > 0) {
  console.log('consent_invitations columns:', Object.keys(data[0]).sort())
} else {
  // 빈 테이블 — 빈 insert 시도 (FK 검증 실패 메시지에서 컬럼 추론 가능)
  console.log('테이블 비어있음. 직접 query로 컬럼 확인:')
  const probes = ['consented_at', 'agreed_at', 'created_at', 'token', 'status', 'consent_method', 'session_id', 'user_id']
  for (const col of probes) {
    const { error: e } = await sb.from('consent_invitations').select(col).limit(1)
    console.log(`  ${e ? '❌' : '✅'} ${col}${e ? ` (${e.message.slice(0, 60)})` : ''}`)
  }
}
