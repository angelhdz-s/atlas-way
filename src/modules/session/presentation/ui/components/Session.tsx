import { IconBarbell } from '@/presentation/globals/components/Icons';
import { CardTags } from '../../../../../presentation/modules/dashboard/card/components/CardTags';
import type { SessionDayType } from '@/presentation/globals/mocks/sessions';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/dashboard/card/components/CardMain';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { CardButton } from '@/presentation/modules/dashboard/card/components/CardButton';
import { SessionExercisesList } from './SessionExerciseList';

export function Session({
  data,
}: {
  data: SessionDayType;
}) {
  const { name, description, exercises, date, routines } =
    data;

  const muscularGroups = exercises.map(
    (e) => e.muscleGroup
  );

  const distinctMuscularGroups = [
    ...new Set(muscularGroups),
  ];

  const tags = distinctMuscularGroups.map((el) => ({
    value: el,
    selected: false,
  }));

  return (
    <Card type="dashboard" width="lg">
      <CardHeader
        title={name}
        decoration={
          <span className="bg-unread block aspect-square size-4 rounded-full"></span>
        }
      >
        <CardSubHeader
          counters={[
            date,
            `${exercises.length} exercises`,
            `${routines} ${routines === 1 ? 'routine' : 'routines'}`,
          ]}
          description={description}
        />
      </CardHeader>

      <CardMain>
        <CardTags values={tags} />
        <SessionExercisesList
          exercises={exercises.sort((a, b) =>
            a.name.localeCompare(b.name)
          )}
        />
      </CardMain>
      <CardFooter>
        <CardButton>
          <IconBarbell
            className="size-6"
            strokeWidth="1.3"
          />
          Edit
        </CardButton>
      </CardFooter>
    </Card>
  );
}
