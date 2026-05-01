"""CER parity check — Uncounted voice-api vs AI-Hub Conformer 9.76% (2026-05-01)

AI-Hub #571 저음질 전화망 Sample(1)의 ground truth text를 voice-api 결과와 비교.
WhisperX large-v3-turbo의 한국어 CER 측정 → BM 결정 자료.

비동기 처리: POST /transcribe → task_id → polling → text 추출 → jiwer.

코드 변경 없음 — 측정만.
"""
import json
import re
import time
import sys
from pathlib import Path

import requests
from jiwer import cer, wer

API_URL = "https://acid-trees-camcorders-charge.trycloudflare.com"
SAMPLE = Path(r"C:/Users/user/Downloads/New_Sample (1)")
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"

# 측정 발화 수
N_SAMPLES = 100

# 영문 → 한글 변환 (Whisper가 영문 그대로 출력하는 경우 처리)
ENG2KOR = {
    "ncs": "엔씨에스", "ai": "에이아이", "it": "아이티", "tv": "티비",
    "pc": "피씨", "ot": "오티", "fm": "에프엠", "am": "에이엠",
    "vip": "브이아이피", "ceo": "씨이오", "cto": "씨티오", "kbs": "케이비에스",
    "sbs": "에스비에스", "mbc": "엠비씨", "skt": "에스케이티",
    "lg": "엘지", "kt": "케이티", "k": "케이",
}

NUM2KOR = {
    "0": "공", "1": "일", "2": "이", "3": "삼", "4": "사",
    "5": "오", "6": "육", "7": "칠", "8": "팔", "9": "구",
}


def normalize_for_cer(text: str, strip_spaces: bool = True) -> str:
    """AI-Hub 표기 규약 + 영문/숫자 한글 정규화 (CER 측정용).

    - (())  → 제거
    - o/    → 제거
    - (약어)/(발음) → 발음 채택
    - 영문 단어 → 한글 발음 (사전 + 글자단위 fallback)
    - 숫자 → 한글 발음
    - 띄어쓰기 무시 (한국어 띄어쓰기는 모델별 변동성 큼)
    """
    t = text
    # (약어)/(발음) → 발음 채택
    t = re.sub(r"\(([^()]+)\)/\(([^()]+)\)", r"\2", t)
    t = re.sub(r"\(\(\)\)", "", t)
    t = re.sub(r"\bo/\s*", "", t)
    t = re.sub(r"\([^()]*\)", "", t)

    # 영문 단어 → 한글 발음 (사전)
    def eng_repl(m):
        w = m.group(0).lower()
        if w in ENG2KOR:
            return ENG2KOR[w]
        # 글자단위 fallback (a → 에이, b → 비 ...)
        letter_map = {"a":"에이","b":"비","c":"씨","d":"디","e":"이","f":"에프","g":"지",
                      "h":"에이치","i":"아이","j":"제이","k":"케이","l":"엘","m":"엠",
                      "n":"엔","o":"오","p":"피","q":"큐","r":"알","s":"에스","t":"티",
                      "u":"유","v":"브이","w":"더블유","x":"엑스","y":"와이","z":"제트"}
        return "".join(letter_map.get(c, c) for c in w)
    t = re.sub(r"[A-Za-z]+", eng_repl, t)

    # 숫자 → 한글 (간단: 1234 → 일이삼사)
    t = re.sub(r"\d", lambda m: NUM2KOR.get(m.group(0), m.group(0)), t)

    # 구두점 제거
    t = re.sub(r"[.,!?~`'\"\-_]", "", t)

    if strip_spaces:
        # 한국어 CER은 띄어쓰기 무시가 표준 (모델별 변동성 큼)
        t = re.sub(r"\s+", "", t)
    else:
        t = re.sub(r"\s+", " ", t).strip()
    return t


def collect_samples(n: int):
    """Sample(1) 라벨에서 (wav_path, text) 페어 n개 수집."""
    pairs = []
    for jf in sorted(LABEL_DIR.glob("**/*.json")):
        try:
            with jf.open(encoding="utf-8") as f:
                d = json.load(f)
            for dlg in d.get("dataSet", {}).get("dialogs", []):
                ap = dlg.get("audioPath", "")
                wav_path = AUDIO_DIR / "TS_D03" / ap  # 경로 패턴 추정
                if not wav_path.exists():
                    # 다른 후보 경로
                    candidates = list(AUDIO_DIR.glob(f"**/{Path(ap).name}"))
                    if candidates:
                        wav_path = candidates[0]
                    else:
                        continue
                pairs.append({
                    "wav": wav_path,
                    "text": dlg.get("text", ""),
                    "duration": dlg.get("duration", 0),
                    "speaker": dlg.get("speaker"),
                    "session": jf.parent.name,
                })
                if len(pairs) >= n:
                    return pairs
        except Exception as e:
            print(f"[WARN] {jf.name}: {e}", flush=True)
    return pairs


def transcribe(wav_path: Path, timeout_sec: int = 90) -> str | None:
    """voice-api로 wav 전송 → text 추출. 타임아웃 시 None."""
    try:
        with wav_path.open("rb") as f:
            files = {"file": (wav_path.name, f, "audio/wav")}
            r = requests.post(f"{API_URL}/api/v1/transcribe", files=files, timeout=30)
        r.raise_for_status()
        task_id = r.json().get("task_id")
        if not task_id:
            return None
        # polling
        deadline = time.time() + timeout_sec
        while time.time() < deadline:
            time.sleep(1.5)
            r2 = requests.get(f"{API_URL}/api/v1/jobs/{task_id}", timeout=20)
            if r2.status_code != 200:
                continue
            data = r2.json()
            status = data.get("status")
            if status == "completed":
                # text aggregate from segments
                segs = data.get("segments", [])
                return " ".join(s.get("text", "").strip() for s in segs).strip()
            if status in ("failed", "error", "rejected"):
                print(f"  [{wav_path.name}] status={status}", flush=True)
                return None
        return None
    except Exception as e:
        print(f"  [{wav_path.name}] err: {e}", flush=True)
        return None


