import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { Building2, GraduationCap, School, Cpu, Sparkles, ShieldCheck, Home } from 'lucide-react';

const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hygea: Home,
  Shipmate: Building2,
  'IIT Jodhpur': GraduationCap,
  DPS: School,
  'Orange Tech': Cpu,
  Cocoadotts: Sparkles,
};

export const TrustedBy: React.FC = () => {
  return (
    <div className="w-full py-8 sm:py-10 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#070B14]/65 backdrop-blur-[2px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Title */}
          <div className="text-center md:text-left flex-shrink-0 space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-brand-orange-600 dark:text-brand-orange-400 font-mono text-[11px] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-wider font-display">
              Trusted by Ambitious Brands &amp; Teams
            </h3>
          </div>

          {/* Logos / Badges Grid */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3.5">
            {SITE_CONFIG.trustedOrganisations.map((org) => {
              const Icon = iconsMap[org.short] || Building2;
              return (
                <div
                  key={org.name}
                  className="group bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 dark:hover:border-brand-orange-500/60 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-2xs dark:shadow-sm flex items-center gap-2.5 transition-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-orange-50 dark:bg-brand-orange-950/50 border border-brand-orange-200 dark:border-brand-orange-800/70 flex items-center justify-center text-brand-orange-600 dark:text-brand-orange-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight font-display">
                      {org.name}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 block leading-tight">
                      {org.industry}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
