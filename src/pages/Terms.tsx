import React from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { Section } from '../components/ui/Section';
import { Scale } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Terms: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Terms & Conditions | Steel & Stack"
        description="Review the terms and conditions governing project engagements, deliverables, 100% intellectual property ownership, and service agreements with Steel & Stack."
      />

      <Section variant="subtle-grid" spacing="compact" className="pt-12 pb-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange-50 dark:bg-brand-orange-950/40 border border-brand-orange-200 dark:border-brand-orange-800 text-brand-orange-600 dark:text-brand-orange-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white font-display tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              Last Updated: October 2026 • Steel &amp; Stack Technology Studio
            </p>
          </div>

          {/* Main Legal Content Container */}
          <div className="bg-white/80 dark:bg-[#0D1322]/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans shadow-subtle-card">
            
            {/* Section 1: Introduction */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">01.</span>
                <span>Engagement &amp; Acceptance</span>
              </h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern the digital and hardware design, development, and engineering services provided by <strong>Steel &amp; Stack</strong> (&quot;Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to our clients (&quot;Client&quot;, &quot;you&quot;).
              </p>
              <p>
                By commissioning a project, accepting a written project scope/estimate, making an initial deposit, or using our website, you expressly agree to be bound by these Terms in full.
              </p>
            </section>

            {/* Section 2: 100% Code & Asset Ownership */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">02.</span>
                <span>100% Intellectual Property &amp; Code Ownership</span>
              </h2>
              <p>
                We believe in total founder independence. Upon final payment and project sign-off:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Complete Source Code:</strong> You receive 100% ownership of your tailored website code, software scripts, and custom firmware repositories.</li>
                <li><strong>Design Assets:</strong> All custom UI/UX design components, graphical layouts, and assets created specifically for your project become your exclusive property.</li>
                <li><strong>Zero Hostage Fees:</strong> We do not charge recurring software lease fees or enforce proprietary lock-in. You are free to host, migrate, or extend your project anywhere.</li>
              </ul>
            </section>

            {/* Section 3: Project Milestones & Delivery */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">03.</span>
                <span>Delivery Timelines &amp; Client Cooperation</span>
              </h2>
              <p>
                Estimated delivery schedules (such as 7–10 days for Starter websites or 10–14 days for Smart Website + AI packages) are calculated based on prompt receipt of client feedback, text content, logos, and approvals.
              </p>
              <p>
                Delays resulting from late content submission, scope expansion, or prolonged feedback cycles may adjust final deployment dates accordingly.
              </p>
            </section>

            {/* Section 4: Revisions & Scope Changes */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">04.</span>
                <span>Revisions &amp; Scope Modifications</span>
              </h2>
              <p>
                Each fixed package includes specified rounds of revisions (e.g., 2 full rounds for Starter and Smart Website packages) to refine layout, typography, colors, and content structure.
              </p>
              <p>
                Any requests for new functional requirements, additional pages, third-party API integrations, or architectural changes outside the original signed scope will be estimated transparently as a separate milestone.
              </p>
            </section>

            {/* Section 5: Rate Limiting & Acceptable Use */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">05.</span>
                <span>Acceptable Use, Rate Limiting &amp; AI Usage</span>
              </h2>
              <p>
                Our interactive web services, inquiry forms, and Cortex AI assistant operate under automated <strong>rate limits, word count ceilings, and token thresholds</strong> to protect server availability and prevent abusive automated scraping.
              </p>
              <p>
                Users agree not to flood the system, attempt reverse engineering, inject malicious scripts, or abuse rate-limited communication channels.
              </p>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">06.</span>
                <span>Limitation of Liability</span>
              </h2>
              <p>
                Steel &amp; Stack executes all engineering and design using industry best practices. However, we are not liable for indirect, incidental, or consequential losses, including lost revenue, downtime caused by third-party hosting providers (e.g. AWS, Vercel), domain registrar failures, or client modifications made to code after handover.
              </p>
            </section>

            {/* Section 7: Contact Info */}
            <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                Questions regarding our legal terms?
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
export default Terms;
