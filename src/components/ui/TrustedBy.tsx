import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { CurvedLoop } from './CurvedLoop/CurvedLoop';

export const TrustedBy: React.FC = () => {
  return (
    <div className="w-full py-5 sm:py-8 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#070B14]/80 backdrop-blur-md relative overflow-hidden select-none">
      {/* Header Label */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-3 sm:mb-4 text-center">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-orange-500" />
          <span>Trusted by Ambitious Brands, Enterprises &amp; Institutes</span>
        </div>
      </div>

      {/* Dynamic Ribbon containing the official names of all partner brands */}
      <div className="w-full relative overflow-hidden">
        <CurvedLoop
          marqueeText="ORANGE FUTURE TECH • IIT JODHPUR • DPS INDIRAPURAM • COCOADOTTS • HYGEA • SHIPMATE LOGISTICS • CARDGEN SUITE • STEEL & STACK • 100% CODE OWNERSHIP"
          shape="wave"
          ribbon={true}
          ribbonColor="#EA580C"
          ribbonGradient={['#EA580C', '#F97316', '#EA580C']}
          ribbonWidth={68}
          speed={2.2}
          curveAmount={120}
          direction="left"
          fontSize={44}
          fontWeight={900}
          letterSpacing={2}
          separator="•"
          separatorColor="#FFFFFF"
          color="#FFFFFF"
          interactive={true}
          pauseOnHover={false}
          className="font-display font-black tracking-widest text-white drop-shadow-xs"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
