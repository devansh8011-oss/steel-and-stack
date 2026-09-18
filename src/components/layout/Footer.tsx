import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { Mail, Phone, MapPin, ArrowUpRight, Cpu, Globe, Shield, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Top Conversion Bar */}
      <div className="border-b border-slate-800 bg-slate-950/80 py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-ping"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-orange-400 font-bold">
                Engineering Studio • India-Wide Delivery
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide font-display">
              {SITE_CONFIG.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
              Custom physical robotics hardware and modern high-performance web platforms.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-xs font-extrabold font-mono uppercase tracking-widest px-6 py-3 rounded-lg shadow-orange-md transition-all"
            >
              Request a Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold tracking-wider px-5 py-3 rounded-lg border border-slate-700 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1 & 2: Brand & Blurb */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none">
              <div className="bg-white rounded-xl p-2.5 border border-slate-700 shadow-sm inline-block">
                <img
                  src="/logo.png"
                  alt="Steel & Stack Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Steel &amp; Stack is an India-based engineering studio. We build custom robotics systems (Arduino, ESP32, Raspberry Pi) and high-performance websites for clients nationwide. Operating fully online with insured courier delivery.
            </p>
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300">
              <Shield className="w-3.5 h-3.5 text-brand-orange-400" />
              <span>Pan-India Courier &amp; Remote Calibration</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services &amp; Architecture
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-orange-400 hover:text-brand-orange-300 font-bold flex items-center gap-1">
                  Get a Free Quote →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-400 mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>ESP32 &amp; FreeRTOS</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>Raspberry Pi &amp; Edge AI</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>React 19 &amp; Vite Web Apps</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>IoT Telemetry &amp; MQTT</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400 font-mono">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange-400 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange-400 flex-shrink-0 mt-0.5" />
                <span>Serving All of India — Online Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} Steel &amp; Stack Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-brand-orange-400">Engineering the Future of Tech</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
