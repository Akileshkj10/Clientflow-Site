# Clientflow — Product Requirements Document
**Version:** 4.0 — GravityWrite-Inspired**  
**Design reference:** GravityWrite.com (gravitywrite.com)  
**Output:** Single-page responsive marketing website for Clientflow agency

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

## 1. Clientflow Adaptation

We take GravityWrite's design system and apply it precisely to Clientflow's content and agency context. Same visual language. Same structural patterns. Clientflow's copy and purpose.

**What changes from GravityWrite:**
- Accent colour: **deep violet #5B21B6** (slightly more premium than GravityWrite's brighter purple — suits a professional services agency)
- No product screenshots (Clientflow is an agency, not a SaaS tool). Instead: styled UI mockup cards that show the onboarding process — clean, minimal, text-based data cards.
- Copy is all from the Clientflow content brief.
- Logo: "Clientflow" wordmark, no icon needed initially.

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
| Logo | "Clientflow" — Plus Jakarta Sans 18px, weight 700, colour #111827. |
| Nav links | "How it works · Who it's for · Pricing" — 14px, weight 500, #6B7280. Hover: #111827, 150ms. |
| Right CTA | "See what your onboarding could look like →" — dark primary button. |
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
Text:       "AI-powered onboarding systems" — 12px, weight 600, #5B21B6
Icon:       Small lightning or sparkle emoji/SVG before text
Margin-bottom: 24px
```

**Headline** (centred):
```
Line 1: "Your work is exceptional."
Line 2: "Your onboarding isn't."

