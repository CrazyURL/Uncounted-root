// 060_utterance_deliveries.sql 을 dev DB 에 적용 + 검증
//   sql 분리 실행 (Supabase RPC 'sql' 미허용 환경 대비) — supabase-js 의 PostgREST 로는 DDL 불가
//   → pg 직접 connection 으로 실행
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import pg from '../../uncounted-api/node_modules/pg/lib/index.js'

const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}

const dbUrl = env.SUPABASE_DB_URL ?? env.DATABASE_URL
if (!dbUrl) {
  console.error('SUPABASE_DB_URL 또는 DATABASE_URL 환경변수 필요')
  process.exit(1)
}

const sql = readFileSync(
  resolve(process.cwd(), 'uncounted-api/supabase/migrations/060_utterance_deliveries.sql'),
  'utf-8',
)

const client = new pg.Client({ connectionString: dbUrl })
await client.connect()

try {
  console.log('▶ 060_utterance_deliveries.sql 실행 중...')
  await client.query(sql)
  console.log('✅ 마이그레이션 실행 성공')

  // 검증
  const r1 = await client.query(`
    SELECT column_name, data_type
    FROM information_schema.columns
    WHERE table_name = 'utterance_deliveries'
    ORDER BY ordinal_position
  `)
  console.log('\n📋 utterance_deliveries 컬럼:')
  for (const row of r1.rows) console.log(`  - ${row.column_name} (${row.data_type})`)

  const r2 = await client.query(`
    SELECT indexname, indexdef
    FROM pg_indexes
    WHERE tablename = 'utterance_deliveries'
  `)
  console.log('\n🔑 인덱스:')
  for (const row of r2.rows) console.log(`  - ${row.indexname}`)

  const r3 = await client.query(`
    SELECT polname, polcmd
    FROM pg_policy
    WHERE polrelid = 'utterance_deliveries'::regclass
  `)
  console.log('\n🛡️  RLS 정책:')
  for (const row of r3.rows) console.log(`  - ${row.polname} (${row.polcmd})`)
} catch (e) {
  console.error('❌ 마이그레이션 실패:', e.message)
  process.exit(1)
} finally {
  await client.end()
}
