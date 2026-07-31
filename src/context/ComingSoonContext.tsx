import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { ComingSoonDialog } from '../components/ComingSoonDialog.js';

type ComingSoonContextValue = {
  openGitHubComingSoon: () => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openGitHubComingSoon = useCallback(() => {
    setOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      openGitHubComingSoon,
    }),
    [openGitHubComingSoon],
  );

  return (
    <ComingSoonContext.Provider value={value}>
      {children}
      <ComingSoonDialog open={open} onClose={() => setOpen(false)} />
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const context = useContext(ComingSoonContext);

  if (!context) {
    throw new Error('useComingSoon must be used within ComingSoonProvider');
  }

  return context;
}
