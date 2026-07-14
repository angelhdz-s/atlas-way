import { useSessionTrainingForm } from '@/modules/tracking/presentation/ui/hooks/useSessionTrainingForm';
import { useSessionTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useSessionTrainingSteps';
import { Button } from '@/presentation/modules/button/components/Button';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function SessionTrainingButtons({ className }: Props) {
  const { currentStep, trainingState } = useSessionTrainingSteps();
  const { goPreviousStep, goNextStep } = useSessionTrainingForm();
  return (
    <footer className={twMerge('flex items-center justify-end gap-4', className)}>
      <Button key="target-next-button" variant={{ color: 'subtle' }} onClick={goPreviousStep}>
        {currentStep.stage === 1 && currentStep.step === 1 ? 'Cancel' : 'Previous set'}
      </Button>
      {currentStep.stage === trainingState.length && currentStep.step === trainingState.lastStep ? (
        <Button
          key={'session-training-submit-button'}
          variant={{ color: 'primary' }}
          onClick={goNextStep}
          type="submit"
          form="session-training-form"
        >
          Finish training
        </Button>
      ) : (
        <Button
          key={'session-training-next-button'}
          variant={{ color: 'primary' }}
          onClick={goNextStep}
        >
          Next set
        </Button>
      )}
    </footer>
  );
}
