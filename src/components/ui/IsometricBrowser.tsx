import React, { useState } from 'react';
import { Smartphone, Monitor, Tablet, ShieldCheck, Gauge, CheckCircle2 } from 'lucide-react';

export const IsometricBrowser: React.FC = () => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="w-full relative flex flex-col items-center select-none py-2">
      {/* Front-Looking Precision Software Browser Viewport */}
      <div className="w-full max-w-2xl relative flex items-center justify-center p-2 sm:p-4">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute w-80 h-80 rounded-full bg-brand-orange-500/10 blur-[100px] pointer-events-none" />

        {/* Straight-On Front Browser Window */}
        <div
          className={`h-[340px] sm:h-[370px] bg-white border-2 border-slate-300 rounded-2xl shadow-[0_20px_50px_-10px_rgba(15,23,42,0.2),0_0_20px_rgba(234,88,12,0.1)] overflow-hidden flex flex-col relative transition-all duration-300 ${
            deviceView === 'desktop'
              ? 'w-full max-w-[560px]'
              : deviceView === 'tablet'
              ? 'w-full max-w-[440px]'
              : 'w-full max-w-[320px]'
          }`}
        >
          {/* Browser Top Navigation Bar */}
          <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-[280px] mx-3 bg-white px-3 py-1 rounded-lg border border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-700 shadow-xs">
              <div className="flex items-center gap-1.5 truncate">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate font-medium">https://steelandstack.in</span>
              </div>
              <span className="text-[8px] font-bold text-brand-orange-600 bg-brand-orange-50 px-1 rounded">
                SSL
              </span>
            </div>

            <div className="w-4" />
          </div>

          {/* Browser Interior Viewport */}
          <div className="p-4 sm:p-5 flex-1 bg-slate-50 flex flex-col justify-between overflow-hidden">
            {/* Header Strip */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-brand-orange-500 flex items-center justify-center text-[10px] font-black text-white shadow-xs">
                  S
                </div>
                <span className="text-xs font-mono font-bold text-slate-900 tracking-wider">
                  STEEL &amp; STACK
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono text-brand-orange-700 font-bold bg-brand-orange-100/60 px-2 py-0.5 rounded-full border border-brand-orange-200">
                  REACT 19 ENGINE
                </span>
              </div>
            </div>

            {/* Live Core Web Vitals Benchmark Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-2 font-mono">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/90 text-center shadow-xs">
                <span className="text-slate-500 block text-[9px] font-medium uppercase">LCP Speed</span>
                <strong className="text-emerald-600 font-bold text-xs sm:text-sm">0.62s</strong>
                <span className="text-[8px] text-slate-400 block mt-0.5">&lt; 0.8s Target</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/90 text-center shadow-xs">
                <span className="text-slate-500 block text-[9px] font-medium uppercase">Input (INP)</span>
                <strong className="text-emerald-600 font-bold text-xs sm:text-sm">12ms</strong>
                <span className="text-[8px] text-slate-400 block mt-0.5">Zero Lag</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/90 text-center shadow-xs">
                <span className="text-slate-500 block text-[9px] font-medium uppercase">Lighthouse</span>
                <strong className="text-brand-orange-600 font-bold text-xs sm:text-sm">100/100</strong>
                <span className="text-[8px] text-slate-400 block mt-0.5">Top Tier</span>
              </div>
            </div>

            {/* Executive Pipeline Simulation Block */}
            <div className="bg-slate-900 text-slate-200 p-3.5 rounded-2xl font-mono text-[10px] leading-relaxed border border-slate-800 shadow-inner space-y-1.5">
              <div className="flex items-center justify-between text-slate-400 text-[9px] border-b border-slate-800 pb-1.5">
                <span className="uppercase tracking-wider font-semibold text-brand-orange-400">Live Funnel Health</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  100% Operational
                </span>
              </div>
              <div className="text-slate-300 flex justify-between pt-0.5">
                <span>Direct Lead Routing:</span>
                <span className="text-white font-bold">devansh8011@gmail.com</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-1.5 pt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Zero page reloads • Instant response time &lt; 2.5s</span>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-[9px] font-mono text-slate-600">
              <span>Mobile-First • Zero Layout Shift</span>
              <span className="bg-brand-orange-500 text-white px-2.5 py-1 rounded-full font-bold text-[8px] uppercase tracking-wider">
                Turnkey Launch Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Device Viewport Selector HUD */}
      <div className="w-full max-w-xl bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-subtle-card mt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center text-brand-orange-600 flex-shrink-0">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-orange-600 block">
              Core Web Engine
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold text-slate-900">
              Front-Facing Viewport Simulation
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setDeviceView('desktop')}
            type="button"
            className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              deviceView === 'desktop'
                ? 'bg-white text-brand-orange-600 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setDeviceView('tablet')}
            type="button"
            className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              deviceView === 'tablet'
                ? 'bg-white text-brand-orange-600 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet</span>
          </button>
          <button
            onClick={() => setDeviceView('mobile')}
            type="button"
            className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              deviceView === 'mobile'
                ? 'bg-white text-brand-orange-600 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>
      </div>
      <p className="text-[11px] font-mono text-slate-600 mt-2">
        Test responsiveness across viewports with zero cumulative layout shift.
      </p>
    </div>
  );
};
