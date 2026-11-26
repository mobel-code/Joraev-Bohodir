/* =====================================================================
 *  main.js — renders the page from window.SITE (js/content.js) and runs
 *  all interactions. No dependencies.
 *
 *   • language dropdown (UZ / RU / EN) with a smooth content swap
 *   • light/dark theme with a circular reveal (View Transitions API)
 *   • liquid-glass navbar: sliding droplet, pointer light, refraction
 *   • career timeline that moves sideways as the page scrolls down
 *   • publications carousel (drag, swipe, arrows, filters)
 *   • cards that lift slightly on hover
 *   • contact cards (phone, Telegram, Facebook, Instagram)
 * ===================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE;
  const LANGS = ["uz", "ru", "en"];
  const HTML_LANG = { uz: "uz-Latn", ru: "ru", en: "en" };
  const OG_LOCALE = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };
  const root = document.documentElement;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ------------------------------ State ------------------------------ */
  let lang = pickLang();
  let pubFilter = "all";
  let countersDone = false;

  function pickLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem("bj-lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) {}
    return SITE.defaultLang || "uz";
  }

  /* Resolve a value that is either a string or { uz, ru, en } */
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en ?? "" : v ?? "");
  const at = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const ui = (path) => at(SITE.ui[lang], path) ?? "";
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const q = (s) => (lang === "en" ? `“${s}”` : `«${s}»`); // language-appropriate quotes

  /* ------------------------------ Icons ------------------------------ */
  const ICON = {
    osteo: '<svg viewBox="0 0 24 24"><path d="M7 3c-1.7 0-3 1.3-3 3 0 1 .5 1.9 1.3 2.5L8 11v2l-2.7 2.5A3 3 0 1 0 9.5 19l1.5-2h2l1.5 2a3 3 0 1 0 4.2-3.5L16 13v-2l2.7-2.5A3 3 0 1 0 14.5 5L13 7h-2L9.5 5C9 3.8 8.1 3 7 3z"/></svg>',
    inflam: '<svg viewBox="0 0 24 24"><path d="M12 3c3.5 4 6 7.2 6 10.5A6 6 0 0 1 6 13.5C6 10.2 8.5 7 12 3z"/><path d="M12 11c1.5 1.7 2.5 3 2.5 4.3a2.5 2.5 0 0 1-5 0c0-1.3 1-2.6 2.5-4.3z"/></svg>',
    sorbent: '<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v5.5L5 18a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3L14 8.5V3"/><path d="M7.5 14h9"/></svg>',
    rehab: '<svg viewBox="0 0 24 24"><path d="M3 12h3l2.5-6 4 12 2.5-6H21"/></svg>',
    stats: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    teach: '<svg viewBox="0 0 24 24"><path d="m2 9 10-5 10 5-10 5L2 9z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24"><path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.8-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.6 13.1 1.9 11.6c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    building: '<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 11h.01M15 11h.01"/></svg>',
    cap: '<svg viewBox="0 0 24 24"><path d="m2 9 10-5 10 5-10 5L2 9z"/><path d="M6 11v5c2 2 10 2 12 0v-5"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>',
    award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="m8.5 14 -1.5 8 5-3 5 3-1.5-8"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    doc: '<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M2 5h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2zM22 5h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/></svg>',
    image: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5 10 17l9-10"/></svg>',
    bolt: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  };

  /* =============================== RENDER =============================== */
  function render() {
    root.lang = HTML_LANG[lang];

    $$("[data-i18n]").forEach((el) => (el.textContent = ui(el.dataset.i18n)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", ui(el.dataset.i18nAria)));
    $$("[data-bind]").forEach((el) => (el.textContent = t(at(SITE, el.dataset.bind))));
    $$("[data-bind-alt]").forEach((el) => (el.alt = t(at(SITE, el.dataset.bindAlt))));

    document.title = ui("metaTitle");
    setMeta('meta[name="description"]', ui("metaDescription"));
    setMeta('meta[property="og:title"]', ui("metaTitle"));
    setMeta('meta[property="og:description"]', t(SITE.person.tagline));
    setMeta('meta[property="og:locale"]', OG_LOCALE[lang]);

    renderLangSwitch();
    renderThemeLabel();
    renderBadges();
    renderStats();
    renderAbout();
    renderExpertise();
    renderCases();
    renderTimeline();
    renderResearch();
    renderPubFilters();
    renderPubs();
    renderEducation();
    renderContacts();
    renderPdfButton();

    observeReveals();
    bindLive();
    layoutCareer();
    updateCarousel();
    requestAnimationFrame(fitNav);
  }

  function setMeta(sel, value) {
    const el = $(sel);
    if (el) el.setAttribute("content", value);
  }

  /* ---------------- Language dropdown ---------------- */
  function renderLangSwitch() {
    $$("[data-lang-switch]").forEach((box) => {
      box.classList.remove("is-open");
      box.innerHTML = `
        <button class="lang__btn" type="button" aria-haspopup="menu" aria-expanded="false"
          aria-label="${esc(ui("language"))}: ${esc(SITE.ui[lang].langName)}">
          ${ICON.globe}<span>${lang.toUpperCase()}</span>${ICON.chev}
        </button>
        <div class="lang__menu" role="menu">
          ${LANGS.map(
            (l, i) => `<button class="lang__item" type="button" role="menuitemradio" tabindex="-1" style="--i:${i}"
              aria-checked="${l === lang}" data-lang="${l}" lang="${HTML_LANG[l]}">
              <span>${esc(SITE.ui[l].langName)}</span><b>${l.toUpperCase()}</b></button>`
          ).join("")}
        </div>`;
    });
  }

  function openLang(box, open) {
    $$("[data-lang-switch]").forEach((b) => {
      const on = b === box && open;
      b.classList.toggle("is-open", on);
      $(".lang__btn", b).setAttribute("aria-expanded", String(on));
      $$(".lang__item", b).forEach((i) => (i.tabIndex = on ? 0 : -1));
    });
    if (open) setTimeout(() => $('.lang__item[aria-checked="true"]', box)?.focus(), 80);
  }

  function setLang(next) {
    if (!LANGS.includes(next)) return;
    $$("[data-lang-switch]").forEach((b) => openLang(b, false));
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem("bj-lang", lang); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);

    if (reduceMotion) return render();
    if (modal.open) closePub();
    document.body.classList.add("is-switching");
    setTimeout(() => {
      render();
      requestAnimationFrame(() => document.body.classList.remove("is-switching"));
    }, 260);
  }

  /* ---------------- Theme (circular reveal) ---------------- */
  function renderThemeLabel() {
    const dark = root.dataset.theme === "dark";
    const btn = $("#themeToggle");
    const label = dark ? ui("themeLight") : ui("themeDark");
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }

  function toggleTheme() {
    const apply = () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("bj-theme", root.dataset.theme); } catch (e) {}
      renderThemeLabel();
    };
    if (reduceMotion) return apply();

    if (!document.startViewTransition) {
      root.classList.add("theme-fade");
      apply();
      setTimeout(() => root.classList.remove("theme-fade"), 600);
      return;
    }
    const r = $("#themeToggle").getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const tr = document.startViewTransition(apply);
    tr.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 750, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  }

  /* ---------------- Hero, stats, about ---------------- */
  function renderBadges() {
    $("#heroBadges").innerHTML = SITE.person.badges.map((b) => `<li>${esc(t(b))}</li>`).join("");
  }

  function statValues() {
    const pubs = SITE.publications;
    return [
      { key: "publications", icon: "doc", value: pubs.length },
      { key: "articles", icon: "book", value: pubs.filter((p) => p.type === "article").length },
      { key: "years", icon: "clock", value: new Date().getFullYear() - SITE.person.careerStartYear, plus: true },
      { key: "talks", icon: "mic", value: pubs.filter((p) => p.type === "talk").length },
    ];
  }

  function renderStats() {
    $("#stats").innerHTML = statValues()
      .map(
        (s, i) => `<li class="stat live reveal" style="--d:${i * 0.08}s">
          <span class="stat__icon" aria-hidden="true">${ICON[s.icon]}</span>
          <div class="stat__num"><span data-count="${s.value}">${countersDone || reduceMotion ? s.value : 0}</span>${s.plus ? "<sup>+</sup>" : ""}</div>
          <div class="stat__label">${esc(ui("stats." + s.key))}</div>
        </li>`
      )
      .join("");
  }

  function runCounters() {
    if (countersDone) return;
    countersDone = true;
    $$("[data-count]").forEach((el) => {
      const target = +el.dataset.count;
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / 1400);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function renderAbout() {
    $("#aboutBody").innerHTML = (SITE.about[lang] || []).map((p) => `<p>${rich(p)}</p>`).join("");
  }

  function renderExpertise() {
    $("#expertiseCards").innerHTML = SITE.expertise
      .map(
        (e, i) => `<article class="card live reveal" style="--d:${(i % 3) * 0.08}s; --sd:${i * 0.9}s">
          <span class="card__num" aria-hidden="true">0${i + 1}</span>
          <div class="card__icon" aria-hidden="true">${ICON[e.icon] || ICON.cap}</div>
          <h3>${esc(t(e.title))}</h3>
          <p>${esc(t(e.text))}</p>
        </article>`
      )
      .join("");
  }


  /* ---------------- Clinical cases: carousel ----------------
     Slides sit in a horizontal track; the active one is centred and the
     neighbours peek in at the edges (click them to switch). Change cases by
     dragging/swiping, the side arrows, the dots, ←/→ or a trackpad swipe. */
  let caseIdx = 0;

  function renderCases() {
    const list = SITE.cases || [];
    caseIdx = Math.min(caseIdx, Math.max(0, list.length - 1));
    const fig = (src, label, alt) =>
      src
        ? `<figure class="case__fig"><span class="case__label">${esc(label)}</span><div class="case__img"><img src="${esc(src)}" alt="${alt}" loading="lazy" draggable="false"></div></figure>`
        : `<figure class="case__fig"><span class="case__label">${esc(label)}</span><div class="case__img case__img--ph">${ICON.image}<span>${esc(ui("cases.photoSoon"))}</span></div></figure>`;
    const flow = (key, txt, cls = "") =>
      txt ? `<li class="case__flow-item ${cls}"><span class="case__flow-k">${esc(ui("cases." + key))}</span><p>${rich(t(txt))}</p></li>` : "";

    const slides = list
      .map((c, i) => {
        const alt = esc(t(c.title));
        const pair = c.before || c.after || !c.photo;
        const left = pair ? fig(c.before, ui("cases.before"), `${alt} — ${esc(ui("cases.before"))}`) : fig(c.photo, "", alt);
        const right = pair ? fig(c.after, ui("cases.after"), `${alt} — ${esc(ui("cases.after"))}`) : "";
        // mark the active slide right away (no dimmed flash before goCase runs)
        return `<article class="case-slide${i === caseIdx ? " is-active" : ""}${c.sample ? " case--sample" : ""}" data-i="${i}" role="group"
            aria-roledescription="slide" aria-label="${i + 1} / ${list.length}" aria-hidden="${i !== caseIdx}">
          ${left}
          <div class="case__story">
            <div class="case__tags">
              ${c.category ? `<span class="case__cat">${esc(t(c.category))}</span>` : ""}
              ${c.year ? `<span class="case__year">${esc(c.year)}</span>` : ""}
              ${c.sample ? `<span class="case__sample">${esc(ui("cases.sample"))}</span>` : ""}
            </div>
            <h3 class="case__title">${esc(t(c.title))}</h3>
            ${c.patient || c.cause ? `<ul class="case__facts">
              ${c.patient ? `<li>${ICON.user}<span><small>${esc(ui("cases.patient"))}</small>${esc(t(c.patient))}</span></li>` : ""}
              ${c.cause ? `<li>${ICON.bolt}<span><small>${esc(ui("cases.cause"))}</small>${esc(t(c.cause))}</span></li>` : ""}
            </ul>` : ""}
            <ol class="case__flow">
              ${flow("complaints", c.complaints)}
              ${flow("diagnosis", c.diagnosis, "case__flow-item--dx")}
              ${flow("problem", c.problem)}
              ${flow("treatment", c.treatment)}
            </ol>
            ${c.result ? `<div class="case__result">
              <span class="case__result-ico" aria-hidden="true">${ICON.check}</span>
              <div><span class="case__result-k">${esc(ui("cases.result"))}</span><p>${rich(t(c.result))}</p></div>
            </div>` : ""}
            ${c.duration ? `<p class="case__dur">${ICON.clock}${esc(ui("cases.duration"))}: <b>${esc(t(c.duration))}</b></p>` : ""}
            ${c.source ? `<a class="case__ig" href="${esc(c.source)}" target="_blank" rel="noopener">
              <span class="case__ig-ico" aria-hidden="true">${ICON.instagram}</span>${esc(ui("cases.instagram"))}${ICON.arrow}</a>` : ""}
          </div>
          ${right}
        </article>`;
      })
      .join("");

    $("#casesList").innerHTML = list.length
      ? `<div class="case-viewport" tabindex="0" aria-label="${esc(ui("cases.title"))}">
          <div class="case-track">${slides}</div>
          <button class="case-arrow case-arrow--prev" type="button" data-case-step="-1" aria-label="${esc(ui("cases.prevCase"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button>
          <button class="case-arrow case-arrow--next" type="button" data-case-step="1" aria-label="${esc(ui("cases.nextCase"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>
        </div>
        <div class="case-nav">
          <div class="case-dots">${list.map((_, i) => `<button type="button" class="case-dot" data-case-go="${i}" aria-label="${i + 1}"></button>`).join("")}</div>
          <span class="carousel-count case-count"></span>
        </div>`
      : "";
    requestAnimationFrame(() => goCase(caseIdx, true));
  }

  // centre slide n; `instant` skips the animation (first render / resize)
  function goCase(n, instant) {
    const slides = $$(".case-slide");
    if (!slides.length) return;
    caseIdx = (n + slides.length) % slides.length; // wraps around
    const track = $(".case-track");
    const vp = $(".case-viewport");
    const s = slides[caseIdx];
    const x = s.offsetLeft - (vp.clientWidth - s.offsetWidth) / 2;
    track.style.transition = instant ? "none" : "";
    track.style.transform = `translate3d(${-x}px,0,0)`;
    track.dataset.x = x;
    slides.forEach((el, i) => {
      const on = i === caseIdx;
      el.classList.toggle("is-active", on);
      el.setAttribute("aria-hidden", String(!on));
      [...el.children].forEach((ch) => (on ? ch.removeAttribute("inert") : ch.setAttribute("inert", "")));
    });
    $$(".case-dot").forEach((d, i) => d.classList.toggle("is-active", i === caseIdx));
    $(".case-count").textContent = `${String(caseIdx + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }

  function initCases() {
    const box = $("#casesList");
    box.addEventListener("click", (e) => {
      if (dragged) { e.preventDefault(); e.stopPropagation(); dragged = false; return; }
      const s = e.target.closest("[data-case-step]");
      if (s) return goCase(caseIdx + +s.dataset.caseStep);
      const d = e.target.closest("[data-case-go]");
      if (d) return goCase(+d.dataset.caseGo);
      const peek = e.target.closest(".case-slide:not(.is-active)"); // click a neighbour
      if (peek) goCase(+peek.dataset.i);
    }, true);
    box.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goCase(caseIdx + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goCase(caseIdx - 1); }
    });

    // drag / swipe: the track follows the pointer, then snaps
    let x0 = null, dx = 0, dragged = false, pid = null;
    box.addEventListener("pointerdown", (e) => {
      if (!e.target.closest(".case-track") || e.button > 0) return;
      x0 = e.clientX; dx = 0; dragged = false; pid = e.pointerId;
    });
    box.addEventListener("pointermove", (e) => {
      if (x0 === null || e.pointerId !== pid) return;
      dx = e.clientX - x0;
      if (!dragged && Math.abs(dx) > 8) {
        dragged = true;
        box.classList.add("is-dragging");
        try { box.setPointerCapture(pid); } catch (err) {}
      }
      if (dragged) {
        const track = $(".case-track");
        track.style.transition = "none";
        track.style.transform = `translate3d(${-(+track.dataset.x) + dx}px,0,0)`;
      }
    });
    const end = () => {
      if (x0 === null) return;
      x0 = null;
      box.classList.remove("is-dragging");
      if (!dragged) return;
      const w = $(".case-slide.is-active")?.offsetWidth || 600;
      const steps = Math.abs(dx) > Math.min(90, w * 0.15) ? (dx < 0 ? 1 : -1) : 0;
      goCase(caseIdx + steps);
      setTimeout(() => (dragged = false), 0);
    };
    box.addEventListener("pointerup", end);
    box.addEventListener("pointercancel", end);

    // two-finger trackpad swipe
    let wheelLock = 0;
    box.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 25) return;
      e.preventDefault();
      const now = Date.now();
      if (now < wheelLock) return;
      wheelLock = now + 600;
      goCase(caseIdx + (e.deltaX > 0 ? 1 : -1));
    }, { passive: false });

    addEventListener("resize", () => goCase(caseIdx, true));
  }

  /* ---------------- Loading screen ---------------- */
  function initLoader() {
    const el = $("#loader");
    if (!el) return;
    const t0 = performance.now();
    const minShow = reduceMotion ? 0 : 2500; // lets the tooth/syringe animation finish
    const hide = () => {
      const wait = Math.max(0, minShow - (performance.now() - t0));
      setTimeout(() => {
        el.classList.add("is-done");
        setTimeout(() => el.remove(), 700);
      }, wait);
    };
    if (document.readyState === "complete") hide();
    else addEventListener("load", hide, { once: true });
    setTimeout(hide, 6000); // never block the page for long
  }

  /* ---------------- Career timeline (horizontal) ---------------- */
  const dateText = (item) => {
    const end = item.end === null ? ui("present") : t(item.end);
    return end ? `${t(item.start)} — ${end}` : t(item.start);
  };

  function renderTimeline() {
    $("#timeline").innerHTML = SITE.timeline
      .map((item) => {
        const cls = ["tl", item.current && "tl--current", item.edu && "tl--edu"].filter(Boolean).join(" ");
        const year = String(t(item.start)).match(/\d{4}/)?.[0] || "";
        const tag = item.current
          ? `<span class="tl__tag">${esc(ui("present"))}</span>`
          : item.edu ? `<span class="tl__tag">${esc(ui("education"))}</span>` : "";
        return `<li class="${cls}">
          <span class="tl__dot" aria-hidden="true"></span>
          <span class="tl__stem" aria-hidden="true"></span>
          <span class="tl__year" aria-hidden="true">${year}</span>
          <div class="tl__card">
            <div class="tl__date">${esc(dateText(item))}</div>
            <div class="tl__role">${esc(t(item.role))}</div>
            <div class="tl__org">${esc(t(item.org))}</div>
            ${tag}
          </div>
        </li>`;
      })
      .join("");
    careerFocus = -1;
  }

  /* Scroll-driven motion. The section gets extra height equal to how far the
     track must travel; while its inner block is sticky, scroll progress maps
     to a horizontal translate (smoothed with a lerp). */
  const career = $("#career");
  const track = $("#timeline");
  const careerViewport = $("#careerViewport");
  let careerTravel = 0, careerSpan = 0, careerFirst = 0;
  let careerCur = 0, careerTarget = 0, careerRaf = 0, careerFocus = -1;
  let careerStatic = false;

  function layoutCareer() {
    const items = $$(".tl", track);
    if (!items.length) return;
    track.style.transform = "";

    // Track height = room for the tallest card above AND below the line
    // (card + 36px stem gap on each side), so no card is ever cut off.
    const tallest = Math.max(...$$(".tl__card", track).map((el) => el.offsetHeight));
    const trackH = Math.max(360, 2 * (tallest + 40) + 12);
    track.style.height = `${trackH}px`;

    // Pin only if the header + track fit the screen; otherwise plain horizontal scroll
    const pin = $(".career__pin");
    const needed = trackH + $(".career__head").offsetHeight + 44 + parseFloat(getComputedStyle(pin).paddingTop); // 44 = gaps + progress bar
    careerStatic = reduceMotion || needed > innerHeight;
    career.classList.toggle("is-static", careerStatic);

    careerFirst = items[0].offsetLeft;
    careerSpan = items[items.length - 1].offsetLeft - careerFirst;
    careerTravel = Math.max(0, track.scrollWidth - careerViewport.clientWidth);

    if (careerStatic) {
      career.style.height = "";
      items.forEach((el) => el.classList.add("is-past"));
      track.style.setProperty("--fill", careerSpan);
      setCareerNow(0);
      return;
    }
    // Pinned height + scroll distance (scroll 1px ⇒ line grows ~1px)
    career.style.height = `${innerHeight + careerSpan}px`;
    careerTarget = careerProgress();
    careerCur = careerTarget;
    paintCareer(true);
  }

  function careerProgress() {
    if (!careerSpan) return 0;
    const top = career.getBoundingClientRect().top + scrollY;
    return clamp((scrollY - top) / careerSpan, 0, 1);
  }

  function paintCareer(force) {
    // The gold line grows with scroll; the track slides so the line's tip
    // stays at ~38% of the screen width (the "now" point).
    const fill = careerCur * careerSpan;
    const vw = careerViewport.clientWidth;
    let shift;
    if (vw < 640) {
      // Phones: turn card by card. The current card rests at the left edge for
      // most of its stretch of scrolling, then glides smoothly to the next one.
      const n = $$(".tl", track).length;
      const gap = careerSpan / Math.max(1, n - 1);
      const idx = fill / gap, base = Math.floor(idx), frac = idx - base;
      const t = clamp((frac - 0.55) / 0.45, 0, 1);
      const eased = t * t * (3 - 2 * t); // smoothstep
      shift = clamp(careerFirst + (base + eased) * gap - 20, 0, careerTravel);
    } else {
      // Larger screens: continuous motion, the line's tip stays at ~38% width
      shift = clamp(careerFirst + fill - vw * 0.38, 0, careerTravel);
    }
    track.style.transform = `translate3d(${-shift}px,0,0)`;
    track.style.setProperty("--fill", fill.toFixed(1));
    $("#careerBar").style.setProperty("--p", careerCur.toFixed(4));

    let focus = 0;
    $$(".tl", track).forEach((el, i) => {
      const past = el.offsetLeft - careerFirst <= fill + 2;
      el.classList.toggle("is-past", past);
      if (past) focus = i;
    });
    if (focus !== careerFocus || force) {
      $$(".tl", track).forEach((el, i) => el.classList.toggle("is-focus", i === focus));
      setCareerNow(focus, !force);
      careerFocus = focus;
    }
  }

  function setCareerNow(i, animate) {
    const el = $("#careerNow");
    el.textContent = dateText(SITE.timeline[i]);
    if (animate) {
      el.classList.remove("is-swap");
      void el.offsetWidth; // restart animation
      el.classList.add("is-swap");
    }
  }

  let careerLast = 0;
  function careerLoop(now) {
    // frame-rate independent easing (same feel at 30, 60 or 120 fps)
    const dt = Math.min(100, now - (careerLast || now - 16.7));
    careerLast = now;
    careerCur += (careerTarget - careerCur) * (1 - Math.pow(0.92, dt / 16.7)); // smooth glide
    if (Math.abs(careerTarget - careerCur) * careerSpan < 0.5) careerCur = careerTarget;
    paintCareer(false);
    careerRaf = careerCur !== careerTarget ? requestAnimationFrame(careerLoop) : 0;
    if (!careerRaf) careerLast = 0;
  }

  function onCareerScroll() {
    if (careerStatic) return;
    const p = careerProgress();
    careerTarget = p > 0.997 ? 1 : p < 0.003 ? 0 : p;
    if (!careerRaf) careerRaf = requestAnimationFrame(careerLoop);
  }

  /* ---------------- Research ---------------- */
  function renderResearch() {
    const r = SITE.research;
    $("#researchBody").innerHTML = `
      <article class="research__main live reveal">
        <p class="research__label">${esc(ui("dissertation"))}</p>
        <h3 class="research__topic">${esc(q(t(r.topic)))}</h3>
        <ul class="research__meta">
          <li>${ICON.cap}<span>${esc(t(r.degree))}</span></li>
          <li>${ICON.building}<span>${esc(t(r.institution))}</span></li>
          <li>${ICON.user}<span>${esc(t(r.secretary))}</span></li>
        </ul>
      </article>
      <aside class="research__themes glass live reveal" style="--d:.1s">
        <h3>${esc(ui("themesTitle"))}</h3>
        <ul>${r.themes.map((th, i) => `<li><b>0${i + 1}</b><span>${esc(t(th))}</span></li>`).join("")}</ul>
      </aside>`;
  }

  /* ---------------- Publications carousel ---------------- */
  const TYPES = ["all", "article", "thesis", "talk"];
  let pubView = []; // publications currently shown (after filter + sort)
  const scroller = $("#pubScroller");

  function renderPubFilters() {
    const count = (type) => (type === "all" ? SITE.publications.length : SITE.publications.filter((p) => p.type === type).length);
    $("#pubFilters").innerHTML = TYPES.map(
      (type) => `<button class="chip" type="button" role="tab" aria-selected="${type === pubFilter}" data-filter="${type}">
        ${esc(ui("filters." + type))}<span class="chip__count">${count(type)}</span>
      </button>`
    ).join("");
  }

  function renderPubs() {
    const list = SITE.publications
      .map((p, i) => ({ ...p, _i: i }))
      .filter((p) => pubFilter === "all" || p.type === pubFilter)
      .sort((a, b) => b.year - a.year || a._i - b._i);

    pubView = list;
    const ul = $("#pubList");
    ul.classList.toggle("is-single-row", list.length <= 3);
    ul.innerHTML = list
      .map((p, i) => {
        const country = p.country ? t(SITE.countries[p.country]) : "";
        const where = [t(p.place), t(p.date)].filter(Boolean).join(", ");
        const meta = [];
        if (p.pages) meta.push(`${esc(ui("pages"))} ${esc(p.pages)}`);
        if (p.ids) meta.push(esc(p.ids));
        if (p.doi) meta.push(`<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI ${esc(p.doi)}</a>`);
        if (p.url) meta.push(`<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.url.replace(/^https?:\/\/(www\.)?|\/$/g, ""))}</a>`);
        if (p.coauthors) meta.push(`${esc(ui("coauthors"))}: ${esc(p.coauthors)}`);
        return `<li class="pub live" style="animation-delay:${Math.min(i, 8) * 0.05}s" data-idx="${i}"
          role="button" tabindex="0" aria-haspopup="dialog" aria-label="${esc(ui("details.more"))}: ${esc(t(p.title))}">
          <div class="pub__top">
            <span class="pub__type" data-type="${p.type}">${esc(ui("types." + p.type))}</span>
            <span class="pub__year">${p.year}</span>
            ${country ? `<span class="pub__country">· ${esc(country)}</span>` : ""}
          </div>
          <h3 class="pub__title">${esc(t(p.title))}</h3>
          <p class="pub__venue">${esc(t(p.venue))}${where ? ` — ${esc(where)}` : ""}</p>
          ${meta.length ? `<div class="pub__meta">${meta.map((m) => `<span>${m}</span>`).join("")}</div>` : ""}
          <span class="pub__more">${esc(ui("details.more"))}${ICON.arrowR}</span>
        </li>`;
      })
      .join("");
  }

  function updateCarousel() {
    const max = scroller.scrollWidth - scroller.clientWidth;
    const pages = Math.max(1, Math.ceil(scroller.scrollWidth / scroller.clientWidth - 0.05));
    const page = max <= 0 ? 1 : clamp(Math.round((scroller.scrollLeft / max) * (pages - 1)) + 1, 1, pages);
    $("#pubCount").textContent = `${String(page).padStart(2, "0")} / ${String(pages).padStart(2, "0")}`;
    $("#pubPrev").disabled = scroller.scrollLeft <= 2;
    $("#pubNext").disabled = scroller.scrollLeft >= max - 2;
    const bar = $("#pubBar");
    const share = max <= 0 ? 1 : scroller.clientWidth / scroller.scrollWidth;
    bar.style.width = `${share * 100}%`;
    bar.style.transform = `translateX(${max <= 0 ? 0 : (scroller.scrollLeft / max) * ((1 - share) / share) * 100}%)`;
  }

  function scrollPubs(dir) {
    scroller.scrollBy({ left: dir * scroller.clientWidth * 0.85, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function initCarousel() {
    scroller.addEventListener("scroll", () => requestAnimationFrame(updateCarousel), { passive: true });
    $("#pubPrev").addEventListener("click", () => scrollPubs(-1));
    $("#pubNext").addEventListener("click", () => scrollPubs(1));

    // Mouse drag to scroll (touch already scrolls natively)
    let down = false, moved = false, startX = 0, startLeft = 0;
    scroller.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true; moved = false; startX = e.clientX; startLeft = scroller.scrollLeft;
    });
    addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) { moved = true; scroller.classList.add("is-dragging"); }
      if (moved) scroller.scrollLeft = startLeft - dx;
    });
    addEventListener("pointerup", () => {
      if (!down) return;
      down = false;
      if (moved) {
        // let snapping settle smoothly after the drag
        requestAnimationFrame(() => scroller.classList.remove("is-dragging"));
      }
    });
    // swallow the click that ends a drag
    scroller.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  }

  function renderPdfButton() {
    const btn = $("#pdfBtn");
    if (SITE.publicationsPdf) {
      btn.href = SITE.publicationsPdf;
      btn.setAttribute("download", "");
      btn.removeAttribute("aria-disabled");
      btn.innerHTML = `${ICON.download}<span>${esc(ui("downloadPdf"))}</span>`;
    } else {
      btn.href = "#publications";
      btn.setAttribute("aria-disabled", "true");
      btn.innerHTML = `${ICON.download}<span>${esc(ui("downloadPdf"))}</span><small>· ${esc(ui("soon"))}</small>`;
    }
  }

  /* ---------------- Education & affiliations ---------------- */
  function renderEducation() {
    const steps = SITE.education
      .map(
        (e, i) => `<li class="edu-step live reveal" style="--d:${i * 0.1}s">
          <div class="edu-step__top">
            <span class="edu-step__icon" aria-hidden="true">${i === SITE.education.length - 1 ? ICON.award : ICON.cap}</span>
            <span class="edu-step__num" aria-hidden="true">0${i + 1}</span>
          </div>
          <div class="edu-step__years">${esc(t(e.years))}</div>
          <div class="edu-step__degree">${esc(t(e.detail))}</div>
          <div class="edu-step__name">${esc(t(e.name))}</div>
          ${e.city ? `<div class="edu-step__city">${ICON.pin}${esc(t(e.city))}</div>` : ""}
        </li>`
      )
      .join("");

    const orgs = SITE.affiliations
      .map(
        (a, i) => `<li class="org live reveal${a.current ? " org--current" : ""}" style="--d:${i * 0.1}s">
          <div class="org__logo" aria-hidden="true">${esc(a.logo || "")}</div>
          <div class="org__body">
            <div class="org__name">${esc(t(a.name))}</div>
            <div class="org__role">${esc(t(a.detail))}</div>
          </div>
          ${a.years ? `<div class="org__years">${a.current ? '<span class="org__live" aria-hidden="true"></span>' : ""}${esc(t(a.years))}</div>` : ""}
        </li>`
      )
      .join("");

    $("#eduBody").innerHTML = `
      <div class="edu__block">
        <h3 class="edu__title">${ICON.cap}${esc(ui("education"))}</h3>
        <ol class="edu-steps">${steps}</ol>
      </div>
      <div class="edu__block">
        <h3 class="edu__title">${ICON.building}${esc(ui("affiliations"))}</h3>
        <ul class="orgs">${orgs}</ul>
      </div>`;
  }

  /* ---------------- Contact cards ---------------- */
  function renderContacts() {
    const c = SITE.contacts;
    const cards = [
      c.phone && { key: "phone", href: `tel:${c.phone}`, value: c.phoneDisplay || c.phone },
      c.telegram && { key: "telegram", href: `https://t.me/${c.telegram}`, value: "@" + c.telegram, ext: true },
      c.facebook && { key: "facebook", href: c.facebook, value: t(SITE.person.shortName), ext: true },
      c.instagram && { key: "instagram", href: `https://www.instagram.com/${c.instagram}/`, value: "@" + c.instagram, ext: true },
      c.email && { key: "email", href: `mailto:${c.email}`, value: c.email },
    ].filter(Boolean);

    $("#contactList").innerHTML = cards
      .map(
        (k, i) => `<li class="reveal" style="--d:${i * 0.08}s">
          <a class="contact-card live" data-kind="${k.key}" href="${esc(k.href)}"${k.ext ? ' target="_blank" rel="noopener"' : ""}>
            <span class="contact-card__ico" aria-hidden="true">${ICON[k.key === "email" ? "mail" : k.key]}</span>
            <span class="contact-card__k">${esc(ui("contactLabels." + k.key))}</span>
            <span class="contact-card__v">${esc(k.value)}</span>
            <span class="contact-card__go">${esc(ui("contactActions." + k.key))}${ICON.arrow}</span>
          </a>
        </li>`
      )
      .join("");
  }


  /* ---------------- Publication details (modal) ---------------- */
  const modal = $("#pubModal");
  let modalIdx = 0;

  // Juraev is an author of every item; add him when the co-author list omits him
  const authorsOf = (p) => {
    const list = (p.coauthors || "").split(",").map((x) => x.trim()).filter(Boolean);
    if (!list.some((a) => /juraev/i.test(a))) list.unshift("Juraev B.N.");
    return list;
  };

  function fillModal() {
    const p = pubView[modalIdx];
    if (!p) return;
    const country = p.country ? t(SITE.countries[p.country]) : "";
    $("#pubModalTags").innerHTML = `
      <span class="pub__type" data-type="${p.type}">${esc(ui("types." + p.type))}</span>
      <span class="pub__year">${p.year}</span>`;
    $("#pubModalTitle").textContent = t(p.title);

    const where = [t(p.place), t(p.date) ? `${t(p.date)} ${p.year}` : ""].filter(Boolean).join(", ");
    const rows = [
      [ui("details.venue"), esc(t(p.venue))],
      where && [ui("details.where"), esc(where)],
      country && [ui("details.country"), esc(country)],
      p.pages && [ui("details.pages"), esc(p.pages)],
      (p.ids || p.doi) && [ui("details.ids"), [p.ids, p.doi && `DOI ${p.doi}`].filter(Boolean).map(esc).join("<br>")],
      [ui("details.authors"), `<span class="authors">${authorsOf(p)
        .map((a) => `<span class="author${/juraev/i.test(a) ? " author--me" : ""}">${esc(a)}</span>`)
        .join("")}</span>`],
    ].filter(Boolean);
    $("#pubModalFacts").innerHTML = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join("");

    const actions = [];
    if (p.doi) actions.push(`<a class="btn btn--gold btn--sm" href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">${esc(ui("details.doi"))}${ICON.arrow}</a>`);
    if (p.url) actions.push(`<a class="btn btn--outline btn--sm" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(ui("details.site"))}${ICON.arrow}</a>`);
    $("#pubModalActions").innerHTML = actions.join("");
    $("#pubModalActions").hidden = !actions.length;

    $("#pubModalCount").textContent = `${modalIdx + 1} / ${pubView.length}`; // neutral in every language
    $("#pubModalPrev").disabled = modalIdx === 0;
    $("#pubModalNext").disabled = modalIdx === pubView.length - 1;

    const card = $(".pub-modal__card", modal);
    card.classList.remove("is-swap");
    void card.offsetWidth;
    card.classList.add("is-swap");
  }

  function openPub(i) {
    modalIdx = i;
    fillModal();
    modal.append($(".cursor")); // keep the custom cursor above the top layer
    modal.showModal();
    root.classList.add("modal-open");
    $("#pubModalClose").focus();
  }

  function closePub() {
    if (!modal.open || modal.classList.contains("is-closing")) return;
    modal.classList.add("is-closing");
    setTimeout(() => {
      modal.classList.remove("is-closing");
      modal.close();
      root.classList.remove("modal-open");
      document.body.append($(".cursor"));
      $(`.pub[data-idx="${modalIdx}"]`)?.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 240);
  }

  function stepPub(d) {
    const n = modalIdx + d;
    if (n < 0 || n >= pubView.length) return;
    modalIdx = n;
    fillModal();
  }

  function initModal() {
    $("#pubModalClose").addEventListener("click", closePub);
    $("#pubModalPrev").addEventListener("click", () => stepPub(-1));
    $("#pubModalNext").addEventListener("click", () => stepPub(1));
    modal.addEventListener("cancel", (e) => { e.preventDefault(); closePub(); }); // Esc
    modal.addEventListener("click", (e) => { if (e.target === modal) closePub(); }); // backdrop
    modal.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") stepPub(-1);
      if (e.key === "ArrowRight") stepPub(1);
    });
  }

  /* ---------------- Custom cursor ----------------
     The dot is the real pointer position; the ring eases after it. */
  function initCursor() {
    if (!finePointer) return;
    const el = $(".cursor");
    const dot = $(".cursor__dot", el);
    const ring = $(".cursor__ring", el);
    root.classList.add("has-cursor");
    let x = -100, y = -100, rx = -100, ry = -100, last = 0, raf = 0;

    const loop = (now) => {
      const dt = Math.min(64, now - (last || now - 16.7));
      last = now;
      const k = reduceMotion ? 1 : 1 - Math.pow(0.8, dt / 16.7);
      rx += (x - rx) * k;
      ry += (y - ry) * k;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
      if (!raf) last = 0;
    };
    addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      el.classList.add("is-visible");
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    document.addEventListener("pointerover", (e) => {
      const tgt = e.target.closest?.("a, button, [role='button'], .chip, label, input, textarea, .lang__item");
      el.classList.toggle("is-hover", !!tgt);
      el.classList.toggle("is-drag", !tgt && !!e.target.closest?.(".pubs-scroller"));
    });
    document.addEventListener("pointerdown", () => el.classList.add("is-down"));
    document.addEventListener("pointerup", () => el.classList.remove("is-down"));
    document.documentElement.addEventListener("pointerleave", () => el.classList.remove("is-visible"));
  }

  /* ======================== HOVER STATE FOR CARDS ======================== */
  function bindLive() {
    if (!finePointer) return;
    $$(".live:not([data-live])").forEach((el) => {
      el.dataset.live = "1";
      el.addEventListener("pointerenter", () => el.classList.add("is-hover"));
      el.addEventListener("pointerleave", () => el.classList.remove("is-hover"));
    });
  }

  /* ======================= NAV: liquid glass ======================= */
  const nav = $("#nav");
  const navGlass = $("#navGlass");
  const navLinks = $("#navLinks");
  const blob = $("#navBlob");
  let blobTimer = 0;

  const activeLink = () => $("a.is-active", navLinks);

  function moveBlob(link, jelly = true) {
    if (!link || getComputedStyle(blob).display === "none") {
      blob.classList.remove("is-on");
      return;
    }
    const prev = parseFloat(blob.style.getPropertyValue("--bx")) || 0;
    blob.style.setProperty("--bx", `${link.offsetLeft}px`);
    blob.style.width = `${link.offsetWidth}px`;
    blob.classList.add("is-on");
    if (jelly && !reduceMotion && Math.abs(prev - link.offsetLeft) > 4) {
      // stretch like a droplet while it travels, then settle
      blob.style.setProperty("--bsx", "1.18");
      blob.style.setProperty("--bsy", "0.82");
      clearTimeout(blobTimer);
      blobTimer = setTimeout(() => {
        blob.style.setProperty("--bsx", "1");
        blob.style.setProperty("--bsy", "1");
      }, 230);
    }
  }

  // Hide the name next to "BJ" (and tighten link padding) if the links don't fit
  function fitNav() {
    nav.classList.remove("nav--tight");
    if (getComputedStyle($("#menuToggle")).display !== "none") return; // burger mode
    if (navGlass.scrollWidth > navGlass.clientWidth + 1) nav.classList.add("nav--tight");
    moveBlob(activeLink(), false);
  }

  function initNav() {
    const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 24);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    // the bar narrows on scroll → re-measure the droplet once it settles
    $(".nav__row").addEventListener("transitionend", (e) => e.propertyName === "width" && moveBlob(activeLink(), false));

    if (finePointer) {
      // droplet follows the hovered link, returns to the active one
      navLinks.addEventListener("pointerover", (e) => {
        const a = e.target.closest("a");
        if (a) moveBlob(a);
      });
      navLinks.addEventListener("pointerleave", () => moveBlob(activeLink()));
    }

    const burger = $("#menuToggle");
    const closeMenu = () => {
      navLinks.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    };
    burger.addEventListener("click", () => {
      const open = !navLinks.classList.contains("is-open");
      navLinks.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", (e) => e.target.closest("a") && closeMenu());
    document.addEventListener("click", (e) => !e.target.closest("#navGlass") && closeMenu());
    addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

    // Highlight the section in view
    if ("IntersectionObserver" in window) {
      const map = new Map($$("a", navLinks).map((a) => [a.getAttribute("href").slice(1), a]));
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            $$("a", navLinks).forEach((a) => a.classList.remove("is-active"));
            const link = map.get(e.target.id);
            link?.classList.add("is-active");
            if (!navLinks.matches(":hover")) moveBlob(link);
          }),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      $$("main > section[id]").forEach((s) => io.observe(s));
    }
  }

  /* ======================= Misc behaviour ======================= */
  let revealIO;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    revealIO =
      revealIO ||
      new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              revealIO.unobserve(e.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
    $$(".reveal:not(.is-in)").forEach((el) => revealIO.observe(el));
  }

  function initCounters() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      countersDone = true;
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        runCounters();
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe($("#stats"));
  }

  /* ---------------- Portrait follows the pointer ----------------
     The photo drifts toward the mouse inside its frame (CSS reads --px/--py,
     -1…1 relative to the frame's centre). Eased so it never jumps. */
  function initPortrait() {
    if (!finePointer || reduceMotion) return;
    const box = $(".portrait");
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, last = 0;
    const loop = (now) => {
      const dt = Math.min(64, now - (last || now - 16.7));
      last = now;
      const k = 1 - Math.pow(0.88, dt / 16.7);
      cx += (tx - cx) * k;
      cy += (ty - cy) * k;
      box.style.setProperty("--px", cx.toFixed(3));
      box.style.setProperty("--py", cy.toFixed(3));
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.002 ? requestAnimationFrame(loop) : 0;
      if (!raf) last = 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const r = box.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return; // off-screen: skip work
      tx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1);
      ty = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2), -1, 1);
      kick();
    }, { passive: true });
    document.documentElement.addEventListener("pointerleave", () => { tx = 0; ty = 0; kick(); });
  }

  /* Delegated clicks */
  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest(".lang__btn");
    if (langBtn) {
      const box = langBtn.closest("[data-lang-switch]");
      return openLang(box, !box.classList.contains("is-open"));
    }
    const item = e.target.closest(".lang__item");
    if (item) return setLang(item.dataset.lang);
    if (!e.target.closest(".lang")) $$("[data-lang-switch].is-open").forEach((b) => openLang(b, false));

    const chip = e.target.closest("[data-filter]");
    if (chip) {
      pubFilter = chip.dataset.filter;
      renderPubFilters();
      renderPubs();
      bindLive();
      scroller.scrollLeft = 0;
      updateCarousel();
      $(`[data-filter="${pubFilter}"]`)?.focus();
      return;
    }

    if (e.target.closest('#pdfBtn[aria-disabled="true"]')) e.preventDefault();

    const pub = e.target.closest(".pub");
    if (pub && !e.target.closest("a")) openPub(+pub.dataset.idx);
  });

  document.addEventListener("keydown", (e) => {
    // language menu: arrows + Escape
    const box = e.target.closest?.("[data-lang-switch]");
    if (box && box.classList.contains("is-open")) {
      const items = $$(".lang__item", box);
      const i = items.indexOf(document.activeElement);
      if (e.key === "Escape") { openLang(box, false); $(".lang__btn", box).focus(); return; }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        items[(i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length].focus();
        return;
      }
    }
    // publication cards: Enter / Space open details
    const pubCard = e.target.closest?.(".pub");
    if (pubCard && e.target === pubCard && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      return openPub(+pubCard.dataset.idx);
    }
    // filter chips: arrow keys
    const chip = e.target.closest?.("[data-filter]");
    if (chip && ["ArrowLeft", "ArrowRight"].includes(e.key)) {
      const chips = $$("[data-filter]");
      const j = chips.indexOf(chip) + (e.key === "ArrowRight" ? 1 : -1);
      chips[(j + chips.length) % chips.length].click();
    }
  });

  /* ------------------------------ Boot ------------------------------ */
  $("#themeToggle").addEventListener("click", toggleTheme);
  initNav();
  initCarousel();
  initLoader();
  initModal();
  initCases();
  initCursor();
  initPortrait();
  render();
  initCounters();

  addEventListener("scroll", onCareerScroll, { passive: true });
  let resizeT = 0;
  addEventListener("resize", () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      layoutCareer();
      updateCarousel();
      fitNav();
    }, 120);
  });
  // fonts change text widths → re-measure once loaded
  document.fonts?.ready.then(() => { layoutCareer(); fitNav(); });
})();
