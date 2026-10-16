import React, { useEffect, useRef } from 'react';
import './GradientASCII.css';

export interface GradientASCIIProps {
  colors?: string[];
  shape?: 'horizon' | 'pinch' | 'rise' | 'eclipse';
  characters?: string;
  cellSize?: number;
  density?: number;
  glyphOpacity?: number;
  glow?: number;
  depthOfField?: number;
  flicker?: number;
  softness?: number;
  scale?: number;
  flow?: number;
  speed?: number;
  gradientOpacity?: number;
  grain?: number;
  variation?: number;
  mouseInteraction?: boolean;
  scrambleRadius?: number;
  clickEffect?: 'wave' | 'burst' | 'none';
  intro?: boolean;
  lightMode?: boolean;
  fontFamily?: string;
  dpr?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  life: number;
  maxLife: number;
  size: number;
  colorIdx: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
}

const DEFAULT_CHARS = ' .:-=+*#%@';
const TECH_CHARS = '01STEELSTACK#+';

export const GradientASCII: React.FC<GradientASCIIProps> = ({
  colors = ['#EA580C', '#FB923C', '#FDBA74', '#38BDF8'],
  shape = 'horizon',
  characters = DEFAULT_CHARS,
  cellSize = 14,
  density = 0.85,
  glyphOpacity = 0.9,
  mouseInteraction = true,
  clickEffect = 'wave',
  lightMode = false,
  fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  className = '',
  style,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;
    let time = 0;

    // Simulation grid
    const cols = Math.floor(60);
    const rows = Math.floor(25);
    const gridCols = cols;
    const gridRows = rows;
    const velocityX = new Float32Array(gridCols * gridRows);
    const velocityY = new Float32Array(gridCols * gridRows);
    const densityMap = new Float32Array(gridCols * gridRows);

    // Particles array for dynamic fluid trails
    const particles: Particle[] = [];
    const maxParticles = 90;

    // Shockwaves on click
    const shockwaves: Shockwave[] = [];

    // Pointer state
    let prevMouseX = -1;
    let prevMouseY = -1;
    let mouseX = -1;
    let mouseY = -1;
    let isMouseOver = false;

    // Palette setup based on theme
    const activePalette = colors && colors.length > 0 ? colors : ['#EA580C', '#FB923C', '#FDBA74', '#38BDF8'];

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!mouseInteraction) return;
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      mouseX = clientX - rect.left;
      mouseY = clientY - rect.top;

      if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        isMouseOver = true;
        if (prevMouseX > 0 && prevMouseY > 0) {
          const dx = mouseX - prevMouseX;
          const dy = mouseY - prevMouseY;
          const speed = Math.hypot(dx, dy);

          // Inject fluid velocity at mouse position
          const gx = Math.floor((mouseX / width) * gridCols);
          const gy = Math.floor((mouseY / height) * gridRows);

          for (let cy = Math.max(0, gy - 2); cy <= Math.min(gridRows - 1, gy + 2); cy++) {
            for (let cx = Math.max(0, gx - 2); cx <= Math.min(gridCols - 1, gx + 2); cx++) {
              const idx = cy * gridCols + cx;
              const dist = Math.hypot(cx - gx, cy - gy);
              const factor = Math.exp(-dist * 1.5);
              velocityX[idx] += dx * 0.15 * factor;
              velocityY[idx] += dy * 0.15 * factor;
              densityMap[idx] = Math.min(2.5, densityMap[idx] + speed * 0.08 * factor);
            }
          }

          // Emit fluid trail particles
          if (particles.length < maxParticles && speed > 2) {
            const charPool = characters.length ? characters : TECH_CHARS;
            particles.push({
              x: mouseX + (Math.random() - 0.5) * 16,
              y: mouseY + (Math.random() - 0.5) * 16,
              vx: dx * 0.35 + (Math.random() - 0.5) * 2,
              vy: dy * 0.35 + (Math.random() - 0.5) * 2,
              char: charPool[Math.floor(Math.random() * charPool.length)] || '#',
              life: 1.0,
              maxLife: 0.8 + Math.random() * 0.6,
              size: cellSize * (0.8 + Math.random() * 0.4),
              colorIdx: Math.floor(Math.random() * activePalette.length),
            });
          }
        }
        prevMouseX = mouseX;
        prevMouseY = mouseY;
      } else {
        isMouseOver = false;
        prevMouseX = -1;
        prevMouseY = -1;
      }
    };

    const onPointerLeave = () => {
      isMouseOver = false;
      prevMouseX = -1;
      prevMouseY = -1;
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (clickEffect === 'none') return;
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const cx = clientX - rect.left;
      const cy = clientY - rect.top;

      if (cx >= 0 && cx <= width && cy >= 0 && cy <= height) {
        shockwaves.push({
          x: cx,
          y: cy,
          radius: 5,
          maxRadius: Math.max(width, height) * 0.75,
          strength: 1.5,
        });

        // Burst of particles
        const burstCount = 18;
        const charPool = characters.length ? characters : TECH_CHARS;
        for (let i = 0; i < burstCount; i++) {
          const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.3;
          const speed = 2 + Math.random() * 4.5;
          particles.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            char: charPool[Math.floor(Math.random() * charPool.length)] || '*',
            life: 1.0,
            maxLife: 1.0 + Math.random() * 0.5,
            size: cellSize * 1.1,
            colorIdx: Math.floor(Math.random() * activePalette.length),
          });
        }
      }
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('mouseleave', onPointerLeave);
    container.addEventListener('mousedown', onPointerDown, { passive: true });
    container.addEventListener('touchmove', onPointerMove, { passive: true });
    container.addEventListener('touchstart', onPointerDown, { passive: true });

    // Main animation loop
    const render = () => {
      time += 0.025;

      // 1. Fade / clear canvas background
      ctx.clearRect(0, 0, width, height);

      // Light/dark wash background
      if (lightMode) {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        bgGrad.addColorStop(0.5, 'rgba(248, 250, 252, 0.95)');
        bgGrad.addColorStop(1, 'rgba(241, 245, 249, 0.95)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      } else {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, 'rgba(7, 11, 20, 0.98)');
        bgGrad.addColorStop(0.5, 'rgba(10, 14, 26, 0.98)');
        bgGrad.addColorStop(1, 'rgba(4, 7, 17, 0.98)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Diffuse and decay fluid velocity field
      for (let i = 0; i < gridCols * gridRows; i++) {
        velocityX[i] *= 0.94;
        velocityY[i] *= 0.94;
        densityMap[i] *= 0.96;
      }

      // Add gentle ambient harmonic wave motion
      const waveFreq = 0.8;
      const waveAmp = 0.35;
      for (let cy = 0; cy < gridRows; cy++) {
        for (let cx = 0; cx < gridCols; cx++) {
          const idx = cy * gridCols + cx;
          const nx = cx / gridCols;
          const ny = cy / gridRows;
          const harmonic = Math.sin(nx * 4.2 + time * waveFreq) * Math.cos(ny * 3.1 - time * 0.6);
          velocityX[idx] += harmonic * waveAmp * 0.05;
          velocityY[idx] += Math.sin(harmonic * 3.0 + time) * 0.03;
        }
      }

      // 3. Update shockwaves
      for (let sIdx = shockwaves.length - 1; sIdx >= 0; sIdx--) {
        const sw = shockwaves[sIdx];
        sw.radius += 5.5;
        sw.strength *= 0.96;

        if (sw.radius > sw.maxRadius || sw.strength < 0.05) {
          shockwaves.splice(sIdx, 1);
          continue;
        }

        // Draw luminous shockwave ripple ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = lightMode
          ? `rgba(234, 88, 12, ${sw.strength * 0.65})`
          : `rgba(251, 146, 60, ${sw.strength * 0.85})`;
        ctx.stroke();
        ctx.restore();
      }

      // 4. Render ASCII matrix characters based on fluid pressure
      ctx.font = `600 ${cellSize}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const charList = characters.length > 2 ? characters : DEFAULT_CHARS;
      const stepX = width / cols;
      const stepY = height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = (c + 0.5) * stepX;
          const cy = (r + 0.5) * stepY;

          // Local fluid velocity at this cell
          const gIdx = Math.min(gridCols * gridRows - 1, Math.floor((r / rows) * gridRows) * gridCols + Math.floor((c / cols) * gridCols));
          const vx = velocityX[gIdx] || 0;
          const vy = velocityY[gIdx] || 0;
          const localDensity = densityMap[gIdx] || 0;

          // Check distance to shockwaves
          let waveOffset = 0;
          for (let sw of shockwaves) {
            const d = Math.hypot(cx - sw.x, cy - sw.y);
            const ringDist = Math.abs(d - sw.radius);
            if (ringDist < 25) {
              waveOffset += (1 - ringDist / 25) * sw.strength;
            }
          }

          // Ambient flowing wave function
          const baseWave =
            Math.sin(c * 0.22 + time * 0.9) * 0.5 +
            Math.cos(r * 0.32 - time * 0.7) * 0.5 +
            waveOffset * 1.2 +
            localDensity * 1.5;

          const normalizedLuma = Math.max(0, Math.min(1, (baseWave + 1) * 0.5));
          if (normalizedLuma < 0.15 && Math.random() > density) continue;

          // Select ASCII glyph based on energy
          const charIndex = Math.min(
            charList.length - 1,
            Math.floor(normalizedLuma * (charList.length - 1))
          );
          const glyph = charList[charIndex];

          // Compute displaced position
          const posX = cx + vx * 2.2;
          const posY = cy + vy * 2.2;

          // Color calculation
          let alpha = Math.min(1, Math.max(0.18, normalizedLuma * glyphOpacity + localDensity * 0.4));
          let charColor: string;

          if (lightMode) {
            // Dark ink text with orange/amber accents in light mode
            if (localDensity > 0.4 || waveOffset > 0.2) {
              charColor = '#EA580C'; // Bright Orange on active energy
              alpha = 0.95;
            } else if (normalizedLuma > 0.65) {
              charColor = '#D97706'; // Amber on peak
            } else if (normalizedLuma > 0.4) {
              charColor = '#334155'; // Slate-700
            } else {
              charColor = '#64748B'; // Slate-500
              alpha = 0.35;
            }
          } else {
            // Cyber glow orange and cyan in dark mode
            if (localDensity > 0.4 || waveOffset > 0.2) {
              charColor = '#38BDF8'; // Sky cyan on active wave
              alpha = 1.0;
            } else if (normalizedLuma > 0.7) {
              charColor = '#FB923C'; // Luminous Orange
            } else if (normalizedLuma > 0.4) {
              charColor = '#EA580C'; // Brand Orange
            } else {
              charColor = '#64748B'; // Deep phosphor
              alpha = 0.4;
            }
          }

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = charColor;
          ctx.fillText(glyph, posX, posY);
          ctx.restore();
        }
      }

      // 5. Update and render dynamic fluid particles
      for (let pIdx = particles.length - 1; pIdx >= 0; pIdx--) {
        const p = particles[pIdx];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.life -= 0.02 / p.maxLife;

        if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          particles.splice(pIdx, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life * 0.9;
        ctx.fillStyle = activePalette[p.colorIdx % activePalette.length];
        ctx.font = `bold ${p.size}px ${fontFamily}`;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      }

      // 6. Draw interactive cursor fluid ripple halo
      if (isMouseOver && mouseX > 0 && mouseY > 0) {
        ctx.save();
        const pulse = 1 + Math.sin(time * 6) * 0.15;
        const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 38 * pulse);
        grad.addColorStop(0, lightMode ? 'rgba(234, 88, 12, 0.25)' : 'rgba(251, 146, 60, 0.35)');
        grad.addColorStop(1, 'rgba(234, 88, 12, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 38 * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('mouseleave', onPointerLeave);
      container.removeEventListener('mousedown', onPointerDown);
      container.removeEventListener('touchmove', onPointerMove);
      container.removeEventListener('touchstart', onPointerDown);
    };
  }, [
    colors,
    characters,
    cellSize,
    density,
    glyphOpacity,
    mouseInteraction,
    clickEffect,
    lightMode,
    fontFamily,
  ]);

  return (
    <div
      ref={containerRef}
      className={`gradient-ascii-container${className ? ` ${className}` : ''}`}
      style={style}
      {...rest}
    >
      <canvas ref={canvasRef} className="gradient-ascii-canvas" aria-hidden="true" />
    </div>
  );
};

export default GradientASCII;
