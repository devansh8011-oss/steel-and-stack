import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check } from 'lucide-react';

const STORAGE_KEY = 'cookie_consent_accepted';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        // Show banner after brief delay
        const timer = setTimeout(() => setVisible(true), 900);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage unavailable, don't nag
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fadeIn"
    >
      <div className="bg-white/95 dark:bg-[#0D1322]/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-brand-orange-600 dark:text-brand-orange-400">
            <Cookie className="w-5 h-5 flex-shrink-0" />
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Zero Ad Trackers • Privacy First
            </h4>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          We use minimal local storage for functional settings (e.g. Dark/Light mode &amp; spam protection). Zero advertising cookies or tracking scripts are ever used.
        </p>

        <div className="flex items-center justify-between gap-2 pt-1">
          <Link
            to="/cookie-policy"
            onClick={() => setVisible(false)}
            className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hover:text-brand-orange-600 underline underline-offset-2"
          >
            Read Cookie Policy
          </Link>

          <button
            onClick={acceptCookies}
            className="px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white hover:bg-brand-orange-600 dark:hover:bg-brand-orange-500 text-white dark:text-slate-900 dark:hover:text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Got It</span>
          </button>
        </div>
      </div>
    </div>
  );
};
