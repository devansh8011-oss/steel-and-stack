import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#070B14]/75 backdrop-blur-[2px] py-10 pb-28 sm:pb-10 px-4 sm:px-6 sm:pr-24 lg:pr-28">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 text-center md:text-left">
          <div>
            <p className="font-medium text-slate-700 dark:text-slate-300">
              © 2026 Steel &amp; Stack Studio. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              High-Speed Websites, Custom Business Software &amp; Smart Connected Devices
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-brand-orange-600 dark:hover:text-brand-orange-400 font-bold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange-500" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>

        {/* Legal Policies & Transparency Row */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              to="/terms"
              className="hover:text-brand-orange-600 dark:hover:text-brand-orange-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link
              to="/privacy"
              className="hover:text-brand-orange-600 dark:hover:text-brand-orange-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              to="/cookie-policy"
              className="hover:text-brand-orange-600 dark:hover:text-brand-orange-400 transition-colors"
            >
              Cookie Policy
            </Link>
            <span>•</span>
            <Link
              to="/refund-policy"
              className="hover:text-brand-orange-600 dark:hover:text-brand-orange-400 transition-colors"
            >
              Refund Policy
            </Link>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Rate Limited &amp; Spam Protected • 100% Code Ownership</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

