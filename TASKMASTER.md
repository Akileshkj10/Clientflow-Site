# Clientflow Website — Taskmaster

**Version:** 4.0 (aligned with PRD)  
**Design reference:** GravityWrite.com  
**Source of truth:** PRD.md. All design, copy, and behaviour are specified there; this document orders and subdivides the work.

Design direction: **Bright, energetic, clean.** White base. Violet accent. Eyebrow pills. Alternating feature sections. Decorative particles. Soft-shadow rounded cards. Dark footer.

---

## 01. Foundation & design system (PRD §2)

- [ ] **01.1** HTML shell: `<!DOCTYPE html>`, `lang="en"`, viewport meta, semantic structure.
- [ ] **01.2** Google Fonts: preconnect + Plus Jakarta Sans (400, 500, 600, 700, 800) in `<head>` before any CSS. No fallbacks; use Sora only if Plus Jakarta fails.
- [ ] **01.3** CSS custom properties: full palette per PRD §2.3 (`--white`, `--heading`, `--body`, `--muted`, `--violet`, `--violet-mid`, `--violet-light`, `--violet-border`, secondary accents, borders, `--dark`, `--bloom`).
- [ ] **01.4** Global typography: `body` → Plus Jakarta Sans. Type scale per §2.2 (hero H1, section H2, feature card title, body, eyebrow, button, caption, brand strip).
- [ ] **01.5** Buttons: primary dark, violet primary, ghost/link CTA — radius 10px, padding, hover per §2.4.
- [ ] **01.6** Cards: feature section card, feature grid card, eyebrow pill — styles per §2.5.
- [ ] **01.7** Decorative particles: triangle, star, dot — sizes, colours, `particleFloat` keyframes per §2.6.
- [ ] **01.8** Spacing: 8px base unit. Section padding, max-widths, card gaps per §2.7.
- [ ] **01.9** `overflow-x: hidden` on `html` and `body`.

---

## 02. Navigation (PRD §4)

- [ ] **02.1** Nav container: sticky top, full width, height 68px, z-index 100, background `#FFFFFF`.
- [ ] **02.2** Border: none initially; after 40px scroll → `border-bottom: 1px solid #E5E7EB`, transition 300ms.
- [ ] **02.3** Logo: "Clientflow" — Plus Jakarta Sans 18px, weight 700, `#111827`.
- [ ] **02.4** Nav links: "How it works · Who it's for · Pricing" — 14px, weight 500, `#6B7280`. Hover `#111827`, 150ms.
- [ ] **02.5** Right CTA: "See what your onboarding could look like →" — dark primary button.
- [ ] **02.6** Mobile (<768px): hamburger (3 lines, `#111827`); full-screen white overlay; links stacked; same CTA.

---

## 03. Hero (PRD §5.1)

- [ ] **03.1** Section: background `#FFFFFF`, min-height 100vh, single column centred, max-width 780px for text.
- [ ] **03.2** Hero bloom: radial gradient `ellipse 80% 60% at 50% 40%`, `rgba(124,58,237,0.07)` → transparent 70%. Pseudo-element or wrapper.
- [ ] **03.3** Eyebrow pill: centred, "AI-powered onboarding systems" — violet pill style, icon before text, 24px margin-bottom.
- [ ] **03.4** Headline: line 1 "Your work is exceptional." / line 2 "Your onboarding isn't." — 68px desktop / 38px mobile, weight 800, -0.03em, `#111827`.
- [ ] **03.5** Sub-headline: exact copy per PRD. 18px, `#6B7280`, max-width 560px, 32px margin-bottom.
- [ ] **03.6** CTA: "See what your onboarding could look like →" — dark primary, 14px 32px, centred.
- [ ] **03.7** Trust line: exact copy. 13px, `#9CA3AF`, 16px below button.
- [ ] **03.8** Hero UI card: max-width 900px, 48px margin-top, border-radius 16px, shadow, overflow hidden.
- [ ] **03.9** Card contents: dashboard mockup — top bar (logo, "Dashboard", search), left sidebar (Clients, Documents, Intake, Reports), main panel (Active Onboardings, 3 client rows with stage badges, stats bar), right panel (Recent Documents). Built in HTML/CSS, not screenshot.

