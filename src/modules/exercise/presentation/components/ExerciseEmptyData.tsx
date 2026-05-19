import { EmptyDataPage } from '@/presentation/globals/components/empty-data/EmptyDataPage';
import { Link } from '@/presentation/modules/button/components/Link';
import { IconBarbell } from '@tabler/icons-react';

export function ExerciseEmptyData() {
  return (
    <EmptyDataPage
      Icon={IconBarbell}
      title="No Exercises Found"
      description="You don't have exercises. Create your custom exercises."
    >
      <Link
        variant={{ color: 'primary', type: 'text', size: 'lg' }}
        href="/dashboard/exercises/create"
      >
        Create Exercise
      </Link>
    </EmptyDataPage>
  );
}
