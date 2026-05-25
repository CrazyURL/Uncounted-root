// H2b-admin BROWSER CLICK-THROUGH — drives the LOCAL built bundle (vite preview :15173)
// against the dev API (which now returns human_label, PR-H2b-api). Auth via minted admin
// token injected into localStorage (dev OAuth broken). No utterance text printed.
//
// Proves the H2b core: 사람 감정 라벨 배지가 새로고침 후에도 server human_label 로 재구성된다.
//   Phase A: UI 저장 긍정 → 배지 → (모델 emotion PATCH 후 사람 배지 생존) → reload → 배지 생존
//   Phase B: UI 저장 부정+슬픔 → reload → 배지 슬픔/부정 생존
//   Phase C: UI 저장 판단불가 → reload → 판단불가 배지 생존
//   cleanup → reload → 사람 배지 사라짐(null 경로) · utterances.emotion 불변(모델 PATCH 복원 포함)
//
// Run from repo root:  node scripts/analysis/h2b_admin_browser_clickthrough.mjs

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { chromium } = require('C:/Users/user/Documents/project/uncounted-admin-emotion-h2a/node_modules/playwright')

const CHROME = 'C:\\Users\\user\\AppData\\Local\\ms-playwright\\chromium-1208\\chrome-win64\\chrome.exe'
const ADMIN_URL = 'http://localhost:15173'
const EMAIL = 'gdash86@gmail.com'
const SHOTS = 'C:/Users/user/Documents/project/uncounted-root/scripts/analysis/_h2b_shot'

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
const check = (n, ok, detail = '') => { results.push({ n, ok: !!ok }); log(`  [${ok ? 'PASS' : 'FAIL'}] ${n}${detail ? ' — ' + detail : ''}`) }

