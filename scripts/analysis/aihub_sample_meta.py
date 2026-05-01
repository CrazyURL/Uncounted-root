"""AI-Hub Sample(1) #571 저음질 전화망 메타 분석 (2026-05-01)

음성 1회 측정 + 비율 분포 (성별/연령/도메인) 통계.
v3.0 BM 영업 자료에 활용. 코드 변경 없음 — 분석만.
"""
import json
from collections import Counter, defaultdict
from pathlib import Path

SAMPLE = Path(r"C:/Users/user/Downloads/New_Sample (1)")
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"


def main():
    json_files = sorted(LABEL_DIR.glob("**/*.json"))
    print(f"=== AI-Hub #571 저음질 전화망 Sample(1) 분석 ===")
    print(f"라벨 JSON 수: {len(json_files)}")
    print()

    sessions = []
    speakers_all = []
    dialogs_all = []

    for jf in json_files:
        try:
            with jf.open(encoding="utf-8") as f:
                d = json.load(f)
            ds = d.get("dataSet", {})
            ti = ds.get("typeInfo", {})
            sessions.append(
                {
                    "file": str(jf.relative_to(SAMPLE)),
                    "category": ti.get("category"),
                    "subcategory": ti.get("subcategory"),
                    "inputType": ti.get("inputType"),
                    "place": ti.get("place"),
                    "speakers": ti.get("speakers", []),
                    "dialogs_count": len(ds.get("dialogs", [])),
                }
            )
            speakers_all.extend(ti.get("speakers", []))
            dialogs_all.extend(ds.get("dialogs", []))
        except Exception as e:
            print(f"[WARN] {jf.name}: {e}")

    # 1. 도메인 분포
    print("--- 1. 도메인 분포 (typeInfo.category) ---")
    cat_count = Counter(s["category"] for s in sessions)
    for c, n in cat_count.most_common():
        print(f"  {c:20s}: {n:3d} sessions ({n*100/max(len(sessions),1):.1f}%)")
    print()

    print("--- 2. 서브카테고리 분포 ---")
    sub_count = Counter(s["subcategory"] for s in sessions)
    for c, n in sub_count.most_common():
        print(f"  {c or '(null)':20s}: {n:3d} sessions")
    print()

    print("--- 3. 입력 형식 (inputType) ---")
    it_count = Counter(s["inputType"] for s in sessions)
    for c, n in it_count.most_common():
        print(f"  {c or '(null)':20s}: {n:3d} sessions")
    print()

    print("--- 4. 화자 분포 ---")
    print(f"  총 화자 항목: {len(speakers_all)} (avg {len(speakers_all)/max(len(sessions),1):.1f}/session)")

    gender_count = Counter(sp.get("gender") for sp in speakers_all)
    print(f"  성별: {dict(gender_count)}")

    age_count = Counter(sp.get("age") for sp in speakers_all)
    print(f"  연령대: {dict(age_count)}")

    type_count = Counter(sp.get("type") for sp in speakers_all)
    print(f"  화자 type: {dict(type_count)}")

    res_count = Counter(sp.get("residence") for sp in speakers_all)
    print(f"  거주지: {dict(res_count)}")

    net_count = Counter(sp.get("telephone_network") for sp in speakers_all)
    print(f"  전화망: {dict(net_count)}")
    print()

    # 5. 발화 통계
    print("--- 5. 발화 통계 ---")
    print(f"  총 발화: {len(dialogs_all)}")
    durations = [d.get("duration", 0) for d in dialogs_all]
    if durations:
        durations.sort()
        n = len(durations)
        total_sec = sum(durations)
        print(f"  총 시간: {total_sec:.1f}s ({total_sec/3600:.2f}h)")
        print(f"  평균 길이: {sum(durations)/n:.2f}s")
        print(f"  최소/중간/최대: {durations[0]:.2f} / {durations[n//2]:.2f} / {durations[-1]:.2f}s")
    print()

    # 6. 텍스트 표기 규약 분석
    print("--- 6. 텍스트 표기 규약 발견 ---")
    notation_pat = {
        "(())": 0,
        "(o)/(": 0,
        "(약어)/(발음)": 0,
        "기타 (...)": 0,
    }
    import re
    pat_unknown = re.compile(r"\(\(\)\)")
    pat_marker = re.compile(r"\bo/")
    pat_dual = re.compile(r"\([^()]+\)\/\([^()]+\)")

    for dlg in dialogs_all:
        t = dlg.get("text", "")
        if pat_unknown.search(t):
            notation_pat["(())"] += 1
        if pat_marker.search(t):
            notation_pat["(o)/("] += 1
        if pat_dual.search(t):
            notation_pat["(약어)/(발음)"] += 1
    for k, v in notation_pat.items():
        print(f"  {k:15s}: {v} 건")
    print()

    # 7. 첫 5개 dialog 샘플
    print("--- 7. dialog 샘플 (첫 5건) ---")
    for d in dialogs_all[:5]:
        text = d.get("text", "")[:100]
        print(f"  [spk {d.get('speaker')}] {d.get('audioPath')} ({d.get('duration')}s)")
        print(f"    {text}")
    print()

    # 8. v3.0 BM 영업 자료용 비율 비교
    print("--- 8. v3.0 BM 영업 비교 (AI-Hub 공식 vs 우리 샘플) ---")
    print("  AI-Hub 공식: 남 50% / 여 50%, 8k 92% / wide 8%, 도메인 4종 (교육23/공공31/HR11/전상35)")
    g = dict(gender_count)
    male = g.get("남", 0)
    female = g.get("여", 0)
    total_g = male + female
    if total_g:
        print(f"  Sample(1) 측정: 남 {male*100/total_g:.0f}% / 여 {female*100/total_g:.0f}%")
    n = dict(net_count)
    if n:
        print(f"  Sample(1) 전화망: {n}")


if __name__ == "__main__":
    main()
