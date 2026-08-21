import React from 'react';

// A leaf in the dossier: a hairline border and a top rule in one jewel
// ink, with a faint wash of that same ink behind it — like a page lit
// by a single stained-glass color rather than a flat sheet of glass.
const tones = {
  brass: 'before:bg-brass border-brass/35 bg-brass/[0.07]',
  oxblood: 'before:bg-oxblood border-oxblood/35 bg-oxblood/[0.07]',
  verdigris: 'before:bg-verdigris border-verdigris/35 bg-verdigris/[0.07]',
  sapphire: 'before:bg-sapphire border-sapphire/35 bg-sapphire/[0.07]',
  none: 'before:bg-transparent border-line bg-ink-raised',
};

export const Panel = ({ children, className = '', accent = 'none', padding = 'p-6' }) => (
  <div
    className={`relative border ${padding} before:absolute before:inset-x-0 before:top-0 before:h-[3px] ${tones[accent]} ${className}`}
  >
    {children}
  </div>
);
