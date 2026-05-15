# 05 — Visual Identity Rules

## Purpose

Define how agents must create, evaluate, and enforce project-specific visual direction. Prevent generic defaults, vague direction, trend-following without product context, and visual identity that could belong to any product.

---

## When To Read

- Visual direction creation tasks (Task 4).
- Design review tasks that evaluate visual identity (Task 14, Category 2).
- Any implementation task where visual direction context is required before proceeding.

---

## Required Inputs

- `product-brief.md` — **Blocker**. Visual direction cannot be created without product context.
- `reference-analysis.md` — **Major Risk** if missing. Visual direction created without references is not reference-informed; flag this explicitly in the output.

---

## Visual Direction Creation Rules

1. Do not create visual direction before reading `product-brief.md`.
2. Do not default to any visual style without product justification derived from the brief.
3. Do not use vague direction language that an agent cannot operationalize.
4. Do not copy a reference — translate principles from `04-reference-analysis-rules.md`.
5. Do not produce visual direction that could apply to any product. The direction must be specific enough that it would fail for a different product type or user.
6. Every visual direction field must have a specific, product-justified answer. Empty fields and placeholder text are not acceptable.

---

## Forbidden Generic Direction Language

The following phrases are not visual direction. If they appear in `visual-direction.md` without concrete expansion, reject the document and request revision.

| Forbidden Phrase | Required Instead |
|---|---|
| "modern" | Describe which modern qualities apply and which do not — and why for this product |
| "clean" | Describe what constitutes clean for this product's density and user type |
| "beautiful" | Describe the specific visual elements that create the intended aesthetic and why |
| "premium" | Describe the specific surface, spacing, and typography choices that create premium feel |
| "minimal" | Describe which elements are removed and what remains, and why that serves users |
| "sleek" | Describe the form language: radius, shadow, border, and spacing decisions |
| "professional" | Describe what professional means for this user type: density, color range, type scale |
| "elegant" | Describe the specific typographic, spatial, and color decisions that create elegance |
| "intuitive" | Not a visual direction statement — remove entirely |
| "user-friendly" | Not a visual direction statement — remove entirely |

**Example of invalid direction:**
> Make it modern and clean.

**Example of valid direction:**
> Use a calm, dense productivity-tool visual direction with restrained flat surfaces, compact spacing, strong metadata treatment, minimal shadow usage, and one purposeful accent color reserved exclusively for primary actions. The product must feel technical and trustworthy — never decorative, never generic-SaaS.

---

## Required Visual Direction Fields

The project's `visual-direction.md` must define all 14 fields below. No field may be vague, generic, or empty.

### 1. Design Direction Paragraph
One to three sentences describing the intended visual direction for this specific product. Must be product-specific enough that an agent could not freely invent a different style while technically complying.

### 2. Product Personality Attributes
Five to eight specific attributes from the personality vocabulary below. For each attribute: include a brief note on what it means in this product's specific context — not just the word.

**Personality vocabulary:**
precise, calm, premium, technical, trustworthy, editorial, cinematic, playful, fast, structured, warm, minimal, serious, expressive, dense, spacious, bold, restrained, focused, investigative, transactional, conversational, authoritative, systematic, energetic, quiet, confident

### 3. Anti-Personality — What The UI Must Not Feel Like
An explicit list of qualities the UI must avoid. This is as important as the positive attributes. Anti-personality prevents drift toward generic templates during implementation.

Examples: childish, generic, over-decorated, AI-generated, template-like, cheap, random, noisy, lifeless, clone-like, marketing-heavy in an app context, entertainment-heavy in a productivity context.

### 4. Visual Keywords
Three to six specific visual keywords that operationalize the personality attributes. Go beyond single adjectives — use compound phrases.

Examples: command center, editorial hierarchy, refined surfaces, quiet contrast, dense but readable, cinematic cards, structured workspace, warm minimalism, technical precision, restrained color field, controlled surface system.

