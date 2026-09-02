'use client';

import type { WorkoutSetForm } from '@/modules/tracking/presentation/schemas/workout.schema';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import { useWizardSummary } from '@/presentation/modules/wizard/hooks/useWizardSummary';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function TrainingHeaderSteps({ className }: Props) {
  const { currentStep } = useStepEngine();
  const { phases } = useWizardSummary<WorkoutSetForm>();

  const currentPhase = phases.find((p) => p.phaseId === currentStep.phase.id);

  return (
    <header className={twMerge('', className)}>
      <h5>{currentPhase?.title ?? 'No phase title'}</h5>
      <p>{currentPhase?.description ?? 'No phase description'}</p>
    </header>
  );
}
