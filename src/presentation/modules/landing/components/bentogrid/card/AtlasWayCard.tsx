import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
};

export function AtlasWayCard({ className }: Props) {
	return (
		<BentoCard className={`md:col-span-2 md:row-span-3 p-4 ${className}`}>
			<main className="grid place-content-center h-full p-4 md:p-0">
				<span className="tracking-tighter fg-white text-6xl xs:text-5xl sm:text-7xl lg:text-8xl font-extrabold font-funnel-display">
					<span className="fg-strong">Atlas</span>
					<span className="fg-primary">Way</span>
				</span>
			</main>
		</BentoCard>
	);
}