### 5. Visual Density
One of: **airy and spacious** / **balanced** / **compact** / **dense but readable**

Accompanied by: why this density fits the product's users and primary use cases.

### 6. Surface Style
Define each of the following:
- Background style (flat, tonal, dark, light, gradient — gradient requires Exception Approval per `03-anti-ai-aesthetic-rules.md`)
- Panel and card style (border-separated, tonal-surface, shadow-elevated, transparent)
- Nested surface depth (how many surface levels exist and how they are distinguished)
- Border style (absent, subtle, default, strong)
- Shadow usage (structural elevation only / decorative / minimal / absent)

### 7. Color Mood
Define each of the following:
- Color range (monochromatic, duotone, restrained palette, expressive palette)
- Role of accent color (single accent / dual accent / no accent)
- Status color approach (functional-only / semantic-expressive / integrated into brand palette)
- Gradient ruling (approved with constraints per Exception Approval Format / forbidden)
- Dark mode intent (required from launch / planned later / light-only)

### 8. Typography Mood
Define each of the following:
- Type personality (precise and compact / editorial and spacious / utilitarian / expressive)
- Weight range (restrained / moderate / expressive)
- Hierarchy approach (size-led / weight-led / spacing-led — must not be color-led alone)
- Numeric/data treatment (if product has KPIs, stats, or metrics: how should they appear visually relative to their labels?)

### 9. Motion Feel
Define each of the following:
- Motion role (functional-only / expressive / minimal / absent)
- Transition speed (fast / standard / deliberate)
- Transition style (fade / slide / scale / instant / mixed)
- Reduced-motion requirement (required / recommended / not planned)

### 10. Platform Feel
Identify the primary platform context that governs visual decisions:
- Web app (SaaS, productivity, content, e-commerce)
- Mobile app (consumer, utility, enterprise)
- Desktop app (productivity, creative, developer)
- Landing / marketing page
- Admin panel / internal tool
- Data-heavy product
- Editor / builder interface
- Combination (specify which governs primary decisions)

Platform feel informs density, navigation patterns, interaction speed, and default component vocabulary.

### 11. Reference Inspirations
For each approved reference from `reference-analysis.md`:
- Name of the reference
- Which specific quality or principle is drawn from it
- What must not be copied from this reference

### 12. Anti-References
An explicit list of products, aesthetics, or visual styles this product must not resemble. Prevents drift toward generic templates while the agent searches for visual patterns.

Examples: "must not resemble generic AI SaaS tools", "must not look like [specific reference product]", "must not use any pattern from the generic dashboard composition defined in `03-anti-ai-aesthetic-rules.md` pattern 24."

### 13. Design Decision Rules
Five to eight numbered rules specific to this product that guide agents when a visual decision is ambiguous. These are project-specific extensions of the universal principles in `02-design-principles.md`. They must be actionable and testable — not advisory.

Example:
> 1. When uncertain between more or less visual decoration, always choose less.
> 2. When a new component type is introduced, default to border-separated surfaces, not shadow-elevated.
> 3. Accent color is reserved for the single primary action per screen.

### 14. Exception Approvals
Document any pattern that is normally forbidden by `03-anti-ai-aesthetic-rules.md` but is approved for this specific product. Each exception must follow the Exception Approval Format from `03-anti-ai-aesthetic-rules.md` — five required fields: pattern name, product reason, usage scope, constraints, anti-abuse rule.

If no exceptions are approved: write explicitly — "None — all forbidden patterns in `03-anti-ai-aesthetic-rules.md` apply without exception."

---

## Product Context Starting Points

These are directional starting points for common product types — not defaults to copy. Every product must define its own specific direction.

