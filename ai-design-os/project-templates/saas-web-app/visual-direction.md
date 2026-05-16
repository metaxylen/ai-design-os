# Visual Direction — [YOUR PROJECT: Product Name]

**Template:** saas-web-app  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use  
**Requires:** product-brief.md must be filled in first

All 14 required fields must be completed. Generic answers that could apply to any product will be rejected — every answer must be specific to this product and these users.

---

## Design Direction

[YOUR PROJECT: One paragraph that defines the visual character of this product. This is the governing statement — everything else is derived from it. Must be product-specific. Example: "A dense, information-forward tool for people who think in numbers and deadlines. No decoration, no gradients, no marketing energy. The visual system communicates precision and control. Spacing is tight. Typography is functional. Color is used only to communicate status — never for beauty."]

## Personality Attributes

[YOUR PROJECT: 3–5 adjectives that describe the intended personality. Each must be justified by the product context. Example:
- **Precise** — users are tracking financial data; imprecision undermines trust
- **Direct** — no onboarding fluff; users know what they're doing
- **Reliable** — visual consistency builds confidence in data accuracy
- **Focused** — no distractions from the primary task of budget tracking]

## Anti-Personality

[YOUR PROJECT: What this product must NOT feel like. Be specific. Example:
- Not playful — this is a financial tool for professionals, not a consumer app
- Not premium/luxury — construction PMs distrust products that look expensive
- Not friendly/warm — the product is a tool, not a companion
- Not overwhelming — information density must remain readable, not chaotic]

## Visual Keywords

[YOUR PROJECT: 5–8 specific words that a designer could use to make visual decisions. Must be actionable. Example: "functional, structured, data-forward, muted palette, sharp edges, tight spacing, monospace accents, status-driven color"]

## Visual Density

[YOUR PROJECT: Compact / Balanced / Airy. Define the density rationale. Example: "Compact. Users need maximum information per viewport. Dashboards and list views should show 15–25 rows without scrolling on a standard 1440px desktop. Spacing is tight but never cramped — every element needs breathing room to be readable."]

## Surface Style

[YOUR PROJECT: How surfaces, cards, and panels are treated. Example: "Flat surfaces with border separation — no shadows on standard content areas. Shadows reserved for dropdowns, modals, and tooltips only. Light neutral background with slightly elevated cards using a 1px border. No glassmorphism. No gradient backgrounds."]

## Color Mood

[YOUR PROJECT: What the color system should feel like. Do not specify hex values — that is for design-tokens.md. Example: "Predominantly neutral — near-white background, dark text, minimal brand color. Brand color appears only on primary actions and key navigation elements. Status colors (red/amber/green) are the most expressive colors in the system and must remain reserved for status only."]

## Typography Mood

[YOUR PROJECT: How type should feel. Example: "Clean, readable, functional. A geometric sans-serif for UI (headers, labels, nav). A humanist sans-serif for body text (descriptions, help text, longer reads). Monospace for numeric data and ID values. No display fonts. No decorative type."]

## Motion Feel

[YOUR PROJECT: How transitions and animations should behave. Example: "Subtle and fast. Hover transitions 100–150ms. Skeleton loading fades 200ms. No entrance animations on data load — content should appear ready. Reduce all motion when prefers-reduced-motion is active — instant transitions only."]

## Platform Feel

[YOUR PROJECT: Where does this product live in the platform ecosystem? Example: "Desktop-first SaaS. Behaves like a professional desktop application running in the browser — not a mobile-first responsive website. Keyboard navigation is expected. Dense layouts are appropriate. No mobile-app-style bottom navigation or card stacks."]

## Reference Inspirations

[YOUR PROJECT: 2–4 products whose specific qualities to draw from. For each: name what quality, not what to copy. Example:
- **Linear.app** — information density, keyboard navigation speed, quiet visual system
- **Notion (workspace view)** — content-forward layout, functional typography
- **Figma (inspect panel)** — compact side panels, precise numeric display
Do NOT copy colors, layouts, or specific visual patterns. Extract principles only.]

## Anti-References

[YOUR PROJECT: 2–3 products whose aesthetic to explicitly avoid. Example:
- **Notion (marketing site)** — too illustration-heavy, too friendly for this context
- **Monday.com** — too colorful, too consumer, too playful for financial tracking
- **Generic dashboard templates** — gradient cards, identical metric tiles, marketing hero sections]

## Design Decision Rules

[YOUR PROJECT: 3–5 rules that constrain visual decisions throughout implementation. Example:
- Status colors (red, amber, green) are never used for non-status purposes
- A new component must reuse existing tokens — no one-off color or spacing values
- If in doubt between two layout options: choose the one that shows more useful data per viewport
- Shadows appear only on overlays, dropdowns, modals, and tooltips — never on content cards]

## Exception Approvals

[YOUR PROJECT: List any exceptions to the hard-forbidden patterns in `03-anti-ai-aesthetic-rules.md`. Each exception requires all 5 fields. Leave blank or remove section if no exceptions are approved.

Format:
**Pattern name:** [exact pattern name from 03-anti-ai-aesthetic-rules.md]
**Product reason:** [specific reason this product needs it]
**Usage scope:** [exactly where it is allowed and where it remains forbidden]
**Constraints:** [visual limits on the pattern]
**Anti-abuse rule:** [what would constitute overuse or misuse]]
