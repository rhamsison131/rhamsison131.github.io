export type CanvasVariant = "hero" | "work1" | "work2" | "work3" | "about";

export function drawCanvas(canvas: HTMLCanvasElement, variant: CanvasVariant): void {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(dpr, dpr);

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  switch (variant) {
    case "hero":
      drawHero(ctx, W, H);
      break;
    case "work1":
      drawWork1(ctx, W, H);
      break;
    case "work2":
      drawWork2(ctx, W, H);
      break;
    case "work3":
      drawWork3(ctx, W, H);
      break;
    case "about":
      drawAbout(ctx, W, H);
      break;
  }
}

function drawHero(ctx: CanvasRenderingContext2D, W: number, H: number): void {
  ctx.fillStyle = "#0f0f0f";
  ctx.fillRect(0, 0, W, H);

  // Grid
  ctx.strokeStyle = "rgba(200,184,154,0.04)";
  ctx.lineWidth = 0.5;
  const gs = 48;
  for (let x = 0; x < W; x += gs) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y < H; y += gs) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // Wave lines
  for (let i = 0; i <= 18; i++) {
    const y = H * 0.15 + (i / 18) * H * 0.7;
    ctx.beginPath();
    for (let j = 0; j <= 10; j++) {
      const x = (j / 10) * W;
      const wave = Math.sin(j * 0.9 + i * 0.5) * 20 + Math.cos(j * 0.4 + i * 0.3) * 10;
      j === 0 ? ctx.moveTo(x, y + wave) : ctx.lineTo(x, y + wave);
    }
    const alpha = 0.02 + (i / 18) * 0.08;
    ctx.strokeStyle = `rgba(200,184,154,${alpha})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  // Circle accent
  ctx.strokeStyle = "rgba(200,184,154,0.12)";
  ctx.lineWidth = 0.5;
  ctx.beginPath(); ctx.arc(W * 0.75, H * 0.38, 130, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(W * 0.75, H * 0.38, 85, 0, Math.PI * 2); ctx.stroke();

  ctx.fillStyle = "rgba(200,184,154,0.05)";
  ctx.beginPath(); ctx.arc(W * 0.75, H * 0.38, 130, 0, Math.PI * 2); ctx.fill();

  // Label text
  ctx.font = "10px 'DM Mono', monospace";
  ctx.fillStyle = "rgba(200,184,154,0.22)";
  ctx.fillText("Cebu City, PH", W * 0.56, H * 0.64);
  ctx.fillText("Graphic Designer", W * 0.56, H * 0.69);
}

function drawWork1(ctx: CanvasRenderingContext2D, W: number, H: number): void {
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#1a1510");
  g.addColorStop(1, "#0a0a0a");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(200,184,154,0.08)";
  ctx.lineWidth = 0.5;
  ctx.fillStyle = "rgba(200,184,154,0.06)";
  [0.3, 0.6].forEach(x => {
    ctx.beginPath(); ctx.moveTo(W * x, 0); ctx.lineTo(W * x, H); ctx.stroke();
  });
  [0.4, 0.7].forEach(y => {
    ctx.beginPath(); ctx.moveTo(0, H * y); ctx.lineTo(W, H * y); ctx.stroke();
  });

  ctx.font = "bold 52px 'Playfair Display', serif";
  ctx.fillStyle = "rgba(200,184,154,0.12)";
  ctx.fillText("S", W * 0.06, H * 0.68);

  ctx.font = "italic 14px 'Playfair Display', serif";
  ctx.fillStyle = "rgba(200,184,154,0.55)";
  ctx.fillText("Summer Festival", W * 0.35, H * 0.44);

  for (let i = 0; i < 4; i++) {
    ctx.strokeStyle = `rgba(200,184,154,${0.04 + i * 0.02})`;
    ctx.strokeRect(W * 0.05 + i * 7, H * 0.1 + i * 5, W * 0.22, H * 0.24);
  }
}

function drawWork2(ctx: CanvasRenderingContext2D, W: number, H: number): void {
  ctx.fillStyle = "#141210";
  ctx.fillRect(0, 0, W, H);

  const g2 = ctx.createRadialGradient(W * 0.5, H * 0.35, 0, W * 0.5, H * 0.35, W * 0.55);
  g2.addColorStop(0, "rgba(200,184,154,0.14)");
  g2.addColorStop(1, "transparent");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(200,184,154,0.18)";
  ctx.lineWidth = 0.5;
  const cx = W * 0.5, cy = H * 0.36, r = Math.min(W, H) * 0.22;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
  for (let a = 0; a < 8; a++) {
    const angle = (a / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * r * 0.65, cy + Math.sin(angle) * r * 0.65);
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.stroke();
  }

  ctx.font = "10px 'DM Mono', monospace";
  ctx.fillStyle = "rgba(200,184,154,0.35)";
  ctx.textAlign = "center";
  ctx.fillText("SOCIAL MEDIA", cx, H * 0.6);
  ctx.fillText("POSTING SET", cx, H * 0.68);
  ctx.textAlign = "left";
}

function drawWork3(ctx: CanvasRenderingContext2D, W: number, H: number): void {
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(200,184,154,0.06)";
  ctx.lineWidth = 0.5;
  const cols = 6, rows = 4;
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath(); ctx.moveTo((i / cols) * W, 0); ctx.lineTo((i / cols) * W, H); ctx.stroke();
  }
  for (let j = 0; j <= rows; j++) {
    ctx.beginPath(); ctx.moveTo(0, (j / rows) * H); ctx.lineTo(W, (j / rows) * H); ctx.stroke();
  }

  ctx.font = "10px 'DM Mono', monospace";
  ctx.fillStyle = "rgba(200,184,154,0.38)";
  ctx.fillText("EVENT POSTER", W * 0.06, H * 0.28);

  ctx.font = "italic 9px 'DM Mono', monospace";
  ctx.fillStyle = "rgba(200,184,154,0.18)";
  ctx.fillText("Series / Print & Digital", W * 0.06, H * 0.4);

  ctx.strokeStyle = "rgba(200,184,154,0.14)";
  ctx.strokeRect(W * 0.06, H * 0.48, W * 0.38, H * 0.36);
  ctx.strokeRect(W * 0.5, H * 0.48, W * 0.38, H * 0.36);
}

function drawAbout(ctx: CanvasRenderingContext2D, W: number, H: number): void {
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#1a1710");
  g.addColorStop(1, "#0d0d0d");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(200,184,154,0.06)";
  ctx.lineWidth = 0.5;
  const gs = 40;
  for (let x = 0; x < W; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  const gr2 = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.45, W * 0.5);
  gr2.addColorStop(0, "rgba(200,184,154,0.16)");
  gr2.addColorStop(1, "transparent");
  ctx.fillStyle = gr2;
  ctx.fillRect(0, 0, W, H);

  ctx.font = "italic 32px 'Playfair Display', serif";
  ctx.fillStyle = "rgba(200,184,154,0.15)";
  ctx.textAlign = "center";
  ctx.fillText("R·S", W * 0.5, H * 0.52);

  ctx.font = "9px 'DM Mono', monospace";
  ctx.fillStyle = "rgba(200,184,154,0.28)";
  ctx.fillText("Cebu City, Philippines", W * 0.5, H * 0.7);
  ctx.textAlign = "left";
}
