export type SnapshotType = 'config' | 'metrics' | 'grid';

export interface Snapshot {
  type: SnapshotType;
  caption: string;
}

export interface LightboxSnapshot extends Snapshot {
  projectTitle: string;
}

export type CrumbCategory = 'AI STUDIO' | 'MICRO-SAAS' | 'AUTOMATION';

export type CategoryFilter = 'ALL' | CrumbCategory;

export type Year = string;

export interface Artifact {
  id: string;
  year: Year;
  title: string;
  category: CrumbCategory;
  description: string;
  tags: string[];
  about: string;
  url: string;
  snapshots: Snapshot[];
}

export interface NewCrumbFormData {
  title: string;
  year: Year;
  category: CrumbCategory;
  description: string;
  tags: string;
  about: string;
  url: string;
}

