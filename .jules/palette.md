## 2025-03-09 - [Palette Journal Entry]
**Learning / Vulnerability / Insight:** Interactive dashboard components often lack proper accessibility attributes like explicit button types, focus rings, and screen reader labels. This is especially true for icon-only buttons or dynamically updated status displays.
**Action / Prevention:** Ensure every button has `type="button"`, proper `aria-label`, visible focus indicators, and that state updates are announced or structured accessibly.
