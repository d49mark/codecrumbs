import React from 'react';
import { Artifact, LightboxSnapshot, Year } from '../../types';
import { YEARS } from '../../data/artifacts';
import { ArtifactCard } from './ArtifactCard';

export interface ArtifactListProps {
  artifacts: Artifact[];
  expandedIds: string[];
  onToggleCard: (id: string) => void;
  onSnapshotClick: (snapshot: LightboxSnapshot) => void;
  onYearHover: (year: Year) => void;
}

export const ArtifactList: React.FC<ArtifactListProps> = ({
  artifacts,
  expandedIds,
  onToggleCard,
  onSnapshotClick,
  onYearHover,
}) => {
  if (artifacts.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-[#1E293B] rounded-lg">
        <p className="font-mono text-sm text-slate-400">
          No digital crumbs found matching your criteria.
        </p>
        <span className="text-xs text-slate-500 mt-1 block">
          Try adjusting your search query or category filter.
        </span>
      </div>
    );
  }

  return (
    <section className="space-y-12">
      {YEARS.map((year) => {
        const yearItems = artifacts.filter((item) => item.year === year);
        if (yearItems.length === 0) return null;

        return (
          <div
            key={year}
            id={`year-section-${year}`}
            onMouseEnter={() => onYearHover(year)}
            className="scroll-mt-24 space-y-4"
          >
            <div className="flex items-baseline justify-between border-b border-[#1E293B] pb-2.5">
              <div className="flex items-baseline gap-2.5">
                <h2 className="text-xl font-bold font-mono text-[#F8FAFC] relative">
                  {year}
                  <span className="absolute -bottom-[11px] left-0 right-0 h-[2px] bg-[#818CF8]" />
                </h2>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {String(yearItems.length).padStart(2, '0')}{' '}
                  {yearItems.length === 1 ? 'CRUMB' : 'CRUMBS'}
                </span>
              </div>
            </div>

            <div className="space-y-3.5 pt-1">
              {yearItems.map((item) => (
                <ArtifactCard
                  key={item.id}
                  artifact={item}
                  isExpanded={expandedIds.includes(item.id)}
                  onToggle={() => onToggleCard(item.id)}
                  onSnapshotClick={onSnapshotClick}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

