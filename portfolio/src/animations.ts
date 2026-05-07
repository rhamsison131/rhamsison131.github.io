export function initCursor(): void {
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  if (!cursor || !ring) return;

  cursor.style.opacity = "0";
  ring.style.opacity = "0";

  let mx = 0, my = 0, rx = 0, ry = 0;
  let visible = false;

  document.addEventListener("mousemove", (e: MouseEvent) => {
    mx = e.clientX;
    my = e.clientY;
    if (!visible) {
      visible = true;
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    }
    cursor.style.left = `${mx - 4}px`;
    cursor.style.top = `${my - 4}px`;
  });

  const animateRing = (): void => {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = `${rx - 16}px`;
    ring.style.top = `${ry - 16}px`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document.addEventListener("mouseover", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button, .work-card, .service-item, .nav-cta")) {
      cursor.classList.add("cursor--hover");
      ring.classList.add("ring--hover");
    } else {
      cursor.classList.remove("cursor--hover");
      ring.classList.remove("ring--hover");
    }
  });
}

export function initScrollAnimations(): void {
  const elements = document.querySelectorAll<HTMLElement>(".fade-in");
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.08 }
  );
  elements.forEach(el => observer.observe(el));
}

export function initNavHighlight(): void {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>("nav a[href^='#']");
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach(s => observer.observe(s));
}
