import { IconRouteX } from '@tabler/icons-react';
import { EmptyDataPage } from '@/presentation/globals/components/empty-data/EmptyDataPage';
import { Link } from '@/presentation/modules/button/components/Link';

export function RoutineEmptyData() {
  return (
    <EmptyDataPage
      Icon={IconRouteX}
      title="No Routines Found"
      description="You don't have Routines. Create your custom Routines."
    >
      <Link
        variant={{ color: 'primary', type: 'text', size: 'lg' }}
        href="/dashboard/routines/create"
      >
        Create Routine
      </Link>
    </EmptyDataPage>
  );
}
