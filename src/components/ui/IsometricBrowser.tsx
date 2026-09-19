import React, { useState } from 'react';
import { Smartphone, Monitor, Tablet, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const IsometricBrowser: React.FC = () => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="w-full relative flex flex-col items-center select-none py-2">
      {/* Front-Looking Precision Software Browser Viewport */}
      <div className="w-full max-w-2xl relative flex items-center justify-center p-2 sm:p-4">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-brand-orange-500/10 dark:bg-brand-orange-500/20 blur-[100px] dark:blur-[120px] pointer-events-none -z-0" />

        {/* Straight-On Front Browser Window */}
        <div
          className={`h-[340px] sm:h-[370px] bg-white dark:bg-[#0A0F1D] border-2 border-slate-300/90 dark:border-slate-700/80 rounded-2xl shadow-[0_20px_50px_-10px_rgba(15,23,42,0.18),0_0_20px_rgba(234,88,12,0.08)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(234,88,12,0.15)] overflow-hidden flex flex-col relative transition-all duration-300 z-10 ${
            deviceView === 'desktop'
              ? 'w-full max-w-[560px]'
              : deviceView === 'tablet'
              ? 'w-full max-w-[440px]'
              : 'w-full max-w-[320px]'
          }`}
        >
          {/* Browser Top Navigation Bar with Integrated Viewport Switcher */}
          <div className="bg-slate-100/95 dark:bg-[#070B14] border-b border-slate-200 dark:border-slate-800/90 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-1.5 sm:gap-2">
            {/* macOS Window Controls with Subtle Neon Glow in Dark Mode */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-400 dark:shadow-[0_0_6px_rgba(251,113,133,0.6)]" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-400 dark:shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400 dark:shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 min-w-0 max-w-[280px] mx-1 sm:mx-3 bg-white dark:bg-[#0E1528] px-2.5 sm:px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-700 dark:text-slate-200 shadow-xs dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-1 sm:gap-1.5 truncate">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400 dark:drop-shadow-[0_0_6px_rgba(52,211,153,0.4)] flex-shrink-0" />
                <span className="truncate font-medium">https://steelandstack.vercel.app</span>
              </div>
              <span className="text-[7px] sm:text-[8px] font-bold text-brand-orange-600 dark:text-brand-orange-400 bg-brand-orange-50 dark:bg-brand-orange-950/80 border border-brand-orange-200 dark:border-brand-orange-800/60 px-1 rounded flex-shrink-0 ml-1">
                SSL
              </span>
            </div>

            {/* Micro Viewport Controls in Top Bar */}
            <div className="flex items-center gap-0.5 bg-slate-200/80 dark:bg-[#0D1426] p-0.5 rounded-lg border border-slate-300/80 dark:border-slate-750 flex-shrink-0">
              <button
                onClick={() => setDeviceView('desktop')}
                title="Desktop View"
                type="button"
                className={`p-1 rounded transition-all cursor-pointer ${
                  deviceView === 'desktop'
                    ? 'bg-white dark:bg-brand-orange-500 text-brand-orange-600 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Monitor className="w-3 h-3" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                title="Tablet View"
                type="button"
                className={`p-1 rounded transition-all cursor-pointer ${
                  deviceView === 'tablet'
                    ? 'bg-white dark:bg-brand-orange-500 text-brand-orange-600 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Tablet className="w-3 h-3" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                title="Mobile View"
                type="button"
                className={`p-1 rounded transition-all cursor-pointer ${
                  deviceView === 'mobile'
                    ? 'bg-white dark:bg-brand-orange-500 text-brand-orange-600 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Smartphone className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Browser Interior Viewport */}
          <div className="p-4 sm:p-5 flex-1 bg-slate-50 dark:bg-[#060913] flex flex-col justify-between overflow-hidden">
            {/* Header Strip */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-brand-orange-500 flex items-center justify-center text-[10px] font-black text-white shadow-xs dark:shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                  S
                </div>
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white tracking-wider">
                  STEEL &amp; STACK
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse dark:shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
                <span className="text-[9px] font-mono text-brand-orange-700 dark:text-brand-orange-400 font-bold bg-brand-orange-100/60 dark:bg-brand-orange-950/70 px-2 py-0.5 rounded-full border border-brand-orange-200 dark:border-brand-orange-800/80">
                  REACT 19 ENGINE
                </span>
              </div>
            </div>

            {/* Live Core Web Vitals Benchmark Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 py-1.5 sm:py-2 font-mono">
              <div className="bg-white dark:bg-[#0D1426] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-200/90 dark:border-slate-800/90 text-center shadow-xs dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <span className="text-slate-500 dark:text-slate-400 block text-[8px] sm:text-[9px] font-medium uppercase">LCP Speed</span>
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]">0.62s</strong>
                <span className="text-[7px] sm:text-[8px] text-slate-400 dark:text-slate-500 block mt-0.5">&lt; 0.8s Target</span>
              </div>
              <div className="bg-white dark:bg-[#0D1426] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-200/90 dark:border-slate-800/90 text-center shadow-xs dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <span className="text-slate-500 dark:text-slate-400 block text-[8px] sm:text-[9px] font-medium uppercase">Input (INP)</span>
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]">12ms</strong>
                <span className="text-[7px] sm:text-[8px] text-slate-400 dark:text-slate-500 block mt-0.5">Zero Lag</span>
              </div>
              <div className="bg-white dark:bg-[#0D1426] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-200/90 dark:border-slate-800/90 text-center shadow-xs dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <span className="text-slate-500 dark:text-slate-400 block text-[8px] sm:text-[9px] font-medium uppercase">Lighthouse</span>
                <strong className="text-brand-orange-600 dark:text-brand-orange-400 font-bold text-xs sm:text-sm dark:drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]">100/100</strong>
                <span className="text-[7px] sm:text-[8px] text-slate-400 dark:text-slate-500 block mt-0.5">Top Tier</span>
              </div>
            </div>

            {/* Executive Pipeline Simulation Block */}
            <div className="bg-slate-900 dark:bg-[#04060E] text-slate-200 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl font-mono text-[9px] sm:text-[10px] leading-relaxed border border-slate-800 dark:border-slate-800/90 shadow-inner dark:shadow-[0_0_20px_rgba(234,88,12,0.06)] space-y-1 sm:space-y-1.5">
              <div className="flex items-center justify-between text-slate-400 text-[8px] sm:text-[9px] border-b border-slate-800 pb-1">
                <span className="uppercase tracking-wider font-semibold text-brand-orange-400">Live Funnel Health</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse dark:shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  100% Operational
                </span>
              </div>
              <div className="text-slate-300 flex justify-between pt-0.5">
                <span>Direct Lead Routing:</span>
                <span className="text-white dark:text-amber-200 font-bold truncate ml-2">devansh8011@gmail.com</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-1.5 pt-0.5 truncate">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="truncate">Instant response &lt; 2.5s</span>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-800/80 text-[8px] sm:text-[9px] font-mono text-slate-600 dark:text-slate-400">
              <span className="truncate">Mobile-First • Zero Shift</span>
              <span className="bg-brand-orange-500 text-white px-2 py-0.5 rounded-full font-bold text-[7px] sm:text-[8px] uppercase tracking-wider flex-shrink-0 dark:shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                Turnkey Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

