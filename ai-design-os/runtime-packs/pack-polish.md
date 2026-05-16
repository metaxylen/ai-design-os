# Polish and QA Pack — AI Design OS

**For:** Tasks 15 and 16 — Final Polish and Visual QA.

Read this + `01-agent-operating-protocol.md` + `visual-direction.md` + `design-tokens.md`.

**Prerequisite:** Design review (Task 14 / `14-design-review-checklist.md`) must have been run before Task 15. Polish does not replace review.

---

> **Pack Maintenance Metadata** (human-facing — agents: continue past this block)
> - Synthesizes: `14-design-review-checklist.md`, `15-final-polish-rules.md`
> - Last verified against core files: 2026-05-15
> - Re-verify when any listed core file is modified. Run `ai-design-os/scripts/check-pack-sync.sh` from project root to detect drift.

---

## Pre-Polish Plan (Required)

```
Task: [Task 15 — Final Polish | Task 16 — Visual QA]
Design review has been run: [Yes — date/review file | No — run review first]
Files Read: [This pack + 01 + visual-direction.md + design-tokens.md]

Review findings to address:
[Critical issues from review that must be resolved in this pass]
[Major issues from review flagged for polish pass]

PROCEED — design review complete, plan ready.
  OR
BLOCKED — design review not run. Run Task 14 first.
```

---

## Task 15 — Final Polish

### What Polish IS

Precise, targeted production-finishing refinement:
- Spacing and alignment tightening
- Typography rhythm and hierarchy
- State clarity and completeness
- Motion behavior (subtle, functional)
- Accessibility detail (focus ring contrast, label visibility)
- Removal of AI-looking decoration

### What Polish Is NOT

Polish does not redesign. **Stop and escalate if polishing would require:**
- Changing visual direction (colors, personality, surface style)
- Changing layout architecture or layout model
- Changing the token system or adding a new token category
- Changing component architecture

If you encounter any of the above: document the escalation in the Final Polish Report. Do not continue past the system boundary.

### Polish Order

Apply in this sequence — do not skip ahead:

1. **Resolve Critical issues** from design review — these block all polish
2. **Alignment** — grid alignment, element-to-element alignment, text alignment consistency
3. **Spacing** — padding and margin consistency against the spacing scale; tight vs. loose areas
4. **Typography** — rhythm, size hierarchy, weight hierarchy, line-height, letter-spacing
5. **Component consistency** — variant mismatches, state visual inconsistencies, radius/shadow inconsistencies
6. **State polish** — refine hover, focus, active, loading, empty, error visual quality
7. **Responsive details** — mobile layout tightness, touch target sizing, overflow edge cases
8. **Accessibility details** — focus ring visibility, label clarity, contrast edge cases
9. **Motion** — transition timing, easing, reduced-motion fallbacks
10. **AI decoration removal** — remove any decoration that survived the review pass; no gradients, blobs, or noise without approval
11. **Production readiness check** — type check passes, build passes, no console errors

### Required Output

```
Polish Applied:
[Each change: what changed, why, which file]

Critical Issues Resolved:
[From design review — each one confirmed resolved]

Escalations:
[Any polish attempt that would have required structural change — documented and stopped]

System Boundaries Not Crossed:
[Confirm: visual direction unchanged, layout architecture unchanged, token system unchanged]

Production Readiness:
[Type check: pass/fail | Build: pass/fail | Console errors: none/list]
```

Save to `/docs/reviews/final-polish-report.md`.

---

## Task 16 — Visual QA

### What to Verify

At all five breakpoints (320px / 375px / 768px / 1024px / 1440px):

**Layout:**
- [ ] No horizontal overflow
- [ ] Navigation visible and functional
- [ ] Layout matches `page-architecture.md` definitions for each page
- [ ] Pages visually distinguishable from each other within the product

**States:**
- [ ] Loading states render correctly
- [ ] Empty states render correctly (with action)
- [ ] Error states render correctly (with recovery action)
- [ ] Hover, focus, active states visible and correct
- [ ] Disabled states visually distinct

**Typography:**
- [ ] Heading hierarchy clear at all breakpoints
- [ ] Body text readable at all breakpoints
- [ ] No text overflow or clipping

**Interactions:**
- [ ] All primary actions reachable without scrolling on key action screens
- [ ] Modals, drawers, sheets open/close correctly
- [ ] Focus management works through open/close sequences

**Accessibility quick check:**
- [ ] Tab navigation flows logically on each page
- [ ] Focus visible on all interactive elements
- [ ] Form labels visible and associated

**No visual regressions:** Polish pass did not introduce layout defects, state failures, or focus issues.

### How to Conduct the Review

Preferred: automated visual testing (Playwright, Storybook, Chromatic, Percy, or equivalent).

If automated tooling unavailable: browser developer tools responsive mode at each breakpoint. Document each screen reviewed and each breakpoint tested.

### Required Output

```
Visual QA Report:
- Screens reviewed: [list]
- Breakpoints reviewed: 320px / 375px / 768px / 1024px / 1440px
- States reviewed: [list per screen]
- Issues found:
  Critical: [list — must fix before shipping]
  Major: [list]
  Minor: [list]
- Fixes applied: [what changed]
- Remaining risks: [unresolved issues]
- Do-not-ship conditions triggered: [Yes — list | No]
```

Save to `/docs/reviews/visual-qa-report.md`.

### Do-Not-Ship Until

- All Critical failures fixed
- No horizontal overflow at any breakpoint
- Navigation visible and functional at every breakpoint
- No visual regressions from polish pass
- All reviewed states render correctly
