# ClientFlow Site — Design Upgrade Taskmaster

**Version:** 5.0 — presentation refresh  
**Source of truth:** `Design_Upgrade_PRD.md`, `PRD.md`

---

## 0. Legend

- **P0** – Must have for this upgrade (ship gate).
- **P1** – Important, can follow shortly after.
- **P2** – Nice to have polish.

Each task has: `[id] [priority] [area] – description`.

---

## 1. Information architecture & nav

- **[NAV-01] P0 IA labels & flows**
  - Update nav labels in `index.html`:
    - `The problem` → `Why change now` (href can stay `#how`).
    - Keep `How it works`, `Pricing`.
  - Ensure scroll targets match.

- **[NAV-02] P0 Primary CTA**
  - Make nav-right CTA `Book a demo` (button style).
  - Same CTA in hero, offer section, and footer for consistency.

- **[NAV-03] P1 Active / hover states**
  - Add:
    - Active link style (underline/pill).
    - Hover colour consistent with brand violet.

---

## 2. Hero

- **[HERO-01] P0 Layout upgrade**
  - On desktop:
    - Implement a two-column hero layout using existing content:
      - Left: eyebrow, H1, sub, CTAs, trust, micro-list.
      - Right: dashboard card.
  - On mobile:
    - Preserve vertical order but reduce top/bottom padding slightly.

- **[HERO-02] P0 Micro-list**
  - From existing copy, extract 3 bullets under the subhead:
    - FCA/SEC-compliant from day one.
    - Under 3 hours from first meeting to signed client.
    - Works with Wealthbox and Intelliflo (doesn't replace the CRM).

- **[HERO-03] P1 Dashboard visual refinement**
  - Refine the hero card to look more like a real IFA dashboard:
    - Clear title bar ("Onboarding pipeline").
    - 3–4 rows with realistic client names and stages.
    - Small side panel with "Suitability drafts / next review due".
  - Keep within existing colour and type system.

- **[HERO-04] P2 Motion tuning**
  - Reduce hero float amplitude and align timing with rest of scroll reveals.

---

## 3. Brand strip

- **[BRAND-01] P1 Tone & pacing**
  - Keep current text but:
    - Slow marquee down.
    - Ensure it doesn't feel jittery.
  - Optional: add small subtitle "Trusted by firms like…" above the logos.

- **[BRAND-02] P2 Micro-stats chips**
  - Under the strip, add two small stat chips:
    - "4–6 hrs → 20 min suitability reports."
    - "12–15 hrs → under 3 hours onboarding."

---

## 4. "Why change now" (Problem section)

- **[PROB-01] P0 Section framing**
  - Add a small label and updated section heading per PRD:
    - Label: "Why change now".
    - H2: keep "Why onboarding burns 12+ hours per client."

- **[PROB-02] P0 Pain cards**
  - Turn existing bullet list into individual mini-cards (style is already close, refine):
    - One pain per card, add small subtle icon where appropriate.
  - Ensure cards read clearly on mobile.

- **[PROB-03] P1 Compare card refinement**
  - Implement the updated before/after rows:
    - Left: manual side (grey).
    - Right: ClientFlow side (strong).
  - Add label row "Manual onboarding" vs "With ClientFlow".
  - Clean up spacing/weights so it feels closer to Launchbay.

- **[PROB-04] P2 Supporting stat line**
  - Ensure the stat line under the compare card is visually highlighted, not buried.

---

## 5. "How it works" / One connected chain

- **[HOW-01] P0 Pairing card layout**
  - Keep the 4 existing before/after stories, but:
    - Make each row a clearer "step card" with consistent layout.
    - Consider light numbered badges (1–4) or simple icons.

- **[HOW-02] P0 Right-column structure**
  - Restructure right text into:
    - Label: "How it works".
    - H2: "One connected chain from intake to CRM."
    - H3 or bold line: "Intake, compliance, suitability and CRM — in one flow."
    - 3 bullets using current paragraph content.

- **[HOW-03] P1 Ghost CTA**
  - Keep `Book a demo` ghost link but ensure:
    - Hover animation (arrow slide) is subtle and consistent.

---

## 6. ROI / Pricing

- **[ROI-01] P0 Card polish**
  - Ensure all three ROI cards:
    - Use consistent icon sizing.
    - Have aligned numbers and labels.
    - Look like part of a "pricing/ROI stack", not random metrics.

- **[ROI-02] P1 Add lightweight plan framing**
  - Under cards, add a two-column text-only block:
    - Left: Practitioner tier summary using existing pricing copy.
    - Right: Growth tier summary (Annual Review, Vulnerability Radar).
  - No tables; just strong headings and 2–3 bullets.

- **[ROI-03] P2 Visual tie-in to pricing CTA**
  - Add a short line above/below: "Book a demo to see pricing for your firm size."

---

## 7. Timeline / proof

- **[TL-01] P0 Section framing**
  - Add label: "What a real onboarding looks like".
  - Keep current heading & copy.

- **[TL-02] P1 Timeline visual**
  - Make time column more distinctive (mono font, light background, etc.).
  - Emphasise the final "Total: <3 hrs" row with a tinted background.

- **[TL-03] P2 Proof chips**
  - Under the timeline, add a 1-line summary and one small chip:
    - Line: "Under 3 hours from first contact to fully signed."
    - Chip: "12–15 hours → under 3 hours".

---

## 8. Offer / CTA & footer

- **[CTA-01] P0 Primary CTA consistency**
  - Ensure all main CTAs read `Book a demo` and visually match.

- **[CTA-02] P1 Persona hint**
  - Under hero and/or final CTA, add a short "For principals, advisors, and paraplanners" line.

- **[FOOT-01] P1 Footer polish**
  - Keep same links and copy but:
    - Ensure spacing and alignment is tight (especially on mobile).
    - Add small "Security & compliance" text link (anchor to future section or doc).

---

## 9. Visual/UX clean-up

- **[UX-01] P0 Consistent heading levels**
  - Audit headings in `index.html`:
    - Single `<h1>` in hero.
    - Subsequent sections use `<h2>`, cards use `<h3>`.

- **[UX-02] P0 Responsive spacing**
  - Go through breakpoints:
    - Desktop (~1200px), tablet (~1024px), large mobile (~768px), small mobile.
  - Fix:
    - Over-large vertical gaps on mobile.
    - Columns wrapping awkwardly.

- **[UX-03] P1 Motion tuning**
  - Reduce scroll reveal offset and standardise durations.
  - Respect `prefers-reduced-motion`.

- **[UX-04] P1 Accessibility check**
  - Colour contrast for text on violet backgrounds.
  - Focus states for nav links and buttons.

---

## 10. Implementation & review

- **[IMPL-01] P0 Staging**
  - Implement changes on a branch (or local) and ensure:
    - No layout regressions in hero / nav / footer.
    - All anchors still work.

- **[IMPL-02] P0 Visual review**
  - Cross-check against:
    - `Design_Upgrade_PRD.md`
    - Example sites (Launchbay, Propeller, Dialpad, Goodcall).
  - Adjust spacing and hierarchy until it "feels" like a modern product site.

- **[IMPL-03] P1 Final QA**
  - Manual pass:
    - Desktop Chrome, Safari, Edge.
    - Mobile Safari / Chrome emulation.
  - Check load performance (Lighthouse basic) and fix any obvious layout shifts.
