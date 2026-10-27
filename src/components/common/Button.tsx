import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'launch'
  | 'filter'
  | 'outline'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

export type ButtonAsAnchor = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, (isActive?: boolean) => string> = {
  primary: () =>
    'bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0F19] font-semibold border-transparent shadow-[0_2px_10px_rgba(245,158,11,0.2)]',
  secondary: () =>
    'bg-[#111726] hover:bg-[#192236] text-slate-300 border-[#232D45] hover:border-[#818CF8]/50',
  launch: () =>
    'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] hover:from-[#FBBF24] hover:to-[#FDE68A] text-[#0B0F19] font-semibold shadow-[0_4px_20px_rgba(245,158,11,0.28)]',
  filter: (isActive) =>
    isActive
      ? 'bg-[#818CF8]/15 text-[#F8FAFC] border-[#818CF8] shadow-[0_0_12px_rgba(129,140,248,0.2)] font-mono uppercase tracking-wider'
      : 'bg-[#111726]/70 text-slate-400 border-[#1E293B] hover:border-slate-600 hover:text-slate-200 font-mono uppercase tracking-wider',
  outline: () =>
    'bg-[#111726] hover:bg-[#192236] border-[#1E293B] hover:border-[#818CF8]/40 text-slate-400 hover:text-slate-200 font-mono',
  ghost: () =>
    'bg-transparent hover:bg-[#111726] text-slate-400 hover:text-white border-transparent',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-2.5 py-1 text-[11px] rounded-[3px]',
  md: 'px-3 py-1.5 text-xs rounded-[4px]',
  lg: 'px-4 py-2 text-xs sm:text-sm rounded-[5px]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  isActive = false,
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-1.5 border transition-all cursor-pointer select-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  const combinedClasses = `${baseClasses} ${variantClasses[variant](isActive)} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type || 'button'} className={combinedClasses} {...buttonProps}>
      {content}
    </button>
  );
};

