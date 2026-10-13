import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { openAIChat } from '../../services/chatEvents';

export const PricingSection: React.FC = () => {
  const scrollToContact = (planName?: string) => {
    const el = document.getElementById('contact') || document.getElementById('quote-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (planName) {
      const msgField = document.getElementById('message') as HTMLTextAreaElement | null;
      if (msgField && !msgField.value) {
        msgField.value = `Hi Devansh, I would like to get started with the ${planName} package. Please share the timeline and next steps.`;
      }
    }
  };

  return (
    <div id="pricing" className="space-y-12 sm:space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800/60">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange-600 dark:text-brand-orange-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400">
            Website Packages &amp; Custom Scope
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-display">
          Simple, Upfront Pricing
        </h2>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          Clear, fixed prices confirmed in writing before work begins. Zero agency markup, zero hidden surprises, and 100% complete ownership.
        </p>
      </div>

      {/* Primary Packages (2-Col Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
        {SITE_CONFIG.pricing.packages.map((pkg) => {
          const isPopular = pkg.popular;
          return (
            <div
              key={pkg.id}
              className={`rounded-2xl sm:rounded-[28px] p-6 sm:p-9 flex flex-col justify-between transition-all relative ${
                isPopular
                  ? 'bg-gradient-to-b from-white to-orange-50/40 dark:from-[#0F172A] dark:to-[#0B101E] border-2 border-brand-orange-500 shadow-[0_20px_50px_-15px_rgba(234,88,12,0.25)]'
                  : 'bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 shadow-subtle-card'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange-500 to-amber-500 text-white font-mono text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-orange-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>RECOMMENDED</span>
                </div>
              )}

              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-display">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed font-sans">
                    {pkg.tagline}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-mono tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => scrollToContact(pkg.name)}
                  className={`w-full py-3.5 px-6 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isPopular
                      ? 'bg-brand-orange-500 hover:bg-brand-orange-600 text-white shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5'
                      : 'bg-slate-900 dark:bg-slate-800 hover:bg-brand-orange-500 dark:hover:bg-brand-orange-500 text-white'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Row: Custom Projects & After-Launch Care Plan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
        {/* Custom Projects Card */}
        <div className="bg-slate-50 dark:bg-[#090D16] border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800 px-2.5 py-0.5 rounded-full">
                Custom Projects
              </span>
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                Tailored Scope
              </span>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white font-display">
                Bigger Ideas? We Scope Them With You
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Every automation and hardware project is different. These are priced after a short, friendly discussion with no pressure.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {SITE_CONFIG.pricing.customProjects.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-3.5 rounded-xl space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                      {item.pricing}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => openAIChat("I'd like to discuss a custom automation or robotics hardware project with Steel & Stack.")}
              className="w-full py-2.5 px-4 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand-orange-400 text-slate-800 dark:text-slate-200 hover:text-brand-orange-600 dark:hover:text-brand-orange-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Discuss Custom Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* After Launch: Care Plan & Terms */}
        <div className="bg-slate-50 dark:bg-[#090D16] border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full">
                After Launch
              </span>
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                ₹1,000 / month
              </span>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white font-display">
                Care Plan &amp; Ongoing Support
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Keep your website fast, backed up, and updated every month with zero technical stress.
              </p>
            </div>

            <ul className="space-y-2 pt-1">
              {SITE_CONFIG.pricing.carePlan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* Domain Linking Guarantee */}
            <div className="p-3 bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 rounded-xl space-y-1">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-slate-900 dark:text-white">Domain &amp; Setup:</span>
                <span className="text-brand-orange-600 dark:text-brand-orange-400">₹1,500 one-time</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal">
                You purchase your domain in your own name. We link it with SSL security so you always retain 100% ownership.
              </p>
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Cancel or pause anytime</span>
            </span>
            <span className="font-bold text-slate-700 dark:text-slate-300">Zero lock-in</span>
          </div>
        </div>
      </div>
    </div>
  );
};
