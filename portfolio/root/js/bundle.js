"use strict";
(() => {
  // ─── DATA ────────────────────────────────────────────────────────────────────
  const data = {
    name: "Rham Sison", firstName: "Rham", lastName: "Sison",
    role: "Graphic Designer", tagline: "Visual Design · Layout · Print & Digital",
    heroDescription: "I design with intention — turning ideas into visuals that communicate clearly, look sharp, and leave a mark.",
    location: "Cebu City, Philippines", established: "Cebu City, PH",
    email: "a80741120@gmail.com",
    stats: [
      { num: "50+", label: "Projects Done" },
      { num: "100%", label: "Client Focus" },
      { num: "1", label: "Designer. All in." }
    ],
    bio: [
      "I'm Rham Sison, a graphic designer based in Cebu City, Philippines. I specialize in creating clean, purposeful layouts — from social media postings and event tarpaulins to a wide range of print and digital design work.",
      "Design, for me, is about clarity and impact. Every project is an opportunity to communicate something worth seeing. Whether it's a single posting or a full event rollout, I bring the same care and precision to every piece."
    ],
    projects: [
      { id: 1, title: "Summer Festival Tarpaulin", category: "Print Design", description: "Large-format tarpaulin design for a local summer event. Bold typography, vivid color palette, and clean layout optimized for outdoor visibility.", tags: ["Tarpaulin", "Print", "Typography"], featured: true },
      { id: 2, title: "Social Media Posting Set", category: "Digital Design", description: "A cohesive set of promotional postings for a local business. Consistent visual identity across multiple post formats.", tags: ["Social Media", "Digital", "Branding"], featured: false },
      { id: 3, title: "Event Poster Series", category: "Poster Design", description: "Series of promotional posters for a community event. Designed for both digital sharing and physical print production.", tags: ["Poster", "Print", "Layout"], featured: false }
    ],
    services: [
      { num: "01", name: "Social Media Design", description: "Eye-catching layouts for Facebook posts, Instagram content, and other digital platforms — designed to stop the scroll." },
      { num: "02", name: "Tarpaulin & Banner Design", description: "Large-format print designs built for maximum visibility. Events, promotions, announcements — made to stand out." },
      { num: "03", name: "Poster & Flyer Design", description: "Print-ready and digital posters designed with clear hierarchy and visual impact for any occasion." },
      { num: "04", name: "Layout & Other Design Work", description: "Open to any design-related project — menus, certificates, invitations, and more. Just bring the idea." }
    ],
    socials: [
      { label: "Facebook", url: "https://www.facebook.com/rham.sison" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/rham-sison" },
      { label: "Email", url: "mailto:a80741120@gmail.com" }
    ]
  };

  // ─── IMAGE SOURCES ───────────────────────────────────────────────────────────
  // 👇 Replace these paths with your actual image files
  const IMAGES = {
    hero:  "images/img1.png",    // Right panel of the intro/hero section
    work1: "images/img2.jpg",   // Summer Festival Tarpaulin (featured large card)
    work2: "images/work2.jpg",   // Social Media Posting Set
    work3: "images/work3.jpg",   // Event Poster Series
    about: "images/about.jpg",   // Portrait photo in the About section
  };

  // ─── RENDERER ────────────────────────────────────────────────────────────────
  function renderPortfolio(d) {
    renderMeta(d); renderNav(d); renderHero(d);
    renderWork(d); renderServices(d); renderAbout(d);
    renderContact(d); renderFooter(d);
  }

  function renderMeta(d) {
    document.title = `${d.name} — ${d.role}`;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = d.heroDescription;
  }

  function renderNav(d) {
    const logo = document.querySelector(".logo");
    if (logo) logo.textContent = d.name;
  }

  function renderHero(d) {
    const fn = document.getElementById("hero-first");
    const ln = document.getElementById("hero-last");
    const tg = document.getElementById("hero-tagline");
    const dc = document.getElementById("hero-desc");
    if (fn) fn.textContent = d.firstName;
    if (ln) ln.textContent = d.lastName;
    if (tg) tg.textContent = d.tagline;
    if (dc) dc.textContent = d.heroDescription;

    // Stats bar
    const sc = document.getElementById("hero-stats");
    if (sc) sc.innerHTML = d.stats.map(s => `
      <div class="stat-item">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label}</span>
      </div>`).join("");

    // Replace hero canvas with image
    const heroCanvas = document.getElementById("hero-canvas");
    if (heroCanvas) {
      const img = document.createElement("img");
      img.src = IMAGES.hero;
      img.alt = "Hero visual";
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;position:absolute;top:0;left:0;";
      heroCanvas.replaceWith(img);
    }
  }

  function renderWork(d) {
    const featured = d.projects.find(p => p.featured);
    const others   = d.projects.filter(p => !p.featured);
    const grid     = document.getElementById("work-grid");
    if (!grid) return;

    const workImages = [IMAGES.work1, IMAGES.work2, IMAGES.work3];
    const cards = [];

    if (featured) {
      cards.push(`
        <div class="work-card featured">
          <div class="work-card-thumb">
            <img src="${workImages[0]}" alt="${featured.title}" style="width:100%;height:100%;object-fit:cover;display:block;position:absolute;top:0;left:0;">
          </div>
          <div class="work-card-content">
            <div class="work-card-label"><span class="dot"></span>${featured.category}</div>
            <h3 class="work-card-title">${featured.title}</h3>
            <p class="work-card-desc">${featured.description}</p>
            <div class="work-card-tags">${featured.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            <span class="work-card-arrow">↗</span>
          </div>
        </div>`);
    }

    others.forEach((p, i) => {
      cards.push(`
        <div class="work-card">
          <div class="work-card-thumb">
            <img src="${workImages[i + 1]}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;display:block;position:absolute;top:0;left:0;">
          </div>
          <div class="work-card-label"><span class="dot"></span>${p.category}</div>
          <h3 class="work-card-title">${p.title}</h3>
          <p class="work-card-desc">${p.description}</p>
          <div class="work-card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
          <span class="work-card-arrow">↗</span>
        </div>`);
    });

    grid.innerHTML = cards.join("");
  }

  function renderServices(d) {
    const list = document.getElementById("services-list");
    if (!list) return;
    list.innerHTML = d.services.map(s => `
      <div class="service-item">
        <div>
          <div class="service-name">${s.name}</div>
          <div class="service-desc">${s.description}</div>
        </div>
        <div class="service-num">${s.num}</div>
      </div>`).join("");
  }

  function renderAbout(d) {
    const lbl = document.getElementById("about-label");
    if (lbl) lbl.textContent = d.established;

    const bio = document.getElementById("about-bio");
    if (bio) bio.innerHTML = d.bio.map(p => `<p class="about-bio-para">${p}</p>`).join("");

    // Replace about canvas with image
    const aboutCanvas = document.getElementById("about-canvas");
    if (aboutCanvas) {
      const img = document.createElement("img");
      img.src = IMAGES.about;
      img.alt = "About photo";
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;border:1px solid rgba(255,255,255,0.07);";
      aboutCanvas.replaceWith(img);
    }
  }

  function renderContact(d) {
    const el = document.getElementById("contact-email");
    if (el) { el.href = `mailto:${d.email}`; el.textContent = d.email; }
    const sc = document.getElementById("contact-socials");
    if (sc) sc.innerHTML = d.socials.map(s =>
      `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a></li>`).join("");
  }

  function renderFooter(d) {
    const cp = document.getElementById("footer-copy");
    if (cp) cp.textContent = `© ${new Date().getFullYear()} ${d.name}. All rights reserved.`;
  }

  // ─── ANIMATIONS ──────────────────────────────────────────────────────────────
  function initCursor() {
    const cursor = document.getElementById("cursor");
    const ring   = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;
    cursor.style.opacity = "0"; ring.style.opacity = "0";
    let mx = 0, my = 0, rx = 0, ry = 0, visible = false;
    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      if (!visible) { visible = true; cursor.style.opacity = "1"; ring.style.opacity = "1"; }
      cursor.style.left = `${mx - 4}px`; cursor.style.top = `${my - 4}px`;
    });
    const animRing = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = `${rx - 16}px`; ring.style.top = `${ry - 16}px`;
      requestAnimationFrame(animRing);
    };
    animRing();
    document.addEventListener("mouseover", e => {
      const hit = e.target.closest("a, button, .work-card, .service-item, .nav-cta");
      cursor.classList.toggle("cursor--hover", !!hit);
      ring.classList.toggle("ring--hover", !!hit);
    });
  }

  function initScrollAnimations() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
  }

  function initNavHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const links    = document.querySelectorAll("nav a[href^='#']");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute("id");
          links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
        }
      }),
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
  }

  // ─── INIT ────────────────────────────────────────────────────────────────────
  function init() {
    renderPortfolio(data);
    initCursor();
    initScrollAnimations();
    initNavHighlight();
  }

  document.addEventListener("DOMContentLoaded", init);
})();