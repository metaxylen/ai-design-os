# Design Tokens

## Token Philosophy
Tokens express the product's production-console identity through semantic roles, not raw visual values. Components and pages must consume token names such as `surface-panel`, `text-secondary`, `status-failed`, `queue-active`, or `focus-ring`; they must not hardcode color, spacing, radius, shadow, motion, or z-index values. Proposed values below are implementation guidance and must be delivered through the token system.

## Color Tokens

### Core Surfaces
| Token | Dark Theme Proposed Value | Light Theme Proposed Value | Usage |
|---|---:|---:|---|
| `surface-canvas` | `#080A0D` | `#F6F7F8` | App background canvas |
| `surface-panel` | `#11151A` | `#FFFFFF` | Standard panels and sections |
| `surface-raised` | `#171D24` | `#F0F3F6` | Popovers, command palette, selected surfaces |
| `surface-nested` | `#0D1116` | `#EEF1F4` | Rows, slots, nested controls |
| `surface-preview` | `#050607` | `#E7EAEE` | Video preview and render stage |
| `surface-critical` | `#241113` | `#FFF0F1` | Critical failed or dangerous areas |
| `surface-warning` | `#241D10` | `#FFF7E6` | Warning and budget-risk areas |

### Text
| Token | Dark | Light | Usage |
|---|---:|---:|---|
| `text-primary` | `#F3F6F8` | `#12161B` | Main readable text |
| `text-secondary` | `#B6C0CA` | `#3D4752` | Secondary content |
| `text-muted` | `#8794A1` | `#65717E` | Metadata; verify contrast at applied size |
| `text-inverse` | `#080A0D` | `#FFFFFF` | Text on inverse/high-emphasis surfaces |
| `text-on-action` | `#061014` | `#061014` | Text on action-primary |
| `text-on-status` | `#061014` | `#061014` | Text on strong status fills |

### Borders
| Token | Dark | Light | Usage |
|---|---:|---:|---|
| `border-subtle` | `#202832` | `#DCE2E8` | Quiet panel separation |
| `border-default` | `#2B3541` | `#C8D0D8` | Inputs, panels, rows |
| `border-strong` | `#536171` | `#7B8794` | Selected, active, emphasized borders |
| `border-critical` | `#C84B55` | `#B4232D` | Failed/destructive border |
| `border-warning` | `#D3982A` | `#A86600` | Warning/budget border |

### Actions and Operational Accent
| Token | Dark | Light | Usage |
|---|---:|---:|---|
| `action-primary` | `#5EE6D0` | `#007D73` | Primary actions and selected command state |
| `action-primary-hover` | `#7AF0DF` | `#00695F` | Primary hover |
| `action-primary-active` | `#42CDBA` | `#005A52` | Primary active |
| `action-secondary` | `#26313B` | `#E3E8EE` | Secondary actions |
| `action-secondary-hover` | `#303C48` | `#D6DEE6` | Secondary hover |
| `action-destructive` | `#E15B64` | `#C92F3A` | Destructive actions |

### Semantic Status
| Token | Dark | Light | Meaning |
|---|---:|---:|---|
| `status-success` | `#4FD18B` | `#16834B` | Completed, approved, posted |
| `status-warning` | `#E4AA3A` | `#A86600` | Delayed, budget risk, collision |
| `status-danger` | `#EF6A74` | `#C92F3A` | Failed, rejected, critical |
| `status-info` | `#6EA8FF` | `#2767C8` | Informational, queued |
| `status-rendering` | `#5EE6D0` | `#007D73` | Active rendering |
| `status-failed` | `#EF6A74` | `#C92F3A` | Failed generation |
| `status-approved` | `#4FD18B` | `#16834B` | Approved content |
| `status-moderation` | `#D889FF` | `#7A3EA8` | Needs safety review |

