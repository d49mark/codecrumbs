import React from 'react';
import { LightboxSnapshot } from '../../types';
import { Modal } from '../common/Modal';
import { SnapshotGraphic } from '../snapshots/SnapshotGraphic';

export interface LightboxModalProps {
  snapshot: LightboxSnapshot | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  snapshot,
  onClose,
}) => {
  return (
    <Modal
      isOpen={Boolean(snapshot)}
      onClose={onClose}
      subtitle={snapshot?.projectTitle}
      title={snapshot?.caption}
      maxWidth="xl"
    >
      {snapshot && (
        <SnapshotGraphic type={snapshot.type} label={snapshot.caption} />
      )}
    </Modal>
  );
};

