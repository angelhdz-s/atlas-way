import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardTitle } from '../../../presentation/modules/dashboard/card/components/CardTitle';
import { LineChart } from '../../../presentation/modules/statistics/components/Charts';

export function SessionsChart({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <header>
        <CardTitle title="Average of Sessions Completed" />
      </header>
      <main className="mx-auto grid w-fit grid-cols-[auto_1fr] items-center justify-center gap-1">
        <span>%</span>
        <LineChart
          height={200}
          width={400}
          data={[
            { x: 0, y: 3 },
            { x: 1, y: 4 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
          ]}
        />
        <span></span>
        <span className="text-center">Months</span>
      </main>
    </Card>
  );
}
