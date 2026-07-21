import { useTrainingForm } from '@/modules/tracking/presentation/ui/hooks/useTrainingForm';
import { useTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useTrainingSteps';
import { Button } from '@/presentation/modules/button/components/Button';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function TrainingButtons({ className }: Props) {
  const { currentStep, trainingState } = useTrainingSteps();
  const { goPreviousStep, isSubmitting } = useTrainingForm();
  return (
    <footer className={twMerge('flex items-center justify-end gap-4', className)}>
      <Button key="target-next-button" variant={{ color: 'subtle' }} onClick={goPreviousStep}>
        {currentStep.stage === 1 && currentStep.step === 1 ? 'Cancel' : 'Previous set'}
      </Button>
      <Button
        key={'session-training-submit-button'}
        variant={{ color: 'primary' }}
        type="submit"
        form="training-set-form"
        disabled={isSubmitting}
      >
        {currentStep.stage === trainingState.length && currentStep.step === trainingState.lastStep
          ? 'Finish training'
          : 'Next set'}
      </Button>
    </footer>
  );
}
