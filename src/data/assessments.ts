import type { Assessment } from '@/types';

export const assessments: Assessment[] = [
  {
    id: 'acs-basics',
    title: 'ACS & STEMI Management',
    description: 'Test your knowledge of acute coronary syndrome recognition and management',
    passingScore: 70,
    timeLimit: 600, // 10 minutes
    questions: [
      {
        id: 'acs-q1',
        type: 'mcq',
        question: 'What is the maximum time from ED arrival to ECG acquisition for suspected ACS?',
        options: [
          { id: 'a', text: '5 minutes', isCorrect: false },
          { id: 'b', text: '10 minutes', isCorrect: true },
          { id: 'c', text: '20 minutes', isCorrect: false },
          { id: 'd', text: '30 minutes', isCorrect: false },
        ],
        correctAnswers: ['b'],
        explanation:
          'ECG should be obtained within 10 minutes of arrival for patients with suspected ACS. This is critical for STEMI diagnosis and timely reperfusion therapy.',
        category: 'ACS',
        difficulty: 'easy',
      },
      {
        id: 'acs-q2',
        type: 'mcq',
        question: 'Which medication should be given FIRST in suspected ACS?',
        options: [
          { id: 'a', text: 'Morphine', isCorrect: false },
          { id: 'b', text: 'Nitroglycerin', isCorrect: false },
          { id: 'c', text: 'Aspirin', isCorrect: true },
          { id: 'd', text: 'Heparin', isCorrect: false },
        ],
        correctAnswers: ['c'],
        explanation:
          'Aspirin 162-325mg (chewed) should be given immediately to all patients with suspected ACS unless contraindicated. It has mortality benefit and should not be delayed.',
        category: 'ACS',
        difficulty: 'easy',
      },
      {
        id: 'acs-q3',
        type: 'mcq',
        question:
          'A patient has ST elevation in leads V2-V4. What is the door-to-balloon target time?',
        options: [
          { id: 'a', text: '30 minutes', isCorrect: false },
          { id: 'b', text: '60 minutes', isCorrect: false },
          { id: 'c', text: '90 minutes', isCorrect: true },
          { id: 'd', text: '120 minutes', isCorrect: false },
        ],
        correctAnswers: ['c'],
        explanation:
          'For STEMI patients undergoing primary PCI, door-to-balloon time should be ≤90 minutes. Every minute of delay increases myocardial damage and mortality risk.',
        category: 'ACS',
        difficulty: 'medium',
      },
      {
        id: 'acs-q4',
        type: 'multiple-select',
        question: 'Which are contraindications to nitroglycerin in ACS? (Select ALL that apply)',
        options: [
          { id: 'a', text: 'Systolic BP < 90 mmHg', isCorrect: true },
          { id: 'b', text: 'Recent PDE5 inhibitor use (viagra)', isCorrect: true },
          { id: 'c', text: 'Right ventricular infarct', isCorrect: true },
          { id: 'd', text: 'Age > 65 years', isCorrect: false },
          { id: 'e', text: 'Diabetes mellitus', isCorrect: false },
        ],
        correctAnswers: ['a', 'b', 'c'],
        explanation:
          'Nitroglycerin is contraindicated in hypotension (SBP <90), RV infarct (preload dependent), and recent PDE5 inhibitor use (risk of severe hypotension). Age and diabetes are not contraindications.',
        category: 'ACS',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 'stroke-management',
    title: 'Acute Stroke Recognition',
    description: 'Assessment of stroke diagnosis and thrombolytic therapy',
    passingScore: 70,
    timeLimit: 600,
    questions: [
      {
        id: 'stroke-q1',
        type: 'mcq',
        question: 'What must be checked IMMEDIATELY before all else in stroke evaluation?',
        options: [
          { id: 'a', text: 'Blood pressure', isCorrect: false },
          { id: 'b', text: 'Blood glucose', isCorrect: true },
          { id: 'c', text: 'CT scan', isCorrect: false },
          { id: 'd', text: 'ECG', isCorrect: false },
        ],
        correctAnswers: ['b'],
        explanation:
          'Blood glucose (fingerstick) must be checked immediately as hypoglycemia can perfectly mimic stroke and is rapidly treatable. Never delay this simple test.',
        category: 'Stroke',
        difficulty: 'medium',
      },
      {
        id: 'stroke-q2',
        type: 'mcq',
        question: 'What is the target door-to-needle time for tPA in ischemic stroke?',
        options: [
          { id: 'a', text: '30 minutes', isCorrect: false },
          { id: 'b', text: '60 minutes', isCorrect: true },
          { id: 'c', text: '90 minutes', isCorrect: false },
          { id: 'd', text: '4.5 hours', isCorrect: false },
        ],
        correctAnswers: ['b'],
        explanation:
          'Door-to-needle time for tPA should be ≤60 minutes. While tPA can be given up to 4.5 hours from symptom onset, faster administration improves outcomes - "time is brain."',
        category: 'Stroke',
        difficulty: 'easy',
      },
      {
        id: 'stroke-q3',
        type: 'mcq',
        question:
          'Before giving tPA, blood pressure must be lowered to below what threshold?',
        options: [
          { id: 'a', text: '140/90', isCorrect: false },
          { id: 'b', text: '160/100', isCorrect: false },
          { id: 'c', text: '185/110', isCorrect: true },
          { id: 'd', text: '220/120', isCorrect: false },
        ],
        correctAnswers: ['c'],
        explanation:
          'BP must be <185/110 before tPA administration to reduce hemorrhagic transformation risk. Use IV labetalol or nicardipine for controlled reduction.',
        category: 'Stroke',
        difficulty: 'medium',
      },
      {
        id: 'stroke-q4',
        type: 'multiple-select',
        question: 'Which are contraindications to tPA in stroke? (Select ALL that apply)',
        options: [
          { id: 'a', text: 'Hemorrhagic stroke on CT', isCorrect: true },
          { id: 'b', text: 'Platelets < 100,000', isCorrect: true },
          { id: 'c', text: 'BP 220/115 despite treatment', isCorrect: true },
          { id: 'd', text: 'Patient age > 80', isCorrect: false },
          { id: 'e', text: 'NIHSS score > 20', isCorrect: false },
        ],
        correctAnswers: ['a', 'b', 'c'],
        explanation:
          'tPA contraindications include ICH on CT, severe thrombocytopenia (<100k), and uncontrolled severe hypertension. Age >80 and high NIHSS are not absolute contraindications.',
        category: 'Stroke',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 'sepsis-shock',
    title: 'Sepsis & Shock Management',
    description: 'Recognition and initial management of sepsis and septic shock',
    passingScore: 70,
    timeLimit: 480,
    questions: [
      {
        id: 'sepsis-q1',
        type: 'mcq',
        question: 'Within what timeframe should antibiotics be administered in sepsis?',
        options: [
          { id: 'a', text: '30 minutes', isCorrect: false },
          { id: 'b', text: '1 hour', isCorrect: true },
          { id: 'c', text: '3 hours', isCorrect: false },
          { id: 'd', text: '6 hours', isCorrect: false },
        ],
        correctAnswers: ['b'],
        explanation:
          'Broad-spectrum antibiotics should be given within 1 hour of sepsis recognition. Each hour of delay increases mortality by approximately 7%.',
        category: 'Sepsis',
        difficulty: 'easy',
      },
      {
        id: 'sepsis-q2',
        type: 'mcq',
        question: 'What is the initial fluid bolus for septic shock?',
        options: [
          { id: 'a', text: '10 mL/kg', isCorrect: false },
          { id: 'b', text: '20 mL/kg', isCorrect: false },
          { id: 'c', text: '30 mL/kg', isCorrect: true },
          { id: 'd', text: '40 mL/kg', isCorrect: false },
        ],
        correctAnswers: ['c'],
        explanation:
          '30 mL/kg crystalloid bolus should be given within the first 3 hours for patients with sepsis-induced hypoperfusion or septic shock.',
        category: 'Sepsis',
        difficulty: 'easy',
      },
      {
        id: 'sepsis-q3',
        type: 'mcq',
        question: 'What lactate level indicates severe tissue hypoperfusion in sepsis?',
        options: [
          { id: 'a', text: '≥ 2 mmol/L', isCorrect: false },
          { id: 'b', text: '≥ 3 mmol/L', isCorrect: false },
          { id: 'c', text: '≥ 4 mmol/L', isCorrect: true },
          { id: 'd', text: '≥ 6 mmol/L', isCorrect: false },
        ],
        correctAnswers: ['c'],
        explanation:
          'Lactate ≥4 mmol/L indicates severe tissue hypoperfusion and is associated with increased mortality. It triggers aggressive resuscitation protocols.',
        category: 'Sepsis',
        difficulty: 'medium',
      },
      {
        id: 'sepsis-q4',
        type: 'mcq',
        question: 'Which vasopressor is first-line for septic shock?',
        options: [
          { id: 'a', text: 'Epinephrine', isCorrect: false },
          { id: 'b', text: 'Norepinephrine', isCorrect: true },
          { id: 'c', text: 'Dopamine', isCorrect: false },
          { id: 'd', text: 'Phenylephrine', isCorrect: false },
        ],
        correctAnswers: ['b'],
        explanation:
          'Norepinephrine is the first-line vasopressor for septic shock. It has the best evidence for mortality benefit and hemodynamic effects.',
        category: 'Sepsis',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 'anaphylaxis-basics',
    title: 'Anaphylaxis Management',
    description: 'Rapid recognition and treatment of anaphylactic reactions',
    passingScore: 70,
    timeLimit: 300,
    questions: [
      {
        id: 'anaph-q1',
        type: 'mcq',
        question: 'What is the FIRST-LINE treatment for anaphylaxis?',
        options: [
          { id: 'a', text: 'Diphenhydramine IV', isCorrect: false },
          { id: 'b', text: 'Epinephrine 0.3-0.5mg IM', isCorrect: true },
          { id: 'c', text: 'Methylprednisolone IV', isCorrect: false },
          { id: 'd', text: 'Albuterol nebulizer', isCorrect: false },
        ],
        correctAnswers: ['b'],
        explanation:
          'IM epinephrine 0.3-0.5mg (1:1000) is FIRST-LINE treatment for anaphylaxis and should NEVER be delayed. Antihistamines and steroids are adjuncts only.',
        category: 'Anaphylaxis',
        difficulty: 'easy',
      },
      {
        id: 'anaph-q2',
        type: 'mcq',
        question: 'How soon can epinephrine be repeated in anaphylaxis if needed?',
        options: [
          { id: 'a', text: 'Every 5-15 minutes', isCorrect: true },
          { id: 'b', text: 'Every 30 minutes', isCorrect: false },
          { id: 'c', text: 'Every hour', isCorrect: false },
          { id: 'd', text: 'Only once', isCorrect: false },
        ],
        correctAnswers: ['a'],
        explanation:
          'Epinephrine can and should be repeated every 5-15 minutes as needed. Most patients require multiple doses. Do not hesitate to redose.',
        category: 'Anaphylaxis',
        difficulty: 'medium',
      },
      {
        id: 'anaph-q3',
        type: 'mcq',
        question: 'How long should patients be observed after anaphylaxis for biphasic reaction?',
        options: [
          { id: 'a', text: '1-2 hours', isCorrect: false },
          { id: 'b', text: '2-3 hours', isCorrect: false },
          { id: 'c', text: '4-6 hours', isCorrect: true },
          { id: 'd', text: '12-24 hours', isCorrect: false },
        ],
        correctAnswers: ['c'],
        explanation:
          'Observe for 4-6 hours (or longer for severe reactions) due to risk of biphasic reaction, which occurs in up to 20% of anaphylaxis cases.',
        category: 'Anaphylaxis',
        difficulty: 'medium',
      },
    ],
  },
];
