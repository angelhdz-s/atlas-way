import { Circle } from '@/modules/globals/components/Icons';

export function StatisticCircle({
	title,
	porcentage,
	value,
}: {
	title: string;
	porcentage: number;
	value: string;
}) {
	return (
		<div className="relative text-center size-28 grid place-content-center">
			<header className="leading-[1.2] relative z-1 text-sm text-subtle light:text-subtle/60">
				{title}
			</header>
			<main className="leading-[1.2] relative z-1 text-xl ld-main-fg font-funnel-display">
				{value}
			</main>
			<div className="absolute inset-0 rounded-full text-primary">
				<Circle
					className="size-28 -rotate-90"
					strokeWidth="0.5"
					porcentage={porcentage}
					animation
				/>
			</div>
			<div className="absolute left-[50%] top-[50%] translate-[-50%] size-26 rounded-full border-2 border-foreground/10"></div>
		</div>
	);
}
