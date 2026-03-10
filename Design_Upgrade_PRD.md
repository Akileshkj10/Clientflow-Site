# ClientFlow Site — Design Upgrade PRD (v5.0)

**Goal:** Keep our current messaging and sections, but significantly upgrade how they are **framed, structured, and presented** so the site feels on the level of Launchbay / Propeller / Dialpad / Goodcall — not like a generic AI template or student project.

**Scope:** Single-page marketing site (`index.html`, `css/site.css`).  
**Out of scope:** Rewriting core copy, adding big new sections, or re-architecting the app.

---

## 1. Objectives

- **1.1 Credibility**  
  Make ClientFlow feel like a serious, compliance-grade product built for IFAs/RIAs:
  - Stronger visual hierarchy.
  - Clearer structure ("what, who, how, proof, pricing").
  - Better use of whitespace, rhythm, and typography.

- **1.2 Clarity & Scanability**  
  Borrow patterns from Launchbay / Propeller / Dialpad / Goodcall:
  - Obvious "what this is" and "who it's for" within 3 seconds.
  - Each section has a clear job and a strong headline.
  - Supporting visuals that illustrate the point, not just decorate.

- **1.3 Maturity of brand**  
  Move from "pretty template" to "distinct product brand":
  - One strong visual language: consistent grid, card style, icons, button and link styles.
  - Calmer motion and fewer "template-y" gimmicks.
  - More obvious trust cues (compliance, stats, firms like them).

- **1.4 Guardrails**  
  - **Keep copy content the same** in meaning. Only:
    - Break long paragraphs.
    - Create headings / subheads / pull quotes from existing sentences.
    - Fix obvious micro issues (typos, spacing, clarity) when necessary.
  - Keep existing sections:
    - Hero
    - Brand strip
    - Problem ("The problem")
    - "How it works" / transformation
    - ROI / pricing section
    - Timeline / proof
    - CTA / "Book a demo"
    - Footer

---

## 2. Inspiration — What good agency/product sites do

From **Launchbay, Propeller AI SEO, Dialpad, Goodcall**:

- **Clear IA (information architecture)**  
  - Hero → credibility (logos, stats) → what it does → who it's for → how it works → proof/case studies → pricing/packages → CTA/contact.

- **Visual rhythm**  
  - Alternating light vs slightly tinted sections.
  - Alternating text-left / visual-right.
  - Hero with strong visual anchor (product UI or hero imagery), not just a floating generic card.

- **Section framing**  
  - Each section has:
    - Short label ("Why AI SEO matters", "Automate your calls", "Built for X").
    - Strong headline.
    - Short explainer.
    - Visual or list that proves it.

- **Credibility & social proof**  
  - Brand logos, metrics ("20,000+ onboardings"), client types, short quotes.
  - Not buried at the bottom; they appear early and are repeated.

- **Product clarity**  
  - "What you actually do" is visualised:
    - For Launchbay: client onboarding portals, workflows, checklists.
    - For Goodcall: AI phone flows and integrations.
    - For us: client portal, advisor dashboard, suitability drafts, compliance trail.

---

## 3. High-level changes for ClientFlow

### 3.1 Navigation & header

**Current issues:**

- Nav feels like a generic landing page ("The problem", "How it works", "Pricing") without a strong "see the product" action.
- No visual distinction between nav and hero.

**Desired:**

- Keep structure, but upgrade **clarity + CTA**:
  - Logo: `ClientFlow` (consistent casing).
  - Links:
    - `Why change now` (id still `#how`, label updated)
    - `How it works` (`#who`)
    - `Pricing` (`#pricing`)
  - Right CTA:
    - Primary: `Book a demo` (button).
- Add subtle:
  - Active link state (underline or pill).
  - Hover states aligned with brand.
- Make nav feel like a **product header** (Launchbay, Goodcall):
  - Slightly taller, more breathing room.
  - Optional subtle background blur or 1px bottom border.

### 3.2 Hero

**Current strengths:**

- Good headline & subhead (IFAs/RIAs, under 3 hours).
- Good trust line (Consumer Duty, SEC-ready).
- Dashboard visual exists.

**Current weaknesses:**

- Single-column layout looks "template-ish".
- Hero image feels like a stock card, not clearly tied to the value.
- No immediate "who uses this / what they get" micro cues.

**Changes:**

- **Layout:**
  - On desktop: switch to **split hero**:
    - Left: eyebrow, H1, subhead, CTAs, trust line, micro-list.
    - Right: dashboard card.
  - On mobile: current stacked layout is fine but reduce vertical padding a bit.

- **Content presentation (same words, better framing):**
  - Keep the same eyebrow / H1 / subhead text but:
    - Add a **three-bullet micro list** under the subhead, derived from your existing copy:
      - "FCA/SEC-compliant from day one."
      - "Under 3 hours from first meeting to signed client."
      - "Works with Wealthbox and Intelliflo – doesn't replace your CRM."
  - Primary CTA: `Book a demo`.
  - Secondary text link: `See how it works` (scroll to `#who`).

- **Visual:**
  - Tighten the hero dashboard:
    - Clear top bar: firm name, advisor name, "Onboarding pipeline".
    - 3–4 rows with realistic IFA client names and stages.
    - A small right-side panel showing "Next review due / suitability drafts".
  - Reduce glow / bloom so it looks more like a real product, less like a Dribbble card.

