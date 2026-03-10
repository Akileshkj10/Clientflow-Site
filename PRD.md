# ClientFlow — Product Requirements Document
**Version:** 4.1 — IFA/RIA content pivot  
**Design reference:** GravityWrite.com (gravitywrite.com)  
**Output:** Single-page responsive marketing website for ClientFlow AI (wealth management onboarding for IFAs and RIAs)

---

## 0. Design Analysis — GravityWrite.com

Before any build decisions, understand exactly what GravityWrite does visually and why it works.

### What GravityWrite looks like

**Hero:**
- Pure white background — not dark, not grey. Bright, open, airy.
- Headline is enormous, bold, black, centred. Massive font weight. Tight letter spacing.
- Small coloured eyebrow pill above headline — rounded, with a tiny icon + label text.
- Sub-headline in grey below. Short. One sentence max.
- Single primary CTA button — dark/black, rounded, centred.
- Below the fold: a large, softly-shadowed product UI screenshot floats in the centre. It sits inside a rounded rectangle card. The screenshot overflows slightly and creates a "peeking into the product" feel.
- Background has a **very subtle radial gradient bloom** — a soft circular glow in a muted colour (light purple/lavender) sitting behind the hero content. Not aggressive. Just visible.

**Brand logos strip:**
- Immediately below hero: "Trusted by most popular brands" in small muted text.
- A horizontal scrolling marquee of well-known brand logos in greyscale.

**Feature sections (alternating):**
- White background throughout. No dark sections.
- Each feature section has: small coloured eyebrow pill (left-aligned), large bold heading, paragraph body, a ghost/link CTA with arrow, and a large product UI card/screenshot on the other side.
- Layout alternates: text left / image right, then image left / text right.
- Image cards have very soft drop shadows and rounded corners (16–20px radius).
- Decorative particle elements (small triangles, stars, dots) float near section headings — subtle, colourful, adds energy without noise.

**Feature cards (grid):**
- Small icon at top left (rounded square icon container).
- Bold card title.
- Body text in grey.
- Light border, white background, rounded corners (12–16px).
- Gentle hover lift.

