import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { MetaTags } from '../components/seo/MetaTags';
import { TrustedBy } from '../components/ui/TrustedBy';
import { PricingSection } from '../components/ui/PricingSection';
import { TestimonialsSection } from '../components/ui/TestimonialsSection';
import { WorksSection } from '../components/ui/WorksSection';
import { ServicesProcessSection } from '../components/ui/ServicesProcessSection';
import { TechnicalInquirySection } from '../components/forms/TechnicalInquirySection';
import { openAIChat } from '../services/chatEvents';
import { useTheme } from '../context/ThemeContext';
import { TechText } from '../components/ui/TechText/TechText';
import Dither from '../components/ui/Dither/Dither';
import {
  Globe,
  ArrowRight,
  ChevronDown,
  Users,
  Rocket,
  Fingerprint,
  Clock,
  Gauge,
  Key,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <MetaTags
        title="Steel & Stack | Fast Websites, Custom Software & Smart Hardware"
        description="We build fast, modern websites, custom business software, and smart hardware prototypes. 100% code ownership, fixed pricing, and rapid delivery across India."
      />

      {/* 1. DYNAMIC HERO SECTION WITH INTERACTIVE DITHER BACKGROUND & TECHTEXT */}
      <Section
        variant="subtle-grid"
        spacing="normal"
        className="pt-8 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden"
        background={
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Warm Atmospheric Ambient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[380px] bg-gradient-to-tr from-brand-orange-200/50 via-amber-100/40 to-transparent dark:from-brand-orange-600/20 dark:via-amber-600/10 dark:to-transparent rounded-full blur-[130px] dark:blur-[150px] pointer-events-none" />

            {/* Interactive Dither Wave Effect - Crisp & Visible in Both Light & Dark Mode */}
            <Dither
              waveColor={isDark ? '#F97316' : '#EA580C'}
              backgroundColor="transparent"
              ditherMode="bayer"
              colorNum={5}
              pixelSize={2.5}
              waveSpeed={0.06}
              waveFrequency={2.8}
              waveAmplitude={0.32}
              mouseEffect="ripple"
              mouseRadius={0.35}
              clickRipple={true}
              className="opacity-60 dark:opacity-40"
            />

            {/* Subtle center fade so text remains 100% readable while waves remain crisp */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35)_0%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(9,13,22,0.45)_0%,transparent_75%)]" />
          </div>
        }
      >
        <div className="max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-10">
          
          {/* Header Block */}
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            
            {/* Live Operational Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/90 dark:bg-[#0D1322]/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 px-3.5 sm:px-4 py-1.5 rounded-full shadow-xs max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-slate-800 dark:text-slate-200 uppercase leading-snug">
                Next-Gen Digital Studio <span className="text-slate-300 dark:text-slate-600">•</span> Operating Pan-India &amp; Global
              </span>
            </motion.div>

            {/* Interactive Vector Tech Wordmark (Drag & Click-Kick Enabled) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="w-full max-w-2xl mx-auto h-[70px] sm:h-[110px] relative select-none"
            >
              <TechText
                text="STEEL & STACK"
                fontWeight={900}
                fontSize={110}
                letterSpacing={-0.03}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={14}
                bounce={0.45}
                clickKick={true}
                draggable={true}
                color={isDark ? '#F8FAFC' : '#0F172A'}
                accentColor="#EA580C"
                className="w-full h-full"
              />
            </motion.div>

            {/* Tagline Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] font-display">
                Engineering the <span className="bg-gradient-to-r from-brand-orange-600 via-amber-500 to-brand-orange-600 bg-clip-text text-transparent">Future of Tech</span>
              </h1>

              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed pt-1 font-sans">
                Clean, ultra-fast commercial websites, custom client web portals, and smart connected electronics. 100% complete ownership, sub-second speeds, and direct engineer collaboration.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-1 w-full max-w-xs sm:max-w-none mx-auto"
            >
              <button
                onClick={() => openAIChat("I would like to start a project with Steel & Stack. What details do you need to get started and what is the process?")}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-7 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-xs hover:border-brand-orange-400 transition-all"
              >
                <span>Explore Our Works</span>
                <ChevronDown className="w-4 h-4 text-brand-orange-500" />
              </a>
            </motion.div>
          </div>



          {/* Elevated ROI Value Metrics Strip with Polished Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left"
          >
            {/* Metric 1: Page Speed */}
            <div className="group bg-white dark:bg-[#0D1424] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 dark:hover:border-brand-orange-500/60 p-3.5 sm:p-4 rounded-2xl shadow-subtle-card hover:shadow-hover-card transition-all flex items-start gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-amber-500/15 via-brand-orange-500/10 to-transparent border border-brand-orange-500/30 text-brand-orange-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold text-brand-orange-600 dark:text-brand-orange-400 uppercase tracking-wider block truncate">
                  Page Speed
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white block font-display leading-tight mt-0.5">
                  Under 1 Second
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate mt-0.5">
                  Instant mobile load
                </span>
              </div>
            </div>

            {/* Metric 2: Ownership */}
            <div className="group bg-white dark:bg-[#0D1424] border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/60 p-3.5 sm:p-4 rounded-2xl shadow-subtle-card hover:shadow-hover-card transition-all flex items-start gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 text-emerald-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Key className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block truncate">
                  Code Ownership
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white block font-display leading-tight mt-0.5">
                  100% Yours
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate mt-0.5">
                  Zero hostage fees
                </span>
              </div>
            </div>

            {/* Metric 3: Clear Pricing */}
            <div className="group bg-white dark:bg-[#0D1424] border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/60 p-3.5 sm:p-4 rounded-2xl shadow-subtle-card hover:shadow-hover-card transition-all flex items-start gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent border border-blue-500/30 text-blue-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block truncate">
                  Clear Pricing
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white block font-display leading-tight mt-0.5">
                  24 - 48 Hours
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate mt-0.5">
                  Fixed milestone quote
                </span>
              </div>
            </div>

            {/* Metric 4: Support */}
            <div className="group bg-white dark:bg-[#0D1424] border border-slate-200/90 dark:border-slate-800 hover:border-purple-500/60 p-3.5 sm:p-4 rounded-2xl shadow-subtle-card hover:shadow-hover-card transition-all flex items-start gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-purple-500/15 via-violet-500/10 to-transparent border border-purple-500/30 text-purple-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block truncate">
                  Reach &amp; Scale
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white block font-display leading-tight mt-0.5">
                  Pan-India &amp; Global
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate mt-0.5">
                  Direct engineer line
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* 1. TRUSTED BY COMPANIES & INSTITUTES (Mobile-Optimized Infinite Marquee) */}
      <TrustedBy />

      {/* 2. OUR WORKS / COMMERCIAL DELIVERIES */}
      <Section
        id="works"
        variant="white"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto">
          <WorksSection />
        </div>
      </Section>

      {/* 3. CONTINUOUS SCROLL SECTION: SERVICES & SPRINT PIPELINE */}
      <Section
        id="capabilities"
        variant="slate"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto">
          <ServicesProcessSection />
        </div>
      </Section>

      {/* 4. WHY AMBITIOUS BUSINESSES CHOOSE US */}
      <Section
        id="why-us"
        variant="white"
        spacing="normal"
        borderBottom
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block mb-1">
              The Studio Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-display">
              Why Ambitious Businesses Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 font-mono">
              Work directly with the people building your project. No confusing middlemen, no hidden fees, and complete ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-slate-50 dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-orange-500/15 via-amber-500/10 to-transparent border border-brand-orange-500/30 text-brand-orange-500 flex items-center justify-center mb-4 shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 dark:text-white uppercase tracking-wider">
                Direct Collaboration
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                No middle managers or endless games of telephone. You speak directly with the experts actually building your product.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-transparent border border-amber-500/30 text-amber-500 flex items-center justify-center mb-4 shadow-xs">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 dark:text-white uppercase tracking-wider">
                Instant Speeds
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Websites that open instantly on any phone or laptop. Customers never wait, and Google rewards you with higher search ranking.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-4 shadow-xs">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 dark:text-white uppercase tracking-wider">
                100% Ownership
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                You own every line of code, design file, and asset from day one. Zero recurring agency hostage fees or proprietary lock-in.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent border border-blue-500/30 text-blue-500 flex items-center justify-center mb-4 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 dark:text-white uppercase tracking-wider">
                On-Time Delivery
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Clear deadlines, weekly video walkthroughs, and live preview links so you always know exactly what is happening.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. PRICING SECTION */}
      <Section
        id="pricing"
        variant="white"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto">
          <PricingSection />
        </div>
      </Section>

      {/* 7. CLIENT REVIEWS & TESTIMONIALS */}
      <Section
        id="reviews"
        variant="slate"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto">
          <TestimonialsSection />
        </div>
      </Section>

      {/* 8. DIRECT PROJECT INGESTION & SCOPING TERMINAL */}
      <Section
        id="contact"
        variant="slate"
        spacing="normal"
        className="py-12 md:py-20 relative overflow-hidden"
      >
        <TechnicalInquirySection />
      </Section>
    </>
  );
};
