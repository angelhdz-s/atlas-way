import type { WizardSummary } from '@/presentation/modules/wizard/wizard.summary.types';
import { useContext } from 'react';
import { WizardOrchestratorInnerContext } from '@/presentation/modules/wizard/context/WizardOrchestratorInnerContext';
import { useWizardSummary } from '@/presentation/modules/wizard/hooks/useWizardSummary';

type Wizard<FormValues> = {
  summary: WizardSummary<FormValues>;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  toggleCancelPhase: (phaseId: string) => void;
};

export function useWizard<FormValues>(): Wizard<FormValues> {
  const summary = useWizardSummary<FormValues>();
  const navigation = useContext(WizardOrchestratorInnerContext);

  if (navigation === null)
    throw new Error('useWizard should be used inside WizardProvider component');

  const { goToNextStep, goToPrevStep, toggleCancelPhase } = navigation;

  return {
    summary,
    goToNextStep,
    goToPrevStep,
    toggleCancelPhase,
  };
}
