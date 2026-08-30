import {
  WizardOrchestratorInnerContext,
  type WizardOrchestratorInnerValue,
} from '@/presentation/modules/wizard/context/WizardOrchestratorInnerContext';
import {
  getNextStepId,
  getPreviousStepId,
} from '@/presentation/modules/wizard/helpers/wizard.flat-steps.helper';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import { useStepFormSync } from '@/presentation/modules/wizard/hooks/useStepFormSync';
import { useWizardSummary } from '@/presentation/modules/wizard/hooks/useWizardSummary';
import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';
import { useCallback, useMemo } from 'react';

type Props = {
  children?: React.ReactNode;
  flatSteps: FlatStep[];
};

export function WizardOrchestratorInner({ children, flatSteps }: Props) {
  const { currentStep, cancelledPhaseIds, goToStep, toggleCancelPhase } = useStepEngine();
  const { saveCurrentStep } = useStepFormSync();
  const { completedStepIds } = useWizardSummary();

  const goToNextStep = useCallback(async () => {
    const isSavedSuccessfully = await saveCurrentStep();
    if (!isSavedSuccessfully) return;
    const nextStepId = getNextStepId({
      flatSteps,
      cancelledPhaseIds,
      completedStepIds,
      currentStepIndex: currentStep.globalIndex,
    });
    if (nextStepId === null) return;
    goToStep(nextStepId);
  }, [
    saveCurrentStep,
    currentStep.globalIndex,
    cancelledPhaseIds,
    completedStepIds,
    flatSteps,
    goToStep,
  ]);

  const goToPrevStep = useCallback(async () => {
    const prevStepId = getPreviousStepId({
      flatSteps,
      cancelledPhaseIds,
      completedStepIds,
      currentStepIndex: currentStep.globalIndex,
    });
    if (prevStepId === null) return;
    goToStep(prevStepId);
  }, [flatSteps, cancelledPhaseIds, completedStepIds, currentStep.globalIndex, goToStep]);

  const toggleCancelPhaseAndMoveNextStep = useCallback(
    (phaseId: string) => {
      const isPhaseCancelled = cancelledPhaseIds.has(phaseId);
      const isStepCompleted = completedStepIds.has(currentStep.id);
      if (isPhaseCancelled || isStepCompleted) return toggleCancelPhase(phaseId);

      // Add new cancelled phase
      const cancelledPhaseIdsCopy = new Set(cancelledPhaseIds);
      cancelledPhaseIdsCopy.add(phaseId);

      toggleCancelPhase(phaseId);
      const nextStepId = getNextStepId({
        flatSteps,
        cancelledPhaseIds: cancelledPhaseIdsCopy,
        completedStepIds,
        currentStepIndex: currentStep.globalIndex,
      });

      if (nextStepId === null) return;
      goToStep(nextStepId);
    },
    [
      flatSteps,
      cancelledPhaseIds,
      completedStepIds,
      currentStep.globalIndex,
      currentStep.id,
      toggleCancelPhase,
      goToStep,
    ]
  );

  const value: WizardOrchestratorInnerValue = useMemo(() => {
    return {
      goToNextStep,
      goToPrevStep,
      toggleCancelPhase: toggleCancelPhaseAndMoveNextStep,
    };
  }, [goToNextStep, goToPrevStep, toggleCancelPhaseAndMoveNextStep]);

  return (
    <WizardOrchestratorInnerContext.Provider value={value}>
      {children}
    </WizardOrchestratorInnerContext.Provider>
  );
}
