import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';

export function getNextPhaseStepId(flatSteps: FlatStep[], currentStepIndex: number): string | null {
  const currentStep = flatSteps[currentStepIndex];
  if (!currentStep) return null;

  const nextStep = flatSteps[currentStepIndex + 1];
  if (!nextStep) return null;

  if (currentStep.phase.id !== nextStep.phase.id) return null;

  return nextStep.id;
}
