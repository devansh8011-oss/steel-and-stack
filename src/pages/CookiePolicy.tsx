import React from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { Section } from '../components/ui/Section';
import { Cookie } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const CookiePolicy: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Cookie Policy | Steel & Stack"
        description="Learn about our minimal cookie usage. Steel & Stack uses zero intrusive advertising trackers and only stores functional preferences like light/dark theme."
      />

      <Section variant="subtle-grid" spacing="compact" className="pt-12 pb-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Cookie className="w-3.5 h-3.5" />
              <span>Transparent Browsing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white font-display tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              Last Updated: October 2026 • Steel &amp; Stack Technology Studio
            </p>
          </div>

          {/* Main Legal Content Container */}
          <div className="bg-white/80 dark:bg-[#0D1322]/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans shadow-subtle-card">
            
            {/* Section 1: Minimalist Stance */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">01.</span>
                <span>Minimalist Cookie Philosophy</span>
              </h2>
              <p>
                Unlike bloated corporate websites, <strong>Steel &amp; Stack uses zero third-party cross-site marketing cookies, tracking pixels, or intrusive surveillance beacons</strong>.
              </p>
              <p>
                We believe in lean, lightning-fast digital experiences that respect your device resources, data plan, and online autonomy.
              </p>
            </section>

            {/* Section 2: What We Store Locally */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">02.</span>
                <span>Essential Functional Storage We Use</span>
              </h2>
              <p>
                We solely use browser storage (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white">localStorage</code> and session memory) for essential technical features:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white block">
                    steel_theme
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Stores your chosen UI visual theme preference (Light Mode or Dark Mode) across page reloads.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white block">
                    rate_limit_*
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Temporary local timestamps that protect our contact forms and AI assistant from repetitive spam floods.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white block">
                    cookie_consent_accepted
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Remembers your consent confirmation so you do not see the policy banner on every visit.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white block">
                    Zero Ad Retargeting
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    We never sell ad space or embed third-party surveillance scripts from ad exchanges.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Managing Preferences */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">03.</span>
                <span>Managing &amp; Clearing Browser Storage</span>
              </h2>
              <p>
                Because we do not store tracking cookies, disabling cookies in your browser settings will not impair your browsing experience on our website. You can clear local preferences at any time through your browser developer tools or cache settings.
              </p>
            </section>

            {/* Contact Box */}
            <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                Questions on our storage policies?
              </span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-xs font-mono font-bold text-brand-orange-600 hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
};
export default CookiePolicy;
