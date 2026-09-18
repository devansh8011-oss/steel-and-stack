import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'flame';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  isLoading = false,
  children,
  className = '',
  icon,
  iconPosition = 'right',
  disabled,
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-full font-mono uppercase tracking-wider';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-brand-orange-500 hover:bg-brand-orange-600 active:bg-brand-orange-700 text-white font-black shadow-orange-sm hover:shadow-orange-md border border-brand-orange-500 hover:-translate-y-0.5',
    flame:
      'bg-gradient-to-r from-brand-orange-500 to-red-500 hover:from-brand-orange-600 hover:to-red-600 text-white font-black shadow-orange-sm hover:shadow-orange-md border border-brand-orange-400 hover:-translate-y-0.5',
    secondary:
      'bg-slate-900 text-white hover:bg-slate-800 active:bg-black border border-slate-800 hover:-translate-y-0.5 shadow-sm',
    outline:
      'border border-slate-300 text-slate-800 bg-white hover:border-brand-orange-500 hover:text-brand-orange-600 hover:bg-brand-orange-50/40 shadow-sm',
    ghost:
      'text-slate-700 hover:text-brand-orange-600 hover:bg-brand-orange-50/60 border border-transparent',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {icon && iconPosition === 'left' && !isLoading && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !isLoading && <span>{icon}</span>}
    </>
  );

  if (href) {
    if (
      isExternal ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('http')
    ) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          onClick={onClick as any}
          {...(props as any)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClass} onClick={onClick as any} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClass}
      disabled={disabled || isLoading}
      onClick={onClick as any}
      {...(props as any)}
    >
      {content}
    </button>
  );
};
