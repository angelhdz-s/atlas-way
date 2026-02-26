import { IconsAnimation } from '../IconsAnimation';
import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
};

export function CarruselIcons({ className }: Props) {
	return (
		<BentoCard className={`hidden md:block md:row-span-2 ${className}`}>
			<main className="flex flex-col items-center justify-center gap-3 h-full opacity-20 light:opacity-40">
				<IconsAnimation direction="left" />
				<IconsAnimation direction="right" />
				<IconsAnimation direction="left" />
			</main>
		</BentoCard>
	);
}
