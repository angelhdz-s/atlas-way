import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { IconPlus } from '@/presentation/globals/components/icons/outline/IconPlus';
import { Routine } from '@/modules/routine/presentation/ui/components/Routine';
import { Link } from '@/presentation/modules/button/components/Link';
import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';

export default async function RoutinesPage() {
  const routinesResult = await getAllRoutines();

  const routines = routinesResult.success ? routinesResult.data : [];

  return (
    <PageContainer>
      <PageHeader
        title="Your Routines"
        description="Create and manage your routines to automate tasks and workflows."
      >
        <Link
          variantConfig={{ color: 'primary' }}
          href="/dashboard/routines/create"
          className="gap-1 pl-3"
        >
          <IconPlus className="size-5" strokeWidth="2" />
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