**Colour:**
- Base: pure white #FFFFFF everywhere.
- Text: near-black #1a1a1a / #111827 for headings, #6B7280 for body.
- Accent: a **vivid purple/violet** — approximately #7C3AED or #6D28D9. Used for eyebrow pills, CTA buttons, icon backgrounds, highlights.
- Secondary accents: coral/orange (#F97316), teal (#06B6D4), green (#10B981) — used sparingly in icons and decorative particles only.
- No dark backgrounds except footer.

**Typography:**
- One font family: a clean geometric sans-serif. Bold (800) for headlines, regular (400) for body.
- Headlines are large and tight. Think 56–72px at the top, 36–44px for sections.
- Very tight letter spacing on headlines: -0.02em to -0.03em.

**Nav:**
- White background, no border, flat. Logo left. Links centre. CTAs right.
- Clean, minimal. Doesn't call attention to itself.

**Overall feel:**
- Energetic but clean. Bright. Modern. Optimistic. Every section has life — small floating particles, colourful icon pills, product screenshots. But the base is always white and uncluttered.

---

## 1. ClientFlow Adaptation

We take GravityWrite's design system and apply it precisely to ClientFlow's content and IFA/RIA context. Same visual language. Same structural patterns. ClientFlow's copy and purpose.

**What changes from GravityWrite:**
- Accent colour: **deep violet #5B21B6** (slightly more premium than GravityWrite's brighter purple — suits wealth management / IFA positioning)
- Product UI: styled dashboard mockup cards that show the onboarding pipeline — clean, minimal, text-based data cards (or screenshot when available).
- Copy follows Content Strategy §1.5 (IFA/RIA pivot).
- Logo: "ClientFlow" wordmark (capital F), no icon needed initially.

**What stays identical:**
- White base throughout
- Radial gradient bloom in hero
- Large centred headline structure
- Eyebrow pills
- Alternating feature sections
- Floating decorative particles
- Soft-shadow rounded cards
- Dark footer

---

## 1.5 Content Strategy — IFA/RIA Pivot (Current)

**Effective:** As of site content update. Replaces prior "professional services" positioning.

**Audience:** Small independent financial advisory (IFA) firms in the UK and Registered Investment Advisor (RIA) firms in the US. Principals, advisors, and paraplanners. Not generic professional services or other verticals.

**Messaging principles:**
- **Outcome-first:** Lead with time saved (under 3 hours, 20 min review), compliance confidence (Consumer Duty, FCA/SEC), and one connected flow — not "AI" or "automation."
- **Jargon as trust:** Use IFA/RIA terms: suitability report, fact-find, Consumer Duty, KYC/AML, Copilot, COBS 9.4.1, Wealthbox, Intelliflo. Signals we are built for this audience.
- **Specificity:** Use PRD stats: 12–15 hours → under 3; 4–6 hrs per suitability → 20 min review; 8–10 tools → 1 system; 70% lose clients to slow onboarding; 84% of small firms with no onboarding software.
- **Risk reversal:** Emphasise "you approve every draft" (Copilot), "you stay author of the advice," "PI-friendly," "no client-facing AI."
- **Primary CTA:** "Book a demo" (not "Score my onboarding" as primary). Demo positions the product; optional secondary remains score/assessment if retained elsewhere.

**What changed from v4.0:**
- **Hero:** From generic "Your work is exceptional. Your onboarding isn't" → "From first meeting to fully signed, FCA-compliant onboarding in under 3 hours." Eyebrow: "For UK IFAs and US RIAs." Trust line: Consumer Duty and SEC-ready.
- **Nav/Footer:** "How it works" / "Who it's for" → "The problem" / "How it works." CTA: "Score my onboarding" → "Book a demo."
- **Brand strip:** "Professional services firms across the UK" → "Built for small IFA and RIA firms — FCA and SEC in mind from day one." Marquee names updated to IFA-style (e.g. Mitchell Wealth, Patel Financial Planning).
- **Act 1 (Problem):** Pain points and compare card rewritten for IFA workflow: 12–15 hours, 8–10 tools, 4–6 hrs per suitability, re-entry, Consumer Duty, CRM sync. Compare: 12–15 hrs → under 3 hrs; 4–6 hrs suitability → 20 min review; meeting populates fact-find; Consumer Duty audit trail; Wealthbox/Intelliflo sync. Footer stat: £1,500+ saved per month (4 reports), ~10 hrs for 30 annual reviews.
- **Act 2 (Transformation):** Pairings and headline updated. "One connected chain" / "Not a CRM. Not a report writer. The operating layer." Four pairings: meeting → fact-find; suitability from connected data + Copilot; Consumer Duty evidence; annual review in ~20 min.
- **Cost section:** Headline "Onboarding that pays for itself." Cards: (1) £567 saved per suitability report vs manual, (2) £1,468 saved per month (4 reports) vs Practitioner £199/mo, (3) 70% of firms lose clients to slow onboarding. Closer: Practitioner/Growth tiers, no enterprise pricing.
- **Proof timeline:** "Under 3 hours" flow: portal → transcript + KYC → enrichment + suitability draft → Copilot approve → DocuSeal → CRM synced. Total &lt;3 hrs. CTA: Book a demo.
- **Offer / Close:** "See how ClientFlow fits your practice." Book a demo; for UK IFAs and US RIAs; Practitioner £199/mo, Growth £399/mo. Close line: "Ready to onboard in under 3 hours instead of 12?"
- **Footer:** Tagline "Compliance-grade onboarding for IFAs and RIAs. Under 3 hours, not 12." Logo "ClientFlow."

---

## 2. Design System

### 2.1 Fonts

**Primary font: Plus Jakarta Sans**  
Source: Google Fonts — free  
Weights: 400, 500, 600, 700, 800

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Apply globally:
```css
body { font-family: 'Plus Jakarta Sans', sans-serif; }
```

No other fonts. If Plus Jakarta Sans is unavailable, use Sora (Google Fonts). Never Inter, Roboto, or system fonts.

### 2.2 Type Scale

| Element | Size (desktop) | Size (mobile) | Weight | Letter-spacing | Line-height | Colour |
|---|---|---|---|---|---|---|
| Hero H1 | 64–72px | 38px | 800 | -0.03em | 1.08 | #111827 |
| Section H2 | 40–48px | 28px | 700 | -0.02em | 1.1 | #111827 |
| Feature card title | 20–22px | 18px | 600 | -0.01em | 1.3 | #111827 |
| Body / sub-headline | 17–19px | 16px | 400 | 0 | 1.65 | #6B7280 |
| Eyebrow pill | 12px | 12px | 600 | 0.04em | 1 | #5B21B6 |
| Button | 15px | 15px | 600 | 0.01em | 1 | — |
| Caption / meta | 13px | 13px | 400 | 0 | 1.5 | #9CA3AF |
| Brand strip label | 13px | 13px | 500 | 0.03em | 1 | #9CA3AF |

### 2.3 Colour Palette

```css
:root {
  /* Base */
  --white:          #FFFFFF;
  --page-bg:        #FFFFFF;

  /* Text */
  --heading:        #111827;
  --body:           #6B7280;
  --muted:          #9CA3AF;

  /* Primary accent — deep violet */
  --violet:         #5B21B6;
  --violet-mid:     #7C3AED;
  --violet-light:   #EDE9FE;
  --violet-border:  #DDD6FE;

  /* Secondary accents — icons and particles only */
  --coral:          #F97316;
  --coral-light:    #FEF3C7;
  --teal:           #06B6D4;
  --teal-light:     #CFFAFE;
  --green:          #10B981;
  --green-light:    #D1FAE5;

  /* Borders */
  --border:         #E5E7EB;
  --border-mid:     #D1D5DB;

  /* Dark (footer only) */
  --dark:           #111827;
  --dark-2:         #1F2937;

  /* Hero bloom */
  --bloom:          rgba(124,58,237,0.06); /* very subtle violet radial */
}
```

### 2.4 Buttons

| Type | Background | Text | Border | Radius | Padding | Hover |
|---|---|---|---|---|---|---|
| Primary | #111827 | #FFFFFF | None | 10px | 14px 28px | bg #1F2937, scale(1.02), 150ms |
| Violet primary | #5B21B6 | #FFFFFF | None | 10px | 14px 28px | bg #4C1D95, scale(1.02), 150ms |
| Ghost / link CTA | None | #5B21B6 | None | 0 | 0 | colour #4C1D95, arrow 4px right, 200ms |

### 2.5 Cards

**Feature section card (product UI mockup):**
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 16px;
box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 60px -10px rgba(0,0,0,0.08);
overflow: hidden;
```

**Feature grid card:**
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 14px;
padding: 28px 28px;
box-shadow: 0 1px 3px rgba(0,0,0,0.04);
transition: transform 200ms ease, box-shadow 200ms ease;
/* Hover: */
transform: translateY(-4px);
box-shadow: 0 12px 40px rgba(0,0,0,0.10);
```

**Eyebrow pill:**
```css
display: inline-flex;
align-items: center;
gap: 6px;
background: #EDE9FE;
border: 1px solid #DDD6FE;
border-radius: 20px;
padding: 5px 14px;
font-size: 12px;
font-weight: 600;
color: #5B21B6;
```

### 2.6 Decorative Particles

GravityWrite uses small floating geometric shapes near section headings. Replicate exactly:

- **Triangle:** 10–12px, colour --coral or --violet-mid, `rotate(15deg)`, positioned top-right or bottom-left of section heading area.
- **4-point star:** 12–14px, colour --teal or --violet-mid, positioned near heading.
- **Small circle/dot:** 6–8px, colour --green or --coral.
- All particles: `position: absolute`, subtle `animation: float 3–4s ease-in-out infinite alternate` — drifting ±6px vertically.
- Never more than 2–3 particles per section. Subtle. Playful but not distracting.

```css
@keyframes particleFloat {
  from { transform: translateY(0px) rotate(0deg); }
  to   { transform: translateY(-8px) rotate(10deg); }
}
```

### 2.7 Spacing System

Base unit: **8px**.

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Section vertical padding | 96px | 72px | 56px |
| Content max-width | 1200px | 100% | 100% |
| Hero content max-width | 780px | 100% | 100% |
| Feature section content max-width | 1100px | 100% | 100% |
| Card grid gap | 24px | 20px | 16px |

---

## 3. Motion & Animation

### 3.1 Page Load

Hero elements animate in on load. Start: `opacity: 0; transform: translateY(20px);`

| Order | Element | Delay | Duration |
|---|---|---|---|
| 1 | Nav | 0ms | 400ms |
| 2 | Eyebrow pill | 80ms | 450ms |
| 3 | H1 | 160ms | 550ms |
| 4 | Sub-headline | 240ms | 450ms |
| 5 | CTA button | 320ms | 400ms |
| 6 | Trust/social proof line | 380ms | 400ms |
| 7 | Hero UI card | 480ms | 600ms + float begins |

Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for all reveals.

### 3.2 Scroll Reveals

```
Trigger:   20% of element in viewport
Animation: opacity 0→1, translateY(24px)→0
Duration:  550ms
Easing:    cubic-bezier(0.22, 1, 0.36, 1)
Stagger:   80ms between sibling elements
```

### 3.3 Hero Card Float

```css
@keyframes heroFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
animation: heroFloat 4s ease-in-out infinite;
```

### 3.4 Brand Logo Marquee

Continuous horizontal scroll — no pause, no interaction:
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
animation: marquee 30s linear infinite;
```

### 3.5 Hover States

| Element | Animation | Duration |
|---|---|---|
| Primary button | scale(1.02), shadow deepens | 150ms ease |
| Feature cards (grid) | translateY(-4px), shadow deepens | 200ms ease |
| Feature section card | subtle shadow increase | 200ms ease |
| Nav links | colour → --violet | 150ms ease |
| Ghost CTA | colour darkens, arrow 4px right | 200ms ease |
| Eyebrow pill | background slightly darker | 150ms ease |

---

## 4. Navigation

```
Position:   sticky top. Width: 100%. Height: 68px. z-index: 100.
Background: #FFFFFF. No border initially. After 40px scroll: border-bottom 1px solid #E5E7EB.
Transition: border 300ms ease.
```

| Element | Spec |
|---|---|
| Logo | "ClientFlow" — Plus Jakarta Sans 18px, weight 700, colour #111827. |
| Nav links | "The problem · How it works · Pricing" — 14px, weight 500, #6B7280. Hover: #111827, 150ms. |
| Right CTA | "Book a demo →" — dark primary button (or same as footer outline). |
| Mobile (<768px) | Hamburger (3 lines, #111827). Overlay: white full-screen. Links stacked. Same CTA. |

---

## 5. Section-by-Section Specification

---

### 5.1 Hero

```
Background: #FFFFFF
Height:     100vh minimum
Layout:     Single column, centred. Max-width 780px for text content.
```

**Hero background bloom:**
```css
/* Centred radial gradient — very subtle violet glow behind content */
background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.07) 0%, transparent 70%);
/* Applied as a pseudo-element or wrapper div behind content */
```

**Eyebrow pill** (centred, above headline):
```
Background: #EDE9FE
Border:     1px solid #DDD6FE
Text:       "For UK IFAs and US RIAs" — 12px, weight 600, #5B21B6
Icon:       Small lightning or sparkle emoji/SVG before text
Margin-bottom: 24px
```

**Headline** (centred):
```
Line 1: "From first meeting to fully signed,"
Line 2: "FCA-compliant onboarding in under 3 hours."

