import React from 'react';

interface SectionProps {
  id?: string;
  variant?: 'white' | 'slate' | 'subtle-grid' | 'orange-glow' | 'dark-band';
  spacing?: 'compact' | 'normal' | 'tight';
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  containerClassName?: string;
  background?: React.ReactNode;
  children: React.ReactNode;
  borderTop?: boolean;
  borderBottom?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  variant = 'white',
  spacing = 'normal',
  containerSize = 'lg',
  className = '',
  containerClassName = '',
  background,
  children,
  borderTop = false,
  borderBottom = false,
}) => {
  const variantStyles = {
    white: 'bg-white/70 dark:bg-[#090D16]/75 backdrop-blur-[2px] text-slate-900 dark:text-slate-100',
    slate: 'bg-slate-50/75 dark:bg-[#0C111D]/80 backdrop-blur-[2px] text-slate-900 dark:text-slate-100',
    'subtle-grid': 'bg-white/60 dark:bg-[#090D16]/65 backdrop-blur-[2px] bg-light-grid text-slate-900 dark:text-slate-100',
    'orange-glow': 'bg-white/70 dark:bg-[#090D16]/75 backdrop-blur-[2px] bg-orange-subtle-glow text-slate-900 dark:text-slate-100',
    'dark-band': 'bg-slate-950/90 backdrop-blur-[2px] text-white',
  };

  const spacingStyles = {
    tight: 'py-8 md:py-12',
    compact: 'py-12 md:py-16',
    normal: 'py-16 md:py-24',
  };

  const containerWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full px-4',
  };

  return (
    <section
      id={id}
      className={`w-full relative transition-colors duration-200 ${variantStyles[variant]} ${spacingStyles[spacing]} ${
        borderTop ? 'border-t border-slate-200/80 dark:border-slate-800/80' : ''
      } ${borderBottom ? 'border-b border-slate-200/80 dark:border-slate-800/80' : ''} ${className}`}
    >
      {background}
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${containerWidths[containerSize]} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};
