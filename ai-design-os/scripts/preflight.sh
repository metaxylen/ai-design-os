#!/usr/bin/env bash
# AI Design OS — Claude PreToolUse preflight hook
# Blocks implementation file writes when design-tokens.md is missing.
# Called by Claude Code via settings.json PreToolUse hook.
# Input: JSON on stdin  Output: {"continue":true} or {"continue":false}

set -euo pipefail

INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_name',''))" 2>/dev/null || echo "")

if [[ "$TOOL_NAME" != "Write" && "$TOOL_NAME" != "Edit" ]]; then
  echo '{"continue":true}'
  exit 0
fi

FILE_PATH=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('file_path',''))" 2>/dev/null || echo "")

if [[ -z "$FILE_PATH" ]]; then
  echo '{"continue":true}'
  exit 0
fi

IMPL_PATTERN='\.(tsx|ts|jsx|js|vue|svelte|css|scss)$'
if ! echo "$FILE_PATH" | grep -qE "$IMPL_PATTERN"; then
  echo '{"continue":true}'
  exit 0
fi

SKIP_PATTERNS='(docs/|scripts/|\.test\.|\.spec\.|\.stories\.|__tests__/)'
if echo "$FILE_PATH" | grep -qE "$SKIP_PATTERNS"; then
  echo '{"continue":true}'
  exit 0
fi

if [[ "${SKIP_DESIGN_PREFLIGHT:-0}" == "1" ]]; then
  echo '{"continue":true,"reason":"SKIP_DESIGN_PREFLIGHT is set — preflight bypassed. Ensure design-tokens.md exists before shipping."}' >&2
  echo '{"continue":true}'
  exit 0
fi

TOKENS_FILE="docs/design-system/design-tokens.md"

# Search from repo root if available, otherwise cwd
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)

if [[ ! -f "$REPO_ROOT/$TOKENS_FILE" ]]; then
  echo '{"continue":false,"reason":"BLOCKED: docs/design-system/design-tokens.md not found. Create design-tokens.md before writing implementation files. See ai-design-os/core/06-design-token-rules.md for the required format."}'
  exit 0
fi

echo '{"continue":true}'
