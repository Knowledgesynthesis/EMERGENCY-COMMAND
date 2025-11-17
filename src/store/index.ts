import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState, UserProgress, Condition, CaseScenario, Assessment } from '@/types';

interface Store extends AppState {
  // Theme
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;

  // User Progress
  setUserProgress: (progress: UserProgress) => void;
  updateProgress: (updates: Partial<UserProgress>) => void;
  completeCase: (caseId: string) => void;
  addAssessmentScore: (assessmentId: string, score: number, timeTaken: number) => void;

  // Data
  conditions: Condition[];
  cases: CaseScenario[];
  assessments: Assessment[];
  setConditions: (conditions: Condition[]) => void;
  setCases: (cases: CaseScenario[]) => void;
  setAssessments: (assessments: Assessment[]) => void;

  // Offline
  setOfflineMode: (offline: boolean) => void;
  updateLastSync: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      // Initial state
      theme: 'dark',
      offlineMode: !navigator.onLine,
      lastSync: null,
      userProgress: null,
      conditions: [],
      cases: [],
      assessments: [],

      // Theme actions
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      setTheme: (theme) => set({ theme }),

      // User Progress actions
      setUserProgress: (progress) => set({ userProgress: progress }),

      updateProgress: (updates) =>
        set((state) => ({
          userProgress: state.userProgress
            ? { ...state.userProgress, ...updates }
            : null,
        })),

      completeCase: (caseId) =>
        set((state) => {
          if (!state.userProgress) return state;

          const completedCases = [...state.userProgress.completedCases];
          if (!completedCases.includes(caseId)) {
            completedCases.push(caseId);
          }

          return {
            userProgress: {
              ...state.userProgress,
              completedCases,
              lastActivity: new Date(),
              stats: {
                ...state.userProgress.stats,
                totalCasesCompleted: completedCases.length,
              },
            },
          };
        }),

      addAssessmentScore: (assessmentId, score, timeTaken) =>
        set((state) => {
          if (!state.userProgress) return state;

          const assessmentScores = [
            ...state.userProgress.assessmentScores,
            {
              assessmentId,
              score,
              completedAt: new Date(),
              timeTaken,
            },
          ];

          const averageScore =
            assessmentScores.reduce((sum, s) => sum + s.score, 0) /
            assessmentScores.length;

          return {
            userProgress: {
              ...state.userProgress,
              assessmentScores,
              lastActivity: new Date(),
              stats: {
                ...state.userProgress.stats,
                averageAssessmentScore: Math.round(averageScore),
              },
            },
          };
        }),

      // Data actions
      setConditions: (conditions) => set({ conditions }),
      setCases: (cases) => set({ cases }),
      setAssessments: (assessments) => set({ assessments }),

      // Offline actions
      setOfflineMode: (offline) => set({ offlineMode: offline }),
      updateLastSync: () => set({ lastSync: new Date() }),
    }),
    {
      name: 'emergency-command-storage',
      partialize: (state) => ({
        theme: state.theme,
        userProgress: state.userProgress,
      }),
    }
  )
);

// Initialize user progress if not exists
export function initializeUserProgress(): void {
  const store = useStore.getState();
  if (!store.userProgress) {
    store.setUserProgress({
      userId: 'default-user',
      completedCases: [],
      assessmentScores: [],
      conditionsStudied: [],
      lastActivity: new Date(),
      stats: {
        totalCasesCompleted: 0,
        averageAssessmentScore: 0,
        redFlagsLearned: 0,
        studyStreak: 0,
      },
    });
  }
}
