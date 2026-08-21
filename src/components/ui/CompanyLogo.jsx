import React from 'react';

export const CompanyLogo = ({ companyName, className = "w-7 h-7" }) => {
  const name = companyName ? companyName.trim() : "";

  switch (name) {
    case "Microsoft":
      return (
        <div className={`${className} grid grid-cols-2 gap-0.5 p-0.5 rounded bg-slate-950 border border-slate-800`}>
          <div className="bg-[#F25022] rounded-xs" />
          <div className="bg-[#7FBA00] rounded-xs" />
          <div className="bg-[#00A4EF] rounded-xs" />
          <div className="bg-[#FFB900] rounded-xs" />
        </div>
      );

    case "ServiceNow":
      return (
        <div className={`${className} rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="8" strokeDasharray="30" strokeDashoffset="5" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      );

    case "Cisco":
      return (
        <div className={`${className} rounded-lg bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 14h2v6H4zm4-4h2v10H8zm4-4h2v14h-2zm4 4h2v10h-2zm4 4h2v6h-2z"/>
          </svg>
        </div>
      );

    case "Philips":
      return (
        <div className={`${className} rounded-lg bg-blue-950/80 border border-blue-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 15a4 4 0 110-8 4 4 0 010 8z"/>
          </svg>
        </div>
      );

    case "SMBC":
      return (
        <div className={`${className} rounded-lg bg-emerald-950/90 border border-amber-500/50 flex items-center justify-center overflow-hidden relative`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-amber-400 opacity-80" />
          <span className="relative z-10 text-[10px] font-black text-slate-950 font-heading">SMBC</span>
        </div>
      );

    case "DTCC":
      return (
        <div className={`${className} rounded-lg bg-blue-900/90 border border-cyan-400/50 flex items-center justify-center`}>
          <span className="text-[9px] font-black text-cyan-300 font-mono tracking-tighter">DTCC</span>
        </div>
      );

    case "Hyland":
      return (
        <div className={`${className} rounded-lg bg-teal-950 border border-teal-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M6 4v16M18 4v16M6 12h12"/>
          </svg>
        </div>
      );

    case "HLB Global":
      return (
        <div className={`${className} rounded-lg bg-sky-950 border border-sky-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z"/>
          </svg>
        </div>
      );

    case "Prodapt":
      return (
        <div className={`${className} rounded-lg bg-cyan-950 border border-cyan-400/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
      );

    case "Hexaware":
      return (
        <div className={`${className} rounded-lg bg-indigo-950 border border-indigo-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2l9 4.9v9.8L12 22l-9-4.9V6.9L12 2z"/>
          </svg>
        </div>
      );

    case "Rocket India":
      return (
        <div className={`${className} rounded-lg bg-rose-950 border border-rose-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.19-1.81-.7-2.71a2.3 2.3 0 00-2.3-.29z"/>
            <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 01-3.95 2z"/>
          </svg>
        </div>
      );

    case "Sapphire":
      return (
        <div className={`${className} rounded-lg bg-blue-950 border border-blue-400/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 3h12l4 6-10 12L2 9l4-6z"/>
          </svg>
        </div>
      );

    case "Orion":
      return (
        <div className={`${className} rounded-lg bg-purple-950 border border-purple-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z"/>
          </svg>
        </div>
      );

    case "Raptee":
      return (
        <div className={`${className} rounded-lg bg-amber-950 border border-amber-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h7v8l10-12h-7V2z"/>
          </svg>
        </div>
      );

    case "Multicoreware":
      return (
        <div className={`${className} rounded-lg bg-cyan-950 border border-cyan-500/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <rect x="8" y="8" width="3" height="3" fill="currentColor"/>
            <rect x="13" y="8" width="3" height="3" fill="currentColor"/>
            <rect x="8" y="13" width="3" height="3" fill="currentColor"/>
            <rect x="13" y="13" width="3" height="3" fill="currentColor"/>
          </svg>
        </div>
      );

    case "Namma Yatrai":
      return (
        <div className={`${className} rounded-lg bg-emerald-950 border border-emerald-400/50 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      );

    case "MF":
      return (
        <div className={`${className} rounded-lg bg-purple-950 border border-purple-400/50 flex items-center justify-center`}>
          <span className="text-[10px] font-black text-purple-300 font-heading">MF</span>
        </div>
      );

    default:
      return (
        <div className={`${className} rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-extrabold text-xs font-heading`}>
          {name ? name.charAt(0) : "C"}
        </div>
      );
  }
};
