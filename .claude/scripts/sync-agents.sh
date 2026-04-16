#!/usr/bin/env bash
# sync-agents.sh — Claude agents → Gemini + Codex 자동 변환
# 위치: .claude/scripts/sync-agents.sh
# 사용: .claude/scripts/sync-agents.sh [claude-agents-dir]
#
# Claude Code의 에이전트 .md 파일을 읽어서:
#   .gemini/agents/*.md  (Gemini CLI frontmatter)
#   .codex/agents/*.toml (Codex CLI TOML)
# 로 자동 변환한다.

set -euo pipefail

# --- 설정 ---
CLAUDE_AGENTS_DIR="${1:-$HOME/.claude/agents}"
PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
GEMINI_AGENTS_DIR="$PROJECT_ROOT/.gemini/agents"
CODEX_AGENTS_DIR="$PROJECT_ROOT/.codex/agents"

# --- 매핑 테이블 ---
map_model_gemini() {
  case "$1" in
    opus)   echo "gemini-2.5-pro" ;;
    sonnet) echo "gemini-2.5-flash" ;;
    haiku)  echo "gemini-2.5-flash" ;;
    *)      echo "gemini-2.5-pro" ;;
  esac
}

map_model_codex_reasoning() {
  case "$1" in
    opus)   echo "high" ;;
    sonnet) echo "medium" ;;
    haiku)  echo "low" ;;
    *)      echo "medium" ;;
  esac
}

map_tool_gemini() {
  case "$1" in
    Read)   echo "read_file" ;;
    Write)  echo "write_file" ;;
    Edit)   echo "replace" ;;
    Bash)   echo "run_shell_command" ;;
    Grep)   echo "grep_search" ;;
    Glob)   echo "glob" ;;
    *)      echo "$1" ;;
  esac
}

codex_sandbox_mode() {
  local tools="$1"
  if echo "$tools" | grep -qE 'Write|Edit'; then
    echo "workspace-write"
  else
    echo "read-only"
  fi
}

# --- 디렉토리 준비 ---
mkdir -p "$GEMINI_AGENTS_DIR" "$CODEX_AGENTS_DIR"

# --- 기존 자동 생성 파일 정리 ---
for f in "$GEMINI_AGENTS_DIR"/*.md; do
  [ -f "$f" ] && grep -q "^# auto-synced from:" "$f" && rm "$f"
done
for f in "$CODEX_AGENTS_DIR"/*.toml; do
  [ -f "$f" ] && head -1 "$f" | grep -q "^# Auto-synced" && rm "$f"
done

# --- 변환 ---
count=0
for agent_file in "$CLAUDE_AGENTS_DIR"/*.md; do
  [ -f "$agent_file" ] || continue

  filename="$(basename "$agent_file")"
  agent_name=""
  agent_desc=""
  agent_model=""
  agent_tools_raw=""
  in_frontmatter=0
  frontmatter_started=0
  prompt_body=""
  reading_prompt=0

  while IFS= read -r line; do
    # frontmatter 파싱
    if [ "$frontmatter_started" -eq 0 ] && echo "$line" | grep -q "^---$"; then
      frontmatter_started=1
      in_frontmatter=1
      continue
    fi
    if [ "$in_frontmatter" -eq 1 ] && echo "$line" | grep -q "^---$"; then
      in_frontmatter=0
      reading_prompt=1
      continue
    fi

    if [ "$in_frontmatter" -eq 1 ]; then
      case "$line" in
        name:*)   agent_name="$(echo "$line" | sed 's/^name: *//')" ;;
        description:*) agent_desc="$(echo "$line" | sed 's/^description: *//')" ;;
        model:*)  agent_model="$(echo "$line" | sed 's/^model: *//')" ;;
        tools:*)  agent_tools_raw="$(echo "$line" | sed 's/^tools: *//')" ;;
      esac
    fi

    if [ "$reading_prompt" -eq 1 ]; then
      prompt_body="$prompt_body
$line"
    fi
  done < "$agent_file"

  [ -z "$agent_name" ] && continue

  # 도구 목록 파싱 (["Read", "Grep", "Glob"] → 배열)
  tools_clean="$(echo "$agent_tools_raw" | tr -d '[]"' | tr ',' '\n' | sed 's/^ *//' | sed 's/ *$//')"

  # --- Gemini .md 생성 ---
  gemini_model="$(map_model_gemini "$agent_model")"
  gemini_tools=""
  while IFS= read -r tool; do
    [ -z "$tool" ] && continue
    mapped="$(map_tool_gemini "$tool")"
    if [ -z "$gemini_tools" ]; then
      gemini_tools="$mapped"
    else
      gemini_tools="$gemini_tools, $mapped"
    fi
  done <<< "$tools_clean"

  cat > "$GEMINI_AGENTS_DIR/$filename" << GEMINI_EOF
---
name: $agent_name
description: $agent_desc
model: $gemini_model
tools: [$gemini_tools]
# auto-synced from: $filename
---
$prompt_body
GEMINI_EOF

  # --- Codex .toml 생성 ---
  toml_name="${filename%.md}.toml"
  codex_reasoning="$(map_model_codex_reasoning "$agent_model")"
  codex_sandbox="$(codex_sandbox_mode "$agent_tools_raw")"

  # 프롬프트 본문에서 따옴표 이스케이프
  escaped_prompt="$(echo "$prompt_body" | sed 's/\\/\\\\/g')"

  cat > "$CODEX_AGENTS_DIR/$toml_name" << CODEX_EOF
# Auto-synced from Claude agent: $filename
model = "gpt-5.4"
model_reasoning_effort = "$codex_reasoning"
sandbox_mode = "$codex_sandbox"

developer_instructions = """
$escaped_prompt
"""
CODEX_EOF

  count=$((count + 1))
done

echo "sync-agents: $count agents synced"
echo "  Gemini: $GEMINI_AGENTS_DIR/"
echo "  Codex:  $CODEX_AGENTS_DIR/"
