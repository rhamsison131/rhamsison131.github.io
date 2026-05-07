import data from "./data.js";
import { drawCanvas } from "./canvas.js";
import { initCursor, initScrollAnimations, initNavHighlight } from "./animations.js";
import { renderPortfolio } from "./renderer.js";

function drawAllCanvases(): void {
  const heroCanvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
  if (heroCanvas) drawCanvas(heroCanvas, "hero");
  const aboutCanvas = document.getElementById("about-canvas") as HTMLCanvasElement | null;
  if (aboutCanvas) drawCanvas(aboutCanvas, "about");
  const wc1 = document.getElementById("wc1") as HTMLCanvasElement | null;
  if (wc1) drawCanvas(wc1, "work1");
  const wc2 = document.getElementById("wc2") as HTMLCanvasElement | null;
  if (wc2) drawCanvas(wc2, "work2");
  const wc3 = document.getElementById("wc3") as HTMLCanvasElement | null;
  if (wc3) drawCanvas(wc3, "work3");
}

function init(): void {
  renderPortfolio(data);
  // Two rAF frames ensure layout is complete before reading offsetWidth
  requestAnimationFrame(() => requestAnimationFrame(drawAllCanvases));
  window.addEventListener("resize", drawAllCanvases);
  initCursor();
  initScrollAnimations();
  initNavHighlight();
}

document.addEventListener("DOMContentLoaded", init);
