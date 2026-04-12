import { DAYS, type DayWeeksType } from '@/presentation/globals/config/defaults';
import { CardTag } from '@/presentation/modules/card/components/CardTag';
import { Card } from '@/presentation/modules/card/components/Card';
import { CardHeader } from '@/presentation/modules/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/card/components/CardMain';
import { RoutineDayItem } from './RoutineDayItem';
import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { CardTagsWrapperFade } from '@/presentation/modules/card/components/CardTagsWrapperFade';

export function Routine({ data }: { data: RoutineDTO }) {
  const { name, routineDays, description } = data;

  const routineDaysSessions = routineDays.map((r) => r.session);

  const sessions = routineDaysSessions.filter((s) => s !== null);

  // const exercises = sessions.flatMap((s) => s.exercises);

  const sessionsTags = sessions.map((s, index) => ({
    value: s.name,
    selected: index === 0,
  }));

  return (
    <Card type="dashboard" width="lg">
      <CardHeader>
        <CardTitle title={name} />
        <CardSubHeader description={description ?? ''} />
      </CardHeader>
      <CardMain>
        <CardTagsWrapperFade>
          {sessionsTags.map((tag) => (
            <CardTag key={tag.value} tag={tag} />
          ))}
        </CardTagsWrapperFade>
        <main>
          <ul className="flex flex-wrap items-center gap-2 text-sm">
            {routineDays.map(({ day, session }) => (
              <RoutineDayItem
                key={day}
                name={DAYS[(day + 1) as DayWeeksType].shortName}
                type={session ? 'training' : 'rest'}
                status="next"
              />
            ))}
          </ul>
        </main>
      </CardMain>
    </Card>
  );
}
