import React from 'react';
import { Snapshot } from '../../types';
import { SnapshotGraphic } from './SnapshotGraphic';

export interface SnapshotThumbnailProps {
  snapshot: Snapshot;
  onClick: () => void;
}

export const SnapshotThumbnail: React.FC<SnapshotThumbnailProps> = ({
  snapshot,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col gap-1.5 focus:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View snapshot: ${snapshot.caption}`}
    >
      <SnapshotGraphic type={snapshot.type} label={snapshot.caption} />
      <span className="text-[11px] text-slate-400 group-hover:text-slate-200 text-center truncate px-1 transition-colors">
        {snapshot.caption}
      </span>
    </div>
  );
};

