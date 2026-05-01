"""알파 209건 PII baseline 분석 (2026-04-30)

게이트 3.5 PII 매트릭스 8개 카테고리 기준으로 검출률·FP 측정.
v3.0 BM 정합성 평가용. 코드 변경 없음 — 결과 리포트만.
"""
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ALPHA = Path(
    r"C:/Users/user/Downloads/UNCOUNTED_CLOVA_Alpha_Sample_Package_20260414.zip"
    r"/UNCOUNTED_CLOVA_Alpha_Sample_Package_20260414.zip"
)

PARTS = ("part_01", "part_02", "part_03", "part_04")

# ── 마스킹 패턴 (검출됨 — 이미 voice-api 처리 결과) ──
MASKED_PATTERNS = {
    "이름_OO": re.compile(r"[가-힣][O]{2,}"),  # 서OO조, 김OO 등
    "이름_***": re.compile(r"\*{2,}"),
    "[NAME]": re.compile(r"\[(이름|NAME|성명)\]"),
    "[PHONE]": re.compile(r"\[(전화|PHONE|번호)\]"),
    "[EMAIL]": re.compile(r"\[(이메일|EMAIL)\]"),
    "[숫자]": re.compile(r"\[숫자\]"),
    "비프_<bleep>": re.compile(r"<bleep>|\[BLEEP\]|\[비프\]"),
}

# ── 잠재 PII 누설 의심 패턴 (마스킹 안 됐을 가능성) ──
LEAK_PATTERNS = {
    "전화번호_숫자형": re.compile(r"\b01[0-9][-\s]?\d{3,4}[-\s]?\d{4}\b"),
    "주민번호": re.compile(r"\b\d{6}[-\s]?[1-4]\d{6}\b"),
    "이메일": re.compile(r"\b[\w.+-]+@[\w-]+\.[\w.-]+\b"),
    "카드번호": re.compile(r"\b\d{4}[-\s]\d{4}[-\s]\d{4}[-\s]\d{4}\b"),
    "한국 성+1글자_호칭": re.compile(
        r"[김이박최정강조윤장임한오서신권황안송유홍전고손양배조백허남심노문][가-힣](?=\s?(형|누나|언니|오빠|동생|엄마|아빠|어머니|아버지|할머니|할아버지|아주머니|아저씨|삼촌|이모|고모|씨|님|선생|부장|과장|팀장|차장|대리|사장|회장|이사|상무|전무|국장|실장|소장|원장|대표|매니저))"
    ),
    "한국 성+2글자_호칭": re.compile(
        r"[김이박최정강조윤장임한오서신권황안송유홍전고손양배조백허남심노문][가-힣]{2}(?=\s?(형|누나|언니|오빠|동생|엄마|아빠|씨|님|선생|부장|과장|팀장|사장))"
    ),
    "한글 숫자 패턴": re.compile(r"공[일이삼사오육칠팔구]{2,}|[일이삼사오육칠팔구]{4,}"),
    "메일_트리거": re.compile(r"메일은?\s*\S+|이메일은?\s*\S+"),
    "주소_지번": re.compile(r"\d+동\s?\d+호|\d+층"),
    "주민번호_뒷자리트리거": re.compile(r"뒷자리\s*[\d일이삼사오육칠팔구공]{4,}"),
}

# ── 게이트 3.5 8개 카테고리 매핑 ──
CATEGORY_MAP = {
    "1_음성_겹침": ["overlap"],  # transcripts에서는 겹침 직접 보이지 않음
    "2_저SNR": ["snr_db < 15"],  # utterances.jsonl snr_db로 카운트
    "3_사투리_신조어": ["호칭_확장"],
    "4_중의적": ["LLM 분석 필요"],
    "5_STT_전사오류_한글숫자": ["한글 숫자 패턴"],
    "6_비정형_PII": ["메일_트리거", "주소_지번", "주민번호_뒷자리트리거"],
    "7_문맥_파악실패": ["LLM 분석 필요"],
    "8_고유명사_사전미비": ["고유명사 NER"],
}


def collect_transcripts():
    """모든 part의 transcripts/*.json 텍스트 수집.

    주의 (2026-04-30): part_02/03은 모든 utterance JSON에 동일한 세션 전체 텍스트가
    중복 저장되어 있음 → session_id별 unique 텍스트만 수집해야 통계 정확.
    """
    docs = []
    seen_texts = {}  # text hash → first occurrence
    for part in PARTS:
        tdir = ALPHA / part / "transcripts"
        if not tdir.exists():
            continue
        for jf in sorted(tdir.glob("*.json")):
            try:
                with jf.open(encoding="utf-8") as f:
                    d = json.load(f)
                text = d.get("text", "")
                # session_id를 utterance_id에서 추출 (utt_<sessionhash>_<seq>.json)
                # _001 등 seq 분리
                stem = jf.stem
                if "_" in stem:
                    parts_uid = stem.rsplit("_", 1)
                    session_key = parts_uid[0]  # utt_3166e84d41d962ed
                else:
                    session_key = stem
                key = (part, session_key, text)
                if key in seen_texts:
                    continue  # 중복 텍스트 스킵
                seen_texts[key] = jf.stem
                docs.append(
                    {"part": part, "uid": jf.stem, "session": session_key, "text": text}
                )
            except Exception as e:
                print(f"[WARN] {jf}: {e}")
    return docs


