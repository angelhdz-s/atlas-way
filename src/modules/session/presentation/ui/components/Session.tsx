import { Card } from '@/presentation/modules/card/components/Card';
import { CardHeader } from '@/presentation/modules/card/components/CardHeader';
import { CardMain } from '@/presentation/modules/card/components/CardMain';
import { CardSubHeader } from '@/presentation/modules/card/components/CardSubHeader';
import { CardTag } from '../../../../../presentation/modules/card/components/CardTag';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { SessionExercisesList } from './SessionExerciseList';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import { CardTagsWrapperFade } from '@/presentation/modules/card/components/CardTagsWrapperFade';

export function Session({ session }: { session: SessionDTO }) {
  const { name, description, exercises } = session;

  const muscles = exercises.flatMap((e) => e.muscles);
  const muscularGroupsList = muscles.map((m) => m.group.name);

  const muscularGroupsSet = new Set([...muscularGroupsList]);

  const muscularGroups = [...muscularGroupsSet];

  return (
    <Card type="dashboard" width="lg">
      <CardHeader>
        <CardTitle title={name} className="" />
        <CardSubHeader description={description ?? ''} />
      </CardHeader>

      <CardMain>
        <CardTagsWrapperFade>
          {muscularGroups.map((m) => (
            <CardTag key={m} tag={{ value: m, selected: false }} />
          ))}
        </CardTagsWrapperFade>
        <SessionExercisesList exercises={exercises} />
      </CardMain>
    </Card>
  );
}
