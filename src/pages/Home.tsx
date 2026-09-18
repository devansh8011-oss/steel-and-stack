import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { MetaTags } from '../components/seo/MetaTags';
import { PerspectiveCard } from '../components/ui/PerspectiveCard';
import { IsometricBoard } from '../components/ui/IsometricBoard';
import { IsometricBrowser } from '../components/ui/IsometricBrowser';
import { ServicesProcessSection } from '../components/ui/ServicesProcessSection';
import { RoboticsDiagram } from '../components/ui/RoboticsDiagram';
import { TechnicalInquirySection } from '../components/forms/TechnicalInquirySection';
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
  Microchip,
} from 'lucide-react';

export const Home: React.FC = () => {
  const [heroMode, setHeroMode] = useState<'hardware' | 'web'>('web');

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact') || document.getElementById('quote-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <MetaTags
        title="Steel & Stack | High-Performance Web Platforms & Connected Tech"
        description="Modern web platforms, custom websites, and connected technology engineered with React 19, sub-second speeds, and conversion-focused design."
      />

      {/* 1. HERO SECTION WITH 3D INTERACTIVE VISUALIZER */}
      <Section
        variant="subtle-grid"
        spacing="normal"
        className="pt-10 md:pt-16 pb-16 md:pb-24 border-b border-slate-200/80 relative overflow-hidden"
      >
        {/* Warm Ambient Glow in Brand Orange */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-brand-orange-100/70 via-amber-100/40 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-slate-800 uppercase leading-snug">
                Web Platforms &amp; Digital Studio <span className="text-slate-300">•</span> Operating Pan-India
              </span>
            </motion.div>

            {/* Tagline & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.14] font-display flex flex-col items-center">
                <span>
                  Websites <span className="text-brand-orange-600">&amp;</span> Platforms
                </span>
                {/* Luminous Animated Laser Beam Running All Around the Tagline */}
                <div className="relative inline-flex items-center justify-center mt-3 p-[2px] sm:p-[2.5px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(249,115,22,0.22)] max-w-[95vw]">
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
                  <div className="relative z-10 px-4 sm:px-9 py-2 sm:py-3.5 rounded-[14px] sm:rounded-[22px] bg-white/95 backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 text-center">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-orange-500 animate-pulse flex-shrink-0" />
                    <span className="bg-gradient-to-r from-brand-orange-600 via-amber-500 to-brand-orange-600 bg-clip-text text-transparent font-black tracking-tight text-xl sm:text-4xl lg:text-5xl drop-shadow-xs text-center">
                      Engineering the Futures of Tech
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 w-full max-w-xs sm:max-w-none mx-auto"
            >
              <button
                onClick={scrollToQuote}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#capabilities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-sm hover:border-brand-orange-400 transition-all"
              >
                <span>Explore Capabilities</span>
                <ChevronDown className="w-4 h-4 text-brand-orange-500" />
              </a>
            </motion.div>

            {/* ROI Value Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-4 max-w-3xl mx-auto text-left"
            >
              <div className="bg-white/90 border border-slate-200/90 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xs">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-wider sm:tracking-widest block truncate">
                  Core Web Vitals
                </span>
                <strong className="text-sm sm:text-base font-bold text-slate-900 block font-display mt-0.5">
                  &lt; 0.8s LCP
                </strong>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">Sub-second load speeds</span>
              </div>
              <div className="bg-white/90 border border-slate-200/90 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xs">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-wider sm:tracking-widest block truncate">
                  Code Ownership
                </span>
                <strong className="text-sm sm:text-base font-bold text-slate-900 block font-display mt-0.5">
                  100% Transfer
                </strong>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">Zero vendor lock-in</span>
              </div>
              <div className="bg-white/90 border border-slate-200/90 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xs">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-wider sm:tracking-widest block truncate">
                  Sprint Scoping
                </span>
                <strong className="text-sm sm:text-base font-bold text-slate-900 block font-display mt-0.5">
                  24 - 48 Hours
                </strong>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">Fixed-price quotation</span>
              </div>
              <div className="bg-white/90 border border-slate-200/90 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xs">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-wider sm:tracking-widest block truncate">
                  Delivery Scope
                </span>
                <strong className="text-sm sm:text-base font-bold text-slate-900 block font-display mt-0.5">
                  Pan-India &amp; Global
                </strong>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">Remote deployment &amp; QA</span>
              </div>
            </motion.div>

            {/* 3D Visualizer Mode Switcher */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 w-full max-w-xs sm:max-w-none mx-auto">
              <button
                onClick={() => setHeroMode('web')}
                type="button"
                className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                  heroMode === 'web'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>Web Platform Studio</span>
              </button>
              <button
                onClick={() => setHeroMode('hardware')}
                type="button"
                className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                  heroMode === 'hardware'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Microchip className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>Connected Hardware Lab</span>
              </button>
            </div>
          </div>

          {/* Interactive Front Canvas in Hero */}
          <div className="mt-6 flex justify-center">
            {heroMode === 'hardware' ? <IsometricBoard /> : <IsometricBrowser />}
          </div>
        </div>
      </Section>

      {/* 2. CAPABILITIES & BUSINESS SOLUTIONS */}
      <Section
        id="capabilities"
        variant="white"
        spacing="normal"
        borderBottom
        className="relative"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block mb-1">
              Core Disciplines
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
              Engineered Solutions for Modern Companies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-mono">
              Three focused engineering tracks designed to launch fast, convert visitors, and scale reliably.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Track 01: Web Platforms */}
            <PerspectiveCard>
              <div className="h-full bg-slate-50 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-subtle-card hover:border-brand-orange-400 flex flex-col justify-between transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-orange-400 flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-widest">
                      Track 01 • Web Flagships
                    </span>
                    <h3 className="text-xl font-black text-slate-950 font-display mt-0.5">
                      High-Converting Web Platforms
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Corporate flagships, portfolio showcases, and landing funnels built to position your brand at the highest tier and convert visitors into qualified pipeline.
                  </p>
                  <ul className="space-y-2 font-mono text-[11px] text-slate-700 pt-2 border-t border-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>Sub-0.8s Core Web Vitals (<strong className="text-emerald-600">0.00 CLS</strong>)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>Mobile-first responsive design tokens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>Automated SEO schema &amp; Open Graph</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200">
                  <button
                    onClick={scrollToQuote}
                    type="button"
                    className="w-full py-3 px-4 bg-white hover:bg-brand-orange-50 border border-slate-300 hover:border-brand-orange-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-900 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Scope Web Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange-500" />
                  </button>
                </div>
              </div>
            </PerspectiveCard>

            {/* Track 02: SaaS & Web Apps */}
            <PerspectiveCard>
              <div className="h-full bg-slate-50 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-subtle-card hover:border-brand-orange-400 flex flex-col justify-between transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-orange-400 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-widest">
                      Track 02 • Digital Products
                    </span>
                    <h3 className="text-xl font-black text-slate-950 font-display mt-0.5">
                      Custom Web Apps &amp; SaaS MVPs
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Authenticated portals, internal dashboards, and interactive SaaS applications engineered with modern React 19 architecture and API backends.
                  </p>
                  <ul className="space-y-2 font-mono text-[11px] text-slate-700 pt-2 border-t border-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>React 19 Actions engine with zero reload lag</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>PostgreSQL, Supabase &amp; Stripe integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>100% strict TypeScript type coverage</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200">
                  <button
                    onClick={scrollToQuote}
                    type="button"
                    className="w-full py-3 px-4 bg-white hover:bg-brand-orange-50 border border-slate-300 hover:border-brand-orange-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-900 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Scope SaaS MVP</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange-500" />
                  </button>
                </div>
              </div>
            </PerspectiveCard>

            {/* Track 03: Hardware & IoT Lab */}
            <PerspectiveCard>
              <div className="h-full bg-slate-50 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-subtle-card hover:border-brand-orange-400 flex flex-col justify-between transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-orange-400 flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-orange-600 uppercase tracking-widest">
                      Track 03 • Physical Computing
                    </span>
                    <h3 className="text-xl font-black text-slate-950 font-display mt-0.5">
                      Connected IoT &amp; Hardware Lab
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    For companies building physical prototypes, IoT sensor gateways, or robotic actuation. Bench-tested circuits, C++ firmware, and cloud telemetry.
                  </p>
                  <ul className="space-y-2 font-mono text-[11px] text-slate-700 pt-2 border-t border-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>ESP32 Wi-Fi/BLE &amp; Raspberry Pi Linux AI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>KiCad schematics &amp; itemized vendor BOMs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                      <span>Pan-India insured courier shipment</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200">
                  <button
                    onClick={scrollToQuote}
                    type="button"
                    className="w-full py-3 px-4 bg-white hover:bg-brand-orange-50 border border-slate-300 hover:border-brand-orange-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-900 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Scope Hardware Lab</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange-500" />
                  </button>
                </div>
              </div>
            </PerspectiveCard>
          </div>

          {/* Hardware Architecture Deep-Dive */}
          <div className="mt-10 sm:mt-14">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block mb-1">
                Hardware Lab Preview
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
                Real Firmware. Real Architecture.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-mono">
                Every hardware project ships with production C++ firmware — reviewable, transferable, and fully yours.
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
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
              Why Ambitious Businesses Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-mono">
              Direct senior engineer collaboration. Zero agency markup. Full code and schematic ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-slate-50 border border-slate-200/90 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center mb-4 border border-brand-orange-200">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 uppercase tracking-wider">
                Direct Engineering
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                No middle managers, account reps, or junior handoffs. You collaborate directly with senior builders.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center mb-4 border border-brand-orange-200">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 uppercase tracking-wider">
                Sub-Second Speed
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Core Web Vitals &lt; 0.8s, zero layout shift, and clean code that Google rewards with higher conversion.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center mb-4 border border-brand-orange-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 uppercase tracking-wider">
                100% IP Ownership
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                You receive full source code, deployment scripts, design tokens, and BOMs. Zero proprietary lock-in.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 hover:border-brand-orange-400 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-subtle-card transition-all">
              <div className="w-11 h-11 rounded-2xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center mb-4 border border-brand-orange-200">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-mono text-slate-950 uppercase tracking-wider">
                Strict Sprints
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Committed milestones, weekly video logs, and transparent staging URLs that keep your launch on schedule.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. DIRECT PROJECT INGESTION & SCOPING TERMINAL */}
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
