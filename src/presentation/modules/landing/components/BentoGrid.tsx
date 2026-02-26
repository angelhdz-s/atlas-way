import { Heart, TrendingUp } from '@/presentation/globals/components/Icons';
import { StartYourJourney } from './bentogrid/card/StartYourJourney';
import { AtlasWayCard } from './bentogrid/card/AtlasWayCard';
import { ScheduleYourSessions } from './bentogrid/card/ScheduleYourSessions';
import { CreateYourOwnRoutines } from './bentogrid/card/CreateYourOwnRoutines';
import { FlexibleRoutines } from './bentogrid/card/FlexibleRoutines';
import { CarruselIcons } from './bentogrid/card/CarruselIcons';
import { GetStartedCard } from './bentogrid/card/GetStartedCard';
import { IconHeaderCard } from './bentogrid/card/IconHeaderCard';

export function BentoGrid({ className = '' }: { className?: string }) {
	return (
		<section className={`w-full max-w-5xl mx-auto my-16 flex flex-col gap-8 ${className}`}>
			<h2 className="font-funnel-display text-4xl font-bold fg-strong">
				Explore Our Features
			</h2>
			<main className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2">
				<StartYourJourney />

				<AtlasWayCard />

				<ScheduleYourSessions />

				<CreateYourOwnRoutines />

				<FlexibleRoutines />

				<IconHeaderCard
					title="Reminders"
					description="Timely reminders for your sessions"
					Icon={Heart}
				/>

				<IconHeaderCard
					title="Statistics"
					description="Track your progress and performance"
					Icon={TrendingUp}
				/>

				<GetStartedCard />

				<CarruselIcons />
			</main>
		</section>
	);
}
