"""(b) Outlier 14건 원인 분류 — 2026-05-01

CER >100%인 케이스를 다음 3가지로 분류:
  (i)   세그먼트 정렬 실패 — task_id 캐시/순서 매칭 오류 (ref와 hyp이 무관한 발화 페어)
  (ii)  STT 환각 — 짧은 발화에서 voice-api가 학습 prompt 또는 다른 문맥 출력
  (iii) ref 정규화 오류 — 라벨에 "엔/" "o/" 등 마커 잘못 처리

각 wav를 다시 단독 호출해 응답 비교 + ref 원문 분석.
"""
import json
import re
import time
from pathlib import Path
from collections import Counter

import requests
from jiwer import cer

API_URL = "https://acid-trees-camcorders-charge.trycloudflare.com"
SAMPLE = Path(r"C:/Users/user/Downloads/New_Sample (1)")
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"

ENG2KOR = {"ncs": "엔씨에스", "ot": "오티"}
NUM2KOR = {"0":"공","1":"일","2":"이","3":"삼","4":"사","5":"오","6":"육","7":"칠","8":"팔","9":"구"}


def normalize(text: str) -> str:
    t = text
    t = re.sub(r"\(([^()]+)\)/\(([^()]+)\)", r"\2", t)
    t = re.sub(r"\(\(\)\)", "", t)
    t = re.sub(r"\bo/\s*", "", t)
    t = re.sub(r"\([^()]*\)", "", t)
    def eng_repl(m):
        w = m.group(0).lower()
        if w in ENG2KOR:
            return ENG2KOR[w]
        letter = {"a":"에이","b":"비","c":"씨","d":"디","e":"이","f":"에프","g":"지",
                  "h":"에이치","i":"아이","j":"제이","k":"케이","l":"엘","m":"엠","n":"엔",
                  "o":"오","p":"피","q":"큐","r":"알","s":"에스","t":"티","u":"유",
                  "v":"브이","w":"더블유","x":"엑스","y":"와이","z":"제트"}
        return "".join(letter.get(c, c) for c in w)
    t = re.sub(r"[A-Za-z]+", eng_repl, t)
    t = re.sub(r"\d", lambda m: NUM2KOR.get(m.group(0), m.group(0)), t)
    t = re.sub(r"[.,!?~`'\"\-_]", "", t)
    t = re.sub(r"\s+", "", t)
    return t


def collect_pairs(n: int):
    pairs = []
    for jf in sorted(LABEL_DIR.glob("**/*.json")):
        with jf.open(encoding="utf-8") as f:
            d = json.load(f)
        for dlg in d.get("dataSet", {}).get("dialogs", []):
            ap = dlg.get("audioPath", "")
            wav = AUDIO_DIR / "TS_D03" / ap
            if not wav.exists():
                continue
            pairs.append({
                "wav": wav, "text_raw": dlg.get("text", ""),
                "duration": dlg.get("duration", 0),
                "session": jf.parent.name, "audio_path": ap,
            })
            if len(pairs) >= n:
                return pairs
    return pairs


def transcribe_solo(wav: Path, timeout=60):
    """단독 호출 — 캐시/큐 영향 최소화 위해 sleep 후 호출."""
    try:
        with wav.open("rb") as f:
            r = requests.post(f"{API_URL}/api/v1/transcribe",
                              files={"file": (wav.name, f, "audio/wav")}, timeout=30)
        r.raise_for_status()
        task = r.json().get("task_id")
        deadline = time.time() + timeout
        while time.time() < deadline:
            time.sleep(1.5)
            r2 = requests.get(f"{API_URL}/api/v1/jobs/{task}", timeout=20)
            if r2.status_code != 200:
                continue
            data = r2.json()
            if data.get("status") == "completed":
                segs = data.get("segments", [])
                return {
                    "text": " ".join(s.get("text", "").strip() for s in segs).strip(),
                    "segments": segs,
                    "task_id": task,
                }
            if data.get("status") in ("failed", "error", "rejected"):
                return {"text": "", "error": data.get("status"), "task_id": task}
        return {"text": "", "error": "timeout", "task_id": task}
    except Exception as e:
        return {"text": "", "error": str(e), "task_id": None}


