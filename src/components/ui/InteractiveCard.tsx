import React from 'react';

export interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
}

/**
 * InteractiveCard:
 * On cursor hover, the card lifts smoothly upward, highlights with a vivid brand-orange border,
 * and leaves a deep ambient shadow and floor reflection behind.
 */
export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  cardClassName = '',
  ...props
}) => {
  return (
    <div className={`group relative h-full w-full ${className}`} {...props}>
      {/* Ambient floor shadow left behind when the card elevates */}
      <div
        aria-hidden="true"
        className="absolute -bottom-2 inset-x-6 h-8 rounded-full bg-brand-orange-500/25 dark:bg-brand-orange-500/35 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -z-10 transform translate-y-1 scale-90 group-hover:scale-100"
      />

      {/* Elevating card body with orange border on hover */}
      <div
        className={`h-full w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-brand-orange-500 dark:group-hover:border-brand-orange-500 group-hover:shadow-[0_22px_44px_-10px_rgba(234,88,12,0.3),0_12px_24px_-6px_rgba(0,0,0,0.35)] ${cardClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;
