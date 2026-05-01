"""(d) Sample(2) 한국인대화음성 (방송) CER 측정 — 2026-05-01

#130 dataset, broadcast 도메인. Sample(1) 저음질 전화망과 다른 도메인이라
단일 데이터셋 편향 회피. (c)와 같은 정밀 측정 (음절+jamo+어절).
"""
import json
import re
import time
from pathlib import Path

import requests
from jiwer import cer, wer

API_URL = "https://acid-trees-camcorders-charge.trycloudflare.com"
SAMPLE = Path(r"C:/Users/user/Downloads/New_Sample (2)")
SCRIPTS = SAMPLE / "라벨링데이터" / "broadcast_01" / "broadcast_01_scripts.txt"
AUDIO_DIR = SAMPLE / "원천데이터" / "1. 방송" / "broadcast_01"

ENG2KOR = {"ncs": "엔씨에스", "ot": "오티"}
NUM2KOR = {"0":"공","1":"일","2":"이","3":"삼","4":"사","5":"오","6":"육","7":"칠","8":"팔","9":"구"}

CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']
JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ']
JONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']


def to_jamo(text):
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


def normalize(text, keep_space=True):
    t = re.sub(r"\(([^()]+)\)/\(([^()]+)\)", r"\2", text)
    t = re.sub(r"\(\(\)\)", "", t)
    t = re.sub(r"\bo/\s*", "", t)
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


def collect_pairs(n):
    """scripts.txt 파싱 + 실제 wav 존재하는 것만."""
    pairs = []
    with SCRIPTS.open(encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if " :: " not in line:
                continue
            path_part, text = line.split(" :: ", 1)
            wav_name = Path(path_part).name  # broadcast_00000001.wav
            # 다운로드된 폴더 (034, 035 등) 검색
            candidates = list(AUDIO_DIR.glob(f"*/{wav_name}"))
            if not candidates:
                continue
            pairs.append({"wav": candidates[0], "text": text.strip(), "name": wav_name})
            if len(pairs) >= n:
                return pairs
    return pairs


def transcribe(wav, timeout=60):
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
    N = 100
    pairs = collect_pairs(N)
    print(f"=== (d) Sample(2) #130 한국인대화음성 (broadcast) CER 측정 ===")
    print(f"매칭된 (wav, script) 페어: {len(pairs)}")
    if not pairs:
        print("[FATAL] 매칭 페어 없음. wav/script 경로 확인 필요.")
        return
    print()

    refs_sp, hyps_sp, refs_ns, hyps_ns, refs_jamo, hyps_jamo = [], [], [], [], [], []
    failed = 0
    for i, p in enumerate(pairs, 1):
        hyp = transcribe(p["wav"])
        if hyp is None:
            failed += 1
            continue
        ref_sp = normalize(p["text"], keep_space=True)
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
    print("=== 4가지 지표 (broadcast 도메인) ===")
    print(f"  음절 CER (공백X):   {cer_ns:5.2f}%")
    print(f"  음절 CER (공백O):   {cer_sp:5.2f}%")
    print(f"  jamo CER:           {cer_j:5.2f}%")
    print(f"  어절 WER:           {wer_sp:5.2f}%")
    print()
    print("=== 도메인 비교 (Sample 1 통화 vs Sample 2 방송) ===")
    print(f"  Sample(1) 통화 음절 CER: 16.28% / jamo CER: 12.84% / 어절 WER: 35.21%")
    print(f"  Sample(2) 방송 음절 CER: {cer_ns:5.2f}% / jamo CER: {cer_j:5.2f}% / 어절 WER: {wer_sp:5.2f}%")
    print(f"  AI-Hub Conformer baseline: CER 9.76% / Jasper WER 22.71%")
    print()

    out = {
        "domain": "broadcast",
        "n": len(refs_ns), "failed": failed,
        "cer_syllable_no_space_pct": cer_ns,
        "cer_syllable_with_space_pct": cer_sp,
        "cer_jamo_no_space_pct": cer_j,
        "wer_eojeol_with_space_pct": wer_sp,
    }
    out_path = Path(r"C:/Users/user/Documents/project/uncounted-root/scripts/analysis/cer_sample2_broadcast_result.json")
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"저장: {out_path}")


if __name__ == "__main__":
    main()
