// H2b-api LIVE CONTRACT VERIFY — against deployed dev API (uncounted-api.onrender.com).
// 10 checks per approval. Inserts resolved + undecidable test rows via REST, leaves one no-label,
// asserts human_label contract, proves utterances.emotion/transcript_text unchanged, no-auth 401,
// then CLEANS UP (remaining=0). No utterance text printed.
//
// Run from repo root:  node scripts/analysis/h2b_api_live_contract_verify.mjs

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const API = 'https://uncounted-api.onrender.com'
const EMAIL = 'gdash86@gmail.com'

const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const SUPABASE_URL = env.SUPABASE_URL, SR = env.SUPABASE_SERVICE_ROLE_KEY
const sj = (r) => r.text().then((t) => { try { return JSON.parse(t) } catch { return t } })
const log = (...a) => console.log(...a)
const rest = (path, opts = {}) => fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
  ...opts, headers: { apikey: SR, Authorization: `Bearer ${SR}`, 'Content-Type': 'application/json', ...(opts.headers || {}) },
})

async function mintToken() {
  const gen = await fetch(`${SUPABASE_URL}/auth/v1/admin/generate_link`, {
    method: 'POST', headers: { apikey: SR, Authorization: `Bearer ${SR}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'magiclink', email: EMAIL }),
  })
  const gj = await sj(gen); const hashed = gj?.hashed_token ?? gj?.properties?.hashed_token
  if (!hashed) throw new Error('generate_link ' + gen.status)
  const ver = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
    method: 'POST', headers: { apikey: SR, 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'magiclink', token_hash: hashed }),
  })
  const vj = await sj(ver); if (!vj?.access_token) throw new Error('verify ' + ver.status)
  return { token: vj.access_token, uid: vj.user?.id }
}

const results = []
const check = (n, cond, detail = '') => { results.push({ n, ok: !!cond, detail }); log(`  [${cond ? 'PASS' : 'FAIL'}] ${n}${detail ? ' — ' + detail : ''}`) }

try {
  const { token, uid } = await mintToken()
  log('token minted; labeler uid present:', Boolean(uid))

  // 9) no-auth 401 (do first; independent)
  const noAuth = await fetch(`${API}/api/admin/utterances-v2?limit=1`)
  check('9. no-auth → 401', noAuth.status === 401, `status=${noAuth.status}`)

  // pick a session with >=3 utterances
  const sessRows = await sj(await rest('utterances?select=session_id,id&order=session_id.desc&limit=400'))
  const bySession = new Map()
  for (const r of sessRows) { if (!bySession.has(r.session_id)) bySession.set(r.session_id, []); bySession.get(r.session_id).push(r.id) }
  let chosen = null
  for (const [sid, ids] of bySession) { if (ids.length >= 3) { chosen = { sid, ids: ids.slice(0, 3) }; break } }
  if (!chosen) throw new Error('no session with >=3 utterances')
  const [uttResolved, uttUndecidable, uttNoLabel] = chosen.ids

  const beforeEmo = await sj(await rest(`utterances?id=in.(${chosen.ids.join(',')})&select=id,emotion`))
  const emoBefore = Object.fromEntries(beforeEmo.map((r) => [r.id, r.emotion ?? null]))

  await rest(`utterance_human_labels?labeler_id=eq.${uid}`, { method: 'DELETE', headers: { Prefer: 'return=minimal' } })
  const ins = await rest('utterance_human_labels', {
    method: 'POST', headers: { Prefer: 'return=representation' },
    body: JSON.stringify([
      { utterance_id: uttResolved, session_id: chosen.sid, label_type: 'emotion', category_decision: 'resolved',
        emotion_category: '긍정', fine_label: '기쁨', category_source: 'manual', label_confidence: 'high', labeler_id: uid, labeler_email: EMAIL },
      { utterance_id: uttUndecidable, session_id: chosen.sid, label_type: 'emotion', category_decision: 'undecidable',
        emotion_category: null, fine_label: null, category_source: 'manual', label_confidence: 'low', labeler_id: uid, labeler_email: EMAIL },
    ]),
  })
  const insJson = await sj(ins)
  if (!Array.isArray(insJson) || insJson.length !== 2) throw new Error('insert failed: ' + JSON.stringify(insJson).slice(0, 200))

  const listRes = await fetch(`${API}/api/admin/utterances-v2?session_id=${chosen.sid}&limit=5000`, { headers: { Authorization: `Bearer ${token}` } })
  const list = await sj(listRes)
  const utts = list?.data?.utterances ?? []
  const find = (id) => utts.find((u) => u.id === id)
  const a = find(uttResolved), b = find(uttUndecidable), cN = find(uttNoLabel)

  // 1) 200
  check('1. /utterances-v2 → 200', listRes.status === 200, `status=${listRes.status}`)
  // 2) human_label field exists on rows
  check('2. human_label field present', utts.length > 0 && utts.every((u) => 'human_label' in u), `rows=${utts.length}`)
  // 3) no-label → null
  check('3. no-label utterance human_label=null', cN && cN.human_label === null)
  // 4) resolved returns all 5 fields
  const hr = a?.human_label
  check('4. resolved fields', hr && hr.fine_label === '기쁨' && hr.emotion_category === '긍정' && hr.category_decision === 'resolved' && hr.category_source === 'manual' && !!hr.updated_at,
    hr ? JSON.stringify(hr) : 'missing')
  // 5) undecidable: null cat/fine, decision=undecidable
  const hb = b?.human_label
  check('5. undecidable fields', hb && hb.fine_label === null && hb.emotion_category === null && hb.category_decision === 'undecidable',
    hb ? JSON.stringify(hb) : 'missing')
  // 6) labeler_id / labeler_email NOT in response (any row)
  const leaks = utts.some((u) => u.human_label && ('labeler_id' in u.human_label || 'labeler_email' in u.human_label))
  check('6. no labeler_id/labeler_email leak', !leaks)
  // 7) utterances.emotion unchanged
  const afterEmo = await sj(await rest(`utterances?id=in.(${chosen.ids.join(',')})&select=id,emotion`))
  const emoAfter = Object.fromEntries(afterEmo.map((r) => [r.id, r.emotion ?? null]))
  check('7. utterances.emotion unchanged', chosen.ids.every((id) => emoBefore[id] === emoAfter[id]))
  // 8) transcript_text policy unchanged — `text` still capped at 200 chars, raw transcript_text not exposed
  const textPolicyOk = utts.every((u) => typeof u.text === 'string' && u.text.length <= 200 && !('transcript_text' in u))
  check('8. transcript_text policy unchanged (text<=200, no raw field)', textPolicyOk)

  // 10) cleanup → remaining 0
  await rest(`utterance_human_labels?labeler_id=eq.${uid}`, { method: 'DELETE', headers: { Prefer: 'return=minimal' } })
  const remain = await sj(await rest(`utterance_human_labels?labeler_id=eq.${uid}&select=id`))
  check('10. cleanup remaining=0', Array.isArray(remain) && remain.length === 0, `remaining=${Array.isArray(remain) ? remain.length : remain}`)

  const passed = results.filter((r) => r.ok).length
  log(`\n=== ${passed}/${results.length} PASS ===`)
  process.exit(passed === results.length ? 0 : 1)
} catch (e) {
  console.error('LIVE VERIFY ERROR:', e.message)
  process.exit(1)
}
