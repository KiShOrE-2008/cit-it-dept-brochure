import React from 'react';

export const GlassCard = ({ children, className = '', hoverGlow = true, variant = 'default' }) => {
  const baseClasses = 'relative rounded-2xl p-6 transition-all duration-300 overflow-hidden';
  
  const variants = {
    default: 'glass-panel text-slate-100',
    gold: 'gold-glass-card text-amber-100',
    cyan: 'bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-slate-100 shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    dark: 'bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-100'
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${hoverGlow ? 'glass-card-hover' : ''} ${className}`}>
      {/* Subtle top glare highlight line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
