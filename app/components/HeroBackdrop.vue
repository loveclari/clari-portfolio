<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Animated hero backdrop that loops through three scenes built from the same
 * pool of particles: orange matrix rain, a city skyline at night, then the
 * Golden Gate Bridge. Because every particle carries a target position for
 * each scene, the transitions read as one field of lights rearranging itself
 * rather than three separate animations crossfading.
 */

type Particle = {
  glyph: string;
  rainX: number;
  rainY: number;
  rainSpeed: number;
  cityX: number;
  cityY: number;
  bridgeX: number;
  bridgeY: number;
  x: number;
  y: number;
  size: number;
  twinkle: number;
  bright: number;
};

const host = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

const GLYPHS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>/{}[]=+*$#".split(
  "",
);

// Scene timings in ms. Holds are longer than the morphs so each scene reads.
const RAIN_END = 4200;
const CITY_IN = 6900;
const CITY_END = 10300;
const BRIDGE_IN = 13000;
const BRIDGE_END = 18200;
const LOOP = 20800;

let ctx: CanvasRenderingContext2D | null = null;
let particles: Particle[] = [];
let raf = 0;
let width = 0;
let height = 0;
let started = 0;
let accent = "#e8735a";
let reduced = false;
let resizeTimer: ReturnType<typeof setTimeout> | undefined;
let observer: IntersectionObserver | null = null;

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function rgba(hex: string, alpha: number) {
  const v = hex.replace("#", "");
  const n = parseInt(
    v.length === 3
      ? v
          .split("")
          .map((c) => c + c)
          .join("")
      : v,
    16,
  );
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

/** Cable height of the Golden Gate profile at a given x. */
function cableY(x: number, w: number, h: number) {
  const deck = h * 0.66;
  const top = h * 0.17;
  const t1 = w * 0.26;
  const t2 = w * 0.74;
  const anchor = deck - h * 0.04;

  if (x >= t1 && x <= t2) {
    // Main span sags between the towers.
    const u = (x - t1) / (t2 - t1);
    return top + Math.sin(Math.PI * u) * (deck - top) * 0.78;
  }
  // Side spans climb from the anchorages up to each tower top.
  const u = x < t1 ? x / t1 : (w - x) / (w - t2);
  return anchor - (anchor - top) * u * u;
}

function buildTargets(list: Particle[], w: number, h: number) {
  const deck = h * 0.66;
  const top = h * 0.17;
  const t1 = w * 0.26;
  const t2 = w * 0.74;

  // --- City skyline: a row of buildings whose windows hold the particles ---
  const towers: { x: number; w: number; top: number }[] = [];
  let cursor = -w * 0.04;
  while (cursor < w * 1.04) {
    const bw = w * (0.035 + Math.random() * 0.055);
    towers.push({
      x: cursor,
      w: bw,
      top: h * (0.34 + Math.random() * 0.34),
    });
    cursor += bw + w * 0.012;
  }

  list.forEach((p, i) => {
    const r = i / list.length;

    // ---------------------------- city target ----------------------------
    if (r < 0.86) {
      const b = towers[Math.floor(Math.random() * towers.length)]!;
      const cols = Math.max(2, Math.floor(b.w / (w * 0.014)));
      const col = Math.floor(Math.random() * cols);
      const rows = Math.max(3, Math.floor((h * 0.86 - b.top) / (h * 0.038)));
      const row = Math.floor(Math.random() * rows);
      p.cityX = b.x + (b.w / cols) * (col + 0.5);
      p.cityY = b.top + ((h * 0.86 - b.top) / rows) * (row + 0.5);
    } else {
      // A few stay up high as sky lights.
      p.cityX = Math.random() * w;
      p.cityY = Math.random() * h * 0.3;
    }

    // --------------------------- bridge target ---------------------------
    if (r < 0.2) {
      // Roadway deck.
      p.bridgeX = Math.random() * w;
      p.bridgeY = deck + (Math.random() - 0.5) * h * 0.012;
    } else if (r < 0.38) {
      // Towers, including the crossbeams that make them recognisable.
      const x = Math.random() < 0.5 ? t1 : t2;
      const beam = Math.random();
      if (beam < 0.22) {
        const level = Math.random() < 0.5 ? top + (deck - top) * 0.3 : top + (deck - top) * 0.62;
        p.bridgeX = x + (Math.random() - 0.5) * w * 0.035;
        p.bridgeY = level;
      } else {
        p.bridgeX = x + (Math.random() - 0.5) * w * 0.008;
        p.bridgeY = lerp(top, h * 0.84, Math.random());
      }
    } else if (r < 0.66) {
      // Main cables.
      const x = Math.random() * w;
      p.bridgeX = x;
      p.bridgeY = cableY(x, w, h);
    } else if (r < 0.85) {
      // Vertical suspenders, snapped to evenly spaced bays so they read as
      // separate cables instead of a cloud of dots.
      const bays = 26;
      const x = t1 + ((t2 - t1) / bays) * (Math.floor(Math.random() * bays) + 0.5);
      p.bridgeX = x;
      p.bridgeY = lerp(cableY(x, w, h), deck, Math.random());
    } else {
      // Water shimmer below the deck.
      p.bridgeX = Math.random() * w;
      p.bridgeY = deck + h * 0.06 + Math.random() * h * 0.24;
    }
  });
}

function build(w: number, h: number) {
  const count = Math.round(Math.min(760, Math.max(280, (w * h) / 1900)));
  const colWidth = 17;
  const cols = Math.max(8, Math.floor(w / colWidth));

  particles = Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    return {
      glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!,
      rainX: col * colWidth + colWidth * 0.5,
      rainY: Math.random() * h,
      rainSpeed: 40 + Math.random() * 120,
      cityX: 0,
      cityY: 0,
      bridgeX: 0,
      bridgeY: 0,
      x: 0,
      y: 0,
      size: 1 + Math.random() * 1.4,
      twinkle: Math.random() * Math.PI * 2,
      bright: 0.35 + Math.random() * 0.65,
    };
  });

  buildTargets(particles, w, h);
  particles.forEach((p) => {
    p.x = p.rainX;
    p.y = p.rainY;
  });
}

