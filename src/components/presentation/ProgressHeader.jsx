import React from 'react';

export const ProgressHeader = ({ currentScene, totalScenes, sceneTitle, progressPct }) => {
  return (
    <div className="fixed top-0 inset-x-0 z-40 px-6 py-4 flex items-center justify-between pointer-events-none">
      {/* Left branding */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md p-1 shadow-lg pointer-events-auto">
          <img src="/assets/cit_logo.png" alt="CIT Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <div className="text-xs font-extrabold tracking-wider text-cyan-400 font-heading">
            CHENNAI INSTITUTE OF TECHNOLOGY
          </div>
          <div className="text-[11px] font-semibold text-slate-400">
            Department of Information Technology
          </div>
        </div>
      </div>

      {/* Center active scene title pill */}
      <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg pointer-events-auto">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">{sceneTitle}</span>
      </div>

      {/* Right Scene Indicator & Progress bar */}
      <div className="flex flex-col items-end gap-1">
        <div className="text-xs font-mono font-bold text-slate-400">
          SCENE <span className="text-cyan-400">{String(currentScene + 1).padStart(2, '0')}</span> / {String(totalScenes).padStart(2, '0')}
        </div>

        {/* Dynamic Scene Progress Bar */}
        <div className="w-32 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  );
};
