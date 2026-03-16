import { IconBarbell } from '@/presentation/globals/components/Icons';
import { CardTags } from '../../../../../presentation/modules/dashboard/card/components/CardTags';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/dashboard/card/components/CardMain';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { CardButton } from '@/presentation/modules/dashboard/card/components/CardButton';
import { SessionExercisesList } from './SessionExerciseList';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';

export function Session({ session }: { session: SessionDTO }) {
  const { name, description, exercises } = session;

  const muscles = exercises.flatMap((e) => e.muscles);
  const muscularGroupsList = muscles.map((m) => m.group.name);

  const muscularGroupsSet = new Set([...muscularGroupsList]);

  const muscularGroups = [...muscularGroupsSet];

  const sortedExercises = exercises.toSorted((a, b) => a.name.localeCompare(b.name));

  return (
    <Card type="dashboard" width="lg">
      <CardHeader
        title={name}
        decoration={<span className="bg-unread block aspect-square size-4 rounded-full"></span>}
      >
        <CardSubHeader
          counters={['1 hour ago', `${exercises.length} exercises`, '0 routines']}
          description={description ?? ''}
        />
      </CardHeader>

      <CardMain>
        <CardTags
          values={muscularGroups.map((m) => ({
            selected: false,
            value: m,
          }))}
        />
        <SessionExercisesList exercises={sortedExercises} />
      </CardMain>
      <CardFooter>
        <CardButton>
          <IconBarbell className="size-6" strokeWidth="1.3" />
          Edit
        </CardButton>
      </CardFooter>
    </Card>
  );
}
