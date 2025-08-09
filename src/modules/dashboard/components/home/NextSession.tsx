import { CircleCheck, Clock } from "@/modules/globals/components/Icons";
import { CardTitle } from "./card/CardTitle";

export function NextSession({ className = "" }: { className?: string }) {
	return (
		<article
			className={`col-span-3 flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 ${className}`}
		>
			<CardTitle title="Next Sessions" />
			<main className="flex flex-col gap-4">
				<header className="flex items-center">
					<h4 className="leading-[1] inline font-bold text-2xl text-accent">
						Push Day
					</h4>
					<span className="inline-flex items-center gap-1 outline-1 outline-accent/50 text-accent px-3 py-1 bg-subtle/10 rounded-full ml-2 text-sm font-light">
						<Clock className="size-5 -ml-1" strokeWidth="1.5" />
						Today
					</span>
				</header>
				<main>
					<ul className="font-light leading-[1]">
						<li className="flex justify-between items-center gap-2">
							<main className="text-lg flex items-center gap-2">
								<CircleCheck
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
							<main className="text-lg flex items-center gap-2">
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
							<main className="text-lg flex items-center gap-2">
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
							<main className="text-lg flex items-center gap-2">
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
