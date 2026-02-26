import {
	Barbell,
	MapRoute,
	Alarm,
	SolidCircleCheck,
} from '@/presentation/globals/components/Icons';

export function MainCard({ className = '' }: { className?: string }) {
	return (
		<article
			className={`relative flex flex-col gap-4 dashboard-card fg-strong-dark bg-primary overflow-hidden ${className}`}
		>
			<header className="relative z-1">
				<h3 className="text-2xl tracking-tight max-w-100 font-funnel-display">
					Start achieving your goals with <span className="fg-accent">AtlasWay</span>
				</h3>
			</header>
			<main className="flex-1 relative z-1 max-w-140 flex flex-col">
				<ul className="*:relative *:flex *:items-start *:gap-2 text-lg flex flex-col gap-0">
					<li>
						<span className="pt-1">
							<SolidCircleCheck className="size-6" />
						</span>
						<span className="flex-1">Create Your Own Path</span>
					</li>
					<li>
						<span className="pt-1">
							<SolidCircleCheck className="size-6" />
						</span>
						<span className="flex-1">{"You Don't Need to Be an Expert"}</span>
					</li>
				</ul>
			</main>
			<footer className="text-base flex items-center justify-center gap-2 relative z-1 w-full *:border *:border-bd-strong-light/50 *:flex *:items-center *:gap-2 *:px-3 *:py-1.5 *:rounded-full">
				<button>
					<MapRoute className="size-5" strokeWidth="1.5" />
					Routines
				</button>
				<button>
					<Alarm className="size-5" strokeWidth="1.5" />
					Sessions
				</button>
				<button>
					<Barbell className="size-5" strokeWidth="1.5" />
					Exercises
				</button>
			</footer>
			<div className="absolute z-0 inset-0 bg-accent mask-radial-[25rem_20rem] mask-radial-at-[110%_60%] mask-radial-from-0 mask-radial-to-100%"></div>
			<div className="absolute z-0 inset-0 bg-secondary mask-radial-[25rem_20rem] mask-radial-at-[50%_100%] mask-radial-from-0 mask-radial-to-100%"></div>
		</article>
	);
}
