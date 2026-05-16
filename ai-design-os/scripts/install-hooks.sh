#!/usr/bin/env bash
# AI Design OS — Git hook installer
# Installs validate-tokens.sh as a git pre-commit hook.
# Safe to run multiple times: appends if hook already exists, never overwrites.

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null)
if [[ -z "$REPO_ROOT" ]]; then
  echo "ERROR: Not in a git repository. Run this script from inside your project." >&2
  exit 1
fi

HOOKS_DIR="$REPO_ROOT/.git/hooks"
HOOK_FILE="$HOOKS_DIR/pre-commit"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VALIDATOR="$SCRIPT_DIR/validate-tokens.sh"

if [[ ! -f "$VALIDATOR" ]]; then
  echo "ERROR: validate-tokens.sh not found at $VALIDATOR" >&2
  exit 1
fi

chmod +x "$VALIDATOR"

HOOK_BLOCK="
# --- AI Design OS: Token Validator ---
\"$VALIDATOR\" --staged
# --- End AI Design OS ---
"

if [[ -f "$HOOK_FILE" ]]; then
  if grep -q "AI Design OS: Token Validator" "$HOOK_FILE"; then
    echo "Hook already installed in $HOOK_FILE — no changes made."
    exit 0
  fi
  echo "$HOOK_BLOCK" >> "$HOOK_FILE"
  echo "Appended AI Design OS token validator to existing pre-commit hook."
else
  {
    echo "#!/usr/bin/env bash"
    echo "$HOOK_BLOCK"
  } > "$HOOK_FILE"
  chmod +x "$HOOK_FILE"
  echo "Created pre-commit hook at $HOOK_FILE"
fi

echo ""
echo "Installation complete."
echo "Staged implementation files will now be checked for hardcoded hex colors before each commit."
echo "To uninstall: remove the '# AI Design OS' block from $HOOK_FILE"