### 3.3 Brand strip

**Goal:** Act like Launchbay's "Powering 20,000+ onboardings" or Goodcall's "Born at Google and trusted at scale" — quick reputation anchor.

**Changes:**

- Keep existing "Built for small IFA and RIA firms — FCA and SEC in mind from day one" text.
- Slightly **reduce animation intensity**:
  - Slow down the marquee.
  - Possibly add a "Trusted by advisors at…" eyebrow to feel more real.
- Optional: add one or two **micro-stats** from your PRD as small chips below the strip:
  - "4–6 hrs → 20 min suitability reports."
  - "12–15 hrs → under 3 for onboarding."

### 3.4 "The problem" section (Act 1)

**Goal:** Read like Launchbay's "Make onboarding your edge, not your bottleneck" section.

**Changes:**

- Keep text bullets, but:
  - Turn **hero quote** into a highlighted card (distinct from the rest).
  - Ensure each pain point is in its **own mini-card** with a small icon / label so it feels real, not just a list.
- In the compare card:
  - Use a **clear label row**: "Manual onboarding" vs "With ClientFlow".
  - Replace template-style copy with your exact stats (already partially done) but:
    - Use consistent visual language (icons, small captions).
- Add a **short intro block**:
  - Label: "Why change now"
  - Headline: "Your team's time is going into admin, not advice."
  - Body: a 2–3 line summary using current copy.

### 3.5 "How it works" / transformation (Act 2)

**Goal:** Read like Goodcall's "Launch your AI phone agent in minutes" section or Dialpad's "Agentic AI platform".

**Changes:**

- Keep your four before/after pairings, but:
  - Each becomes a **horizontal "step card"**.
  - Add a small numbered step indicator or icon per row.
- Right-side text:
  - Replace generic template feel with:
    - Label: "How it works"
    - Headline: "One connected chain from intake to CRM."
    - Sub: "Intake, KYC, suitability and CRM — in one flow." (already close).
  - Turn the paragraph into **three bullets**:
    - Portal + meeting transcription → fact-find.
    - Advisor recommendation → AI-assisted suitability draft → Copilot approval.
    - Signed docs → CRM sync + annual review timer.

### 3.6 ROI / pricing section

**Goal:** Look more like a **pricing/ROI block** from a serious SaaS (Launchbay, Dialpad), not a generic "statistics gallery."

**Changes:**

- Keep your three cards and their numbers, but:
  - Add a small label row above: "What it's worth in practice".
  - Under the cards, add a **simple two-column panel**:

  Left:
  - "Practitioner" – text-only summary with your existing pricing copy.
  Right:
  - "Growth" – text-only summary, emphasising Annual Review & Vulnerability Radar.

- Ensure the **order** of this section flows:
  - Hero → problem → how it works → ROI/pricing → proof → CTA.

### 3.7 Proof timeline

**Goal:** Feel like a proper case-study / flow (Launchbay case studies, Goodcall "Born at Google" + stats).

**Changes:**

- Keep timeline copy and structure but:
  - Add a **small label**: "What a real onboarding looks like".
  - At the bottom, add:
    - One short line: "Under 3 hours from first contact to fully signed."
    - One micro-stat chip: "12–15 hours → under 3".

- Design:
  - Improve visual separation of time vs event (Dialpad style):
    - Make time column more prominent and use a mono/tabular font.
    - Use tinted background on "Total: <3 hrs" row.

### 3.8 Final CTA & footer

**Goal:** End like Goodcall or Dialpad: strong brand + clear next step + trust.

**Changes:**

- CTA section:
  - Keep text, but:
    - Add a **secondary text line**: "For compliance leads, principals and paraplanners."
- Footer:
  - Keep content and layout.
  - Add:
    - Very small "Product of [Your Company]" line.
    - A simple text link "Security & compliance" that anchors to your main PRD or a security page later.

---

## 4. Visual + UX guidelines

- **4.1 Tone**
  - Less "sparkles"; more solid, confident shapes.
  - Retain subtle decorative particles but limit them (max 2–3 per section).

- **4.2 Typography**
  - Use **H3s** more consistently inside modules; many blocks are currently single-level.
  - Avoid very long paragraphs; break into 2–3 lines where possible.

- **4.3 Motion**
  - Keep your existing scroll-reveal, but:
    - Reduce distance of motion (from 24px to ~16px).
    - Use consistent timing across sections.
  - Avoid overlapping animations that feel "busy".

- **4.4 Responsive**
  - Check **tablet** (1024px) specifically:
    - Often ignored; ensure two-column sections become 1:1 with consistent order.
  - Improve vertical spacing on mobile (reduce huge gaps).

---

## 5. Non-functional requirements

- **Performance:**  
  - No heavy new JS; reuse existing scroll-logic.
  - Any new imagery must be optimised (compressed PNG/WebP).

- **Accessibility:**
  - Correct heading order (h1 -> h2 -> h3).
  - Sufficient colour contrast (especially hero/button states).
  - Descriptive alt text for hero and any new UI mockups.

- **Implementation constraints:**
  - Implement in existing `index.html` and `css/site.css` (no new framework).
  - Changes should be incremental; page should never be in a "half-broken" state on main.
