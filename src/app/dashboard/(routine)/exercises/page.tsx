import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { getAllUserExercises } from '@/modules/exercise/presentation/exercise.actions';
import { Exercises } from '@/modules/exercise/presentation/components/Exercises';
import { VariantLink } from '@/presentation/modules/button/components/VariantLink';

export default async function ExercisesPage() {
  const exercisesRequest = await getAllUserExercises();

  const exercises = exercisesRequest.success ? exercisesRequest.data : [];

  return (
    <PageContainer>
      <PageHeader title="Exercises" className="flex items-center justify-between">
        <VariantLink variantConfig={{ color: 'simple' }} href="/dashboard/exercises/create">
          Create Exercise
        </VariantLink>
      </PageHeader>
      <PageContent className="flex flex-wrap gap-4">
        <Exercises exercises={exercises} />
      </PageContent>
    </PageContainer>
  );
}
