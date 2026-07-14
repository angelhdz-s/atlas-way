'use client';

import { twMerge } from 'tailwind-merge';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { SessionTrainingHeaderSteps } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingHeaderSteps';
import { SessionTrainingAsideData } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingAsideData';
import { SessionTrainingFormWrapper } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingFormWrapper';
import { SessionTrainingFormProvider } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingFormProvider';
import { SessionTrainingButtons } from '@/modules/tracking/presentation/ui/components/session-training/SessionTrainingButtons';

type Props = {
  className?: string;
};

export function SessionTraining({ className }: Props) {
  return (
    <PageContainer className={twMerge('flex flex-row gap-8', className)}>
      <div className="flex-1 space-y-8">
        <PageHeader title="Training" description="Let's train" />
        <SessionTrainingFormProvider>
          <PageContent className="space-y-8">
            <SessionTrainingHeaderSteps />
            <main className="min-h-24">
              <SessionTrainingFormWrapper />
            </main>
            <SessionTrainingButtons />
          </PageContent>
        </SessionTrainingFormProvider>
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
