import { Heart, TrendingUp } from '@/presentation/globals/components/Icons';
import { StartYourJourney } from './bentogrid/advantages/StartYourJourney';
import { AtlasWayCard } from './bentogrid/advantages/AtlasWayCard';
import { ScheduleYourSessions } from './bentogrid/advantages/ScheduleYourSessions';
import { CreateYourOwnRoutines } from './bentogrid/advantages/CreateYourOwnRoutines';
import { FlexibleRoutines } from './bentogrid/advantages/FlexibleRoutines';
import { CarruselIcons } from './bentogrid/advantages/CarruselIcons';
import { GetStartedCard } from './bentogrid/advantages/GetStartedCard';
import { IconHeaderCard } from './bentogrid/IconHeaderCard';

export function BentoGrid({ className = '' }: { className?: string }) {
	return (
		<section className={`w-full max-w-5xl mx-auto my-16 flex flex-col gap-8 ${className}`}>
			<h2 className="font-funnel-display text-4xl font-bold ld-main-fg">
				Explore Our Features
			</h2>
			<main
				className="grid grid-cols-1 xs:grid-cols-2 
				md:grid-cols-4 gap-2
				*:relative *:rounded-lg *:md:min-h-32 *:shadow-2xl 
				*:light:shadow-lg *:shadow-black/10 
				*:light:shadow-slate-400/20"
			>
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
