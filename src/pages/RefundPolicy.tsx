import React from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { Section } from '../components/ui/Section';
import { RefreshCcw, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const RefundPolicy: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Refund Policy & Guarantee | Steel & Stack"
        description="Understand our transparent milestone-based refund policy, discovery guarantee, and client satisfaction commitments across website and hardware projects."
      />

      <Section variant="subtle-grid" spacing="compact" className="pt-12 pb-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Customer Satisfaction</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white font-display tracking-tight">
              Refund &amp; Cancellation Policy
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
                <span>Milestone-Based Financial Transparency</span>
              </h2>
              <p>
                At <strong>Steel &amp; Stack</strong>, we structure our project billing with milestones so you never pay blindly for unseen work.
              </p>
              <p>
                Because custom digital software, responsive website development, and smart physical hardware involve direct engineering time, custom design hours, and component procurement, refunds are handled fairly according to project progress.
              </p>
            </section>

            {/* Section 2: Cancellation Before Work Commences */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">02.</span>
                <span>Cancellation Within 48 Hours of Deposit</span>
              </h2>
              <p>
                If you commission a project and decide to cancel within <strong>48 hours of initial deposit</strong> prior to the start of architecture, design prototyping, or hardware component ordering:
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
                  <strong>100% Full Refund:</strong> You will receive a complete refund of your deposit, minus standard third-party payment gateway transaction fees (if applicable).
                </p>
              </div>
            </section>

            {/* Section 3: Mid-Project Cancellation */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">03.</span>
                <span>Milestone &amp; In-Progress Cancellations</span>
              </h2>
              <p>
                Once design concepts, source code, or prototype electronics have been produced:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Design Phase:</strong> If cancellation occurs after interactive wireframes or design drafts are presented, the initial project deposit is retained to cover creative labor, but you owe zero future milestone payments.</li>
                <li><strong>Hardware &amp; Prototyping:</strong> For physical connected device projects, direct material costs (circuit board fabrication, microcontrollers, 3D printing filaments, and sensors already ordered) are strictly non-refundable once purchased.</li>
                <li><strong>Final Handover:</strong> Once full source code handover, deployment credentials, or physical device shipments have taken place and approved by the client, payments are considered final and non-refundable.</li>
              </ul>
            </section>

            {/* Section 4: Revisions & Our Quality Guarantee */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">04.</span>
                <span>Our Satisfaction &amp; Quality Guarantee</span>
              </h2>
              <p>
                If any aspect of the deliverables does not match the specifications defined in your approved project brief, our studio will provide <strong>complimentary iterative revisions</strong> during the active review window until the deliverable complies fully with the agreed scope.
              </p>
            </section>

            {/* Section 5: Monthly Care Plan Cancellations */}
            <section className="space-y-3 border-t border-slate-200/60 dark:border-slate-800/60 pt-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-2">
                <span className="text-brand-orange-500 font-mono text-sm">05.</span>
                <span>Care Plans &amp; Maintenance Subscriptions</span>
              </h2>
              <p>
                Our <strong>After-Launch Care Plan (₹1,000/month)</strong> can be cancelled at any time with zero lock-in contracts or termination fees. Simply notify our team 7 days prior to your monthly renewal date.
              </p>
            </section>

            {/* Contact Box */}
            <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                To request a project cancellation or refund:
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
export default RefundPolicy;
