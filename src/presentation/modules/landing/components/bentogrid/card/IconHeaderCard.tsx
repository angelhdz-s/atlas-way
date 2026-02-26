import { IconProps, IconTypes } from '@/presentation/globals/types';
import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
	Icon: React.ComponentType<IconProps>;
	title: string;
	description: string;
};

export function IconHeaderCard({ className, Icon, description, title }: Props) {
	return (
		<BentoCard className={`md:row-span-3 p-2 md:p-0 ${className}`}>
			<main className="flex flex-col gap-2 h-full p-4 overflow-hidden">
				<header className="flex-1 grid place-content-center">
					<figure className="bg-primary rounded-full p-1.5 shadow-lg shadow-primary/50">
						<Icon
							className="size-6 md:size-10 fg-strong mask-b-from-0% mask-b-to-100% mask-b-from-black mask-b-to-black/40"
							strokeWidth="1.5"
						/>
					</figure>
				</header>
				<main className="text-center">
					<header className="font-funnel-display text-xl fg-strong font-bold">
						{title}
					</header>
					<p className="text-base md:text-lg leading-[1.3] fg-default">{description}</p>
				</main>
			</main>
		</BentoCard>
	);
}
