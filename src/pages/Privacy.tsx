import React from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { Section } from '../components/ui/Section';
import { Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Privacy: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Privacy Policy | Steel & Stack"
        description="Learn how Steel & Stack safeguards your personal details, project briefs, NDA information, and technical specifications with strict privacy measures."
      />

      <Section variant="subtle-grid" spacing="compact" className="pt-12 pb-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" />
              <span>Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white font-display tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              Last Updated: October 2026 • Steel &amp; Stack Technology Studio
            </p>
          </div>

          {/* Main Legal Content Container */}
          <div className="bg-white/80 dark:bg-[#0D1322]/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans shadow-subtle-card">
            
            {/* Section 1: Overview */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">01.</span>
                <span>Our Privacy Commitment</span>
              </h2>
              <p>
                At <strong>Steel &amp; Stack</strong>, we take confidentiality seriously. We are engineers and builders, not data brokers. We never sell, rent, monetize, or publicly disclose your personal information, company specifications, or business plans.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">02.</span>
                <span>Information We Collect</span>
              </h2>
              <p>
                We only collect data that you voluntarily provide to communicate with our studio:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Contact Inquiries:</strong> Your name, email address, company name, and project descriptions submitted via our project inquiry forms.</li>
                <li><strong>Interactive AI Conversations:</strong> Queries asked to our Cortex AI assistant to generate project guidance and estimates.</li>
                <li><strong>Technical Telemetry:</strong> Standard non-identifying telemetry (browser type, device screen dimensions, general geographic region) used strictly to verify site speed and performance.</li>
              </ul>
            </section>

            {/* Section 3: How We Use Your Data */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">03.</span>
                <span>How We Use Your Information</span>
              </h2>
              <p>Your details are used solely to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Prepare and email customized project scopes, architecture plans, and fixed-price estimates within 24 to 48 hours.</li>
                <li>Fulfill our contractual obligations and deliver software or hardware engineering milestones.</li>
                <li>Apply rate limiting and security mechanisms to shield our infrastructure from bot spam and DDoS attacks.</li>
              </ul>
            </section>

            {/* Section 4: Non-Disclosure & Intellectual Property */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">04.</span>
                <span>Non-Disclosure Agreements (NDA)</span>
              </h2>
              <p>
                All proprietary product concepts, hardware schematics, API secrets, and trade algorithms shared with Steel &amp; Stack are treated as strictly confidential. We readily sign mutual Non-Disclosure Agreements (NDAs) prior to detailed architecture sessions upon request.
              </p>
            </section>

            {/* Section 5: Data Retention & Security */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">05.</span>
                <span>Data Retention &amp; Rights</span>
              </h2>
              <p>
                You retain complete rights over your personal data. You may at any time request the deletion, correction, or export of your inquiry history and records by contacting us at <strong>contact@steelandstack.com</strong>.
              </p>
            </section>

            {/* Contact Box */}
            <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                Privacy or data deletion inquiries:
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
export default Privacy;
