import {
  DAYS,
  type DayWeeksType,
} from '@/presentation/globals/config/defaults';
import type { RoutineType } from '@/presentation/globals/mocks/routines';
import { CardTags } from '@/presentation/modules/dashboard/card/components/CardTags';
import { CalendarWeek } from '@/presentation/globals/components/Icons';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/dashboard/card/components/CardMain';
import { CardButton } from '@/presentation/modules/dashboard/card/components/CardButton';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { RoutineDayItem } from './RoutineDayItem';

export function Routine({ data }: { data: RoutineType }) {
  const {
    name,
    description,
    days,
    exercisesCount,
    date,
    sessions,
  } = data;

  const trainingSessions = days.filter(
    (day) => day.type !== 'rest'
  );
  const sessionsTags = trainingSessions.map((day) => ({
    value: day.name,
    selected: day.status === 'current',
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
            `${exercisesCount} exercises`,
            `${sessions} sessions`,
          ]}
          description={description}
        />
      </CardHeader>
      <CardMain>
        <footer>
          <CardTags values={sessionsTags} />
        </footer>
        <main>
          <ul className="flex flex-wrap items-center gap-2 text-sm">
            {days.map(({ weekDay, type, status }) => (
              <RoutineDayItem
                key={weekDay}
                name={
                  DAYS[weekDay as DayWeeksType].shortName
                }
                type={type}
                status={status}
              />
            ))}
          </ul>
        </main>
      </CardMain>
      <CardFooter>
        <CardButton>
          <CalendarWeek
            className="size-6"
            strokeWidth="1.3"
          />
          Edit
        </CardButton>
      </CardFooter>
    </Card>
  );
}
