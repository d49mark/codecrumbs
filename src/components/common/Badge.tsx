import React from 'react';

export type BadgeVariant = 'category' | 'tag' | 'code' | 'status' | 'outline';
export type BadgeSize = 'xs' | 'sm';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  category: 'bg-[#192236] text-[#A5B4FC] border-[#818CF8]/25',
  tag: 'bg-[#6366F1]/15 text-[#A5B4FC] border-[#818CF8]/30',
  code: 'bg-[#131B2E] text-[#818CF8] border-[#818CF8]/30 font-semibold',
  status: 'bg-[#818CF8]/10 text-[#818CF8] border-transparent',
  outline: 'bg-transparent text-slate-400 border-[#232D45]',
};

const sizeStyles: Record<BadgeSize, string> = {
  xs: 'px-1.5 py-0.5 text-[9px]',
  sm: 'px-2 py-0.5 text-[10px]',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'category',
  size = 'sm',
  className = '',
  children,
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center font-mono uppercase tracking-wider rounded-[3px] border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

