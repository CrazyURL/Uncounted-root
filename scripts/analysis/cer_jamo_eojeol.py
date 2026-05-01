"""(c) Jamo 단위 CER + 어절 정규화 CER 측정 — 2026-05-01

기존 (b) 측정에서 outlier 0건 확인 → fair한 100건 데이터로 3가지 측정:
  1. char CER (현재 — 음절 단위)
  2. jamo CER (자모 단위 — 한국어 음운 학적 표준)
  3. 어절 정규화 후 CER (띄어쓰기 변동성 흡수)
  4. 어절 WER (띄어쓰기 보존 — 의미 있는 WER)

WER 91.86%가 띄어쓰기 제거 영향이었는지, 진짜 어절 단위 약점인지 확인.
"""
import json
import re
import time
from pathlib import Path

import requests
from jiwer import cer, wer

API_URL = "https://acid-trees-camcorders-charge.trycloudflare.com"
SAMPLE = Path(r"C:/Users/user/Downloads/New_Sample (1)")
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"

ENG2KOR = {"ncs": "엔씨에스", "ot": "오티"}
NUM2KOR = {"0":"공","1":"일","2":"이","3":"삼","4":"사","5":"오","6":"육","7":"칠","8":"팔","9":"구"}

# 한글 자모 분리 (초성·중성·종성)
CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']
JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ']
JONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']


def to_jamo(text: str) -> str:
    """한글 음절 → 초성+중성+종성 자모 시퀀스. 비한글은 그대로."""
    out = []
    for ch in text:
        c = ord(ch)
        if 0xAC00 <= c <= 0xD7A3:  # 한글 음절
            base = c - 0xAC00
            jong_idx = base % 28
            jung_idx = (base // 28) % 21
            cho_idx = base // (28 * 21)
            out.append(CHO[cho_idx])
            out.append(JUNG[jung_idx])
            if jong_idx > 0:
                out.append(JONG[jong_idx])
        else:
            out.append(ch)
    return "".join(out)


def normalize_with_spaces(text: str) -> str:
    """띄어쓰기 보존 + 어절 분리 가능한 정규화."""
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
    t = re.sub(r"\s+", " ", t).strip()
    return t


def normalize_no_space(text: str) -> str:
    """띄어쓰기 무시."""
    return re.sub(r"\s+", "", normalize_with_spaces(text))


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
            pairs.append({"wav": wav, "text": dlg.get("text", ""), "duration": dlg.get("duration", 0)})
            if len(pairs) >= n:
                return pairs
    return pairs


def transcribe(wav: Path, timeout=60):
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
                return " ".join(s.get("text", "").strip() for s in segs).strip()
            if data.get("status") in ("failed", "error", "rejected"):
                return None
        return None
    except Exception:
        return None


def main():
    N = 100
    pairs = collect_pairs(N)
    print(f"=== (c) Jamo + 어절 CER 측정 (n={len(pairs)}) ===")

    refs_space, hyps_space = [], []
    refs_nospace, hyps_nospace = [], []
    refs_jamo, hyps_jamo = [], []
    durations = []
    failed = 0

    for i, p in enumerate(pairs, 1):
        hyp = transcribe(p["wav"])
        if hyp is None:
            failed += 1
            continue
        ref_sp = normalize_with_spaces(p["text"])
        hyp_sp = normalize_with_spaces(hyp)
        ref_ns = re.sub(r"\s+", "", ref_sp)
        hyp_ns = re.sub(r"\s+", "", hyp_sp)
        if not ref_ns:
            continue
        refs_space.append(ref_sp)
        hyps_space.append(hyp_sp)
        refs_nospace.append(ref_ns)
        hyps_nospace.append(hyp_ns)
        refs_jamo.append(to_jamo(ref_ns))
        hyps_jamo.append(to_jamo(hyp_ns))
        durations.append(p["duration"])
        if i % 20 == 0:
            print(f"  [{i}/{len(pairs)}] processed")

    print()
    if not refs_nospace:
        print("측정 실패")
        return

    # 4가지 지표
    cer_no_space = cer(refs_nospace, hyps_nospace) * 100  # 음절·띄어쓰기 무시
    cer_with_space = cer(refs_space, hyps_space) * 100    # 음절·띄어쓰기 보존
    cer_jamo_metric = cer(refs_jamo, hyps_jamo) * 100     # 자모·띄어쓰기 무시
    wer_with_space = wer(refs_space, hyps_space) * 100    # 어절 WER (띄어쓰기 의미 있음)

    print("=" * 60)
    print(f"성공: {len(refs_nospace)} / 실패: {failed}")
    print(f"총 시간: {sum(durations):.1f}s ({sum(durations)/60:.1f}분)")
    print()
    print("=== 4가지 지표 비교 ===")
    print(f"  음절 CER (띄어쓰기 무시):  {cer_no_space:5.2f}%")
    print(f"  음절 CER (띄어쓰기 보존):  {cer_with_space:5.2f}%")
    print(f"  jamo CER (자모, 띄어쓰기 무시): {cer_jamo_metric:5.2f}%")
    print(f"  어절 WER (띄어쓰기 보존):   {wer_with_space:5.2f}%")
    print()
    print("=== AI-Hub 비교 ===")
    print(f"  AI-Hub Conformer:           CER  9.76%")
    print(f"  AI-Hub Jasper:              WER 22.71%")
    print(f"  Uncounted CER (음절/공백X): {cer_no_space:5.2f}%  (gap +{cer_no_space-9.76:.2f}p)")
    print(f"  Uncounted WER (어절):       {wer_with_space:5.2f}%  (gap +{wer_with_space-22.71:.2f}p)")
    print()
    print("=== 주의 ===")
    print("  - jamo CER이 음절 CER의 ~1.5~2배면: 음운적으로는 매우 가깝다는 뜻 (정상)")
    print("  - jamo CER이 음절 CER과 비슷하면: 완전히 다른 단어 출력 (심각)")
    print("  - 어절 WER이 음절 CER의 4~5배: 한국어 모델 띄어쓰기 변동 정상")
    print("  - 어절 WER이 80%+: 어절 정규화/띄어쓰기 매칭 알고리즘 약함")

    out = {
        "n": len(refs_nospace), "failed": failed,
        "duration_sec": sum(durations),
        "cer_syllable_no_space_pct": cer_no_space,
        "cer_syllable_with_space_pct": cer_with_space,
        "cer_jamo_no_space_pct": cer_jamo_metric,
        "wer_eojeol_with_space_pct": wer_with_space,
        "aihub_conformer_cer_pct": 9.76,
        "aihub_jasper_wer_pct": 22.71,
        "interpretation": {
            "jamo_vs_syllable_ratio": cer_jamo_metric / cer_no_space if cer_no_space else None,
            "wer_vs_cer_ratio": wer_with_space / cer_no_space if cer_no_space else None,
        },
    }
    out_path = Path(r"C:/Users/user/Documents/project/uncounted-root/scripts/analysis/cer_jamo_eojeol_result.json")
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"저장: {out_path}")


if __name__ == "__main__":
    main()
