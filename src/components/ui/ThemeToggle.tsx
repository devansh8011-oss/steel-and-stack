import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange-500/60 active:scale-95 flex-shrink-0 ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700/90 border border-slate-700 text-amber-400 shadow-[0_2px_10px_rgba(0,0,0,0.3)]'
          : 'bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/90 text-slate-700 shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-amber-400 fill-amber-400/20 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-slate-800 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
};
