import type { SelectOption } from '@/presentation/modules/form/form.types';

export const DEV_FORM_OPTIONS: SelectOption[] = [
  { label: 'Strength', value: 'strength' },
  { label: 'Hypertrophy (Muscle Growth)', value: 'hypertrophy' },
  { label: 'Endurance', value: 'endurance' },
  { label: 'Power (Explosiveness)', value: 'power' },
  { label: 'Mobility & Flexibility', value: 'mobility' },
  { label: 'Stability & Balance', value: 'stability' },
  { label: 'Speed & Agility', value: 'speed_agility' },
  { label: 'Cardiovascular Fitness', value: 'cardio' },
  { label: 'Functional Fitness', value: 'functional' },
  { label: 'Body Composition (Fat Loss)', value: 'fat_loss' },
  { label: 'Rehabilitation / Injury Recovery', value: 'rehab' },
  { label: 'General Fitness', value: 'general_fitness' },
];
