import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveCard } from './InteractiveCard';
import {
  Globe,
  Zap,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
} from 'lucide-react';
import { openAIChat } from '../../services/chatEvents';

interface ServiceTrack {
  id: string;
  discipline: string;
  title: string;
  description: string;
  tags: string[];
  deliverables: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES_TRACKS: ServiceTrack[] = [
  {
    id: 'web-platforms',
    discipline: 'Track 01 • Business Websites',
    title: 'Modern Business Websites',
    description:
      'Showcase websites, company portals, and marketing pages built to look stunning, open instantly on phones, and turn visitors into paying customers.',
    tags: ['Mobile-First Design', 'Instant Load Speeds', 'Google SEO Ready', 'Clean Code', 'Contact & Lead Capture'],
    deliverables: 'Loads Under 1s • Looks Great on All Phones • 100% Owned by You',
    icon: Globe,
  },
  {
    id: 'saas-apps',
    discipline: 'Track 02 • Custom Software',
    title: 'Web Applications & Customer Portals',
    description:
      'Private customer dashboards, employee tools, and online booking or payment systems tailored specifically to automate your business.',
    tags: ['User Accounts & Logins', 'Online Payments (Stripe)', 'Custom Dashboards', 'Database Setup', 'Email Notifications'],
    deliverables: 'Secure User Logins • Live Payment Processing • Easy Administration',
    icon: Zap,
  },
  {
    id: 'hardware-iot',
    discipline: 'Track 03 • Smart Hardware',
    title: 'Smart Connected Hardware & Devices',
    description:
      'Custom electronics, smart sensors, wireless remote controls, and working prototypes built and tested for real-world use.',
    tags: ['Wireless Wi-Fi & Bluetooth', 'Smart Sensors', 'Motor Controls', 'Working Prototypes', 'Clear Setup Guides'],
    deliverables: 'Working Tested Device • Step-by-Step Setup Video • Insured Courier Delivery',
    icon: Cpu,
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Clear Plan',
    timeframe: '24 - 48 Hours',
    summary: 'We listen to your vision, outline what is needed, and give you a transparent, fixed-price quote with zero hidden surprises.',
    deliverable: 'Clear project roadmap & upfront fixed pricing',
    checklist: [
      'Thorough discussion of your goals, target audience, and feature wish-list',
      'Clear milestone timeline with guaranteed delivery dates',
      'Fixed, transparent quote with absolutely no hidden fees or extra charges',
    ],
  },
  {
    step: '02',
    title: 'Weekly Building & Live Demos',
    timeframe: 'Active Build',
    summary: 'Watch your product come to life with weekly video walkthroughs and live private preview links you can test anytime.',
    deliverable: 'Working preview link you can test on your phone and laptop',
    checklist: [
      'Modern, rock-solid engineering designed to last for years',
      'Private preview links so you can test every button and page yourself',
      'Weekly video walkthroughs keeping you completely up to date',
    ],
  },
  {
    step: '03',
    title: 'Speed, Mobile & Security Testing',
    timeframe: 'Review & Polish',
    summary: 'Rigorous testing across iPhones, Androids, Macs, and PCs to guarantee instant loading, flawless layouts, and tight security.',
    deliverable: 'Speed verification report & polished mobile-ready experience',
    checklist: [
      'Optimized for instant page loading so customers never bounce',
      'Built-in spam protection on forms to block bots and junk emails',
      'Search-engine friendly structure so Google can easily index your business',
    ],
  },
  {
    step: '04',
    title: 'Official Launch & 100% Handover',
    timeframe: 'Launch Day',
    summary: 'We connect your domain, take your project live to the world, and hand over every single key, file, and line of code to you.',
    deliverable: 'Live website on your domain + 100% complete ownership transferred',
    checklist: [
      'Smooth, hassle-free launch on your domain with secure SSL padlock',
      '100% ownership handed over: all code, designs, and files are yours',
      'Simple walkthrough guide and post-launch support to help you get started',
    ],
  },
];

export const ServicesProcessSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div id="process" className="space-y-12 sm:space-y-16">
      {/* Streamlined Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800/60">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange-600 dark:text-brand-orange-400" />
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400">
            What We Build &amp; How We Work
          </span>
        </div>
        <h2 className="text-2xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-display">
          Websites, Custom Software &amp; Smart Hardware
        </h2>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          From modern responsive business websites and custom client portals to smart connected devices. Built transparently with direct communication.
        </p>
      </div>

      {/* 1. Minimized View of Core Services (Always Visible - Not Hidden) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        {SERVICES_TRACKS.map((track) => {
          const Icon = track.icon;
          return (
            <InteractiveCard key={track.id} cardClassName="bg-white dark:bg-[#0D1424] p-5 sm:p-7 shadow-subtle-card dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800/70 flex items-center justify-center text-brand-orange-600 dark:text-brand-orange-400 shadow-orange-sm">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/90 px-2.5 py-1 rounded-full">
                    {track.discipline}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white font-display">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-sans">
                    {track.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-[#080C16] border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-brand-orange-600 dark:text-brand-orange-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{track.deliverables}</span>
                </div>
              </div>
            </InteractiveCard>
          );
        })}
      </div>

      {/* 2. Minimized View of 4-Phase Operating Process (Always Visible - Not Hidden) */}
      <div className="bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-5 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 block">
              Clear Roadmap
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-slate-950 dark:text-white font-display">
              How We Work: 4 Clear Steps
            </h3>
          </div>

          {/* Interactive Expand / View More Button */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-brand-orange-400 text-slate-900 dark:text-slate-100 font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <span>{isExpanded ? 'Minimize Detailed Breakdown' : 'View Detailed Breakdown'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-brand-orange-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-brand-orange-500" />
            )}
          </button>
        </div>

        {/* 4 Steps Horizontal Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white dark:bg-[#0D1424] border border-slate-200/90 dark:border-slate-800/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xs dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl font-black font-mono text-brand-orange-500">
                    {step.step}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                    {step.timeframe}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-slate-950 dark:text-white font-display">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-sans">
                  {step.summary}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
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
            <div className="bg-[#090D16] border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-9 text-slate-200 shadow-2xl space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 sm:pb-5 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-orange-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-400">
                      Complete Project Lifecycle
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                    What You Can Expect at Every Step
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Ownership Transferred To You</span>
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
                  Have a unique idea or specific business requirements? We customize every deliverable to fit your exact goals.
                </p>
                <button
                  type="button"
                  onClick={() => openAIChat("Hi, I'd like to discuss a project with Steel & Stack. Can you help me understand what options fit my business?")}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-mono text-xs font-bold uppercase tracking-widest shadow-orange-md transition-all cursor-pointer"
                >
                  <span>Discuss Your Project</span>
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
