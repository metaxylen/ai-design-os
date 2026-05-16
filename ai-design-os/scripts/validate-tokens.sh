#!/usr/bin/env bash
# AI Design OS — Hardcoded token validator
# Scans staged implementation files for raw hex color values.
# Used as git pre-commit hook and can be run manually.
# Exit 0 = clean. Exit 1 = violations found.

set -euo pipefail

IMPL_PATTERN='\.(tsx|ts|jsx|js|vue|svelte|css|scss)$'
SKIP_PATTERN='(\.test\.|\.spec\.|\.stories\.|__tests__/|docs/|scripts/|node_modules/)'
HEX_PATTERN='#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b'

if [[ "${1:-}" == "--staged" ]] || git rev-parse --git-dir > /dev/null 2>&1; then
  STAGED_FILES=$(git diff --cached --name-only 2>/dev/null || true)
else
  echo "ERROR: Not in a git repository and no files provided." >&2
  exit 1
fi

if [[ -z "$STAGED_FILES" ]]; then
  exit 0
fi

VIOLATIONS=()

while IFS= read -r FILE; do
  [[ -z "$FILE" ]] && continue

  if ! echo "$FILE" | grep -qE "$IMPL_PATTERN"; then
    continue
  fi

  if echo "$FILE" | grep -qE "$SKIP_PATTERN"; then
    continue
  fi

  if [[ ! -f "$FILE" ]]; then
    continue
  fi

  LNUM=0
  while IFS= read -r LINE; do
    LNUM=$((LNUM + 1))
    TRIMMED="${LINE#"${LINE%%[![:space:]]*}"}"

    # Skip full comment lines
    if [[ "$TRIMMED" == //* || "$TRIMMED" == "/*"* || "$TRIMMED" == "*"* || "$TRIMMED" == "<!--"* ]]; then
      continue
    fi

    # Strip single-line trailing comments before scanning so hex inside
    # a `// ...`, `/* ... */`, or `<!-- ... -->` comment is not flagged.
    # Multi-line block comments are a known limitation of this safety net.
    CODE=$(echo "$LINE" | sed -E 's@//.*@@; s@/\*.*\*/@@; s@<!--.*-->@@')

    if echo "$CODE" | grep -qE "$HEX_PATTERN"; then
      MATCHES=$(echo "$CODE" | grep -oE "$HEX_PATTERN" | tr '\n' ' ')
      VIOLATIONS+=("  $FILE:$LNUM — $MATCHES")
    fi
  done < "$FILE"

done <<< "$STAGED_FILES"

if [[ ${#VIOLATIONS[@]} -gt 0 ]]; then
  echo ""
  echo "AI Design OS — Token Violation Detected"
  echo "────────────────────────────────────────"
  echo "Hardcoded hex colors found in staged files."
  echo "Replace all raw hex values with semantic design tokens."
  echo "See: docs/design-system/design-tokens.md"
  echo ""
  for V in "${VIOLATIONS[@]}"; do
    echo "$V"
  done
  echo ""
  echo "Fix violations and re-stage before committing."
  echo "To bypass (emergency only): git commit --no-verify"
  echo ""
  exit 1
fi

exit 0
