#!/usr/bin/env bash
# AI Design OS — Claude PreToolUse preflight hook
# Blocks implementation file writes when design-tokens.md is missing.
# Called by Claude Code via settings.json PreToolUse hook (matcher: Write|Edit).
# Input: JSON on stdin.
# Allow: exit 0 with no stdout (Claude Code default-allows).
# Deny:  exit 0 with a PreToolUse permissionDecision:deny JSON on stdout.

set -euo pipefail

INPUT=$(cat)

# Extract a JSON string field. Tries python3, then python, then a grep/sed
# fallback so a missing interpreter does NOT silently allow all writes.
get_json() {
  local py_expr="$1" key="$2" val=""
  if command -v python3 >/dev/null 2>&1; then
    val=$(printf '%s' "$INPUT" | python3 -c "import sys,json;d=json.load(sys.stdin);print($py_expr)" 2>/dev/null || true)
  fi
  if [[ -z "$val" ]] && command -v python >/dev/null 2>&1; then
    val=$(printf '%s' "$INPUT" | python -c "import sys,json;d=json.load(sys.stdin);print($py_expr)" 2>/dev/null || true)
  fi
  if [[ -z "$val" ]]; then
    val=$(printf '%s' "$INPUT" \
      | grep -oE "\"$key\"[[:space:]]*:[[:space:]]*\"[^\"]*\"" \
      | head -1 \
      | sed -E "s/.*:[[:space:]]*\"([^\"]*)\".*/\1/" || true)
  fi
  printf '%s' "$val"
}

deny() {
  printf '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":%s}}\n' "$1"
  exit 0
}

TOOL_NAME=$(get_json "d.get('tool_name','')" "tool_name")

if [[ "$TOOL_NAME" != "Write" && "$TOOL_NAME" != "Edit" ]]; then
  exit 0
fi

FILE_PATH=$(get_json "d.get('tool_input',{}).get('file_path','')" "file_path")

if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

IMPL_PATTERN='\.(tsx|ts|jsx|js|vue|svelte|css|scss)$'
if ! echo "$FILE_PATH" | grep -qE "$IMPL_PATTERN"; then
  exit 0
fi

SKIP_PATTERNS='(docs/|scripts/|\.test\.|\.spec\.|\.stories\.|__tests__/)'
if echo "$FILE_PATH" | grep -qE "$SKIP_PATTERNS"; then
  exit 0
fi

if [[ "${SKIP_DESIGN_PREFLIGHT:-0}" == "1" ]]; then
  echo "SKIP_DESIGN_PREFLIGHT is set — design preflight bypassed. Ensure design-tokens.md exists before shipping." >&2
  exit 0
fi

TOKENS_FILE="docs/design-system/design-tokens.md"
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)

if [[ ! -f "$REPO_ROOT/$TOKENS_FILE" ]]; then
  deny '"BLOCKED: docs/design-system/design-tokens.md not found. Create design-tokens.md before writing implementation files. See ai-design-os/core/06-design-token-rules.md for the required format."'
fi

exit 0
