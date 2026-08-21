import React from 'react';

// A leaf in the dossier. `wash` keeps the original stained-glass tint for
// supporting content; `block` floods the panel with its ink so a card can
// carry real colour weight when it needs to be seen across a hall.
const wash = {
  brass: 'before:bg-brass border-brass/45 bg-brass/[0.10]',
  oxblood: 'before:bg-oxblood border-oxblood/45 bg-oxblood/[0.10]',
  verdigris: 'before:bg-verdigris border-verdigris/45 bg-verdigris/[0.10]',
  sapphire: 'before:bg-sapphire border-sapphire/45 bg-sapphire/[0.10]',
  none: 'before:bg-transparent border-line bg-ink-raised'
};

const block = {
  brass: 'before:bg-brass-bright border-brass/70 bg-brass/[0.22]',
  oxblood: 'before:bg-oxblood-bright border-oxblood/70 bg-oxblood/[0.22]',
  verdigris: 'before:bg-verdigris-bright border-verdigris/70 bg-verdigris/[0.22]',
  sapphire: 'before:bg-sapphire-bright border-sapphire/70 bg-sapphire/[0.22]',
  none: 'before:bg-line-bright border-line-bright bg-ink-raised'
};

export const Panel = ({
  children,
  className = '',
  accent = 'none',
  variant = 'wash',
  padding = 'p-6'
}) => {
  const tone = (variant === 'block' ? block : wash)[accent] || wash.none;
  return (
    <div
      className={`relative border ${padding} before:absolute before:inset-x-0 before:top-0 before:h-[4px] ${tone} ${className}`}
    >
      {children}
    </div>
  );
};