| Product Context | Common Direction Qualities |
|---|---|
| SaaS dashboard / tool | Dense or balanced, structured, trustworthy, calm, restrained palette, strong navigation |
| Developer tool | Technical, precise, fast, keyboard-first, monospace prominent, dark mode likely |
| Finance product | Trustworthy, calm, conservative, clear numbers, controlled status colors, low decoration |
| Entertainment / media | Immersive, visual, cinematic, image-forward, expressive contrast, content cards |
| Productivity app | Fast, focused, minimal noise, strong task hierarchy, immediate state feedback |
| Mobile consumer app | Warm or expressive, spacious, thumb-optimized, brand personality forward |
| Desktop productivity | Dense, keyboard-first, multi-pane, persistent context, high information density |
| Landing page | Visual identity-forward, conversion-clear, hierarchy-driven, responsive-first |
| Admin panel / internal tool | Functional, dense, clear labels, no decoration, strong data hierarchy |
| Data-heavy product | Scannable, structured, numeric hierarchy, strong filtering, full data states |
| Editor / builder | Tool-forward, workspace-centric, persistent controls, minimal decoration in workspace |

**Do not use these phrases verbatim in `visual-direction.md`.** Each quality listed above requires product-specific expansion before it is usable. Writing "Functional, dense, clear labels" without explaining what functional means for this product's users, what dense looks like at this product's information density level, and what labels must communicate for this product's tasks is a violation of the Forbidden Generic Direction Language rules in this file. These starting points exist to prompt thinking — not to substitute for it.

---

## Relationship To Other Files

- `04-reference-analysis-rules.md` feeds this file: reference principles are inputs to visual direction.
- `03-anti-ai-aesthetic-rules.md` defines which patterns require Exception Approval in `visual-direction.md`.
- `06-design-token-rules.md` translates visual direction into semantic token values.
- `07-typography-rules.md` translates typography mood into type role hierarchy decisions.
- `08-layout-system-rules.md` connects platform feel and density to layout model selection.

---

## Output Format

The project's `visual-direction.md` must use this structure:

```
# Visual Direction

## Design Direction
[Required — one to three sentences]

## Personality Attributes
[Required — five to eight attributes, each with product-specific context note]

## Anti-Personality
[Required — what the UI must not feel like]

## Visual Keywords
[Required — three to six compound phrases]

## Visual Density
[Required — one of: airy / balanced / compact / dense but readable. With justification.]

## Surface Style
[Required — background, panel, card, border, shadow treatment. Each defined.]

## Color Mood
[Required — palette range, accent role, status approach, gradient ruling, dark mode intent]

## Typography Mood
[Required — personality, weight range, hierarchy approach, numeric treatment if applicable]

## Motion Feel
[Required — role, speed, style, reduced-motion requirement]

## Platform Feel
[Required — primary platform context governing visual decisions]

## Reference Inspirations
[Required — each reference: name, what is taken, what must not be copied]

## Anti-References
[Required — explicit list of aesthetics to avoid]

## Design Decision Rules
[Required — five to eight numbered, actionable rules]

## Exception Approvals
[Required — follow Exception Approval Format from 03, or state: "None — all forbidden patterns apply without exception."]
```

---

## Quality Gate

Before marking visual direction creation complete:

- [ ] All 14 required fields are present and specific.
- [ ] No forbidden generic language (modern, clean, beautiful, premium, minimal, sleek, professional, elegant) appears without concrete expansion.
- [ ] The direction is product-specific — it would fail if applied to a different product.
- [ ] Anti-personality attributes are defined.
- [ ] Anti-references are defined.
- [ ] Reference inspirations name what is taken and what is off-limits.
- [ ] Exception approvals follow the Exception Approval Format from `03-anti-ai-aesthetic-rules.md`, or the field is explicitly set to None.
- [ ] `visual-direction.md` has been saved to `/docs/design-system/visual-direction.md`.
- [ ] The completed `visual-direction.md` has been checked against the AI Smell Diagnostic in `03-anti-ai-aesthetic-rules.md` — it does not trend toward generic SaaS direction, template-like personality attributes, or any quality listed in the Anti-Personality field of the document itself.
