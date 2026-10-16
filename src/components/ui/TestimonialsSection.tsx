import React, { useState, useRef } from 'react';
import { SITE_CONFIG } from '../../config/site';
import { Star, Quote, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = SITE_CONFIG.reviews;
  const activeReview = reviews[activeIndex] || reviews[0];
  const spotlightRef = useRef<HTMLDivElement>(null);

  const selectReview = (index: number) => {
    setActiveIndex(index);
    // Smooth scroll spotlight into view on mobile if needed
    if (window.innerWidth < 1024 && spotlightRef.current) {
      spotlightRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handlePrev = () => {
    const prev = activeIndex === 0 ? reviews.length - 1 : activeIndex - 1;
    selectReview(prev);
  };

  const handleNext = () => {
    const next = activeIndex === reviews.length - 1 ? 0 : activeIndex + 1;
    selectReview(next);
  };

  return (
    <div id="reviews" className="space-y-6 sm:space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800/60">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange-600 dark:text-brand-orange-400" />
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400">
            Client Experiences
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-display">
          What Founders &amp; Teams Say
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-xl mx-auto">
          Real results from business owners who chose direct collaboration, fixed timelines, and clean engineering.
        </p>
      </div>

      {/* Main Reviews Container matching User Reference Images */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start px-4">
        
        {/* TOP / LEFT: Spotlight Active Review Card (span 7 cols on lg) */}
        <div
          ref={spotlightRef}
          className="lg:col-span-7 bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-8 md:p-9 shadow-subtle-card flex flex-col justify-between transition-all relative overflow-hidden"
        >
          <div className="space-y-4 sm:space-y-5">
            {/* Top Row: Stars Rating & Quotation Mark */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 ml-1.5">
                  5.0 Verified Review
                </span>
              </div>

              {/* Large Styled Quote Mark matching Reference Image */}
              <Quote className="w-10 h-10 text-orange-300/80 dark:text-brand-orange-500/40 select-none flex-shrink-0" />
            </div>

            {/* Quotation Body */}
            <blockquote className="text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-100 font-sans leading-relaxed">
              &ldquo;{activeReview.content}&rdquo;
            </blockquote>
          </div>

          {/* Bottom Reviewer Info */}
          <div className="pt-4 sm:pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3.5">
            <img
              src={activeReview.image}
              alt={activeReview.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange-500/70 shadow-2xs flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-base font-bold font-display text-slate-950 dark:text-white leading-tight truncate">
                  {activeReview.name}
                </h4>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20 flex-shrink-0" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-tight mt-0.5 truncate">
                {activeReview.role}
              </p>
              <span className="text-xs font-semibold text-brand-orange-600 dark:text-brand-orange-400 block mt-0.5 truncate">
                {activeReview.company}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM / RIGHT: List of Reviewer Cards (span 5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {reviews.map((rev, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={rev.id}
                onClick={() => selectReview(index)}
                type="button"
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-center gap-3.5 group cursor-pointer ${
                  isSelected
                    ? 'bg-orange-50/70 dark:bg-brand-orange-950/30 border border-brand-orange-400 dark:border-brand-orange-500 shadow-2xs'
                    : 'bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Author Avatar */}
                <img
                  src={rev.image}
                  alt={rev.name}
                  className={`w-11 h-11 rounded-full object-cover flex-shrink-0 transition-transform duration-200 ${
                    isSelected
                      ? 'border-2 border-brand-orange-500 scale-102 shadow-2xs'
                      : 'border border-slate-200 dark:border-slate-700'
                  }`}
                />

                {/* Info Text */}
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-bold font-display text-slate-950 dark:text-white leading-tight truncate">
                    {rev.name}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5 font-sans">
                    {rev.role}, {rev.company}
                  </p>
                  <p className="text-[11px] font-mono font-medium text-brand-orange-600 dark:text-brand-orange-400 truncate mt-1">
                    {rev.project}
                  </p>
                </div>
              </button>
            );
          })}

          {/* Bottom Pagination Controls matching Reference Image 2: < 1 / 4 > */}
          <div className="flex items-center justify-center gap-4 pt-3 pb-1">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D1322] hover:border-brand-orange-500 hover:text-brand-orange-500 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 tracking-wider">
              {activeIndex + 1} / {reviews.length}
            </span>

            <button
              onClick={handleNext}
              type="button"
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D1322] hover:border-brand-orange-500 hover:text-brand-orange-500 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;
