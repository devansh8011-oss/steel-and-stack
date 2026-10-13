import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from '../ui/ScrollProgress';
import { AIChatbot } from '../chat/AIChatbot';
import { MicroSlats } from '../ui/MicroSlats';
import { useTheme } from '../../context/ThemeContext';

export const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element =
          document.getElementById(id) ||
          (id === 'contact' ? document.getElementById('quote-terminal') : null);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white selection:bg-brand-orange-500 selection:text-white relative">
      {/* Site-wide MicroSlats Interactive Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35 dark:opacity-45 transition-opacity duration-300"
        aria-hidden="true"
      >
        <MicroSlats
          preset="swell"
          color={isDark ? '#334155' : '#CBD5E1'}
          glintColor={isDark ? '#EA580C' : '#F97316'}
          backgroundColor="transparent"
          slatWidth={10}
          slatHeight={26}
          gap={3}
          roundness={0.75}
          interactive={true}
          cursorStrength={1.2}
          cursorSize={44}
          swirl={0.1}
          trail={1.4}
          lean={0.2}
          intro={true}
          introDuration={1.2}
          className="w-full h-full"
        />
      </div>

      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pb-12 sm:pb-0 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};
