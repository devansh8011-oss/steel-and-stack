import React from 'react';
import { Section } from '../components/ui/Section';
import { TechnicalInquirySection } from '../components/forms/TechnicalInquirySection';
import { MetaTags } from '../components/seo/MetaTags';
import { SITE_CONFIG } from '../config/site';
import { MessageSquare, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Contact & Technical Support | Steel & Stack"
        description="Reach out directly to Steel & Stack. We respond to all technical inquiries and project briefs within 24 hours."
      />

      {/* Hero / Form Section */}
      <Section
        variant="subtle-grid"
        spacing="normal"
        className="pt-10 pb-16 relative overflow-hidden"
      >
        <TechnicalInquirySection />

        {/* Additional Studio Quick Channels */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-center">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <Phone className="w-4 h-4 text-brand-orange-500 mx-auto mb-1.5" />
            <span className="text-slate-500 uppercase text-[10px] block font-bold">Direct Phone</span>
            <a href={SITE_CONFIG.phoneHref} className="font-bold text-slate-900 hover:text-brand-orange-600">
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <MessageSquare className="w-4 h-4 text-emerald-600 mx-auto mb-1.5" />
            <span className="text-slate-500 uppercase text-[10px] block font-bold">WhatsApp Direct</span>
            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-900 hover:text-brand-orange-600"
            >
              Start Conversation
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <MapPin className="w-4 h-4 text-brand-orange-500 mx-auto mb-1.5" />
            <span className="text-slate-500 uppercase text-[10px] block font-bold">Studio Coverage</span>
            <strong className="text-slate-900 block font-bold">Pan-India Delivery</strong>
          </div>
        </div>
      </Section>
    </>
  );
};
