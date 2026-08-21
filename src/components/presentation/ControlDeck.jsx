import React, { useState } from 'react';

export const ControlDeck = ({
  currentScene,
  totalScenes,
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
  onSelectScene,
  sceneTitles,
  onToggleFullscreen,
  isFullscreen,
  speed,
  onChangeSpeed
}) => {
  const [showJumpMenu, setShowJumpMenu] = useState(false);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 p-2 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
      {/* Scene Jump Dropdown Button */}
      <div className="relative">
        <button
          onClick={() => setShowJumpMenu(!showJumpMenu)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700/60"
          title="Jump to Scene (Key: J)"
        >
          <span className="text-cyan-400 font-mono text-sm">
            {String(currentScene + 1).padStart(2, '0')}
          </span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400 font-mono text-xs">{String(totalScenes).padStart(2, '0')}</span>
          <span className="text-[10px] text-cyan-400 font-semibold px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800">
            SCENES ▼
          </span>
        </button>

        {/* Jump Menu Dropdown */}
        {showJumpMenu && (
          <div className="absolute bottom-14 left-0 w-64 max-h-80 overflow-y-auto p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl space-y-1 z-50">
            <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 tracking-wider uppercase border-b border-slate-800">
              Presentation Scenes
            </div>
            {sceneTitles.map((title, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectScene(idx);
                  setShowJumpMenu(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                  idx === currentScene
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="truncate pr-2">{idx + 1}. {title}</span>
                {idx === currentScene && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-5 w-[1px] bg-slate-800" />

      {/* Previous Scene Button */}
      <button
        onClick={onPrev}
        disabled={currentScene === 0}
        className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 disabled:opacity-40 text-slate-200 transition-all border border-slate-700/60"
        title="Previous Scene (Left Arrow)"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Play / Pause Toggle Button */}
      <button
        onClick={onTogglePlay}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg ${
          isPlaying
            ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 shadow-amber-500/10'
            : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 border border-cyan-400 shadow-cyan-500/20'
        }`}
        title="Play / Pause Auto-Scroll (Spacebar)"
      >
        {isPlaying ? (
          <>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
            <span>PAUSE</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>AUTO PLAY</span>
          </>
        )}
      </button>

      {/* Next Scene Button */}
      <button
        onClick={onNext}
        disabled={currentScene === totalScenes - 1}
        className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 disabled:opacity-40 text-slate-200 transition-all border border-slate-700/60"
        title="Next Scene (Right Arrow / Space)"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="h-5 w-[1px] bg-slate-800" />

      {/* Speed selector */}
      <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
        {[
          { label: 'Fast', sec: 14 },
          { label: 'Normal', sec: 22 },
          { label: 'Slow', sec: 35 }
        ].map((s) => (
          <button
            key={s.label}
            onClick={() => onChangeSpeed(s.sec)}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
              speed === s.sec
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Fullscreen Button */}
      <button
        onClick={onToggleFullscreen}
        className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-all border border-slate-700/60"
        title="Toggle Fullscreen (Key: F)"
      >
        {isFullscreen ? (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0l5 0m-5 0l0 5m11 0l5-5m0 0l-5 0m5 0l0 5m-5 11l5 5m0 0l-5 0m5 0l0-5m-11 0l-5 5m0 0l5 0m-5 0l0-5" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>
    </div>
  );
};
