# EMERGENCY COMMAND — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION

A clinically rigorous, evidence-based master prompt for generating a **mobile-first, offline-capable, dark-mode educational app** that trains learners in **emergency stabilization, escalation, and early management** for the most time-critical presentations in medicine.

Focus domains include:
- ACS (MI)
- Stroke (ischemic & hemorrhagic emergencies)
- Sepsis & shock (all shock types)
- Anaphylaxis
- Status epilepticus
- Acute abdomen (surgical vs non-surgical emergencies)
- Trauma (primary and secondary survey concepts)
- Red-flag symptoms and clinical triggers for escalation

---

## MASTER PROMPT — Emergency Command Educational App Generator (SPECIALIZED VERSION)

## Role & Mission
You are a cross-functional team:
PM, Staff Engineer, Senior Instructional Designer, Emergency Medicine SME, Critical Care SME, Neurology SME, Trauma Surgery SME, Cardiologist SME, UX Writer, QA.

Your mission is to design an **interactive emergency management platform** that teaches **rapid pattern recognition**, **ABCs**, **initial stabilization**, **early diagnostic steps**, **critical escalation**, and **disposition reasoning** for the most urgent presentations in acute care.

This app must:
- Support learners from MS3 → residents → advanced clinicians.
- Emphasize **time-to-intervention** and immediate response frameworks.
- Use **synthetic scenarios and vitals only**.
- Be mobile-first, dark-mode, offline-ready.
- Maintain strict evidence-based consistency (ACLS, ATLS conceptual, AHA/ASA stroke guidelines, Surviving Sepsis guidelines).

---

## Inputs (Fill These)

Primary Topics:
- ACS/MI management
- Stroke emergencies
- Sepsis and shock (septic, hypovolemic, cardiogenic, obstructive)
- Anaphylaxis management pathway
- Status epilepticus stepwise treatment
- Acute abdomen triage (ruptured AAA, perforation, obstruction, appendicitis, etc.)
- Trauma (primary survey → secondary survey, red flags)
- Red-flag symptoms (e.g., worst headache of life, limb ischemia, chest pain + syncope, fever in immunocompromised)
  
Target Learner Levels: {{LEVELS}}  
Learner Context: {{CONTEXT}}  
Learning Outcomes: {{LEARNING_OBJECTIVES}}

Constraints:
- Mobile-first
- Dark mode
- Offline-ready
- Synthetic cases only
- Must clearly show “Immediate Stabilization → Initial Steps → Escalation”
- No contradictory clinical logic
- Align with major emergency guidelines (conceptually)

References/Standards: {{REFERENCES}}  
Brand/Voice: {{VOICE_TONE}}  
Locale: {{LOCALE}}

---

## 1. Executive Summary
Emergency care requires fast pattern recognition and correct first steps.  
Emergency Command provides a **high-yield stabilization + escalation simulator** for the most dangerous and time-sensitive conditions.

Alternative names:
- RapidResus MD – “Your first seconds and first steps.”
- CodeStart – “Know what to do, instantly.”
- Emergence Atlas – “Stabilization and escalation pathways.”

---

## 2. Personas & Use Cases

Personas:
- EM intern on night shift
- IM resident responding to a rapid response
- Neurology resident evaluating a code stroke
- Trauma junior assessing a blunt trauma patient
- Medical student learning emergency patterns

Use Cases:
- Pre-shift refresher  
- Rapid response drills  
- Stroke / MI code simulations  
- Exam preparation  
- Triage-level reasoning training  

---

## 3. Curriculum Map & Knowledge Graph

For each emergency:
1. Recognition (clinical features + red flags)
2. Immediate stabilization (ABCs)
3. Initial diagnostic steps
4. Critical treatments not to delay
5. Escalation criteria (ICU, OR, airway)
6. Pitfalls and must-not-miss diagnoses

Modules include:
- Cardiac (ACS/MI)
- Neuro (Stroke, status epilepticus)
- Infectious/Critical Care (Sepsis, shock)
- Immunologic (Anaphylaxis)
- Abdominal (acute abdomen)
- Trauma (primary survey)
- Red-flag symptom atlas

Knowledge Graph Links:
- Trigger symptom → Red flags → Stabilization → Diagnostic triage → Escalation pathway → Disposition  

---

## 4. Interactive Specs

### Condition Panels
Each condition gets a 3-panel layout:
- Panel A: Immediate Stabilization (ABCs)
- Panel B: Initial Diagnostic Steps
- Panel C: Critical Management & Escalation

### Algorithm Flowcharts
Symptoms → Red flags → ABCs → Initial tests → Definitive interventions → Escalation triggers.

### Emergency Case Simulator
Synthetic cases where users:
- Identify red flags
- Execute stabilization steps
- Select needed diagnostics
- Decide whether to escalate to ICU/OR/stroke code/cath lab

### Red-Flag Recognition Trainer
Rapid-fire flashcards of high-risk symptoms.

