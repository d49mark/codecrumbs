import React, { forwardRef } from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full bg-[#0B0F19] border border-[#232D45] rounded px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-[#818CF8] focus:outline-none transition-colors ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

