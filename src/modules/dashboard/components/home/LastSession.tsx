import { SolidCircleCheck } from "@/modules/globals/components/Icons";
import { CardTitle } from "./card/CardTitle";

export function LastSession({ className = "" }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-4 dashboard-card-default ${className}`}
		>
			<CardTitle title="Last Sessions" />
			<main className="flex flex-col gap-4">
				<header className="flex items-center">
					<h4 className="leading-[1] inline font-bold text-xl text-green-600">
						Push Day
					</h4>
					<span className="px-3 py-1 bg-subtle/10 rounded-full ml-2 inline text-sm font-light text-foreground/70">
						Yesterday
					</span>
				</header>
				<main>
					<ul className="font-light font-sm">
						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<SolidCircleCheck className="size-6 text-green-600 mr-1" />
								<span className="leading-[1]">Push Ups</span>
							</main>
							<aside>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>

						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<SolidCircleCheck className="size-6 text-green-600 mr-1" />
								<span className="leading-[1]">Lateral Raises</span>
							</main>
							<aside>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>

						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<SolidCircleCheck className="size-6 text-green-600 mr-1" />
								<span className="leading-[1]">Abs</span>
							</main>
							<aside>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>

						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<SolidCircleCheck className="size-6 text-green-600 mr-1" />
								<span className="leading-[1]">Dips</span>
							</main>
							<aside>
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
