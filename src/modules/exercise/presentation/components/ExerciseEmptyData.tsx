import { EmptyDataPage } from '@/presentation/globals/components/empty-data/EmptyDataPage';
import { Link } from '@/presentation/modules/button/components/Link';

export function ExerciseEmptyData() {
  return (
    <EmptyDataPage
      icon="dumbbell"
      title="No Exercises Found"
      description="You don't have exercises. Create your custom exercises."
    >
      <Link variant={{ color: 'primary', size: 'lg' }} href="/dashboard/exercises/create">
        Create Exercise
      </Link>
    </EmptyDataPage>
  );
}
