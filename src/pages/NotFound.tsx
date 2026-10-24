import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { MetaTags } from '../components/seo/MetaTags';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { openAIChat } from '../services/chatEvents';
import {
  Home,
  ArrowLeft,
  Search,
  Bot,
  Copy,
  Check,
  Compass,
  Code2,
  FolderGit2,
  ReceiptText,
  Send,
  Terminal as TerminalIcon,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface QuickDestination {
  title: string;
  tagline: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

const QUICK_DESTINATIONS: QuickDestination[] = [
  {
    title: 'What We Build',
    tagline: 'High-speed websites, custom business software, and hardware',
    href: '/#capabilities',
    icon: <Code2 className="w-5 h-5 text-brand-orange-500" />,
    badge: 'CAPABILITIES',
  },
  {
    title: 'Our Works',
    tagline: 'Explore shipped client projects, platforms & hardware',
    href: '/#works',
    icon: <FolderGit2 className="w-5 h-5 text-brand-orange-500" />,
    badge: 'CASE STUDIES',
  },
  {
    title: 'Fixed Pricing',
    tagline: 'Clear, transparent packages starting at ₹9,999 with code ownership',
    href: '/#pricing',
    icon: <ReceiptText className="w-5 h-5 text-brand-orange-500" />,
    badge: 'PACKAGES',
  },
  {
    title: 'Get a Quote',
    tagline: 'Submit your requirements and get a detailed proposal within 24h',
    href: '/contact',
    icon: <Send className="w-5 h-5 text-brand-orange-500" />,
    badge: 'DIRECT QUOTE',
  },
];

const SUGGESTED_QUERIES = [
  { label: 'Pricing Plans', target: '/#pricing' },
  { label: 'AI Websites', target: '/#capabilities' },
  { label: 'Case Studies', target: '/#works' },
  { label: 'Custom Software', target: '/#capabilities' },
  { label: 'Contact Studio', target: '/contact' },
];

export const NotFound: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentPath = location.pathname;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAskAI = (prompt?: string) => {
    const defaultPrompt = prompt || `I landed on a missing route (${currentPath}). Can you help me find the right section on Steel & Stack?`;
    openAIChat(defaultPrompt);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    if (query.includes('price') || query.includes('pricing') || query.includes('cost') || query.includes('rate')) {
      navigate('/#pricing');
      return;
    }
    if (query.includes('work') || query.includes('project') || query.includes('portfolio') || query.includes('client')) {
      navigate('/#works');
      return;
    }
    if (query.includes('contact') || query.includes('quote') || query.includes('hire') || query.includes('email') || query.includes('talk')) {
      navigate('/contact');
      return;
    }
    if (query.includes('service') || query.includes('build') || query.includes('hardware') || query.includes('stack')) {
      navigate('/#capabilities');
      return;
    }

    // Default to triggering AI assistant with user query
    handleAskAI(`I was looking for "${searchQuery}" on Steel & Stack, but hit a 404 page. Where can I find this?`);
  };

  return (
    <>
      <MetaTags
        title="404: Page Not Found | Steel & Stack"
        description="The requested page could not be found. Explore Steel & Stack's fast websites, custom software, transparent pricing, and digital solutions."
      />

      <Section
        variant="subtle-grid"
        spacing="normal"
        className="pt-10 sm:pt-16 pb-20 relative overflow-hidden"
      >
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-brand-orange-300/30 via-amber-200/20 to-transparent dark:from-brand-orange-600/15 dark:via-amber-500/10 dark:to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Header Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Badge variant="orange" size="md" className="shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse" />
              ERR_HTTP_404 // ROUTE_NOT_FOUND
            </Badge>
          </motion.div>

          {/* Large Hero 404 Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative select-none my-2 sm:my-4"
          >
            <div className="text-8xl sm:text-9xl md:text-[11rem] font-display font-black tracking-tighter leading-none bg-gradient-to-b from-slate-900 via-slate-700 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-600 bg-clip-text text-transparent">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-30 blur-2xl">
              <span className="text-8xl sm:text-9xl md:text-[11rem] font-display font-black text-brand-orange-500">
                404
              </span>
            </div>
          </motion.div>

          {/* Descriptive Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Signal Lost in the Stack
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              The coordinate you requested could not be located in our production routing table. It may have been refactored, renamed, or never committed.
            </p>

            {/* Requested Route Chip with Copy Action */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-xs">
              <span className="text-slate-400 dark:text-slate-500 select-none">REQUEST:</span>
              <span className="font-semibold text-brand-orange-600 dark:text-brand-orange-400 truncate max-w-[240px] sm:max-w-md">
                {currentPath}
              </span>
              <button
                onClick={handleCopy}
                title="Copy requested URL"
                className="ml-1 p-1 hover:text-brand-orange-500 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Copy route"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
          >
            <Button
              variant="flame"
              size="md"
              href="/"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
            >
              Return to Base
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={() => navigate(-1)}
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
              className="dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-brand-orange-500 dark:hover:bg-slate-800"
            >
              Previous Step
            </Button>

            <Button
              variant="secondary"
              size="md"
              onClick={() => handleAskAI()}
              icon={<Bot className="w-4 h-4 text-brand-orange-400" />}
              iconPosition="left"
              className="dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700"
            >
              Ask AI Copilot
            </Button>
          </motion.div>

          {/* Fast Route Finder / Search */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 max-w-xl mx-auto"
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where were you trying to go? (e.g., pricing, portfolio, quote)..."
                  className="w-full pl-11 pr-24 py-3 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-full text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange-500/50 focus:border-brand-orange-500 shadow-sm transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-3.5 py-1.5 bg-slate-900 dark:bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-mono text-xs font-bold rounded-full transition-all flex items-center gap-1 shadow-xs"
                >
                  <span>Resolve</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </form>

            {/* Quick Keyword Chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs">
              <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px] mr-1">Quick Jump:</span>
              {SUGGESTED_QUERIES.map((item) => (
                <Link
                  key={item.label}
                  to={item.target}
                  className="px-2.5 py-1 rounded-full bg-white/70 dark:bg-slate-900/70 hover:bg-brand-orange-50 dark:hover:bg-brand-orange-950/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-orange-600 dark:hover:text-brand-orange-400 font-mono text-[11px] transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* System Diagnostic Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-left bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs text-slate-300"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                  <TerminalIcon className="w-3.5 h-3.5 text-brand-orange-400" />
                  trace_diagnostics.log
                </span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                HTTP/2 • TLS 1.3
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 space-y-2 overflow-x-auto text-[11px] sm:text-xs leading-relaxed">
              <p className="text-slate-500">
                // Diagnostics telemetry automatically captured
              </p>
              <p>
                <span className="text-emerald-400">client@gateway</span>
                <span className="text-slate-500">:</span>
                <span className="text-brand-orange-400">~</span>
                <span className="text-slate-500">$</span>{' '}
                <span className="text-slate-200">curl -I https://steelandstack.com{currentPath}</span>
              </p>
              <p className="text-red-400 font-semibold">
                &gt; HTTP/2 404 Not Found
              </p>
              <p className="text-slate-400">
                &gt; Content-Type: text/html; charset=utf-8
              </p>
              <p className="text-slate-400">
                &gt; X-Steel-Route-Status: <span className="text-amber-400">UNRESOLVED_PATH</span>
              </p>
              <p className="text-slate-400">
                &gt; Cluster-Health: <span className="text-emerald-400">ALL_SYSTEMS_OPERATIONAL</span>
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-slate-500">
                  Tip: Need human support? Email us directly at{' '}
                  <a
                    href="mailto:contact@steelandstack.com"
                    className="text-brand-orange-400 hover:underline font-semibold"
                  >
                    contact@steelandstack.com
                  </a>
                </span>
                <button
                  onClick={() => handleAskAI(`I need help finding information about: ${currentPath}`)}
                  className="inline-flex items-center gap-1.5 text-brand-orange-400 hover:text-brand-orange-300 font-bold self-start sm:self-auto"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Launch AI Diagnosis</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Hub Grid */}
          <div className="mt-16 text-left">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brand-orange-500" />
                  Verified Navigation Coordinates
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Head straight to our core products, portfolio, and transparent quote modules.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUICK_DESTINATIONS.map((dest, idx) => (
                <motion.div
                  key={dest.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                >
                  <Link
                    to={dest.href}
                    className="group flex flex-col justify-between p-5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-500/80 dark:hover:border-brand-orange-500/80 shadow-xs hover:shadow-orange-sm hover:-translate-y-0.5 transition-all h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-brand-orange-50 dark:bg-brand-orange-950/50 border border-brand-orange-200/50 dark:border-brand-orange-900/40">
                          {dest.icon}
                        </div>
                        {dest.badge && (
                          <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 tracking-wider">
                            {dest.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-orange-600 dark:group-hover:text-brand-orange-400 transition-colors">
                        {dest.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {dest.tagline}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between font-mono text-xs text-brand-orange-600 dark:text-brand-orange-400 font-semibold">
                      <span>Explore Route</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
