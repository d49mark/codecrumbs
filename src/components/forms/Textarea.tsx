import React, { forwardRef } from 'react';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', rows = 2, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={`w-full bg-[#0B0F19] border border-[#232D45] rounded px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-[#818CF8] focus:outline-none transition-colors ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

