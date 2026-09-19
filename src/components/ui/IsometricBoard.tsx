import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Zap } from 'lucide-react';

interface NodeSpec {
  id: string;
  name: string;
  category: string;
  specs: string;
  status: string;
}

export const IsometricBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mcu');

  const nodes: Record<string, NodeSpec> = {
    mcu: {
      id: 'mcu',
      name: 'ESP32-S3 Dual-Core Compute',
      category: 'Primary Architecture',
      specs: '240 MHz Tensilica Xtensa • FreeRTOS Sub-millisecond Scheduling • 8MB Flash',
      status: '240 MHz Nominal',
    },
    wireless: {
      id: 'wireless',
      name: 'Wi-Fi 802.11 & BLE 5.0 Radio',
      category: 'Telemetry Gateway',
      specs: '2.4 GHz Low-Latency MQTT / WebSockets Uplink • 150 Mbps Throughput',
      status: 'Connected • 12ms',
    },
    io: {
      id: 'io',
      name: 'Actuation & Sensor Fusion Bus',
      category: 'Hardware Control',
      specs: '16-Channel High-Precision PWM • I2C 400kHz • TMC Silent Motor Drivers',
      status: '100% Calibrated',
    },
  };

  const current = nodes[activeTab];

  return (
    <div className="w-full relative flex flex-col items-center select-none py-4">
      {/* Clean, Satisfying Minimalist Board Canvas */}
      <div className="w-full max-w-xl relative flex items-center justify-center p-2 sm:p-4">
        {/* Soft, Calming Ambient Orange Underglow */}
        <div className="absolute w-72 h-72 rounded-full bg-brand-orange-500/10 blur-[90px] pointer-events-none" />

        {/* Sanitized Matte Obsidian Hardware Board */}
        <div className="w-full max-w-[500px] min-h-[300px] sm:h-[330px] bg-[#090D16] border border-slate-800/90 rounded-2xl sm:rounded-[28px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] p-3 sm:p-8 relative flex flex-col justify-between overflow-hidden">
          {/* Subtle Ambient Circuit Glow Line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange-500/30 to-transparent" />

          {/* Minimalist Top Header Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-10 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-slate-300 font-bold uppercase">
                DEV-BOARD // REV 3.0
              </span>
            </div>

            {/* Mode Selector Tabs (Sanitized Controls) */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-full border border-slate-800 w-full sm:w-auto justify-between sm:justify-start">
              <button
                type="button"
                onClick={() => setActiveTab('mcu')}
                className={`flex-1 sm:flex-initial text-center px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold transition-all ${
                  activeTab === 'mcu'
                    ? 'bg-brand-orange-500 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Core MCU
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('wireless')}
                className={`flex-1 sm:flex-initial text-center px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold transition-all ${
                  activeTab === 'wireless'
                    ? 'bg-brand-orange-500 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Wireless
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('io')}
                className={`flex-1 sm:flex-initial text-center px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold transition-all ${
                  activeTab === 'io'
                    ? 'bg-brand-orange-500 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                I/O &amp; Motors
              </button>
            </div>
          </div>

          {/* Minimal Gold Traces (Clean & Elegant) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 165 L 180 165"
              stroke="#F59E0B"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 320 165 L 450 165"
              stroke="#EA580C"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="180" cy="165" r="2.5" fill="#F59E0B" />
            <circle cx="320" cy="165" r="2.5" fill="#EA580C" />
          </svg>

          {/* Centerpiece: Precision Processor Core */}
          <div className="relative z-10 flex items-center justify-center my-auto">
            <motion.div
              animate={{
                boxShadow:
                  activeTab === 'mcu'
                    ? '0 0 25px rgba(234,88,12,0.35)'
                    : '0 0 15px rgba(15,23,42,0.6)',
              }}
              transition={{ duration: 0.6 }}
              className="w-32 sm:w-36 h-32 sm:h-36 bg-[#040711] border-2 border-slate-700/80 rounded-[22px] flex flex-col items-center justify-center p-3 relative group"
            >
              {/* Subtle Gold Pin Leads Around 4 Edges */}
              <div className="absolute -top-1.5 left-4 right-4 flex justify-between">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-amber-400/90 rounded-xs" />
                ))}
              </div>
              <div className="absolute -bottom-1.5 left-4 right-4 flex justify-between">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-amber-400/90 rounded-xs" />
                ))}
              </div>
              <div className="absolute -left-1.5 top-4 bottom-4 flex flex-col justify-between">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-amber-400/90 rounded-xs" />
                ))}
              </div>
              <div className="absolute -right-1.5 top-4 bottom-4 flex flex-col justify-between">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-amber-400/90 rounded-xs" />
                ))}
              </div>

              {/* Dynamic Icon */}
              <div className="w-10 h-10 rounded-xl bg-brand-orange-500/10 border border-brand-orange-500/25 flex items-center justify-center text-brand-orange-500 mb-1.5">
                {activeTab === 'mcu' && <Cpu className="w-5 h-5" />}
                {activeTab === 'wireless' && <Wifi className="w-5 h-5" />}
                {activeTab === 'io' && <Zap className="w-5 h-5" />}
              </div>

              <span className="text-[11px] font-mono font-black text-white tracking-wider">
                ESP32-S3
              </span>
              <span className="text-[8px] font-mono text-slate-400 mt-0.5">
                {current.status}
              </span>
            </motion.div>
          </div>

          {/* Minimalist Bottom Bar */}
          <div className="flex items-center justify-between z-10 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-2 truncate">
              <span className="text-slate-500">SPEC:</span>
              <span className="text-brand-orange-400 font-bold truncate">{current.name}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>{current.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
