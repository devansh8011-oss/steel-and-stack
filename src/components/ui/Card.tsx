import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padded?: boolean | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  padded = 'md',
  bordered = true,
  glow = false,
}) => {
  const paddingStyles = {
    false: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const padKey = typeof padded === 'boolean' ? (padded ? 'md' : 'false') : padded;

  return (
    <div
      className={`bg-white rounded-2xl transition-all duration-200 ${
        bordered ? 'border border-slate-200/90' : ''
      } ${
        glow ? 'border-brand-orange-300 shadow-orange-sm' : 'shadow-subtle-card'
      } ${
        hoverEffect
          ? 'hover:border-brand-orange-400 hover:shadow-hover-card hover:-translate-y-1'
          : ''
      } ${paddingStyles[padKey]} ${className}`}
    >
      {children}
    </div>
  );
};
