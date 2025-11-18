# EmergentMD

A mobile-first, offline-capable emergency medical training platform that teaches rapid pattern recognition, ABCs, initial stabilization, early diagnostic steps, critical escalation, and disposition reasoning for the most urgent presentations in acute care.

## Features

- **Emergency Conditions**: Comprehensive coverage of time-critical emergencies including:
  - Acute Coronary Syndrome (ACS/MI)
  - Stroke (ischemic & hemorrhagic)
  - Sepsis & Septic Shock
  - Anaphylaxis
  - Status Epilepticus
  - Acute Abdomen
  - Trauma (Primary Survey)

- **Three-Panel Learning System**:
  - Panel A: Immediate Stabilization (ABCs)
  - Panel B: Initial Diagnostic Steps
  - Panel C: Critical Management & Escalation

- **Red Flag Recognition**: Learn to identify high-risk symptoms requiring immediate action
- **Case Simulations**: Practice emergency decision-making (Coming Soon)
- **Assessments**: Test knowledge with evidence-based questions (Coming Soon)
- **Offline-Ready**: Full functionality without internet connection
- **Dark Mode**: Easy on the eyes during long study sessions

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand
- **Routing**: React Router v6
- **Offline Support**: Service Worker + IndexedDB
- **Charts**: Recharts (for future vitals displays)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Clinical Guidelines

This app is based on current evidence-based guidelines including:
- AHA/ACC STEMI Guidelines
- AHA/ASA Stroke Guidelines
- ACLS protocols
- ATLS (Advanced Trauma Life Support) protocols
- Surviving Sepsis Campaign guidelines
- World Allergy Organization Anaphylaxis Guidelines

## Educational Disclaimer

**IMPORTANT**: This application is for educational purposes only. It should NOT be used for actual clinical decision-making. Always:
- Follow your institution's specific protocols
- Consult with attending physicians
- Use clinical judgment based on individual patient circumstances
- Reference current guidelines and literature

## Development Roadmap

### MVP (Current)
- ✅ 7 core emergency conditions
- ✅ Comprehensive stabilization protocols
- ✅ Red flag identification
- ✅ Time-critical targets
- ✅ Offline support

### Milestone 1
- [ ] Interactive case simulations
- [ ] Red flag recognition trainer
- [ ] Assessment modules with rationales

### Milestone 2
- [ ] Expanded conditions (shock types, OB/GYN emergencies, pediatric emergencies)
- [ ] User progress tracking
- [ ] Adaptive learning pathways

### Milestone 3
- [ ] Complex multi-case simulations
- [ ] Team-based scenarios
- [ ] Performance analytics

## Architecture

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Header, Sidebar)
│   ├── conditions/      # Condition-specific components
│   └── ...
├── pages/               # Page components
├── data/                # Clinical data and content
├── lib/                 # Utilities and helpers
├── store/               # Zustand state management
├── types/               # TypeScript type definitions
└── styles/              # Global styles
```

## Contributing

This is an educational project. Contributions are welcome, especially:
- Clinical content review by emergency medicine, critical care, and specialty physicians
- Additional case scenarios
- UI/UX improvements
- Accessibility enhancements

## License

This project is for educational use. Clinical content should be verified against current guidelines before use.

## Acknowledgments

Built with guidance from emergency medicine, critical care, neurology, cardiology, and trauma surgery principles. Special thanks to all the educators and clinicians who contribute to open medical education.
