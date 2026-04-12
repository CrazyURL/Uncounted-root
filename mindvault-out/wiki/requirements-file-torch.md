# Requirements File & Torch
Cohesion: 0.43 | Nodes: 8

## Key Nodes
- **Requirements File** (scripts/requirements.txt) -- 6 connections
  - -> includes -> [[torch]]
  - -> includes -> [[transformers]]
  - -> includes -> [[onnx]]
  - -> includes -> [[numpy]]
  - -> includes -> [[onnx-runtime]]
  - -> includes -> [[hugging-face-hub]]
- **Torch** (export-moonshine-onnx.py) -- 5 connections
  - -> requires -> [[cuda-environment]]
  - <- requires <- [[transformers]]
  - <- requires <- [[onnx]]
  - <- requires <- [[numpy]]
  - <- includes <- [[requirements-file]]
- **ONNX** (export-moonshine-onnx.py) -- 3 connections
  - -> requires -> [[torch]]
  - <- requires <- [[onnx-runtime]]
  - <- includes <- [[requirements-file]]
- **Transformers** (export-moonshine-onnx.py) -- 3 connections
  - -> requires -> [[torch]]
  - <- related_to <- [[hugging-face-hub]]
  - <- includes <- [[requirements-file]]
- **Hugging Face Hub** (export-moonshine-onnx.py) -- 2 connections
  - -> related_to -> [[transformers]]
  - <- includes <- [[requirements-file]]
- **NumPy** (export-moonshine-onnx.py) -- 2 connections
  - -> requires -> [[torch]]
  - <- includes <- [[requirements-file]]
- **ONNX Runtime** (export-moonshine-onnx.py) -- 2 connections
  - -> requires -> [[onnx]]
  - <- includes <- [[requirements-file]]
- **CUDA Environment** (export-moonshine-onnx.py) -- 1 connections
  - <- requires <- [[torch]]

## Internal Relationships
- Hugging Face Hub -> related_to -> Transformers [EXTRACTED]
- NumPy -> requires -> Torch [EXTRACTED]
- ONNX -> requires -> Torch [EXTRACTED]
- ONNX Runtime -> requires -> ONNX [EXTRACTED]
- Requirements File -> includes -> Torch [EXTRACTED]
- Requirements File -> includes -> Transformers [EXTRACTED]
- Requirements File -> includes -> ONNX [EXTRACTED]
- Requirements File -> includes -> NumPy [EXTRACTED]
- Requirements File -> includes -> ONNX Runtime [EXTRACTED]
- Requirements File -> includes -> Hugging Face Hub [EXTRACTED]
- Torch -> requires -> CUDA Environment [EXTRACTED]
- Transformers -> requires -> Torch [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Requirements File, Torch, ONNX를 중심으로 includes 관계로 연결되어 있다. 주요 소스 파일은 export-moonshine-onnx.py, requirements.txt이다.