---

## 04. Brand Trust Strip (PRD §5.2)

- [ ] **04.1** Section: background `#FFFFFF`, padding 32px 0, border-top/bottom `1px solid #F3F4F6`.
- [ ] **04.2** Label: "Trusted by professional services firms across the UK" — 13px, 500, 0.03em, ALL CAPS, `#9CA3AF`, 24px margin-bottom.
- [ ] **04.3** Logo marquee: placeholder firm names (Mitchell & Co, Patel LLP, Turner Clarke, etc.) — 15px, 600, `#D1D5DB`, 200px min-width each.
- [ ] **04.4** Marquee animation: 30s linear infinite, duplicate set for seamless loop. No pause.

---

## 05. Act 1 — The Mirror (PRD §5.3)

- [ ] **05.1** Section: background `#FFFFFF`, padding 96px 0, two columns (45% text / 55% card), gap 64px, max-width 1100px. Position relative for particles.
- [ ] **05.2** Particles: triangle 12px `#F97316` top-right rotate(20deg); star 14px `#7C3AED` bottom-left. `particleFloat` animation.
- [ ] **05.3** Left column: eyebrow "Understanding the problem"; heading "If this sounds familiar, you're not alone." — 40px, 700, -0.02em; body per PRD.
- [ ] **05.4** Five pain mini-cards: exact copy in order. Style: `#F9FAFB` bg, 3px violet left border, 8px radius, italic, `#374151`.
- [ ] **05.5** Transition line: "None of these are signs of a bad firm..." — 13px, italic, `#9CA3AF`.
- [ ] **05.6** Right column card: before/after comparison — "Before Clientflow" vs "After Clientflow" pills, two-column layout (faded left, crisp right), 6 rows, green stat strip below.

---

## 06. Act 2 — The Reveal (PRD §5.4)

- [ ] **06.1** Section: background `#F9FAFB`, padding 96px 0, two columns (55% card / 45% text), gap 64px, max-width 1100px.
- [ ] **06.2** Particles: dot 8px `#06B6D4` top-left; triangle 10px `#F97316` bottom-right rotate(-15deg).
- [ ] **06.3** Left column card: four pairing rows, 1px dividers. Each row: left (muted, italic), right ("Clientflow" violet pill, solution text). Exact copy per PRD.
- [ ] **06.4** Right column: eyebrow "The transformation"; heading "Every one of these has a specific fix."; sub-heading; body; ghost CTA "See how it works →".

---

## 07. Cost of Inaction (PRD §5.5)

- [ ] **07.1** Section: background `#FFFFFF`, padding 96px 0, centred heading block, then 3-column card grid. Max-width 1100px.
- [ ] **07.2** Particles: star 14px `#7C3AED` top-right; triangle 12px `#F97316` bottom-left.
- [ ] **07.3** Heading block: eyebrow "The real numbers"; heading; sub. Centred, max-widths per PRD.
- [ ] **07.4** Three cost cards: Card 1 (violet icon, £3,750, unbillable admin); Card 2 (amber icon, £4,000, deferred billing); Card 3 (red icon, 40%, lasting impression). Count-up on scroll.
- [ ] **07.5** Combined line + closer: exact copy and typography per PRD.

---

## 08. Specific Proof (PRD §5.6)

