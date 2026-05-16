// sessions 테이블 컬럼 확인
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

const { data, error } = await supabase.from('sessions').select('*').limit(1)
if (error) {
  console.error('error:', error)
  process.exit(1)
}
if (data.length === 0) {
  console.log('sessions 빈 테이블')
  process.exit(0)
}
console.log('sessions 컬럼:')
console.log(Object.keys(data[0]).sort().join('\n'))
