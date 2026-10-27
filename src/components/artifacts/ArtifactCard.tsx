import React from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Artifact, LightboxSnapshot } from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { SnapshotThumbnail } from '../snapshots/SnapshotThumbnail';

export interface ArtifactCardProps {
  artifact: Artifact;
  isExpanded: boolean;
  onToggle: () => void;
  onSnapshotClick: (snapshot: LightboxSnapshot) => void;
}

export const ArtifactCard: React.FC<ArtifactCardProps> = ({
  artifact,
  isExpanded,
  onToggle,
  onSnapshotClick,
}) => {
  return (
    <article
      className={`rounded-lg transition-all duration-200 ${
        isExpanded
          ? 'bg-[#111726]/95 border border-[#818CF8]/45 shadow-[0_10px_35px_-10px_rgba(11,15,25,0.9)]'
          : 'bg-[#111726]/60 hover:bg-[#111726] border border-[#1E293B] hover:border-[#334155]'
      }`}
    >
      <div
        onClick={onToggle}
        className="px-4 py-3.5 flex items-center justify-between gap-4 cursor-pointer select-none"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3 min-w-0">
          <Badge variant="category">{artifact.category}</Badge>
          <h3 className="text-sm sm:text-base font-semibold text-[#F8FAFC] truncate">
            <span className="font-mono text-[#F59E0B] mr-1.5">#{artifact.id}</span>
            <span className="text-slate-500 mr-1.5">•</span>
            {artifact.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {!isExpanded && (
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              Inspect
            </span>
          )}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-[#818CF8]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t border-[#1E293B]/80 space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center pt-2">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {artifact.snapshots.map((snap, idx) => (
                <SnapshotThumbnail
                  key={idx}
                  snapshot={snap}
                  onClick={() =>
                    onSnapshotClick({ ...snap, projectTitle: artifact.title })
                  }
                />
              ))}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {artifact.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {artifact.tags.map((tag) => (
                  <Badge key={tag} variant="tag">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="pt-1">
                <Button
                  variant="launch"
                  size="lg"
                  href={artifact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />}
                  iconPosition="right"
                >
                  Launch
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#1E293B]/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h4 className="text-xs font-semibold text-[#F8FAFC] mb-0.5">
                About the Crumb
              </h4>
              <p className="text-xs text-slate-400">{artifact.about}</p>
            </div>
            <span className="text-[10px] font-mono text-slate-500 shrink-0">
              [code] crumbs // #{artifact.id}
            </span>
          </div>
        </div>
      )}
    </article>
  );
};

