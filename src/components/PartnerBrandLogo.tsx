import React from 'react';

interface PartnerBrandLogoProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showIcon?: boolean;
  showSubtitle?: boolean;
  theme?: 'light' | 'dark';
}

export default function PartnerBrandLogo({
  name,
  className = '',
  size = 'md',
  showText = true,
  theme = 'light'
}: PartnerBrandLogoProps) {
  const normName = name.toLowerCase().trim();

  const textSizes = {
    sm: 'text-xs font-semibold',
    md: 'text-sm font-bold tracking-tight',
    lg: 'text-base font-extrabold tracking-tight'
  };

  // 1. SearchInform
  if (normName.includes('searchinform') || normName.includes('fileauditor') || normName.includes('risk monitor')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-sans tracking-tight leading-none ${textSizes[size]} ${
          theme === 'light' ? 'text-slate-900' : 'text-white'
        }`}>
          <span className="font-extrabold text-slate-800 dark:text-slate-100">Search</span>
          <span className="font-light text-[#f97316]">Inform</span>
        </span>
      </div>
    );
  }

  // 2. PNPSECURE (DBSAFER)
  if (normName.includes('pnpsecure') || normName.includes('dbsafer') || normName.includes('pnp')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-sans tracking-tight leading-none ${textSizes[size]} ${
          theme === 'light' ? 'text-neutral-900' : 'text-white'
        }`}>
          <span className="font-black text-[#0056b3] dark:text-[#38bdf8]">PNP</span>
          <span className="font-extrabold text-neutral-800 dark:text-neutral-200">SECURE</span>
        </span>
      </div>
    );
  }

  // 3. DatumBridge
  if (normName.includes('datumbridge') || normName.includes('datum')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-sans tracking-tight leading-none ${textSizes[size]} ${
          theme === 'light' ? 'text-neutral-900' : 'text-white'
        }`}>
          <span className="font-black text-neutral-900 dark:text-white">Datum</span>
          <span className="font-extrabold text-[#e31e24]">Bridge</span>
        </span>
      </div>
    );
  }

  // 4. LEXcentra
  if (normName.includes('lexcentra') || normName.includes('lex')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-sans tracking-tight leading-none ${textSizes[size]} ${
          theme === 'light' ? 'text-neutral-900' : 'text-white'
        }`}>
          <span className="font-black text-indigo-950 dark:text-indigo-200">LEX</span>
          <span className="font-bold text-[#e31e24]">centra</span>
        </span>
      </div>
    );
  }

  // 5. Lumination
  if (normName.includes('lumination') || normName.includes('zeebrain') || normName.includes('lead360')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-sans tracking-tight leading-none ${textSizes[size]} ${
          theme === 'light' ? 'text-neutral-900' : 'text-white'
        }`}>
          <span className="font-extrabold text-neutral-900 dark:text-white">LUMI</span>
          <span className="font-light text-[#e31e24]">NATION</span>
        </span>
      </div>
    );
  }

  // 6. VNETWORK (Default / Platform Anchor)
  if (normName.includes('vnetwork')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-sans tracking-tight leading-none ${textSizes[size]} ${
          theme === 'light' ? 'text-neutral-900' : 'text-white'
        }`}>
          <span className="font-black text-[#e31e24]">V</span>
          <span className="font-bold text-neutral-900 dark:text-white">NETWORK</span>
        </span>
      </div>
    );
  }

  // 7. General Partner Name Fallback
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className={`font-sans tracking-tight leading-none ${textSizes[size]} ${
        theme === 'light' ? 'text-neutral-900 font-bold' : 'text-white font-bold'
      }`}>
        {name}
      </span>
    </div>
  );
}
