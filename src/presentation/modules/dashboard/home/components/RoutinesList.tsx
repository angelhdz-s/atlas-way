import { Barbell, Alarm } from '@/presentation/globals/components/Icons';
import { CardTitle } from '../../card/components/CardTitle';

export function RoutinesList({ className = '' }: { className?: string }) {
	return (
		<article className={`flex flex-col gap-4 dashboard-card-default ${className}`}>
			<CardTitle title="Routines" />
			<main>
				<ul className="flex flex-col gap-2">
					<li className="flex flex-col gap-1">
						<header className="">
							<h4 className="text-base fg-strong">1. Push, Pull, Legs</h4>
						</header>
						<ul className="*:leading-none text-default/70 text-sm flex flex-col gap-1">
							<li className="flex gap-2 items-center">
								<Alarm className="size-4" strokeWidth="1.5" />
								<span className="font-light">3 Sessions</span>
							</li>
							<li className="flex gap-2 items-center">
								<Barbell className="size-4" strokeWidth="1.5" />
								<span className="font-light">16 Exercises</span>
							</li>
						</ul>
					</li>
					<li className="flex flex-col gap-1">
						<header className="">
							<h4 className="text-base fg-strong">2. Full Body</h4>
						</header>
						<ul className="*:leading-none text-default/70 text-sm flex flex-col gap-1">
							<li className="flex gap-2 items-center">
								<Alarm className="size-4" strokeWidth="1.5" />
								<span className="font-light">1 Session</span>
							</li>
							<li className="flex gap-2 items-center">
								<Barbell className="size-4" strokeWidth="1.5" />
								<span className="font-light">8 Exercises</span>
							</li>
						</ul>
					</li>
				</ul>
			</main>
		</article>
	);
}
