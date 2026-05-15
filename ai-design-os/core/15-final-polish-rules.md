# 15 — Final Polish Rules

## Purpose

Define final production-finishing behavior. Final polish is precise, targeted refinement after functional implementation and design review. It is not redesign. It is not a place to introduce new visual direction.

---

## When To Read

- Final polish tasks (Task 15).
- After design review has been run via `14-design-review-checklist.md`.
- As the last step before marking UI complete.

---

## Required Inputs

- Completed implementation.
- Design review results from `14-design-review-checklist.md` — polish requires review first.
- Project's `visual-direction.md` — visual direction is the boundary of all polish changes.
- Project's `design-tokens.md` — all polish changes must remain within the token system.

If design review has not been run: run it first. Polish does not replace review.

---

## What Final Polish Is

Final polish is any targeted improvement that:

- Tightens spacing consistency within the established spacing scale.
- Fixes alignment issues (visual misalignment, grid deviation, baseline drift).
- Improves typography rhythm (line-height inconsistencies, weight drift within the scale).
- Refines visual hierarchy (size or weight adjustments to create clearer priority).
- Normalizes component consistency (all buttons same height, all inputs same treatment across the product).
- Improves icon consistency (same size, same visual weight, consistent optical alignment).
- Refines microcopy (clearer labels, better empty, error, and loading copy).
- Improves state clarity (state transitions more readable, state differentiation sharper).
- Improves mobile details (touch target refinements, mobile-specific spacing).
- Improves accessibility details (focus ring visibility, contrast verification, label clarity).
- Reduces visual noise (removes unnecessary decorative elements).
- Removes AI-looking decoration per `03-anti-ai-aesthetic-rules.md`.
- Checks motion restraint (reduces excessive or decorative animation).
- Checks production finish (removes placeholder text, leftover debug styles, development markers).

---

## What Final Polish Is Not

**Forbidden in a final polish pass:**

1. Redesigning page structure, information architecture, or navigation.
2. Changing the visual direction established in `visual-direction.md`.
3. Replacing or extending the token system with new values or new categories.
4. Introducing colors, fonts, radius values, or shadow treatment not already in `design-tokens.md`.
5. Introducing a new component system alongside the existing one.
6. Adding decorative gradients, blobs, or glassmorphism as "polish."
7. Hiding structural problems with visual effects.
8. Refactoring unrelated code or business logic.
9. Adding product scope not in the original implementation.
10. Continuing to polish indefinitely without stopping criteria.

---

## Polish Order

Apply in this sequence. Do not skip to a later step without completing earlier ones.

1. **Resolve do-not-ship issues from `14-design-review-checklist.md`.** Critical issues must be fixed before polish begins. Polish does not override review requirements.
2. **Fix layout and alignment issues.** Misaligned elements, broken grid adherence, inconsistent column widths.
3. **Fix spacing rhythm.** Inconsistent padding or margin between similar elements, arbitrary gaps, spacing scale violations.
4. **Fix typography hierarchy and rhythm.** Size or weight inconsistencies within the type scale, role drift between similar elements.
5. **Normalize component consistency.** Button heights, input heights, badge sizing — consistent across all instances in the product.
6. **Polish states.** State transitions cleaner, state copy more specific, state visual differentiation sharper.
7. **Polish responsive details.** Mobile spacing refinements, tap target adjustments, mobile typography fine-tuning.
8. **Polish accessibility details.** Focus ring visibility, contrast verification, label clarity, error message specificity.
9. **Polish motion.** Remove decorative motion, verify transitions serve state changes, check reduced-motion compliance.
10. **Remove AI-looking decoration.** Apply the AI smell diagnostic from `03-anti-ai-aesthetic-rules.md`. Remove anything that survived earlier passes.
11. **Final production-readiness check.** Remove placeholder text, debug markers, development-only styles, lorem ipsum content.

---

## Stopping Criteria

Final polish must stop when continuing would require any of the following:

