import * as React from 'react';
import { cn } from '@/src/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark';
  children?: React.ReactNode;
  className?: string;
}

export function GlassCard({ className, variant = 'light', children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        variant === 'light' ? 'liquid-glass' : 'liquid-glass-dark',
        'rounded-xl p-6 premium-shadow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
