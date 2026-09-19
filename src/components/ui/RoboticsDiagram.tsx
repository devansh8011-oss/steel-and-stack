import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Cpu, Zap, Compass, Copy, Check, Terminal } from 'lucide-react';

interface ModuleData {
  id: string;
  label: string;
  detail: string;
  specs: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  filename: string;
  codeLines: { num: number; text: string; highlight?: boolean }[];
}

const highlightSyntax = (text: string) => {
  if (!text) return <span>&nbsp;</span>;
  const trimmed = text.trim();
  if (trimmed.startsWith('//')) {
    return <span className="text-emerald-400/90 italic">{text}</span>;
  }
  if (trimmed.startsWith('#include')) {
    const match = text.match(/(#include\s+)(<[^>]+>|"[^"]+")/);
    if (match) {
      return (
        <>
          <span className="text-rose-400 font-semibold">{match[1]}</span>
          <span className="text-amber-300 font-medium">{match[2]}</span>
        </>
      );
    }
    return <span className="text-rose-400 font-semibold">{text}</span>;
  }

  // Handle inline comments
  const commentIndex = text.indexOf('//');
  const code = commentIndex !== -1 ? text.slice(0, commentIndex) : text;
  const comment = commentIndex !== -1 ? text.slice(commentIndex) : '';

  // Token Regex: Types, Control Flow, Function Calls, Numbers/Constants, Operators, Identifiers
  const tokenRegex =
    /(\b(?:void|float|uint8_t|uint16_t|uint32_t|int32_t|TickType_t|const|bool)\b)|(\b(?:if|for|while|return|else)\b)|(\b[a-zA-Z_]\w*(?=\s*\())|(\b(?:0x[0-9a-fA-F]+|\d+(?:\.\d+)?f?|STALL_VALUE)\b)|(<<|>>|<=|>=|==|!=|&&|\|\||[&|*<>=!+\-~])|(\b[a-zA-Z_]\w*\b)/g;

  const parts: React.ReactNode[] = [];
  let lastIdx = 0;
  let m: RegExpExecArray | null;

  while ((m = tokenRegex.exec(code)) !== null) {
    if (m.index > lastIdx) {
      parts.push(code.substring(lastIdx, m.index));
    }
    const [
      ,
      typeKw,
      ctrlKw,
      funcCall,
      numConst,
      operator,
      identifier,
    ] = m;

    if (typeKw) {
      parts.push(<span key={m.index} className="text-sky-400 font-semibold">{typeKw}</span>);
    } else if (ctrlKw) {
      parts.push(<span key={m.index} className="text-purple-400 font-bold">{ctrlKw}</span>);
    } else if (funcCall) {
      parts.push(<span key={m.index} className="text-amber-300 font-medium">{funcCall}</span>);
    } else if (numConst) {
      parts.push(<span key={m.index} className="text-orange-400 font-mono">{numConst}</span>);
    } else if (operator) {
      parts.push(<span key={m.index} className="text-rose-300 font-medium">{operator}</span>);
    } else if (identifier) {
      parts.push(<span key={m.index} className="text-slate-100">{identifier}</span>);
    }
    lastIdx = tokenRegex.lastIndex;
  }

  if (lastIdx < code.length) {
    parts.push(code.substring(lastIdx));
  }

  return (
    <>
      {parts}
      {comment && <span className="text-emerald-400/90 italic">{comment}</span>}
    </>
  );
};

export const RoboticsDiagram: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>('lidar');
  const [copied, setCopied] = useState<boolean>(false);

  const modules: Record<string, ModuleData> = {
    lidar: {
      id: 'lidar',
      label: '360° LiDAR & Vision SLAM',
      detail: 'Time-of-flight distance measurement up to 12m with 8,000 samples/sec for 2D/3D real-time spatial mapping.',
      specs: '12m Range • 15Hz Scan Rate • 8000 pts/s',
      icon: Eye,
      tag: 'Obstacle Detection',
      filename: 'lidar_slam.cpp',
      codeLines: [
        { num: 1, text: '// 360° LiDAR Time-of-Flight SLAM Driver' },
        { num: 2, text: '#include <RPLidar.h>' },
        { num: 3, text: '' },
        { num: 4, text: 'void LiDAR_Scan_Callback(const uint8_t *pkt) {' },
        { num: 5, text: '  float angle = (pkt[1] << 8 | pkt[0]) * 0.01f;' },
        { num: 6, text: '  uint16_t dist = (pkt[3] << 8 | pkt[2]);' },
        { num: 7, text: '  if (dist > 120 && dist < 12000) {', highlight: true },
        { num: 8, text: '    slam_insert_point(angle, dist);', highlight: true },
        { num: 9, text: '    detect_dynamic_hazards(dist, angle);' },
        { num: 10, text: '  }' },
        { num: 11, text: '}' },
      ],
    },
    mcu: {
      id: 'mcu',
      label: 'Dual-Core Controller',
      detail: 'ESP32 / Arduino RP2040 managing high-speed kinematics, deterministic PID velocity loops, and fail-safe watchdogs.',
      specs: '240 MHz Dual-Core • FreeRTOS Real-Time Tasks',
      icon: Cpu,
      tag: 'Compute Core',
      filename: 'kinematics_rtos.cpp',
      codeLines: [
        { num: 1, text: '// Dual-Core 240MHz FreeRTOS Control Task' },
        { num: 2, text: '#include <freertos/FreeRTOS.h>' },
        { num: 3, text: '#include <freertos/task.h>' },
        { num: 4, text: '' },
        { num: 5, text: 'void vKinematicsTask(void *pvParams) {' },
        { num: 6, text: '  TickType_t xLast = xTaskGetTickCount();' },
        { num: 7, text: '  for (;;) {' },
        { num: 8, text: '    compute_pid_velocity(&target_vel, &cur_vel);', highlight: true },
        { num: 9, text: '    esp_task_wdt_reset(); // Hardware watchdog feed', highlight: true },
        { num: 10, text: '    vTaskDelayUntil(&xLast, pdMS_TO_TICKS(10)); // 100Hz' },
        { num: 11, text: '  }' },
        { num: 12, text: '}' },
      ],
    },
    motors: {
      id: 'motors',
      label: 'TMC Silent Motor Drives & Kinematics',
      detail: 'Ultra-quiet 1/256 microstepping stepper or encoder-geared DC motors with closed-loop torque feedback.',
      specs: 'TMC2209 Drivers • Differential Drive 4WD',
      icon: Zap,
      tag: 'Motion Actuation',
      filename: 'tmc2209_stepper.cpp',
      codeLines: [
        { num: 1, text: '// TMC2209 SilentStepStick Differential Drive' },
        { num: 2, text: '#include <HardwareSerial.h>' },
        { num: 3, text: '#include <TMCStepper.h>' },
        { num: 4, text: '' },
        { num: 5, text: 'void step_drive(int32_t left_steps, int32_t right_steps) {' },
        { num: 6, text: '  driver_l.microsteps(256);' },
        { num: 7, text: '  driver_l.rms_current(1200); // 1200mA RMS torque', highlight: true },
        { num: 8, text: '  pulse_stepper_dma(left_steps, right_steps);', highlight: true },
        { num: 9, text: '  enforce_stallguard_threshold(STALL_VALUE);' },
        { num: 10, text: '}' },
      ],
    },
    imu: {
      id: 'imu',
      label: '9-DoF IMU & Orientation Fusion',
      detail: 'Kalman-filtered accelerometer and gyroscope for terrain tilt compensation and drift-free dead reckoning.',
      specs: 'BNO085 Sensor Hub • 100Hz Quaternions',
      icon: Compass,
      tag: 'Spatial Sensing',
      filename: 'imu_fusion.cpp',
      codeLines: [
        { num: 1, text: '// 9-Axis Sensor Fusion with Extended Kalman Filter' },
        { num: 2, text: '#include <Adafruit_BNO08x.h>' },
        { num: 3, text: '' },
        { num: 4, text: '// Fused quaternion state estimation loop' },
        { num: 5, text: 'void update_orientation(float ax, float ay, float az, float gx, float gy, float gz) {' },
        { num: 6, text: '  kalman_predict(&roll, &pitch, gx, gy, dt);', highlight: true },
        { num: 7, text: '  kalman_update(&roll, &pitch, ax, ay, az);', highlight: true },
        { num: 8, text: '  quaternion_to_euler(&q, &yaw, &pitch, &roll);' },
        { num: 9, text: '}' },
      ],
    },
  };

  const current = modules[activeModule] || modules.lidar;

  const handleCopy = () => {
    const raw = current.codeLines.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-[#090D16] border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-[28px] p-4 sm:p-8 shadow-subtle-card dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden select-none transition-colors">
      <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8">
        {/* Production Hardware & Kinematics Code Terminal */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between bg-[#0A0E1A] dark:bg-[#060A14] rounded-2xl sm:rounded-3xl border border-slate-800/90 dark:border-slate-800 relative overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* Subtle Top Ambient Glow Line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange-500/40 to-transparent pointer-events-none" />

          {/* Top Window Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-5 py-3 bg-[#0E1528] dark:bg-[#0A0F1F] border-b border-slate-800/90 gap-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.6)] inline-block" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.6)] inline-block" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)] inline-block" />
              </div>
              <div className="flex items-center gap-1.5 pl-3 border-l border-slate-700/80 font-mono text-xs text-slate-200 font-bold">
                <Terminal className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>{current.filename}</span>
              </div>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
              title="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Module Tabs Strip */}
          <div className="px-3 sm:px-5 pt-2.5 pb-2 flex items-center gap-1 sm:gap-1.5 flex-wrap border-b border-slate-800/80 bg-[#0A0E1A] dark:bg-[#070A14]">
            {Object.values(modules).map((mod) => {
              const isActive = activeModule === mod.id;
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveModule(mod.id)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{mod.id.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* Code Viewer Viewport with Vibrant Syntax Highlighting */}
          <div className="p-4 sm:p-5 flex-1 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed bg-[#04060E] dark:bg-[#020409]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="space-y-1"
              >
                {current.codeLines.map((line) => (
                  <div
                    key={line.num}
                    className={`flex items-baseline py-0.5 rounded px-1 transition-colors ${
                      line.highlight
                        ? 'bg-brand-orange-950/40 border-l-2 border-brand-orange-500 pl-1.5'
                        : 'hover:bg-slate-900/60'
                    }`}
                  >
                    <span className="w-7 select-none text-slate-600 text-right pr-3 flex-shrink-0 text-[11px]">
                      {line.num}
                    </span>
                    <span className="font-mono whitespace-pre inline-block">
                      {highlightSyntax(line.text)}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-5 py-2.5 bg-[#0E1528] dark:bg-[#0A0F1F] border-t border-slate-800/90 font-mono text-[10px] sm:text-[11px] text-slate-300 gap-2">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-slate-400 font-bold">SPEC:</span>
              <span className="text-slate-200 truncate">{current.specs}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold flex-shrink-0">
              <span>● COMPILED C++</span>
            </div>
          </div>
        </div>

        {/* Modules Breakdown List (Fully Themed for Dark & Light) */}
        <div className="w-full lg:w-1/2 space-y-3">
          <div className="mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 dark:text-brand-orange-400 block">
              Autonomous Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-display">
              Sub-System Kinematics &amp; Control
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
            {Object.values(modules).map((mod) => {
              const Icon = mod.icon;
              const isSelected = activeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  type="button"
                  className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-orange-50/70 dark:bg-brand-orange-950/40 border-brand-orange-400 dark:border-brand-orange-500 shadow-xs dark:shadow-[0_0_20px_rgba(249,115,22,0.15)]'
                      : 'bg-white dark:bg-[#0D1426] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/60 dark:hover:bg-[#111A30]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-brand-orange-500 text-white border-brand-orange-600 shadow-xs dark:shadow-[0_0_12px_rgba(249,115,22,0.5)]'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wide">
                        {mod.label}
                      </h4>
                      <span className="text-[9px] sm:text-[10px] font-mono text-brand-orange-600 dark:text-brand-orange-400 font-semibold bg-brand-orange-50 dark:bg-brand-orange-950/70 px-2.5 py-0.5 rounded-full border border-brand-orange-200 dark:border-brand-orange-800/80">
                        {mod.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-sans">
                      {mod.detail}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
