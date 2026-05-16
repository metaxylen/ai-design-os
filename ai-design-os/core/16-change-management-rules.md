# 16 — Change Management Rules

## Purpose

Define how to analyze, execute, and document changes to project design-system files. Prevent cascade failures, unnecessary rework, and undetected inconsistencies when upstream design decisions change.

---

## When To Read

Read for all design system update tasks (Task 22). Read whenever a project file — `product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, or `page-architecture.md` — is being modified rather than created for the first time.

---

## Change Classification System

Every change to a project design-system file belongs to exactly one of these three classes. Classify before proceeding. The class determines the cascade scope.

### Additive
A new element is introduced. Nothing existing is removed, renamed, or contradicted.

**Examples:**
- New token added to `design-tokens.md`
- New component added to `component-map.md`
- New screen added to `page-architecture.md`
- New constraint added to `product-brief.md`
- Exception approval added to `visual-direction.md`

**Cascade scope:** Narrow. Only the files that can directly benefit from or reference the new element need to be checked. Existing implementation is not audited.

### Breaking
An existing element is renamed, removed, or its role/value changes in a way that existing downstream files may contradict.

**Examples:**
- Token renamed or deleted in `design-tokens.md`
- Visual direction personality or surface style changed in `visual-direction.md`
- Product type or target users changed in `product-brief.md`
- Component removed or renamed in `component-map.md`
- Layout model changed for an existing page in `page-architecture.md`

**Cascade scope:** Full. All downstream files must be audited. A migration report is required.

### Structural
A layer of the system architecture itself changes — the taxonomy, the system model, or the relationship between files.

**Examples:**
- Component layer taxonomy redefined (new layers, merged layers)
- Layout system categories restructured
- Token category naming convention changed across the full token set
- Page architecture model changed for all pages simultaneously

**Cascade scope:** Maximum. Treat as a full design system update. All project files and implementation must be audited. Migration report required. Consider whether a new project setup (Task 1) is more appropriate than an update.

---

## Impact Cascade Matrix

Use this matrix to determine what must be audited after each change. "Re-audit" means inspect for inconsistencies and update if found. "Do not touch" means this file is not affected by this change and must not be modified as part of the cascade — modifying it would expand the change scope beyond its actual impact.

---

### `product-brief.md` — Breaking Change
*(Product type, target users, primary goals, or core screens changed)*

| Action | Files |
|--------|-------|
| Re-audit | `visual-direction.md` — does the direction still serve the new product type and users? |
| Regenerate if misaligned | `visual-direction.md` — if the direction contradicts the new brief, recreate it (Task 4) |
| Cascade further if direction changes | `design-tokens.md`, `component-map.md`, `page-architecture.md` per the visual-direction breaking change cascade below |
| Do not touch | Implementation (components, pages) — do not update these until direction and tokens are confirmed aligned |
| Report required | Yes |

---

### `product-brief.md` — Additive Change
*(New screen added, new constraint added, new user segment added)*

| Action | Files |
|--------|-------|
| Re-audit | `page-architecture.md` — does the new screen need a page definition? `component-map.md` — does the new screen require new components? |
| Do not touch | `visual-direction.md`, `design-tokens.md`, existing implementation |
| Report required | No |

---

### `visual-direction.md` — Breaking Change
*(Personality attributes, surface style, color mood, typography mood, or platform feel changed)*

| Action | Files |
|--------|-------|
| Re-audit | `design-tokens.md` — do existing tokens still express the new direction? Pages and components that reference brand-specific visual decisions |
| Regenerate if misaligned | `design-tokens.md` — if tokens contradict the new direction, update them (Task 5). Token changes cascade per the design-tokens breaking change protocol |
| Do not touch | `product-brief.md` — direction serves the brief, it does not define it |
| Report required | Yes |

---

### `visual-direction.md` — Additive Change
*(New exception approval added, new reference inspiration added, new design decision rule added)*

| Action | Files |
|--------|-------|
| Re-audit | Only the scope of the new exception — if a pattern is now approved, check whether it can be applied to existing implementation where relevant |
| Do not touch | Everything else |
| Report required | No |

---

### `design-tokens.md` — Breaking Change
*(Token renamed, token deleted, token value changed significantly)*

| Action | Files |
|--------|-------|
| Re-audit | All components — check for hardcoded values and references to the old token name. All pages — same check |
| Update | Replace old token references with the new name or equivalent in all affected files. If a token is deleted with no replacement, escalate — do not remove the token until a replacement strategy is defined |
| Do not touch | `visual-direction.md` — tokens express direction, they do not define it. Changing tokens does not require changing direction |
| Report required | Yes |

**Token rename rule:** When renaming a token, search all implementation files for the old name before confirming the rename is complete. A token rename is not complete until zero references to the old name remain.

**Token deletion rule:** Do not delete a token that has any active references. Either replace it with a new token first, or deprecate it with a documented migration period.

---

### `design-tokens.md` — Additive Change
*(New token added)*

| Action | Files |
|--------|-------|
| Re-audit | `component-map.md` — note which components could use the new token and flag for optional update |
| Do not touch | Everything else. Existing implementation does not need to adopt the new token immediately |
| Report required | No |

---

### `component-map.md` — Breaking Change
*(Component removed, component renamed, component's variant set significantly changed)*

| Action | Files |
|--------|-------|
| Re-audit | All pages that use the removed or renamed component — check whether they reference it and update accordingly |
| Do not touch | `design-tokens.md`, `visual-direction.md` |
| Report required | Yes |

**Component removal rule:** Do not remove a component from `component-map.md` until all page references to it are resolved. A removal is not complete until zero page files reference the removed component.

---

### `component-map.md` — Additive Change
*(New component added)*

| Action | Files |
|--------|-------|
| Re-audit | None required |
| Do not touch | Everything else |
| Report required | No |

---

### `page-architecture.md` — Breaking Change
*(Layout model changed for an existing page, page removed, section restructured)*

| Action | Files |
|--------|-------|
| Re-audit | Implementation files for the affected page — confirm they match the new layout model |
| Do not touch | `component-map.md`, `design-tokens.md`, `visual-direction.md` |
| Report required | Yes |

---

### `page-architecture.md` — Additive Change
*(New page added)*

| Action | Files |
|--------|-------|
| Re-audit | `component-map.md` — does the new page require components not yet in the map? |
| Do not touch | Everything else |
| Report required | No |

---

## Do-Not-Cascade Rules

These rules explicitly prevent unnecessary scope expansion. Apply them to cut off cascade chains before they propagate further than the actual impact.

1. Token changes do not require `visual-direction.md` updates. Tokens express direction — they do not define it. Changing a token value does not mean the direction changed.
2. Component changes do not require `design-tokens.md` updates. Components use tokens — they do not affect token definitions.
3. `page-architecture.md` changes do not require `product-brief.md` updates. Pages serve the brief — they do not change it.
4. Additive changes do not require auditing existing implementation. New additions do not break existing references.
5. Do not expand a Breaking change cascade beyond the files listed in the matrix above. If a file is not in the cascade for the given change type, it is out of scope.

---

## Change Execution Protocol

Execute all design system changes in this order. Do not skip steps.

### Step 1 — Pre-Change Snapshot
Before modifying any file:
- Document what is currently in the file that will change
- List all files that reference the element being changed
- Confirm the change classification (Additive / Breaking / Structural)

### Step 2 — Classify
Classify the change. If uncertain between Breaking and Structural: use the Structural protocol. When in doubt, use the broader scope.

### Step 3 — Impact Analysis
Consult the cascade matrix. List:
- Files requiring audit
- Files confirmed unaffected (apply do-not-cascade rules)
- Cascade depth: shallow (1 file) / medium (2–3 files) / full (all project files)

### Step 4 — Execute The Change
Modify the target file. Do not simultaneously modify cascading files in the same edit pass — update the source first, confirm it is correct, then cascade.

### Step 5 — Cascade Audit (Breaking and Structural only)
Audit each affected file in upstream-to-downstream order:

```
product-brief.md
    ↓
