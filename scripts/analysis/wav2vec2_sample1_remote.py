"""(a-1) kresnik/wav2vec2-large-xlsr-korean을 우리 Sample(1) 100건에서 측정.

GPU 서버 (RTX 4060 Ti)에서 실행. KsponSpeech fine-tune된 한국어 specialized 모델이
저음질 통화 도메인에서 얼마나 약한지 측정 → WhisperX 16.28%가 모델 능력 한계인지
도메인 적응 부재인지 분리.

비교:
  WhisperX large-v3-turbo (multilingual, ~1.5B): 16.28%
  Wav2Vec2-large-xlsr-korean (한국어, ~315M): ?
"""
import json
import re
import sys
import time
from pathlib import Path

import torch
import soundfile as sf
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
from jiwer import cer, wer

MODEL_ID = "kresnik/wav2vec2-large-xlsr-korean"
SAMPLE = Path.home() / "aihub_data" / "sample1"  # GPU 서버 경로
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"
N = 100

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
            jong = base % 28; jung = (base // 28) % 21; cho = base // 588
            out.append(CHO[cho]); out.append(JUNG[jung])
            if jong > 0: out.append(JONG[jong])
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
    t = re.sub(r"[.,!?~`'\"\-_]", "", t)
    t = re.sub(r"\s+", " " if keep_space else "", t).strip()
    return t


def collect():
    pairs = []
    for jf in sorted(LABEL_DIR.glob("**/*.json")):
        with jf.open(encoding="utf-8") as f:
            d = json.load(f)
        for dlg in d.get("dataSet", {}).get("dialogs", []):
            ap = dlg.get("audioPath", "")
            wav = AUDIO_DIR / "TS_D03" / ap
            if not wav.exists():
                continue
            pairs.append({"wav": str(wav), "text": dlg.get("text", ""), "duration": dlg.get("duration", 0)})
            if len(pairs) >= N:
                return pairs
    return pairs


def main():
    print(f"=== (a-1) kresnik wav2vec2 vs WhisperX 비교 ===")
    print(f"Loading {MODEL_ID} ...", flush=True)
    t0 = time.time()
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"device: {device}")
    processor = Wav2Vec2Processor.from_pretrained(MODEL_ID)
    model = Wav2Vec2ForCTC.from_pretrained(MODEL_ID).to(device).eval()
    print(f"Model loaded in {time.time()-t0:.1f}s")

    pairs = collect()
    print(f"수집: {len(pairs)}건")
    if not pairs:
        print("[FATAL] 수집 페어 없음")
        return

    refs_sp, hyps_sp, refs_ns, hyps_ns, refs_j, hyps_j = [], [], [], [], [], []
    failed = 0
    t_start = time.time()
    for i, p in enumerate(pairs, 1):
        try:
            audio, sr = sf.read(p["wav"])
            if audio.ndim > 1:
                audio = audio.mean(axis=1)
            if sr != 16000:
                # wav2vec2-xlsr 16k 입력 필요 — Sample(1) 8k일 가능성. 리샘플링 필요
                import numpy as np
                from scipy.signal import resample_poly
                audio = resample_poly(audio, 16000, sr)
                sr = 16000
            inputs = processor(audio, sampling_rate=16000, return_tensors="pt", padding=True)
            with torch.no_grad():
                logits = model(inputs.input_values.to(device)).logits
            pred_ids = torch.argmax(logits, dim=-1)
            hyp = processor.batch_decode(pred_ids)[0]
        except Exception as e:
            print(f"  [{i}] ERR: {e}", flush=True)
            failed += 1
            continue

        ref_sp = normalize(p["text"], keep_space=True)
        hyp_sp = normalize(hyp, keep_space=True)
        ref_ns = re.sub(r"\s+", "", ref_sp); hyp_ns = re.sub(r"\s+", "", hyp_sp)
        if not ref_ns: continue
        refs_sp.append(ref_sp); hyps_sp.append(hyp_sp)
        refs_ns.append(ref_ns); hyps_ns.append(hyp_ns)
        refs_j.append(to_jamo(ref_ns)); hyps_j.append(to_jamo(hyp_ns))
        if i % 20 == 0:
            print(f"  [{i}/{len(pairs)}] processed ({time.time()-t_start:.0f}s elapsed)", flush=True)

    if not refs_ns:
        print("측정 실패")
        return

    cer_ns = cer(refs_ns, hyps_ns) * 100
    cer_sp = cer(refs_sp, hyps_sp) * 100
    cer_j = cer(refs_j, hyps_j) * 100
    wer_sp = wer(refs_sp, hyps_sp) * 100

    print()
    print("=" * 60)
    print(f"성공: {len(refs_ns)} / 실패: {failed} / 시간: {time.time()-t_start:.0f}s")
    print()
    print("=== Wav2Vec2 (한국어 specialized, KsponSpeech fine-tune) — Sample(1) 통화 ===")
    print(f"  음절 CER (공백X): {cer_ns:5.2f}%")
    print(f"  음절 CER (공백O): {cer_sp:5.2f}%")
    print(f"  jamo CER:        {cer_j:5.2f}%")
    print(f"  어절 WER:        {wer_sp:5.2f}%")
    print()
    print("=== 참고 비교 (Sample(1) 100건 동일) ===")
    print(f"  WhisperX large-v3-turbo:  CER 16.28% / jamo 12.84% / WER 35.21%")
    print(f"  Wav2Vec2-xlsr-korean:     CER {cer_ns:5.2f}% / jamo {cer_j:5.2f}% / WER {wer_sp:5.2f}%")
    print(f"  AI-Hub Conformer (다른 fine-tune·in-distribution): CER 9.76% (참고용)")
    print()
    print("=== 해석 ===")
    if cer_ns < 16.28:
        print(f"  → KsponSpeech 학습 모델이 우리 통화에서 더 우수 ({cer_ns:.1f}% < 16.28%)")
        print(f"  → WhisperX의 16.28%는 모델 능력 한계가 아니라 도메인 적응 부재 신호")
    elif cer_ns > 16.28:
        print(f"  → 두 모델 모두 통화에서 약함 (Wav2Vec2 {cer_ns:.1f}% > WhisperX 16.28%)")
        print(f"  → 통화 도메인 자체의 일반적 어려움 — fine-tune 또는 도메인 데이터 필수")
    else:
        print(f"  → 두 모델 동급 — 통화 도메인 일반 한계")

    out = {
        "model": MODEL_ID,
        "domain": "Sample(1) 저음질 통화 (#571 D03 HR/구직)",
        "n": len(refs_ns), "failed": failed,
        "elapsed_sec": time.time()-t_start,
        "cer_syllable_no_space_pct": cer_ns,
        "cer_syllable_with_space_pct": cer_sp,
        "cer_jamo_no_space_pct": cer_j,
        "wer_eojeol_with_space_pct": wer_sp,
        "comparison": {
            "whisperx_large_v3_turbo_cer": 16.28,
            "whisperx_large_v3_turbo_wer": 35.21,
            "aihub_conformer_baseline_cer": 9.76,
        },
    }
    out_path = Path.home() / "aihub_data" / "wav2vec2_sample1_result.json"
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"저장: {out_path}")


if __name__ == "__main__":
    main()
