import { IconTrophy } from '@/presentation/globals/components/icons/outline/IconTrophy';
import { Card } from '@/presentation/modules/card/components/Card';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';

export function TotalSessionsDone({ className = '' }: { className?: string }) {
  return (
    <Card className={`flex flex-col gap-0 ${className}`}>
      <CardTitle Icon={IconTrophy} title="Total Sessions Done" className="text-center" />
      <main className="flex flex-1 flex-col items-center justify-center gap-0">
        <span className="font-funnel-display text-accent text-8xl font-medium tracking-tighter">
          120
        </span>
        <span className="text-fg-default/50 text-base leading-none font-light">Sessions</span>
      </main>
    </Card>
  );
}
