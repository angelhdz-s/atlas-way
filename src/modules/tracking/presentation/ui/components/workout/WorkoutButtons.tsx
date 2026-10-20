'use client';

import type { WorkoutSetForm } from '@/modules/tracking/presentation/schemas/workout.schema';
import { useState } from 'react';
import { Button } from '@/presentation/modules/button/components/Button';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import { useStepFormSync } from '@/presentation/modules/wizard/hooks/useStepFormSync';
import { useWizard } from '@/presentation/modules/wizard/hooks/useWizard';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import {
  endWorkoutTarget,
  reopenWorkoutTarget,
} from '@/modules/tracking/presentation/workout-target.actions';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function TrainingButtons({ className }: Props) {
  const { isLastStep, isFirstStep, canceledPhaseIds, currentStep } = useStepEngine();
  const { isSaving } = useStepFormSync();
  const { addToast } = useToast();
  const [isUpdatingPhase, setIsUpdatingPhase] = useState(false);

  const { goToNextStep, goToPrevStep, toggleCancelPhase } = useWizard<WorkoutSetForm>();

  const isPhaseCanceled = canceledPhaseIds.has(currentStep.phase.id);

  const handleToggleCancelPhase = async () => {
    setIsUpdatingPhase(true);

    const phaseResult = isPhaseCanceled
      ? await reopenWorkoutTarget(currentStep.phase.id)
      : await endWorkoutTarget(currentStep.phase.id);

    setIsUpdatingPhase(false);

    if (!phaseResult.success) {
      addToast(phaseResult.message, {
        type: 'error',
      });
      return;
    }

    addToast(phaseResult.message, {
      type: 'success',
    });
    toggleCancelPhase(currentStep.phase.id);
  };

  return (
    <>
      <footer
        className={twMerge('flex items-center justify-between gap-8', 'justify-end', className)}
      >
        <div>
          <Button
            key="target-next-button"
            variant={{ color: 'simple' }}
            disabled={isUpdatingPhase || isSaving}
            onClick={handleToggleCancelPhase}
          >
            {isPhaseCanceled ? 'Retake phase' : 'End phase'}
          </Button>
        </div>
        <main className="flex items-center gap-4">
          <Button key="target-previous-button" variant={{ color: 'subtle' }} onClick={goToPrevStep}>
            {isFirstStep ? 'Cancel' : 'Previous set'}
          </Button>
          <Button
            key="target-next-button"
            variant={{ color: 'primary' }}
            disabled={isSaving || isUpdatingPhase}
            onClick={goToNextStep}
          >
            {isLastStep ? 'Finish training' : 'Next set'}
          </Button>
        </main>
      </footer>
      {/* <ConfirmationTooltip
        isOpen={isShowingConfirmation}
        onClose={() => setIsShowingConfirmation(false)}
        onConfirm={leaveExercise}
      /> */}
    </>
  );
}