def main():
    print(f"=== CER parity check ===")
    print(f"voice-api: {API_URL}")
    print(f"target samples: {N_SAMPLES}")
    print()

    # health check
    try:
        h = requests.get(f"{API_URL}/api/v1/health", timeout=10).json()
        print(f"voice-api: {h.get('model')} on {h.get('gpu')} (loaded={h.get('model_loaded')})")
    except Exception as e:
        print(f"[FATAL] health check failed: {e}")
        return
    print()

    pairs = collect_samples(N_SAMPLES)
    print(f"수집한 페어: {len(pairs)}")
    print()

    refs, hyps, durations = [], [], []
    failed = 0
    for i, p in enumerate(pairs, 1):
        ref_norm = normalize_for_cer(p["text"])
        if not ref_norm:
            continue
        print(f"[{i}/{len(pairs)}] {p['wav'].name} ({p['duration']}s) ref='{ref_norm[:40]}...'", flush=True)
        hyp = transcribe(p["wav"])
        if hyp is None:
            failed += 1
            continue
        hyp_norm = normalize_for_cer(hyp)
        refs.append(ref_norm)
        hyps.append(hyp_norm)
        durations.append(p["duration"])
        # 개별 CER 표시
        try:
            c = cer(ref_norm, hyp_norm)
            print(f"     hyp='{hyp_norm[:40]}...'  CER={c*100:.1f}%", flush=True)
        except Exception:
            pass

    print()
    print("=" * 60)
    print(f"성공: {len(refs)} / 실패: {failed}")
    if not refs:
        print("(측정 불가)")
        return

    # 개별 CER 계산 → outlier 식별
    per_cer = [cer(r, h) for r, h in zip(refs, hyps)]
    paired = list(zip(refs, hyps, durations, per_cer))

    # 정렬해서 분포 확인
    paired_sorted = sorted(paired, key=lambda x: x[3])
    n = len(paired_sorted)
    print(f"개별 CER 분포: min={paired_sorted[0][3]*100:.1f}% / median={paired_sorted[n//2][3]*100:.1f}% / max={paired_sorted[-1][3]*100:.1f}%")

    # outlier (CER > 100%) 제외 — 음원 문제·STT 환각·매칭 실패
    clean = [p for p in paired if p[3] <= 1.0]
    n_outliers = len(paired) - len(clean)
    print(f"outlier (CER>100%) 제외: {n_outliers}건")

    # 전체
    overall_cer = cer(refs, hyps)
    overall_wer = wer(refs, hyps)
    total_dur = sum(durations)

    # outlier 제외 통계
    refs_clean = [p[0] for p in clean]
    hyps_clean = [p[1] for p in clean]
    cer_clean = cer(refs_clean, hyps_clean) if refs_clean else 0
    wer_clean = wer(refs_clean, hyps_clean) if refs_clean else 0

    print()
    print("=" * 60)
    print(f"[전체 {len(refs)}건] CER: {overall_cer*100:.2f}% / WER: {overall_wer*100:.2f}%")
    print(f"[outlier 제외 {len(refs_clean)}건] CER: {cer_clean*100:.2f}% / WER: {wer_clean*100:.2f}%")
    print(f"총 측정 시간: {total_dur:.1f}s ({total_dur/60:.1f}분)")
    print()
    print("=== AI-Hub 비교 (outlier 제외 기준) ===")
    print(f"  AI-Hub Conformer baseline:  CER  9.76% / WER 22.71% (Jasper)")
    print(f"  Uncounted voice-api:        CER {cer_clean*100:5.2f}% / WER {wer_clean*100:5.2f}%")
    cer_gap = cer_clean*100 - 9.76
    wer_gap = wer_clean*100 - 22.71
    print(f"  Gap (음수 = 우리가 더 우수):  CER {cer_gap:+.2f}p / WER {wer_gap:+.2f}p")
    print()

    # JSON 저장
    out_dir = Path(r"C:/Users/user/Documents/project/uncounted-root/scripts/analysis")
    out = {
        "n_samples": len(refs),
        "n_outliers_excluded": n_outliers,
        "n_clean": len(refs_clean),
        "n_failed": failed,
        "total_duration_sec": total_dur,
        "all_cer_pct": overall_cer * 100,
        "all_wer_pct": overall_wer * 100,
        "clean_cer_pct": cer_clean * 100,
        "clean_wer_pct": wer_clean * 100,
        "aihub_conformer_cer_pct": 9.76,
        "aihub_jasper_wer_pct": 22.71,
        "clean_cer_gap_p": cer_gap,
        "clean_wer_gap_p": wer_gap,
        "normalization": "영문→한글 발음, 숫자→한글, 구두점 제거, 띄어쓰기 무시 (한국어 CER 표준)",
        "samples": [
            {"ref": r[:80], "hyp": h[:80], "cer_pct": c*100, "duration": d}
            for r, h, d, c in paired_sorted[:5] + paired_sorted[-5:]
        ],
    }
    (out_dir / "cer_parity_result.json").write_text(
        json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"결과 저장: {out_dir / 'cer_parity_result.json'}")


if __name__ == "__main__":
    main()
