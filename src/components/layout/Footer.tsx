import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#070B14] py-7 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 text-center sm:text-left">
        <p>© 2026 Steel &amp; Stack Studio. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="text-brand-orange-600 dark:text-brand-orange-400 font-bold tracking-wide">
            Engineering the Future of Tech
          </span>
          <span className="text-slate-300 dark:text-slate-700 font-bold">•</span>
        </div>
      </div>
    </footer>
  );
};

