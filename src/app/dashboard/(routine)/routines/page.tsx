import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { Routine } from '@/modules/routine/presentation/ui/components/Routine';
import { Link } from '@/presentation/modules/button/components/Link';
import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export default async function RoutinesPage() {
  const routinesResult = await getAllRoutines();

  const routines = routinesResult.success ? routinesResult.data : [];

  if (routines.length < 1) return <RoutineEmptyData />;

  return (
    <PageContainer>
      <header className="flex items-center gap-4">
        <PageHeader
          title="Your Routines"
          description="Create and manage your routines to automate tasks and workflows."
          className="flex-1"
        />
        <Link variant={{ color: 'primary' }} href="/dashboard/routines/create">
          <Icon icon="plus" variant={{ size: 'md', weight: 'moderate' }} />
          Add Routine
        </Link>
      </header>
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
