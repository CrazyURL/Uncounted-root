"""(a-3) Sample(3) #100 KtelSpeech 상담음성 CER 측정 — 2026-05-01

도메인: KtelSpeech 상담음성 (J91 교육 카테고리, 모바일 통화, 상담원/고객)
구조: 발화별 개별 wav + txt (이미 세그먼트). 'n/' 'b/' 'l/' 소음 마커.
AI-Hub Jasper baseline: 10.14% (in-distribution).
비교: Sample(1) 통화 16.28%, Sample(2) 방송 7.34% (Whisper large-v3-turbo zero-shot).

Sample(2) 동일 4지표 + cloudflared async 패턴.
"""
import json
import re
import time
from pathlib import Path

import requests
from jiwer import cer, wer

API_URL = "https://acid-trees-camcorders-charge.trycloudflare.com"
SAMPLE = Path(r"C:/Users/user/Downloads/New_Sample (3)")
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"
N = 100

ENG2KOR = {"ncs": "엔씨에스", "ot": "오티"}
NUM2KOR = {"0":"공","1":"일","2":"이","3":"삼","4":"사","5":"오","6":"육","7":"칠","8":"팔","9":"구"}

CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']
JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ']
JONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']


def to_jamo(text: str) -> str:
    out = []
    for ch in text:
        c = ord(ch)
        if 0xAC00 <= c <= 0xD7A3:
            base = c - 0xAC00
            jong = base % 28
            jung = (base // 28) % 21
            cho = base // (28 * 21)
            out.append(CHO[cho]); out.append(JUNG[jung])
            if jong > 0:
                out.append(JONG[jong])
        else:
            out.append(ch)
    return "".join(out)


def normalize(text: str, keep_space: bool = True) -> str:
    t = text.strip()
    # KtelSpeech noise markers: n/ b/ l/ o/ — 제거
    t = re.sub(r"\b[nblo]/\s*", "", t)
    t = re.sub(r"\(([^()]+)\)/\(([^()]+)\)", r"\2", t)
    t = re.sub(r"\(\(\)\)", "", t)
    t = re.sub(r"\([^()]*\)", "", t)
    def er(m):
        w = m.group(0).lower()
        if w in ENG2KOR: return ENG2KOR[w]
        l = {"a":"에이","b":"비","c":"씨","d":"디","e":"이","f":"에프","g":"지","h":"에이치",
             "i":"아이","j":"제이","k":"케이","l":"엘","m":"엠","n":"엔","o":"오","p":"피",
             "q":"큐","r":"알","s":"에스","t":"티","u":"유","v":"브이","w":"더블유","x":"엑스",
             "y":"와이","z":"제트"}
        return "".join(l.get(c,c) for c in w)
    t = re.sub(r"[A-Za-z]+", er, t)
    t = re.sub(r"\d", lambda m: NUM2KOR.get(m.group(0), m.group(0)), t)
    t = re.sub(r"[.,!?~`'\"\-_:]", "", t)
    t = re.sub(r"\s+", " " if keep_space else "", t).strip()
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
            pairs.append({"wav": wavs[0], "ref_raw": ref_raw,
                          "speaker": dlg.get("speaker")})
            if len(pairs) >= n:
                return pairs
    return pairs


def transcribe(wav: Path, timeout: int = 60) -> str | None:
    try:
        with wav.open("rb") as f:
            r = requests.post(f"{API_URL}/api/v1/transcribe?mask_pii=false",
                              files={"file": (wav.name, f, "audio/wav")}, timeout=30)
        r.raise_for_status()
        task = r.json().get("task_id")
        deadline = time.time() + timeout
        while time.time() < deadline:
            time.sleep(1.5)
            r2 = requests.get(f"{API_URL}/api/v1/jobs/{task}", timeout=20)
            if r2.status_code != 200:
                continue
            d = r2.json()
            if d.get("status") == "completed":
                segs = d.get("segments", [])
                return " ".join(s.get("text", "").strip() for s in segs).strip()
            if d.get("status") in ("failed", "error", "rejected"):
                return None
        return None
    except Exception:
        return None


def main():
    pairs = collect_pairs(N)
    print(f"=== (a-3) Sample(3) #100 KtelSpeech 상담음성 CER 측정 ===")
    print(f"매칭된 (wav, txt) 페어: {len(pairs)}")
    if not pairs:
        print("[FATAL] 매칭 페어 없음.")
        return
    print()

    refs_sp, hyps_sp = [], []
    refs_ns, hyps_ns = [], []
    refs_jamo, hyps_jamo = [], []
    failed = 0
    for i, p in enumerate(pairs, 1):
        hyp = transcribe(p["wav"])
        if hyp is None:
            failed += 1
            continue
        ref_sp = normalize(p["ref_raw"], keep_space=True)
        hyp_sp = normalize(hyp, keep_space=True)
        ref_ns = re.sub(r"\s+", "", ref_sp)
        hyp_ns = re.sub(r"\s+", "", hyp_sp)
        if not ref_ns:
            continue
        refs_sp.append(ref_sp); hyps_sp.append(hyp_sp)
        refs_ns.append(ref_ns); hyps_ns.append(hyp_ns)
        refs_jamo.append(to_jamo(ref_ns)); hyps_jamo.append(to_jamo(hyp_ns))
        if i % 20 == 0:
            print(f"  [{i}/{len(pairs)}] processed")

    print()
    if not refs_ns:
        print("측정 실패")
        return

    cer_ns = cer(refs_ns, hyps_ns) * 100
    cer_sp = cer(refs_sp, hyps_sp) * 100
    cer_j = cer(refs_jamo, hyps_jamo) * 100
    wer_sp = wer(refs_sp, hyps_sp) * 100

    print("=" * 60)
    print(f"성공: {len(refs_ns)} / 실패: {failed}")
    print()
    print("=== 4가지 지표 (KtelSpeech 상담음성 도메인) ===")
    print(f"  음절 CER (공백X):   {cer_ns:5.2f}%")
    print(f"  음절 CER (공백O):   {cer_sp:5.2f}%")
    print(f"  jamo CER:           {cer_j:5.2f}%")
    print(f"  어절 WER:           {wer_sp:5.2f}%")
    print()
    print("=== 도메인 비교 (Whisper large-v3-turbo zero-shot) ===")
    print(f"  Sample(1) 통화 (#571 HR/구직): 음절 16.28% / jamo 12.84% / 어절 35.21%")
    print(f"  Sample(2) 방송 (#130):         음절  7.34% / jamo  4.99% / 어절 19.67%")
    print(f"  Sample(3) 상담 (#100 KtelSpeech): 음절 {cer_ns:5.2f}% / jamo {cer_j:5.2f}% / 어절 {wer_sp:5.2f}%")
    print(f"  AI-Hub Jasper baseline (#100 in-dist): 10.14%")
    print()

    out = {
        "domain": "KtelSpeech_callservice",
        "dataset": "AI-Hub #100 상담음성",
        "n": len(refs_ns), "failed": failed,
        "cer_syllable_no_space_pct": cer_ns,
        "cer_syllable_with_space_pct": cer_sp,
        "cer_jamo_no_space_pct": cer_j,
        "wer_eojeol_with_space_pct": wer_sp,
        "aihub_jasper_baseline_pct": 10.14,
        "comparison": {
            "sample1_call_syllable": 16.28,
            "sample2_broadcast_syllable": 7.34,
        },
    }
    out_path = Path(r"C:/Users/user/Documents/project/uncounted-root/scripts/analysis/cer_sample3_callservice_result.json")
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"저장: {out_path}")


if __name__ == "__main__":
    main()
