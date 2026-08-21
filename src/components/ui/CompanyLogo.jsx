import React from 'react';

// Recruiters are recorded the way a ledger records a house: as a monogram
// seal struck in the page's ink, not as a corporate logo cloud. Microsoft
// keeps its authentic four-square mark — it is the one recruiter a parent
// recognises on sight, and its colours already sit inside the jewel palette.
//
// Every other company resolves to initials, so a new recruiter needs no code.
const SEAL_INK = {
  brass: 'border-brass/70 text-brass-bright',
  oxblood: 'border-oxblood/70 text-oxblood-bright',
  verdigris: 'border-verdigris/70 text-verdigris-bright',
  sapphire: 'border-sapphire/70 text-sapphire-bright',
  parchment: 'border-line-bright text-parchment'
};

const initialsOf = (name) => {
  const words = String(name || '')
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) return '—';
  // An all-caps token is already an abbreviation (SMBC, DTCC, HLB) — keep it.
  if (words[0] === words[0].toUpperCase() && words[0].length >= 2) {
    return words[0].slice(0, 4);
  }
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

export const CompanyLogo = ({ companyName, className = 'w-9 h-9', tone = 'parchment' }) => {
  const name = companyName ? companyName.trim() : '';

  if (name === 'Microsoft') {
    return (
      <div
        className={`${className} grid grid-cols-2 gap-[2px] p-[3px] border border-line-bright bg-ink-deep shrink-0`}
        aria-hidden="true"
      >
        <div className="bg-[#F25022]" />
        <div className="bg-[#7FBA00]" />
        <div className="bg-[#00A4EF]" />
        <div className="bg-[#FFB900]" />
      </div>
    );
  }

  const label = initialsOf(name);

  return (
    <div
      className={`${className} border bg-ink-deep flex items-center justify-center shrink-0 ${
        SEAL_INK[tone] || SEAL_INK.parchment
      }`}
      aria-hidden="true"
    >
      <span
        className={`font-display font-extrabold leading-none ${
          label.length > 2 ? 'text-[0.62em]' : 'text-[0.8em]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};
