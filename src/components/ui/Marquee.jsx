import React from 'react';

export const Marquee = ({ items = [], speed = 25 }) => {
  // Duplicate array so marquee scrolls seamlessly without breaks
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 mask-gradient">
      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

      <div 
        className="flex gap-6 w-max animate-marquee"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg group hover:border-cyan-500/50 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 flex items-center justify-center text-cyan-400 font-bold text-sm border border-cyan-500/30">
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">{item.name}</p>
              <p className="text-[11px] text-slate-400 font-medium">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};
