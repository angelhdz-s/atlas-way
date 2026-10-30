import { EmptyDataPage } from '@/presentation/globals/components/empty-data/EmptyDataPage';
import { Link } from '@/presentation/modules/button/components/Link';

export function SessionEmptyData() {
  return (
    <EmptyDataPage
      icon="clipboard-list"
      title="No Sessions Found"
      description="You don't have sessions. Create your custom sessions."
    >
      <Link variant={{ color: 'primary', size: 'lg' }} href="/dashboard/sessions/create">
        Create Session
      </Link>
    </EmptyDataPage>
  );
}
