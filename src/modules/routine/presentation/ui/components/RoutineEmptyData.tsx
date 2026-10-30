import { EmptyDataPage } from '@/presentation/globals/components/empty-data/EmptyDataPage';
import { Link } from '@/presentation/modules/button/components/Link';

export function RoutineEmptyData() {
  return (
    <EmptyDataPage
      icon="waypoints"
      title="No Routines Found"
      description="You don't have Routines. Create your custom Routines."
    >
      <Link variant={{ color: 'primary', size: 'lg' }} href="/dashboard/routines/create">
        Create Routine
      </Link>
    </EmptyDataPage>
  );
}