function resize() {
  const el = canvas.value;
  const box = host.value;
  if (!el || !box) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = box.clientWidth;
  height = box.clientHeight;
  el.width = Math.round(width * dpr);
  el.height = Math.round(height * dpr);
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;

  ctx = el.getContext("2d");
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

  build(width, height);
  if (reduced) drawStatic();
}

/** Single frame of the bridge, used when the visitor prefers reduced motion. */
function drawStatic() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  for (const p of particles) {
    ctx.fillStyle = rgba(accent, 0.5 * p.bright);
    ctx.beginPath();
    ctx.arc(p.bridgeX, p.bridgeY, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function frame(now: number) {
  raf = requestAnimationFrame(frame);
  if (!ctx) return;

  if (!started) started = now;
  const t = (now - started) % LOOP;

  ctx.clearRect(0, 0, width, height);

  // How far we are into each morph, and which scenes we are blending.
  let toCity = 0;
  let toBridge = 0;
  let toRain = 0;
  if (t > RAIN_END && t <= CITY_IN) toCity = easeInOut((t - RAIN_END) / (CITY_IN - RAIN_END));
  else if (t > CITY_IN) toCity = 1;
  if (t > CITY_END && t <= BRIDGE_IN) toBridge = easeInOut((t - CITY_END) / (BRIDGE_IN - CITY_END));
  else if (t > CITY_END) toBridge = 1;
  if (t > BRIDGE_END) toRain = easeInOut((t - BRIDGE_END) / (LOOP - BRIDGE_END));

  const asRain = 1 - toCity;
  const seconds = now / 1000;

  ctx.font = "600 14px ui-monospace, monospace";
  ctx.textAlign = "center";

  for (const p of particles) {
    // Rain keeps falling the whole time so the loop can hand back to it.
    p.rainY += (p.rainSpeed / 60) * (0.6 + asRain * 0.9);
    if (p.rainY > height + 20) p.rainY = -20;

    // Position: rain -> city -> bridge, then pulled back toward rain.
    let tx = lerp(p.rainX, p.cityX, toCity);
    let ty = lerp(p.rainY, p.cityY, toCity);
    tx = lerp(tx, p.bridgeX, toBridge);
    ty = lerp(ty, p.bridgeY, toBridge);
    if (toRain > 0) {
      tx = lerp(tx, p.rainX, toRain);
      ty = lerp(ty, p.rainY, toRain);
    }
    p.x = tx;
    p.y = ty;

    const shimmer = 0.62 + 0.38 * Math.sin(seconds * 1.6 + p.twinkle);
    const settled = Math.max(toCity, toBridge) * (1 - toRain);
    const alpha = p.bright * (0.6 + 0.4 * settled) * (0.6 + 0.4 * shimmer);

    if (asRain > 0.04 && toBridge < 0.5) {
      // Glyph form, fading out as the lights settle into place.
      ctx.fillStyle = rgba(accent, alpha * asRain);
      ctx.fillText(p.glyph, p.x, p.y);
    }
    if (settled > 0.02) {
      ctx.fillStyle = rgba(accent, alpha);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (0.7 + 0.5 * settled), 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function start() {
  if (!raf && !reduced) raf = requestAnimationFrame(frame);
}

function stop() {
  if (raf) {
    cancelAnimationFrame(raf);
    raf = 0;
  }
}

onMounted(() => {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduced = motion.matches;

  const styles = getComputedStyle(document.documentElement);
  accent = styles.getPropertyValue("--accent").trim() || accent;

  resize();
  window.addEventListener("resize", onResize, { passive: true });

  // Don't burn frames animating a hero that has been scrolled past.
  if (host.value) {
    observer = new IntersectionObserver(
      (entries) => (entries[0]?.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    observer.observe(host.value);
  } else {
    start();
  }
});

function onResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resize, 150);
}

onBeforeUnmount(() => {
  stop();
  observer?.disconnect();
  clearTimeout(resizeTimer);
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <div ref="host" class="hero-backdrop" aria-hidden="true">
    <canvas ref="canvas" />
  </div>
</template>

<style scoped>
.hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  /* Fade the edges so the field never collides with the nav or the section
     below, and thin it out behind the centre where the name sits. */
  mask-image: radial-gradient(
    ellipse 76% 64% at 50% 46%,
    rgb(0 0 0 / 0.45) 0%,
    rgb(0 0 0 / 0.8) 40%,
    rgb(0 0 0 / 1) 66%,
    transparent 100%
  );
}

.hero-backdrop canvas {
  display: block;
}
</style>
