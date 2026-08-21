import React, { useEffect, useRef } from 'react';

export const GlobeVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Globe parameters
    const globeRadius = Math.min(width, height) * 0.35;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Generate 3D latitude & longitude dots
    const dots = [];
    const numDots = 400;
    
    for (let i = 0; i < numDots; i++) {
      const phi = Math.acos(-1 + (2 * i) / numDots);
      const theta = Math.sqrt(numDots * Math.PI) * phi;
      dots.push({
        x: globeRadius * Math.cos(theta) * Math.sin(phi),
        y: globeRadius * Math.sin(theta) * Math.sin(phi),
        z: globeRadius * Math.cos(phi)
      });
    }

    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angleY += 0.005;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Render dots
      dots.forEach((dot, index) => {
        // Rotate around Y axis
        const x1 = dot.x * cosY - dot.z * sinY;
        const z1 = dot.z * cosY + dot.x * sinY;
        const y1 = dot.y;

        // Perspective scale factor
        const scale = 300 / (300 + z1);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y1 * scale;
        const alpha = Math.max(0.1, (z1 + globeRadius) / (2 * globeRadius));

        // Draw dot
        ctx.beginPath();
        ctx.arc(screenX, screenY, 1.6 * scale, 0, Math.PI * 2);
        ctx.fillStyle = z1 > 0 ? `rgba(91, 143, 212, ${alpha})` : `rgba(245, 238, 218, ${alpha * 0.35})`;
        ctx.fill();

        // Connect some dots to form network lines
        if (index % 12 === 0) {
          const nextDot = dots[(index + 15) % numDots];
          const nx1 = nextDot.x * cosY - nextDot.z * sinY;
          const nz1 = nextDot.z * cosY + nextDot.x * sinY;
          const ny1 = nextDot.y;

          if (z1 > -50 && nz1 > -50) {
            const nscale = 300 / (300 + nz1);
            const nscreenX = centerX + nx1 * nscale;
            const nscreenY = centerY + ny1 * nscale;

            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(nscreenX, nscreenY);
            ctx.strokeStyle = `rgba(91, 143, 212, ${alpha * 0.25})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
      {/* Central static seal */}
      <div className="relative z-10 px-8 py-6 rounded-full border border-sapphire/50 bg-ink-deep/70 text-center">
        <div className="text-2xl font-display text-sapphire-soft">ICCIIT &apos;25</div>
        <div className="text-sm font-mono uppercase tracking-[0.15em] text-parchment-dim mt-1">Scopus &amp; IEEE Sponsored</div>
      </div>
    </div>
  );
};
