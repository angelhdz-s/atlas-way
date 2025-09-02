import { Circle, CircleCheck, Alarm } from "@/modules/globals/components/Icons";
import { CardTitle } from "../home/card/CardTitle";

export function NextSession({ className = "" }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-4 dashboard-card-default ${className}`}
		>
			<CardTitle title="Next Session" />
			<main className="flex flex-col gap-4">
				<header className="flex items-center">
					<h4 className="leading-[1] inline font-bold text-xl text-accent">
						Push Day
					</h4>
					<span className="inline-flex items-center gap-1 outline-1 outline-accent/50 text-accent px-3 py-1 bg-subtle/10 rounded-full ml-2 text-sm font-light">
						<Alarm className="size-5 -ml-1" strokeWidth="1.5" />
						Today
					</span>
				</header>
				<main>
					<ul className="font-light leading-[1] flex flex-col gap-1">
						<li className="flex justify-between items-center gap-2">
							<main className="flex items-center gap-2">
								<Circle
									className="size-5.5 text-foreground/30 mr-1"
									strokeWidth="1.5"
								/>
								<span className="">Bulgarians</span>
							</main>
							<aside className="flex items-center gap-2">
								<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
									3 x 16
								</span>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>
						<li className="flex justify-between items-center gap-2">
							<main className="flex items-center gap-2">
								<CircleCheck
									className="size-5.5 text-foreground/30 mr-1"
									strokeWidth="1.5"
								/>
								<span className="">Steps</span>
							</main>
							<aside className="flex items-center gap-2">
								<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
									3 x 16
								</span>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>
						<li className="flex justify-between items-center gap-2">
							<main className="flex items-center gap-2">
								<CircleCheck
									className="size-5.5 text-foreground/30 mr-1"
									strokeWidth="1.5"
								/>
								<span className="">Squats</span>
							</main>
							<aside className="flex items-center gap-2">
								<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
									3 x 16
								</span>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>
						<li className="flex justify-between items-center gap-2">
							<main className="flex items-center gap-2">
								<CircleCheck
									className="size-5.5 text-foreground/30 mr-1"
									strokeWidth="1.5"
								/>
								<span className="">Roman Deadlift</span>
							</main>
							<aside className="flex items-center gap-2">
								<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
									3 x 16
								</span>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>
					</ul>
				</main>
			</main>
		</article>
	);
}
