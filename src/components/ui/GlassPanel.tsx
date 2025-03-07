
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'colored';
  blur?: 'none' | 'sm' | 'md' | 'lg';
}

const GlassPanel = ({ 
  children, 
  className,
  variant = 'default',
  blur = 'md'
}: GlassPanelProps) => {
  const blurMap = {
    'none': '',
    'sm': 'backdrop-blur-sm',
    'md': 'backdrop-blur-md',
    'lg': 'backdrop-blur-lg',
  };

  const variantStyles = {
    'default': 'bg-white/10 border-white/20',
    'dark': 'bg-black/10 border-black/10',
    'colored': 'bg-primary/5 border-primary/20',
  };

  return (
    <div 
      className={cn(
        'border rounded-2xl transition-all',
        blurMap[blur],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
