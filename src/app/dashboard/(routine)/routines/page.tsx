import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { IconMapPlus } from '@/presentation/globals/components/Icons';
import { ROUTINES } from '@/presentation/globals/mocks/routines';
import { Routine } from '@/modules/routine/presentation/ui/components/Routine';
import { VariantLink } from '@/presentation/modules/button/components/VariantLink';

export default function RoutinesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Your Routines"
        description="Create and manage your routines to automate tasks and workflows."
      >
        <VariantLink
          variantConfig={{ color: 'simple' }}
          href="/dashboard/routines/create"
        >
          <IconMapPlus className="size-5" strokeWidth="2" />
          New Routine
        </VariantLink>
      </PageHeader>
      <PageContent className="flex flex-col gap-4">
        <section className="flex flex-wrap gap-4">
          {ROUTINES.map((routine) => (
            <Routine key={routine.name} data={routine} />
          ))}
        </section>
      </PageContent>
    </PageContainer>
  );
}
