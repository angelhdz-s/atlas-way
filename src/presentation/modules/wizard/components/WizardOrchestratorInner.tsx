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
  const { currentStep, canceledPhaseIds, goToStep, toggleCancelPhase } = useStepEngine();
  const { saveCurrentStep } = useStepFormSync();
  const { completedStepIds } = useWizardSummary();

  const goToNextStep = useCallback(async () => {
    const isSavedSuccessfully = await saveCurrentStep();
    if (!isSavedSuccessfully) return;
    const nextStepId = getNextStepId({
      flatSteps,
      canceledPhaseIds,
      completedStepIds,
      currentStepIndex: currentStep.globalIndex,
    });
    if (nextStepId === null) return;
    goToStep(nextStepId);
  }, [
    saveCurrentStep,
    currentStep.globalIndex,
    canceledPhaseIds,
    completedStepIds,
    flatSteps,
    goToStep,
  ]);

  const goToPrevStep = useCallback(async () => {
    const prevStepId = getPreviousStepId({
      flatSteps,
      canceledPhaseIds,
      completedStepIds,
      currentStepIndex: currentStep.globalIndex,
    });
    if (prevStepId === null) return;
    goToStep(prevStepId);
  }, [flatSteps, canceledPhaseIds, completedStepIds, currentStep.globalIndex, goToStep]);

  const toggleCancelPhaseAndMoveNextStep = useCallback(
    (phaseId: string) => {
      const isPhaseCanceled = canceledPhaseIds.has(phaseId);
      const isStepCompleted = completedStepIds.has(currentStep.id);
      if (isPhaseCanceled || isStepCompleted) return toggleCancelPhase(phaseId);

      // Add new canceled phase
      const canceledPhaseIdsCopy = new Set(canceledPhaseIds);
      canceledPhaseIdsCopy.add(phaseId);

      toggleCancelPhase(phaseId);
      const nextStepId = getNextStepId({
        flatSteps,
        canceledPhaseIds: canceledPhaseIdsCopy,
        completedStepIds,
        currentStepIndex: currentStep.globalIndex,
      });

      if (nextStepId === null) return;
      goToStep(nextStepId);
    },
    [
      flatSteps,
      canceledPhaseIds,
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
