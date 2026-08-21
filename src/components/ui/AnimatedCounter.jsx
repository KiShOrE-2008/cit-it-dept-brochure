import React, { useEffect, useRef, useState } from 'react';

// Counts up from zero whenever the scene opens. When the scene closes it
// HOLDS its final value rather than resetting — the frame is fading out at
// that moment, and a figure snapping back to zero mid-fade is visible.
export const AnimatedCounter = ({
  end,
  duration = 1600,
  suffix = '',
  prefix = '',
  decimals = 0,
  isActive = true
}) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    const target = parseFloat(end);
    if (Number.isNaN(target)) return;

    let start = null;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) frameRef.current = window.requestAnimationFrame(step);
    };

    frameRef.current = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [end, duration, isActive]);

  const shown = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span className="inline-block font-display tabular-lining tracking-tight">
      {prefix}
      {shown}
      {suffix}
    </span>
  );
};
