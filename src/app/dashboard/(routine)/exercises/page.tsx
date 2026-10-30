import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { getAllUserExercises } from '@/modules/exercise/presentation/exercise.actions';
import { Link } from '@/presentation/modules/button/components/Link';
import { ExercisesTable } from '@/modules/exercise/presentation/components/ExercisesTable';
import { ExerciseEmptyData } from '@/modules/exercise/presentation/components/ExerciseEmptyData';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export const dynamic = 'force-dynamic';

export default async function ExercisesPage() {
  const exercisesRequest = await getAllUserExercises();

  const exercises = exercisesRequest.success ? exercisesRequest.data : [];

  if (exercises.length < 1) return <ExerciseEmptyData />;

  return (
    <PageContainer>
      <header className="flex items-center gap-4">
        <PageHeader title="Exercises" className="flex flex-1 items-center" />
        <Link variant={{ color: 'primary' }} href="/dashboard/exercises/create">
          <Icon icon="plus" variant={{ size: 'md', weight: 'moderate' }} />
          Add Exercise
        </Link>
      </header>
      <PageContent className="flex flex-wrap gap-4">
        <ExercisesTable exercises={exercises} />
      </PageContent>
    </PageContainer>
  );
}
