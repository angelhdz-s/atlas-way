import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { getAllUserExercises } from '@/modules/exercise/presentation/exercise.actions';
import { Link } from '@/presentation/modules/button/components/Link';
import { IconPlus } from '@/presentation/globals/components/icons/Icons';
import { ExercisesTable } from '@/modules/exercise/presentation/components/ExercisesTable';

export default async function ExercisesPage() {
  const exercisesRequest = await getAllUserExercises();

  const exercises = exercisesRequest.success ? exercisesRequest.data : [];

  return (
    <PageContainer>
      <PageHeader title="Exercises" className="flex items-center justify-between">
        <Link
          variantConfig={{ color: 'primary' }}
          href="/dashboard/exercises/create"
          className="gap-1 pl-3"
        >
          <IconPlus className="size-5" strokeWidth="2" />
          Add Exercise
        </Link>
      </PageHeader>
      <PageContent className="flex flex-wrap gap-4">
        <ExercisesTable exercises={exercises} />
      </PageContent>
    </PageContainer>
  );
}
