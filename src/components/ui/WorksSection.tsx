import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const WorksSection: React.FC = () => {
  return (
    <div id="works" className="space-y-12 sm:space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800/60">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange-600 dark:text-brand-orange-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400">
            Featured Portfolio
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-display">
          Our Recent Works
        </h2>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          Real commercial websites and digital platforms built with ultra-fast loading speeds, bespoke design, and zero bloat.
        </p>
      </div>

      {/* 3 Portfolio Boxes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {SITE_CONFIG.works.map((work) => (
          <div
            key={work.id}
            className="group bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-500/80 rounded-2xl sm:rounded-[24px] overflow-hidden shadow-subtle-card hover:shadow-hover-card transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Half: Browser Frame & Screenshot */}
            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              {/* Browser Window Bar Mockup */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-100/90 dark:bg-[#0A0E18] border-b border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="px-2.5 py-0.5 rounded-md bg-white/70 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[180px]">
                  {work.url.replace(/^https?:\/\//, '')}
                </div>
                <div className="w-4" />
              </div>

              {/* Cover Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Bottom Half: Details & One-liner */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-orange-600 dark:text-brand-orange-400">
                    {work.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-950 dark:text-white group-hover:text-brand-orange-500 transition-colors">
                  {work.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {work.oneLiner}
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold text-slate-800 dark:text-slate-200 bg-slate-100/90 dark:bg-slate-800/80 hover:bg-brand-orange-500 hover:text-white dark:hover:bg-brand-orange-500 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-brand-orange-500 transition-all duration-200"
                >
                  <span>Visit Live Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
