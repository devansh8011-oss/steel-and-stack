import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Globe,
  Zap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PerspectiveCard } from './PerspectiveCard';

interface ServiceTrack {
  id: string;
  title: string;
  discipline: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  deliverables: string;
  description: string;
}

const SERVICES_TRACKS: ServiceTrack[] = [
  {
    id: 'web-platforms',
    title: 'High-Converting Web Platforms',
    discipline: 'Web Discipline 01',
    icon: Globe,
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    deliverables: 'Production Web App • Turnkey Deploy • Lead Routing',
    description:
      'Agency-grade web platforms engineered for sub-second load times (<0.8s LCP), 100/100 Lighthouse performance, mobile responsiveness, and zero layout shift.',
  },
  {
    id: 'interactive-apps',
    title: 'Interactive SaaS & Custom Portals',
    discipline: 'Web Discipline 02',
    icon: Zap,
    tags: ['Framer Motion', 'Server Actions', 'Resend API', '3D Web'],
    deliverables: 'Custom UI/UX • Interactive Canvases • Auth & Dashboards',
    description:
      'High-converting landing funnels, interactive 3D web experiences, dynamic user dashboards, and instant lead capture pipelines delivered direct to your inbox.',
  },
  {
    id: 'robotics',
    title: 'Connected Hardware & IoT Rigs',
    discipline: 'Hardware Discipline 03',
    icon: Cpu,
    tags: ['ESP32', 'Raspberry Pi', 'Arduino', 'Sensors'],
    deliverables: 'Assembled Hardware • Firmware • Schematics',
    description:
      'When your digital platform bridges to the physical world: custom microcontroller hardware, telemetry gateways, and deterministic robotics execution.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Fixed Scope',
    timeframe: '24 - 48 Hours',
    summary: 'Requirement analysis, architectural roadmap, and itemized fixed-price proposal.',
    deliverable: 'Structured technical proposal & committed sprint schedule',
    checklist: [
      'Tech stack & third-party integration feasibility assessment',
      'Target performance benchmarks (<0.8s LCP, zero layout shift)',
      'Transparent, fixed-price quotation with zero hidden change-orders',
    ],
  },
  {
    step: '02',
    title: 'Agile Sprint & Live Staging',
    timeframe: 'Sprint Phase',
    summary: 'Milestone execution with live password-protected preview URLs and weekly progress demos.',
    deliverable: 'Functional staging environments + clean git commits',
    checklist: [
      'Modern React 19 architecture with strict TypeScript compilation',
      'Regular staging previews for continuous client alignment',
      'Clean modular component tokens with comprehensive documentation',
    ],
  },
  {
    step: '03',
    title: 'Speed, SEO & Security QA',
    timeframe: 'Quality Phase',
    summary: 'Multi-device responsive validation, Core Web Vitals optimization, and security audits.',
    deliverable: 'Lighthouse 95+ audit report & cross-browser verification',
    checklist: [
      'Sub-second page speed optimization across mobile and desktop',
      'Honeypot and regex spam protection for lead capture forms',
      'WCAG contrast accessibility and semantic SEO schema tags',
    ],
  },
  {
    step: '04',
    title: 'Turnkey Launch & 100% IP Handover',
    timeframe: 'Launch Phase',
    summary: 'Production deployment, domain DNS routing, and complete IP repository transfer.',
    deliverable: 'Full GitHub repository ownership + production URL live',
    checklist: [
      'Zero-downtime deployment on Vercel / Cloudflare with custom domain SSL',
      '100% IP ownership transfer: full source code, assets, and design files',
      'Post-launch remote monitoring and operational handover documentation',
    ],
  },
];

export const ServicesProcessSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('quote-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-50 border border-brand-orange-200">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600">
            Web Architecture &amp; Studio Pipeline
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display">
          Website Engineering &amp; Build Pipeline
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
          From high-converting responsive web platforms and custom SaaS portals to connected physical IoT hardware. Transparently engineered with sub-second speeds.
        </p>
      </div>

      {/* 1. Minimized View of Core Services (Always Visible - Not Hidden) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {SERVICES_TRACKS.map((track) => {
          const Icon = track.icon;
          return (
            <PerspectiveCard key={track.id} className="h-full w-full">
              <div className="h-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-subtle-card hover:border-brand-orange-400 hover:shadow-hover-card transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center text-brand-orange-600 shadow-orange-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {track.discipline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-950 font-display">
                      {track.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-sans">
                      {track.description}
                    </p>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold text-slate-800 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-brand-orange-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{track.deliverables}</span>
                  </div>
                </div>
              </div>
            </PerspectiveCard>
          );
        })}
      </div>

      {/* 2. Minimized View of 4-Phase Operating Process (Always Visible - Not Hidden) */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block">
              Execution Methodology
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
              The 4-Step Milestone Sprint
            </h3>
          </div>

          {/* Interactive Expand / View More Button */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 hover:border-brand-orange-400 text-slate-900 font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
          >
            <span>{isExpanded ? 'Minimize Detailed Specs' : 'View Full Process & Specs'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-brand-orange-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-brand-orange-500" />
            )}
          </button>
        </div>

        {/* 4 Steps Horizontal Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-brand-orange-500">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {step.timeframe}
                  </span>
                </div>
                <h4 className="text-sm font-black text-slate-950 font-display">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-sans">
                  {step.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono font-semibold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Deep-Dive Expandable Specifications Drawer (Revealed on 'View Full Process & Specs') */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-[#090D16] border border-slate-800 rounded-3xl p-6 sm:p-9 text-slate-200 shadow-2xl space-y-8">
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-5 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-orange-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-400">
                      Deep-Dive Architectural Breakdown
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                    Standard Operating Verification Protocol
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Client IP Ownership Handover</span>
                </div>
              </div>

              {/* 4 In-Depth Phase Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROCESS_STEPS.map((step) => (
                  <div
                    key={`detail-${step.step}`}
                    className="p-5 rounded-2xl bg-[#0D1322] border border-slate-800/90 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-xl bg-brand-orange-500/20 border border-brand-orange-400/40 text-brand-orange-400 font-mono font-black text-xs flex items-center justify-center">
                          {step.step}
                        </span>
                        <h4 className="text-base font-bold text-white font-display">
                          {step.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {step.timeframe}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-slate-800 font-mono text-xs text-brand-orange-300">
                      <strong className="text-slate-400">Deliverable: </strong>
                      {step.deliverable}
                    </div>

                    <ul className="space-y-1.5 pt-1 font-mono text-xs text-slate-300">
                      {step.checklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Action Callout inside Expanded View */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                <p className="text-xs font-mono text-slate-400">
                  Need custom components or specialized pinouts? We tailor every single BOM to your specifications.
                </p>
                <button
                  type="button"
                  onClick={scrollToQuote}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-mono text-xs font-bold uppercase tracking-widest shadow-orange-md transition-all"
                >
                  <span>Specify Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
