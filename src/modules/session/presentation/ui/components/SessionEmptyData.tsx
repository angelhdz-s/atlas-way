import { IconSchema } from '@tabler/icons-react';
import { EmptyDataPage } from '@/presentation/globals/components/empty-data/EmptyDataPage';
import { Link } from '@/presentation/modules/button/components/Link';

export function SessionEmptyData() {
  return (
    <EmptyDataPage
      Icon={IconSchema}
      title="No Sessions Found"
      description="You don't have sessions. Create your custom sessions."
    >
      <Link
        variant={{ color: 'primary', type: 'text', size: 'lg' }}
        href="/dashboard/sessions/create"
      >
        Create Session
      </Link>
    </EmptyDataPage>
  );
}