- **New visual direction** — changes that `visual-direction.md` does not support.
- **New layout architecture** — restructuring page models rather than refining them.
- **New token system changes** — major additions or redesigns of the token system.
- **New component architecture** — introducing new component types or changing layer assignments.
- **Product scope decisions** — adding features or screens not in the original implementation.
- **Major content rewrite** — restructuring information architecture rather than refining copy.
- **Responsive layout restructuring** — changes to breakpoint behavior, navigation transformation patterns, mobile content priority order, or table/chart mobile strategy belong in a dedicated responsive review pass (Task 12), not in final polish. Stop and create a Task 12 follow-up.

When a polish item requires any of the above: **stop and escalate**. Document the escalation in the Final Polish Report as a recommendation. Do not continue polishing past the system's boundaries.

---

## Microcopy Polish Rules

1. Empty state copy must explain the specific reason and provide a specific next action. "No data" is not acceptable.
2. Error state copy must explain what went wrong in plain language and offer a recovery action. "Something went wrong" is not acceptable.
3. Button labels must describe the action specifically: "Save changes" not "Submit"; "Delete project" not "Delete".
4. Form validation text must explain what is wrong and how to fix it: "Email address is required" not "Invalid input".
5. Loading copy must describe what is loading where possible: "Loading transactions..." not "Loading...".
6. Success copy must confirm the specific action: "Password updated" not "Success".
7. Tooltip text must add information not already visible. Do not add tooltips that repeat the button label.
8. Help text must be actionable and specific: "Must be at least 8 characters" not "Invalid format."

---

## Motion Polish Rules

**Token authority:** If `design-tokens.md` defines motion duration or easing tokens for this project, those tokens are authoritative. The timing values below are fallback defaults — apply them only when project motion tokens are absent or undefined.

1. All transitions must serve state changes or navigation changes. Motion that does not communicate a change is decorative — remove it.
2. Remove or shorten decorative motion introduced during implementation.
3. Hover transitions: subtle, 100–200ms, ease-in-out. Not dramatic.
4. Layout transitions (panels sliding, items expanding): 160–240ms, decelerate curve for entering, accelerate curve for leaving.
5. Verify `prefers-reduced-motion` is respected. No essential information may be communicated only through motion.
6. Do not use slow motion (400ms+) as a "premium feel" substitute for design quality.
7. Do not use motion to mask loading latency. Transitions must not hide slow data fetching.

---

## Final Polish Report Format

After completing final polish, produce this report and save to `/docs/reviews/final-polish-report.md`:

```
# Final Polish Report

## Polish Scope
[Which pages, sections, or components were polished]

## Issues Fixed
[Numbered list: what was changed and in which file or component]

## Before / After Summary

| Category | Before | After |
|---|---|---|
| Alignment | [issues found] | [resolved or deferred] |
| Spacing | [issues found] | [resolved or deferred] |
| Typography | [issues found] | [resolved or deferred] |
| Component consistency | [issues found] | [resolved or deferred] |
| States | [issues found] | [resolved or deferred] |
| Mobile details | [issues found] | [resolved or deferred] |
| Accessibility | [issues found] | [resolved or deferred] |
| Motion | [issues found] | [resolved or deferred] |
| AI decoration | [issues found] | [resolved or deferred] |
| Production readiness | [issues found] | [resolved or deferred] |

## Remaining Risks
[What was not fixed and why]

## Intentionally Not Changed
[Items identified but excluded from this polish scope — with reason]

## Redesign Recommended
[Yes — describe what requires structural changes beyond polish scope | No]
```

---

## Quality Gate

Do not finish final polish if:

- [ ] Do-not-ship issues from `14-design-review-checklist.md` remain unresolved.
- [ ] Visible alignment issues remain that can be corrected without changing layout architecture.
- [ ] Focus states are broken or missing on any interactive element.
- [ ] Mobile layout has horizontal overflow or unreachable content.
- [ ] State copy is still generic ("No data", "Something went wrong").
- [ ] AI-looking decoration identified in step 10 remains.
- [ ] Any change made during polish altered the visual direction in `visual-direction.md` without explicit approval.
- [ ] `/docs/reviews/final-polish-report.md` has not been saved to disk at the specified path.
