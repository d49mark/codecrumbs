import { Artifact, CategoryFilter, CrumbCategory, Year } from '../types';

export const CATEGORIES: readonly CategoryFilter[] = [
  'ALL',
  'AI STUDIO',
  'MICRO-SAAS',
  'AUTOMATION',
] as const;

export const CRUMB_CATEGORIES: readonly CrumbCategory[] = [
  'AI STUDIO',
  'MICRO-SAAS',
  'AUTOMATION',
] as const;

export const YEARS: readonly Year[] = ['2026', '2025', '2024'] as const;

export const INITIAL_ARTIFACTS: Artifact[] = [
  {
    id: '09',
    year: '2026',
    title: 'Historical Headline Generator',
    category: 'AI STUDIO',
    description:
      'Rewrites breaking modern tech news into authentic 1920s broadsheet dispatches, Roman senate decrees, or cyberpunk wire feeds.',
    tags: ['GEMINI API', 'REACT', 'PROMPT STUDIO'],
    about: 'Built to test multi-era persona constraints and structured JSON output in Gemini models.',
    url: 'https://aistudio.google.com',
    snapshots: [
      { type: 'config', caption: 'Era & persona selector' },
      { type: 'metrics', caption: 'Tone authenticity score' },
      { type: 'grid', caption: 'Broadsheet layout export' },
    ],
  },
  {
    id: '08',
    year: '2026',
    title: 'Automated Sheets Tracker Engine',
    category: 'AUTOMATION',
    description:
      'A Python & Gemini pipeline that turns natural-language habit or finance goals into ready-to-use Google Sheets with live SPARKLINE formulas.',
    tags: ['GEMINI API', 'PYTHON', 'AUTOMATION'],
    about: 'Generates custom tracking templates with pre-wired conditional formatting in seconds.',
    url: 'https://sheets.google.com',
    snapshots: [
      { type: 'config', caption: 'Config & trigger engine' },
      { type: 'metrics', caption: 'Live generation tracker' },
      { type: 'grid', caption: 'Auto-exported spreadsheets' },
    ],
  },
  {
    id: '07',
    year: '2026',
    title: 'WCAG A11y Monorepo Triage Bot',
    category: 'MICRO-SAAS',
    description:
      'Automated Playwright + axe-core accessibility scanner that clusters DOM violations and drafts ready-to-merge ARIA patches.',
    tags: ['PLAYWRIGHT', 'AXE-CORE', 'TYPESCRIPT'],
    about: 'Eliminates manual ARIA audits across enterprise frontend packages.',
    url: 'https://github.com',
    snapshots: [
      { type: 'grid', caption: 'Violation cluster matrix' },
      { type: 'config', caption: 'Automated ARIA diff patch' },
      { type: 'metrics', caption: 'WCAG AA compliance trend' },
    ],
  },
  {
    id: '06',
    year: '2025',
    title: 'CareFlow AI Clinical Triage Board',
    category: 'AI STUDIO',
    description:
      'High-density care manager workspace that summarizes longitudinal patient notes into prioritized action cards.',
    tags: ['LANGCHAIN', 'REACT', 'TAILWIND'],
    about: 'Designed to help clinical care teams cut chart review time by surfacing risk signals.',
    url: 'https://github.com',
    snapshots: [
      { type: 'metrics', caption: 'Risk priority telemetry' },
      { type: 'grid', caption: 'Patient cohort queue' },
      { type: 'config', caption: 'Citation-backed summary' },
    ],
  },
  {
    id: '05',
    year: '2025',
    title: 'Tuya Thermal Cabinet Controller',
    category: 'AUTOMATION',
    description:
      'Smart-plug wattage and temperature daemon that triggers silent PWM exhaust fans whenever enclosed console load crosses 170W.',
    tags: ['ESP32', 'TUYA API', 'IOT'],
    about: 'Solved thermal throttling inside an enclosed wooden media cabinet.',
    url: 'https://github.com',
    snapshots: [
      { type: 'metrics', caption: 'Wattage & thermal curve' },
      { type: 'config', caption: '170W trigger hysteresis' },
      { type: 'grid', caption: 'Relay state log' },
    ],
  },
  {
    id: '04',
    year: '2024',
    title: 'BLE Proximity Wake-on-LAN Sentinel',
    category: 'MICRO-SAAS',
    description:
      'Microcontroller beacon listener that wakes a sleeping workstation the moment an authorized phone or controller enters the room.',
    tags: ['ESP32', 'C++', 'BLUETOOTH LE'],
    about: 'Allows couch gaming sessions to start instantly without walking to the PC.',
    url: 'https://github.com',
    snapshots: [
      { type: 'config', caption: 'RSSI threshold calibration' },
      { type: 'metrics', caption: 'Magic packet latency' },
      { type: 'grid', caption: 'Paired MAC allowlist' },
    ],
  },
];

