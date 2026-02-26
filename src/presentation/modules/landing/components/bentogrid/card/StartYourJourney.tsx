import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
};

export function StartYourJourney({ className }: Props) {
	return (
		<BentoCard className={`md:row-span-2 p-4 ${className}`}>
			<main className="flex flex-col gap-2 md:gap-4 h-full p-2 md:p-0">
				<header className="text-center md:text-left font-funnel-display font-medium fg-strong text-2xl md:max-w-45 flex-1 leading-none">
					Start Your Journey Now
				</header>
				<footer className="text-center md:text-left text-base font-light leading-[1.2]">
					<p>Totally for free</p>
					<p className="fg-default text-sm">$0/month</p>
				</footer>
			</main>
		</BentoCard>
	);
}