### Trauma Survey Interactive
Simulated primary survey (Airway, Breathing, Circulation, Disability, Exposure).

### Shock Type Classifier
Given vitals and findings → classify shock type and stabilize.

---

## 5. Assessment & Mastery

Item types:
- MCQs (emergency next-best-step style)
- Red-flag recognition matching
- Drag-and-drop stabilization sequences
- Case-based reasoning
- “What not to do first” pitfalls

Provide 10–20 items with rationales.

---

## 6. Emergency Reasoning Framework

Core thought process:
1. Identify red flags
2. Stabilize (ABCs)
3. Rapid diagnostics that change decisions (ECG, CT head, lactate, glucose)
4. Initiate protocolized emergency management
5. Escalate without delay (Stroke code, Cath lab, OR, airway)
6. Avoid pitfalls (e.g., delaying defibrillation, missing hypoglycemia, waiting for imaging during instability)

Examples:
- ACS: ECG first, aspirin early, cath lab activation when indicated
- Stroke: Non-contrast CT first, glucose check, thrombolytics if eligible
- Sepsis: Fluids + broad-spectrum antibiotics + lactate + cultures
- Anaphylaxis: IM epinephrine first, airway readiness
- Status epilepticus: Benzodiazepines → second-line antiepileptics → airway
- Acute abdomen: red flags prompting CT with contrast or immediate surgery
- Trauma: Airway first; treat tension pneumothorax before imaging

---

## 7. Accessibility & Safety
- WCAG 2.2 AA  
- No PHI  
- Educational-only  
- Clinical accuracy maintained without real-time clinical decision claims  
- Inclusive case and symptom representation  

---

## 8. Tech Architecture

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- React Router  
- Zustand/Redux  
- IndexedDB + Service Worker  
- D3/Recharts for flow arrows, vitals displays, timelines  

Structure:
- /home  
- /conditions  
- /symptoms  
- /cases  
- /red-flags  
- /assessment  
- /glossary  
- /settings  

---

## 9. Data Model (plain-text JSON examples)

Condition entry example:

    {
      "id": "acs",
      "name": "Acute Coronary Syndrome",
      "stabilization": ["Airway check", "Oxygen if hypoxemic", "IV access", "Monitor"],
      "initial_tests": ["ECG", "Troponin", "Glucose"],
      "critical_interventions": ["Aspirin", "Nitroglycerin if appropriate", "Prepare for cath lab"],
      "red_flags": ["Hypotension", "VT/VF", "Syncope", "ST-elevation"],
      "escalation": ["Cath lab activation", "ICU"]
    }

Similar pattern for:
- Stroke  
- Sepsis  
- Anaphylaxis  
- Status epilepticus  
- Trauma  
- Acute abdomen  

---

## 10. Screen Specs & Wireframes

### Home
- Search bar
- Buttons: Emergencies, Red Flags, Cases, Assessments

### Condition Page Layout
- Title  
- Panel A: Stabilization  
- Panel B: Initial Tests  
- Panel C: Critical Management & Escalation  
- Red Flags section  
- Pitfalls  

### Case Simulator
- Scenario text  
- Vitals stream  
- ABC action buttons  
- Diagnostics tray  
- Escalation options  
- Feedback panel  

### Red-Flag Atlas
- Grid of symptom red flags  
- Tap → details and escalation criteria  

---

## 11. Copy & Content Kit

Examples:
- Stroke: “Check glucose BEFORE tPA decisions.”  
- ACS: “ECG is the FIRST diagnostic test—never delay it.”  
- Anaphylaxis: “IM epinephrine immediately; airway risk escalates fast.”  
- Sepsis: “Treat infection early; lactate helps assess perfusion.”  
- Trauma: “Fix life-threatening airway/breathing/circulation BEFORE imaging.”

Include:
- Glossary  
- Common pitfalls  
- Quick algorithms  
- Mnemonics  

---

## 12. Analytics & A/B Plan
- Compare timeline vs panel-based UI  
- Evaluate red-flag recognition speed  
- Test layout differences for ABC vs diagnostic steps  

---

## 13. QA Checklist
- Validate emergency algorithms  
- Ensure consistency with ACLS/ATLS concepts  
- Confirm red flags are accurate  
- No contradictory stabilization sequences  
- No unsafe advice  

---

## 14. Roadmap
- MVP: ACS, Stroke, Sepsis, Anaphylaxis, Status Epilepticus, Acute Abdomen, Trauma  
- M1: Expanded shock, OB/Gyn emergencies, pediatric emergencies  
- M2: User-level adaptive learning  
- M3: Complex multi-case simulations

---

## Acceptance Criteria
- Learners can rapidly identify red flags  
- Learners understand correct stabilization order  
- Learners choose correct initial and escalation steps  
- Content is consistent with a unified Emergency Command reasoning map  

---

## Now Generate
Using all the inputs above, produce the complete deliverables in the required order.  
If any required inputs are missing, make emergency-medicine–sound assumptions and label them as defaults.
