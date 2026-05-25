// H2b-api VERIFY — GET /api/admin/utterances-v2 now surfaces latest emotion human_label.
// Runs against the LOCAL worktree server (PORT 3010) + dev DB via minted admin token.
// Three cases: (A) utterance w/ resolved label, (B) utterance w/ undecidable label, (C) no label → null.
// Also asserts utterances.emotion is NEVER touched, then CLEANS UP test rows. No utterance text printed.
//
// Run from repo root:  node scripts/analysis/h2b_api_human_label_read_verify.mjs

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const API = 'http://localhost:3010'
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

try {
  const { token, uid } = await mintToken()
  log('token minted; labeler uid present:', Boolean(uid))

  // pick a session with >=3 utterances so all 3 cases share one session_id (single list call)
  const sessRows = await sj(await rest(
    'utterances?select=session_id,id&order=session_id.desc&limit=400'))
  const bySession = new Map()
  for (const r of sessRows) {
    if (!bySession.has(r.session_id)) bySession.set(r.session_id, [])
    bySession.get(r.session_id).push(r.id)
  }
  let chosen = null
  for (const [sid, ids] of bySession) { if (ids.length >= 3) { chosen = { sid, ids: ids.slice(0, 3) }; break } }
  if (!chosen) throw new Error('no session with >=3 utterances')
  const [uttResolved, uttUndecidable, uttNoLabel] = chosen.ids
  log('chosen session has >=3 utterances; A(resolved)/B(undecidable)/C(none) assigned')

  // record model emotion BEFORE (to prove it is untouched)
  const beforeEmo = await sj(await rest(
    `utterances?id=in.(${chosen.ids.join(',')})&select=id,emotion`))
  const emoBefore = Object.fromEntries(beforeEmo.map((r) => [r.id, r.emotion ?? null]))

  // clean any prior test rows for these utts by this labeler
  await rest(`utterance_human_labels?labeler_id=eq.${uid}`, { method: 'DELETE', headers: { Prefer: 'return=minimal' } })

  // insert A: resolved (긍정/기쁨), B: undecidable
  const ins = await rest('utterance_human_labels', {
    method: 'POST', headers: { Prefer: 'return=representation' },
    body: JSON.stringify([
      { utterance_id: uttResolved, session_id: chosen.sid, label_type: 'emotion',
        category_decision: 'resolved', emotion_category: '긍정', fine_label: '기쁨',
        category_source: 'manual', label_confidence: 'high', labeler_id: uid, labeler_email: EMAIL },
      { utterance_id: uttUndecidable, session_id: chosen.sid, label_type: 'emotion',
        category_decision: 'undecidable', emotion_category: null, fine_label: null,
        category_source: 'manual', label_confidence: 'low', labeler_id: uid, labeler_email: EMAIL },
    ]),
  })
  const insJson = await sj(ins)
  log('inserted human_labels:', Array.isArray(insJson) ? insJson.length : ins.status, insJson)
  if (!Array.isArray(insJson) || insJson.length !== 2) throw new Error('insert failed')

  // GET list filtered to that session
  const list = await sj(await fetch(
    `${API}/api/admin/utterances-v2?session_id=${chosen.sid}&limit=5000`,
    { headers: { Authorization: `Bearer ${token}` } }))
  const utts = list?.data?.utterances ?? []
  const find = (id) => utts.find((u) => u.id === id)
  const a = find(uttResolved), b = find(uttUndecidable), cN = find(uttNoLabel)

  log('\n=== CASE A (resolved) human_label ===')
  log('  ', JSON.stringify(a?.human_label))
  const aOk = a?.human_label && a.human_label.category_decision === 'resolved'
    && a.human_label.emotion_category === '긍정' && a.human_label.fine_label === '기쁨'
    && a.human_label.category_source === 'manual' && a.human_label.updated_at
    && !('labeler_id' in a.human_label)

  log('=== CASE B (undecidable) human_label ===')
  log('  ', JSON.stringify(b?.human_label))
  const bOk = b?.human_label && b.human_label.category_decision === 'undecidable'
    && b.human_label.emotion_category === null && b.human_label.fine_label === null

  log('=== CASE C (no label) human_label ===')
  log('  ', JSON.stringify(cN?.human_label))
  const cOk = cN && cN.human_label === null

  // emotion untouched
  const afterEmo = await sj(await rest(
    `utterances?id=in.(${chosen.ids.join(',')})&select=id,emotion`))
  const emoAfter = Object.fromEntries(afterEmo.map((r) => [r.id, r.emotion ?? null]))
  const emoUntouched = chosen.ids.every((id) => emoBefore[id] === emoAfter[id])
  log('\nmodel emotion untouched across A/B/C:', emoUntouched)

  // CLEANUP
  const del = await sj(await rest(`utterance_human_labels?labeler_id=eq.${uid}`,
    { method: 'DELETE', headers: { Prefer: 'return=representation' } }))
  const remain = await sj(await rest(`utterance_human_labels?labeler_id=eq.${uid}&select=id`))
  log('[cleanup] deleted=', Array.isArray(del) ? del.length : del,
    '| remaining=', Array.isArray(remain) ? remain.length : remain)

  log('\n=== RESULT ===')
  log('  A(resolved) ok:', aOk)
  log('  B(undecidable) ok:', bOk)
  log('  C(no-label null) ok:', cOk)
  log('  emotion untouched:', emoUntouched)
  const pass = aOk && bOk && cOk && emoUntouched && (Array.isArray(remain) && remain.length === 0)
  log(pass ? '\nALL PASS ✅' : '\nFAIL ❌')
  process.exit(pass ? 0 : 1)
} catch (e) {
  console.error('VERIFY ERROR:', e.message)
  process.exit(1)
}
