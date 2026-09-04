import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';

export function getNextPhaseStepId(flatSteps: FlatStep[], currentStepIndex: number): string | null {
  const currentStep = flatSteps[currentStepIndex];
  if (!currentStep) return null;

  const nextStep = flatSteps[currentStepIndex + 1];
  if (!nextStep) return null;

  if (currentStep.phase.id !== nextStep.phase.id) return null;

  return nextStep.id;
}

type GetNextStepIdProps = {
  flatSteps: FlatStep[];
  completedStepIds: Set<string>;
  canceledPhaseIds: Set<string>;
  currentStepIndex: number;
};

export function getNextStepId({
  canceledPhaseIds,
  completedStepIds,
  currentStepIndex,
  flatSteps,
}: GetNextStepIdProps): string | null {
  for (let i = currentStepIndex + 1; i < flatSteps.length; i++) {
    const step = flatSteps[i];
    if (!step) return null;

    const isStepCompleted = completedStepIds.has(step.id);
    const isPhaseCanceled = canceledPhaseIds.has(step.phase.id);

    // If phase is not canceled or step is completed. Step is navigable
    if (!isPhaseCanceled || isStepCompleted) return step.id;
  }
  return null;
}

export function getPreviousStepId({
  canceledPhaseIds,
  completedStepIds,
  currentStepIndex,
  flatSteps,
}: GetNextStepIdProps): string | null {
  for (let i = currentStepIndex - 1; i >= 0; i--) {
    const step = flatSteps[i];
    if (!step) return null;

    const isStepCompleted = completedStepIds.has(step.id);
    const isPhaseCanceled = canceledPhaseIds.has(step.phase.id);

    // If phase is not canceled or step is completed. Step is navigable
    if (!isPhaseCanceled || isStepCompleted) return step.id;
  }
  return null;
}
