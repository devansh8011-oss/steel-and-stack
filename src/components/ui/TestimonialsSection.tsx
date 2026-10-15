import React, { useState } from 'react';
import { SITE_CONFIG } from '../../config/site';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = SITE_CONFIG.reviews[activeIndex] || SITE_CONFIG.reviews[0];

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

      {/* Interactive 2-Column Reviews Layout matching Image 1 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Spotlight Active Review Card (span 7 cols on lg) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-subtle-card flex flex-col justify-between min-h-[360px] sm:min-h-[420px] transition-all relative overflow-hidden">
          
          <div className="space-y-6">
            {/* Top Row: Stars Rating & Large Quotation Mark */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)]"
                    />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-1.5">
                  5.0 Verified Review
                </span>
              </div>

              {/* Large Stylized Quotation Mark */}
              <Quote className="w-10 h-10 text-brand-orange-400/50 dark:text-brand-orange-500/40 select-none flex-shrink-0" />
            </div>

            {/* Quotation Body */}
            <blockquote className="text-base sm:text-xl md:text-2xl font-display font-medium text-slate-900 dark:text-slate-100 leading-relaxed tracking-tight">
              &ldquo;{activeReview.content}&rdquo;
            </blockquote>
          </div>

          {/* Bottom Row: Reviewer Details (No Key Benchmark box as requested) */}
          <div className="pt-6 sm:pt-8 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={activeReview.image}
                alt={activeReview.name}
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-brand-orange-500/50 shadow-xs flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white font-display leading-tight">
                    {activeReview.name}
                  </h4>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20 flex-shrink-0" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-tight mt-0.5">
                  {activeReview.role}
                </p>
                <span className="text-xs font-mono font-bold text-brand-orange-600 dark:text-brand-orange-400 block mt-1">
                  {activeReview.company}
                </span>
              </div>
            </div>

            {/* Project Deliverable Pill */}
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Delivered Project
              </span>
              <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                {activeReview.project}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clickable List of Reviewers (span 5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-3.5">
          {SITE_CONFIG.reviews.map((rev, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={rev.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center gap-3.5 group cursor-pointer ${
                  isSelected
                    ? 'bg-brand-orange-50/80 dark:bg-brand-orange-950/30 border-2 border-brand-orange-500/90 dark:border-brand-orange-500/80 shadow-xs'
                    : 'bg-white/80 dark:bg-[#0D1322]/80 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/70 dark:hover:bg-slate-900/50'
                }`}
              >
                {/* Author Avatar */}
                <img
                  src={rev.image}
                  alt={rev.name}
                  className={`w-11 h-11 rounded-full object-cover flex-shrink-0 transition-transform duration-200 ${
                    isSelected
                      ? 'border-2 border-brand-orange-500 scale-105'
                      : 'border border-slate-200 dark:border-slate-700 group-hover:border-slate-400'
                  }`}
                />

                {/* Info Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h5
                      className={`text-sm font-bold font-display leading-tight truncate ${
                        isSelected
                          ? 'text-slate-950 dark:text-white'
                          : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white'
                      }`}
                    >
                      {rev.name}
                    </h5>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5 font-sans">
                    {rev.company}
                  </p>
                  <p className="text-[10px] font-mono font-medium text-brand-orange-600 dark:text-brand-orange-400 truncate mt-0.5">
                    {rev.project}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
