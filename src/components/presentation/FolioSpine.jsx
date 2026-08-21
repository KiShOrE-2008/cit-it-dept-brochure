import React from 'react';
import { presentationData } from '../../data/presentationData';

// The signature device: a permanent book-spine along the left edge that
// reframes the whole presentation as a folio being read through, not a
// slide deck being clicked through. Replaces the old top progress bar.
export const FolioSpine = ({ currentScene, totalScenes, sceneTitle, progressPct }) => {
  const num = String(currentScene + 1).padStart(2, '0');
  const total = String(totalScenes).padStart(2, '0');

  return (
    <>
      {/* Desktop: full vertical spine */}
      <div className="hidden md:flex fixed inset-y-0 left-0 z-40 w-24 flex-col items-center justify-between py-8 border-r border-line bg-ink-raised/90">
        <div className="flex flex-col items-center gap-3">
          <img src={presentationData.heroImages.logo} alt="CIT" className="w-10 h-auto rounded-[4px]" />
          <span className="font-mono text-xs tracking-[0.25em] text-parchment-dim [writing-mode:vertical-rl]">
            CIT · DEPT OF IT
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <span className="font-mono text-sm tracking-[0.2em] uppercase font-medium text-brass-soft [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
            {sceneTitle}
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[3px] h-28 bg-line overflow-hidden">
            <div
              className="absolute bottom-0 left-0 w-full bg-brass"
              style={{ height: `${progressPct}%` }}
            />
          </div>
          <span className="font-mono text-sm text-parchment tabular-lining">
            {num}<span className="text-parchment-faint">/{total}</span>
          </span>
        </div>
      </div>

      {/* Mobile: condensed top strip */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 py-2.5 border-b border-line bg-ink-raised/95">
        <span className="font-mono text-sm text-parchment tabular-lining">{num}<span className="text-parchment-faint">/{total}</span></span>
        <span className="font-mono text-xs tracking-[0.15em] uppercase text-brass-soft truncate max-w-[60%]">{sceneTitle}</span>
      </div>
      <div className="md:hidden fixed top-[42px] inset-x-0 z-40 h-[3px] bg-line overflow-hidden">
        <div className="h-full bg-brass" style={{ width: `${progressPct}%` }} />
      </div>
    </>
  );
};
