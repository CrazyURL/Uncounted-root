"""(a-2) WhisperX small + LoRA fine-tune trend 측정 — 2026-05-01

목적: zero-shot WhisperX 16.28%가 fine-tune으로 얼마나 개선되는지 trend 정량화.
BM v9.0 결정 자료 (UC-A1/A2/A3 단가 정당화 + Step F 효과 검증).

방식:
  1. Sample(1) 100건 stratified train/eval split (80/20)
  2. baseline: whisper-small zero-shot CER on eval
  3. LoRA fine-tune (small, r=8) 100/300/500 step
  4. 각 step에서 eval CER 측정 → trend

VRAM: ~3GB (small + LoRA r=8). voice-api(7.4GB free) 동시 실행 가능.
시간: 30분~1시간 (RTX 4060 Ti).
"""
import json
import re
import sys
import time
from pathlib import Path

import torch
import soundfile as sf
import numpy as np
from scipy.signal import resample_poly
from transformers import (
    WhisperProcessor,
    WhisperForConditionalGeneration,
    Seq2SeqTrainer,
    Seq2SeqTrainingArguments,
)
from peft import LoraConfig, get_peft_model, TaskType
from datasets import Dataset
from jiwer import cer

MODEL_ID = "openai/whisper-small"
LANG = "ko"
TASK = "transcribe"
SAMPLE = Path.home() / "aihub_data" / "sample1"
LABEL_DIR = SAMPLE / "라벨링데이터"
AUDIO_DIR = SAMPLE / "원천데이터"
OUT_DIR = Path.home() / "aihub_data" / "finetune_out"
OUT_DIR.mkdir(parents=True, exist_ok=True)

ENG2KOR = {"ncs": "엔씨에스", "ot": "오티"}
NUM2KOR = {"0":"공","1":"일","2":"이","3":"삼","4":"사","5":"오","6":"육","7":"칠","8":"팔","9":"구"}


def normalize(text: str) -> str:
    t = re.sub(r"\(([^()]+)\)/\(([^()]+)\)", r"\2", text)
    t = re.sub(r"\(\(\)\)", "", t)
    t = re.sub(r"\bo/\s*", "", t)
    t = re.sub(r"\([^()]*\)", "", t)
    def er(m):
        w = m.group(0).lower()
        if w in ENG2KOR:
            return ENG2KOR[w]
        l = {"a":"에이","b":"비","c":"씨","d":"디","e":"이","f":"에프","g":"지","h":"에이치",
             "i":"아이","j":"제이","k":"케이","l":"엘","m":"엠","n":"엔","o":"오","p":"피",
             "q":"큐","r":"알","s":"에스","t":"티","u":"유","v":"브이","w":"더블유","x":"엑스",
             "y":"와이","z":"제트"}
        return "".join(l.get(c,c) for c in w)
    t = re.sub(r"[A-Za-z]+", er, t)
    t = re.sub(r"\d", lambda m: NUM2KOR.get(m.group(0), m.group(0)), t)
    t = re.sub(r"[.,!?~`'\"\-_]", "", t)
    t = re.sub(r"\s+", "", t).strip()
    return t


def load_audio(path: Path) -> np.ndarray:
    audio, sr = sf.read(str(path))
    if audio.ndim > 1:
        audio = audio.mean(axis=1)
    if sr != 16000:
        audio = resample_poly(audio, 16000, sr).astype(np.float32)
    return audio.astype(np.float32)


def collect_pairs(n=100):
    pairs = []
    for jf in sorted(LABEL_DIR.glob("**/*.json")):
        with jf.open(encoding="utf-8") as f:
            d = json.load(f)
        for dlg in d.get("dataSet", {}).get("dialogs", []):
            ap = dlg.get("audioPath", "")
            wav = AUDIO_DIR / "TS_D03" / ap
            if not wav.exists():
                continue
            text_norm = normalize(dlg.get("text", ""))
            if not text_norm or len(text_norm) < 3:
                continue
            pairs.append({"wav": str(wav), "text": text_norm,
                          "speaker": dlg.get("speaker"),
                          "duration": dlg.get("duration", 0)})
            if len(pairs) >= n:
                return pairs
    return pairs


def split_train_eval(pairs, eval_ratio=0.2, seed=42):
    rng = np.random.default_rng(seed)
    indices = rng.permutation(len(pairs))
    n_eval = int(len(pairs) * eval_ratio)
    eval_idx = set(indices[:n_eval].tolist())
    train, eval_ = [], []
    for i, p in enumerate(pairs):
        (eval_ if i in eval_idx else train).append(p)
    return train, eval_


def evaluate_model(model, processor, eval_pairs, device, label=""):
    """eval_pairs에서 CER 측정."""
    model.eval()
    refs, hyps = [], []
    forced = processor.get_decoder_prompt_ids(language=LANG, task=TASK)
    for p in eval_pairs:
        audio = load_audio(Path(p["wav"]))
        inputs = processor(audio, sampling_rate=16000, return_tensors="pt")
        input_features = inputs.input_features.to(device, dtype=model.dtype)
        with torch.no_grad():
            pred_ids = model.generate(
                input_features=input_features,
                forced_decoder_ids=forced,
                max_new_tokens=200,
            )
        hyp = processor.batch_decode(pred_ids, skip_special_tokens=True)[0]
        refs.append(p["text"])
        hyps.append(normalize(hyp))
    c = cer(refs, hyps) * 100
    print(f"  [{label}] CER = {c:.2f}% (n={len(refs)})", flush=True)
    return c


