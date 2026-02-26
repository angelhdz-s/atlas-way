import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
};

export function CreateYourOwnRoutines({ className }: Props) {
	return (
		<BentoCard className={`md:row-span-2 p-2 md:p-0 ${className}`}>
			<main className="grid place-content-center h-full p-4 md:p-0">
				<header className="font-funnel-display max-w-45 text-2xl font-bold text-accent text-center leading-[1.1]">
					Create Your Own Routines
				</header>
			</main>
		</BentoCard>
	);
}
