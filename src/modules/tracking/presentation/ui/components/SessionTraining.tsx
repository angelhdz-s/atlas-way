'use client';

import { twMerge } from 'tailwind-merge';
import { Button } from '@/presentation/modules/button/components/Button';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { SessionTrainingHeaderSteps } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingHeaderSteps';
import { SessionTrainingAsideData } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingAsideData';
import { useSessionTraining } from '@/modules/tracking/presentation/ui/hooks/useSessionTraining';
import { SessionTrainingFormWrapper } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingFormWrapper';
import { FormProvider } from 'react-hook-form';

type Props = {
  className?: string;
};

export function SessionTraining({ className }: Props) {
  const { methods, currentStep, trainingState, goNextStep, goPreviousStep } = useSessionTraining();

  return (
    <PageContainer className={twMerge('flex flex-row gap-8', className)}>
      <div className="flex-1 space-y-8">
        <PageHeader title="Training" description="Let's train" />
        <PageContent className="space-y-8">
          <SessionTrainingHeaderSteps />
          <main className="min-h-24">
            <FormProvider {...methods}>
              <SessionTrainingFormWrapper />
            </FormProvider>
          </main>
          <footer className="flex items-center justify-end gap-4">
            <Button key="target-next-button" variant={{ color: 'subtle' }} onClick={goPreviousStep}>
              {currentStep.stage === 1 && currentStep.step === 1 ? 'Cancel' : 'Previous set'}
            </Button>
            {currentStep.stage === trainingState.length &&
            currentStep.step === trainingState.lastStep ? (
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
        </PageContent>
      </div>

      <aside className="w-100 space-y-8">
        <header>
          <h5>Push day</h5>
          <p>Push day focused on push muscles development</p>
        </header>
        <SessionTrainingAsideData />
      </aside>
    </PageContainer>
  );
}