visual-direction.md
    ↓
design-tokens.md
    ↓
component-map.md → page-architecture.md
    ↓
implementation (components, pages)
```

For each file: mark as Pass (no changes needed), Updated (changed to align), or Requires Follow-up (inconsistency found but not resolved in this pass).

### Step 6 — Produce Migration Report (Breaking and Structural only)
Use the format defined in this file. Save to `/docs/reviews/change-migration-report.md` (append if file exists).

### Step 7 — Quality Gate
Apply the quality gate checklist before marking the change complete.

---

## Migration Report Format

Save to: `/docs/reviews/change-migration-report.md`

```
# Change Migration Report

## Change Summary
- Changed file:
- Change type: Additive / Breaking / Structural
- Element changed: [specific field, token, component, or section]
- What changed: [before → after]
- Why it changed:

## Impact Analysis
- Cascade depth: shallow / medium / full
- Files requiring audit: [list]
- Files confirmed unaffected (per do-not-cascade rules): [list]

## Audit Results

### [File name]
Status: Pass | Updated | Requires follow-up
Changes made: [describe or "None"]
Notes:

[Repeat for each audited file]

## Inconsistencies Found
[List any design system violations, contradictions, or drift discovered during the cascade audit. If none: "None found."]

## Remaining Risks
[Unresolved issues, deferred follow-ups, items needing attention in the next pass. If none: "None."]

## Do-Not-Ship Until
[List any inconsistencies that must be resolved before the next implementation task begins. If none: "None — cascade complete."]
```

---

## Quality Gate

Before marking any design system change complete:

- [ ] Change has been classified as Additive, Breaking, or Structural.
- [ ] Impact cascade matrix was consulted.
- [ ] All files requiring audit have been audited or have a documented reason for deferral.
- [ ] Do-not-cascade rules were applied — no files were audited or modified outside the cascade scope for this change type.
- [ ] Breaking or Structural change: migration report has been produced and saved.
- [ ] Token rename: zero references to the old token name remain.
- [ ] Component removal: zero page references to the removed component remain.
- [ ] No do-not-ship conditions remain active.
- [ ] Task 22 post-implementation report has been produced per `01-agent-operating-protocol.md`.
