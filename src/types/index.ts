// Core type definitions for Emergency Command

export interface Condition {
  id: string;
  name: string;
  category: ConditionCategory;
  description: string;
  stabilization: StabilizationStep[];
  initialTests: DiagnosticTest[];
  criticalInterventions: Intervention[];
  redFlags: RedFlag[];
  escalation: EscalationCriteria[];
  pitfalls: string[];
  timeTargets?: TimeTarget[];
  guidelines?: string[];
}

export type ConditionCategory =
  | 'cardiac'
  | 'neuro'
  | 'infectious'
  | 'immunologic'
  | 'abdominal'
  | 'trauma'
  | 'respiratory';

export interface StabilizationStep {
  id: string;
  step: string;
  priority: 'critical' | 'high' | 'medium';
  timing: string;
  detail?: string;
}

export interface DiagnosticTest {
  id: string;
  test: string;
  priority: 'immediate' | 'urgent' | 'standard';
  reasoning: string;
  timing?: string;
}

export interface Intervention {
  id: string;
  intervention: string;
  indication: string;
  contraindications?: string[];
  timing: string;
  critical: boolean;
}

export interface RedFlag {
  id: string;
  flag: string;
  significance: string;
  action: string;
  severity: 'critical' | 'high' | 'moderate';
}

export interface EscalationCriteria {
  id: string;
  trigger: string;
  destination: 'ICU' | 'OR' | 'Cath Lab' | 'Stroke Team' | 'Trauma Team' | 'Airway Team';
  urgency: 'immediate' | 'urgent' | 'expedited';
}

export interface TimeTarget {
  milestone: string;
  target: string;
  rationale: string;
}

// Case Simulator Types
export interface CaseScenario {
  id: string;
  title: string;
  conditionId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  presentation: string;
  initialVitals: VitalSigns;
  physicalExam: PhysicalExamFindings;
  history: PatientHistory;
  correctActions: CaseAction[];
  incorrectActions: CaseAction[];
  timeline: CaseTimelineEvent[];
}

export interface VitalSigns {
  heartRate: number;
  bloodPressure: { systolic: number; diastolic: number };
  respiratoryRate: number;
  oxygenSaturation: number;
  temperature: number;
  gcs?: number;
  alert?: string;
}

export interface PhysicalExamFindings {
  general: string;
  cardiovascular?: string;
  respiratory?: string;
  neurological?: string;
  abdominal?: string;
  skin?: string;
  extremities?: string;
}

export interface PatientHistory {
  age: number;
  sex: 'M' | 'F' | 'Other';
  chiefComplaint: string;
  hpi: string;
  pmh: string[];
  medications: string[];
  allergies: string[];
  socialHistory?: string;
}

export interface CaseAction {
  id: string;
  action: string;
  category: 'stabilization' | 'diagnostic' | 'therapeutic' | 'escalation';
  isCorrect: boolean;
  feedback: string;
  timing?: 'immediate' | 'early' | 'later';
}

export interface CaseTimelineEvent {
  time: number; // minutes from presentation
  event: string;
  vitals?: Partial<VitalSigns>;
  trigger?: string;
}

// Assessment Types
export interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  passingScore: number;
  timeLimit?: number;
}

export interface Question {
  id: string;
  type: 'mcq' | 'multiple-select' | 'drag-drop' | 'sequence';
  question: string;
  context?: string;
  options: QuestionOption[];
  correctAnswers: string[];
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

// Red Flag Types
export interface RedFlagCard {
  id: string;
  symptom: string;
  description: string;
  redFlags: string[];
  differentials: string[];
  immediateActions: string[];
  escalation: string;
  relatedConditions: string[];
}

// User Progress Types
export interface UserProgress {
  userId: string;
  completedCases: string[];
  assessmentScores: AssessmentScore[];
  conditionsStudied: string[];
  lastActivity: Date;
  stats: UserStats;
}

export interface AssessmentScore {
  assessmentId: string;
  score: number;
  completedAt: Date;
  timeTaken: number;
}

export interface UserStats {
  totalCasesCompleted: number;
  averageAssessmentScore: number;
  redFlagsLearned: number;
  studyStreak: number;
}

// App State Types
export interface AppState {
  theme: 'light' | 'dark';
  offlineMode: boolean;
  lastSync: Date | null;
  userProgress: UserProgress | null;
}