- [ ] **08.1** Section: background `#F9FAFB`, padding 96px 0, two columns (42% text / 58% timeline card), gap 64px, max-width 1100px.
- [ ] **08.2** Left column: eyebrow "A real onboarding"; heading "Start to finish. 1.8 days."; body; ghost CTA "Score my onboarding →".
- [ ] **08.3** Timeline card: border-radius 16px, shadow, padding 32px. Seven rows with timestamp | connector line | event text.
- [ ] **08.4** Seven timeline items: exact order and copy per PRD. Last row ("Total: 1.8 days") styled with violet background.
- [ ] **08.5** Stagger: 130ms between rows on scroll reveal.

---

## 09. Offer (PRD §5.7)

- [ ] **09.1** Section: background `#5B21B6`, padding 96px 0, single column centred, max-width 680px.
- [ ] **09.2** Heading: "See where your onboarding is losing time." — 48px, 800, -0.02em, white, centred.
- [ ] **09.3** Body and framing: exact copy. 18px and 15px, white at 80% and 60% opacity.
- [ ] **09.4** CTA: "Score my onboarding →" — white bg, violet text, 16px 40px, 10px radius, centred.
- [ ] **09.5** Trust line: exact copy. 13px, white 50% opacity, below button.

---

## 10. Close (PRD §5.8)

- [ ] **10.1** Section: background `#FFFFFF`, padding 96px 0, single column centred.
- [ ] **10.2** Line: "Still onboarding clients the way you did in 2018?" — 52px, 800, -0.02em, `#111827`, max-width 700px.
- [ ] **10.3** CTA: "Score my onboarding →" — dark primary, centred, large.

---

## 11. Footer (PRD §5.9)

- [ ] **11.1** Section: background `#111827`, padding 64px 0 40px, three columns, max-width 1200px.
- [ ] **11.2** Left column: logo "Clientflow" 18px 700 white; tagline "Premium onboarding for professional services firms." 14px `#9CA3AF`.
- [ ] **11.3** Centre: links "How it works · Who it's for · Pricing · Privacy" — 14px `#9CA3AF`, hover white, 150ms.
- [ ] **11.4** Right: "Score my onboarding →" — outline white button.
- [ ] **11.5** Bottom bar: border-top `1px solid #1F2937`; copyright "© 2025 Clientflow. All rights reserved." — 13px `#4B5563`, centred.

---

## 12. Page load animation (PRD §3.1)

- [ ] **12.1** Initial state: hero elements (eyebrow, H1, sub, CTA, trust line, hero card) start `opacity: 0; transform: translateY(20px)`. Nav: opacity only. Apply before first paint (no flash).
- [ ] **12.2** Reveal sequence: (1) Nav 0ms, 400ms; (2) Eyebrow 80ms, 450ms; (3) H1 160ms, 550ms; (4) Sub 240ms, 450ms; (5) CTA 320ms, 400ms; (6) Trust 380ms, 400ms; (7) Hero card 480ms, 600ms + float starts.
- [ ] **12.3** Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for all.

---

## 13. Scroll reveals (PRD §3.2)

- [ ] **13.1** Generic: trigger 20% viewport, `opacity 0→1`, `translateY(24px)→0`, 550ms, cubic-bezier(0.22, 1, 0.36, 1).
- [ ] **13.2** Stagger: 80ms between sibling elements.
- [ ] **13.3** Mobile: use `translateY(12px)` instead of 24px.
- [ ] **13.4** `prefers-reduced-motion: reduce`: disable transforms; opacity-only, max 200ms.

---

## 14. Hero card float & marquee (PRD §3.3, §3.4)

- [ ] **14.1** Hero card: `@keyframes heroFloat` — 0%/100% translateY(0), 50% translateY(-10px). 4s ease-in-out infinite.
- [ ] **14.2** Brand marquee: `@keyframes marquee` — translateX(0) → translateX(-50%). 30s linear infinite. Duplicate content for seamless loop.
- [ ] **14.3** `prefers-reduced-motion`: disable hero float; marquee can remain or be static.

---

## 15. Hover states (PRD §3.5)

