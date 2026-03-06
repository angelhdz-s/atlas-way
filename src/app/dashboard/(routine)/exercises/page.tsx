import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import {
  type FullExerciseDTO,
  getAllUserExercises,
} from '@/modules/exercise/presentation/exercise.actions';
import { Exercises } from '@/modules/exercise/presentation/components/Exercises';
import { VariantLink } from '@/presentation/modules/button/components/VariantLink';

export default async function ExercisesPage() {
  const exercises: FullExerciseDTO[] = [];
  const exercisesRequest = await getAllUserExercises();
  if (exercisesRequest.data) {
    for (const exercise of exercisesRequest.data) {
      if (exercise) exercises.push(exercise);
    }
  }
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
