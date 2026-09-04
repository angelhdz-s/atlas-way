import type { WizardSummary } from '@/presentation/modules/wizard/wizard.summary.types';
import { createContext } from 'react';

type WizardValue<FormValues> = {
  summary: WizardSummary<FormValues>;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  toggleCancelPhase: (phaseId: string) => void;
};

export const WizardContext = createContext<WizardValue<any> | null>(null);
