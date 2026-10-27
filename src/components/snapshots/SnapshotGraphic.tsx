import React from 'react';
import { SnapshotType } from '../../types';

export interface SnapshotGraphicProps {
  type: SnapshotType;
  label: string;
  className?: string;
}

export const SnapshotGraphic: React.FC<SnapshotGraphicProps> = ({
  type,
  label,
  className = '',
}) => {
  const sanitizedFilename = `${label.toLowerCase().replace(/\s+/g, '-')}.app`;

  return (
    <div
      className={`relative w-full aspect-[16/10] rounded-lg bg-[#0B0F19] border border-[#232D45] overflow-hidden group-hover:border-[#818CF8]/50 transition-all shadow-inner flex flex-col ${className}`}
    >
      <div className="h-5 px-2.5 bg-[#111726] border-b border-[#1E293B] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
        </div>
        <span className="text-[9px] font-mono text-slate-500 truncate max-w-[110px]">
          {sanitizedFilename}
        </span>
      </div>

      <div className="p-2.5 flex-1 flex flex-col justify-between bg-gradient-to-br from-[#0F1523] to-[#0B0F19]">
        {type === 'config' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-[#818CF8] bg-[#818CF8]/10 px-1.5 py-0.5 rounded">
                SCHEMA
              </span>
              <span className="text-[9px] font-mono text-emerald-400">● READY</span>
            </div>
            <div className="space-y-1 bg-[#131B2E] p-2 rounded border border-[#1E293B]">
              <div className="h-1.5 w-3/4 bg-slate-400/30 rounded" />
              <div className="h-1.5 w-1/2 bg-[#818CF8]/40 rounded" />
            </div>
          </div>
        )}

        {type === 'metrics' && (
          <div className="space-y-2 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-slate-400">TELEMETRY</span>
              <span className="text-[10px] font-mono font-bold text-[#FBBF24]">98.4%</span>
            </div>
            <svg
              viewBox="0 0 120 40"
              className="w-full h-11 overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M0 32 Q 20 28, 35 18 T 70 22 T 100 8 L 120 4"
                fill="none"
                stroke="#818CF8"
                strokeWidth="2"
              />
              <circle cx="100" cy="8" r="3" fill="#F59E0B" />
            </svg>
          </div>
        )}

        {type === 'grid' && (
          <div className="space-y-1.5">
            <div className="grid grid-cols-4 gap-1 pb-1 border-b border-[#1E293B]">
              <div className="h-2 bg-[#818CF8]/40 rounded" />
              <div className="h-2 bg-slate-600/40 rounded" />
              <div className="h-2 bg-slate-600/40 rounded" />
              <div className="h-2 bg-[#F59E0B]/50 rounded" />
            </div>
            {[1, 2, 3].map((row) => (
              <div key={row} className="grid grid-cols-4 gap-1 items-center">
                <div className="h-1.5 bg-slate-500/30 rounded" />
                <div className="h-1.5 bg-slate-700/50 rounded" />
                <div className="h-1.5 bg-emerald-500/30 rounded" />
                <div className="h-1.5 bg-[#818CF8]/30 rounded" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

