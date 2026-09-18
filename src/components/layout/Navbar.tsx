import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { Button } from '../ui/Button';
import { Menu, X, ArrowRight, Mail, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        window.location.href = `/${href}`;
      }
      return;
    }
    if (location.pathname === '/') {
      if (href === '/contact' || href === '#contact' || href === '#quote-terminal') {
        e.preventDefault();
        const el = document.getElementById('contact') || document.getElementById('quote-terminal');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '#contact');
        }
        return;
      }
      if (href === '/services' || href === '#services' || href === '#capabilities') {
        e.preventDefault();
        const el = document.getElementById('capabilities') || document.getElementById('services');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '#capabilities');
        }
        return;
      }
      if (href === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3.5 sm:py-4'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between min-h-[58px] sm:min-h-[64px]">
          {/* Brand Logo on Left */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-4 group focus:outline-none rounded"
            aria-label="Steel & Stack Home"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 p-2 group-hover:border-brand-orange-400 group-hover:shadow-orange-sm transition-all">
              <img
                src="/logo-mark.png"
                alt="Steel & Stack Monogram"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-black tracking-widest text-slate-950 uppercase leading-none font-display">
                Steel &amp; Stack
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-orange-500"></span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono font-bold tracking-widest uppercase px-4 py-2 rounded-full text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Phone & Quote CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneHref}`}
              className="text-xs font-mono font-bold text-slate-600 hover:text-slate-950 flex items-center gap-2 py-2 px-3 rounded-full hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange-500" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="uppercase tracking-widest text-xs font-bold font-mono py-3 px-6 rounded-full shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="primary"
              size="sm"
              className="text-[11px] px-3.5 py-1.5 uppercase tracking-wider rounded-full"
            >
              Start
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-2xl text-sm font-mono font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'text-brand-orange-600 bg-brand-orange-50 border border-brand-orange-200'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Button
                href="/contact"
                onClick={(e) => {
                  handleNavClick(e, '/contact');
                  setIsOpen(false);
                }}
                variant="primary"
                size="md"
                className="w-full justify-center tracking-widest text-xs uppercase font-mono rounded-full py-3"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request an Engineering Quote
              </Button>

              <div className="text-xs font-mono text-slate-600 space-y-2 pt-2 px-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-orange-600" />
                  <span>{SITE_CONFIG.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-orange-600" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
