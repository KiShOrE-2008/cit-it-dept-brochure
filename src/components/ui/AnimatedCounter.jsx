import React, { useEffect, useState } from 'react';

export const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0, isActive = true }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const numericEnd = parseFloat(end);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quad formula for smooth decelerating animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = easedProgress * numericEnd;
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isActive]);

  const formattedValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span className="inline-block tracking-tight font-extrabold font-heading">
      {prefix}{formattedValue}{suffix}
    </span>
  );
};
