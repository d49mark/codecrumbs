import React from 'react';
import { BittenTerminalMark } from './BittenTerminalMark';

export interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  size = 'md',
  href = '#top',
  className = '',
  showTagline = false,
}) => {
  const markSize =
    size === 'sm' ? 20 : size === 'md' ? (variant === 'header' ? 38 : 28) : 48;

  const content = (
    <>
      <BittenTerminalMark size={markSize} />

      {variant === 'header' && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#818CF8] font-semibold pl-0.5 mb-0.5">
            code
          </span>
          <span className="text-[26px] font-extrabold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors leading-[0.95]">
            crumbs
          </span>
        </div>
      )}

      {variant === 'footer' && (
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded-[3px] bg-[#131B2E] text-[#818CF8] border border-[#818CF8]/30">
            code
          </span>
          <span className="font-bold text-[#F8FAFC] tracking-tight text-sm">crumbs</span>
          {showTagline && (
            <>
              <span className="text-slate-600 mx-1">—</span>
              <span className="font-mono text-slate-400 text-[11px]">
                a trail of digital artifacts / est. 2024
              </span>
            </>
          )}
        </div>
      )}

      {variant === 'inline' && (
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded-[3px] bg-[#131B2E] text-[#818CF8] border border-[#818CF8]/30">
            code
          </span>
          <span className="font-bold text-[#F8FAFC] tracking-tight">crumbs</span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`flex items-center gap-3 group focus:outline-none ${className}`}
      >
        {content}
      </a>
    );
  }

  return <div className={`flex items-center gap-3 ${className}`}>{content}</div>;
};

