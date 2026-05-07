import type { PortfolioData, Project, Service, SocialLink, Stat } from "./data.js";

export function renderPortfolio(data: PortfolioData): void {
  renderMeta(data);
  renderNav(data);
  renderHero(data);
  renderWork(data);
  renderServices(data);
  renderAbout(data);
  renderContact(data);
  renderFooter(data);
}

function renderMeta(data: PortfolioData): void {
  document.title = `${data.name} — ${data.role}`;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (meta) meta.content = data.heroDescription;
}

function renderNav(data: PortfolioData): void {
  const logo = document.querySelector<HTMLAnchorElement>(".logo");
  if (logo) logo.textContent = data.name;
}

function renderHero(data: PortfolioData): void {
  const firstName = document.getElementById("hero-first");
  const lastName = document.getElementById("hero-last");
  const tagline = document.getElementById("hero-tagline");
  const desc = document.getElementById("hero-desc");

  if (firstName) firstName.textContent = data.firstName;
  if (lastName) lastName.textContent = data.lastName;
  if (tagline) tagline.textContent = data.tagline;
  if (desc) desc.textContent = data.heroDescription;

  const statsContainer = document.getElementById("hero-stats");
  if (statsContainer) {
    statsContainer.innerHTML = data.stats
      .map(
        (s: Stat) => `
      <div class="stat-item">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label}</span>
      </div>`
      )
      .join("");
  }
}

function renderWork(data: PortfolioData): void {
  const featured = data.projects.find((p: Project) => p.featured);
  const others = data.projects.filter((p: Project) => !p.featured);

  const grid = document.getElementById("work-grid");
  if (!grid) return;

  const cards: string[] = [];

  if (featured) {
    cards.push(`
      <div class="work-card featured">
        <div class="work-card-thumb">
          <canvas class="work-card-canvas" id="wc1"></canvas>
        </div>
        <div class="work-card-content">
          <div class="work-card-label"><span class="dot"></span>${featured.category}</div>
          <h3 class="work-card-title">${featured.title}</h3>
          <p class="work-card-desc">${featured.description}</p>
          <div class="work-card-tags">
            ${featured.tags.map((t: string) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <span class="work-card-arrow">↗</span>
        </div>
      </div>`);
  }

  others.forEach((p: Project, i: number) => {
    cards.push(`
      <div class="work-card">
        <div class="work-card-thumb">
          <canvas class="work-card-canvas" id="wc${i + 2}"></canvas>
        </div>
        <div class="work-card-label"><span class="dot"></span>${p.category}</div>
        <h3 class="work-card-title">${p.title}</h3>
        <p class="work-card-desc">${p.description}</p>
        <div class="work-card-tags">
          ${p.tags.map((t: string) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <span class="work-card-arrow">↗</span>
      </div>`);
  });

  grid.innerHTML = cards.join("");
}

function renderServices(data: PortfolioData): void {
  const list = document.getElementById("services-list");
  if (!list) return;

  list.innerHTML = data.services
    .map(
      (s: Service) => `
    <div class="service-item">
      <div>
        <div class="service-name">${s.name}</div>
        <div class="service-desc">${s.description}</div>
      </div>
      <div class="service-num">${s.num}</div>
    </div>`
    )
    .join("");
}

function renderAbout(data: PortfolioData): void {
  const label = document.getElementById("about-label");
  if (label) label.textContent = data.established;

  const bioContainer = document.getElementById("about-bio");
  if (bioContainer) {
    bioContainer.innerHTML = data.bio
      .map((p: string) => `<p class="about-bio-para">${p}</p>`)
      .join("");
  }
}

function renderContact(data: PortfolioData): void {
  const emailLink = document.getElementById("contact-email") as HTMLAnchorElement | null;
  if (emailLink) {
    emailLink.href = `mailto:${data.email}`;
    emailLink.textContent = data.email;
  }

  const socialsContainer = document.getElementById("contact-socials");
  if (socialsContainer) {
    socialsContainer.innerHTML = data.socials
      .map(
        (s: SocialLink) => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a></li>`
      )
      .join("");
  }
}

function renderFooter(data: PortfolioData): void {
  const copy = document.getElementById("footer-copy");
  const year = new Date().getFullYear();
  if (copy) copy.textContent = `© ${year} ${data.name}. All rights reserved.`;
}
