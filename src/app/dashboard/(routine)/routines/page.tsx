import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { IconPlus } from '@/presentation/globals/components/icons/outline/IconPlus';
import { Routine } from '@/modules/routine/presentation/ui/components/Routine';
import { Link } from '@/presentation/modules/button/components/Link';
import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';

export default async function RoutinesPage() {
  const routinesResult = await getAllRoutines();

  const routines = routinesResult.success ? routinesResult.data : [];

  if (routines.length < 1) return <RoutineEmptyData />;

  return (
    <PageContainer>
      <PageHeader
        title="Your Routines"
        description="Create and manage your routines to automate tasks and workflows."
      >
        <Link
          variant={{ color: 'primary', type: 'iconText' }}
          Icon={IconPlus}
          href="/dashboard/routines/create"
        >
          Add Routine
        </Link>
      </PageHeader>
      <PageContent className="flex flex-col gap-4">
        <section className="flex flex-wrap gap-4">
          {routines.map((routine) => (
            <Routine key={routine.id} data={routine} />
          ))}
        </section>
      </PageContent>
    </PageContainer>
  );
}
