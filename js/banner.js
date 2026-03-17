/* ============================================
   32888444d — Interactive Banner + Global color cycle
   Glyphs move BEHIND the title text
   ============================================ */
(function () {
  const palette = [
    '#ff3800', '#e84393', '#00b894', '#fdcb6e',
    '#4a90d9', '#d63031', '#c8a87c', '#6c5ce7',
  ];

  let gcIndex = 0;
  let colorT = 0;

  function lerpColor(a, b, t) {
    const ah = parseInt(a.slice(1), 16);
    const bh = parseInt(b.slice(1), 16);
    const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
    const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
    return '#' + ((1 << 24) +
      (Math.round(ar + (br - ar) * t) << 16) +
      (Math.round(ag + (bg - ag) * t) << 8) +
      Math.round(ab + (bb - ab) * t)).toString(16).slice(1);
  }

  function cycleColor() {
    colorT += 0.004;
    if (colorT >= 1) { colorT = 0; gcIndex = (gcIndex + 1) % palette.length; }
    const c = lerpColor(palette[gcIndex], palette[(gcIndex + 1) % palette.length], colorT);
    document.documentElement.style.setProperty('--accent', c);
    return c;
  }

  const canvas = document.getElementById('banner-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let realW, realH;
  let mouse = { x: -999, y: -999 };
  let time = 0;

  const glyphs = [
    '✦', '✶', '✹', '◆', '✿', '❋', '✸',
    '◉', '✺', '❊', '✤', '✵',
    '☽', '☾', '✧', '◈', '✱', '❖', '✫',
  ];

  const CELL = 48;
  let grid = [];
  let titleChars = [];

  const TITLE_FONT = "'Rascal'";

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = devicePixelRatio;
    realW = rect.width;
    realH = rect.height;
    canvas.width = realW * dpr;
    canvas.height = realH * dpr;
    canvas.style.width = realW + 'px';
    canvas.style.height = realH + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildTitle();
    buildGrid();
  }

  function buildTitle() {
    const text = '32888444d';
    const fontSize = Math.min(realW * 0.1, 110);

    ctx.font = `400 ${fontSize}px ${TITLE_FONT}, sans-serif`;

    // measure each char + add spacing
    const letterGap = fontSize * 0.25;
    const charWidths = [];
    for (let i = 0; i < text.length; i++) {
      charWidths.push(ctx.measureText(text[i]).width);
    }
    let totalW = 0;
    for (let i = 0; i < text.length; i++) totalW += charWidths[i];
    totalW += (text.length - 1) * letterGap;

    const startX = (realW - totalW) / 2;
    const y = realH / 2;

    titleChars = [];
    let cx = startX;
    for (let i = 0; i < text.length; i++) {
      const w = charWidths[i];
      titleChars.push({
        char: text[i],
        x: cx + w / 2,
        y: y,
        fontSize: fontSize,
        colorIdx: i % palette.length,
        phase: i * 1.1,
      });
      cx += w + letterGap;
    }
  }

  function buildGrid() {
    const cols = Math.ceil(realW / CELL) + 1;
    const rows = Math.ceil(realH / CELL) + 1;
    grid = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * CELL + CELL / 2;
        const y = r * CELL + CELL / 2;
        const seed = (r * 7 + c * 13 + r * c) % 100;
        grid.push({
          x, y,
          glyph: glyphs[(r * 3 + c * 7) % glyphs.length],
          baseSize: 14 + (seed % 10),
          baseRot: ((r + c) % 6) * (Math.PI / 3),
          baseOpacity: 0.14 + (seed % 10) * 0.006,
          phase: seed * 0.3,
          cIdx: (r + c * 3) % palette.length,
        });
      }
    }
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
  canvas.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.touches[0].clientX - rect.left;
    mouse.y = e.touches[0].clientY - rect.top;
  }, { passive: true });
  canvas.addEventListener('touchend', () => { mouse.x = -999; mouse.y = -999; });

  function render() {
    time += 0.016;
    const accent = cycleColor();
    ctx.clearRect(0, 0, realW, realH);

    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, realW, realH);

    const INFLUENCE = 140;
    const mouseActive = mouse.x > -100;

    // === LAYER 1: Glyphs (behind) ===
    for (let i = 0; i < grid.length; i++) {
      const g = grid[i];
      let mouseInf = 0;

      if (mouseActive) {
        const dx = g.x - mouse.x;
        const dy = g.y - mouse.y;
        mouseInf = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / INFLUENCE);
      }

      const breathe = Math.sin(time * 0.5 + g.phase) * 0.1;
      const opacity = g.baseOpacity + mouseInf * 0.45;
      const size = g.baseSize + mouseInf * 10 + breathe * 3;
      const cIdx = (g.cIdx + Math.floor(time * 0.4)) % palette.length;
      let col = palette[cIdx];
      if (mouseInf > 0.15) col = palette[Math.floor(time * 2 + g.phase) % palette.length];
      const rot = g.baseRot + Math.sin(time * 0.35 + g.phase) * 0.1;

      ctx.save();
      ctx.translate(g.x, g.y);
      ctx.rotate(rot);
      ctx.globalAlpha = opacity;
      ctx.font = `${size}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = col;
      ctx.fillText(g.glyph, 0, 0);
      ctx.restore();
    }

    // === LAYER 2: Title "32888444d" (on top) ===
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < titleChars.length; i++) {
      const tc = titleChars[i];
      let mouseInf = 0;
      if (mouseActive) {
        const dx = tc.x - mouse.x;
        const dy = tc.y - mouse.y;
        mouseInf = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 200);
      }

      const cIdx = (tc.colorIdx + Math.floor(time * 0.6 + tc.phase * 0.5)) % palette.length;
      const nextIdx = (cIdx + 1) % palette.length;
      const frac = (time * 0.6 + tc.phase * 0.5) % 1;
      const col = lerpColor(palette[cIdx], palette[nextIdx], frac);

      const scale = 1 + mouseInf * 0.12;
      const opacity = 0.45 + mouseInf * 0.45;

      ctx.save();
      ctx.translate(tc.x, tc.y);
      ctx.scale(scale, scale);
      ctx.globalAlpha = opacity;
      ctx.font = `400 ${tc.fontSize}px ${TITLE_FONT}, sans-serif`;
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.strokeText(tc.char, 0, 0);
      ctx.restore();
    }

    ctx.globalAlpha = 1;

    // === Cursor ===
    if (mouseActive) {
      ctx.save();
      ctx.translate(mouse.x, mouse.y);
      ctx.rotate(time * 0.5);
      ctx.globalAlpha = 0.5;
      ctx.font = '16px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = accent;
      ctx.fillText('✦', 0, 0);
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  document.fonts.ready.then(() => {
    resize();
    window.addEventListener('resize', resize);
    render();
  });
})();
