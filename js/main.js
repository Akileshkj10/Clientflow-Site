/**
 * Clientflow — Navigation behaviour
 * - Scroll border: border appears after 40px scroll (PRD §4)
 * - Mobile hamburger: full-screen overlay (PRD §4)
 */

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const navOverlay = document.getElementById('nav-overlay');
  const SCROLL_THRESHOLD = 40;

  if (!nav) return;

  function updateScrollBorder() {
    if (window.scrollY >= SCROLL_THRESHOLD) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  function openMenu() {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    navOverlay.setAttribute('aria-hidden', isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMenu() {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.addEventListener('scroll', updateScrollBorder, { passive: true });
  updateScrollBorder();

  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', openMenu);

    navOverlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
})();

/**
 * Clientflow — Scroll reveals (PRD §3.2, Task 13)
 * Trigger: 20% viewport. Opacity 0→1, translateY(24px)→0. 550ms. 80ms stagger (130ms for timeline).
 */
(function () {
  'use strict';

  const STAGGER_MS = 80;
  const TIMELINE_STAGGER_MS = 130;
  const THRESHOLD = 0.2;

  const groups = document.querySelectorAll('.reveal-group');
  if (!groups.length) return;

  function setStaggerDelays(container) {
    const reveals = container.querySelectorAll('.reveal:not(.reveal--timeline)');
    const timelineReveals = container.querySelectorAll('.reveal.reveal--timeline');
    let delay = 0;

    reveals.forEach(function (el) {
      el.style.animationDelay = delay + 'ms';
      delay += STAGGER_MS;
    });

    timelineReveals.forEach(function (el, i) {
      el.style.animationDelay = (delay + i * TIMELINE_STAGGER_MS) + 'ms';
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const group = entry.target;
      if (group._revealed) return;
      group._revealed = true;
      group.classList.add('reveal-group--visible');
      setStaggerDelays(group);
    });
  }, { threshold: THRESHOLD });

  groups.forEach(function (g) {
    observer.observe(g);
  });
})();
