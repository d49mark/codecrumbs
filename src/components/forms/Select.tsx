import React, { forwardRef } from 'react';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`w-full bg-[#0B0F19] border border-[#232D45] rounded px-2.5 py-1.5 text-xs text-white focus:border-[#818CF8] focus:outline-none font-mono transition-colors ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

