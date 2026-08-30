'use client';

import type { SetForm } from '@/modules/tracking/presentation/schemas/training.schema';
import { Button } from '@/presentation/modules/button/components/Button';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import { useStepFormSync } from '@/presentation/modules/wizard/hooks/useStepFormSync';
import { useWizard } from '@/presentation/modules/wizard/hooks/useWizard';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function TrainingButtons({ className }: Props) {
  const { isLastStep, isFirstStep, cancelledPhaseIds, currentStep } = useStepEngine();
  const { isSaving } = useStepFormSync();

  const { goToNextStep, goToPrevStep, toggleCancelPhase } = useWizard<SetForm>();

  const isPhaseCancelled = cancelledPhaseIds.has(currentStep.phase.id);

  return (
    <>
      <footer
        className={twMerge('flex items-center justify-between gap-8', 'justify-end', className)}
      >
        <div>
          <Button
            key="target-next-button"
            variant={{ color: 'simple' }}
            onClick={() => toggleCancelPhase(currentStep.phase.id)}
          >
            {isPhaseCancelled ? 'Retake phase' : 'End phase'}
          </Button>
        </div>
        <main className="flex items-center gap-4">
          <Button key="target-previous-button" variant={{ color: 'subtle' }} onClick={goToPrevStep}>
            {isFirstStep ? 'Cancel' : 'Previous set'}
          </Button>
          <Button
            key="target-next-button"
            variant={{ color: 'primary' }}
            disabled={isSaving}
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
