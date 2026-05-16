// 049 v5: Payout Release Cron
//
// 매일 (또는 매월 15일) 실행하여 hold 기간이 끝난 transactions를 released로 박음:
//   - transactions.payout_release_at <= NOW() AND status = 'hold' 조회
//   - 각 transaction에 대해:
//     - transaction.status = 'released' + released_at = NOW()
//     - 해당 splits의 participant_user_id가 박힌 row만 → balances.pending → available 이전
//     - participant_user_id IS NULL은 미가입자 권리분으로 보관 (제11조 4항, 5년)
//
// 실행:
//   node scripts/analysis/release_payouts.mjs           # dry-run (변경 X)
//   node scripts/analysis/release_payouts.mjs --apply   # 실제 적용
//
// cron 예시:
//   0 1 16 * * cd /repo && node scripts/analysis/release_payouts.mjs --apply
//   (매월 16일 새벽 1시 — 다음달 15일 release 정책의 안전 buffer)

import { createClient } from '../../uncounted-api/node_modules/@supabase/supabase-js/dist/index.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const apply = process.argv.includes('--apply')

const env = {}
for (const line of readFileSync(resolve(process.cwd(), 'uncounted-api/.env'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

console.log(`=== Payout Release Cron (${apply ? 'APPLY' : 'DRY-RUN'}) ===\n`)

// 1. release 대상 transactions 조회
const now = new Date().toISOString()
const { data: dueTx, error: e1 } = await sb
  .from('transactions')
  .select('tx_id, call_id, price, payout_release_at')
  .eq('status', 'hold')
  .lte('payout_release_at', now)

if (e1) {
  console.error('transactions 조회 실패:', e1.message)
  process.exit(1)
}

if (!dueTx || dueTx.length === 0) {
  console.log('▶ release 대상 transactions 없음')
  process.exit(0)
}

console.log(`▶ release 대상 transactions: ${dueTx.length}건`)
for (const tx of dueTx) {
  console.log(`  - tx ${tx.tx_id.slice(0, 8)} | call ${tx.call_id.slice(0, 8)} | price=${tx.price} | due=${tx.payout_release_at}`)
}

// 2. 각 transaction의 splits 합산 후 balances로 이전
let totalReleased = 0
let totalUserShifts = 0
let totalUnclaimed = 0

for (const tx of dueTx) {
  const { data: splits } = await sb
    .from('transaction_splits')
    .select('participant_phone_hash, participant_user_id, share_amount')
    .eq('tx_id', tx.tx_id)

  if (!splits) continue

  // user_id NULL splits는 미가입자 권리분 — 별도 풀에 보관
  for (const s of splits) {
    const amt = Number(s.share_amount ?? 0)
    if (s.participant_user_id) {
      totalUserShifts++
      if (apply) {
        // balances 박음: pending에서 차감 + available에 추가
        const { data: bal } = await sb
          .from('balances').select('pending, available').eq('user_id', s.participant_user_id).maybeSingle()
        if (bal) {
          await sb.from('balances').update({
            pending: Math.max(0, Number(bal.pending ?? 0) - amt),
            available: Number(bal.available ?? 0) + amt,
            updated_at: new Date().toISOString(),
          }).eq('user_id', s.participant_user_id)
        }
      }
    } else {
      totalUnclaimed++
    }
    totalReleased += amt
  }

  // transaction status 박음
  if (apply) {
    await sb.from('transactions').update({
      status: 'released',
      released_at: new Date().toISOString(),
    }).eq('tx_id', tx.tx_id)
  }
}

console.log()
console.log(`▶ 결과 요약`)
console.log(`  총 release 금액: ₩${totalReleased.toLocaleString('ko-KR')}`)
console.log(`  사용자 잔액 이전: ${totalUserShifts}건`)
console.log(`  미가입자 권리분 (5년 보관): ${totalUnclaimed}건`)
console.log()
if (!apply) {
  console.log('※ dry-run 모드. 실제 적용은 --apply 옵션을 박으세요.')
}
