import { StartYourJourney } from '@/presentation/modules/landing/components/bentogrid/card/StartYourJourney';
import { AtlasWayCard } from '@/presentation/modules/landing/components/bentogrid/card/AtlasWayCard';
import { ScheduleYourSessions } from '@/presentation/modules/landing/components/bentogrid/card/ScheduleYourSessions';
import { CreateYourOwnRoutines } from '@/presentation/modules/landing/components/bentogrid/card/CreateYourOwnRoutines';
import { FlexibleRoutines } from '@/presentation/modules/landing/components/bentogrid/card/FlexibleRoutines';
import { CarruselIcons } from '@/presentation/modules/landing/components/bentogrid/card/CarruselIcons';
import { GetStartedCard } from '@/presentation/modules/landing/components/bentogrid/card/GetStartedCard';
import { IconHeaderCard } from '@/presentation/modules/landing/components/bentogrid/card/IconHeaderCard';
import { IconHeart } from '@/presentation/globals/components/icons/outline/IconHeart';
import { IconTrendingUp } from '@/presentation/globals/components/icons/outline/IconTrendingUp';

export function BentoGrid({ className = '' }: { className?: string }) {
  return (
    <section className={`mx-auto my-16 flex w-full max-w-5xl flex-col gap-8 ${className}`}>
      <h2 className="font-funnel-display fg-strong text-4xl font-bold">Explore Our Features</h2>
      <main className="xs:grid-cols-2 grid grid-cols-1 gap-2 md:grid-cols-4">
        <StartYourJourney />

        <AtlasWayCard />

        <ScheduleYourSessions />

        <CreateYourOwnRoutines />

        <FlexibleRoutines />

        <IconHeaderCard
          title="Reminders"
          description="Timely reminders for your sessions"
          Icon={IconHeart}
        />

        <IconHeaderCard
          title="Statistics"
          description="Track your progress and performance"
          Icon={IconTrendingUp}
        />

        <GetStartedCard />

        <CarruselIcons />
      </main>
    </section>
  );
}
