import { createContext } from 'react';

export type WizardOrchestratorInnerValue = {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  toggleCancelPhase: (phaseId: string) => void;
};

export const WizardOrchestratorInnerContext = createContext<WizardOrchestratorInnerValue | null>(
  null
);