### Domain Status Mapping
| Token | Meaning |
|---|---|
| `queue-active` | Currently rendering or actively processing |
| `queue-paused` | Queue intentionally paused |
| `queue-delayed` | ETA slipped or blocked |
| `queue-retrying` | Retry in progress |
| `batch-active` | Current focused or running batch |
| `job-selected` | Selected row/card/job in queue or inspector |
| `job-completed` | Render job completed |
| `job-rejected` | Output rejected during review |
| `provider-healthy` | Provider available and within normal latency |
| `provider-degraded` | Provider slow, rate-limited, or elevated failure rate |
| `provider-offline` | Provider unavailable |
| `cost-normal` | Cost within budget |
| `cost-warning` | Cost approaching guardrail |
| `cost-critical` | Cost exceeds guardrail |
| `publishing-ready` | Asset/platform ready |
| `publishing-collision` | Schedule conflict |
| `publishing-scheduled` | Scheduled but not posted |
| `publishing-posted` | Published successfully |
| `rule-enabled` | Automation/system rule active |
| `rule-disabled` | Automation/system rule inactive |
| `rule-overridden` | Rule temporarily overridden |

## Typography Tokens
| Token | Size | Line Height | Weight | Letter Spacing | Usage |
|---|---:|---:|---:|---:|---|
| `font-sans` | system stack | - | - | - | Primary UI |
| `font-mono` | monospace stack | - | - | - | Logs, IDs, models, values |
| `text-display` | 32px | 38px | 700 | 0 | Rare command-center entry moments only |
| `text-h1` | 24px | 30px | 650 | 0 | Page heading |
| `text-h2` | 18px | 24px | 650 | 0 | Major section heading |
| `text-h3` | 15px | 20px | 650 | 0 | Panel/subsection heading |
| `text-body` | 14px | 21px | 400 | 0 | Body and table cells |
| `text-small` | 13px | 18px | 400 | 0 | Support text |
| `text-label` | 12px | 16px | 600 | 0.02em | Labels, buttons, tabs |
| `text-metadata` | 11px | 15px | 500 | 0.02em | Timestamps and secondary IDs |
| `text-numeric` | 22px | 28px | 700 | 0 | KPI/stat values, tabular nums |
| `text-code` | 12px | 17px | 500 | 0 | Logs, hashes, provider/model IDs |

## Spacing Scale
| Token | Value | Usage |
|---|---:|---|
| `space-1` | 4px | Tight inline gaps |
| `space-2` | 8px | Compact control gaps |
| `space-3` | 12px | Row and field gaps |
| `space-4` | 16px | Panel padding compact |
| `space-5` | 20px | Section internal spacing |
| `space-6` | 24px | Page section gap |
| `space-8` | 32px | Major content grouping |
| `space-10` | 40px | Large page grouping |
| `space-12` | 48px | Rare page-level separation |

## Radius Scale
| Token | Value | Usage |
|---|---:|---|
| `radius-none` | 0 | Tables, dividers, strict grids |
| `radius-xs` | 2px | Progress segments, small tags |
| `radius-sm` | 4px | Inputs, badges, status pills |
| `radius-md` | 6px | Buttons, panels, table containers |
| `radius-lg` | 8px | Dialogs, drawers, preview stage |
| `radius-full` | 999px | Pills or circular controls only |

## Shadow Scale
| Token | Value | Usage |
|---|---|---|
| `shadow-none` | none | Default panels and cards |
| `shadow-xs` | `0 1px 2px rgba(0,0,0,.25)` | Subtle raised rows only |
| `shadow-sm` | `0 8px 20px rgba(0,0,0,.28)` | Popovers/dropdowns |
| `shadow-md` | `0 16px 40px rgba(0,0,0,.34)` | Drawers/sheets |
| `shadow-lg` | `0 24px 64px rgba(0,0,0,.42)` | Dialogs/modals |

## Motion Tokens
| Token | Value | Usage |
|---|---:|---|
| `duration-instant` | 0ms | Reduced motion and immediate state changes |
| `duration-fast` | 120ms | Hover, active, row selection |
| `duration-base` | 180ms | Popovers, tab transitions |
| `duration-slow` | 260ms | Drawers, sheets, dialogs |
| `easing-standard` | cubic-bezier(.2,0,.2,1) | Default |
| `easing-decelerate` | cubic-bezier(0,0,.2,1) | Entering overlays |
| `easing-accelerate` | cubic-bezier(.4,0,1,1) | Exiting overlays |

