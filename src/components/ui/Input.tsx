import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, icon, ...props }, ref) => {
    return (
      <div className="space-y-1.5 w-full">
        {label && (
          <label className="text-[13px] font-semibold text-label-secondary ml-3 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative flex items-center group">
          {icon && (
            <div className="absolute left-4 text-label-tertiary group-focus-within:text-primary transition-colors">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full bg-surface-secondary border-none rounded-2xl py-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-label-tertiary/60 text-label-primary text-[15px] outline-none',
              icon ? 'pl-12 pr-4' : 'px-6',
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
