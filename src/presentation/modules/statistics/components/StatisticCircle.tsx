import { Circle } from '@/presentation/globals/components/Icons';

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
			<header className="leading-[1.2] relative z-1 text-sm fg-muted">{title}</header>
			<main className="leading-[1.2] relative z-1 text-xl fg-strong font-funnel-display">
				{value}
			</main>
			<div className="absolute inset-0 rounded-full fg-primary">
				<Circle
					className="size-28 -rotate-90"
					strokeWidth="0.5"
					porcentage={porcentage}
					animation
				/>
			</div>
			<div className="absolute left-[50%] top-[50%] translate-[-50%] size-26 rounded-full border border-bd-default"></div>
		</div>
	);
}
