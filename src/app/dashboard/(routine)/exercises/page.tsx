import Link from 'next/link';
import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import {
  type FullExerciseDTO,
  getAllUserExercises,
} from '@/modules/exercise/presentation/exercise.actions';
import { CustomTagPil } from '@/presentation/globals/components/CustomTagPil';
import { Exercises } from '@/modules/exercise/presentation/components/Exercises';

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
      <PageHeader
        title="Exercises"
        className="flex items-center justify-between"
      >
        <Link href="/dashboard/exercises/create">
          <CustomTagPil Tag="div">
            Create Exercise
          </CustomTagPil>
        </Link>
      </PageHeader>
      <PageContent className="flex flex-wrap gap-8">
        <Exercises exercises={exercises} />
      </PageContent>
    </PageContainer>
  );
}
