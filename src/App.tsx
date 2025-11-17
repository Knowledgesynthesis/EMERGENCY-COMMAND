import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ConditionsPage } from '@/pages/ConditionsPage';
import { ConditionDetailPage } from '@/pages/ConditionDetailPage';
import { CasesPage } from '@/pages/CasesPage';
import { RedFlagsPage } from '@/pages/RedFlagsPage';
import { AssessmentsPage } from '@/pages/AssessmentsPage';
import { GlossaryPage } from '@/pages/GlossaryPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { useStore } from '@/store';
import { initializeUserProgress } from '@/store';
import { conditions } from '@/data/conditions';

function App() {
  const { theme, setConditions } = useStore();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    // Initialize user progress if needed
    initializeUserProgress();

    // Load conditions data
    setConditions(conditions);

    // Set up online/offline listeners
    const handleOnline = () => useStore.getState().setOfflineMode(false);
    const handleOffline = () => useStore.getState().setOfflineMode(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [setConditions]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="conditions" element={<ConditionsPage />} />
          <Route path="conditions/:id" element={<ConditionDetailPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="red-flags" element={<RedFlagsPage />} />
          <Route path="assessments" element={<AssessmentsPage />} />
          <Route path="glossary" element={<GlossaryPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
