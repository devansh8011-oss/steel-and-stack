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
        title="Engineering Services & Architecture | Steel & Stack"
        description="Comprehensive engineering disciplines: Custom Arduino, ESP32, and Raspberry Pi robotics builds alongside high-performance responsive web platforms."
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
            Studio Disciplines
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white font-display">
            Web Platforms <span className="text-brand-orange-500">&amp;</span> Digital Engineering
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            {SITE_CONFIG.tagline}. We engineer high-converting web platforms, scalable SaaS products, and connected IoT hardware with zero compromise on code quality or performance. Delivered across India and worldwide.
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
            Standard Operating Procedure
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-display">
            How Every Build Progresses
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
                    Phase 0{idx + 1}
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
                <span>Phase {step.step} Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => openAIChat("I want to learn more about the 4-phase build process and start at Step 01 with Steel & Stack.")}
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
                  Discipline 01
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight font-display">
                  Custom Robotics &amp; Embedded Systems
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We design, solder, program, calibrate, and package custom robotics hardware tailored to your exact mechanical, electronic, and operational constraints.
              </p>

              <div className="space-y-2.5 pt-2 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Pan-India express insured delivery of physical units</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Rigorous bench testing, calibration &amp; video proof</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => openAIChat("I would like to request a quote for custom robotics hardware and embedded systems from Steel & Stack.")}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Request Robotics Quote
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
                      Microcontrollers &amp; Boards
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• ESP32 dual-core &amp; ESP32-CAM video telemetry</li>
                    <li>• Arduino Uno, Mega, Nano, RP2040 setups</li>
                    <li>• Raspberry Pi 4/5 &amp; Zero 2 W Linux systems</li>
                    <li>• Power regulation, battery BMS &amp; buck converters</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Activity className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Sensors &amp; Actuation
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• ToF LiDAR, ultrasonic &amp; infrared obstacle sensors</li>
                    <li>• 6-DoF/9-DoF IMU motion stabilization &amp; compass</li>
                    <li>• Stepper motors (A4988/TMC2209), Servos &amp; ESCs</li>
                    <li>• Thermal, gas, pressure &amp; environmental sensing</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Eye className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Computer Vision &amp; Edge AI
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• RPi Camera &amp; OpenCV image processing models</li>
                    <li>• Object tracking, contour analysis &amp; sorting</li>
                    <li>• Barcode/QR reading &amp; automated optical triggers</li>
                    <li>• Real-time video streams over local network</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Wifi className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Telemetry &amp; Remote Control
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• MQTT, WebSocket, and HTTP telemetry logging</li>
                    <li>• BLE smartphone companion remote controller</li>
                    <li>• Long-range LoRa radio communication links</li>
                    <li>• Real-time web telemetry dashboard integration</li>
                  </ul>
                </div>
              </div>

              {/* Handover Guarantee */}
              <div className="bg-white dark:bg-[#0D1424] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 mb-3">
                  Delivered with Every Robotics Build:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Assembled, soldered, bench-tested hardware unit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Documented C++ / Python firmware source code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>High-resolution wiring schematic &amp; pinout map</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Remote calibration &amp; startup support online</span>
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
                  Discipline 02
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight font-display">
                  Professional Website Engineering
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Modern, lightning-fast web experiences engineered to convert casual traffic into verified leads and commercial inquiries.
              </p>

              <div className="space-y-2.5 pt-2 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Sub-second page loads &amp; 95+ Core Web Vitals score</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span>Built-in search engine optimization &amp; Open Graph tags</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => openAIChat("I would like to request a quote for website development and web platform engineering from Steel & Stack.")}
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
                      Modern Architecture
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• React 19, TypeScript &amp; Vite build speed</li>
                    <li>• Tailwind CSS for lean, maintainable styling</li>
                    <li>• Framer Motion tasteful micro-interactions</li>
                    <li>• Clean component-driven modularity</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Smartphone className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Responsive &amp; Mobile-First
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Pixel-perfect on smartphones, tablets &amp; laptops</li>
                    <li>• Touch-friendly drawers and accessible controls</li>
                    <li>• High-density retina image handling</li>
                    <li>• Accessible semantic HTML structure</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Zap className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Lead Generation Engine
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• React 19 Actions quote forms with Resend API</li>
                    <li>• Honeypot spam defense &amp; instant client validation</li>
                    <li>• WhatsApp quick-chat &amp; direct click-to-call</li>
                    <li>• Conversion funnels built to maximize inquiries</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-brand-orange-600 dark:text-brand-orange-400">
                    <Terminal className="w-4 h-4" />
                    <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Turnkey Deployment
                    </h4>
                  </div>
                  <ul className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Domain setup, DNS routing &amp; automated SSL</li>
                    <li>• Global edge CDN distribution for speed</li>
                    <li>• Serverless API endpoints for email routing</li>
                    <li>• Post-launch launch support and code warranty</li>
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
                    <span>Full GitHub repository ownership &amp; source code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Live deployed website with SSL and DNS live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Quote notification emails routing straight to you</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500" />
                    <span>Walkthrough documentation on updating copy easily</span>
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
