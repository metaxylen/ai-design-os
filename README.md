# AI Design OS + AI Video Factory Control Room

A reusable, agent-agnostic design-engineering control system that forces AI coding agents to produce product-specific, design-system-aware, state-complete, responsive, and accessible UI — consistently across any project type and any capable agent.

This repository also includes **AI Video Factory Control Room**, a working frontend interface created with AI Design OS. It is a dense operations dashboard for managing an AI-generated short-form video production pipeline: batches, render queues, prompt work, provider health, costs, moderation, publishing, and system rules.

---

## The Problem

AI agents default to the same generic aesthetic when they work without constraints: purple-blue gradients, identical rounded card grids, flat vertical stacking, desktop-only layouts, missing states, and UI that looks like every other AI-generated product — regardless of what is actually being built.

AI Design OS is the constraint layer every UI task must pass through before code is written.

---

## What's Inside

```
ai-design-os/
  core/
    00-skill-router.md              Task routing and file prerequisites
    01-agent-operating-protocol.md  Agent behavior, severity, and report format
    02-design-principles.md         Foundational design principles
    03-anti-ai-aesthetic-rules.md   Hard forbidden patterns + replacements
    04-reference-analysis-rules.md  How to extract from references without copying
    05-visual-identity-rules.md     14-field visual direction system
    06-design-token-rules.md        Semantic token discipline
    07-typography-rules.md          Type hierarchy and rhythm rules
    08-layout-system-rules.md       10 layout models + responsive transformation
    09-component-architecture-rules.md  Component layers and reuse enforcement
    10-interaction-state-rules.md   All required states: hover, focus, loading, empty, error
    11-responsive-design-rules.md   Breakpoints, navigation, and layout transformation
    12-accessibility-rules.md       Keyboard, semantics, contrast, ARIA
    13-frontend-implementation-rules.md  Stack discipline and file conventions
    14-design-review-checklist.md   15-category quality gate with do-not-ship conditions
    15-final-polish-rules.md        Targeted refinement with stopping criteria
  workflow/
    full-workflow.md                End-to-end sequence from brief to final QA
```

---

## Quickstart

Copy this to any capable AI coding agent before any UI task:

```
Before implementing this UI task, read `/ai-design-os/core/00-skill-router.md`,
classify the task type, then follow the required core files and project files for
that task type. Produce the required pre-implementation plan from
`01-agent-operating-protocol.md` before writing code. Do not implement if any
Blocker-level project file is missing.
```

---

## Full Documentation

→ [ai-design-os/README.md](ai-design-os/README.md)

---

## Included Interface

The included Vite + React + TypeScript app demonstrates how AI Design OS can guide a product-specific UI instead of a generic dashboard. The interface is dark-first, operational, responsive, and token-driven.

Run locally:

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
npm test
```