## Z-Index Scale
| Token | Value |
|---|---:|
| `z-base` | 0 |
| `z-raised` | 10 |
| `z-sticky` | 100 |
| `z-dropdown` | 300 |
| `z-overlay` | 700 |
| `z-modal` | 800 |
| `z-toast` | 900 |
| `z-tooltip` | 1000 |

## Breakpoint Tokens
| Token | Value | Context |
|---|---:|---|
| `bp-xs` | 320px | Narrow mobile |
| `bp-sm` | 375px | Standard mobile |
| `bp-md` | 768px | Tablet |
| `bp-lg` | 1024px | Desktop |
| `bp-xl` | 1440px | Wide desktop |

## Component State Tokens
- `state-hover-surface`: tonal lift from default surface.
- `state-active-surface`: stronger tonal compression or selected border.
- `state-focus-ring`: uses `focus-ring`, `focus-ring-width`, `focus-ring-offset`.
- `state-disabled-opacity`: 0.48 for inactive controls; labels remain readable.
- `state-selected-border`: `border-strong` plus selected status label/icon.
- `state-selected-surface`: resolved surface treatment for selected jobs, active batches, selected slots, selected review items, and selected provider rows.
- `state-paused-surface`: warning-toned treatment for paused queues or disabled automation flows.
- `state-retrying-surface`: active processing treatment for retrying jobs and provider fallback attempts.
- `state-success-surface`: completed/approved/saved treatment with text/icon confirmation.
- `state-loading-surface`: skeleton tonal contrast on expected content shape.
- `state-error-surface`: `surface-critical` plus `status-danger` text/icon.
- `state-warning-surface`: `surface-warning` plus `status-warning` text/icon.

## Theme / Dark Mode Tokens
Dark mode is required from launch and defines the primary product identity. Light theme values are included for accessibility and environment flexibility. Implementation must use identical semantic token names across themes; do not create `dark-*` parallel component tokens.

## Focus Tokens
| Token | Value | Requirement |
|---|---:|---|
| `focus-ring` | `action-primary` | Visible against dark and light surfaces |
| `focus-ring-width` | 2px | Non-zero |
| `focus-ring-offset` | 2px | Non-zero |
| `focus-ring-critical` | `status-danger` | For destructive or error contexts |

## Data Visualization Tokens
| Token | Proposed Value | Usage |
|---|---:|---|
| `data-series-1` | `#5EE6D0` | Throughput/rendering |
| `data-series-2` | `#6EA8FF` | Queue volume |
| `data-series-3` | `#E4AA3A` | Cost/budget |
| `data-series-4` | `#EF6A74` | Failures |
| `data-series-5` | `#D889FF` | Moderation |
| `data-series-6` | `#9DD36A` | Approvals |
| `data-neutral` | `#536171` | Inactive series |
| `data-highlight` | `action-primary` | Selected data point |
| `chart-axis` | `border-default` | Axes |
| `chart-grid` | `border-subtle` | Grid lines |
| `chart-label` | `text-muted` | Axis and legend labels |

Data visualization must also use line style, shape, label, or pattern differences where color alone is insufficient.

## Implementation Notes
This is a semantic specification only. Do not create CSS, Tailwind config, JS theme files, or component implementation in Part 1. Future implementation must translate these tokens into the chosen stack through CSS custom properties, theme objects, or a token pipeline.

## Token Usage Rules
1. Use semantic tokens for every visual value.
2. Add or revise tokens in this file before implementing any new visual state.
3. Do not use gradient tokens; gradients are forbidden by `visual-direction.md`.
4. Use status tokens only for real status meaning, never decoration.
5. Use `radius-full` only for pills/circular controls.
6. Default panels use borders and tonal surfaces, not decorative shadows.
7. Focus tokens must never be removed, hidden, transparent, or zero-width.
