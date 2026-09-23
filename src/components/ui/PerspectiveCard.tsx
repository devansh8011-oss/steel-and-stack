import React from 'react';
import { InteractiveCard } from './InteractiveCard';

export interface PerspectiveCardProps {
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
}

/**
 * PerspectiveCard wrapper delegating to InteractiveCard with hover elevation,
 * orange border, and shadow left behind.
 */
export const PerspectiveCard: React.FC<PerspectiveCardProps> = ({
  children,
  className = '',
  cardClassName = '',
}) => {
  return (
    <InteractiveCard className={className} cardClassName={cardClassName}>
      {children}
    </InteractiveCard>
  );
};

export default PerspectiveCard;
