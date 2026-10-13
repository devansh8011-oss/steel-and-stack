import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#070B14]/75 backdrop-blur-[2px] py-8 pb-24 sm:pb-8 px-4 sm:px-6 sm:pr-24 lg:pr-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 text-center md:text-left">
        <div>
          <p className="font-medium">© 2026 Steel &amp; Stack Studio. All rights reserved.</p>
          <p className="text-[11px] text-slate-400 mt-0.5">High-Speed Websites, Custom Business Software &amp; Smart Devices</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
          <a
            href={SITE_CONFIG.phoneHref}
            className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-brand-orange-600 dark:hover:text-brand-orange-400 font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange-500" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-brand-orange-600 dark:hover:text-brand-orange-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{SITE_CONFIG.email}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

