import { twMerge } from 'tailwind-merge';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { TrainingHeaderSteps } from '@/modules/tracking/presentation/ui/components/workout/WorkoutHeaderSteps';
import { TrainingFormWrapper } from '@/modules/tracking/presentation/ui/components/workout/WorkoutFormWrapper';
import { TrainingButtons } from '@/modules/tracking/presentation/ui/components/workout/WorkoutButtons';
import { WizardSummary } from '@/presentation/modules/wizard/components/WizardSummary';

type Props = {
  className?: string;
};

/*
ToDo: 
  - [x] Implement cancels for phase and steps
  - [x] Add preliminary integration with DTO response from server actions
  - [x] Update server action to save create/update register for training set
  - [x] Verify persistence of data when page reloaded
  - [x] Add landing step feature to retake wizard where pending
  - [ ] Change naming of Training features/tables by Workout
  - [ ] Add logic to handle the state of the whole TrainingWorkout
  - [ ]
  - [ ] Add last step confirmation feature
  - [ ] Add preliminary final page after success training

When completed:
  - [ ] Add StepEngine, StepFormSync and WizardSummary wizard layers for targets process
  - [ ] Extend certain layers when required for targets process integration
        For example: Configuration for single step phases (when actually there are no phases, just steps)
 */

export function Workout({ className }: Props) {
  return (
    <PageContainer className={twMerge('flex flex-row gap-8', className)}>
      <div className="flex-1 space-y-8">
        <PageHeader title="Training" description="Let's train" />
        <PageContent className="space-y-8">
          <TrainingHeaderSteps />
          <main className="min-h-24">
            <TrainingFormWrapper />
          </main>
          <TrainingButtons />
        </PageContent>
      </div>
      <aside className="w-70 space-y-8">
        <header>
          <h5>Push day</h5>
          <p>Push day focused on push muscles development</p>
        </header>
        <WizardSummary />
      </aside>
    </PageContainer>
  );
}
