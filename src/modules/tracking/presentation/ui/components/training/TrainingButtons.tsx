'use client';

import { Button } from '@/presentation/modules/button/components/Button';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import { useStepFormSync } from '@/presentation/modules/wizard/hooks/useStepFormSync';
// import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

// const invalidExerciseStatus: TrainingStage['status'][] = ['COMPLETED', 'CANCELED'];

export function TrainingButtons({ className }: Props) {
  const { isLastStep, isFirstStep } = useStepEngine();
  const { handleNext, handlePrev, isSaving } = useStepFormSync();

  // const [isShowingConfirmation, setIsShowingConfirmation] = useState<boolean>(false);

  return (
    <>
      <footer
        className={twMerge('flex items-center justify-between gap-8', 'justify-end', className)}
      >
        {/* {canLeaveExercise && (
          <div>
            <Button
              key="target-next-button"
              variant={{ color: 'simple' }}
              onClick={() => setIsShowingConfirmation(true)}
            >
              Finish exercise
            </Button>
          </div>
        )} */}
        <main className="flex items-center gap-4">
          <Button key="target-previous-button" variant={{ color: 'subtle' }} onClick={handlePrev}>
            {isFirstStep ? 'Cancel' : 'Previous set'}
          </Button>
          <Button
            key="target-next-button"
            variant={{ color: 'primary' }}
            disabled={isSaving}
            onClick={handleNext}
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
