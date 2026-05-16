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

const tables = [
  'utterance_review_audit',
  'pii_intervals',
  'pii_masking_audit',
  'consent_invitations',
  'consent_withdrawals',
  'upload_block_logs',
]

for (const t of tables) {
  const { data, error } = await sb.from(t).select('*').limit(5)
  if (error) {
    console.log(`${t.padEnd(28)} ❌ ${error.message.slice(0, 80)}`)
  } else {
    console.log(`${t.padEnd(28)} ✅ ${data.length}건 sample fetched`)
  }
}
