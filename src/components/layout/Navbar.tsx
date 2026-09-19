import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { Button } from '../ui/Button';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { openAIChat } from '../../services/chatEvents';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const el =
        document.getElementById(targetId) ||
        (targetId === 'contact' ? document.getElementById('quote-terminal') : null);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else if (location.pathname !== '/') {
        navigate(`/${href}`);
      }
      return;
    }
    if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#090D16]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/90 shadow-sm py-3.5 sm:py-4'
          : 'bg-white/90 dark:bg-[#090D16]/90 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60 py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
          {/* Brand Logo on Left */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-2.5 sm:gap-4 group focus:outline-none rounded"
            aria-label="Steel & Stack Home"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 p-1.5 sm:p-2 group-hover:border-brand-orange-400 group-hover:shadow-orange-sm transition-all flex-shrink-0">
              <img
                src="/logo-mark.png"
                alt="Steel & Stack Monogram"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-xl font-black tracking-wider sm:tracking-widest text-slate-950 dark:text-white uppercase leading-none font-display">
                Steel &amp; Stack
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-orange-500"></span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {SITE_CONFIG.navLinks.map((link) => {
              const isRouter = link.href.startsWith('/');
              const isActive = isRouter && location.pathname === link.href;

              if (isRouter) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-xs font-mono font-bold tracking-wider uppercase px-3 py-2 rounded-full transition-all ${
                      isActive
                        ? 'text-brand-orange-600 dark:text-brand-orange-400 bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800/80 shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-all"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: ThemeToggle & Quote CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <ThemeToggle />
            <Button
              onClick={(e) => {
                e.preventDefault();
                openAIChat("I want to start a new project with Steel & Stack. Can you help me define my requirements and get an engineer consultation?");
              }}
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="uppercase tracking-widest text-xs font-bold font-mono py-3 px-6 rounded-full shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Action Group */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <Button
              onClick={(e) => {
                e.preventDefault();
                openAIChat("I want to start a new project with Steel & Stack. Can you help me define my requirements and get an engineer consultation?");
              }}
              variant="primary"
              size="sm"
              className="text-[10px] sm:text-xs px-2.5 sm:px-4 py-1.5 sm:py-2 uppercase tracking-wider rounded-full shadow-orange-sm font-bold"
            >
              Start
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-1.5 sm:p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-orange-500 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5 text-slate-900 dark:text-white" /> : <Menu className="w-5 h-5 text-slate-900 dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0D1322]/95 backdrop-blur-xl shadow-2xl animate-fadeIn">
          <div className="px-5 pt-4 pb-7 space-y-2.5">
            {SITE_CONFIG.navLinks.map((link) => {
              const isRouter = link.href.startsWith('/');
              const isActive = isRouter && location.pathname === link.href;

              if (isRouter) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-colors border ${
                      isActive
                        ? 'text-brand-orange-600 dark:text-brand-orange-400 bg-brand-orange-50/80 dark:bg-brand-orange-950/60 border-brand-orange-200 dark:border-brand-orange-800'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-brand-orange-600 dark:hover:text-brand-orange-400 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-brand-orange-600 dark:hover:text-brand-orange-400 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  openAIChat("I want to start a new project with Steel & Stack. Can you help me define my requirements and get an engineer consultation?");
                }}
                variant="primary"
                size="md"
                className="w-full justify-center tracking-widest text-xs uppercase font-mono rounded-full py-3.5 shadow-orange-md font-bold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start a Project
              </Button>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phoneHref}`}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-brand-orange-400 text-[11px]"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange-500" />
                  <span>Call Us</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-400 font-bold hover:border-emerald-400 text-[11px]"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
