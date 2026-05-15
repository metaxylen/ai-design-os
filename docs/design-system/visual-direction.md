# Visual Direction

## Design Direction
AI Video Factory Control Room uses a dense, controlled production-console direction: a dark-first operational canvas, crisp panel boundaries, compact typography, and visible queue/status relationships. It should feel like a serious cinematic operations dashboard for managing AI video throughput, not a decorative AI product demo. Visual energy comes from live production state, status contrast, preview areas, timelines, and command surfaces rather than gradients, blobs, or ornamental sci-fi effects.

## Personality Attributes
- **Precise:** Values, statuses, timestamps, costs, provider names, retry counts, and moderation labels must be readable and aligned.
- **Cinematic:** The interface can borrow dark-room focus, preview emphasis, and restrained contrast from post-production environments without becoming theatrical or neon.
- **Structured:** Every page must expose clear relationships between queue state, production risk, and available action.
- **Dense:** The operator needs many signals visible at once; density must remain readable through grouping, typography roles, and spacing discipline.
- **Authoritative:** Alerts, cost guardrails, moderation warnings, and provider incidents should feel decisive and trustworthy.
- **Focused:** Decorative noise is removed so failed jobs, throughput, schedule risk, and review decisions command attention.
- **Systematic:** Components, tokens, statuses, and layouts must behave consistently across batch, provider, publishing, cost, and moderation domains.
- **Fast:** Interaction feedback must be immediate, keyboard-friendly, and optimized for rapid operational triage.

## Anti-Personality
The UI must not feel playful, toy-like, generic, template-like, AI-generated, marketing-heavy, crypto-adjacent, neon cyberpunk, over-decorated, randomly futuristic, soft consumer-app-like, empty, decorative, vague, static-only, desktop-only, or built around fake metrics. It must not resemble a purple-blue AI SaaS landing page, a glow-card dashboard, a fake glassmorphism playground, a huge empty hero page, an identical rounded-card dashboard clone, or a Dribbble concept that sacrifices operational usability.

## Visual Keywords
- Cinematic production console
- Dense but readable command surface
- Queue-first operational hierarchy
- Controlled status language
- Render-inspector workspace
- Restrained dark-room contrast

## Visual Density
**Dense but readable.** The primary user makes fast decisions across batches, provider health, cost, moderation, schedule, and recovery. The interface should expose multiple related signals without forcing deep navigation, but each dense region must use clear grouping, table structure, visible labels, and spacing rhythm.

## Surface Style
- **Background style:** Dark-first tonal canvas. No background gradients, radial glows, or decorative light fields.
- **Panel and card style:** Border-separated and tonal-surface panels. Cards are used only when grouping or preview context helps; tables/lists are preferred for scan-heavy operational data.
- **Nested surface depth:** Three levels: canvas, panel, nested row/slot/preview surface. Depth is distinguished through tonal difference, border strength, and state treatment.
- **Border style:** Subtle borders for separation, default borders for controls/panels, strong borders for focus, selected, warning, failed, and critical states.
- **Shadow usage:** Minimal structural elevation only for overlays, command palettes, popovers, drawers, sheets, and dialogs.

## Color Mood
- **Color range:** Restrained neutral base with semantic operational colors.
- **Role of accent color:** Single purposeful action accent reserved for primary actions, selected command state, and critical workflow emphasis.
- **Status color approach:** Functional semantic status colors mapped to queue, provider, moderation, publishing, and cost conditions. Status must include text/icon, not color alone.
- **Gradient ruling:** Forbidden. No gradients are approved for Part 1. Any future gradient requires explicit Exception Approval per `03-anti-ai-aesthetic-rules.md`.
- **Dark mode intent:** Required from launch. Light theme is documented for accessibility and environment flexibility but dark mode governs the primary identity.