- [ ] **15.1** Primary button: scale(1.02), shadow deepens, 150ms ease.
- [ ] **15.2** Feature grid cards: translateY(-4px), shadow deepens, 200ms ease.
- [ ] **15.3** Feature section cards: subtle shadow increase, 200ms ease.
- [ ] **15.4** Nav links: colour → violet, 150ms ease.
- [ ] **15.5** Ghost CTA: colour darkens, arrow 4px right, 200ms ease.
- [ ] **15.6** Eyebrow pill: background slightly darker, 150ms ease.

---

## 16. Responsive (PRD §6)

- [ ] **16.1** Breakpoints: 1024px (tablet), 768px (mobile), 480px (small).
- [ ] **16.2** Hero H1: 68px → 48px → 38px at breakpoints.
- [ ] **16.3** Section H2: 40–48px → 34px → 28px.
- [ ] **16.4** Feature sections: two-column → single column (text above card) at mobile.
- [ ] **16.5** Cost grid: 3 columns → 2 → 1.
- [ ] **16.6** Proof section: two-column → single column.
- [ ] **16.7** Nav: full links → hamburger at 768px.
- [ ] **16.8** Section padding: 96px → 72px → 56px.
- [ ] **16.9** Hero card: hidden at <480px.
- [ ] **16.10** Particles: hidden on mobile.
- [ ] **16.11** No horizontal scroll at any viewport.

---

## 17. Pre-launch quality checklist (PRD §7)

- [ ] **Q01** Plus Jakarta Sans loading at 400, 500, 600, 700, 800 — DevTools Network.
- [ ] **Q02** Page background pure white `#FFFFFF` throughout.
- [ ] **Q03** Hero has subtle violet radial bloom.
- [ ] **Q04** Hero eyebrow pill: violet bg, correct text, icon, pill shape.
- [ ] **Q05** Hero H1: 68px+ desktop, weight 800, -0.03em.
- [ ] **Q06** Hero UI card present, HTML/CSS built, float animation running.
- [ ] **Q07** Brand marquee scrolling continuously.
- [ ] **Q08** Decorative particles in feature sections.
- [ ] **Q09** Feature sections alternate: text/card then card/text.
- [ ] **Q10** Act 1 pain quotes: mini-cards, violet left border, italic.
- [ ] **Q11** Act 1 right card: before/after comparison, green stat strip.
- [ ] **Q12** Act 2 background `#F9FAFB`.
- [ ] **Q13** All four Act 2 pairings present, correct copy.
- [ ] **Q14** Cost section: 3-column grid, coloured icon blocks.
- [ ] **Q15** Cost numbers count up from 0 on scroll.
- [ ] **Q16** Proof timeline: 7 items, violet timestamps, connector line.
- [ ] **Q17** Last timeline row styled with violet background.
- [ ] **Q18** Offer section background `#5B21B6`, white text.
- [ ] **Q19** Offer CTA: white bg, violet text.
- [ ] **Q20** Footer background `#111827`, links hover white.
- [ ] **Q21** Primary CTA "Score my onboarding →" everywhere.
- [ ] **Q22** Nav CTA "See what your onboarding could look like →".
- [ ] **Q23** All cards border-radius 14–16px.
- [ ] **Q24** Page load stagger: nav → pill → H1 → sub → CTA → card.
- [ ] **Q25** Scroll reveals: 80ms stagger.
- [ ] **Q26** Hover states: cards lift, buttons scale, nav links colour, ghost arrow.
- [ ] **Q27** Mobile: sections stack, no horizontal scroll.
- [ ] **Q28** Nav hamburger works.
- [ ] **Q29** `prefers-reduced-motion` respected.
- [ ] **Q30** No dark backgrounds except offer (#5B21B6) and footer (#111827).

---

*Taskmaster complete. Reference: PRD.md. Build order: 01 → 11 (structure and copy), then 12 → 16 (motion and responsive), then 17 (QA).*
