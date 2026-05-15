import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { getAllUserExercises } from '@/modules/exercise/presentation/exercise.actions';
import { Link } from '@/presentation/modules/button/components/Link';
import { IconPlus } from '@/presentation/globals/components/icons/outline/IconPlus';
import { ExercisesTable } from '@/modules/exercise/presentation/components/ExercisesTable';

export const dynamic = 'force-dynamic';

export default async function ExercisesPage() {
  const exercisesRequest = await getAllUserExercises();

  const exercises = exercisesRequest.success ? exercisesRequest.data : [];

  return (
    <PageContainer>
      <PageHeader title="Exercises" className="flex items-center justify-between">
        <Link
          variant={{ color: 'primary', type: 'iconText' }}
          href="/dashboard/exercises/create"
          Icon={IconPlus}
        >
          Add Exercise
        </Link>
      </PageHeader>
      <PageContent className="flex flex-wrap gap-4">
        <ExercisesTable exercises={exercises} />
      </PageContent>
    </PageContainer>
  );
}
