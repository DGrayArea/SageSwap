
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

const AnimatedCard = ({ 
  children, 
  className,
  hoverEffect = true,
  delay = 0
}: AnimatedCardProps) => {
  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
  ];

  return (
    <div 
      className={cn(
        'bg-card border border-border rounded-2xl p-6 overflow-hidden animate-fade-in-up',
        delay > 0 && delay <= 5 ? delayClasses[delay - 1] : '',
        hoverEffect && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
