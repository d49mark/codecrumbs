import React, { useRef } from 'react';
import { Search, X } from 'lucide-react';
import { CategoryFilter } from '../../types';
import { CATEGORIES } from '../../data/artifacts';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../common/Button';
import { useKeyboardShortcut } from '../../hooks';

export interface HeaderProps {
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Focus search input on ⌘K or Ctrl+K
  useKeyboardShortcut({
    key: 'k',
    ctrlOrMeta: true,
    onTrigger: () => {
      searchInputRef.current?.focus();
    },
  });

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/75 backdrop-blur-md border-b border-[#1E293B]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <BrandLogo variant="header" size="md" />
          <div className="hidden lg:flex items-center gap-3.5 pl-3.5 border-l border-[#1E293B]">
            <span className="text-xs font-mono text-slate-400 tracking-tight">
              a trail of digital artifacts <span className="text-[#818CF8]">/</span>{' '}
              est. 2024
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="relative hidden sm:flex items-center">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search ⌘K"
              className="w-36 lg:w-44 bg-[#111726]/90 text-xs text-slate-200 placeholder-slate-500 pl-8 pr-3 py-1.5 rounded-[4px] border border-[#232D45] focus:border-[#818CF8] focus:outline-none font-mono transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2 text-slate-400 hover:text-white p-0.5"
                aria-label="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <nav className="flex items-center gap-1.5" aria-label="Artifact categories">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant="filter"
                size="sm"
                isActive={selectedCategory === cat}
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