## Typography Mood
- **Type personality:** Precise and compact, with monospace support for logs, IDs, model names, timestamps, cost values, and technical metadata.
- **Weight range:** Restrained to moderate. Use weight to clarify hierarchy, not to create decoration.
- **Hierarchy approach:** Weight-led and spacing-led for dense areas, size-led for page headers and major section division. Never color-led alone.
- **Numeric/data treatment:** Numeric values, KPIs, costs, queue counts, percentages, and render times must be visually stronger than their labels and use tabular-number alignment where available.

## Motion Feel
- **Motion role:** Functional-only.
- **Transition speed:** Fast for micro-interactions; standard for overlays and panel changes.
- **Transition style:** Fade for status changes, slide for drawers/sheets, instant or near-instant for table selection and command execution.
- **Reduced-motion requirement:** Required. Motion must never be the only way a state change is communicated.

## Platform Feel
Combination governed by: **data-heavy web app + editor/builder interface + mobile operator screen**. Desktop decisions favor persistent navigation, dense tables, split panes, inspector panels, and keyboard-first workflows. Mobile decisions favor monitoring, urgent alerts, approve/retry actions, labeled bottom navigation, and bottom sheets.

## Reference Inspirations
- **Production control rooms:** Take health-first hierarchy and visible incident escalation. Do not copy physical control-room visuals or theatrical wall-display aesthetics.
- **Video editing timelines:** Take scene sequencing, progress tracks, and inspector logic. Do not copy any editor's proprietary timeline UI.
- **Render farm dashboards:** Take job state, ETA, retry, failure, and provider capacity principles. Do not copy vendor-specific resource charts or worker layouts.
- **Cloud infrastructure monitoring tools:** Take health/degradation semantics and incident visibility. Do not copy cloud vendor identity, colors, or navigation.
- **Social media publishing calendars:** Take schedule density, collision warnings, and platform/account grouping. Do not copy calendar app grids or brand treatments.
- **Content moderation queues:** Take triage, decision logging, risk categories, and escalation. Do not copy policy taxonomies or moderation UI.
- **Cinematic post-production software:** Take restrained dark-room focus and preview emphasis. Do not copy specific software chrome, iconography, or color systems.
- **Command-center interfaces:** Take persistent command access and keyboard-driven action flow. Do not copy fake sci-fi command center motifs.

## Anti-References
- Generic AI SaaS dashboard with purple-blue gradient header.
- Glow-card or blob-heavy AI landing page.
- Neon cyberpunk monitoring demo.
- Crypto trading dashboard visual language.
- Soft consumer generator app with oversized rounded cards.
- Decorative sci-fi panels with poor readability.
- Any page using the generic dashboard composition from `03-anti-ai-aesthetic-rules.md` pattern 24.
- Any mobile screen using icon-only generic bottom navigation.

## Design Decision Rules
1. When choosing between visual atmosphere and operational clarity, choose operational clarity.
2. Use tables, rows, timelines, and split panes for scan-heavy workflows; use cards only when they clarify preview, grouping, or mobile condensation.
3. The primary action on each screen must connect to the page's operational purpose: launch batch, retry failures, approve output, schedule video, or resolve incident.
4. Accent color is reserved for primary actions, selected command states, and essential focus; never apply it broadly as decoration.
5. Every metric requires label, value, context or trend, and an actionable relationship.
6. Every page must have a distinct layout character based on its workflow; do not reuse a dashboard grid for all screens.
7. Status color must always be paired with text or icon and must map to semantic status tokens.
8. If a visual idea could plausibly belong to any AI SaaS product, reject it unless it is rewritten around video production operations.
9. Settings and system-rule screens must be calmer than monitoring pages, but still use the same token system, state rules, and accessibility requirements.
10. Static-only UI is never acceptable: every planned page must identify loading, empty, error, disabled, selected, and pending states before implementation.

## Exception Approvals
None — all forbidden patterns in `03-anti-ai-aesthetic-rules.md` apply without exception.
