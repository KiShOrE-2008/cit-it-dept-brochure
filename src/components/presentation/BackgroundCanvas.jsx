import React from 'react';

export const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950">
      {/* Dynamic ambient color spotlights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-600/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-blue-600/15 blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[160px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Subtle tech grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle particle dust dots */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-4/5 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/6 left-2/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" style={{ animationDuration: '6s' }} />
      </div>
    </div>
  );
};
