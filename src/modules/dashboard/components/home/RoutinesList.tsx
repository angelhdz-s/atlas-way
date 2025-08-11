import { Bolt, Clock } from "@/modules/globals/components/Icons";
import { CardTitle } from "./card/CardTitle";

export function RoutinesList({ className = "" }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2 ${className}`}
		>
			<CardTitle title="Routines" />
			<main>
				<ul className="flex flex-col gap-2">
					<li className="flex flex-col gap-1">
						<header className="">
							<h4 className="text-base ld-main-fg">1. Push, Pull, Legs</h4>
						</header>
						<ul className="*:leading-[1] text-foreground/70 text-sm flex flex-col gap-1">
							<li className="flex gap-2 items-center">
								<Clock className="size-4" strokeWidth="1.5" />
								<span className="font-light">3 Sessions</span>
							</li>
							<li className="flex gap-2 items-center">
								<Bolt className="size-4" strokeWidth="1.5" />
								<span className="font-light">16 Exercises</span>
							</li>
						</ul>
					</li>
					<li className="flex flex-col gap-1">
						<header className="">
							<h4 className="text-base ld-main-fg">2. Full Body</h4>
						</header>
						<ul className="*:leading-[1] text-foreground/70 text-sm flex flex-col gap-1">
							<li className="flex gap-2 items-center">
								<Clock className="size-4" strokeWidth="1.5" />
								<span className="font-light">1 Session</span>
							</li>
							<li className="flex gap-2 items-center">
								<Bolt className="size-4" strokeWidth="1.5" />
								<span className="font-light">8 Exercises</span>
							</li>
						</ul>
					</li>
				</ul>
			</main>
		</article>
	);
}
