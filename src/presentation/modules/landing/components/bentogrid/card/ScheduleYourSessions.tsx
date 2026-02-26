import { DaysSelection } from '../DaysSelection';
import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
};

export function ScheduleYourSessions({ className }: Props) {
	return (
		<BentoCard
			className={`relative md:row-span-2 flex flex-col gap-4 h-full p-4 md:px-0 ${className}`}
		>
			<main className="font-funnel-display fg-strong text-2xl z-3 px-4 py-4 md:py-0 leading-none text-center md:text-right">
				Schedule Your Sessions
			</main>
			<div className="absolute inset-0 flex-1 h-full rounded-b-lg overflow-hidden opacity-40">
				<figure className="absolute left-[50%] translate-x-[-50%] w-fit mx-auto top-2 mask-radial-at-top mask-radial-from-0 mask-radial-to-60% mask-radial-from-black mask-radial-to-black/10">
					<DaysSelection />
				</figure>
			</div>
		</BentoCard>
	);
}