def main():
    print(f"=== Whisper-small + LoRA fine-tune trend ===")
    print(f"model: {MODEL_ID}, lang: {LANG}")
    pairs = collect_pairs(100)
    print(f"수집: {len(pairs)}건")
    train_pairs, eval_pairs = split_train_eval(pairs)
    print(f"train: {len(train_pairs)}, eval: {len(eval_pairs)}")
    print()

    device = "cuda"
    processor = WhisperProcessor.from_pretrained(MODEL_ID, language=LANG, task=TASK)
    model = WhisperForConditionalGeneration.from_pretrained(MODEL_ID, torch_dtype=torch.float16).to(device)
    model.config.forced_decoder_ids = processor.get_decoder_prompt_ids(language=LANG, task=TASK)
    model.config.suppress_tokens = []

    # Phase A: baseline (zero-shot whisper-small)
    print("--- Phase A: baseline (zero-shot whisper-small) ---")
    t0 = time.time()
    baseline_cer = evaluate_model(model, processor, eval_pairs, device, "step=0 baseline")
    print(f"  elapsed: {time.time()-t0:.0f}s")
    print()

    # Phase B: LoRA fine-tune
    print("--- Phase B: LoRA fine-tune ---")
    # task_type=SEQ_2_SEQ_LM 시 PEFT가 input_ids를 forward에 강제 주입 → Whisper와 비호환.
    # Whisper는 input_features만 받으므로 task_type 미지정 (PEFT generic mode).
    lora_cfg = LoraConfig(
        r=8, lora_alpha=16, lora_dropout=0.05,
        target_modules=["q_proj", "v_proj"],  # Whisper attention LoRA
    )
    model = get_peft_model(model, lora_cfg)
    model.print_trainable_parameters()

    # Dataset 변환 (train만) — Whisper는 input_features + labels만 받음
    print(f"  preparing {len(train_pairs)} train examples ...")
    train_examples = []
    for p in train_pairs:
        audio = load_audio(Path(p["wav"]))
        feat = processor(audio, sampling_rate=16000, return_tensors="pt").input_features[0]
        labels = processor.tokenizer(p["text"], return_tensors="pt").input_ids[0]
        train_examples.append({
            "input_features": feat.numpy().tolist(),
            "labels": labels.numpy().tolist(),
        })
    train_data = Dataset.from_list(train_examples)

    # Custom data collator — Trainer가 input_ids 자동 추가하지 않도록 명시 처리
    def collate(batch):
        feats = torch.stack([torch.tensor(b["input_features"], dtype=torch.float16) for b in batch])
        labels_list = [torch.tensor(b["labels"], dtype=torch.long) for b in batch]
        labels = torch.nn.utils.rnn.pad_sequence(labels_list, batch_first=True, padding_value=-100)
        return {"input_features": feats, "labels": labels}

    # Step별 train + eval (점진적)
    cer_trend = {0: baseline_cer}
    eval_steps = [50, 150, 300]
    for target_step in eval_steps:
        print(f"\n--- Training to step {target_step} ---")
        args = Seq2SeqTrainingArguments(
            output_dir=str(OUT_DIR / f"step_{target_step}"),
            per_device_train_batch_size=2,
            gradient_accumulation_steps=4,
            learning_rate=1e-4,
            max_steps=target_step,
            warmup_steps=10,
            fp16=True,
            logging_steps=20,
            save_strategy="no",
            report_to=[],
            remove_unused_columns=True,  # Trainer가 model.forward signature 기반으로 자동 정리
            label_names=["labels"],       # PEFT wrap된 모델에서 명시적 label_names 지정
        )
        model.config.use_cache = False  # training 시 권장
        trainer = Seq2SeqTrainer(
            model=model,
            args=args,
            train_dataset=train_data,
            data_collator=collate,
        )
        t0 = time.time()
        trainer.train()
        train_time = time.time() - t0
        print(f"  train elapsed: {train_time:.0f}s")
        c = evaluate_model(model, processor, eval_pairs, device, f"step={target_step}")
        cer_trend[target_step] = c

    # Phase C: 결과 분석
    print()
    print("=" * 60)
    print(f"=== fine-tune trend (Sample(1) 통화 도메인, n_eval={len(eval_pairs)}) ===")
    print(f"  step    CER%    delta_from_baseline")
    for step, c in sorted(cer_trend.items()):
        delta = c - baseline_cer
        print(f"  {step:5d}   {c:5.2f}%  {delta:+.2f}p")
    print()
    final = cer_trend[max(cer_trend.keys())]
    print(f"baseline CER:        {baseline_cer:.2f}%")
    print(f"final step CER:      {final:.2f}%")
    print(f"개선:                {baseline_cer - final:.2f}p")
    print(f"비교 (large-v3-turbo zero-shot, 동일 데이터): 16.28%")
    print()
    print("해석:")
    if (baseline_cer - final) > 5:
        print(f"  → fine-tune 효과 강력 ({baseline_cer - final:.1f}p 개선) → BM v9.0 v8.0 회전 정당화")
    elif (baseline_cer - final) > 1:
        print(f"  → fine-tune 효과 모더리트 ({baseline_cer - final:.1f}p) → 더 큰 데이터 필요")
    else:
        print(f"  → fine-tune 효과 미미 (작은 dataset 한계 가능)")

    # JSON 저장
    out = {
        "model": MODEL_ID,
        "method": "LoRA r=8",
        "domain": "Sample(1) 저음질 통화 (#571 D03 HR/구직)",
        "n_train": len(train_pairs), "n_eval": len(eval_pairs),
        "cer_trend": cer_trend,
        "baseline_cer_pct": baseline_cer,
        "final_cer_pct": final,
        "improvement_p": baseline_cer - final,
        "comparison_whisperx_large_v3_turbo": 16.28,
    }
    out_path = OUT_DIR / "finetune_trend_result.json"
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"저장: {out_path}")


if __name__ == "__main__":
    main()
