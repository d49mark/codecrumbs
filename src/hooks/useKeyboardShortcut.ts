import { useEffect } from 'react';

export interface ShortcutOptions {
  key: string;
  ctrlOrMeta?: boolean;
  onTrigger: () => void;
  preventDefault?: boolean;
}

export function useKeyboardShortcut({
  key,
  ctrlOrMeta = false,
  onTrigger,
  preventDefault = true,
}: ShortcutOptions): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keyMatches = e.key.toLowerCase() === key.toLowerCase();
      const modifierMatches = !ctrlOrMeta || (e.metaKey || e.ctrlKey);

      if (keyMatches && modifierMatches) {
        if (preventDefault) {
          e.preventDefault();
        }
        onTrigger();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, ctrlOrMeta, onTrigger, preventDefault]);
}

