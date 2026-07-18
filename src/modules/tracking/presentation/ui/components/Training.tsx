'use client';

import { twMerge } from 'tailwind-merge';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { TrainingFormProvider } from '@/modules/tracking/presentation/ui/components/training/TrainingFormProvider';
import { TrainingHeaderSteps } from '@/modules/tracking/presentation/ui/components/training/TrainingHeaderSteps';
import { TrainingFormWrapper } from '@/modules/tracking/presentation/ui/components/training/TrainingFormWrapper';
import { TrainingButtons } from '@/modules/tracking/presentation/ui/components/training/TrainingButtons';
import { TrainingAsideData } from '@/modules/tracking/presentation/ui/components/training/TrainingAsideData';

type Props = {
  className?: string;
};

export function Training({ className }: Props) {
  return (
    <PageContainer className={twMerge('flex flex-row gap-8', className)}>
      <div className="flex-1 space-y-8">
        <PageHeader title="Training" description="Let's train" />
        <TrainingFormProvider>
          <PageContent className="space-y-8">
            <TrainingHeaderSteps />
            <main className="min-h-24">
              <TrainingFormWrapper />
            </main>
            <TrainingButtons />
          </PageContent>
        </TrainingFormProvider>
      </div>

      <aside className="w-100 space-y-8">
        <header>
          <h5>Push day</h5>
          <p>Push day focused on push muscles development</p>
        </header>
        <TrainingAsideData />
      </aside>
    </PageContainer>
  );
}