def collect_utterances():
    """utterances.jsonl 메타 수집 (SNR, 화자, 등급)."""
    utts = []
    for part in PARTS:
        jf = ALPHA / part / "metadata" / "utterances.jsonl"
        if not jf.exists():
            continue
        with jf.open(encoding="utf-8") as f:
            for line in f:
                try:
                    utts.append(json.loads(line))
                except json.JSONDecodeError:
                    pass
    return utts


def main():
    docs = collect_transcripts()
    utts = collect_utterances()

    print(f"총 transcripts: {len(docs)}")
    print(f"총 utterances 메타: {len(utts)}")
    print(f"평균 텍스트 길이: {sum(len(d['text']) for d in docs) / max(len(docs),1):.1f} chars")
    print()

    # 1. 마스킹 패턴 카운트
    print("=" * 70)
    print("1. 마스킹 패턴 검출 (이미 voice-api에서 마스킹된 것)")
    print("=" * 70)
    masked_total = Counter()
    for d in docs:
        for name, pat in MASKED_PATTERNS.items():
            n = len(pat.findall(d["text"]))
            if n:
                masked_total[name] += n
    for name, n in masked_total.most_common():
        print(f"  {name:20s}: {n:5d} 건")
    if not masked_total:
        print("  (마스킹 패턴 발견 없음)")
    print()

    # 2. 잠재 누설 의심 패턴
    print("=" * 70)
    print("2. 잠재 PII 누설 의심 (마스킹 미적용 가능성)")
    print("=" * 70)
    leak_per_pat = defaultdict(list)
    for d in docs:
        for name, pat in LEAK_PATTERNS.items():
            for m in pat.findall(d["text"]):
                if isinstance(m, tuple):
                    m = "".join(m)
                leak_per_pat[name].append((d["part"], d["uid"], m))
    for name, hits in sorted(leak_per_pat.items(), key=lambda x: -len(x[1])):
        print(f"  {name:30s}: {len(hits):4d} 건  (sample: {hits[:3]})")
    if not leak_per_pat:
        print("  (잠재 누설 패턴 발견 없음 — 모두 마스킹 또는 미발화)")
    print()

    # 3. 게이트 3.5 카테고리별 분포
    print("=" * 70)
    print("3. 게이트 3.5 8개 카테고리별 분포")
    print("=" * 70)

    # 카테고리 2 (저SNR)
    snr_15_below = sum(1 for u in utts if (u.get("snr_db") or 100) < 15)
    print(f"  Cat 2 (저SNR <15dB): {snr_15_below}/{len(utts)} 발화 ({snr_15_below*100/max(len(utts),1):.1f}%)")

    # 카테고리 5 (한글 숫자)
    cat5 = len(leak_per_pat.get("한글 숫자 패턴", []))
    print(f"  Cat 5 (한글 숫자): {cat5} 건 누설 의심")

    # 카테고리 6 (비정형)
    cat6 = sum(len(leak_per_pat.get(k, [])) for k in ("메일_트리거", "주소_지번", "주민번호_뒷자리트리거"))
    print(f"  Cat 6 (비정형 PII): {cat6} 건 누설 의심")

    # 카테고리 3 (사투리/호칭)
    cat3 = len(leak_per_pat.get("한국 성+1글자_호칭", [])) + len(leak_per_pat.get("한국 성+2글자_호칭", []))
    print(f"  Cat 3 (이름+호칭 누설): {cat3} 건 의심  ← H급 위험")

    # 카테고리 1 (겹침) — 메타에 overlap 필드 있는지
    overlap_keys = [k for u in utts[:1] for k in u.keys() if "overlap" in k.lower()]
    print(f"  Cat 1 (음성 겹침): 메타 키 = {overlap_keys}")
    print()

    # 4. 마스킹 vs 누설 ratio (rough estimate)
    print("=" * 70)
    print("4. PII 마스킹 추정 검출률 (rough)")
    print("=" * 70)
    masked_n = sum(masked_total.values())
    leak_n = sum(len(v) for v in leak_per_pat.values())
    total = masked_n + leak_n
    if total:
        recall = masked_n * 100 / total
        print(f"  마스킹 적용:     {masked_n:5d} 건")
        print(f"  잠재 누설 의심: {leak_n:5d} 건")
        print(f"  추정 Recall:     {recall:.1f}%  ({masked_n}/{total})")
        print(f"  → 게이트 3.5 목표 (97%)와의 갭: {97 - recall:+.1f}p")
    else:
        print("  데이터 부족")
    print()

    # 5. 누설 의심 sample 자세히
    print("=" * 70)
    print("5. 누설 의심 발화 sample (10건)")
    print("=" * 70)
    samples_shown = 0
    for d in docs:
        leaks = []
        for name, pat in LEAK_PATTERNS.items():
            if pat.search(d["text"]):
                leaks.append(name)
        if leaks and samples_shown < 10:
            print(f"  [{d['part']}/{d['uid']}] {leaks}")
            print(f"    text: {d['text'][:120]}{'...' if len(d['text'])>120 else ''}")
            samples_shown += 1
    print()


if __name__ == "__main__":
    main()
