import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { MetaTags } from '../components/seo/MetaTags';
import { SITE_CONFIG } from '../config/site';
import { openAIChat } from '../services/chatEvents';
import {
  ArrowRight,
  CheckCircle2,
  Wrench,
  Wifi,
  Eye,
  Activity,
  Code2,
  Smartphone,
  Search,
  Zap,
  Package,
  Terminal,
  Microchip,
} from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Services & Capabilities | Steel & Stack"
        description="Modern business websites, custom software, and smart connected devices built with speed, care, and 100% complete ownership."
      />

      {/* Page Header */}
      <Section
        variant="subtle-grid"
        spacing="compact"
        borderBottom
        className="pt-12 pb-14 border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <Badge variant="orange" size="sm">
            What We Build
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white font-display">
            Websites, Custom Software <span className="text-brand-orange-500">&amp;</span> Smart Hardware
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            {SITE_CONFIG.tagline}. We build lightning-fast business websites, custom web applications, and smart connected devices with zero middlemen and complete ownership in your hands. Delivered across India and worldwide.
          </p>
        </div>
      </Section>

      {/* 4-Step Process Row */}
      <Section
        variant="slate"
        spacing="compact"
        borderBottom
      >
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 block mb-1">
            Our Delivery Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-display">
            How Every Project Progresses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SITE_CONFIG.howItWorks.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white dark:bg-[#0D1424] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-subtle-card hover:border-brand-orange-400 dark:hover:border-brand-orange-500/50 hover:shadow-hover-card relative flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-brand-orange-600 dark:text-brand-orange-400 font-mono">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Step 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold font-mono text-slate-950 dark:text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono font-bold text-brand-orange-600 dark:text-brand-orange-400">
                <span>Step {step.step} Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => openAIChat("Hi! I'd like to learn more about the 4-step process and discuss my project with Steel & Stack.")}
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Start at Step 01 — Enquire Now
          </Button>
        </div>
      </Section>

      {/* Service 1: Custom Robotics */}
      <Section
        id="robotics"
        variant="white"
        spacing="normal"
        borderBottom
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange-50 dark:bg-brand-orange-950/60 text-brand-orange-600 dark:text-brand-orange-400 flex items-center justify-center border border-brand-orange-200 dark:border-brand-orange-800 shadow-orange-sm">
                <Microchip className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 block mb-1">
                  Service 01
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight font-display">
                  Smart Hardware &amp; Connected Devices
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We design, build, test, and deliver custom electronic devices, smart sensors, and working hardware prototypes tailored to your exact business needs.
              </p>

              <div className="space-y-2.5 pt-2 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Pan-India express insured delivery of physical units</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Real bench testing, calibration &amp; video proof</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => openAIChat("I would like to request a quote for smart hardware and connected devices from Steel & Stack.")}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Request Hardware Quote
                </Button>
              </div>
            </div>

            {/* Right Capabilities Grid */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Zap className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Controllers &amp; Brain
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Smart microcontrollers &amp; dual-core processing chips</li>
                    <li>• Arduino &amp; Raspberry Pi computing setups</li>
                    <li>• Reliable rechargeable battery &amp; power circuits</li>
                    <li>• Neat, tested circuit designs without loose wiring</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Activity className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Sensors &amp; Motion
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Obstacle radar &amp; distance measurement sensors</li>
                    <li>• Smooth tilt, balance &amp; motion tracking</li>
                    <li>• Whisper-quiet precision motors &amp; drivers</li>
                    <li>• Temperature, light &amp; environmental sensing</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Eye className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Smart Cameras &amp; Automation
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Mini camera modules with live video streaming</li>
                    <li>• Automated barcode &amp; QR code scanning</li>
                    <li>• Object &amp; movement detection triggers</li>
                    <li>• Local private network video connections</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Wifi className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Wireless &amp; Remote Control
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Wi-Fi &amp; Bluetooth wireless phone control</li>
                    <li>• Real-time updates sent straight to your phone</li>
                    <li>• Long-range wireless remotes</li>
                    <li>• Connectable to web dashboards &amp; databases</li>
                  </ul>
                </div>
              </div>

              {/* Handover Guarantee */}
              <div className="bg-white dark:bg-[#0D1424] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 mb-3">
                  Delivered with Every Hardware Build:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Complete assembled, tested physical device</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Clean, fully-documented program files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Easy-to-read circuit map and wiring guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Step-by-step setup walkthrough video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service 2: Website Development */}
      <Section
        id="web"
        variant="slate"
        spacing="normal"
        borderBottom
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-brand-orange-950/70 border border-slate-800 dark:border-brand-orange-800 text-white flex items-center justify-center shadow-sm">
                <Code2 className="w-7 h-7 text-brand-orange-400" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 block mb-1">
                  Service 02
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight font-display">
                  Modern Business Websites &amp; Apps
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Lightning-fast, beautiful websites and web tools designed to make your business look world-class and turn visitors into paying clients.
              </p>

              <div className="space-y-2.5 pt-2 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Opens instantly in under 1 second on all phones</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Optimized for Google search ranking &amp; social sharing</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => openAIChat("I would like to request a quote for website development and web applications from Steel & Stack.")}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Request Website Quote
                </Button>
              </div>
            </div>

            {/* Right Capabilities Grid */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Code2 className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Modern &amp; Fast
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Loads in the blink of an eye on any device</li>
                    <li>• Clean, modern design tailored to your brand</li>
                    <li>• Smooth, elegant animations and interactions</li>
                    <li>• Built to last without breaking or slowing down</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Smartphone className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Mobile-First Design
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Looks stunning on smartphones, tablets &amp; laptops</li>
                    <li>• Easy thumb navigation and readable text</li>
                    <li>• High-resolution images that load instantly</li>
                    <li>• Accessible and easy for all customers to use</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Zap className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Lead &amp; Customer Capture
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Instant contact forms that email you immediately</li>
                    <li>• Built-in protection against spam and fake inquiries</li>
                    <li>• Direct WhatsApp and click-to-call buttons</li>
                    <li>• Clear calls-to-action that guide customers to contact you</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Terminal className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Hassle-Free Launch
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• We connect your custom domain name with SSL padlock</li>
                    <li>• Fast global hosting so your site is always online</li>
                    <li>• Automatic email forwarding for all customer inquiries</li>
                    <li>• Post-launch support so you are never left alone</li>
                  </ul>
                </div>
              </div>

              {/* Handover Guarantee */}
              <div className="bg-white dark:bg-[#0D1424] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 mb-3">
                  Delivered with Every Website Build:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>100% complete ownership of all code and design files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Live working website connected to your domain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Instant email notifications for incoming customer leads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Simple walkthrough guide on making updates easily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
