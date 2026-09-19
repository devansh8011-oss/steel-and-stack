import React from 'react';

interface SectionProps {
  id?: string;
  variant?: 'white' | 'slate' | 'subtle-grid' | 'orange-glow' | 'dark-band';
  spacing?: 'compact' | 'normal' | 'tight';
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  containerClassName?: string;
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
  children,
  borderTop = false,
  borderBottom = false,
}) => {
  const variantStyles = {
    white: 'bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100',
    slate: 'bg-slate-50 dark:bg-[#0C111D] text-slate-900 dark:text-slate-100',
    'subtle-grid': 'bg-white dark:bg-[#090D16] bg-light-grid text-slate-900 dark:text-slate-100',
    'orange-glow': 'bg-white dark:bg-[#090D16] bg-orange-subtle-glow text-slate-900 dark:text-slate-100',
    'dark-band': 'bg-slate-950 text-white',
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
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${containerWidths[containerSize]} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};
