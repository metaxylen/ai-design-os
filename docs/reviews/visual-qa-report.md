# Visual QA Report

## Screens Reviewed
- Control Room Dashboard
- Render Queue
- Batch Detail
- Prompt Studio
- Provider Health
- Cost Analytics
- Moderation Review
- Publishing Calendar
- Settings / System Rules

## Breakpoints Reviewed
320px / 375px / 768px / 1024px / 1440px

## States Reviewed
Loading, empty, error, success, partial data, queued, rendering, failed, retrying, completed, paused, approved, rejected, scheduled, posted, provider degraded, provider offline, cost warning, moderation blocked, and unsaved changes.

## Issues Found By Severity
- Critical: Mobile route access incomplete before patch.
- Critical: Overlay focus handling incomplete before patch.
- Major: Mobile small controls below target height before patch.
- Minor: Screenshot artifact pointers are text files in `output/playwright/`; actual Playwright images are in `.playwright-cli/`.

## Screenshots / Evidence
- Browser snapshot captured for `/` at 1440px.
- Screenshot pointer: `output/playwright/home-1440-screenshot.txt`
- Screenshot pointer: `output/playwright/queue-320-screenshot.txt`
- Actual Playwright screenshot files referenced by those logs:
  - `.playwright-cli/page-2026-05-15T16-00-43-413Z.png`
  - `.playwright-cli/page-2026-05-15T16-00-45-746Z.png`

## Route Verification
Every required route returned successfully through the local Vite server:
- `/`
- `/queue`
- `/batch/batch-1842`
- `/studio`
- `/providers`
- `/costs`
- `/moderation`
- `/calendar`
- `/settings`

## Automated Layout Checks
Across required routes and breakpoints:
- `h1` count: 1 per route.
- Horizontal overflow: none observed after patch.
- Mobile bottom nav: visible below 768px.
- Mobile touch targets below 44px: none observed after patch, excluding the skip link while hidden off-screen.

## Fixes Applied
- Mobile nav overflow menu.
- Overlay focus management.
- Mobile touch target sizing.
- Progressbar accessible names.

## Remaining Risks
- Visual QA was performed on fixture-backed prototype content.
- No full visual regression baseline exists yet.

## Do-Not-Ship Conditions Triggered
Before fixes: Yes.
After fixes: No.
