import React from 'react';
import { Section } from '../components/ui/Section';
import { TechnicalInquirySection } from '../components/forms/TechnicalInquirySection';
import { MetaTags } from '../components/seo/MetaTags';
import { SITE_CONFIG } from '../config/site';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Contact Us &amp; Get a Quote | Steel &amp; Stack"
        description="Reach out directly to Steel & Stack. We respond to all project inquiries with a clear plan and fixed quote within 24 hours."
      />

      {/* Hero / Form Section */}
      <Section
        variant="subtle-grid"
        spacing="normal"
        className="pt-10 pb-16 relative overflow-hidden"
      >
        <TechnicalInquirySection />

        {/* Additional Studio Quick Channels */}
        <div className="max-w-2xl mx-auto mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-center">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <Mail className="w-4 h-4 text-brand-orange-500 mx-auto mb-1.5" />
            <span className="text-slate-500 uppercase text-[10px] block font-bold">Direct Email</span>
            <a href={`mailto:${SITE_CONFIG.email}`} className="font-bold text-slate-900 dark:text-white hover:text-brand-orange-600">
              {SITE_CONFIG.email}
            </a>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <MapPin className="w-4 h-4 text-brand-orange-500 mx-auto mb-1.5" />
            <span className="text-slate-500 uppercase text-[10px] block font-bold">Studio Coverage</span>
            <strong className="text-slate-900 dark:text-white block font-bold">Pan-India &amp; Global Delivery</strong>
          </div>
        </div>
      </Section>
    </>
  );
};