let browser
try {
  const { token, uid } = await mintToken()
  log('token minted; labeler uid present:', Boolean(uid))
  await rest(`utterance_human_labels?labeler_id=eq.${uid}`, { method: 'DELETE', headers: { Prefer: 'return=minimal' } })

  browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] })
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  await ctx.addInitScript((tok) => { try { localStorage.setItem('uncounted_access_token', tok) } catch (e) {} }, token)
  const page = await ctx.newPage()
  const consoleErrors = []
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 200)) })
  page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + String(e).slice(0, 200)))
  let openUttId = null
  page.on('response', (r) => { const mm = r.url().match(/utterances-v2\/([^/]+)\/audio/); if (mm) openUttId = decodeURIComponent(mm[1]) })

  const humanBtn = (name) => page.getByRole('button', { name, exact: true }).last() // 사람 카테고리는 DOM 최하단
  const saveHumanBtn = page.getByRole('button', { name: '사람 라벨 저장', exact: true }).first()

  const gotoCalls = async () => {
    await page.goto(`${ADMIN_URL}/admin/calls`, { waitUntil: 'domcontentloaded', timeout: 90000 })
    await page.waitForSelector('button[aria-label="펼치기"]:not([disabled])', { timeout: 90000 })
  }
  const expandSession = async (sIdx) => {
    const toggles = page.locator('button[aria-label="펼치기"]:not([disabled])')
    await toggles.nth(sIdx).click()
    await page.waitForTimeout(1500)
  }
  const openUtterance = async (sIdx, pIdx) => {
    await expandSession(sIdx)
    const plays = page.locator('button[title*="오디오 재생"]')
    await plays.nth(pIdx).click()
    await page.getByText('사람 감정 라벨', { exact: false }).first().waitFor({ state: 'visible', timeout: 12000 })
  }
  // reload → expand sessions until the badge (regex) appears. Returns true if found.
  const reloadAndFindBadge = async (re) => {
    await gotoCalls()
    const tg = page.locator('button[aria-label="펼치기"]:not([disabled])')
    const n = await tg.count()
    for (let si = 0; si < Math.min(n, 6); si++) {
      await tg.nth(si).click()
      await page.waitForTimeout(1200)
      if (await page.getByText(re).first().isVisible().catch(() => false)) return true
      await tg.nth(si).click() // collapse before next
      await page.waitForTimeout(300)
    }
    return false
  }

  // ── discover a working (session, play) that reveals the section ──
  await gotoCalls()
  const toggles = page.locator('button[aria-label="펼치기"]:not([disabled])')
  const nExp = await toggles.count()
  let target = null
  for (let si = 0; si < Math.min(nExp, 4) && !target; si++) {
    await expandSession(si)
    const plays = page.locator('button[title*="오디오 재생"]')
    const nPlay = await plays.count()
    for (let pi = 0; pi < Math.min(nPlay, 8) && !target; pi++) {
      await plays.nth(pi).click()
      try {
        await page.getByText('사람 감정 라벨', { exact: false }).first().waitFor({ state: 'visible', timeout: 8000 })
        target = { si, pi }
      } catch { /* audio-gated; next */ }
    }
    if (!target) await expandSession(si) // collapse before next session
  }
  if (!target) throw new Error('사람 감정 라벨 section not revealed (audio-gated)')
  log('target utterance via session#' + target.si + ' play#' + target.pi)
  await page.screenshot({ path: `${SHOTS}_A0_section.png` })

  // target 은 이미 열려 있음(isReviewing). 방금 audio 응답에서 utterance id 캡처됨.
  if (!openUttId) throw new Error('could not capture open utterance id')
  log('open utterance id captured:', Boolean(openUttId))
  const before = (await sj(await rest(`utterances?id=eq.${openUttId}&select=emotion,dialog_act,label_source`)))?.[0] ?? {}

  // ── Phase A: 긍정 저장 → 배지 ──
  await humanBtn('긍정').click()
  let rp = page.waitForResponse((r) => r.url().includes('/human-label') && r.request().method() === 'POST', { timeout: 30000 })
  await saveHumanBtn.click()
  const aResp = await (await rp).json().catch(() => null)
  check('A1. 긍정 POST 200 success', aResp?.success === true)
  await page.getByText(/^사람\s*기쁨/).first().waitFor({ state: 'visible', timeout: 10000 })
  check('A2. 긍정 배지 즉시 표시 (사람 기쁨 · 긍정)', true)
  await page.screenshot({ path: `${SHOTS}_A1_pos.png` })

  // ── model emotion PATCH on same utterance → human badge must survive ──
  // 모델 감정 그룹은 DOM 첫 번째. 현재 모델값과 다른 값을 골라 PATCH(이후 복원).
  const modelPick = before.emotion === '중립' ? '기쁨' : '중립'
  await page.getByRole('button', { name: modelPick, exact: true }).first().click()
  rp = page.waitForResponse((r) => /utterances-v2\/[^/]+$/.test(r.url()) && r.request().method() === 'PATCH', { timeout: 30000 })
  await page.getByRole('button', { name: '저장', exact: true }).first().click()
  const patchResp = await (await rp).json().catch(() => null)
  check('A3. 모델 emotion PATCH 동작 (기존 경로 영향 없음)', !!patchResp?.data)
  // human badge still present after model save (optimistic {...u,...fields} preserves human_label)
  const survived = await page.getByText(/^사람\s*기쁨/).first().isVisible().catch(() => false)
  check('A4. 모델 PATCH 후 사람 배지 생존', survived)

  // restore model labels via REST (keep utterances.emotion invariant)
  await rest(`utterances?id=eq.${openUttId}`, {
    method: 'PATCH', headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ emotion: before.emotion ?? null, dialog_act: before.dialog_act ?? null, label_source: before.label_source ?? null }),
  })

  // ── reload → server-init 배지 생존 ──
  check('A5. 새로고침 후 긍정 배지 유지 (server-init)', await reloadAndFindBadge(/^사람\s*기쁨/))
  await page.screenshot({ path: `${SHOTS}_A2_reload.png` })

  // ── Phase B: 부정+슬픔 저장 → reload 생존 ──
  await openUtterance(target.si, target.pi)
  await humanBtn('부정').click()
  // 부정 nudge 문구 노출 확인
  const nudge = await page.getByText('부정 라벨은 세부 감정', { exact: false }).first().isVisible().catch(() => false)
  check('B0. 부정 선택 시 세부감정 확인 문구 노출', nudge)
  await page.locator('select:has(option[value="놀람"])').first().selectOption('슬픔')
  rp = page.waitForResponse((r) => r.url().includes('/human-label') && r.request().method() === 'POST', { timeout: 30000 })
  await saveHumanBtn.click()
  const bResp = await (await rp).json().catch(() => null)
  check('B1. 부정+슬픔 POST 200', bResp?.success === true)
  check('B2. 새로고침 후 슬픔/부정 배지 유지', await reloadAndFindBadge(/^사람\s*슬픔/))
  await page.screenshot({ path: `${SHOTS}_B_reload.png` })

  // ── Phase C: 판단불가 저장 → reload 생존 ──
  await openUtterance(target.si, target.pi)
  await humanBtn('판단불가').click()
  rp = page.waitForResponse((r) => r.url().includes('/human-label') && r.request().method() === 'POST', { timeout: 30000 })
  await saveHumanBtn.click()
  const cResp = await (await rp).json().catch(() => null)
  check('C1. 판단불가 POST 200', cResp?.success === true)
  check('C2. 새로고침 후 판단불가 배지 유지', await reloadAndFindBadge(/^사람\s*판단불가/))
  await page.screenshot({ path: `${SHOTS}_C_reload.png` })

  // ── cleanup → reload → 배지 사라짐 + emotion 불변 ──
  const del = await sj(await rest(`utterance_human_labels?labeler_id=eq.${uid}`, { method: 'DELETE', headers: { Prefer: 'return=representation' } }))
  log('[cleanup] deleted=', Array.isArray(del) ? del.length : del)
  // 배지가 다시 보이면 실패 — reloadAndFindBadge 가 false 여야 통과.
  const stillVisible = await reloadAndFindBadge(/^사람\s*(기쁨|슬픔|판단불가)/)
  check('CLEANUP. 새로고침 후 사람 배지 사라짐 (null 경로)', !stillVisible)

  const after = (await sj(await rest(`utterances?id=eq.${openUttId}&select=emotion,dialog_act,label_source`)))?.[0] ?? {}
  check('INV. utterances.emotion 불변 (모델 PATCH 복원 확인)', (after.emotion ?? null) === (before.emotion ?? null), `before=${before.emotion ?? 'null'} after=${after.emotion ?? 'null'}`)

  const remain = await sj(await rest(`utterance_human_labels?labeler_id=eq.${uid}&select=id`))
  check('CLEANUP2. human_labels remaining=0', Array.isArray(remain) && remain.length === 0)

  await browser.close(); browser = null

  log('\n=== console errors:', consoleErrors.length, '===')
  for (const c of consoleErrors.slice(0, 20)) log('  •', c)
  const passed = results.filter((r) => r.ok).length
  log(`\n=== ${passed}/${results.length} PASS ===`)
  process.exit(passed === results.length && consoleErrors.length === 0 ? 0 : 1)
} catch (e) {
  console.error('CLICKTHROUGH ERROR:', e.message)
  try { if (browser) await browser.close() } catch {}
  process.exit(1)
}
