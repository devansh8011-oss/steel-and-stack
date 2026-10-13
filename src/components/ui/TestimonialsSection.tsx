import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <div id="reviews" className="space-y-12 sm:space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800/60">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange-600 dark:text-brand-orange-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400">
            Client Experiences
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-display">
          What Founders &amp; Teams Say About Us
        </h2>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          Real results from business owners and organizations who chose direct collaboration, fixed timelines, and clean engineering.
        </p>
      </div>

      {/* Testimonials Grid (2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
        {SITE_CONFIG.reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 dark:hover:border-brand-orange-500/60 rounded-2xl sm:rounded-[24px] p-6 sm:p-7 shadow-subtle-card hover:shadow-hover-card flex flex-col justify-between transition-all group"
          >
            <div className="space-y-4">
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)]"
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-brand-orange-200 dark:text-brand-orange-950/80 group-hover:text-brand-orange-500/40 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans italic">
                "{rev.content}"
              </p>
            </div>

            {/* Author Profile */}
            <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange-500/40 shadow-xs flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white font-display leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {rev.role}, <strong className="text-slate-700 dark:text-slate-300 font-semibold">{rev.company}</strong>
                  </p>
                </div>
              </div>

              {/* Verified Pill */}
              <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