def classify_outlier(pair, hyp_data, ref_norm):
    """outlier 분류:
    - normalization_error: ref_norm이 비어있거나 마커 잔존
    - stt_hallucination: hyp 길이가 ref 대비 비정상 (3배 초과 또는 1/5 미만)
    - segment_misalign: ref와 hyp 간 공통 문자 거의 없음 (Jaccard < 0.1)
    - other: 위 외
    """
    hyp_norm = normalize(hyp_data.get("text", ""))
    if not ref_norm:
        return "normalization_error", {"reason": "ref empty after normalize"}

    # 마커 잔존 체크
    if any(m in pair["text_raw"] for m in ("엔/", "(o)", "{", "}")):
        return "normalization_error", {"reason": "non-standard marker in ref",
                                       "raw": pair["text_raw"][:60]}

    # 길이 비율
    if len(ref_norm) > 0:
        len_ratio = len(hyp_norm) / max(len(ref_norm), 1)
        if len_ratio > 3 or len_ratio < 0.2:
            # 공통 문자 비율 (Jaccard)
            sa, sb = set(ref_norm), set(hyp_norm)
            jacc = len(sa & sb) / max(len(sa | sb), 1)
            return "stt_hallucination", {
                "len_ratio": round(len_ratio, 2), "jaccard": round(jacc, 2),
                "ref_len": len(ref_norm), "hyp_len": len(hyp_norm),
            }

    # Jaccard 자체로 misalign 판정
    sa, sb = set(ref_norm), set(hyp_norm)
    jacc = len(sa & sb) / max(len(sa | sb), 1)
    if jacc < 0.15:
        return "segment_misalign", {"jaccard": round(jacc, 2),
                                    "ref_head": ref_norm[:50], "hyp_head": hyp_norm[:50]}
    return "other", {"jaccard": round(jacc, 2)}


def main():
    print("=== outlier 14건 원인 분류 ===")
    print(f"Sample(1) 첫 100건 재처리 + outlier 케이스 분류")
    print()

    pairs = collect_pairs(100)
    print(f"수집: {len(pairs)}건")

    outliers = []
    for i, p in enumerate(pairs, 1):
        ref_norm = normalize(p["text_raw"])
        hyp_data = transcribe_solo(p["wav"])
        hyp_text = hyp_data.get("text", "")
        if not hyp_text:
            print(f"[{i}/{len(pairs)}] {p['wav'].name} — 응답 실패: {hyp_data.get('error')}")
            continue
        hyp_norm = normalize(hyp_text)
        if not ref_norm or not hyp_norm:
            c = 1.0
        else:
            try:
                c = cer(ref_norm, hyp_norm)
            except Exception:
                c = 1.0
        if c > 1.0:
            cat, detail = classify_outlier(p, hyp_data, ref_norm)
            outliers.append({
                "idx": i, "wav": p["wav"].name, "session": p["session"],
                "audio_path": p["audio_path"], "duration": p["duration"],
                "cer_pct": round(c * 100, 1), "category": cat, "detail": detail,
                "ref_raw": p["text_raw"][:120], "hyp_raw": hyp_text[:120],
                "task_id": hyp_data.get("task_id"),
            })
            print(f"[{i}/{len(pairs)}] OUTLIER {p['wav'].name} CER={c*100:.0f}% → {cat} {detail}")
        elif i % 20 == 0:
            print(f"[{i}/{len(pairs)}] OK CER={c*100:.1f}%")

    print()
    print("=" * 60)
    print(f"outlier 총 {len(outliers)}건")
    cat_count = Counter(o["category"] for o in outliers)
    for cat, n in cat_count.most_common():
        print(f"  {cat:25s}: {n} 건")
    print()

    out = {
        "n_total": len(pairs),
        "n_outliers": len(outliers),
        "category_breakdown": dict(cat_count),
        "outliers": outliers,
    }
    out_path = Path(r"C:/Users/user/Documents/project/uncounted-root/scripts/analysis/cer_outlier_result.json")
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"저장: {out_path}")


if __name__ == "__main__":
    main()
