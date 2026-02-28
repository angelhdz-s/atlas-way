import Link from 'next/link';
import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import {
  DashboardCardButton,
  DashboardCardFooter,
  DashboardCardHeader,
  DashboardCardMain,
  DashboardCardSubHeader,
  DashboardCardTag,
} from '@/presentation/modules/dashboard/components/Card';
import { Barbell } from '@/presentation/globals/components/Icons';
import {
  type FullExerciseDTO,
  getAllUserExercises,
} from '@/modules/exercise/presentation/exercise.actions';
import { CustomTagPil } from '@/presentation/globals/components/CustomTagPil';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';

function Exercises({
  exercises,
}: {
  exercises: FullExerciseDTO[];
}) {
  return exercises
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, description, muscles, id }) => (
      <Card type="dashboard" width="sm" key={id}>
        <DashboardCardHeader title={name}>
          <DashboardCardSubHeader
            description={description ?? ''}
          />
        </DashboardCardHeader>
        <DashboardCardMain>
          <ul className="flex flex-row flex-wrap items-center gap-1">
            {muscles.map((muscle, index) => (
              <DashboardCardTag
                key={index}
                tag={{
                  value: muscle.name,
                  selected: false,
                }}
              />
            ))}
          </ul>
        </DashboardCardMain>
        <DashboardCardFooter>
          <DashboardCardButton>
            <Barbell className="size-5" />
            Edit
          </DashboardCardButton>
        </DashboardCardFooter>
      </Card>
    ));
}

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
