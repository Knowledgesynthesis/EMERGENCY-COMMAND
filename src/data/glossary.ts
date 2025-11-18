export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
  clinicalPearl?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'abc',
    term: 'ABCs',
    definition:
      'Airway, Breathing, Circulation - the primary survey approach to emergency stabilization. Address life-threatening problems in this order.',
    category: 'General',
    clinicalPearl: 'Always assess and stabilize ABCs before detailed history or diagnostics.',
  },
  {
    id: 'acls',
    term: 'ACLS',
    definition:
      'Advanced Cardiovascular Life Support - standardized algorithms for cardiac arrest and emergency cardiovascular care.',
    category: 'Cardiac',
    relatedTerms: ['VF', 'VT', 'Asystole', 'PEA'],
  },
  {
    id: 'acs',
    term: 'ACS (Acute Coronary Syndrome)',
    definition:
      'Spectrum of conditions caused by decreased blood flow to heart muscle, including unstable angina, NSTEMI, and STEMI.',
    category: 'Cardiac',
    relatedTerms: ['STEMI', 'NSTEMI', 'Troponin'],
    clinicalPearl: 'ECG within 10 minutes, aspirin immediately, door-to-balloon <90 min for STEMI.',
  },
  {
    id: 'anaphylaxis',
    term: 'Anaphylaxis',
    definition:
      'Severe, potentially life-threatening allergic reaction involving multiple organ systems. Requires immediate IM epinephrine.',
    category: 'Immunologic',
    relatedTerms: ['Epinephrine', 'Angioedema'],
    clinicalPearl: 'IM epinephrine is FIRST-LINE - never delay for antihistamines.',
  },
  {
    id: 'atls',
    term: 'ATLS',
    definition:
      'Advanced Trauma Life Support - systematic approach to trauma patient management focusing on identifying and treating life-threatening injuries.',
    category: 'Trauma',
    relatedTerms: ['Primary Survey', 'FAST'],
  },
  {
    id: 'fast',
    term: 'FAST Exam',
    definition:
      'Focused Assessment with Sonography for Trauma - bedside ultrasound to detect free fluid (blood) in abdomen/pericardium.',
    category: 'Trauma',
    clinicalPearl: 'Can be performed during primary survey without delaying resuscitation.',
  },
  {
    id: 'gcs',
    term: 'GCS (Glasgow Coma Scale)',
    definition:
      'Neurological scale to assess level of consciousness. Scores range 3-15 (Eye opening + Verbal response + Motor response).',
    category: 'Neurological',
    clinicalPearl: 'GCS ≤8 indicates severe head injury and inability to protect airway - intubate.',
  },
  {
    id: 'lactate',
    term: 'Lactate',
    definition:
      'Marker of tissue hypoperfusion and anaerobic metabolism. Elevated in shock states, sepsis, and other critical illnesses.',
    category: 'Laboratory',
    clinicalPearl: 'Lactate ≥4 mmol/L indicates severe tissue hypoperfusion and triggers aggressive resuscitation.',
  },
  {
    id: 'nihss',
    term: 'NIHSS',
    definition:
      'NIH Stroke Scale - systematic assessment tool to measure neurological deficits in stroke patients. Scores 0-42.',
    category: 'Neurological',
    relatedTerms: ['Stroke', 'tPA'],
  },
  {
    id: 'nstemi',
    term: 'NSTEMI',
    definition:
      'Non-ST Elevation Myocardial Infarction - ACS with elevated troponin but without ST elevation on ECG.',
    category: 'Cardiac',
    relatedTerms: ['ACS', 'STEMI', 'Troponin'],
  },
  {
    id: 'pea',
    term: 'PEA (Pulseless Electrical Activity)',
    definition:
      'Cardiac arrest rhythm with organized electrical activity on monitor but no palpable pulse. Treat reversible causes (Hs and Ts).',
    category: 'Cardiac',
    relatedTerms: ['ACLS', 'CPR'],
  },
  {
    id: 'sepsis',
    term: 'Sepsis',
    definition:
      'Life-threatening organ dysfunction caused by dysregulated host response to infection. Defined as infection + SOFA score increase ≥2.',
    category: 'Infectious',
    relatedTerms: ['Septic Shock', 'Lactate', 'SIRS'],
    clinicalPearl: 'Antibiotics within 1 hour - each hour delay increases mortality 7%.',
  },
  {
    id: 'septic-shock',
    term: 'Septic Shock',
    definition:
      'Sepsis with persistent hypotension requiring vasopressors and lactate >2 despite adequate fluid resuscitation.',
    category: 'Infectious',
    relatedTerms: ['Sepsis', 'Norepinephrine'],
    clinicalPearl: '30 mL/kg fluid bolus, then norepinephrine if hypotension persists.',
  },
  {
    id: 'stemi',
    term: 'STEMI',
    definition:
      'ST-Elevation Myocardial Infarction - acute MI with ST elevation on ECG indicating complete coronary occlusion. Requires emergent reperfusion.',
    category: 'Cardiac',
    relatedTerms: ['ACS', 'PCI', 'Door-to-balloon'],
    clinicalPearl: 'Activate cath lab immediately - door-to-balloon <90 minutes.',
  },
  {
    id: 'tpa',
    term: 'tPA (Alteplase)',
    definition:
      'Tissue plasminogen activator - thrombolytic medication used in acute ischemic stroke and STEMI when PCI unavailable.',
    category: 'Medications',
    relatedTerms: ['Stroke', 'STEMI'],
    clinicalPearl: 'For stroke: door-to-needle ≤60 min, must rule out hemorrhage first.',
  },
  {
    id: 'troponin',
    term: 'Troponin',
    definition:
      'Cardiac biomarker released during myocardial injury. Highly sensitive and specific for myocardial damage.',
    category: 'Laboratory',
    relatedTerms: ['ACS', 'NSTEMI'],
    clinicalPearl: 'Can take 3-6 hours to rise after MI onset - serial troponins needed.',
  },
  {
    id: 'vf',
    term: 'VF (Ventricular Fibrillation)',
    definition:
      'Chaotic electrical activity in ventricles resulting in no effective cardiac output. Shockable rhythm requiring immediate defibrillation.',
    category: 'Cardiac',
    relatedTerms: ['VT', 'ACLS', 'Defibrillation'],
    clinicalPearl: 'Immediate defibrillation is priority - never delay for other interventions.',
  },
  {
    id: 'vt',
    term: 'VT (Ventricular Tachycardia)',
    definition:
      'Rapid heart rhythm originating from ventricles. Can be stable or unstable. Wide-complex tachycardia >100 bpm.',
    category: 'Cardiac',
    relatedTerms: ['VF', 'ACLS'],
    clinicalPearl: 'If unstable (hypotension, AMS, chest pain) - immediate synchronized cardioversion.',
  },
  {
    id: 'tension-ptx',
    term: 'Tension Pneumothorax',
    definition:
      'Life-threatening pneumothorax with progressive air accumulation causing hemodynamic compromise. Clinical diagnosis.',
    category: 'Respiratory',
    relatedTerms: ['Pneumothorax', 'Needle Decompression'],
    clinicalPearl: 'Do NOT wait for CXR - immediate needle decompression if suspected.',
  },
  {
    id: 'cardiac-tamponade',
    term: 'Cardiac Tamponade',
    definition:
      "Fluid in pericardial sac causing compression of heart chambers and decreased cardiac output. Beck's triad: hypotension, JVD, muffled heart sounds.",
    category: 'Cardiac',
    relatedTerms: ['Trauma', 'Pericardiocentesis'],
    clinicalPearl: 'Emergent pericardiocentesis or thoracotomy if trauma-related.',
  },
];
