import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { MetaTags } from '../components/seo/MetaTags';
import { InteractiveCard } from '../components/ui/InteractiveCard';
import { TrustedBy } from '../components/ui/TrustedBy';
import { PricingSection } from '../components/ui/PricingSection';
import { TestimonialsSection } from '../components/ui/TestimonialsSection';
import { ServicesProcessSection } from '../components/ui/ServicesProcessSection';
import { RoboticsDiagram } from '../components/ui/RoboticsDiagram';
import { TechnicalInquirySection } from '../components/forms/TechnicalInquirySection';
import { openAIChat } from '../services/chatEvents';
import {
  Cpu,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  Truck,
  Wrench,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Steel & Stack | Fast Websites, Custom Software & Smart Hardware"
        description="We build fast, modern websites, custom business software, and smart hardware prototypes. 100% code ownership, fixed pricing, and rapid delivery across India."
      />

      {/* 1. HERO SECTION WITH 3D INTERACTIVE VISUALIZER */}
      <Section
        variant="subtle-grid"
        spacing="normal"
        className="pt-10 md:pt-16 pb-12 md:pb-20 border-b border-slate-200/80 relative overflow-hidden"
      >
        {/* Warm Ambient Glow in Brand Orange */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[350px] bg-gradient-to-tr from-brand-orange-100/70 via-amber-100/40 to-transparent dark:from-brand-orange-600/25 dark:via-amber-600/15 dark:to-transparent rounded-full blur-[130px] dark:blur-[145px] pointer-events-none -z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 px-3.5 sm:px-4 py-1.5 rounded-full shadow-xs max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-slate-800 dark:text-slate-200 uppercase leading-snug">
                Websites, Custom Software &amp; Smart Devices <span className="text-slate-300 dark:text-slate-600">•</span> Operating Pan-India
              </span>
            </motion.div>

            {/* Tagline & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.14] font-display flex flex-col items-center">
                <span>
                  Websites <span className="text-brand-orange-600">&amp;</span> Digital Products
                </span>
                {/* Luminous Animated Laser Beam Running All Around the Tagline */}
                <div className="relative inline-flex items-center justify-center mt-2 sm:mt-3 p-[2px] sm:p-[2.5px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(249,115,22,0.22)] max-w-[95vw]">
                  {/* Rotating Conic Laser Beam Running All Around with Smooth Cadence */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-[300%] pointer-events-none opacity-85"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 0deg, transparent 280deg, #FDBA74 325deg, #EA580C 360deg)',
                    }}
                  />
                  {/* Inner Crisp Container */}
                  <div className="relative z-10 px-3.5 sm:px-9 py-2 sm:py-3.5 rounded-[14px] sm:rounded-[22px] bg-white/95 dark:bg-[#070B14]/95 backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 text-center">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-orange-500 animate-pulse flex-shrink-0" />
                    <span className="bg-gradient-to-r from-brand-orange-600 via-amber-500 to-brand-orange-600 bg-clip-text text-transparent font-black tracking-tight text-lg sm:text-4xl lg:text-5xl drop-shadow-xs text-center">
                      Engineering the Future of Tech
                    </span>
                  </div>
                </div>
              </h1>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                href="#capabilities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-xs hover:border-brand-orange-400 transition-all"
              >
                <span>See What We Build</span>
                <ChevronDown className="w-4 h-4 text-brand-orange-500" />
              </a>
            </motion.div>

            {/* Streamlined ROI Value Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 max-w-3xl mx-auto text-left"
            >
              <div className="bg-white/95 dark:bg-[#0D1424]/95 border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 dark:hover:border-brand-orange-500/50 px-3 py-2 sm:py-2.5 rounded-xl shadow-xs dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all">
                <span className="text-[9px] font-mono font-bold text-brand-orange-600 dark:text-brand-orange-400 uppercase tracking-widest block truncate">
                  Page Speed
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block font-display mt-0.5">
                  Under 1 Second
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">Instant phone &amp; laptop load</span>
              </div>
              <div className="bg-white/95 dark:bg-[#0D1424]/95 border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 dark:hover:border-brand-orange-500/50 px-3 py-2 sm:py-2.5 rounded-xl shadow-xs dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all">
                <span className="text-[9px] font-mono font-bold text-brand-orange-600 dark:text-brand-orange-400 uppercase tracking-widest block truncate">
                  Your Ownership
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block font-display mt-0.5">
                  100% Complete
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">Zero monthly agency fees</span>
              </div>
              <div className="bg-white/95 dark:bg-[#0D1424]/95 border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 dark:hover:border-brand-orange-500/50 px-3 py-2 sm:py-2.5 rounded-xl shadow-xs dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all">
                <span className="text-[9px] font-mono font-bold text-brand-orange-600 dark:text-brand-orange-400 uppercase tracking-widest block truncate">
                  Clear Pricing
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block font-display mt-0.5">
                  24 - 48 Hours
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">Fixed quote, zero surprises</span>
              </div>
              <div className="bg-white/95 dark:bg-[#0D1424]/95 border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 dark:hover:border-brand-orange-500/50 px-3 py-2 sm:py-2.5 rounded-xl shadow-xs dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all">
                <span className="text-[9px] font-mono font-bold text-brand-orange-600 dark:text-brand-orange-400 uppercase tracking-widest block truncate">
                  Reach &amp; Support
                </span>
                <strong className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block font-display mt-0.5">
                  Pan-India &amp; Global
                </strong>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">Direct engineer collaboration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* TRUSTED BY ORGANISATIONS & INSTITUTES */}
      <TrustedBy />

      {/* 2. CAPABILITIES & BUSINESS SOLUTIONS */}
      <Section
        id="capabilities"
        variant="white"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block mb-1">
              What We Build
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-display">
              Simple, Powerful Solutions for Growing Businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 font-mono">
              Three clear ways we help founders, business owners, and creators turn ideas into high-quality products.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Track 01: Web Platforms */}
            <InteractiveCard cardClassName="bg-slate-50 dark:bg-[#0D1322] p-5 sm:p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-orange-400 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-widest">
                    Track 01 • Business Websites
                  </span>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white font-display mt-0.5">
                    Fast, High-Converting Websites
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Clean company websites, product showcases, and landing pages designed to build trust, look stunning on mobile, and convert visitors into paying clients.
                </p>
                <ul className="space-y-2 font-mono text-[11px] text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Loads in under 1 second (<strong className="text-emerald-600 dark:text-emerald-400">zero bounce</strong>)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Looks gorgeous on phones, tablets &amp; desktops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Built-in Google SEO setup so customers find you</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => openAIChat("I'd like to discuss a new website project. What is the process, timeline, and deliverables?")}
                  type="button"
                  className="w-full py-3 px-4 bg-white dark:bg-slate-900 hover:bg-brand-orange-50 dark:hover:bg-brand-orange-950/30 border border-slate-300 dark:border-slate-700 hover:border-brand-orange-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Discuss Your Website</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange-500" />
                </button>
              </div>
            </InteractiveCard>

            {/* Track 02: SaaS & Web Apps */}
            <InteractiveCard cardClassName="bg-slate-50 dark:bg-[#0D1322] p-5 sm:p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-orange-400 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-widest">
                    Track 02 • Custom Software
                  </span>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white font-display mt-0.5">
                    Custom Web Portals &amp; Tools
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Client accounts, internal management portals, and digital dashboards that automate repetitive work and save your team dozens of hours every week.
                </p>
                <ul className="space-y-2 font-mono text-[11px] text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Custom software tailored to your exact workflow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Online payments, automated receipts &amp; email alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Secure password-protected logins for clients &amp; staff</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => openAIChat("I'd like to discuss building a Custom Web App / Client Portal. What is the process and timeline?")}
                  type="button"
                  className="w-full py-3 px-4 bg-white dark:bg-slate-900 hover:bg-brand-orange-50 dark:hover:bg-brand-orange-950/30 border border-slate-300 dark:border-slate-700 hover:border-brand-orange-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Discuss Your Web App</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange-500" />
                </button>
              </div>
            </InteractiveCard>

            {/* Track 03: Hardware & IoT Lab */}
            <InteractiveCard cardClassName="bg-slate-50 dark:bg-[#0D1322] p-5 sm:p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-orange-400 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-widest">
                    Track 03 • Smart Hardware
                  </span>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white font-display mt-0.5">
                    Smart Hardware &amp; Prototypes
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Have an idea for a physical gadget, smart device, or automated machine? We design the electronics, program the controls, and build working prototypes.
                </p>
                <ul className="space-y-2 font-mono text-[11px] text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Wireless controls via smartphone, Wi-Fi &amp; Bluetooth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Tested circuit boards, quiet motors &amp; precision sensors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                    <span>Insured courier shipping anywhere across India</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => openAIChat("I'd like to discuss a Smart Hardware / Physical Prototype idea. What is the process and timeline?")}
                  type="button"
                  className="w-full py-3 px-4 bg-white dark:bg-slate-900 hover:bg-brand-orange-50 dark:hover:bg-brand-orange-950/30 border border-slate-300 dark:border-slate-700 hover:border-brand-orange-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Discuss Your Hardware Idea</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange-500" />
                </button>
              </div>
            </InteractiveCard>
          </div>

          {/* Hardware Architecture Deep-Dive */}
          <div className="mt-10 sm:mt-14">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block mb-1">
                Behind the Scenes
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-display">
                Real Working Hardware You Can Test
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 font-mono">
                Every hardware project ships with complete circuit files, easy software setup, and full ownership in your hands.
              </p>
            </div>
            <RoboticsDiagram />
          </div>
        </div>
      </Section>

      {/* 3. CONTINUOUS SCROLL SECTION: SERVICES & SPRINT PIPELINE */}
      <Section
        id="process"
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
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 dark:bg-brand-orange-950/40 text-brand-orange-600 dark:text-brand-orange-400 flex items-center justify-center mb-4 border border-brand-orange-200 dark:border-brand-orange-800/60">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 dark:text-white uppercase tracking-wider">
                Direct Collaboration
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                No middle managers or endless games of telephone. You speak directly with the experts actually building your product.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 dark:bg-brand-orange-950/40 text-brand-orange-600 dark:text-brand-orange-400 flex items-center justify-center mb-4 border border-brand-orange-200 dark:border-brand-orange-800/60">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 dark:text-white uppercase tracking-wider">
                Instant Speeds
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Websites that open instantly on any phone or laptop. Customers never wait, and Google rewards you with higher search ranking.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 dark:bg-brand-orange-950/40 text-brand-orange-600 dark:text-brand-orange-400 flex items-center justify-center mb-4 border border-brand-orange-200 dark:border-brand-orange-800/60">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 dark:text-white uppercase tracking-wider">
                100% Ownership
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                You own every line of code, design file, and asset from day one. Zero recurring agency hostage fees or proprietary lock-in.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 dark:bg-brand-orange-950/40 text-brand-orange-600 dark:text-brand-orange-400 flex items-center justify-center mb-4 border border-brand-orange-200 dark:border-brand-orange-800/60">
                <Truck className="w-5 h-5" />
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

      {/* 5. PRICING SECTION */}
      <Section
        id="pricing"
        variant="slate"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto">
          <PricingSection />
        </div>
      </Section>

      {/* 6. CLIENT REVIEWS & TESTIMONIALS */}
      <Section
        id="reviews"
        variant="white"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto">
          <TestimonialsSection />
        </div>
      </Section>

      {/* 7. DIRECT PROJECT INGESTION & SCOPING TERMINAL */}
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
