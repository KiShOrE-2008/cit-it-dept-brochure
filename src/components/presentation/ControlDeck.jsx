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
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 z-40 flex items-center gap-1 px-2 py-2 bg-ink-raised/95 border border-line">
      {/* Scene index */}
      <div className="relative">
        <button
          onClick={() => setShowJumpMenu(!showJumpMenu)}
          className="flex items-center gap-2 px-3 py-2 text-parchment-dim hover:text-brass transition-colors font-mono text-sm"
          title="Jump to Scene (Key: J)"
        >
          <span className="text-brass tabular-lining">{String(currentScene + 1).padStart(2, '0')}</span>
          <span className="text-parchment-faint">/{String(totalScenes).padStart(2, '0')}</span>
          <span className="hidden sm:inline text-xs tracking-[0.15em] uppercase ml-1">Index</span>
        </button>

        {showJumpMenu && (
          <div className="absolute bottom-14 right-0 w-72 max-h-80 overflow-y-auto bg-ink-raised border border-line shadow-2xl z-50">
            <div className="px-4 py-2.5 text-xs font-mono tracking-[0.15em] uppercase text-parchment-faint border-b border-line">
              Table of Scenes
            </div>
            {sceneTitles.map((title, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectScene(idx);
                  setShowJumpMenu(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-body flex items-center gap-3 border-b border-line/50 transition-colors ${
                  idx === currentScene
                    ? 'bg-brass/10 text-brass'
                    : 'text-parchment-dim hover:text-parchment hover:bg-ink/60'
                }`}
              >
                <span className="font-mono text-sm tabular-lining shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                <span className="truncate">{title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-4 w-px bg-line" />

      <button
        onClick={onPrev}
        disabled={currentScene === 0}
        className="p-2.5 text-parchment-dim hover:text-brass disabled:opacity-30 disabled:hover:text-parchment-dim transition-colors"
        title="Previous Scene (Left Arrow)"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onTogglePlay}
        className={`flex items-center gap-2 px-4 py-2 font-mono text-sm tracking-[0.12em] uppercase transition-colors ${
          isPlaying ? 'text-brass' : 'text-parchment-dim hover:text-brass'
        }`}
        title="Play / Pause Auto-Scroll (Spacebar)"
      >
        {isPlaying ? (
          <>
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
            <span>Pause</span>
          </>
        ) : (
          <>
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            <span>Play</span>
          </>
        )}
      </button>

      <button
        onClick={onNext}
        disabled={currentScene === totalScenes - 1}
        className="p-2.5 text-parchment-dim hover:text-brass disabled:opacity-30 disabled:hover:text-parchment-dim transition-colors"
        title="Next Scene (Right Arrow / Space)"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="h-4 w-px bg-line" />

      <div className="hidden sm:flex items-center gap-0.5">
        {[
          { label: 'Fast', sec: 14 },
          { label: 'Normal', sec: 22 },
          { label: 'Slow', sec: 35 }
        ].map((s) => (
          <button
            key={s.label}
            onClick={() => onChangeSpeed(s.sec)}
            className={`px-2 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
              speed === s.sec ? 'text-brass' : 'text-parchment-faint hover:text-parchment-dim'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="hidden sm:block h-4 w-px bg-line" />

      <button
        onClick={onToggleFullscreen}
        className="p-2.5 text-parchment-dim hover:text-brass transition-colors"
        title="Toggle Fullscreen (Key: F)"
      >
        {isFullscreen ? (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0l5 0m-5 0l0 5m11 0l5-5m0 0l-5 0m5 0l0 5m-5 11l5 5m0 0l-5 0m5 0l0-5m-11 0l-5 5m0 0l5 0m-5 0l0-5" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>
    </div>
  );
};
