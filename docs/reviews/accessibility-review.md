# Accessibility Review

## Checks Performed
- Semantic layout landmarks.
- One `h1` per route.
- Heading hierarchy.
- Button vs link usage.
- Visible form labels.
- Error/help text association.
- Keyboard navigation and focus-visible behavior.
- Dialog/drawer focus handling.
- Icon-only button labelling.
- Table captions and sortable header state.
- Chart/data text alternatives.
- Status meaning beyond color.
- Reduced-motion fallback.
- Clickable div/span audit.

## Results
- Landmarks: Pass. Sidebar, top header, main content, nav, and complementary rails are present.
- `h1`: Pass. Browser QA confirmed one `h1` per required route.
- Forms: Pass. Inputs/selects/textareas expose visible labels and connected help/error text.
- Tables: Pass. Render queue table has a caption, column headers, and `aria-sort`.
- Status communication: Pass. Status pills include text labels, not only color.
- Charts: Pass. CSS charts expose text summaries and `role="img"` labels.
- Keyboard: Pass after patch. Rows are keyboard-selectable and overlays now trap focus.
- Focus-visible: Pass. Global focus style uses `--focus-ring`.
- Dialog/drawer: Fixed. `Dialog` and `Drawer` now trap Tab focus, close on Escape, lock body scroll, and return focus.
- Touch targets: Fixed for mobile small controls.
- Reduced motion: Pass. `prefers-reduced-motion` disables long animation/transition timing.

## Issues Found
- Critical: Dialog and drawer did not fully trap or restore focus.
- Major: Some mobile small buttons were below touch target expectations.

## Fixes Applied
- Added focus trap and focus return to `Dialog` and `Drawer`.
- Added mobile 44px minimum for small buttons and icon buttons.
- Added `aria-label` to `ProgressBar` progressbar elements.

## Remaining Accessibility Risks
- The prototype has no automated axe test suite.
- Popover is lightweight and should be revisited if it becomes central to a production workflow.

## Accessibility Do-Not-Ship Issues Remaining
None.