Font:           Plus Jakarta Sans 68px desktop / 38px mobile
Weight:         800
Letter-spacing: -0.03em
Line-height:    1.08
Colour:         #111827
Margin-bottom:  20px
```

**Sub-headline** (centred):
```
"One connected workflow for intake, fact-find, suitability reports and CRM — so you advise clients, not spreadsheets. Compliance-grade. No enterprise price tag."
Font:       Plus Jakarta Sans 18px
Weight:     400
Colour:     #6B7280
Max-width:  560px centred
Line-height: 1.65
Margin-bottom: 32px
```

**CTA** (centred):
```
Single primary button: "Book a demo →" (or "See how it works" as alternate)
Style: dark primary (#111827 bg, white text)
Size:  large — padding 14px 32px, font-size 15px
```

**Trust line** (centred, below button):
```
"Consumer Duty and SEC-ready. Built for small firms that can't afford compliance gaps."
Font: 13px, weight 400, colour #9CA3AF
Margin-top: 16px
```

**Hero UI card** (centred, below trust line):
```
Max-width:     900px
Margin-top:    48px
Card style:    border-radius 16px, border 1px solid #E5E7EB,
               box-shadow 0 4px 6px rgba(0,0,0,0.04), 0 24px 80px rgba(0,0,0,0.08)
Float:         heroFloat animation (Section 3.3)
Overflow:      hidden (clips inner content cleanly)

Contents — a styled onboarding dashboard mockup:
  Show a clean, minimal UI card with:
  - Top bar: "ClientFlow" logo left, "Dashboard" label, search bar right
  - Left sidebar: small nav items — Clients, Documents, Intake, Reports
  - Main panel:
      Heading: "Active Onboardings" with a green dot
      Three client rows: name + stage badge + time
        Row 1: "Mitchell & Co"   [Signed ✓]     1.8 days
        Row 2: "Patel LLP"       [Contract sent] 14 hrs
        Row 3: "Turner & Clarke" [Portal active] 2 days
      Below: a small stats bar showing "1.8 days avg · 94 hrs saved · £28,200 recovered"
  - Right panel: "Recent Documents" list — 4 items with coloured icons

All UI elements inside the card use real font sizes appropriate for a dashboard:
  - Labels: 11–12px
  - Data: 13–14px
  - Headings within card: 15px bold
  - Stage badges: rounded pills with colour-coded backgrounds

Colour inside card: white background, #F9FAFB sidebar, standard dashboard palette.
This card is NOT a screenshot — it is built in HTML/CSS to look like a real UI.
```

---

### 5.2 Brand Trust Strip

```
Background:   #FFFFFF
Padding:      32px 0
Border-top:   1px solid #F3F4F6
Border-bottom: 1px solid #F3F4F6
```

**Label** (centred, above logos):
```
"Built for small IFA and RIA firms — FCA and SEC in mind from day one"
Font: 13px, weight 500, letter-spacing 0.03em, colour #9CA3AF
Margin-bottom: 24px
```

**Logo marquee** (infinite scroll, no pause):
```
Placeholder IFA/RIA-style firm names as wordmarks:
  "Mitchell Wealth"   "Patel Financial Planning"   "Turner Clarke IFA"   "Morrison Partners"
  "Henderson Advisory"   "Webb & Co"   "Sinclair & Reid"   "Okafor Wealth"

Each name: Plus Jakarta Sans 15px, weight 600, colour #D1D5DB
Styled as greyscale wordmarks, 200px min-width each, centred text.
Marquee speed: 30s linear infinite. Duplicate the set for seamless loop.
```

---

### 5.3 Act 1 — The Mirror (Feature Section — Text Left, Card Right)

```
Background:   #FFFFFF
Padding:      96px 0
Layout:       Two column. Left 45% text, right 55% card. Gap 64px. Max-width 1100px centred.
Position:     relative (for particles)
```

**Decorative particles** (positioned absolute, relative to section):
```
- Triangle: 12px, colour #F97316, top-right of section, rotate(20deg), particleFloat animation
- Star: 14px, colour #7C3AED, bottom-left near heading, particleFloat 3.5s
```

**Left column — text:**

```
Eyebrow pill: "The onboarding trap"
Heading:      "Why onboarding burns 12+ hours per client."
              Plus Jakarta Sans 40px, weight 700, -0.02em, #111827
Body:         "Most small IFA and RIA firms use 8–10 different tools. Same data, entered again and again. Suitability reports alone take 4–6 hours each."
              17px, #6B7280, line-height 1.65

Hero quote (first mini-card):
  1. "We just signed a new client. I'm about to re-key their fact-find into three different systems."

Then: four more pain statements as mini-cards:
  2. "Someone asked where the Henderson suitability is at. I had to check the CRM, the paraplanner's drive, and my inbox."
  3. "Consumer Duty added more evidence and record-keeping. We're still catching up."
  4. "Four to six hours per suitability report. Annual reviews repeat that for every client, every year."
  5. "70% of firms say they lose clients to slow onboarding. Our process shouldn't be the bottleneck."

Transition line below cards:
  "None of these mean you're a bad firm. They mean you've outgrown a fragmented, manual setup."
  13px, italic, #9CA3AF
```

**Right column — card:**
```
A styled card showing the contrast:
  Card style: border-radius 16px, border 1px solid #E5E7EB,
              box-shadow 0 20px 60px rgba(0,0,0,0.08)
  Padding: 32px
  Background: white

  Contents:
    Header: "Before" in red-tinted pill vs "After ClientFlow" in green-tinted pill
    — two column layout inside card —

    LEFT (faded, grey):              RIGHT (full colour, crisp):
    12–15 hours                     Under 3 hours
    8–10 tools                      1 system
    4–6 hrs per suitability         20 min advisor review
    Manual fact-find re-entry       Meeting populates fact-find
    Compliance evidence scattered   Consumer Duty audit trail
    CRM out of sync                 Wealthbox / Intelliflo sync

    Each row: left in #9CA3AF / right in #111827 with a green checkmark icon
    Divider: 1px solid #E5E7EB down the middle
    
    Below the two columns:
    A single stat strip: "£1,500+ saved per month (4 reports) · ~10 hrs for 30 annual reviews"
    Background: #F0FDF4, border-radius 8px, green text, padding 12px 16px
```

---

### 5.4 Act 2 — The Reveal (Feature Section — Card Left, Text Right)

```
Background:   #F9FAFB  (very light grey — alternates from previous white)
Padding:      96px 0
Layout:       Two column. Left 55% card, right 45% text. Gap 64px. Max-width 1100px centred.
```

**Decorative particles:**
```
- Small dot: 8px, #06B6D4, top-left
- Triangle: 10px, #F97316, bottom-right, rotate(-15deg)
```

**Left column — card (four pairings):**
```
Card style: border-radius 16px, border 1px solid #E5E7EB,
            box-shadow 0 20px 60px rgba(0,0,0,0.06), background white
Padding: 0 (inner sections have own padding)

Four pairing rows inside the card, separated by 1px dividers:

Each row:
  Left half (faded):
    Label: small muted grey text
    Content: the "old world" scenario text, 14px, #9CA3AF, italic

  Right half (vivid):
    Label: "ClientFlow" in small violet pill
    Content: the solution text, 14px, #374151

Pairing 1:
  LEFT:  "I typed up the fact-find from my meeting notes. Again. Then copied it into the suitability template."
  RIGHT: "Meeting recording uploaded. Transcript populates the fact-find. No re-entry — you review and enrich." [ClientFlow]

Pairing 2:
  LEFT:  "Suitability report from a blank prompt. I had to rewrite half of it to match the actual client data."
  RIGHT: "Draft generated from connected fact-find and your recommendation. COBS 9.4.1 structure. You approve before it's sent." [ClientFlow]

Pairing 3:
  LEFT:  "FCA asked for our Consumer Duty evidence. We had to hunt across drives and emails."
  RIGHT: "Evidence chain built into every interaction. Plain-language summaries, confirmations and audit trail — ready for review." [ClientFlow]

Pairing 4:
  LEFT:  "Annual review season: 30 clients, 30 suitability reports. Weeks of paraplanning and chasing."
  RIGHT: "Delta fact-find, delta report. Same workflow — about 20 minutes review per client instead of hours." [ClientFlow]
```

**Right column — text:**
```
Eyebrow pill: "One connected chain"
Heading:      "Not a CRM. Not a report writer. The operating layer."
              40px, weight 700, -0.02em, #111827
Sub-heading:  "Intake, compliance, suitability and CRM — in one flow."
              20px, weight 600, #111827, margin-bottom 16px
Body:         "ClientFlow connects client portal, meeting transcription, KYC, AI-assisted suitability
               drafts and your existing CRM. Data is captured once. You stay the author of the advice —
               every draft goes through your Copilot review before anything is sent."
              17px, #6B7280, line-height 1.65
Ghost CTA:    "Book a demo →"  — violet ghost link style
```

---

### 5.5 Cost of Inaction (Three-Card Grid Section)

```
Background:   #FFFFFF
Padding:      96px 0
Layout:       Single column heading, then 3-column card grid. Max-width 1100px centred.
```

**Section heading block** (centred):
```
Eyebrow pill: "The real numbers"
Heading:      "Onboarding that pays for itself."
              48px, weight 700, -0.02em, #111827, max-width 700px, centred
Sub:          "Industry figures. Use them in your own planning — not as marketing claims."
              18px, #6B7280, centred, max-width 560px
```

**Decorative particles** (near heading):
```
- Star: 14px, #7C3AED, top-right of heading block
- Triangle: 12px, #F97316, bottom-left of heading block
```

**Three cost cards** (equal width grid, 24px gap):

Each card:
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 14px;
padding: 32px;
box-shadow: 0 1px 3px rgba(0,0,0,0.04);
/* Hover: translateY(-4px), shadow deepens */
```

**Card 1 — Suitability report saving:**
```
Icon block:   Violet rounded square, clock/time icon
              48px × 48px, background #EDE9FE, border-radius 12px
Big number:   "£567" — 48px, weight 800, colour #5B21B6. Count-up on scroll.
Label:        "saved per suitability report (vs manual)" — 16px, weight 600, #111827
Body:         "Manual: 4–6 hours at £100/hr = £400–600 per report. With ClientFlow: ~20 min
               advisor review ≈ £33. Saving £367–567 per report."
              15px, #6B7280, line-height 1.65
Footnote:     "Based on typical advisor time cost." — 13px, italic, #9CA3AF
```

**Card 2 — Monthly saving (4 reports):**
```
Icon block:   48px × 48px, background #FEF3C7, border-radius 12px, amber calendar icon
Big number:   "£1,468" — 48px, weight 800, colour #D97706. Count-up on scroll.
Label:        "saved per month (4 reports) vs manual" — 16px, weight 600, #111827
Body:         "Four suitability reports per month: manual cost £1,600–2,400 in advisor time.
               ClientFlow Practitioner tier £199/mo — net saving £1,468+ before deferred billing."
              15px, #6B7280, line-height 1.65
Footnote:     "Outsourced paraplanning £150–250/report adds up faster." — 13px, italic, #9CA3AF
```

**Card 3 — Client loss / retention:**
```
Icon block:   48px × 48px, background #FEE2E2, border-radius 12px, red warning icon
Big number:   "70%" — 48px, weight 800, colour #DC2626. Count-up on scroll.
Label:        "of firms lose clients to slow onboarding" — 16px, weight 600, #111827
Body:         "When onboarding drags, clients doubt the relationship before advice is delivered.
               Faster, compliant onboarding protects retention and referrals."
              15px, #6B7280, line-height 1.65
```

**Below cards — combined line:**
```
"£1,500+ saved per month on suitability alone. Annual review season: 30 clients in ~10 hours
 of advisor review instead of 120–180. No enterprise pricing."
17px, #6B7280, centred, max-width 700px, margin-top 40px

Followed by:
"Built for small firms. Practitioner and Growth tiers — so you advise clients, not administrate."
18px, weight 600, #111827, centred
```

---

### 5.6 Specific Proof (Timeline — Feature Section)

```
Background:   #F9FAFB
Padding:      96px 0
Layout:       Two column. Left 42% text, right 58% timeline card. Gap 64px. Max-width 1100px centred.
```

**Left column — text:**
```
Eyebrow pill: "One connected flow"
Heading:      "First meeting to fully signed. Under 3 hours."
              40px, weight 700, #111827
Body:         "Portal intake, meeting transcription, KYC, suitability draft and Copilot review —
               then documents signed and CRM synced. No re-entry. No scattered tools."
              17px, #6B7280, line-height 1.65
Ghost CTA:    "Book a demo →"
```

**Right column — timeline card:**
```
Card: border-radius 16px, border 1px solid #E5E7EB, background white,
      box-shadow 0 20px 60px rgba(0,0,0,0.07), padding 32px

Timeline rows — 7 items, 130ms stagger on scroll. IFA onboarding flow:

Each row:
  Left:   timestamp (e.g. T+0, T+15 min) — 12px, weight 600, #5B21B6, font-variant-numeric: tabular-nums
  Centre: vertical connector line — 1px, #E5E7EB, with a small violet dot at each node
  Right:  event text — 14px, #374151, line-height 1.5

Items:
  T+0        →  Client completes branded portal. Fact-find submitted. Meeting recording uploaded (optional).
  T+15 min   →  Transcript extracted. Fact-find pre-populated. KYC/AML initiated (Thirdfort/Credas).
  T+45 min   →  KYC passed. Advisor enriches fact-find, enters recommendation. Suitability Agent drafts report from connected data.
  T+1 hr 20  →  You review in Copilot. Approve. Report and fee disclosure sent to client.
  T+2 hrs    →  Client signs via DocuSeal. Consumer Duty evidence logged.
  T+3 hrs    →  CRM synced (Wealthbox/Intelliflo). Annual review timer set. Onboarding complete.
  Total: <3 hrs → One system. One flow. You stay the author of the advice.

Last row ("Total: <3 hrs") styled differently:
  Background: #EDE9FE, border-radius 8px, padding 12px 16px
  Text: weight 700, #5B21B6
```

---

### 5.7 Offer (CTA Section)

```
Background:   #5B21B6  (full violet — this is the ONE dark/coloured section before footer)
Padding:      96px 0
Layout:       Single column centred. Max-width 680px.
```

**Heading:**
```
"See how ClientFlow fits your practice."
48px, weight 800, -0.02em, #FFFFFF, centred
```

**Body:**
```
"Book a short demo. We'll walk through your current onboarding and suitability process,
 show you the connected workflow — intake, meeting transcription, suitability draft and CRM sync —
 and where time and compliance risk drop."
18px, rgba(255,255,255,0.80), centred, max-width 560px
```

**Framing:**
```
"For UK IFAs and US RIAs. No commitment. See the platform with your own workflow in mind."
15px, rgba(255,255,255,0.60), centred
```

**CTA button:**
```
"Book a demo →"
Background: #FFFFFF
Text colour: #5B21B6
Padding: 16px 40px, font-size 16px, weight 700, border-radius 10px
Hover: scale(1.02), shadow deepens, 150ms
Centred. Large.
```

**Trust line:**
```
"Practitioner from £199/mo. Growth with Annual Review and Vulnerability Radar from £399/mo."
13px, rgba(255,255,255,0.50), centred, below button
```

---

### 5.8 Close

```
Background:   #FFFFFF
Padding:      96px 0
Layout:       Single column centred.
```

**Line:**
```
"Ready to onboard in under 3 hours instead of 12?"
52px, weight 800, -0.02em, #111827, centred, max-width 700px
```

**CTA:**
```
"Book a demo →" — dark primary button, centred, large
```

---

### 5.9 Footer

```
Background:   #111827
Padding:      64px 0 40px
Layout:       Three columns, max-width 1200px. Bottom bar: full-width copyright.
```

| Column | Content |
|---|---|
| Left | "ClientFlow" — Plus Jakarta Sans 18px, weight 700, #FFFFFF. Below: "Compliance-grade onboarding for IFAs and RIAs. Under 3 hours, not 12." — 14px, #9CA3AF. |
| Centre | Links: "The problem · How it works · Pricing · Privacy" — 14px, #9CA3AF, hover #FFFFFF, 150ms. |
| Right | "Book a demo →" — outline white button (border 1px white, white text, transparent bg, 10px radius). |

**Bottom bar (border-top 1px solid #1F2937):**
```
"© 2025 ClientFlow. All rights reserved." — centred, 13px, #4B5563
```

---

## 6. Responsive Rules

| Rule | Desktop | Tablet (1024px) | Mobile (768px) |
|---|---|---|---|
| Hero H1 | 68px | 48px | 38px |
| Section H2 | 40–48px | 34px | 28px |
| Hero layout | Centred single col | Same | Same |
| Feature sections | Two column | Two column | Single column (text above card) |
| Cost card grid | 3 columns | 2 columns | 1 column |
| Proof section | Two column | Single column | Single column |
| Nav | Full links | Full links | Hamburger |
| Section padding | 96px | 72px | 56px |
| Hero card | Full visible | Full visible | Hidden on <480px |

- `overflow-x: hidden` on `html` and `body`. No horizontal scroll.
- All animations fire on mobile with `translateY(12px)` instead of `24px`.
- Particles hidden on mobile (too small to read, add clutter on small screens).
- `prefers-reduced-motion: reduce` — disable all transforms, opacity only.

---

## 7. Pre-Launch Quality Checklist

- [ ] `01` Plus Jakarta Sans loading at weights 400, 500, 600, 700, 800 — check DevTools Network
- [ ] `02` Page background is pure white #FFFFFF throughout (not off-white, not grey)
- [ ] `03` Hero has subtle violet radial bloom — barely visible, centred behind content
- [ ] `04` Eyebrow pill on hero: violet bg, correct text, icon, pill shape
- [ ] `05` Hero H1 is 68px+ on desktop, weight 800, letter-spacing -0.03em
- [ ] `06` Hero UI card present, built in HTML/CSS, floating animation running
- [ ] `07` Brand trust strip: marquee scrolling continuously, not paused
- [ ] `08` Decorative particles present in feature sections (triangles, stars, dots)
- [ ] `09` Feature sections alternate layout: text/card then card/text
- [ ] `10` Act 1 pain quotes are mini-cards with violet left border, italic text
- [ ] `11` Act 1 right card shows before/after comparison with green stat strip
- [ ] `12` Act 2 background is #F9FAFB (light grey) — distinct from white sections
- [ ] `13` All four Act 2 pairings present with correct left/right copy
- [ ] `14` Cost section: 3-column card grid with coloured icon blocks
- [ ] `15` Cost numbers count up from 0 on scroll — not static
- [ ] `16` Proof timeline: all 7 items, violet timestamps, node dots, connector line
- [ ] `17` Last timeline row ("Total: 1.8 days") styled with violet background
- [ ] `18` Offer section background is full violet #5B21B6 — white text throughout
- [ ] `19` Offer CTA button is white with violet text
- [ ] `20` Footer background is #111827 — links hover to white
- [ ] `21` Primary CTA everywhere reads "Book a demo →" — not "Get started"
- [ ] `22` Nav CTA reads "Book a demo →"
- [ ] `23` All cards have border-radius 14–16px — rounded, not sharp
- [ ] `24` Page load stagger fires in correct order: nav → pill → H1 → sub → CTA → card
- [ ] `25` Scroll reveals working with 80ms stagger between siblings
- [ ] `26` All hover states: cards lift, buttons scale, nav links colour, ghost arrow moves
- [ ] `27` Mobile: feature sections stack single column, no horizontal scroll
- [ ] `28` Nav hamburger works on mobile with clean overlay
- [ ] `29` `prefers-reduced-motion` respected — no transforms, opacity only
- [ ] `30` No dark backgrounds except the offer section (#5B21B6) and footer (#111827)
