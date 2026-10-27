import React from 'react';
import { Plus } from 'lucide-react';
import { Year } from '../../types';
import { YEARS } from '../../data/artifacts';
import { Button } from '../common/Button';

export interface SidebarProps {
  activeYear: Year;
  onSelectYear: (year: Year) => void;
  getYearCount: (year: Year) => number;
  onOpenAddModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeYear,
  onSelectYear,
  getYearCount,
  onOpenAddModal,
}) => {
  return (
    <aside className="md:col-span-3 lg:col-span-2">
      <div className="sticky top-28">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-6">
          THE JOURNEY
        </div>

        <div className="relative pl-2 space-y-7">
          <div className="absolute left-[47px] top-2 bottom-2 w-px bg-[#1E293B]" />
          {YEARS.map((year) => {
            const isActive = activeYear === year;
            const count = getYearCount(year);

            return (
              <button
                key={year}
                type="button"
                onClick={() => onSelectYear(year)}
                className="group flex items-center gap-4 w-full text-left focus:outline-none relative cursor-pointer"
              >
                <span
                  className={`font-mono text-sm transition-colors w-9 ${
                    isActive
                      ? 'text-[#F8FAFC] font-bold'
                      : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                >
                  {year}
                </span>

                <span
                  className={`w-3 h-3 rounded-full border-2 transition-all z-10 ${
                    isActive
                      ? 'bg-[#F59E0B] border-[#FDE68A] shadow-[0_0_10px_rgba(245,158,11,0.7)] scale-110'
                      : 'bg-[#0B0F19] border-[#334155] group-hover:border-[#818CF8]'
                  }`}
                />

                <span className="text-[10px] font-mono text-slate-500">
                  {String(count).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E293B]/80">
          <Button
            variant="secondary"
            size="md"
            className="w-full"
            icon={<Plus className="w-3.5 h-3.5 text-[#F59E0B]" />}
            onClick={onOpenAddModal}
          >
            Add Crumb
          </Button>
        </div>
      </div>
    </aside>
  );
};

