import type { TrainingStage } from '@/modules/tracking/presentation/ui/contexts/TrainingStepsContext';
import { useTrainingForm } from '@/modules/tracking/presentation/ui/hooks/useTrainingForm';
import { useTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useTrainingSteps';
import { Button } from '@/presentation/modules/button/components/Button';
import { ConfirmationTooltip } from '@/presentation/modules/tooltip/ConfirmationTooltip';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

const invalidExerciseStatus: TrainingStage['status'][] = ['COMPLETED', 'CANCELED'];

export function TrainingButtons({ className }: Props) {
  const { currentStep, trainingState, stageIndex } = useTrainingSteps();
  const { goPreviousStep, isSubmitting, leaveExercise } = useTrainingForm();
  const canLeaveExercise = !invalidExerciseStatus.includes(
    trainingState.stages[stageIndex]?.status ?? 'PENDING'
  );

  const [isShowingConfirmation, setIsShowingConfirmation] = useState<boolean>(false);

  return (
    <>
      <footer
        className={twMerge(
          'flex items-center justify-between gap-8',
          canLeaveExercise ? 'justify-between' : 'justify-end',
          className
        )}
      >
        {canLeaveExercise && (
          <div>
            <Button
              key="target-next-button"
              variant={{ color: 'simple' }}
              onClick={() => setIsShowingConfirmation(true)}
            >
              Finish exercise
            </Button>
          </div>
        )}
        <main className="flex items-center gap-4">
          <Button
            key="target-previous-button"
            variant={{ color: 'subtle' }}
            onClick={goPreviousStep}
          >
            {currentStep.stage === 1 && currentStep.step === 1 ? 'Cancel' : 'Previous set'}
          </Button>
          <Button
            key="target-next-button"
            variant={{ color: 'primary' }}
            type="submit"
            form="training-set-form"
            disabled={isSubmitting}
          >
            {currentStep.stage === trainingState.length &&
            currentStep.step === trainingState.lastStep
              ? 'Finish training'
              : 'Next set'}
          </Button>
        </main>
      </footer>
      <ConfirmationTooltip
        isOpen={isShowingConfirmation}
        onClose={() => setIsShowingConfirmation(false)}
        onConfirm={leaveExercise}
      />
    </>
  );
}
