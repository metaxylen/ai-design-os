#!/usr/bin/env bash
# AI Design OS — Pack Sync Checker
#
# Compares modification timestamps of runtime packs against the core files they synthesize.
# If any core file is newer than its corresponding pack, the pack may be stale.
#
# Usage (from project root): ./ai-design-os/scripts/check-pack-sync.sh
# Usage (from ai-design-os/): ./scripts/check-pack-sync.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AI_DESIGN_OS="$(cd "$SCRIPT_DIR/.." && pwd)"

CORE="$AI_DESIGN_OS/core"
PACKS="$AI_DESIGN_OS/runtime-packs"

STALE_COUNT=0
MISSING_COUNT=0

check_pack() {
  local pack="$1"
  local pack_path="$PACKS/$pack"
  shift
  local stale_sources=()

  if [[ ! -f "$pack_path" ]]; then
    echo "MISSING  $pack (pack file not found)"
    ((MISSING_COUNT++)) || true
    return
  fi

  for core_file in "$@"; do
    local core_path="$CORE/$core_file"
    if [[ ! -f "$core_path" ]]; then
      echo "WARNING  $pack ← $core_file not found (core file missing or renamed)"
      continue
    fi
    if [[ "$core_path" -nt "$pack_path" ]]; then
      stale_sources+=("$core_file")
    fi
  done

  if [[ ${#stale_sources[@]} -gt 0 ]]; then
    echo "STALE    $pack"
    for src in "${stale_sources[@]}"; do
      echo "         ← $src is newer"
    done
    ((STALE_COUNT++)) || true
  else
    echo "OK       $pack"
  fi
}

echo ""
echo "AI Design OS — Pack Sync Check"
echo "================================"
echo ""

check_pack "00-mini-router.md" \
  "00-skill-router.md"

check_pack "pack-implementation.md" \
  "02-design-principles.md" \
  "03-anti-ai-aesthetic-rules.md" \
  "06-design-token-rules.md" \
  "08-layout-system-rules.md" \
  "09-component-architecture-rules.md" \
  "10-interaction-state-rules.md" \
  "11-responsive-design-rules.md" \
  "12-accessibility-rules.md" \
  "13-frontend-implementation-rules.md"

check_pack "pack-review.md" \
  "03-anti-ai-aesthetic-rules.md" \
  "10-interaction-state-rules.md" \
  "11-responsive-design-rules.md" \
  "12-accessibility-rules.md" \
  "14-design-review-checklist.md"

check_pack "pack-polish.md" \
  "14-design-review-checklist.md" \
  "15-final-polish-rules.md"

check_pack "pack-specialized.md" \
  "03-anti-ai-aesthetic-rules.md" \
  "08-layout-system-rules.md" \
  "09-component-architecture-rules.md"

echo ""
echo "================================"

if [[ $MISSING_COUNT -gt 0 || $STALE_COUNT -gt 0 ]]; then
  echo ""
  if [[ $STALE_COUNT -gt 0 ]]; then
    echo "RESULT: $STALE_COUNT pack(s) are potentially stale."
    echo "        Re-distill the STALE packs from their source core files."
    echo "        Update the 'Last verified' date in the pack's maintenance metadata after re-distilling."
  fi
  if [[ $MISSING_COUNT -gt 0 ]]; then
    echo "RESULT: $MISSING_COUNT pack file(s) are missing."
  fi
  echo ""
  exit 1
else
  echo ""
  echo "RESULT: All packs are up-to-date with their source core files."
  echo ""
  exit 0
fi