Font:           Plus Jakarta Sans 68px desktop / 38px mobile
Weight:         800
Letter-spacing: -0.03em
Line-height:    1.08
Colour:         #111827
Margin-bottom:  20px
```

**Sub-headline** (centred):
```
"Six disconnected tools, forty emails, and twelve days — to onboard a client who signed in an afternoon."
Font:       Plus Jakarta Sans 18px
Weight:     400
Colour:     #6B7280
Max-width:  560px centred
Line-height: 1.65
Margin-bottom: 32px
```

**CTA** (centred):
```
Single primary button: "See what your onboarding could look like →"
Style: dark primary (#111827 bg, white text)
Size:  large — padding 14px 32px, font-size 15px
```

**Trust line** (centred, below button):
```
"Used by firms doing premium work who were tired of onboarding like it's 2012."
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
  - Top bar: "Clientflow" logo left, "Dashboard" label, search bar right
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
"Trusted by professional services firms across the UK"
Font: 13px, weight 500, letter-spacing 0.03em, ALL CAPS, colour #9CA3AF
Margin-bottom: 24px
```

**Logo marquee** (infinite scroll, no pause):
```
Since Clientflow is new, use placeholder firm-type names styled as wordmarks:
  "Mitchell & Co"   "Patel LLP"   "Turner Clarke"   "Morrison Partners"
  "Henderson Law"   "Webb Advisory"   "Sinclair & Reid"   "Okafor Group"

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
Eyebrow pill: "Understanding the problem"
Heading:      "If this sounds familiar, you're not alone."
              Plus Jakarta Sans 40px, weight 700, -0.02em, #111827
Body:         "These aren't edge cases. They're Tuesday morning for most professional services firms."
              17px, #6B7280, line-height 1.65

Then: five pain statements rendered as a stack of mini-cards:
  Each mini-card:
    background: #F9FAFB
    border: 1px solid #E5E7EB
    border-left: 3px solid #5B21B6
    border-radius: 8px
    padding: 14px 18px
    font-size: 15px
    font-style: italic
    color: #374151
    margin-bottom: 10px

The five quotes in exact order:
  1. "We just signed a new client and I'm about to attach a Word document to an email."
  2. "Someone asked me where the Henderson onboarding is at. I had to check three places."
  3. "Our client got emails from DocuSign, Stripe, and us in the same hour. It looked chaotic."
  4. "We spent most of Tuesday morning chasing documents from a client who signed two weeks ago."
  5. "Getting a contract signed still involves a printer somewhere in this building."

Transition line below cards:
  "None of these are signs of a bad firm. They're signs of a firm that outgrew its infrastructure."
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
    Header: "Before Clientflow" in red-tinted pill vs "After Clientflow" in green-tinted pill
    — two column layout inside card —

    LEFT (faded, grey):       RIGHT (full colour, crisp):
    8–12 days                 1.8 days
    4 tools                   1 system
    Manual docs               Auto-generated
    Email chasing             Zero chasing
    Fragmented comms          One branded thread
    No visibility             Live status — 4 seconds

    Each row: left in #9CA3AF / right in #111827 with a green checkmark icon
    Divider: 1px solid #E5E7EB down the middle
    
    Below the two columns:
    A single stat strip: "£3,750 saved in admin · £4,000 in recovered billing" 
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
    Label: "Clientflow" in small violet pill
    Content: the solution text, 14px, #374151

Pairing 1:
  LEFT:  "Opening a template, changing the name, updating the fee, printing, signing, scanning."
  RIGHT: "Intake submitted. Engagement letter built in 7 seconds. Ready before you open your laptop."

Pairing 2:
  LEFT:  "Three tools open. Still can't answer where the Morrison onboarding stands."
  RIGHT: "One screen. Every client. Live stage visible in 4 seconds."

Pairing 3:
  LEFT:  "Client got DocuSign, Stripe, and your email in the same hour. Looks like 3 companies."
  RIGHT: "Everything in one branded thread. From you, as you. Client sees nothing but your firm."

Pairing 4:
  LEFT:  "Day 8. Still waiting on three documents. Someone will try calling today."
  RIGHT: "Auto-reminders at Day 2, 5, 10. Team involved only when the document arrives."
```

**Right column — text:**
```
Eyebrow pill: "The transformation"
Heading:      "Every one of these has a specific fix."
              40px, weight 700, -0.02em, #111827
Sub-heading:  "None of them require more effort from your team."
              20px, weight 600, #111827, margin-bottom 16px
Body:         "Clientflow builds the entire system — intake, documents, communications,
               reminders, and visibility — so your firm runs like a premium operation
               from day one."
              17px, #6B7280, line-height 1.65
Ghost CTA:    "See how it works →"  — violet ghost link style
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
Heading:      "Bad onboarding has a cost. Most firms just haven't calculated it."
              48px, weight 700, -0.02em, #111827, max-width 700px, centred
Sub:          "These aren't worst-case numbers. They're what happens in an average month at an average firm."
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

**Card 1 — Unbillable Admin:**
```
Icon block:   Violet rounded square, clock/time icon inside (white icon)
              48px × 48px, background #EDE9FE, border-radius 12px
Big number:   "£3,750" — 48px, weight 800, colour #5B21B6. Count-up on scroll.
Label:        "per month in unbillable admin" — 16px, weight 600, #111827
Body:         "5 hours per client × 10 clients × £75/hr = time your senior staff spent
               generating no revenue."
              15px, #6B7280, line-height 1.65
Footnote:     "Assuming an ordinary firm, not an inefficient one." — 13px, italic, #9CA3AF
```

**Card 2 — Deferred Billing:**
```
Icon block:   48px × 48px, background #FEF3C7, border-radius 12px, amber calendar icon
Big number:   "£4,000" — 48px, weight 800, colour #D97706. Count-up on scroll.
Label:        "per month in deferred billing" — 16px, weight 600, #111827
Body:         "A 10-day onboarding vs 48 hours means your first invoice is 8 days late.
               Across 5 new clients: £4,000 sitting in a queue that didn't need to exist."
              15px, #6B7280, line-height 1.65
Footnote:     "Late revenue is a real cashflow cost." — 13px, italic, #9CA3AF
```

**Card 3 — Invisible Churn:**
```
Icon block:   48px × 48px, background #FEE2E2, border-radius 12px, red warning icon
Big number:   "40%" — 48px, weight 800, colour #DC2626. Count-up on scroll.
Label:        "of clients form their lasting impression during onboarding" — 16px, weight 600, #111827
Body:         "Before any real work is delivered. If that experience is fragmented or slow,
               the relationship starts with doubt. You won't see it in your churn data — but it started here."
              15px, #6B7280, line-height 1.65
```

**Below cards — combined line:**
```
"£3,750 in avoidable admin. £4,000 in deferred billing. An unknown number of relationships
 that started badly. None of these require a large firm to feel."
17px, #6B7280, centred, max-width 700px, margin-top 40px

Followed by:
"The question isn't whether bad onboarding costs money. It's whether you've been counting it."
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
Eyebrow pill: "A real onboarding"
Heading:      "Start to finish. 1.8 days."
              40px, weight 700, #111827
Body:         "Not a marketing scenario. A walkthrough of exactly what happens when
               a new client submits your intake form."
              17px, #6B7280, line-height 1.65
Ghost CTA:    "Score my onboarding →"
```

**Right column — timeline card:**
```
Card: border-radius 16px, border 1px solid #E5E7EB, background white,
      box-shadow 0 20px 60px rgba(0,0,0,0.07), padding 32px

Timeline rows — 7 items, 130ms stagger on scroll:

Each row:
  Left:   timestamp — 12px, weight 600, #5B21B6, font-variant-numeric: tabular-nums, min-width 100px
  Centre: vertical connector line — 1px, #E5E7EB, with a small violet dot at each node
  Right:  event text — 14px, #374151, line-height 1.5

Items:
  14:22, 26 Feb  →  Sarah Mitchell submits intake. 9 answers.
  14:22:07       →  Lead scored 9/10. Document generation begins.
  14:22:14       →  4 documents complete — brief, scope, engagement letter, task list.
  14:28          →  Reviewed, approved, sent.
  14:35          →  Sarah receives everything in one branded thread.
  1 March        →  Contract signed. Invoice paid. Portal active.
  Total: 1.8 days → The work didn't change. The system around it did.

Last row ("Total") styled differently:
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
"See where your onboarding is losing time."
48px, weight 800, -0.02em, #FFFFFF, centred
```

**Body:**
```
"Answer eight questions about how your firm currently onboards clients.
 We'll show you exactly where time is being lost, what it's costing,
 and what a Clientflow setup would look like for your specific practice."
18px, rgba(255,255,255,0.80), centred, max-width 560px
```

**Framing:**
```
"No call required. No credit card. Just eight questions and a clear picture."
15px, rgba(255,255,255,0.60), centred
```

**CTA button:**
```
"Score my onboarding →"
Background: #FFFFFF
Text colour: #5B21B6
Padding: 16px 40px, font-size 16px, weight 700, border-radius 10px
Hover: scale(1.02), shadow deepens, 150ms
Centred. Large.
```

**Trust line:**
```
"If your onboarding is already working well, we'll tell you that too."
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
"Still onboarding clients the way you did in 2018?"
52px, weight 800, -0.02em, #111827, centred, max-width 700px
```

**CTA:**
```
"Score my onboarding →" — dark primary button, centred, large
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
| Left | "Clientflow" — Plus Jakarta Sans 18px, weight 700, #FFFFFF. Below: "Premium onboarding for professional services firms." — 14px, #9CA3AF. |
| Centre | Links: "How it works · Who it's for · Pricing · Privacy" — 14px, #9CA3AF, hover #FFFFFF, 150ms. |
| Right | "Score my onboarding →" — outline white button (border 1px white, white text, transparent bg, 10px radius). |

**Bottom bar (border-top 1px solid #1F2937):**
```
"© 2025 Clientflow. All rights reserved." — centred, 13px, #4B5563
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
- [ ] `21` Primary CTA everywhere reads "Score my onboarding →" — not "Get started"
- [ ] `22` Nav CTA reads "See what your onboarding could look like →"
- [ ] `23` All cards have border-radius 14–16px — rounded, not sharp
- [ ] `24` Page load stagger fires in correct order: nav → pill → H1 → sub → CTA → card
- [ ] `25` Scroll reveals working with 80ms stagger between siblings
- [ ] `26` All hover states: cards lift, buttons scale, nav links colour, ghost arrow moves
- [ ] `27` Mobile: feature sections stack single column, no horizontal scroll
- [ ] `28` Nav hamburger works on mobile with clean overlay
- [ ] `29` `prefers-reduced-motion` respected — no transforms, opacity only
- [ ] `30` No dark backgrounds except the offer section (#5B21B6) and footer (#111827)
