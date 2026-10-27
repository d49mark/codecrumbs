import React from 'react';
import { Check, Copy } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { useClipboard } from '../../hooks';

const FOOTER_STAMP_TEXT = 'a crumb by [code] crumbs 🍪';

export const Footer: React.FC = () => {
  const { hasCopied, copy } = useClipboard(2000);

  return (
    <footer className="relative z-10 border-t border-[#1E293B]/80 bg-[#0B0F19]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <BrandLogo variant="footer" size="sm" showTagline={true} />

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => copy(FOOTER_STAMP_TEXT)}
            className="group flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[#111726] hover:bg-[#192236] border border-[#1E293B] hover:border-[#818CF8]/40 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            aria-label="Copy codecrumbs badge stamp"
          >
            <span>a crumb by</span>
            <span className="px-1 py-0.2 rounded-[2px] bg-[#131B2E] text-[#818CF8] border border-[#818CF8]/30">
              code
            </span>
            <span className="font-sans font-bold text-white">crumbs</span>
            {hasCopied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

