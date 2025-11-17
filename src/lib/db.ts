import { openDB, DBSchema, IDBPDatabase } from 'idb';
import type { UserProgress, Condition, CaseScenario, Assessment } from '@/types';

interface EmergencyCommandDB extends DBSchema {
  conditions: {
    key: string;
    value: Condition;
    indexes: { 'by-category': string };
  };
  cases: {
    key: string;
    value: CaseScenario;
    indexes: { 'by-condition': string };
  };
  assessments: {
    key: string;
    value: Assessment;
  };
  userProgress: {
    key: string;
    value: UserProgress;
  };
}

let dbInstance: IDBPDatabase<EmergencyCommandDB> | null = null;

export async function getDB(): Promise<IDBPDatabase<EmergencyCommandDB>> {
  if (dbInstance) return dbInstance;

  dbInstance = await openDB<EmergencyCommandDB>('emergency-command-db', 1, {
    upgrade(db) {
      // Conditions store
      const conditionsStore = db.createObjectStore('conditions', { keyPath: 'id' });
      conditionsStore.createIndex('by-category', 'category');

      // Cases store
      const casesStore = db.createObjectStore('cases', { keyPath: 'id' });
      casesStore.createIndex('by-condition', 'conditionId');

      // Assessments store
      db.createObjectStore('assessments', { keyPath: 'id' });

      // User progress store
      db.createObjectStore('userProgress', { keyPath: 'userId' });
    },
  });

  return dbInstance;
}

// Conditions
export async function saveCondition(condition: Condition): Promise<void> {
  const db = await getDB();
  await db.put('conditions', condition);
}

export async function getCondition(id: string): Promise<Condition | undefined> {
  const db = await getDB();
  return db.get('conditions', id);
}

export async function getAllConditions(): Promise<Condition[]> {
  const db = await getDB();
  return db.getAll('conditions');
}

export async function getConditionsByCategory(category: string): Promise<Condition[]> {
  const db = await getDB();
  return db.getAllFromIndex('conditions', 'by-category', category);
}

// Cases
export async function saveCase(caseScenario: CaseScenario): Promise<void> {
  const db = await getDB();
  await db.put('cases', caseScenario);
}

export async function getCase(id: string): Promise<CaseScenario | undefined> {
  const db = await getDB();
  return db.get('cases', id);
}

export async function getAllCases(): Promise<CaseScenario[]> {
  const db = await getDB();
  return db.getAll('cases');
}

export async function getCasesByCondition(conditionId: string): Promise<CaseScenario[]> {
  const db = await getDB();
  return db.getAllFromIndex('cases', 'by-condition', conditionId);
}

// Assessments
export async function saveAssessment(assessment: Assessment): Promise<void> {
  const db = await getDB();
  await db.put('assessments', assessment);
}

export async function getAssessment(id: string): Promise<Assessment | undefined> {
  const db = await getDB();
  return db.get('assessments', id);
}

export async function getAllAssessments(): Promise<Assessment[]> {
  const db = await getDB();
  return db.getAll('assessments');
}

// User Progress
export async function saveUserProgress(progress: UserProgress): Promise<void> {
  const db = await getDB();
  await db.put('userProgress', progress);
}

export async function getUserProgress(userId: string): Promise<UserProgress | undefined> {
  const db = await getDB();
  return db.get('userProgress', userId);
}

// Initialize database with seed data
export async function initializeDatabase(
  conditions: Condition[],
  cases: CaseScenario[],
  assessments: Assessment[]
): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(['conditions', 'cases', 'assessments'], 'readwrite');

  await Promise.all([
    ...conditions.map(c => tx.objectStore('conditions').put(c)),
    ...cases.map(c => tx.objectStore('cases').put(c)),
    ...assessments.map(a => tx.objectStore('assessments').put(a)),
  ]);

  await tx.done;
}
