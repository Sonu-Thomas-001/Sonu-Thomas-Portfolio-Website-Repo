import React, { useEffect, useRef, useState } from 'react';

export interface AsciiWaveProps {
  className?: string;
  speed?: number;
  density?: number;
  baseLevel?: number; // 0.0 (top) to 1.0 (bottom)
  interactive?: boolean;
}

export const AsciiWave: React.FC<AsciiWaveProps> = ({
  className = '',
  speed = 1.0,
  density = 1.0,
  baseLevel = 0.58,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; strength: number }>({
    x: -9999,
    y: -9999,
    strength: 0,
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Grid sizing
    const charW = Math.max(12, Math.round(15 / density));
    const charH = Math.max(14, Math.round(17 / density));
    const fontSize = Math.max(11, Math.round(13 / density));

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    const updateSize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const w = Math.max(rect.width || container.clientWidth || window.innerWidth, 300);
      const h = Math.max(rect.height || container.clientHeight || 200, 160);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = w;
      height = h;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / charW) + 1;
      rows = Math.ceil(h / charH) + 1;
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);
    window.addEventListener('resize', updateSize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.strength = Math.min(mouseRef.current.strength + 0.15, 1);
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    // Character set matching reference: ['.', ':', '+', '*', 'x', '#']
    const CHAR_MAP = [' ', '.', ':', '+', '*', 'x', '#'];

    // Main render loop
    const render = () => {
      if (width === 0 || height === 0) {
        updateSize();
      }

      ctx.clearRect(0, 0, width, height);

      time += 0.022 * speed;
      mouseRef.current.strength *= 0.96; // Smooth decay

      const mouse = mouseRef.current;

      // Color scheme
      // In dark mode: luminous emerald/mint
      // In light mode: deep teal/emerald
      const baseEmerald = isDarkMode ? '#34D399' : '#0D9488';
      const crestColor = isDarkMode ? '#6EE7B7' : '#059669';
      const deepColor = isDarkMode ? '#10B981' : '#047857';

      ctx.font = `bold ${fontSize}px "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let c = 0; c < cols; c++) {
        const xPos = c * charW;
        const normX = c / Math.max(cols, 1);

        // Multi-layered harmonic wave simulation with controlled amplitude
        const wave1 = Math.sin(normX * 5.2 + time * 1.3) * 0.16;
        const wave2 = Math.sin(normX * 10.5 - time * 0.9) * 0.08;
        const wave3 = Math.cos(normX * 16.0 + time * 1.6) * 0.04;
        const wave = wave1 + wave2 + wave3;

        // Interactive ripple disturbance from mouse
        let ripple = 0;
        if (mouse.x > -500) {
          const dx = xPos - mouse.x;
          const dist = Math.abs(dx);
          const maxDist = 120;
          if (dist < maxDist) {
            const factor = Math.cos((dist / maxDist) * (Math.PI / 2));
            ripple = Math.sin(dist * 0.12 - time * 7) * factor * 0.18 * (mouse.strength + 0.3);
          }
        }

        // Fluid surface height line (kept in the lower horizon)
        const surfaceRatio = baseLevel + wave + ripple;
        const surfaceRow = Math.floor(surfaceRatio * rows);

        for (let r = 0; r < rows; r++) {
          const yPos = r * charH;
          const depth = r - surfaceRow;

          if (depth < -1) {
            // Upper sky: rare subtle mist dot
            if (depth === -2 && Math.sin(c * 3 + r * 5 + time) > 0.82) {
              ctx.fillStyle = crestColor;
              ctx.globalAlpha = isDarkMode ? 0.2 : 0.18;
              ctx.fillText('.', xPos, yPos);
            }
            continue;
          }

          let char = ' ';
          let alpha = 1;
          let fill = baseEmerald;

          if (depth === -1) {
            char = '.';
            alpha = isDarkMode ? 0.45 : 0.4;
            fill = crestColor;
          } else if (depth === 0) {
            char = ':';
            alpha = isDarkMode ? 0.65 : 0.6;
            fill = crestColor;
          } else if (depth === 1) {
            char = '+';
            alpha = isDarkMode ? 0.8 : 0.75;
            fill = crestColor;
          } else if (depth === 2) {
            char = '*';
            alpha = 0.88;
            fill = baseEmerald;
          } else if (depth === 3) {
            char = 'x';
            alpha = 0.92;
            fill = baseEmerald;
          } else {
            // Deep fluid core
            const pattern = (c + r) % 3;
            char = pattern === 0 ? '#' : pattern === 1 ? 'x' : '+';
            fill = deepColor;
            // Smooth bottom fade out so it blends with the next section
            const depthFromBottom = (rows - r) / rows;
            alpha = Math.min(0.95, depthFromBottom * 1.5);
          }

          ctx.fillStyle = fill;
          ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
          ctx.fillText(char, xPos, yPos);
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed, density, baseLevel, interactive, isDarkMode]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default AsciiWave;
