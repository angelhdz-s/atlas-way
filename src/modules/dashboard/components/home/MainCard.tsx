import {
	Bolt,
	ClipboardDocumentList,
	Clock,
	MiniCheckCircle,
} from "@/modules/globals/components/Icons";

export function MainCard({ className = "" }: { className?: string }) {
	return (
		<article
			className={`relative flex flex-col gap-4 text-main-foreground p-8 bg-primary overflow-hidden ${className}`}
		>
			<header className="relative z-1">
				<h3 className="text-3xl tracking-tight max-w-100 font-funnel-display">
					Start achieving your goals with{" "}
					<span className="text-accent">AtlasWay</span>
				</h3>
			</header>
			<main className="flex-1 relative z-1 max-w-140 flex flex-col">
				<ul className="*:relative *:flex *:items-start *:gap-2 text-xl flex flex-col gap-2">
					<li>
						<span className="pt-1">
							<MiniCheckCircle className="size-6" />
						</span>
						<span className="flex-1">Create Your Own Path</span>
					</li>
					<li>
						<span className="pt-1">
							<MiniCheckCircle className="size-6" />
						</span>
						<span className="flex-1">{"You Don't Need to Be an Expert"}</span>
					</li>
				</ul>
			</main>
			<footer className="flex items-center justify-center gap-2 relative z-1 w-full *:border *:border-main-foreground/20">
				<button className="flex items-center gap-2 px-4 py-2 rounded-full">
					<ClipboardDocumentList className="size-5" strokeWidth="1.5" />
					Routines
				</button>
				<button className="flex items-center gap-2 px-4 py-2 rounded-full">
					<Clock className="size-5" strokeWidth="1.5" />
					Sessions
				</button>
				<button className="flex items-center gap-2 px-4 py-2 rounded-full">
					<Bolt className="size-5" strokeWidth="1.5" />
					Exercises
				</button>
			</footer>
			<div className="absolute z-0 inset-0 bg-accent mask-radial-[25rem_20rem] mask-radial-at-[110%_60%] mask-radial-from-0 mask-radial-to-100%"></div>
			<div className="absolute z-0 inset-0 bg-secondary mask-radial-[25rem_20rem] mask-radial-at-[50%_100%] mask-radial-from-0 mask-radial-to-100%"></div>
		</article>
	);
}
