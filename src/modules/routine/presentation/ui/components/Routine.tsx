import { DAYS, type DayWeeksType } from '@/presentation/globals/config/defaults';
import { CardTags } from '@/presentation/modules/dashboard/card/components/CardTags';
import { IconCalendarWeek } from '@/presentation/globals/components/Icons';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/dashboard/card/components/CardMain';
import { CardButton } from '@/presentation/modules/dashboard/card/components/CardButton';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { RoutineDayItem } from './RoutineDayItem';
import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';

export function Routine({ data }: { data: RoutineDTO }) {
  const { name, routineDays, description } = data;

  const routineDaysSessions = routineDays.map((r) => r.session);

  const sessions = routineDaysSessions.filter((s) => s !== null);

  const exercises = sessions.flatMap((s) => s.exercises);

  const sessionsTags = sessions.map((s, index) => ({
    value: s.name,
    selected: index === 0,
  }));

  return (
    <Card type="dashboard" width="lg">
      <CardHeader
        title={name}
        decoration={<span className="bg-unread block aspect-square size-4 rounded-full"></span>}
      >
        <CardSubHeader
          counters={['1 hour ago', `${exercises.length} exercises`, `${sessions.length} sessions`]}
          description={description ?? ''}
        />
      </CardHeader>
      <CardMain>
        <footer>
          <CardTags values={sessionsTags} />
        </footer>
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
      <CardFooter>
        <CardButton>
          <IconCalendarWeek className="size-6" strokeWidth="1.3" />
          Edit
        </CardButton>
      </CardFooter>
    </Card>
  );
}
