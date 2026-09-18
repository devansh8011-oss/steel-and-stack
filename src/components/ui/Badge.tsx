import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'yellow' | 'steel' | 'dark' | 'outline' | 'pulse';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 font-bold tracking-wider',
    md: 'text-xs px-3 py-1 font-bold tracking-widest',
  };

  const variantStyles = {
    orange: 'bg-brand-orange-50 text-brand-orange-700 border border-brand-orange-200 shadow-sm',
    yellow: 'bg-amber-50 text-amber-800 border border-amber-200',
    steel: 'bg-slate-100 text-slate-700 border border-slate-200',
    dark: 'bg-slate-900 text-white border border-slate-800',
    outline: 'bg-white text-slate-600 border border-slate-300 shadow-sm',
    pulse: 'bg-brand-orange-50 text-brand-orange-600 border border-brand-orange-300 shadow-orange-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono uppercase ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="opacity-90">{icon}</span>}
      {children}
    </span>
  );
};
