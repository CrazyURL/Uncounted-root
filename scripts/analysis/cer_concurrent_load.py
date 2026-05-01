"""(Sprint 1 Day 3) 동시 100건 부하 측정 — voice-api race fix 검증.

배경:
- Sample(1) 100건 측정에서 14건 CER>100% outlier 발생 (단독 호출 시 0건)
- voice-api job_store.py + transcribe.py race fix 적용 (commit 예정)
- 본 스크립트로 동시 100건 부하 → outlier 0 검증

방식:
- ThreadPoolExecutor로 동시 N (기본 30) 요청 발사
- 각 요청은 task_id 폴링 → 결과 수집
- 결과 텍스트 정규화 + CER 측정 (Sample 3 KtelSpeech ground truth)
- 보고: 성공/실패 건수, CER 분포, outlier(>100%) 건수
"""
import json
import re
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests
from jiwer import cer

API_URL = "https://acid-trees-camcorders-charge.trycloudflare.com"
SAMPLE = Path(r"C:/Users/user/Downloads/New_Sample (3)")
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"
N_TOTAL = 30          # 동시 발사 건수 (load 강도)
N_CONCURRENT = 30     # ThreadPoolExecutor max workers
POLL_TIMEOUT = 90     # task 완료 대기 (초)


def normalize(text: str) -> str:
    t = text.strip()
    t = re.sub(r"\b[nblo]/\s*", "", t)
    t = re.sub(r"\(([^()]+)\)/\(([^()]+)\)", r"\2", t)
    t = re.sub(r"\(\(\)\)", "", t)
    t = re.sub(r"\([^()]*\)", "", t)
    t = re.sub(r"[.,!?~`'\"\-_:]", "", t)
    t = re.sub(r"\s+", "", t).strip()
    return t


def collect_pairs(n: int) -> list[dict]:
    pairs = []
    for jf in sorted(LABEL_DIR.glob("**/*.json")):
        sess = jf.parent
        with jf.open(encoding="utf-8-sig") as f:
            d = json.load(f)
        for dlg in d.get("dataSet", {}).get("dialogs", []):
            ap = Path(dlg["audioPath"]).name
            tp = Path(dlg["textPath"]).name
            wavs = list(AUDIO_DIR.rglob(f"**/{sess.name}/{ap}"))
            txt = sess / tp
            if not wavs or not txt.exists():
                continue
            ref_raw = txt.read_text(encoding="utf-8-sig").strip()
            if len(ref_raw) < 3:
                continue
            pairs.append({"wav": wavs[0], "ref_raw": ref_raw, "name": wavs[0].name})
            if len(pairs) >= n:
                return pairs
    return pairs


def transcribe_one(idx: int, pair: dict) -> dict:
    """단일 발화 transcribe + 결과 매칭 검증."""
    wav: Path = pair["wav"]
    t0 = time.time()
    try:
        with wav.open("rb") as f:
            r = requests.post(
                f"{API_URL}/api/v1/transcribe?mask_pii=false",
                files={"file": (wav.name, f, "audio/wav")},
                timeout=30,
            )
        r.raise_for_status()
        task_id = r.json().get("task_id")
        deadline = time.time() + POLL_TIMEOUT
        while time.time() < deadline:
            time.sleep(1.0)
            r2 = requests.get(f"{API_URL}/api/v1/jobs/{task_id}", timeout=20)
            if r2.status_code != 200:
                continue
            d = r2.json()
            status = d.get("status")
            if status == "completed":
                segs = d.get("segments", [])
                hyp = " ".join(s.get("text", "").strip() for s in segs).strip()
                ref_n = normalize(pair["ref_raw"])
                hyp_n = normalize(hyp)
                if not ref_n:
                    return {"idx": idx, "ok": False, "reason": "empty_ref", "task_id": task_id}
                c = cer([ref_n], [hyp_n]) * 100
                return {
                    "idx": idx, "ok": True, "task_id": task_id,
                    "cer_pct": c, "elapsed": time.time() - t0,
                    "ref_head": ref_n[:30], "hyp_head": hyp_n[:30],
                }
            if status in ("failed", "error", "rejected"):
                return {"idx": idx, "ok": False, "reason": status, "task_id": task_id}
        return {"idx": idx, "ok": False, "reason": "timeout", "task_id": task_id}
    except Exception as e:
        return {"idx": idx, "ok": False, "reason": f"exception: {e}"}


def main():
    pairs = collect_pairs(N_TOTAL)
    print(f"=== 동시 부하 테스트 (N={len(pairs)}, concurrent={N_CONCURRENT}) ===")
    print(f"API: {API_URL}")
    print()

    t0 = time.time()
    results = []
    with ThreadPoolExecutor(max_workers=N_CONCURRENT) as pool:
        futures = {pool.submit(transcribe_one, i, p): i for i, p in enumerate(pairs)}
        for fut in as_completed(futures):
            r = fut.result()
            results.append(r)
            ok = r.get("ok")
            if ok:
                print(f"  [{r['idx']:3d}] CER={r['cer_pct']:6.2f}% elapsed={r['elapsed']:5.1f}s task={r['task_id']}", flush=True)
            else:
                print(f"  [{r['idx']:3d}] FAIL: {r.get('reason')}", flush=True)
    total_elapsed = time.time() - t0

    # 분석
    success = [r for r in results if r.get("ok")]
    failed = [r for r in results if not r.get("ok")]
    outliers = [r for r in success if r["cer_pct"] > 100]
    cers = [r["cer_pct"] for r in success]
    cers_clean = [c for c in cers if c <= 100]

    print()
    print("=" * 70)
    print(f"총 시간: {total_elapsed:.1f}s ({total_elapsed/len(pairs):.1f}s/건)")
    print(f"성공: {len(success)} / 실패: {len(failed)}")
    print(f"outlier (CER>100%): {len(outliers)} / {len(success)}")
    if cers_clean:
        cers_clean.sort()
        print(f"CER 분포 (정상): min={cers_clean[0]:.2f} / median={cers_clean[len(cers_clean)//2]:.2f} / max={cers_clean[-1]:.2f}")
        print(f"CER 평균 (정상): {sum(cers_clean)/len(cers_clean):.2f}%")
    if outliers:
        print()
        print("outlier 케이스:")
        for r in outliers:
            print(f"  [{r['idx']}] CER={r['cer_pct']:.1f}% task={r['task_id']}")
            print(f"    ref={r['ref_head']!r}")
            print(f"    hyp={r['hyp_head']!r}")

    out = {
        "n_total": len(pairs), "n_concurrent": N_CONCURRENT,
        "elapsed_sec": total_elapsed,
        "success": len(success), "failed": len(failed),
        "outlier_count": len(outliers),
        "cer_stats": {
            "min": min(cers_clean) if cers_clean else None,
            "median": cers_clean[len(cers_clean)//2] if cers_clean else None,
            "max": max(cers_clean) if cers_clean else None,
            "mean": sum(cers_clean)/len(cers_clean) if cers_clean else None,
        },
        "outliers": [{"idx": r["idx"], "task_id": r["task_id"], "cer_pct": r["cer_pct"],
                      "ref": r["ref_head"], "hyp": r["hyp_head"]} for r in outliers],
    }
    out_path = Path(r"C:/Users/user/Documents/project/uncounted-root/scripts/analysis/cer_concurrent_load_result.json")
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n저장: {out_path}")


if __name__ == "__main__":
    main()
