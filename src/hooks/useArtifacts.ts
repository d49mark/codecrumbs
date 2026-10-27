import { useState, useMemo, useCallback } from 'react';
import {
  Artifact,
  CategoryFilter,
  NewCrumbFormData,
  Year,
} from '../types';
import { INITIAL_ARTIFACTS } from '../data/artifacts';

export function useArtifacts() {
  const [artifacts, setArtifacts] = useState<Artifact[]>(INITIAL_ARTIFACTS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [activeYear, setActiveYear] = useState<Year>('2026');
  const [expandedIds, setExpandedIds] = useState<string[]>(['08']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCard = useCallback((id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const filteredArtifacts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return artifacts.filter((item) => {
      const matchesCat =
        selectedCategory === 'ALL' || item.category === selectedCategory;

      if (!matchesCat) return false;
      if (!normalizedQuery) return true;

      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [artifacts, selectedCategory, searchQuery]);

  const scrollToYear = useCallback((year: Year) => {
    setActiveYear(year);
    const element = document.getElementById(`year-section-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const getYearCount = useCallback(
    (year: Year) => {
      return filteredArtifacts.filter((a) => a.year === year).length;
    },
    [filteredArtifacts]
  );

  const addArtifact = useCallback(
    (formData: NewCrumbFormData) => {
      if (!formData.title.trim()) return null;

      const nextNum = String(artifacts.length + 4).padStart(2, '0');
      const parsedTags = formData.tags
        .split(',')
        .map((t) => t.trim().toUpperCase())
        .filter(Boolean);

      const created: Artifact = {
        id: nextNum,
        year: formData.year,
        title: formData.title.trim(),
        category: formData.category,
        description: formData.description.trim() || 'Compact digital artifact.',
        tags: parsedTags.length > 0 ? parsedTags : ['EXPERIMENT'],
        about: formData.about.trim() || 'Built as an iterative micro-experiment.',
        url: formData.url.trim() || '#',
        snapshots: [
          { type: 'config', caption: 'Core configuration view' },
          { type: 'metrics', caption: 'Live execution telemetry' },
          { type: 'grid', caption: 'Structured output export' },
        ],
      };

      setArtifacts((prev) => [created, ...prev]);
      setExpandedIds((prev) => [created.id, ...prev]);
      return created;
    },
    [artifacts.length]
  );

  return {
    artifacts,
    selectedCategory,
    setSelectedCategory,
    activeYear,
    setActiveYear,
    expandedIds,
    toggleCard,
    searchQuery,
    setSearchQuery,
    filteredArtifacts,
    scrollToYear,
    getYearCount,
    addArtifact,
  };
}

